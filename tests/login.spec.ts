import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { messages } from '../constants/messages';
import { users } from '../data/users';

test.describe('Login', () => {

  test('Successful Log In', async ({ page }) => {
 
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.SuccessfulLogin(users.standard.username, users.standard.password);

  });

  test('Invalid Password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.UnsuccessfulLoginWithInvalidPassword(
      users.standard.username, users.invalidPassword.password
    );

    expect(await loginPage.getErrorMessage()).toBe(messages.invalidInput);
  });
  
  test('Invalid Username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.UnsuccessfulLoginWithInvalidUsername(
      users.invalidUsername.username, users.standard.password
    );

    expect(await loginPage.getErrorMessage()).toBe(messages.invalidInput);
  });

  test('Locked User', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.UnsuccessfulLoginWithLockedUser(
      users.locked.username, users.locked.password
    );

    expect(await loginPage.getErrorMessage()).toBe(messages.lockedUser);
  });
  
});






