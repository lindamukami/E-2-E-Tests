import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import * as selectors from '../../Selectors'
Given('a user is on the products page', () =>{
    cy.visit('/')
})
And('has an empty shopping cart',() =>{
    cy.get(selectors.QE_TEST_PAGES.ADD_SINGLE_TEST.CART_0)
    .click()
})
And ('clicks the button shop now',() =>{
    cy.get(selectors.QE_TEST_PAGES.ADD_SINGLE_TEST.SHOP_NOW)
    .click()
})
When ('they click add to cart on the first product {string}',(name)=>{
    cy.get(selectors.QE_TEST_PAGES.ADD_SINGLE_TEST.ITEM_ONE)
    .click()
})
And ('clicks the cart icon',() =>{
    cy.get(selectors.QE_TEST_PAGES.ADD_SINGLE_TEST.CART)
    .click()

})
Then ('product {string} is displayed in shopping cart', (name) => {
    cy.get(selectors.QE_TEST_PAGES.ADD_SINGLE_TEST.ITEM_NAME_ADDED)
    .should('contain.text', name)
})