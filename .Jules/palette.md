## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2026-04-24 - Form Accessibility Label Linking
**Learning:** For forms to be truly accessible to screen readers, and to improve the click target area, inputs must explicitly link to their labels using `id` and `htmlFor`. Additionally, when errors are present, they should be programmatically linked using `aria-invalid` and `aria-describedby`.
**Action:** When creating forms, always add `id` on `<input>` or `<textarea>`, the corresponding `htmlFor` on `<label>`, and `aria-invalid={!!errors.field}` / `aria-describedby={errors.field ? 'field-error' : undefined}` to ensure robust accessibility.
