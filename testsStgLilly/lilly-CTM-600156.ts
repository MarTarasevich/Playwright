// testsStgLilly/lilly-CTM-600156.ts
import { test, expect } from '@playwright/test';

test.setTimeout(120000); // 2 минуты на весь сценарий

test('lilly-CTM-600156: full pre-screen flow', async ({ page }) => {
  // Открываем конкретный trial на STG
  await page.goto('https://stg-preview.trials.lilly.com/en-US/trial/600156');
  await page.waitForLoadState('networkidle');

  // Кнопка "See if You May Qualify"
  await page
    .locator('lilly-header-referrals')
    .getByRole('button', { name: 'See if You May Qualify' })
    .click();

  // Старт анкеты
  await page.locator('.flex.items-center.justify-between').click();

  // Дата рождения
  await page.getByTestId('date-picker').fill('01/01/1980');
  await page.locator('div').filter({ hasText: /^Date of Birth \*$/ }).nth(2).click();

  // Рост / вес
  await page.getByTestId('answer-bmi-feet').fill('5');
  await page.getByTestId('answer-bmi-inch').fill('8');
  await page.getByTestId('answer-bmi-weight').fill('180');

  // Далее блок codegen-кликов по radio / checkbox
  await page.locator('div:nth-child(2) > section > div').click();
  await page.locator('div:nth-child(3) > .flex.items-center.relative > .absolute.left-\\[16px\\]').first().click();
  await page.locator('#question-690b9e886db944ac1b231b1f > section > div > .card__base > .flex.flex-col.items-center.w-full > .flex.flex-wrap > .w-\\[100\\%\\].sm\\:mt-2 > .flex.items-center.relative > .absolute.left-\\[16px\\]').click();
  await page.locator('#question-690b786091f0302430f0c22a > section > div > .card__base > .flex.flex-col.items-center.w-full > .flex.flex-wrap > .w-\\[100\\%\\].sm\\:mt-2 > .flex.items-center.relative > .absolute.left-\\[16px\\]').click();
  await page.locator('#question-690b786091f0302430f0c230 > section > div > .card__base > .flex.flex-col.items-center.w-full > .flex.flex-wrap > .w-\\[100\\%\\].sm\\:mt-2 > .flex.items-center.relative > .absolute.left-\\[16px\\]').click();
  await page.locator('#question-690b786091f0302430f0c233 > section > div > .card__base > .flex.flex-col.items-center.w-full > .flex.flex-wrap > .w-\\[100\\%\\].mt-2 > .flex.items-center.relative > .absolute.left-\\[16px\\]').click();
  await page.locator('#question-690b786091f0302430f0c26e > section > div > .card__base > .flex.flex-col.items-center.w-full > .flex.flex-wrap > div:nth-child(5) > .flex.items-center.relative > .absolute.left-\\[16px\\]').click();
  await page.locator('#question-690b786091f0302430f0c277 > section > div > .card__base > .flex.flex-col.items-center.w-full > .flex.flex-wrap > .w-\\[100\\%\\].mt-2 > .flex.items-center.relative > .absolute.left-\\[16px\\]').click();
  await page.locator('div:nth-child(7) > .flex.items-center.relative > .absolute.left-\\[16px\\]').first().click();
  await page.locator('#question-690b786091f0302430f0c28a > section > div > .card__base > .flex.flex-col.items-center.w-full > .flex.flex-wrap > .w-\\[100\\%\\].justify-self-stretch.sm\\:mt-2 > .flex.items-center.relative > .absolute.left-\\[16px\\]').click();
  await page.locator('#question-6925cab8a956fcce8b1f3910 > section > div > .card__base > .flex.flex-col.items-center.w-full > .flex.flex-wrap > .w-\\[100\\%\\].mt-2 > .flex.items-center.relative > .absolute.left-\\[16px\\]').click();
  await page
    .getByLabel('Have you ever taken a')
    .locator('label')
    .filter({ hasText: /^No$/ })
    .click();
  await page.locator('#question-690b786091f0302430f0c2b3 > section > div > .card__base > .flex.flex-col.items-center.w-full > .flex.flex-wrap > div:nth-child(5) > .flex.items-center.relative > .absolute.left-\\[16px\\]').click();
  await page.locator('#question-690b786091f0302430f0c2b9 > section > div > .card__base > .flex.flex-col.items-center.w-full > .flex.flex-wrap > div:nth-child(2) > .flex.items-center.relative > .absolute.left-\\[16px\\]').click();
  await page.locator('label').filter({ hasText: 'No, never had' }).click();
  await page.locator('#question-690b786091f0302430f0c2c9 > section > div > .card__base > .flex.flex-col.items-center.w-full > .flex.flex-wrap > div:nth-child(8) > .flex.items-center.relative > .absolute.left-\\[16px\\]').click();
  await page.locator('#question-690b786091f0302430f0c2d2 > section > div > .card__base > .flex.flex-col.items-center.w-full > .flex.flex-wrap > div:nth-child(2) > .flex.items-center.relative > .absolute.left-\\[16px\\]').click();
  await page.locator('#question-690b786091f0302430f0c2da > section > div > .card__base > .flex.flex-col.items-center.w-full > .flex.flex-wrap > div:nth-child(3) > .flex.items-center.relative > .absolute.left-\\[16px\\]').click();
  await page.locator('#question-690b786091f0302430f0c2de > section > div > .card__base > .flex.flex-col.items-center.w-full > .flex.flex-wrap > div:nth-child(7) > .flex.items-center.relative > .absolute.left-\\[16px\\]').click();
  await page.locator('#question-690b786091f0302430f0c2ed > section > div > .card__base > .flex.flex-col.items-center.w-full > .flex.flex-wrap > .w-\\[100\\%\\].sm\\:mt-2 > .flex.items-center.relative > .absolute.left-\\[16px\\]').click();

  // Контактные данные
  await page.getByTestId('sm-firstName').fill('test');
  await page.getByTestId('sm-lastName').fill('test');
  await page.getByRole('textbox', { name: 'Cell Phone Number' }).fill('(814) 318-8999');
  await page.getByTestId('sm-email').fill('careboxpq@test.com');


// Адрес
const address = page.getByTestId('sm-address');
await address.click();

// лучше печатать с небольшой задержкой, чтобы триггернулся поиск
await address.fill('');
await address.type('100', { delay: 80 });

// подсказки в твоей вёрстке — это кнопки внутри списка в contact-form
const firstSuggestion = page.locator('#contact-form ul > button').first();
await expect(firstSuggestion).toBeVisible({ timeout: 15000 });
await firstSuggestion.click();

// проверка, что значение реально стало “адресом”, а не просто "100"
await expect(address).not.toHaveValue('100');


 //После выбора адреса
await page.waitForSelector('[data-testid*="zip"], input[name*="zip"], [placeholder*="ZIP"]', { 
 timeout: 10000 
});

// Проверяем что ZIP заполнился

const zipField = page.getByTestId('sm-zip');
await expect(zipField).toBeVisible();
await expect(zipField).not.toHaveValue('');

  // Сабмит и закрытие
await page.getByTestId('buttonV2').click();
  // небольшое ожидание, чтобы форма успела сохраниться
await page.waitForTimeout(3000); // 3 секунда
//  await page.getByRole('button', { name: 'Close' }).click();

// Скриншот страницы исследования (опционально)
await page.screenshot({
  path: `screenshots/CTM-600156-trial-page-${Date.now()}.png`,
  fullPage: true,
});
});
