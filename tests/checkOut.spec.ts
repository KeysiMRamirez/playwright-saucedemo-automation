import { test, expect } from '@playwright/test';
import { startCheckout } from '../helpers/helper';
import { CheckoutPage } from '../pages/checkout.page';
import { users } from '../data/users';
import { messages } from '../constants/messages';


test.describe('Complete checkout', () => {
    test.beforeEach(async ({ page }) => {
        await startCheckout(page);
    });

    test('Successfully complete checkout', async ({ page }) => {
        const checkOutPage = new CheckoutPage(page);
        await checkOutPage.completeCheckoutInfo(
            users.firstNames.firstName, users.lastNames.lastName, users.zipCodes.zipcode
        );
        await checkOutPage.checkoutOverview();
        await expect(checkOutPage.getOrderCompletedMessageLocator()).toHaveText(messages.orderCompletedMessage);
    });

    test('Unsuccessfully complete checkout with empty fields', async ({ page }) => {
        const checkOutPage = new CheckoutPage(page);
        expect(await checkOutPage.emptyFieldsMessage('', '', '')).toBe(messages.emptyFields);
    });

    test('Unsuccessfully complete checkout with empty first name', async ({ page }) => {
        const checkOutPage = new CheckoutPage(page);
        expect(await checkOutPage.emptyFieldsMessage('', users.lastNames.lastName, users.zipCodes.zipcode)).toBe(messages.firstnameRequired);
    });

    test('Unsuccessfully complete checkout with empty zipcode', async ({ page }) => {
        const checkOutPage = new CheckoutPage(page);
        expect(await checkOutPage.emptyFieldsMessage(users.firstNames.firstName, users.lastNames.lastName, '')).toBe(messages.postalcodeRequired);
    });
});
