## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-05-18 - Target ID for Skip Links in Next.js Providers
**Learning:** When adding a "Skip to Content" link in a Next.js `layout.tsx` that wraps `{children}` in multiple Context Providers (e.g., `<SiteSettingsProvider>`, `<CartProvider>`), simply pointing the `href` to `#main-content` is insufficient. The target container (`<div id="main-content" tabIndex={-1} className="outline-none">`) MUST be explicitly wrapped around the `{children}` *inside* the layout to ensure the browser can correctly shift programmatic focus into the main React tree upon interaction.
**Action:** Always verify that both the anchor trigger (`href="#id"`) and the explicit target container (`id="id"`) are injected simultaneously when modifying global layouts.
