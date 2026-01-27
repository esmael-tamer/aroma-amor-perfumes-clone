## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2025-01-27 - Custom Drawer Accessibility Gaps
**Learning:** Custom UI components (like `CartDrawer`) often miss standard accessibility features like `Escape` key to close, which are built-in for libraries like Radix UI. Also, icon-only buttons in lists need context-specific `aria-label`s (e.g., include product name) to be useful for screen readers.
**Action:** When auditing custom interactive components, always check for keyboard dismissal (`Escape`) and ensure list actions have specific labels.
