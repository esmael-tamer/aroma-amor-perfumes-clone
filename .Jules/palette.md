## 2024-05-22 - Invisible Focus Traps in Product Cards
**Learning:** Interactive elements nested inside `opacity-0` overlays (for hover effects) create keyboard focus traps where the user focuses on an invisible element.
**Action:** Always add `group-focus-within:opacity-100` (or similar focus-visible logic) to any overlay container that holds interactive elements, ensuring it becomes visible when keyboard users navigate into it.
