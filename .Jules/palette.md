## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-25 - Form Accessibility
**Learning:** Found custom form labels in checkout page without `htmlFor` matching input `id` attributes. This breaks screen reader association.
**Action:** Always verify all `<label>` tags have `htmlFor` correctly matching the `id` of their `<input>` or `<textarea>` in custom forms.
