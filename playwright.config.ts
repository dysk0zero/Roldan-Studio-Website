import { defineConfig, devices } from '@playwright/test';

const iosNames = [
  'iPhone SE (3rd gen)',
  'iPhone 12',
  'iPhone 14',
  'iPhone 14 Pro Max',
  'iPad Mini',
  'iPad Pro 11'
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

  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4321',
    reuseExistingServer: true,
  },
});
