## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Accessible Skip Links
**Learning:** For 'Skip to Content' links, target containers must explicitly include `tabIndex={-1}` and `outline-none` to accept programmatic focus without showing a lingering visible outline when the user skips to them. Additionally, RTL sites should map position strictly (e.g. `right-4`).
**Action:** Always add `tabIndex={-1}` and an outline reset (like Tailwind's `outline-none`) to the target `<main id="main-content">` when implementing a skip link.
