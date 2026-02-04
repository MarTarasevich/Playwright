// testsProd/testsProd/smoke.CC.pre-scrn.NotMatchOtherMatch.ts
import { test, expect } from '@playwright/test';

test('Breast Cancer simplified questionnaire flow', async ({ page }) => {
  // 1. Главная + cookies
  await page.goto('https://connect.careboxhealth.com/en-US');
  await page.getByRole('button', { name: 'I Agree' }).click();

  // 2. Browse Trials → Intensity Modulated → Pre-Screen
  await page.getByLabel('Navigation Menu').getByRole('button', { name: 'Browse Trials' }).click();
  await page.getByRole('link', { name: 'Intensity Modulated' }).click();
  await page.getByRole('button', { name: 'Pre-Screen Now' }).click();
  await page.getByRole('button', { name: 'Start the Questionnaire' }).click();

  // 3. Year → Next
  await expect(page.getByRole('textbox', { name: 'Year' })).toBeVisible();
  const yearField = page.getByRole('textbox', { name: 'Year' });
  await yearField.fill('1980');
  await page.getByRole('button', { name: 'Next' }).click();

  // 4. Ductal → Yes → Skip x2
  await page.locator('label', { hasText: 'Ductal carcinoma in situ (' }).click();
  await page.locator('answers-glossary-html-renderer', { hasText: 'Yes' }).click();
  await page.getByRole('button', { name: 'Skip', exact: true }).click();
  await page.getByRole('button', { name: 'Confirm Skip' }).click();

  await page.getByRole('button', { name: 'Skip', exact: true }).click();
  await page.getByRole('button', { name: 'Confirm Skip' }).click();

  // 5. Cancer stage (двойной клик → Next)
  await page.getByText('Cancer has not spread').click();
  await page.getByText('Cancer has not spread').click();  // Как в codegen
  await page.getByRole('button', { name: 'Next' }).click();

  // 6. Final answers
  await page.locator('answers-glossary-html-renderer', { hasText: 'Fully active' }).click();
  await page.getByText('No treatment received').click();
  await page.getByText('None of the listed conditions').click();

  // 7. Submit + ожидание Results
  await page.getByRole('button', { name: 'Save & Submit' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);

  // ✅ Скриншот последней страницы (Results)
  await page.screenshot({ 
    path: `screenshots/pre-scrnNotMatchOtherMatch-results-${Date.now()}.png`, 
    fullPage: true 
  });

  console.log('✅ Breast simplified test passed!');
});
