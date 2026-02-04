// testsProd/smoke.CC.notMatch.ts
import { test, expect } from '@playwright/test';

test('Cushing Syndrome questionnaire flow', async ({ page }) => {
  // 1. Открываем главную
  await page.goto('https://connect.careboxhealth.com/en-US');
  await page.getByRole('button', { name: 'I Agree' }).click();

  // 2. Find a Match → Endocrine and Metabolic → Cushing's
  await page.getByRole('button', { name: 'Find a Match' }).click();
  await expect(page.getByRole('combobox', { name: /Condition/i })).toBeVisible();

  const conditionField = page.getByRole('combobox', { name: /Condition/i });
  await conditionField.click();
  await page.getByText('Endocrine and Metabolic').click();
  await expect(conditionField).toContainText('Endocrine and Metabolic');

  await page.getByText('Select a Questionnaire', { exact: true }).click();
  await page.getByText("Cushing's Syndrome").click();  // Экранирование не нужно в коде

  // 3. Start Questionnaire
  await page.getByRole('button', { name: 'Start the Questionnaire' }).click();
  await expect(page.getByRole('textbox', { name: 'Year' })).toBeVisible();

  // 4. Year → Next → Skip x2
  const yearField = page.getByRole('textbox', { name: 'Year' });
  await yearField.fill('1980');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('button', { name: 'Skip', exact: true }).click();
  await page.getByRole('button', { name: 'Confirm Skip' }).click();

  await page.getByRole('button', { name: 'Skip', exact: true }).click();
  await page.getByRole('button', { name: 'Confirm Skip' }).click();

  // 5. Medication → Next
  await page.getByText('Medication', { exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  // 6. Select all that apply → Advanced cancer
  await page.getByRole('button', { name: 'Select all that apply' }).click();
  await page.locator('#mat-autocomplete-2').getByText('Advanced / invasive cancer').click();

  // 7. Submit + ожидание Results
  await page.getByRole('button', { name: 'Save & Submit' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);

  // ✅ Скриншот Results
  await page.screenshot({ 
    path: `screenshots/CushingSyndromeNotMatch-results-${Date.now()}.png`, 
    fullPage: true 
  });

  console.log('✅ Cushing Syndrome test passed!');
});
