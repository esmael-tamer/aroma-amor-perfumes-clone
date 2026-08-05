## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-08-05 - Skip-to-Content Implementation in App Router
**Learning:** Adding a generic `skip to content` link in an app layout requires a target container to capture the focus. In Next.js App Router, using `layout.tsx` is ideal. However, applying `tabIndex={-1}` to the target can introduce an unwanted visible focus ring on the entire content area on some browsers.
**Action:** When adding a target container for a skip link (e.g., `<div id="main-content">`), always pair `tabIndex={-1}` with `outline-none` (Tailwind) or `outline: none` to ensure the programmatic focus is clean and invisible.
