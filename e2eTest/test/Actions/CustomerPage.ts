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
    this.addCustomerButton = page.getByRole('button', { name: 'Add Customer' });
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.postCodeInput = page.getByPlaceholder('Post Code');
    this.submitButton = page.getByRole('form').getByRole('button', { name: 'Add Customer' });
    this.customersTab = page.getByRole('button', { name: 'Customers' });
    this.searchCustomerInput = page.getByPlaceholder('Search Customer');
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

 
  async submitCustomerForm() {
    await this.submitButton.click();
  }

  async navigateToCustomersTab() {
    await this.customersTab.click();
  }

  async searchCustomer(customerName: string) {
    await this.searchCustomerInput.fill(customerName);
    await this.page.waitForSelector('table'); 
  }

  async verifyCustomerIsListed(customerName: string): Promise<boolean> {
    const customer = await this.customerTable.locator(`text=${customerName}`).isVisible();
    return customer;
  }
}
