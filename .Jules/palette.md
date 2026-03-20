## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-26 - Native Tooltips for Icon-only Buttons
**Learning:** In certain CI environments (like Cloudflare Workers with complex client components), Radix UI Tooltips may cause build failures due to context/portal issues.
**Action:** When working in these specific contexts (e.g., admin panels, complex drawers), use the native HTML `title` attribute on icon-only buttons as a safe, universally compatible fallback to provide tooltips for sighted users.
