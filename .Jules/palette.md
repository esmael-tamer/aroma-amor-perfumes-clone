## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2025-02-12 - Ensure proper label associations in complex forms
**Learning:** In complex, custom-styled multi-step forms like checkout pages (e.g., `CheckoutPage.tsx`), it's common for developers to omit the `htmlFor` attribute on labels and `id` on inputs, relying instead on visual proximity. This breaks accessibility for screen reader users, who need programmatic association to understand what each input field represents.
**Action:** Always ensure that `htmlFor` on a `<label>` matches the `id` of its corresponding `<input>` or `<textarea>`. This is especially critical in multi-step forms where user input is required for progression.
