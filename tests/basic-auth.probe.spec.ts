
import { test, expect } from '@playwright/test';

test('Basic Auth probe', async ({ page }) => {
  // Абсолютный URL исключает влияние baseURL
  await page.goto('https://stg-connect.careboxhealth.com/en-US/partner/hdsa', { waitUntil: 'load', timeout: 30000 });
  // Если Basic Auth пройден, должен загрузиться любой видимый элемент страницы:
  await expect(page.locator('body')).toBeVisible();
});
