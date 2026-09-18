-- MARKET.INK founding beta cohort runtime.
-- Applied to oasis-prod on 2026-09-18.
-- Real candidate details remain private in Supabase.

create table if not exists public.marketink_beta_candidates (
  beta_candidate_id uuid primary key default gen_random_uuid(),
  prospect_id uuid not null unique references public.marketink_prospects(prospect_id) on delete cascade,
  cohort_code text not null default 'FOUNDING_BETA_001',
  decision_maker_status text not null default 'UNRESOLVED'
    check (decision_maker_status in (
      'UNRESOLVED',
      'GENERAL_ROUTE_ONLY',
      'PUBLIC_FOUNDER_ONLY',
      'DECISION_MAKER_PUBLIC',
      'CONFIRMED'
    )),
  decision_maker_contact_id uuid references public.marketink_contacts(contact_id) on delete set null,
  beta_fit_score numeric check (beta_fit_score is null or (beta_fit_score >= 0 and beta_fit_score <= 100)),
  learning_value numeric check (learning_value is null or (learning_value >= 0 and learning_value <= 100)),
  competitive_conflict boolean not null default false,
  capacity_signal text not null default 'UNKNOWN'
    check (capacity_signal in ('UNKNOWN','PUBLIC_AVAILABILITY_SIGNAL','NO_PUBLIC_SIGNAL','NO_CAPACITY')),
  contact_readiness text not null default 'NOT_READY'
    check (contact_readiness in (
      'NOT_READY',
      'GENERAL_ROUTE',
      'ROLE_IDENTIFIED',
      'DECISION_MAKER_RESOLVED',
      'CONFIRMED'
    )),
  status text not null default 'DISCOVERED'
    check (status in (
      'DISCOVERED',
      'ENRICHING',
      'REVIEW',
      'READY_TO_INVITE',
      'INVITED',
      'ENGAGED',
      'ACCEPTED',
      'DECLINED',
      'NURTURE'
    )),
  outreach_block_reason text,
  notes text,
  next_action text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.marketink_beta_candidates enable row level security;
revoke all on public.marketink_beta_candidates from anon, authenticated;
grant select, insert, update, delete on public.marketink_beta_candidates to service_role;

drop trigger if exists marketink_beta_candidates_set_updated_at on public.marketink_beta_candidates;
create trigger marketink_beta_candidates_set_updated_at
before update on public.marketink_beta_candidates
for each row execute function public.marketink_set_updated_at();

comment on table public.marketink_beta_candidates is
  'Private MARKET.INK cohort-specific beta fit/readiness state. Separate from general ICP scoring.';
