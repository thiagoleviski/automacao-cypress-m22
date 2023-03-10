Feature: Creating an user on EBAC's web page

  Scenario: Opening and creating an user on the create account EBAC's page
    Given I open the create account EBAC's page
    When I create an user
    And I do the logout
    Then I should see the logout's page
