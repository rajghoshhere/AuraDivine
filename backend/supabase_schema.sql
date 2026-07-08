create table if not exists bookings (
  id text primary key,
  "paymentId" text not null,
  "orderId" text not null,
  "packageName" text not null,
  amount numeric not null,
  email text not null,
  phone text not null,
  status text not null default 'confirmed',
  "createdAt" timestamptz not null default now(),
  "sessionStart" timestamptz,
  "sessionEnd" timestamptz,
  "calBookingUid" text,
  "calRawPayload" jsonb
);

create index if not exists bookings_created_at_idx on bookings ("createdAt" desc);

-- Run these if the table already exists from before the session-time columns were added:
alter table bookings add column if not exists "sessionStart" timestamptz;
alter table bookings add column if not exists "sessionEnd" timestamptz;
alter table bookings add column if not exists "calBookingUid" text;
alter table bookings add column if not exists "calRawPayload" jsonb;
