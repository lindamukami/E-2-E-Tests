import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import * as selectors from '../../Selectors'


Given('a user is on the products page', () =>{
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
When ('they click the trash icon near the product {string}',() => {
    cy.get(selectors.QE_TEST_PAGES.REMOVE_SINGLE_TEST.REMOVE_ONE)
    .click()
})
Then ('the product {string} should not be present in the cart', (itemRemoved) => {
    cy.get(selectors.QE_TEST_PAGES.REMOVE_SINGLE_TEST.REMAIN_CART)
    .should('not.include.text',itemRemoved)
})
