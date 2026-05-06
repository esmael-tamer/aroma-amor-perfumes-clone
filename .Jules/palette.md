## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-27 - Polishing CartDrawer Accessibility
**Learning:** Icon-only buttons (like quantity controls and trash buttons) can cause screen-reader noise if the SVG icons aren't explicitly hidden using `aria-hidden="true"`. Also, dynamically updated text elements (like cart quantity) should have `aria-live="polite"` so screen readers announce the changes automatically.
**Action:** Always add `aria-hidden="true"` to decorative icons within buttons that have `aria-label`, and use `aria-live="polite"` on dynamically changing inline values.
