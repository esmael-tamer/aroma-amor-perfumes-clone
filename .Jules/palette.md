## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-24 - Cart Drawer Micro-UX & Accessibility Enhancements
**Learning:** Native disabled `<button>` elements in React/Tailwind do not reliably trigger hover events for `title` attributes, making it difficult to explain *why* a button is disabled (e.g., reaching maximum stock). Also, adding `type="button"` to all native buttons in client components is critical to avoid implicit form submission bugs. Additionally, explicitly adding `focus-visible` ensures custom interactive elements remain accessible via keyboard navigation.
**Action:** Always wrap disabled native buttons in a standard `<div title="...">` to provide reliable tooltips for disabled states. Explicitly add `type="button"` to all standalone icon buttons, use `aria-hidden="true"` on inner SVG icons to avoid redundant screen reader announcements, and apply `focus-visible:ring-2 outline-none` to guarantee clear keyboard focus indicators.
