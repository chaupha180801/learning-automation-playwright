import { test, expect } from '@playwright/test';

test('loading jobtify page', async ({ page }) => {
  await page.goto('https://jobtify.ai/')

  const header = page.getByRole('heading', {name: 'Enhance your chance to get hired by 300%'});
  await  expect(header).toBeVisible();
});
