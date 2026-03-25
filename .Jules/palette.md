## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - Skip Link Positioning in RTL
**Learning:** In RTL layouts (`dir="rtl"`), navigation menus and sidebars are often situated on the right. Positioning the fixed "Skip to Content" link at `top-4 left-4` ensures it remains visually unobscured when focused, avoiding collisions with primary headers. Additionally, it requires a high z-index (e.g., `z-[100]`) to successfully overlap fixed or sticky application headers during focus.
**Action:** Always position screen-reader "Skip to Content" links using `left-4 top-4 z-[100]` for RTL interfaces and ensure they are the immediate first child of `<body>` to guarantee top focus order.
