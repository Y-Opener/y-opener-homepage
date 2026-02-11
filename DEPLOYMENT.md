# Deployment

## Overview

The Y Opener homepage is a static Vite + React + TypeScript SPA deployed on **Vercel** (free tier).

- **Live site:** https://yopener.com (also https://www.yopener.com)
- **Vercel dashboard:** https://vercel.com/quinnyates-projects/y-opener-homepage/settings
- **GitHub repo:** https://github.com/Y-Opener/y-opener-homepage

## Auto-Deploys

The Vercel project is connected to the GitHub repo. **Every push to `main` triggers a production deployment automatically.** No manual deploy steps needed — just push and Vercel handles the rest.

Build command: `npm run build` → outputs to `dist/`.

## DNS (Namecheap)

Domain `yopener.com` is registered on Namecheap. Two DNS records point it to Vercel:

| Type  | Host | Value               |
|-------|------|---------------------|
| A     | @    | 76.76.21.21         |
| CNAME | www  | cname.vercel-dns.com |

SSL is auto-provisioned by Vercel. No manual cert management needed.

## Making Changes

1. Clone the repo and run `npm install`
2. `npm run dev` for local development
3. Push to `main` — Vercel auto-deploys within ~30 seconds
4. Check the Vercel dashboard if a deploy fails

## Contact Form

The contact form uses [FormSubmit](https://formsubmit.co) (sends to `admin@yopener.com`). No backend or API keys required.
