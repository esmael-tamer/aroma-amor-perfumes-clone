## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Form Label Accessibility
**Learning:** Native `label` elements must be explicitly associated with their input controls using the `htmlFor` attribute matching the input's `id`, rather than just wrapping or preceding them. This ensures screen readers announce the label correctly and clicking the label focuses the input.
**Action:** Always add `htmlFor` to `<label>` and a matching `id` to the corresponding `<input>` or `<textarea>` element in forms.
