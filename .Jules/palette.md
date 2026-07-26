## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-07-26 - Skip to Content Links in RTL Apps
**Learning:** To ensure target containers for 'Skip to Content' links accept programmatic focus properly without showing an unwanted visible focus ring, add `tabIndex={-1}` and Tailwind's `outline-none` class to the target element. Place this ID on a persistent wrapper around `{children}` in `layout.tsx` (e.g., `<div id="main-content">`) rather than page-level tags. In RTL interfaces (`dir="rtl"`), use logical positioning (e.g., `right-4`) instead of `left-4` to position at the logical 'start'.
**Action:** When implementing 'Skip to Content' links, always wrap the main application `{children}` in `layout.tsx` with a focusable, un-styled container (`tabIndex={-1} className="outline-none"`) and position the hidden link logically for RTL if applicable.
