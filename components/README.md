# Components

React components for the KTUNOTES gateway.

## Directory Structure

```
components/
├── ui/           # Base UI components
├── layout/       # Layout components
├── forms/        # Form components
└── shared/       # Shared/utility components
```

## Usage

Import components from their respective directories:

```tsx
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
```

## Component Guidelines

1. Use TypeScript for all components
2. Include JSDoc comments for props
3. Export types alongside components
4. Prefer composition over inheritance

## Status

Most components are in development or planned. See individual README files in subdirectories for status.
