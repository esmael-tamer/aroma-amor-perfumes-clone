## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-27 - Skip to Content Links in Next.js App Router
**Learning:** In Next.js App Router, since `<main>` often lives in page components (e.g. `page.tsx`) rather than the root layout, implementing a global 'Skip to Content' link requires inserting the link component in `layout.tsx` (as the first child of `<body>`) but ensuring every individual page/layout explicitly defines the target `<main id="main-content" tabIndex={-1} className="outline-none">`.
**Action:** When adding global accessibility features like skip links, coordinate between the root layout (for the trigger) and leaf components (for the target anchors), using `tabIndex={-1}` and `outline-none` on the target to ensure smooth programmatic focus transfer without visual glitches.
