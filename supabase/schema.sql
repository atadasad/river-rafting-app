-- River Rafting App — skeleton schema (Phase 1 / 2 foundation)
-- Field details (pricing, capacity defaults, policy rules) are confirmed
-- AFTER the stakeholder returns the Phase 1 answers. This is the structure.

-- Profiles: one row per authenticated user.
create table if not exists profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  phone text
);

-- Trips: a route / offering the business sells.
create table if not exists trips (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  difficulty text,
  duration_minutes int
);

-- Slots: a specific bookable departure of a trip.
create table if not exists slots (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid not null references trips (id) on delete cascade,
  date date not null,
  start_time time not null,
  capacity int not null check (capacity >= 0),
  seats_booked int not null default 0 check (seats_booked >= 0),
  check (seats_booked <= capacity)
);

-- Bookings: a customer reservation against a slot.
create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  slot_id uuid not null references slots (id) on delete restrict,
  user_id uuid not null references auth.users (id) on delete cascade,
  party_size int not null check (party_size > 0),
  status text not null default 'reserved'
    check (status in ('reserved', 'cancelled', 'completed')),
  created_at timestamptz not null default now()
);

-- Row Level Security: users can only see and manage their own bookings.
alter table bookings enable row level security;

create policy "own bookings - select" on bookings
  for select using (auth.uid() = user_id);
create policy "own bookings - insert" on bookings
  for insert with check (auth.uid() = user_id);
create policy "own bookings - update" on bookings
  for update using (auth.uid() = user_id);

-- Trips and slots are public to read.
alter table trips enable row level security;
alter table slots enable row level security;
create policy "trips readable" on trips for select using (true);
create policy "slots readable" on slots for select using (true);
