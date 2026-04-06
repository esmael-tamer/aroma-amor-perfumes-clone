## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Skip Link Implementation in Next.js App Router
**Learning:** In Next.js App Router projects, the global layout (`layout.tsx`) often doesn't contain the `<main>` tag, requiring the "Skip to Content" anchor (`id="main-content"`) to be placed in individual route pages/layouts. Furthermore, using CSS transforms (`-translate-y-[150%] focus:translate-y-0`) instead of `sr-only` provides a smoother visual experience and avoids Tailwind v4 padding reset quirks.
**Action:** Place SkipLinks in the root layout's `<body>`, but ensure corresponding `<main id="main-content" tabIndex={-1} className="outline-none">` targets are implemented in individual page/layout components.
