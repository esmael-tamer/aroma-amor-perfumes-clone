## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-07-27 - Form Accessibility via Explicit htmlFor
**Learning:** React labels nested around inputs (`<label><input/></label>`) are often sufficient for standard clicks, but explicit `htmlFor` and `id` linkage significantly improves reliability for screen readers and avoids tricky event propagation issues, especially for complex custom styling like hidden radio buttons (`type="radio" className="hidden"`).
**Action:** Always explicitly link forms fields to their labels using `htmlFor` and `id` pairs to guarantee robust accessibility, even if visually nested.
