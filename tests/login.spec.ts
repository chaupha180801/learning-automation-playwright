import {test, expect} from '@playwright/test';
import { chromium } from '@playwright/test';

test('loading sign in and sign up page', async ({ page }) => {
    await test.step('loading jobtify page', async () => {
        await page.goto('https://jobtify.ai/');
        await page.locator('text=Get Started Now').first().click();
        await expect(page.getByText('Create Your Account')).toBeVisible();
        await expect(page.getByText('Already have an account?')).toBeVisible();
    });

    await test.step('sign up page3', async () => {
        await page.getByPlaceholder('Enter your name').fill('Chau Pha');
        await page.getByPlaceholder('Enter your email').fill('chaupha180801@gmail.com');
        await page.locator('input[type="password"]').fill('Pha180801@');
        await page.getByRole('button', {name: 'Sign Up'}).first().click();

        await expect(page.getByRole('heading', { name: 'What is your level of experience?' })).toBeVisible();
        await page.close()
    });
});
