-- MARKET.INK-specific Supabase security hardening.
-- Applied to oasis-prod on 2026-09-18.

alter view public.marketink_prospect_queue set (security_invoker = true);

alter function public.marketink_set_updated_at()
  set search_path = pg_catalog, public;
alter function public.marketink_calc_icp_score(jsonb)
  set search_path = pg_catalog, public;
alter function public.marketink_calc_inkscore(jsonb)
  set search_path = pg_catalog, public;
alter function public.marketink_calc_prospect_priority(numeric,numeric,numeric,numeric)
  set search_path = pg_catalog, public;
alter function public.marketink_icp_tier(numeric)
  set search_path = pg_catalog, public;
alter function public.marketink_outreach_ready(numeric,numeric,text,integer)
  set search_path = pg_catalog, public;
