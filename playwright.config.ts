import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  expect: { timeout: 60_000 },
  timeout: 30_000,
  workers: 1,
  use: {
    headless: false,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    // Твои текущие
    { name: 'stg-tests', testDir: './tests', use: { ...devices['Desktop Chrome'], baseURL: 'https://stg-connect.careboxhealth.com' }, testMatch: ['*.spec.ts'] },
    { name: 'prod-tests', testDir: './testsProd', use: { ...devices['Desktop Chrome'] }, testMatch: ['*.ts'] },
    { name: 'testsStg', testDir: './testsStg', use: { ...devices['Desktop Chrome'], baseURL: 'https://stg-connect.careboxhealth.com', httpCredentials: { username: 'preview', password: 'u8u8U*' } }, testMatch: ['*.ts'] },

    // Lilly STG с полным use
    {
      name: 'lilly-stg',
      testDir: './testsStgLilly',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://stg-preview.trials.lilly.com/en-US',
        httpCredentials: { username: 'preview', password: 'u8u8U*' },
        viewport: { width: 1920, height: 1080 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        extraHTTPHeaders: {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
          'Sec-Fetch-Site': 'none',
          'Sec-Fetch-Mode': 'navigate',
        },
        actionTimeout: 60000,
        navigationTimeout: 60000,
      },
      testMatch: ['*.ts'],
    },
  ],
});
