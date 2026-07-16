## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-26 - "Skip to Content" Links in App Router Layouts
**Learning:** Adding a basic skip-to-content link at the top of an app requires wrapping `children` in a focusable container (`tabIndex={-1}`) so keyboard users can actually bypass the navigation and start interacting with the page content. Using a persistent ID like `main-content` on a wrapper `div` around `{children}` in Next.js `layout.tsx` is the cleanest way to ensure it works across all routes without having to add IDs to every single page.
**Action:** When adding accessibility features like "Skip to Content", always ensure the target container (`#main-content`) is explicitly designated, can receive focus without showing an unwanted outline (`outline-none`), and wraps the main page content correctly.
