// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Laravel/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/login');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
