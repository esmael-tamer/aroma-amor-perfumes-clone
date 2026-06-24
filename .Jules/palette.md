## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Dynamic Inline Text Values
**Learning:** For dynamic inline text values that update without a page reload (e.g., cart quantities), screen readers may not automatically announce the change.
**Action:** Add `aria-live='polite'` to the wrapping element (like a `span` containing a quantity) to ensure screen readers naturally announce the updates when the value changes.
