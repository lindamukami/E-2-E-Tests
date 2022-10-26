Feature: Search Feature
Feature This feature is required by user to search a product item
    Scenario: A product search using the search bar
    Given a user is on the products page
    When they type "Samsung 49" in the search box
    Then they will see only products with the name "Samsung 49"