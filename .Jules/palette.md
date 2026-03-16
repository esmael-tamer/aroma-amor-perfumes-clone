## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Skip Link Placement in App Router
**Learning:** In Next.js App Router where `layout.tsx` lacks a `<main>` tag, the `SkipLink` target (`id="main-content"`) must be defined inside each individual page or view wrapper (e.g., `page.tsx`, `AdminDashboard.tsx`, `CheckoutPage.tsx`), but the `<SkipLink />` component itself still belongs at the very top of `<body>` in `layout.tsx`.
**Action:** Always verify that every view rendered within the root layout contains a reachable `id="main-content"` container with `tabIndex={-1}` and `outline-none` when implementing global skip links.
