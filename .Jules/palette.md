## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2026-04-12 - Skip to Content Links
**Learning:** Implementing a 'Skip to Content' link is crucial for keyboard users to bypass repetitive navigation. Next.js App Router projects might not have a global `<main>` tag in `layout.tsx`, requiring the `id="main-content"` target to be added to individual page or layout containers. The target must have `tabIndex={-1}` to receive programmatic focus.
**Action:** Always include a 'Skip to Content' link as the first focusable element in the `<body>` and ensure the target container exists on all pages with `id="main-content"`, `tabIndex={-1}`, and `className="outline-none"`.

## 2026-04-13 - Explicit Button Types in shadcn/ui
**Learning:** Shadcn UI Button components (`<Button>`) do not default to `type="button"` unless explicitly passed or modified. This causes native form submission behaviors and leads to CI build failures in strict Edge environments (like Cloudflare Workers) where implicit button typing is heavily scrutinized.
**Action:** Always modify the base `Button` component in `src/components/ui/button.tsx` to inject `type={asChild ? undefined : (props.type || "button")}` to prevent these silent CI failures while retaining `type="submit"` explicitly when needed.
