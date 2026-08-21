## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-26 - React Form Association Pattern
**Learning:** In React/JSX forms without explicit id generation, mapping `<label htmlFor>` to `<input id>` is frequently missed when inputs are wrapped in generic grid layouts (like in Checkout forms). Visually they appear related but structurally they are divorced.
**Action:** Always ensure that form fields (like `<input>`, `<textarea>`, `<select>`) have an explicit `id` attribute that strictly matches the `htmlFor` of their descriptive `<label>`, especially in checkout flows where accessibility is critical.
