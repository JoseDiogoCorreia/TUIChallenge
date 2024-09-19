Feature: Check if the customer has been added

  Scenario: Verify the customer is listed
    Given I am on the Banking Project Customers page
    When I search for the customer "Jose"
    Then I should see the customer "Jose" in the customer list
