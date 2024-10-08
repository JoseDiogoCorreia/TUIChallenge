import { expect, Page } from '@playwright/test';

export class CommonSteps {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  async handleConfirmationAlert() {
    this.page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Customer added successfully');
      await dialog.accept();
    });
  }
}
