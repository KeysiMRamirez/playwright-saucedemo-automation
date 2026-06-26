import { Page } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { ShoppingPage } from "../pages/shopping.page";
import { users } from "../data/users";
import { CartPage } from "../pages/cart.page";

export async function startCheckout(page: Page) {

    const loginPage = new LoginPage(page);
    const shoppingPage = new ShoppingPage(page);
    const cartPage = new CartPage(page);

    // Go to websit
    await loginPage.navigate();
    // Log in
    await loginPage.SuccessfulLogin(
        users.standard.username,
        users.standard.password
    );
    // Select an item
    await shoppingPage.selectRandomItem();
    // Go to checkout
    await cartPage.checkOutProcess();

}