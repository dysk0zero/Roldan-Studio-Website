import { defineConfig, devices } from '@playwright/test';

const iosNames = [
  'iPhone 12',
  'iPhone 14',
  'iPhone 14 Pro Max',
  'iPhone SE (3rd gen)'
].filter(n => devices[n]);

const androidNames = [
  'Pixel 5',
  'Pixel 7',
].filter(n => devices[n]);

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4321',
    headless: true,
    screenshot: 'on',
    video: { mode: 'on', size: { width: 1280, height: 720 } },
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'Desktop Chrome',  use: { ...devices['Desktop Chrome'] } },
    { name: 'Desktop Firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'Desktop Safari',  use: { ...devices['Desktop Safari'] } },

    // iPhones → Mobile Safari (WebKit)
    ...iosNames.map(n => ({ name: n, use: { ...devices[n] } })),

    // Android → Mobile Chrome (Chromium)
    ...androidNames.map(n => ({ name: n, use: { ...devices[n] } })),

    // “Small” popular sizes
    {
      name: 'iOS Small 375x667',
      use: {
        browserName: 'webkit',
        viewport: { width: 375, height: 667 },
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
        userAgent: devices['iPhone 12']?.userAgent,
      },
    },
    {
      name: 'Android Small 360x640',
      use: {
        browserName: 'chromium',
        viewport: { width: 360, height: 640 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        userAgent: devices['Pixel 5']?.userAgent,
      },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4321',
    reuseExistingServer: true,
  },
});
