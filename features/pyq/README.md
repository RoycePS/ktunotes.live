# PYQ Feature

## Overview
Previous Year Questions module for accessing, viewing, and analyzing past examination papers.

## Architecture

```
pyq/
├── components/     # UI components
├── context/        # React context for PYQ state
├── hooks/          # Custom hooks
├── services/       # API integration
├── types/          # TypeScript definitions
└── utils/          # Helper utilities
```

## Features

- [x] View question papers by subject
- [x] Filter by year, exam type, semester
- [x] Download as PDF
- [ ] Solutions viewer (in progress)
- [ ] Question frequency analysis
- [ ] AI-powered important topics

## Data Sources

Question papers are sourced from:
1. Official KTU examination archives
2. User contributions (verified)
3. College repositories (partner institutions)

## Known Limitations

- Papers before 2019 may have OCR quality issues
- Some solutions are community-contributed and unverified
- PDF download may fail for large files on mobile

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/pyq` | GET | List all papers |
| `/api/pyq/:id` | GET | Get specific paper |
| `/api/pyq/search` | POST | Search questions |
| `/api/pyq/:id/download` | GET | Download PDF |

## Configuration

See `config/features.ts` for feature flags related to PYQ.
