//smoke.CC.ts
import { test, expect } from '@playwright/test';

test('open CC Prod', async ({ page }) => {
  await page.goto('https://connect.careboxhealth.com/en-US');   // то, что у тебя уже есть

  // Ждём конкретный заголовок
  await expect(
    page.getByRole('heading', { name: 'Carebox Connect' })
  ).toBeVisible();
});