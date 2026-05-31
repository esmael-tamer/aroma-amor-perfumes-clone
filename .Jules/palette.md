## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-27 - Form input accessibility
**Learning:** React form inputs need `htmlFor` on the `<label>`, `id` on the `<input>`, and `aria-invalid` / `aria-describedby` when errors are present to be accessible for screen readers.
**Action:** Always link form labels to inputs and use `aria-invalid` for form validation errors.
