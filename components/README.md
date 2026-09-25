# Component organization

- `ui/`: shared shadcn primitives. Keep their generated names and imports stable.
- `brand/`: shared brand assets expressed as components, such as `Logo`.
- `theme/`: the theme provider and reusable theme controls.
- `marketing/`: components owned by the public marketing site. Each feature gets a folder; `header/` owns desktop navigation, mobile navigation, account actions, and their shared link configuration.

Keep `app/` focused on routes, layouts, and page composition. Import components directly from their files; avoid barrel exports that mix server and client components. Use client components only where browser state or interaction requires them.

The root layout currently renders `SiteHeader` so it appears on the home page. When dashboard or authentication shells are introduced, move it into an `app/(marketing)/layout.tsx` route-group layout.

Header destinations are centralized in `marketing/header/navigation.ts`. Their routes (`/features`, `/courses`, `/teach`, `/pricing`, `/login`, `/signup`) are reserved for future pages and are not implemented yet.

The `marketing/hero/` folder owns the home-page hero, decorative background, learner social proof, and non-interactive dashboard illustration. Its background uses the shared grid and theme-aware glow tokens in `app/globals.css`. Dashboard data and social proof reproduce the supplied design and are static examples. Portrait and course thumbnail stand-ins are stored locally in `public/images/marketing/`; they are not the original photographs from the reference.
