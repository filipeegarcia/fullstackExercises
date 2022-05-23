-- PostgreSQL automatically creates indexes on primary keys and unique constraints. 
-- So the idea here is to create indexes where we don't have indexes yet.

CREATE INDEX account_name_idx ON public.accounts (name);
CREATE INDEX clicks_created_at_idx ON public.clicks (created_at);
CREATE INDEX campaigns_start_date_end_date_idx ON public.campaigns (start_date, end_date);
CREATE INDEX campaigns_created_at_idx ON public.campaigns (created_at);