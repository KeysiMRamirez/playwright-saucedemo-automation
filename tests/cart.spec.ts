import { test, expect } from '@playwright/test';
import { ShoppingPage } from '../pages/shopping.page';
import { LoginPage } from '../pages/login.page';
import { users } from '../data/users';
import { CartPage } from '../pages/cart.page';

test.describe('Go to checkout', () => {

    test.beforeEach(async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    
    await loginPage.navigate();
    
    await loginPage.SuccessfulLogin(
        users.standard.username,
        users.standard.password
        );
    });

    test.beforeEach(async ({ page }) => {

        const shoppingPage = new ShoppingPage(page);
        await shoppingPage.selectRandomItem();
    
    });

    test('Check cart and proceed to check out', async ({page}) => {

        const cartPage = new CartPage(page);
        await cartPage.checkOutProcess();
    })
});