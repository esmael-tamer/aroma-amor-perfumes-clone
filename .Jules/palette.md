## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2026-06-12 - Form Accessibility: Linking Labels and Inputs
**Learning:** Adding `id` to inputs and matching `htmlFor` to labels significantly improves accessibility. It allows screen readers to correctly announce the label text when the input is focused, and it provides a larger click target since clicking the label will focus the input.
**Action:** Always ensure form fields are semantically linked with their corresponding labels using explicit `id` and `htmlFor` attributes to improve UX for all users.
