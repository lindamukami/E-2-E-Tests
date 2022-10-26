import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import * as selectors from '../../Selectors'


Given('a user load the products page', () =>{
    cy.visit('/')
})


And('has multiple products in the cart', () => {
    cy.get(selectors.QE_TEST_PAGES.ADD_MULTIPLE_TEST.CART_0)
    .click()
    cy.get(selectors.QE_TEST_PAGES.ADD_MULTIPLE_TEST.SHOP_NOW)
    .click()
    cy.get(selectors.QE_TEST_PAGES.ADD_MULTIPLE_TEST.ITEM_ONE)
    .click()
    cy.get(selectors.QE_TEST_PAGES.ADD_MULTIPLE_TEST.ITEM_TWO)
    .click()
    cy.get(selectors.QE_TEST_PAGES.ADD_MULTIPLE_TEST.ITEM_THREE)
    .click()
    cy.get(selectors.QE_TEST_PAGES.ADD_MULTIPLE_TEST.CART)
    .click()

})
When ('they click empty cart button', () => {
    cy.get(selectors.QE_TEST_PAGES.REMOVE_MULTIPLE_TEST.REMOVE_CART)
    .click()

})
Then ('the cart should be empty', () => {
    cy.get(selectors.QE_TEST_PAGES.REMOVE_MULTIPLE_TEST.EMPTY_CART)
    .should('contain.text','Your cart is empty!')

})