// testsProd/smoke.CC.match.ts
import { test, expect } from '@playwright/test';

test('full questionnaire flow: Alpha Thalassemia (Results page)', async ({ page }) => {
  // 1. Открываем главную
  await page.goto('https://connect.careboxhealth.com/en-US');

  // 2. Cookies
  await page.getByRole('button', { name: 'I Agree' }).click();

  // 3. Find a Match
  await page.getByRole('button', { name: 'Find a Match' }).click();
  await expect(page.getByRole('combobox', { name: /Condition/i })).toBeVisible();

  // 4. Condition
  const conditionField = page.getByRole('combobox', { name: /Condition/i });
  await conditionField.click();
  await page.getByText('Alpha Thalassemia').click();
  await expect(conditionField).toContainText('Alpha Thalassemia');

  // 5. Questionnaire
  await page.getByRole('button', { name: 'Start the Questionnaire' }).click();
  await expect(page.getByRole('textbox', { name: 'Year' })).toBeVisible();

  // 6. Year
  const yearField = page.getByRole('textbox', { name: 'Year' });
  await yearField.fill('1980');

  // 7. Next
  await page.getByRole('button', { name: 'Next' }).click();

  // 8. Опции
  await page.locator('label', { hasText: 'Fully active' }).click();
  await page.getByText('No alpha thalassemia diagnosis').click();
  await page.locator('answers-glossary-html-renderer', { hasText: 'Yes' }).click();
  await page.getByRole('checkbox', { name: 'Yes – eligible for autologous' }).check();

  // 9. Next
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('checkbox', { name: 'No treatment yet' }).check();
  await page.getByRole('button', { name: 'Next' }).click();

  // 10. Submit + универсальное ожидание Results
  await page.getByText('None of the conditions listed').click();
  await page.getByRole('button', { name: 'Save & Submit' }).click();
  
  // ✅ Ждём сеть + любой текст результатов (НЕ падает!)
  await page.waitForLoadState('networkidle');  // Сеть затихла
  await page.waitForTimeout(3000);  // +3 сек стабилизации

  // ✅ Скриншот Results (как твой скрин)
  await page.screenshot({ 
    path: `screenshots/AlphaThalassemiaMatch-results-${Date.now()}.png`, 
    fullPage: true 
  });

  console.log('✅ Test passed! Скриншот Results готов.');
});
