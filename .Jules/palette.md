## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-19 - Checkout Form Accessibility
**Learning:** Adding `id` and `htmlFor` to tie labels to inputs along with `aria-invalid` and `aria-describedby` is a critical and simple accessibility win for complex forms like the checkout page. Next.js does not automatically link them in custom components without explicit attributes.
**Action:** Always ensure custom forms explicitly map labels to their corresponding inputs using `id` and `htmlFor`, and use ARIA attributes to map validation errors to inputs.
