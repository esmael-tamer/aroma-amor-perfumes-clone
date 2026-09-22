## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-26 - Missing ARIA Labels on Toggle Buttons
**Learning:** Icon-only toggle buttons (like those used for activating/deactivating items) are easily missed during accessibility audits if they just swap icons (e.g., `ToggleLeft` vs `ToggleRight`) without text.
**Action:** Always add dynamic `aria-label` attributes to stateful toggle buttons that reflect the *action* they will perform (e.g., "تفعيل" / "إلغاء التفعيل").
