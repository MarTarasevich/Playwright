import { test, expect } from '@playwright/test';

test('STG opens partner HDSA page', async ({ page }) => {
  await page.goto('https://stg-connect.careboxhealth.com/en-US/partner/hdsa');   // то, что у тебя уже есть

  // Ждём конкретный заголовок
  await expect(
    page.getByRole('heading', { name: 'Hope for tomorrow begins with your involvement today!' })
  ).toBeVisible();
});