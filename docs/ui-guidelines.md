# UI Guidelines

## Purpose

This document will define the visual and interaction standards for the Central Monitoring Panel. The current foundation intentionally uses only semantic shadcn/Tailwind tokens.

## Design Direction

- Modern SaaS dashboard.
- Premium industrial IoT monitoring interface.
- Clean enterprise application with restrained density.
- Consistent layouts, controls, spacing, and feedback states.

## Initial Rules

- Use shared components before creating feature-specific UI.
- Use semantic tokens from `src/styles/globals.css`.
- Avoid page-specific palettes, shadows, spacing systems, or typography scales until the design system prompt defines them.
- Keep cards at `8px` radius or less unless the design system changes that rule.
- Use Lucide icons for common actions and Radix-backed primitives where appropriate.

## Future Sections

- Color and semantic token usage.
- Typography scale.
- Dashboard layout patterns.
- Data table patterns.
- Form patterns.
- Loading, empty, and error states.
- Responsive behavior.
