## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2025-03-01 - Add Skip to Content Link for RTL
**Learning:** When implementing Skip to Content links in Arabic/RTL Next.js applications, the link must use `right-4` instead of `left-4` to appear in the logical top-start corner. The main content wrapper must include `tabIndex={-1}` and `outline-none` to accept focus cleanly without a default focus ring.
**Action:** Always ensure absolute/fixed positioning accounts for RTL configurations and use `tabIndex={-1}` on main content wrappers when shifting focus programmatically.
