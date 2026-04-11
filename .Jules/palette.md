## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-28 - Dynamic Context for Icon Actions
**Learning:** Icon-only action buttons within lists, tables, and modals (like "View Details" or "Delete Order") lack context when read by screen readers. Static `aria-label`s or native `title` attributes aren't sufficient when there are multiple similar items on the page. Additionally, custom buttons often lose default focus indicators.
**Action:** Always provide dynamically generated `aria-label`s containing a unique identifier (like order ID or product name) for icon-only action buttons. Also, ensure keyboard navigability by explicitly adding `focus-visible:ring-2 outline-none` to these custom buttons, and hide decorative icons with `aria-hidden="true"`.
