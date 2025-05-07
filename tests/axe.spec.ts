import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Page should not have any automatically detectable accessibility issues', async ({ page }) => {
  await page.goto('http://localhost:3000/axe');

  const accessibilityScanResults = await new AxeBuilder({ page })
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});