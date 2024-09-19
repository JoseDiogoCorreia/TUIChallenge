Feature: Delete the customer

  Scenario: Verify the customer is deleted
    Given I am on the Banking Project Customers page
    When I search for the customer "Jose"
    And I delete the customer "Jose"
    Then I should not see the customer "Jose" in the customer list
