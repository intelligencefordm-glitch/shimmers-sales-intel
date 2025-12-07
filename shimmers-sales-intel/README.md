# Shimmers Sales Intelligence — Starter Repo

This is a starter scaffold for the Shimmers Sales Intelligence project (Next.js + Prisma).
It contains mock data scripts, API stubs, and a simple Event Suggestion API.

## Quick start (local)
1. unzip and open this folder.
2. `npm install`
3. generate mock data: `npm run mock` (requires ts-node)
4. run dev server: `npm run dev`
5. Visit http://localhost:3000

## What is included
- Next.js app with API routes:
  - `/api/events/suggest` — sample event suggester
- scripts/mock_data.ts — generate mock JSON data
- lib/analytics.ts — simple RFM script that reads mock data
- prisma/schema.prisma — DB schema skeleton
