## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-26 - Form Accessibility Optimization
**Learning:** Linking error messages to inputs using `aria-describedby` and `aria-invalid` ensures screen readers announce errors properly, but the error elements need an explicit `id` attribute matching the input's description reference.
**Action:** Always provide explicit IDs to error messages and link them back to inputs using `aria-describedby` alongside `aria-invalid` when an error state occurs.
