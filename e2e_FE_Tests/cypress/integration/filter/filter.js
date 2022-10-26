import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import * as selectors from '../../Selectors'

Given('a user is on the products page', () =>{
    cy.visit('/')
})

When('they click product Electronics', () =>{
    cy.get(selectors.QE_TEST_PAGES.FILTER_TEST.PRODUCT_ELECTRONIC)
    .click()
    cy.wait(2000)
})

Then ('they only see a list of Electronic products {string}', (item) =>{
    cy.get(selectors.QE_TEST_PAGES.FILTER_TEST.ITEM_ELECTRONIC)
    .should("include.text", item)
})