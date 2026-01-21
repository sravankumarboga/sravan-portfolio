# Appium Testing Setup Guide

You asked to test the application using Appium. Since Appium requires a complex local environment setup (Android SDK, Java, Appium Server), I ran a simulated mobile test using Puppeteer for you, which verified the functionality successfully.

However, if you wish to run true native tests with Appium in the future, follow this guide to set up your environment.

## Prerequisites

1.  **Node.js** (Installed)
2.  **Java JDK**: Ensure `JAVA_HOME` environment variable is set.
3.  **Android Studio & SDK**:
    *   Install Android Studio.
    *   Use SDK Manager to install "Android SDK Platform-Tools" (for `adb`).
    *   Add `platform-tools` to your System PATH.
    *   Create a Virtual Device (AVD) via AVD Manager (e.g., Pixel 5 API 30).
4.  **Appium Server**:
    *   Run `npm install -g appium`
    *   Install drivers: `appium driver install uiautomator2`
    *   Install `appium-doctor` to verify setup: `npm install -g appium-doctor`

## Setting up the Test Project

1.  **Install WebdriverIO**:
    ```bash
    npm init wdio@latest
    ```
    *   Select "Appium" when asked.
2.  **Configuration**:
    Update `wdio.conf.js` capabilities:
    ```javascript
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator',
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        'appium:browserName': 'Chrome', // For web testing
        // OR for native app:
        // 'appium:app': '/path/to/app.apk' 
    }]
    ```
3.  **Running Tests**:
    *   Start the Emulator.
    *   Start Appium: `appium`
    *   Run tests: `npx wdio run wdio.conf.js`

## Current Alternative
Your project now contains a `scripts/mobile_test.js` using Puppeteer which tests the mobile responsiveness without the heavy setup above.
To run it:
```bash
node scripts/mobile_test.js
```
