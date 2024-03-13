const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
    await page.goto('http://127.0.0.1:8000/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('cole.meredith@example.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await page.locator('form div').filter({ hasText: 'Remember Me' }).nth(2).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Create', exact: true }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('qwerty');
  await page.getByRole('combobox').selectOption('1');
  await page.getByLabel('Rich Text Editor').getByRole('paragraph').fill('qwertyuiopasdfghkjhkl');
  await page.getByText('Next').click();
  await page.getByRole('link', { name: '+'}).click();

  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.getByRole('link', { name: '+'}).click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('/home/katinko/Desktop/Visual_Studio_Projects/backend-dev-exam/public/assets/picture/s-l1200.jpg');

//   await page.getByRole('link', { name: '+', exact: true }).setInputFiles('s-l1200.jpg');
  await page.getByText('Next').click();
  await page.getByLabel('Datepicker input').click();
  await page.getByText('14').click();
  await page.getByRole('button', { name: 'Select' }).click();
  await page.getByText('Submit').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('link', { name: ' Videos' }).click();
  await page.getByRole('button', { name: 'Play Video' }).click();
  await page.getByRole('link', { name: 'test2.webm' }).click();
  await page.getByRole('button', { name: 'Pause' }).click();
  await page.getByRole('button', { name: 'Play' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
});