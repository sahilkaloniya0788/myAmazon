import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/specs',
  timeout: 30 * 1000,
  expect: {
    timeout: 30000
  },
  retries: process.env.CI ? 0 : 0, // Retry once locally
  workers: process.env.CI ? 5 : 5, // Lowered workers for local
  reporter: [['list'], ['junit', { outputFile: 'test-report/junit.xml' }]],
  use: {
    headless: false,
    channel: 'chrome',
    defaultBrowserType: 'chromium',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    viewport: { width: 1920, height: 1080 },
    baseURL: 'https://www.amazon.in/'
  },
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 1080 } },
    },
    // Add more projects for other browsers if needed
  ],
});
