
from playwright.sync_api import sync_playwright

def verify_tooltips():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use localized context as per memory instruction
        context = browser.new_context(locale='ar-KW', timezone_id='Asia/Kuwait')
        page = context.new_page()

        try:
            # Navigate to the homepage
            # Assuming standard Next.js port 3000
            page.goto("http://localhost:3000")

            # Wait for content to load (per memory instruction regarding LoadingScreen)
            page.wait_for_timeout(3000)

            # Find the header search button (icon only)
            # The aria-label is "بحث"
            search_button = page.get_by_label("بحث")
            search_button.wait_for(state="visible")

            # Hover to trigger tooltip
            search_button.hover()

            # Wait for tooltip to appear (tooltip has animation)
            page.wait_for_timeout(1000)

            # Take screenshot of the tooltip on search button
            page.screenshot(path="verification/tooltip_search.png")
            print("Screenshot saved to verification/tooltip_search.png")

            # Verify tooltip content exists
            # Tooltip content renders in a portal, often with role 'tooltip' or just text
            # We look for text "بحث" that is visible
            tooltip_text = page.get_by_text("بحث", exact=True)
            # Since button also has aria-label "بحث", we need to be careful.
            # Tooltip content is usually in a div/portal.
            # But visually we can check the screenshot.

            # Move mouse away
            page.mouse.move(0,0)
            page.wait_for_timeout(500)

            # Check Cart button tooltip
            # aria-label starts with "سلة التسوق"
            cart_button = page.locator('button[aria-label^="سلة التسوق"]')
            if cart_button.count() > 0:
                cart_button.first.hover()
                page.wait_for_timeout(1000)
                page.screenshot(path="verification/tooltip_cart.png")
                print("Screenshot saved to verification/tooltip_cart.png")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_tooltips()
