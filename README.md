# River Rafting Booking App

Mobile app for booking river rafting slots. Built with **Expo (React Native + TypeScript)** and **Supabase** (Postgres + Auth).

> Phase 1 status: foundation scaffold. Generic screens and the data structure are in place. Business rules (pricing, capacity, cancellation policy, branding, languages) are filled in once the stakeholder returns the Phase 1 answers.

## Getting started

1. Install dependencies and align Expo versions:
   ```bash
   npm install
   npx expo install --fix
   ```
2. Create a Supabase project, then copy your keys:
   ```bash
   cp .env.example .env
   # fill in EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY
   ```
3. Apply the database schema: run `supabase/schema.sql` in the Supabase SQL editor.
4. Start the app:
   ```bash
   npx expo start
   ```
   Open it in the Expo Go app or an emulator.

## Project structure

| Path | Purpose |
|---|---|
| `app/` | Screens and routes (expo-router) |
| `app/(auth)/` | Login and signup |
| `app/trip/[id].tsx` | Trip detail + slot picker |
| `app/booking/confirm.tsx` | Booking confirmation (reserved, no payment yet) |
| `lib/supabase.ts` | Supabase client |
| `types/` | Shared TypeScript types |
| `constants/theme.ts` | Theme tokens (placeholder branding) |
| `supabase/schema.sql` | Database skeleton |
| `components/`, `hooks/` | Reusable UI and data hooks |

## First milestone

Log in → browse placeholder trips → open a trip → reach a "reserved" confirmation. No real pricing or payment yet. Online payment is a later phase.
