SELECT 
 account.id                           AS account_id
 account.name                         AS account_name
 TO_CHAR(click.created_at, "YYYY-MM") AS month
 count(click.id)                      AS num_clicks 
    FROM public.accounts AS account
    LEFT JOIN public.campaigns AS campaign ON campaign.account_id = account.id 
    AND campaign.created_at > CURRENT_DATE - INTERVAL '6 months' 
    AND campaign.end_date > campaign.start_date + INTERVAL '7 days'
    LEFT JOIN public.clicks AS click ON campaign.id = click.campaign_id
    WHERE account.active = true
    GROUP BY account.id, TO_CHAR(click.created_at, 'YYYY-MM');