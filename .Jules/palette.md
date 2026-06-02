## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-06-03 - Icon-only buttons in interactive tables
**Learning:** Icon-only action buttons within data tables (like order details) often lack contextual `aria-label`s and clear focus states, making them challenging for screen reader and keyboard users to navigate. Applying a dynamic `aria-label` based on row context is crucial, along with adding `focus-visible:ring-2 outline-none` to custom native buttons and `aria-hidden="true"` to the decorative inner SVGs.
**Action:** When implementing interactive data tables, ensure every action button has a context-aware `aria-label` (e.g., `aria-label={"View order " + order.id}`), explicitly hide the inner SVG icon, and define explicit keyboard focus states.
