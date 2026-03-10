## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2025-02-18 - Accessibility Skip-to-Content links with Fixed Nav
**Learning:** When using fixed header navigation, the Skip-to-Content link must have an exceptionally high `z-index` (e.g. `z-[100]`) and should be placed as the first child of `<body>` rather than within `<main>` or other layout wrappers, as Next.js layout structures might otherwise bury it in the DOM preventing it from taking immediate priority focus or layering above the header.
**Action:** Always verify `z-index` on skip links in layout templates and ensure it's the very first element inside `<body>`.
