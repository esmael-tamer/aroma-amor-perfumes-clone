## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-27 - Skip to Content Links in Next.js App Router
**Learning:** Adding a "Skip to Content" link is a crucial accessibility improvement for keyboard users. In Next.js App Router, the best place to put the target anchor (`id="main-content"`) is in the `app/layout.tsx` file wrapping the `{children}`. It is important to add `tabIndex={-1}` and `outline-none` so it accepts programmatic focus without showing a weird focus ring. Also, in RTL layouts (like Arabic), the "Skip to Content" link should appear on the `right-4` instead of `left-4`.
**Action:** Always wrap `{children}` in `layout.tsx` with a `<div id="main-content" tabIndex={-1} className="outline-none">` and provide a hidden but focusable link at the top of the body to allow screen readers and keyboard users to skip navigation.
