Feature: Remove Product  Feature
Feature This feature is required by user to remove a product to cart
    Scenario: Removing one item from the cart
    Given a user is on the products page
    And has multiple products in the cart
    When they click the trash icon near the product "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" 
    Then the product "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" should not be present in the cart