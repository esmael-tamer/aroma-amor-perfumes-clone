## 2024-05-23 - Hidden Focus Traps in Overlays
**Learning:** Elements hidden with `opacity-0` (like hover actions) are still focusable by keyboard, creating a confusing "invisible focus" state.
**Action:** Always add `focus-within:opacity-100` (or `group-focus-within` if needed) to the container when using `opacity-0` for hover effects on interactive elements.

## 2024-05-25 - Self-Contained Tooltips
**Learning:** The `Tooltip` component (`@/components/ui/tooltip`) includes its own `TooltipProvider`.
**Action:** Do not wrap the app in a global `TooltipProvider`; simply use `<Tooltip>` locally.

## 2024-03-10 - [Skip to Content]
**Learning:** Found no skip to content link in the application. As this application has a header that's common on many pages, users reliant on keyboard navigation have to tab through all navigation elements to reach the main content. This is a crucial accessibility feature missing in this RTL design.
**Action:** Adding a "skip to content" link that becomes visible on focus at the top of the body/header area. Target main content sections with id="main-content" and tabIndex={-1} for programmatic focus without visual outline.
