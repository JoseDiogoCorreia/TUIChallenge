import { Page, Locator } from '@playwright/test';

export class CustomerPage {
  private page: Page;
  addCustomerButton: Locator;
  firstNameInput: Locator;
  lastNameInput: Locator;
  postCodeInput: Locator;
  submitButton: Locator;
  customersTab: Locator;
  searchCustomerInput: Locator;
  customerTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addCustomerButton = page.locator('button[ng-click="addCust()"]');
    this.firstNameInput = page.locator('input[ng-model="fName"]');
    this.lastNameInput = page.locator('input[ng-model="lName"]');
    this.postCodeInput = page.locator('input[ng-model="postCd"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.customersTab = page.locator('button[ng-click="showCust()"]');
    this.searchCustomerInput = page.locator('input[ng-model="searchCustomer"]');
    this.customerTable = page.locator('table');
  }

  async clickAddCustomer() {
    await this.addCustomerButton.click();
  }

  async fillCustomerForm(firstName: string, lastName: string, postCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postCodeInput.fill(postCode);
  }

  // Missing method for submitting the form
  async submitCustomerForm() {
    await this.submitButton.click();
  }

  async navigateToCustomersTab() {
    await this.customersTab.click();
  }

  async searchCustomer(customerName: string) {
    await this.searchCustomerInput.fill(customerName);
    await this.page.waitForSelector('table'); // Wait for the customer table to load
  }

  async verifyCustomerIsListed(customerName: string): Promise<boolean> {
    const customer = await this.customerTable.locator(`text=${customerName}`).isVisible();
    return customer;
  }
}
