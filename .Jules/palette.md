## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Skip to Content Links
**Learning:** Next.js App Router needs a persistent target for "Skip to Content" links inside the Context Providers to ensure correct programmatic focus shift without a visual focus ring.
**Action:** Always wrap the children in layout.tsx with `<main id="main-content" tabIndex={-1} className="outline-none">` and point the skip link to it.
