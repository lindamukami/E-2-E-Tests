import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import * as selectors from '../../Selectors'

Given('a user is on the products page', () =>{
    cy.visit('/products')
})

When('they click product Electronics', () =>{
    cy.get(selectors.QE_TEST_PAGES.FILTER_TEST.PRODUCT_ELECTRONIC)
    .click()
    .wait(2000)
})

Then ('they only see Electronic item {string}', (product) =>{
    cy.get(selectors.QE_TEST_PAGES.FILTER_TEST.ITEM_ELECTRONIC)
    .should("include.text", product)
    .wait(2000)
})
Then ('they do not see Fashion item {string}', (product) =>{
    cy.get(selectors.QE_TEST_PAGES.FILTER_TEST.ITEM_ELECTRONIC)
    .should("not.include.text", product)
})