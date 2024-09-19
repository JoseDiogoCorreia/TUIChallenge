import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page } from 'playwright';
import { Homepage } from '../Actions/Homepage';
import { CustomerPage } from '../Actions/CustomerPage';
import { CommonSteps } from '../Actions/commonSteps';
import { expect } from 'playwright/test';

let page: Page;
let homepage: Homepage;
let customerPage: CustomerPage;
let commonSteps: CommonSteps;

// Step definition for navigating to the site
Given('I navigate to the GlobalSQA Banking Project page', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  homepage = new Homepage(page);
  customerPage = new CustomerPage(page);
  commonSteps = new CommonSteps(page);

  await homepage.navigate();
});

// Step definition for choosing a button (like Bank Manager Login)
When('I choose {string}', async (option: string) => {
    await homepage.clickBankManagerLogin();
  
});

// Step definition for clicking on a button
When('I click on {string}', async (button: string) => {
    await customerPage.clickAddCustomer();
});

// Step definition for filling the customer form
When('I fill the customer form with details {string}, {string}, and {string}', async (firstName: string, lastName: string, postCode: string) => {
  await customerPage.fillCustomerForm(firstName, lastName, postCode);
});

When('I click on {string} button', async  (string) => {
  await customerPage.submitCustomerForm();

});



// Step definition for handling the confirmation alert
When('I should see a confirmation alert', async () => {
  await commonSteps.handleConfirmationAlert();
});

// Step definition for navigating to the customer page
Given('I am on the Banking Project Customers page', async () => {
  await customerPage.navigateToCustomersTab();
});

// Step definition for searching for a customer
When('I search for the customer {string}', async (customerName: string) => {
  await customerPage.searchCustomer(customerName);
});

// Step definition for verifying if the customer is listed
Then('I should see the customer {string} in the customer list', async (customerName: string) => {
  const isCustomerListed = await customerPage.verifyCustomerIsListed(customerName);
  expect(isCustomerListed).toBeTruthy();
});

// Step definition for deleting a customer
When('I delete the customer {string}', async (customerName: string) => {
  const deleteButton = await page.locator(`//tr[contains(., "${customerName}")]//button[text()="Delete"]`);
  await deleteButton.click();
});

// Step definition for verifying the customer is not listed
Then('I should not see the customer {string} in the customer list', async (customerName: string) => {
  const isCustomerListed = await customerPage.verifyCustomerIsListed(customerName);
  expect(isCustomerListed).toBeFalsy();
});
