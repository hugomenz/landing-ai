import { expect, test } from '@playwright/test';

test('renders landing content and portfolio', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /AI Workflow Automation für Unternehmen/ })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Fotos y reviews' })).toBeVisible();
  await expect(page.getByText('Automation workspace')).toBeVisible();
});

test('reveals private admin panel only with shortcut', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByLabel('Private admin panel')).toHaveCount(0);
  await page.keyboard.press('Control+Alt+H');
  await expect(page.getByLabel('Private admin panel')).toBeVisible();
  await expect(page.getByText('Firebase Auth está desactivado')).toBeVisible();
});
