## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-14 - [Accessibility] Fix missing htmlFor attributes on custom forms
**Learning:** Found that custom forms often lack `htmlFor` attributes matching the input `id`. In accessibility terms, it means screen readers won't associate labels and inputs together, and clicking the label won't focus the input.
**Action:** Always systematically verify that all `<label>` tags have `htmlFor` attributes matching the corresponding input `id` when working with custom forms, and add `id` to inputs where missing.
