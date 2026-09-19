## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-06-15 - Missing Header in Layouts
**Learning:** The `/admin` routes (which use `src/components/admin/AdminLayout.tsx`) do not share the main application `Header` (`src/components/sections/header.tsx`).
**Action:** When adding global UI or accessibility elements (like Skip to Content links) to headers, be aware that they will not be present on isolated layout pages like the admin dashboard unless added there separately.
