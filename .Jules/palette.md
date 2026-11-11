## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-03-20 - Ensure Native Buttons Are Fully Accessible
**Learning:** Native `<button>` elements in interactive components (like sidebars and carts) often omit `type="button"` which can lead to accidental form submissions, and frequently lack custom `focus-visible` styles causing issues for keyboard navigation users.
**Action:** When working on interactive UI like standard custom menus, dialogs or cart drawers, I should routinely verify and add `type="button"` and `focus-visible:outline-none focus-visible:ring-2` to native `<button>` tags.
