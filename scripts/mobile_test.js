const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    const outputDir = path.join(__dirname, '..', 'test-results');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    console.log('Starting Mobile View Test...');
    const browser = await puppeteer.launch({
        headless: "new", // Use new headless mode
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Emulate iPhone X
    await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1');

    try {
        console.log('Navigating to http://localhost:3000...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });

        console.log('Page loaded.');
        await page.screenshot({ path: path.join(outputDir, '1-home-mobile.png') });

        // Check if menu is closed initially
        // The menu (ul#sidemenu) should have right: -200px or be invisible.
        // In our CSS, it's styled with inline style.

        // Let's click the hamburger menu
        console.log('Opening menu...');
        await page.click('#menu'); // The hamburger icon ID

        // Wait for animation
        await new Promise(r => setTimeout(r, 600));
        await page.screenshot({ path: path.join(outputDir, '2-menu-open.png') });

        // Verify overlay exists
        const overlay = await page.$('.nav-overlay');
        if (overlay) {
            console.log('SUCCESS: Overlay found when menu is open.');
        } else {
            console.error('FAILURE: Overlay NOT found when menu is open.');
        }

        // Click the overlay to close (click on the left side to avoid the menu on the right)
        console.log('Clicking overlay (left side) to close menu...');
        await page.mouse.click(50, 400);

        // Wait for animation
        await new Promise(r => setTimeout(r, 600));
        await page.screenshot({ path: path.join(outputDir, '3-menu-closed.png') });

        // Verify overlay is gone
        const overlayAfter = await page.$('.nav-overlay');
        if (!overlayAfter) {
            console.log('SUCCESS: Overlay gone after clicking it.');
        } else {
            console.error('FAILURE: Overlay still present.');
        }

    } catch (e) {
        console.error('Error during test:', e);
    } finally {
        await browser.close();
        console.log('Test complete. Screenshots saved to test-results/');
    }
})();
