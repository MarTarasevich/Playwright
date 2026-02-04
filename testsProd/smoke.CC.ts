// testsProd/smoke.CC.ts
import { test, expect } from '@playwright/test';

test('open CC Prod and test Condition dropdown', async ({ page }) => {
  await page.goto('https://connect.careboxhealth.com/en-US');

  await expect(
    page.getByRole('heading', { name: 'Carebox Connect' })
  ).toBeVisible({ timeout: 15000 });

  await page.getByText('Find a Match', { exact: true }).click();

  // 4. Кликаем на поле "Condition" (только поле, НЕ список!)
  const conditionField = page.getByRole('combobox', { name: 'Condition' });
  await conditionField.click();

  // 5. Ждём появления опции в списке
  await expect(page.getByText('Blood and Lymph Diseases')).toBeVisible({ timeout: 10000 });

  // 6. Кликаем на опцию
  await page.getByText('Blood and Lymph Diseases').click();

  // 7. Проверяем, что значение выбралось (опять ТОЛЬКО в поле!)
  await expect(conditionField).toContainText('Blood and Lymph Diseases');

    // ✅ СКРИНШОТ В КОНЦЕ ТЕСТА (всегда сохраняется)
await page.screenshot({ 
  path: `screenshots/condition-dropdown-${Date.now()}.png`, 
  fullPage: true 
});

  console.log('✅ Condition dropdown test passed');
});
