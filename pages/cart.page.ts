import { Page, Locator } from '@playwright/test';

export class CartPage {

    private cartButton: Locator;
    private checkOutButton: Locator;

    constructor(private page: Page) {
        this.cartButton = this.page.locator('[data-test="shopping-cart-link"]');
        this.checkOutButton = this.page.locator('#checkout');
    }

    async checkOutProcess (){
        await this.cartButton.click();
        await this.checkOutButton.click()
    }
}
