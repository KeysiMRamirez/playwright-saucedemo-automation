import { test, expect } from '@playwright/test';
import { ShoppingPage } from '../pages/shopping.page';
import { LoginPage } from '../pages/login.page';
import { users } from '../data/users';

test.describe('Shopping page', () => {
    
    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.SuccessfulLogin(
            users.standard.username,
            users.standard.password
        );
    });

    test('Add item to Cart', async ({ page }) => {

        const shoppingPage = new ShoppingPage(page);
        await shoppingPage.selectRandomItem();
        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    
    });

    test('Add multiple items to Cart', async ({ page }) => {

        const shoppingPage = new ShoppingPage(page);
        await shoppingPage.selectRandomProducts(3);
        await expect(page.locator('.shopping_cart_badge')).toHaveText('3');
    });

    test('Order items by price low to high', async ({ page }) => {

        const shoppingPage = new ShoppingPage(page);
        await shoppingPage.orderItemsByPriceLowToHigh();

    })
});