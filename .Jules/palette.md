## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-06-05 - CI Silent Failure related to Next.js + ESLint Version Mismatch
**Learning:** Cloudflare Workers Builds CI failed silently (no logs, generic failure) due to a peer dependency error between `next` (v15.3.5) and `eslint-config-next` (v16.0.1 in `package.json`).
**Action:** Always ensure that `eslint-config-next` matches the `next` package version exactly in `package.json` to prevent silent build failures in strict CI environments.
