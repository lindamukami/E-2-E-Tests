Feature: Empty Cart  Feature
Feature This feature is required by user to empty products in a cart
    Scenario: Emptying the whole cart
    Given a user load the products page
    And has multiple products in the cart
    When they click empty cart button 
    Then the cart should be empty
