const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    const outputDir = path.join(__dirname, '..', 'test-results');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    console.log('Starting Samsung A52 Simulation Test...');
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Emulate Samsung Galaxy A52
    // Viewport: 412 x 915 (common for this class of Samsung devices)
    // User Agent: Android Chrome
    await page.setViewport({ width: 412, height: 915, isMobile: true, hasTouch: true, deviceScaleFactor: 2.6 });
    await page.setUserAgent('Mozilla/5.0 (Linux; Android 11; SM-A525F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36');

    try {
        console.log('Navigating to http://localhost:3000...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });

        console.log('Page loaded on Samsung A52 simulation.');
        await page.screenshot({ path: path.join(outputDir, '1-samsung-home.png') });

        // Open Menu
        console.log('Opening menu...');
        await page.click('#menu');

        // Wait for animation
        await new Promise(r => setTimeout(r, 600));
        await page.screenshot({ path: path.join(outputDir, '2-samsung-menu-open.png') });

        // Verify overlay exists
        const overlay = await page.$('.nav-overlay');
        if (overlay) {
            console.log('SUCCESS: Overlay found when menu is open.');
        } else {
            console.error('FAILURE: Overlay NOT found when menu is open.');
        }

        // Click the overlay to close (coordinate click to avoid menu)
        console.log('Clicking overlay (left side) to close menu...');
        // A52 is wider (412px), clicking at 50,400 is definitely safe on the left
        await page.mouse.click(50, 400);

        // Wait for animation
        await new Promise(r => setTimeout(r, 600));
        await page.screenshot({ path: path.join(outputDir, '3-samsung-menu-closed.png') });

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
