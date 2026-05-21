## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-20 - Skip To Content Links
**Learning:** For "Skip to Content" links, use `fixed` positioning and `-translate-y-[150%] focus:translate-y-0` rather than `sr-only focus:not-sr-only` to provide smoother visual feedback. Ensure the target container (`<main>`) has `tabIndex={-1}` and `outline-none` to accept programmatic focus properly.
**Action:** Always implement a skip link and ensure its target accepts focus seamlessly.
## 2024-05-20 - Global Skip Links
**Learning:** If you add a "Skip to Content" link to `layout.tsx` so it appears universally, you must ensure that the target container (`id="main-content"`) is also present universally, either by wrapping `{children}` in `layout.tsx` or by adding it to every route.
**Action:** Always verify that universally accessible links have universal targets.
## 2024-05-20 - Global Error Missing Props
**Learning:** For components used as `export default` in Next.js error files, like `global-error.tsx`, ensure they are wrapped to accept props if they define specific signatures, or modify the signature directly to accept `props: any` or default empty `{}` to avoid TS2554.
**Action:** Always verify `global-error.tsx` exports have the right signature.
## 2024-05-20 - Multi-line Grep Warning
**Learning:** When using `grep` to check for missing attributes like `type="button"` in HTML/JSX tags, remember that attributes may be formatted across multiple lines. `grep -v` line-by-line checks will yield false positives.
**Action:** Always verify the full element context (e.g. using a script to parse tags) before making assumptions about missing attributes.
