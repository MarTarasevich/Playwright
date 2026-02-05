// testsStgLilly/lilly-codegen.ts
import { test } from '@playwright/test';

test('Lilly STG - codegen session', async ({ page }) => {
  console.log('🔴 Авторизация из config...');
  await page.goto('/');  // Config httpCredentials сработает
  
  console.log('🟢 Codegen панель открыта — записывай!');
  await page.pause();  // ← Codegen inspector!
});
