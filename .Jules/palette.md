## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2025-05-28 - Skip Link Pattern
**Learning:** For users who rely on keyboard navigation, adding a "Skip to Content" link at the beginning of the document allows them to quickly jump to the main content, bypassing lengthy navigation headers. This improves the overall accessibility of the site.
**Action:** Create a dedicated skip-link component with a fixed position, positioned correctly in an RTL layout, that becomes visible when focused, and add it to the root layout.
