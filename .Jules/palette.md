## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-18 - Keyboard Navigation & Focus Management for Main Content
**Learning:** Next.js App Router root layout implementations (`layout.tsx`) cannot enclose the main content area in a `<main>` tag when it wraps route-specific layouts. Consequently, "Skip to Content" accessibility links must be created as client/server components in `layout.tsx`, but target `id="main-content"` tags implemented uniquely inside page and sub-layout components. Adding `tabIndex={-1}` and `className="outline-none"` to `<main>` tags prevents the entire content block from visually showing a focus ring upon skip link activation while properly transferring keyboard focus.
**Action:** Always inject the "Skip to Content" anchor as the first element in `<body>` via the root layout, and verify `<main>` tag implementations in page files dynamically handle the anchor target and avoid visual focus artifacts via `tabIndex={-1}` and `outline-none`.
