Feature: Single Product Feature
Feature This feature is required by user to add a single product to cart
    Scenario: Adding a product to a cart 
    Given a user is on the products page
    And has an empty shopping cart
    And clicks the button shop now
    When they click add to cart on the first product "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    And clicks the cart icon
    Then product "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" is displayed in shopping cart 