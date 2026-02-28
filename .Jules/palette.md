## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-27 - Custom Button Keyboard Navigation Accessibility
**Learning:** Custom interactive elements (like plain `<button>` tags without a UI library wrapper) in custom components (like `CartDrawer`) often lack default focus rings, severely limiting keyboard navigation accessibility.
**Action:** Always add explicit focus ring classes (e.g., `focus-visible:ring-2 focus-visible:ring-offset-1 outline-none`) to raw interactive elements to ensure visual feedback for keyboard users.
