// testsProd/smoke-all.ts
import { test, expect } from '@playwright/test';

const sites = [
  {
    url: 'https://trialmatch.alz.org/en-US',
    expectedTitle: /TrialMatch|Carebox/i,  // "Alzheimer’s Association TrialMatch® - Find Clinical Trials | Carebox"
  },
  {
    url: 'https://trials.pulmonaryfibrosis.org/en-US',
    expectedTitle: /Carebox Connect/i,  // точное совпадение
  },
  {
    url: 'https://connect.careboxhealth.com/en-US/partner/nationalsclerodermafoundation',
    expectedTitle: /Carebox Connect|NSF/i,  // "Carebox Connect | National Scleroderma Foundation"
  },
];

test('smoke: check all partner sites', async ({ browser }) => {
  for (const site of sites) {
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log(`🔍 Testing: ${site.url}`);

    await page.goto(site.url);

    await expect(page).toHaveTitle(site.expectedTitle);
    //await expect(page.getByRole('heading')).toBeVisible();

    console.log(`✅ ${site.url} - OK`);

    await context.close();
  }
});
