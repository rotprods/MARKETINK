-- MARKET.INK website INKSCAN intake.
-- Applied to oasis-prod on 2026-09-18.
-- Server-side only: anon/authenticated have no table access and cannot execute the RPC.

create table if not exists public.marketink_web_intakes (
  intake_id uuid primary key default gen_random_uuid(),
  request_fingerprint text not null unique,
  organization_id uuid not null references public.marketink_organizations(organization_id) on delete cascade,
  contact_id uuid references public.marketink_contacts(contact_id) on delete set null,
  prospect_id uuid not null references public.marketink_prospects(prospect_id) on delete cascade,
  business_type text not null check (business_type in ('studio','artist')),
  submitted_name text not null,
  city text not null,
  instagram text not null,
  email text not null,
  website text,
  constraint_text text,
  consent_at timestamptz not null default now(),
  source text not null default 'marketink-web',
  status text not null default 'RECEIVED',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.marketink_web_intakes enable row level security;

revoke all on public.marketink_web_intakes from anon, authenticated;
grant select, insert, update on public.marketink_web_intakes to service_role;

create or replace function public.marketink_capture_web_inkscan(
  p_business_type text,
  p_name text,
  p_city text,
  p_instagram text,
  p_email text,
  p_website text default null,
  p_constraint_text text default null,
  p_source text default 'marketink-web'
)
returns table (
  intake_id uuid,
  prospect_id uuid,
  organization_id uuid,
  contact_id uuid,
  created boolean
)
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_org_id uuid;
  v_contact_id uuid;
  v_prospect_id uuid;
  v_intake_id uuid;
  v_org_type text;
  v_name text;
  v_city text;
  v_instagram text;
  v_instagram_url text;
  v_email text;
  v_website text;
  v_constraint text;
  v_org_fingerprint text;
  v_request_fingerprint text;
begin
  v_name := left(btrim(coalesce(p_name,'')), 160);
  v_city := left(btrim(coalesce(p_city,'')), 120);
  v_instagram := left(btrim(coalesce(p_instagram,'')), 160);
  v_email := lower(left(btrim(coalesce(p_email,'')), 254));
  v_website := nullif(left(btrim(coalesce(p_website,'')), 300), '');
  v_constraint := nullif(left(btrim(coalesce(p_constraint_text,'')), 1500), '');

  if p_business_type not in ('studio','artist') then
    raise exception 'invalid_business_type';
  end if;
  if v_name = '' or v_city = '' or v_instagram = '' or v_email = '' then
    raise exception 'missing_required_fields';
  end if;
  if position('@' in v_email) <= 1 then
    raise exception 'invalid_email';
  end if;

  v_org_type := case when p_business_type = 'studio' then 'studio' else 'independent_artist_business' end;

  if left(v_instagram,1) = '@' then
    v_instagram_url := 'https://www.instagram.com/' || substring(v_instagram from 2);
  else
    v_instagram_url := v_instagram;
  end if;

  v_org_fingerprint := md5(
    v_org_type || '|' || lower(v_name) || '|' || lower(v_city) || '|' || lower(v_instagram)
  );

  insert into public.marketink_organizations (
    type, name, city, website_url, instagram_url, source_fingerprint
  )
  values (
    v_org_type, v_name, v_city, v_website, v_instagram_url, v_org_fingerprint
  )
  on conflict (source_fingerprint) do update
    set city = excluded.city,
        website_url = coalesce(excluded.website_url, public.marketink_organizations.website_url),
        instagram_url = coalesce(excluded.instagram_url, public.marketink_organizations.instagram_url),
        updated_at = now()
  returning marketink_organizations.organization_id into v_org_id;

  select c.contact_id
    into v_contact_id
  from public.marketink_contacts c
  where c.organization_id = v_org_id
    and (
      lower(coalesce(c.email,'')) = v_email
      or lower(coalesce(c.instagram_handle,'')) = lower(v_instagram)
    )
  order by c.created_at
  limit 1;

  if v_contact_id is null then
    insert into public.marketink_contacts (
      organization_id, name, role, email, instagram_handle,
      preferred_channel, consent_status, do_not_contact
    )
    values (
      v_org_id,
      v_name,
      case when p_business_type = 'studio' then 'owner_or_manager_unverified' else 'independent_artist' end,
      v_email,
      v_instagram,
      'email',
      'INKSCAN_WEB_REQUEST',
      false
    )
    returning marketink_contacts.contact_id into v_contact_id;
  else
    update public.marketink_contacts
    set name = coalesce(nullif(name,''), v_name),
        email = coalesce(nullif(email,''), v_email),
        instagram_handle = coalesce(nullif(instagram_handle,''), v_instagram),
        consent_status = 'INKSCAN_WEB_REQUEST',
        updated_at = now()
    where marketink_contacts.contact_id = v_contact_id;
  end if;

  select p.prospect_id
    into v_prospect_id
  from public.marketink_prospects p
  where p.organization_id = v_org_id
    and p.lifecycle_stage not in ('DISQUALIFIED','LOST','DO_NOT_CONTACT')
  order by p.created_at
  limit 1;

  if v_prospect_id is null then
    insert into public.marketink_prospects (
      organization_id,
      discovery_source,
      discovery_query,
      lifecycle_stage,
      hard_gate_status,
      next_action,
      owner_agent_id
    )
    values (
      v_org_id,
      coalesce(nullif(left(btrim(p_source),80),''),'marketink-web'),
      'INKSCAN inbound request',
      'DISCOVERED',
      'CLEAR',
      'Review inbound INKSCAN request and enrich evidence',
      'WEB_INTAKE'
    )
    returning marketink_prospects.prospect_id into v_prospect_id;
  else
    update public.marketink_prospects
    set discovery_source = coalesce(discovery_source, coalesce(nullif(left(btrim(p_source),80),''),'marketink-web')),
        next_action = 'Review inbound INKSCAN request and enrich evidence',
        next_action_at = now(),
        updated_at = now()
    where marketink_prospects.prospect_id = v_prospect_id;
  end if;

  v_request_fingerprint := md5(
    v_org_fingerprint || '|' || v_email || '|' || coalesce(v_constraint,'') || '|' || current_date::text
  );

  select w.intake_id
    into v_intake_id
  from public.marketink_web_intakes w
  where w.request_fingerprint = v_request_fingerprint;

  if v_intake_id is not null then
    return query select v_intake_id, v_prospect_id, v_org_id, v_contact_id, false;
    return;
  end if;

  insert into public.marketink_web_intakes (
    request_fingerprint, organization_id, contact_id, prospect_id,
    business_type, submitted_name, city, instagram, email,
    website, constraint_text, source
  )
  values (
    v_request_fingerprint, v_org_id, v_contact_id, v_prospect_id,
    p_business_type, v_name, v_city, v_instagram, v_email,
    v_website, v_constraint, coalesce(nullif(left(btrim(p_source),80),''),'marketink-web')
  )
  returning marketink_web_intakes.intake_id into v_intake_id;

  insert into public.marketink_interactions (
    prospect_id, contact_id, channel, direction, interaction_type,
    content_summary, outcome, next_action, agent_id
  )
  values (
    v_prospect_id,
    v_contact_id,
    'WEB',
    'INBOUND',
    'INKSCAN_REQUEST',
    case when v_constraint is null then 'INKSCAN request received' else 'INKSCAN request: ' || v_constraint end,
    'RECEIVED',
    'Enrich public evidence and assess ICP fit',
    'WEB_INTAKE'
  );

  return query select v_intake_id, v_prospect_id, v_org_id, v_contact_id, true;
end;
$$;

revoke all on function public.marketink_capture_web_inkscan(text,text,text,text,text,text,text,text)
from public, anon, authenticated;

grant execute on function public.marketink_capture_web_inkscan(text,text,text,text,text,text,text,text)
to service_role;

comment on table public.marketink_web_intakes is
  'MARKET.INK website INKSCAN intake ledger. Server-side only; never exposed directly to anon/authenticated roles.';

comment on function public.marketink_capture_web_inkscan(text,text,text,text,text,text,text,text) is
  'Server-only transactional INKSCAN intake. Deduplicates organization/contact/prospect and records inbound interaction.';
