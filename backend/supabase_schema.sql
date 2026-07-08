create table if not exists bookings (
  id text primary key,
  "paymentId" text not null,
  "orderId" text not null,
  "packageName" text not null,
  amount numeric not null,
  email text not null,
  phone text not null,
  status text not null default 'confirmed',
  "createdAt" timestamptz not null default now()
);

create index if not exists bookings_created_at_idx on bookings ("createdAt" desc);
