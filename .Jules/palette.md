## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-06-25 - Skip to Content Links in Next.js App Router
**Learning:** To prevent unwanted focus rings on the main content wrapper when accessed via a Skip to Content link, it requires `tabIndex={-1}` and an `outline-none` class.
**Action:** In Next.js App Router, implement this by wrapping `{children}` inside `layout.tsx` in a persistent container (e.g., `<div id="main-content">`), and ensure the skip link itself uses `fixed` positioning and RTL-appropriate coordinates (e.g., `right-4`).
