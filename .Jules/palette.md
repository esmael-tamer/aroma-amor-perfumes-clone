## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-26 - Native Button Accessibility Pitfalls
**Learning:** Native `<button>` elements used inside complex components (like Cart Drawers) often lack explicit `type="button"` attributes and clear keyboard focus states (`focus-visible:ring-2`), leading to implicit submit behaviors and poor keyboard navigation. Also, decorative SVGs within these buttons are announced by screen readers if not explicitly hidden.
**Action:** Always add `type="button"`, `outline-none focus-visible:ring-2`, and `aria-hidden="true"` to child SVGs for custom native buttons.
