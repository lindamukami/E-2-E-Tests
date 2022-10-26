import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import * as selectors from '../../Selectors'

Given('a user is on the products page', () =>{
    cy.visit('/')
})

And('has an empty shopping cart', () => {
    cy.get(selectors.QE_TEST_PAGES.ADD_MULTIPLE_TEST.CART_0)
    .click()
})
And ('clicks the button shop now', () =>{
    cy.get(selectors.QE_TEST_PAGES.ADD_MULTIPLE_TEST.SHOP_NOW)
    .click()

})
When ('they click add to cart on the first product {string}', () => {
    cy.get(selectors.QE_TEST_PAGES.ADD_MULTIPLE_TEST.ITEM_ONE)
    .click()
})
And ('click add to cart on the second product {string}', () =>{
    cy.get(selectors.QE_TEST_PAGES.ADD_MULTIPLE_TEST.ITEM_TWO)
    .click()
})
And ('click add to cart on the third product {string}', () => {
    cy.get(selectors.QE_TEST_PAGES.ADD_MULTIPLE_TEST.ITEM_THREE)
    .click()
})
And ('clicks the cart icon', () => {
    cy.get(selectors.QE_TEST_PAGES.ADD_MULTIPLE_TEST.CART)
    .click()
})
Then ('cart should have three items', () => {
    cy.get(selectors.QE_TEST_PAGES.ADD_MULTIPLE_TEST.LIST_PRODUCT)
    .should('have.length', 4)
})

