## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-25 - Skip to Content Links in RTL Apps
**Learning:** For 'Skip to Content' accessibility links in RTL applications, absolute or fixed positioning must adhere to RTL reading direction (e.g., `right-4` instead of `left-4`). Additionally, in Next.js App Router, placing the target ID on a persistent wrapper around `{children}` with `tabIndex={-1}` and `outline-none` ensures the target container receives programmatic focus correctly without showing an unwanted visible focus ring.
**Action:** Always use `right-[value]` positioning for skip links in RTL, and wrap App Router `{children}` in a focusable, outline-free container for reliable skip link targets.
