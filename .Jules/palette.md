## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-30 - Workers Builds & ESLint Version
**Learning:** Cloudflare Workers CI builds ("Workers Builds") can fail silently or opaquely if `eslint-config-next` major version mismatches the `next` major version, even if linting is explicitly ignored in `next.config.ts`.
**Action:** Always ensure `eslint-config-next` version strictly matches the installed `next` major version (e.g., v15.x with v15.x).

## 2024-05-30 - Readonly Arrays in Metadata
**Learning:** TypeScript errors occur when assigning `readonly` arrays (from `as const`) to mutable array properties in Next.js `Metadata` (like `keywords`).
**Action:** Cast readonly arrays using `as unknown as string[]` or map them to a new mutable array when assigning to `Metadata` properties.
