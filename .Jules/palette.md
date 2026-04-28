## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-25 - Safe Placement of Duplicate IDs
**Learning:** In Next.js with app router, pages are rendered within layouts. If both layouts and pages use the same `id="main-content"`, you end up with duplicate IDs which break accessibility. Placing `id="main-content"` should be done carefully to ensure uniqueness per page.
**Action:** When adding `id="main-content"`, verify the layout structure to guarantee only one such ID is rendered in the DOM tree for any given route.
