## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Skip to Content for RTL Layouts
**Learning:** In RTL layouts (`dir="rtl"`), visually positioned accessibility elements like "Skip to Content" links must use logical positioning (e.g., `right-4` instead of `left-4`) to appear at the start of the document flow, matching the user's reading direction.
**Action:** Always use logical CSS properties or RTL-aware utility classes (like `right-*` in RTL) when absolutely positioning global UI elements.
