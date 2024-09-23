import { expect, type Locator, type Page } from '@playwright/test';

export class Homepage {
    readonly page: Page;
    bankManagerLoginButton: Locator;
    
    
    constructor(page: Page){
        this.page = page;
        this.bankManagerLoginButton = page.getByRole('button', { name: 'Bank Manager Login' });
    }


    async navigate() {
        await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
      }

      async clickBankManagerLogin() {
        await this.bankManagerLoginButton.click();
      }
}


