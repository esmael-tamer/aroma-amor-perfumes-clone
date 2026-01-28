## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-24 - Custom Overlay Accessibility Gap
**Learning:** Custom overlay components (like `CartDrawer`) built without Primitives often miss standard keyboard interactions like the `Escape` key to close.
**Action:** Always verify keyboard closure support for non-library modals and drawers.
