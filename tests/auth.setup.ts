import { test } from '@playwright/test';

test('auth setup', async ({ page }) => {
  // 1. Открываем страницу логина
  await page.goto('https://stg-connect.careboxhealth.com/en-US/partner/hdsa');

  // 2. Вводим логин/пароль
  await page.fill('#username', 'preview');
  await page.fill('#password', 'u8u8U*');
  await page.click('button[type="submit"]');

  // 3. Ждём, пока загрузится главная страница после логина
  await page.waitForURL('https://stg-connect.careboxhealth.com/en-US/partner/hdsa'); // подставь правильный URL

  // 4. Сохраняем состояние (cookies, localStorage) в файл
  await page.context().storageState({ path: 'auth/state.json' });
});