## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-28 - Missing Form Labels
**Learning:** Custom form layouts often rely on `label` elements that wrap structure or use styling but miss the required `htmlFor` attribute that associates them with the corresponding `input`. This breaks accessibility for screen reader users on key conversion pages like Checkout.
**Action:** Always ensure that `label` tags in custom form layouts explicitly include the `htmlFor` attribute matching the exact `id` of their target `input`.
