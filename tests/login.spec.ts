import { test } from '@playwright/test';

test('login screen screenshot', async ({ page }) => {
  await page.goto('http://localhost:4200');
  await page.screenshot({ path: 'login-screen.png' });
});
