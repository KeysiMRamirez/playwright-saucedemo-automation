import { expect, Page, Locator } from '@playwright/test';

export class ShoppingPage {
    private cartButton: Locator;
    private randomItem: Locator;
    private sortDropdown: Locator;

    constructor(private page: Page) {
        this.cartButton = this.page.locator('.shopping_cart_link');
        this.randomItem = this.page.locator('.inventory_item');
        this.sortDropdown = this.page.locator('.product_sort_container');
    }

    async selectRandomItem() {
        const itemCount = await this.randomItem.count();
        const anyItem = Math.floor(Math.random() * itemCount);
        const selectedItem = this.randomItem.nth(anyItem);

        await expect(selectedItem.getByRole('button', { name: 'Add to cart' })).toBeVisible();
        await selectedItem.getByRole('button', { name: 'Add to cart' }).click();
    }

    async selectRandomProducts(quantity: number) {

        const itemCount = await this.randomItem.count();

        // Ensure the quantity does not exceed the number of available items
        quantity = Math.min(quantity, itemCount);

        const selectedIndexes = new Set<number>();

        while (selectedIndexes.size < quantity) {
            selectedIndexes.add(
                Math.floor(Math.random() * itemCount)
            );
        }

        for (const index of selectedIndexes) {
            await this.randomItem
            .nth(index)
            .getByRole('button', { name: 'Add to cart' })
            .click();
        }
    }

    async orderItemsByPriceLowToHigh() {
        await this.sortDropdown.selectOption('lohi');
    }
}
