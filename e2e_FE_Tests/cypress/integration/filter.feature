Feature: Filter Feature
Feature This feature is required by user to filter a product catalogue
    Scenario: Simple product filter by product Electronics
    Given a user is on the products page
    When they click product Electronics
    Then they only see Electronic item "WD 2TB Elements Portable External Hard Drive - USB 3.0"

    Scenario: Simple product filter by product Electronics
    Given a user is on the products page
    When they click product Electronics
    Then they do not see Fashion item "Mens Cotton Jacket"

