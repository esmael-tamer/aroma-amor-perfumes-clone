## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Native Disabled Button Tooltips
**Learning:** Native disabled `<button>` elements do not trigger hover events, which breaks tooltips (`title` attribute or custom `Tooltip` components) wrapping them. Additionally, Tailwind hover styles on disabled buttons can cause confusing visual artifacts if not explicitly negated.
**Action:** Always wrap disabled native buttons in a `div` containing the `title` attribute to ensure the tooltip is accessible while preserving the button's disabled state. Additionally, use disabled variants to explicitly negate hover effects (e.g., `disabled:hover:bg-transparent disabled:hover:text-inherit`).
