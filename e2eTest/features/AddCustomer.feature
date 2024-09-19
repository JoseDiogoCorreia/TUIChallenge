Feature: Add a new customer

  Scenario: Successfully add a customer
    Given I navigate to the GlobalSQA Banking Project page
    And I choose "Bank Manager Login"
    When I click on "Add Customer"
    And I fill the customer form with details "Jose", "Correia", and "12345"
    And I click on "Add Customer" button
    Then I should see a confirmation alert
