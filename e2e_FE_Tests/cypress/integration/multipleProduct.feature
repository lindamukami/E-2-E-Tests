Feature: Multiple Product  Feature
Feature This feature is required by user to add and remove multiple products to cart
    Scenario: Adding multiple products to a cart 
    Given a user is on the products page
    And has an empty shopping cart
    And clicks the button shop now
    When they click add to cart on the first product "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    And click add to cart on the second product "Mens Casual Premium Slim Fit T-Shirts"
    And click add to cart on the third product "Mens Cotton Jacket"
    And clicks the cart icon 
    Then cart should have three items


 
