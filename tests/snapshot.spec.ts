import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/snapshot');

  const mainComponent = await page.getByTestId('main');
  await expect(mainComponent).toMatchAriaSnapshot({ name: 'snapshot.aria.yml' });

});

