## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-07-05 - Implicit vs Explicit Form Labels
**Learning:** While wrapping inputs in a `<label>` provides some accessibility, explicit `id` and `htmlFor` attributes are more robust for screen readers and improve the click area for focus, especially for complex forms or radio button lists. When adding aria-describedby for errors, ensure the error element has a corresponding id.
**Action:** Always link form inputs to labels using `id` and `htmlFor`, and use `aria-invalid` with `aria-describedby` pointing to the error message `id` for better accessibility context on validation failures.
