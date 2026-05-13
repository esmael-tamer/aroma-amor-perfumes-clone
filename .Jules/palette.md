## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2026-05-13 - [Form Accessibility in Checkout]
**Learning:** Large forms built with custom Next.js/React markup often omit `htmlFor` and `id` linkages, severely degrading screen reader experience and mobile usability (e.g., clicking label to focus input or toggle radios). Using a simple script to map `name` attributes to `id` and `htmlFor` is an efficient way to retrofit basic accessibility across many inputs at once.
**Action:** Always ensure that every `<label>` has an `htmlFor` matching the `id` of its respective `<input>`, `<select>`, or `<textarea>`, especially in custom form flows like checkout pages.
