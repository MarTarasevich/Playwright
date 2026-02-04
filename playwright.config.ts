// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // testDir убираем с верхнего уровня — он конфликтует с projects
  expect: {
    timeout: 60_000,
  },
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
    {
      name: 'stg-tests',
      testDir: './tests',                    // STG‑тесты
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://stg-connect.careboxhealth.com',
     //   httpCredentials: {
     //     username: 'preview',
     //     password: 'u8u8U*',
     //   },
      },
      testMatch: ['*.spec.ts'],              // только .spec.ts
    },
    {
      name: 'prod-tests',
      testDir: './testsProd',                // PROD‑тесты
      use: { ...devices['Desktop Chrome'] },
      testMatch: ['*.ts'],                   // все .ts файлы
    },
    {
      name: 'testsStg',                      // новая папка
      testDir: './testsStg',
      use: { ...devices['Desktop Chrome'],
          baseURL: 'https://stg-connect.careboxhealth.com',
       httpCredentials: {
         username: 'preview',
         password: 'u8u8U*',
       },
       },
      testMatch: ['*.ts'],                   // все .ts файлы
    },
  ],
});
