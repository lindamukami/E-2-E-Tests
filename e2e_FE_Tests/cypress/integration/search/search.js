import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import * as selectors from '../../Selectors'

Given('a user is on the products page', () =>{
    cy.visit('/')
})

When('they type {string} in the search box', (name) =>{
    cy.get(selectors.QE_TEST_PAGES.SEARCH_TEST.SEARCH_FIELD)
    .should('not.have.class', 'disabled')
    .type(name)

})

Then('they will see only products with the name {string}', (name) =>{
    cy.get(selectors.QE_TEST_PAGES.SEARCH_TEST.SEARCH_RESULT)
    .should("include.text", name)

})