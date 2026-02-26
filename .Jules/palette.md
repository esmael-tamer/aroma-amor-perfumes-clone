## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2025-11-23 - Accessible Skip Link Pattern
**Learning:** Skip links must be the first interactive element in the DOM and require specific focus management (`tabIndex={-1}`, `outline-none`) on the target container to work smoothly across browsers.
**Action:** Use the established pattern: absolute positioning with `sr-only` / `focus:not-sr-only` for the link, and `id="main-content"` with `tabIndex={-1}` for the main container.

## 2024-05-22 - Skip Link Implementation in Next.js App Router
**Learning:** In Next.js App Router, the root layout often wraps providers but doesn't control the main content structure directly. The skip link target (`id="main-content"`) must be placed on the actual `<main>` element within page components or specific layouts (like `AdminLayout`) to ensure correct focus management.
**Action:** When adding skip links, verify the target ID exists on all major page types (static pages, dynamic routes, admin dashboards) and includes `tabIndex={-1}` + `outline-none` to receive focus without visual artifacts.

## 2024-05-22 - Cloudflare Workers Build Constraints
**Learning:** Cloudflare Workers builds fail if client-side code references Node.js-specific types like `NodeJS.Timeout` (even in `useRef`).
**Action:** Use `any` or `ReturnType<typeof setTimeout>` for timer refs in client components to ensure compatibility with Edge runtimes.
