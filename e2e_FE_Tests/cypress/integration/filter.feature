Feature: Filter Feature
Feature This feature is required by user to filter a product catalogue
    Scenario: Simple product filter by product Electronics
    Given a user is on the products page
    When they click product Electronics
    Then they only see a list of Electronic products "WD 2TB Elements Portable External Hard Drive - USB 3.0"

