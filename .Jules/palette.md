## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-27 - Root Layout Skip Links & Main Tag Structure
**Learning:** In the Next.js App Router, the root `layout.tsx` doesn't always contain the `<main>` tag. The `<main>` tag is often placed individually inside specific page or nested layout files (e.g. `page.tsx`, `AdminLayout.tsx`).
**Action:** When adding a global "Skip to Content" link to the root `<body>` tag, verify all relevant page or layout components wrap their content in `<main id="main-content" tabIndex={-1} className="outline-none">` to ensure the link works programmatically everywhere without creating visual outlines when jumping.
