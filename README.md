# KTUNOTES Gateway

> **Internal Documentation** — Last updated: 2024-12

## Overview

This repository contains the gateway/landing page for KTUNOTES platform. It serves as the primary entry point and handles initial routing.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
ktunotes.live/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
├── features/              # Feature modules
│   ├── auth/             # Authentication (disabled)
│   ├── analytics/        # Analytics tracking
│   ├── pyq/              # Previous year questions
│   ├── sgpa/             # SGPA calculator
│   └── syllabus/         # Syllabus viewer
├── hooks/                 # Custom React hooks
├── services/             # API service layer
├── config/               # Configuration files
├── lib/                  # Utility libraries
└── types/                # TypeScript definitions
```

## Feature Status

| Feature | Status | Notes |
|---------|--------|-------|
| Landing Page | ✅ Active | Main entry point |
| Auth System | 🔒 Disabled | Pending security audit |
| Notes Access | 🔗 Redirect | Via ktunotes.live |
| Analytics | ⏸️ Paused | GDPR review |
| SGPA Calc | 🚧 WIP | Integration pending |

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | API base URL | No |
| `ANALYTICS_ENDPOINT` | Analytics server | No |

## Deployment

Deployed via Vercel. Push to `main` triggers production deployment.

## Contributing

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for guidelines.

## Related Repositories

- [ktunotes-api](https://github.com/ktunotes/api) - Backend API
- [ktunotes-app](https://github.com/ktunotes/app) - Main application
- [ktunotes-mobile](https://github.com/ktunotes/mobile) - Mobile app
