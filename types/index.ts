// Core data types. Fields will be finalised once the Phase 1
// stakeholder answers arrive (pricing, capacity, policies).

export type Profile = {
  id: string;          // matches auth user id
  full_name: string | null;
  phone: string | null;
};

export type Trip = {
  id: string;
  name: string;
  description: string | null;
  difficulty: string | null;   // e.g. grade / level
  duration_minutes: number | null;
};

export type Slot = {
  id: string;
  trip_id: string;
  date: string;          // ISO date
  start_time: string;    // HH:MM
  capacity: number;
  seats_booked: number;
};

export type BookingStatus = "reserved" | "cancelled" | "completed";

export type Booking = {
  id: string;
  slot_id: string;
  user_id: string;
  party_size: number;
  status: BookingStatus;
  created_at: string;
};
