# Auth Feature

## Overview
Handles user authentication, session management, and authorization for the KTUNOTES platform.

## Status
> **⚠️ Migration In Progress**
> 
> This module is being migrated from JWT-based auth to a hybrid session/token approach.
> Some components may be deprecated or non-functional.

## Architecture

```
auth/
├── components/      # React components for auth UI
├── context/         # Auth context provider
├── hooks/           # Custom hooks for auth state
├── types/           # TypeScript definitions
├── utils/           # Helper functions
└── services/        # API integration (moved to /services/authService)
```

## Usage

```tsx
import { useAuth, ProtectedRoute } from '@/features/auth';

function Dashboard() {
  const { user, isLoading } = useAuth();
  
  if (isLoading) return <Spinner />;
  if (!user) return <Redirect to="/login" />;
  
  return <DashboardContent />;
}
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `AUTH_SECRET` | JWT signing secret | Yes |
| `AUTH_URL` | OAuth callback URL | No |
| `AUTH_GOOGLE_ID` | Google OAuth client ID | No |
| `AUTH_GOOGLE_SECRET` | Google OAuth client secret | No |

## Known Issues

- [ ] Session refresh not working on Safari (AUTH-892)
- [ ] Remember me checkbox has no effect (AUTH-756)
- [ ] Password reset emails delayed by 5-10 min (AUTH-801)

## Related

- [User Feature](/features/user/README.md)
- [Permissions Config](/config/permissions/README.md)
