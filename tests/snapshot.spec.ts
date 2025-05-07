import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/snapshot');
  await expect(page).toBeTruthy();
});

