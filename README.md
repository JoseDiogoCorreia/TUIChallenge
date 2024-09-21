# TUIChallenge
Automation challenge for TUI

To get started, ensure you have the following installed:

	1. Node.js (version 12.x or higher)
	2. npm (comes with Node.js)
	3. Git

1. Clone the Repository
First, clone the project repository to your local machine.		

 Install Dependencies
After navigating into the project directory, install all required dependencies by running:
			
	 npm install

Test Scenarios
The project includes the following three feature files:

1.  Add Customer: This feature tests adding a new customer to the system.
 			Located in features/addCustomer.feature
2. Check Customer: This feature tests if the newly added customer is listed on the customers page.
			Located in features/checkCustomer.feature
3. Delete Customer: This feature tests deleting the newly added customer and verifying its removal.
			Located in features/deleteCustomer.feature



 
		e2eTest/
	
 		│
		├── features/                   //Contains the .feature files for Cucumber scenarios
		│   ├── addCustomer.feature
		│   ├── checkCustomer.feature
		│   └── deleteCustomer.feature
		├── Actions/                      //Page Object Model classes
		│   ├── homepage.ts              //Page object for the homepage
		│   ├── customerPage.ts        	//Page object for the customer page
		│   └── commonSteps.ts         //Shared steps 
		├── steps/                      
		│   └── customerSteps.ts
		├── tsconfig.json               //TypeScript configuration
		├── cucumber.json               //Cucumber configuration file
		├── playwright.config.ts        //Playwright configuration file (optional)
		├── package.json                //npm dependencies and scripts
		└── README.md                   //Instructions on how to use the project

	You can execute the tests using the following command:

   		npm test

Notes
 1. If a test fails the first time, please cancel the Test wit cntrl + c and re run it.

 2. If for some reason the test are failing because of dependecies i will leave here the one that i installed.

			npm i typescript - D
			npm  i ts-node -D
			npm  i cucumber/cucumber -D
			npm i playwright/test -D

