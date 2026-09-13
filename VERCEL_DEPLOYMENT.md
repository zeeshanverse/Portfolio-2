# Vercel deployment — Portfolio-Zeeshan

This repository is a pnpm/Turborepo monorepo. The public portfolio is `apps/web` and the Express API remains a separate service.

## Recommended Vercel setup

1. Push this project to a **new GitHub repository**.
2. Import the repository into Vercel.
3. In **Project Settings → Build and Deployment**, set **Root Directory** to `apps/web`.
4. Keep the framework as **Next.js**.
5. Vercel will use the workspace's pnpm setup. If prompted, use Node.js 22 or newer.

## Environment variables

Set these in Vercel (Production and Preview as appropriate):

- `NEXT_PUBLIC_API_URL` — the public URL of the separately hosted API, ending in `/v1`.
- `NEXT_PUBLIC_API_URL_ORIGIN` — the public URL of this Vercel portfolio, for example `https://your-portfolio.vercel.app`.
- `NEXT_PUBLIC_CLARITY_PROJECT_ID` — optional.
- `NEXT_PUBLIC_GLITCHTIP_DSN` — optional.
- Any AI variables required by your API are configured on the API host, not in the browser deployment.

## Important architecture note

The Next.js app is the frontend. Contact forms, AI chat, authentication and other API-backed functionality depend on `NEXT_PUBLIC_API_URL`. Keep the API deployed on its existing backend host (for example Render) and point the Vercel frontend at that API.

Do **not** put database credentials, SMTP passwords, API secrets, or private keys in `NEXT_PUBLIC_*` variables.

## Local verification

From the repository root:

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm --filter @portfolio/web build
```

Then deploy through Vercel's Git integration. Every push to the selected branch can trigger a new deployment.
