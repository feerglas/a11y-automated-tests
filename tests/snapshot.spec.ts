import { test, expect } from '@playwright/test';

test('Should not have any accessibility regressions', async ({ page }) => {
  await page.goto('http://localhost:3000/snapshot');

  const mainComponent = await page.getByTestId('main');
  await expect(mainComponent).toMatchAriaSnapshot({ name: 'snapshot.aria.yml' });

});

