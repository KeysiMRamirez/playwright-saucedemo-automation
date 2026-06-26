import { Page, Locator } from '@playwright/test';
import { users } from '../data/users';

export class CheckoutPage {
    private firstNameInput: Locator;
    private lastNameInput: Locator;
    private zipCodeInput: Locator;
    private continueBtn: Locator;
    private finishBtn: Locator;
    private orderCompleted: Locator;
    private emptyFieldsErrorMessage: Locator;

    constructor(private page: Page){
        this.firstNameInput = this.page.locator('#first-name');
        this.lastNameInput = this.page.locator('#last-name');
        this.zipCodeInput = this.page.locator('#postal-code');
        this.continueBtn = this.page.locator('#continue');
        this.finishBtn = this.page.locator('#finish');
        this.orderCompleted = page.locator('.complete-header');
        this.emptyFieldsErrorMessage = page.locator('[data-test="error"]');
    }

    async completeCheckoutInfo(username: string, password: string, zipCode: string){
        await this.firstNameInput.fill(users.firstNames.firstName);
        await this.lastNameInput.fill(users.lastNames.lastName);
        await this.zipCodeInput.fill(users.zipCodes.zipcode);
        await this.continueBtn.click();
    }

    async checkoutOverview(){
        await this.finishBtn.click();
    }

    getOrderCompletedMessageLocator() {
        return this.orderCompleted;
    }

    async emptyFieldsMessage(firstName: string, lastName: string, zipCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.zipCodeInput.fill(zipCode);
        await this.continueBtn.click();
        return (await this.emptyFieldsErrorMessage.textContent())?.trim();
    }
}
