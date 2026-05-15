## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.
## 2024-05-27 - Adding SkipLink for Keyboard Accessibility
**Learning:** Implementing "Skip to Content" links provides essential accessibility for keyboard-only users, preventing them from having to navigate through repeating header navigation items on every page load.
**Action:** Use a dedicated SkipLink component placed early in the body and ensure main content areas have id="main-content", tabIndex={-1}, and outline-none.
