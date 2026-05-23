## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2026-05-23 - Dynamic aria-label for interactive lists
**Learning:** Interactive list items and icon-only action buttons in tables/lists (like in AdminDashboard) must use dynamic `aria-label`s that incorporate the item's unique identifier (e.g., `order.id`) to provide meaningful context for screen readers, rather than generic static titles. Also inner SVGs must be explicitly hidden with `aria-hidden='true'`.
**Action:** Always add dynamic ARIA labels and explicitly hide inner decorative SVGs from screen readers using `aria-hidden='true'` for icon-only action buttons.
## 2024-05-25 - Explicit `type="button"` on client side
**Learning:** Cloudflare Workers CI build failures caused by missing `type="button"` attributes on client-side components often fail silently with "No annotations available". When fixing these, audit all components across the application to ensure every `<button>` has the attribute, as missing even one will prevent the build from passing.
**Action:** Always add `type="button"` to all client-side buttons unless they specifically need to submit a form.
