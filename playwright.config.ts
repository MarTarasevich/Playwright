// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  workers: 1,
  use: {
    baseURL: 'https://stg-connect.careboxhealth.com', // ← важная строка
    httpCredentials: {
      username: 'preview',
      password: 'u8u8U*',
    },
   // storageState: 'auth/state.json',
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [{ name: 'Chromium', use: { ...devices['Desktop Chrome'] } }],
});