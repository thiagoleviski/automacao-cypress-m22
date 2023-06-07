Feature: EBAC shop cart

  Scenario: Adding and deleting an item from the EBAC shop cart
    Given I open the EBAC Shop page
    When I search for a product
    Then I add the product to the cart
    And I delete a product from the cart