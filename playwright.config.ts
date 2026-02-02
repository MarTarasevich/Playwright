// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  expect: {
    timeout: 60_000,    // все expect ждут 30 сек
  },
  timeout: 30_000,
  workers: 1,
  use: {
    headless: false,
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
  projects: [
    {
      name: 'stg-tests',
      testDir: './tests',
      testMatch: ['*.spec.ts'],
    },
    {
      name: 'prod-tests',
      testDir: './testsProd',
      testMatch: ['*.ts'],
    },
  ],
});