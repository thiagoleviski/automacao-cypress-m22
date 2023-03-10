/// <reference types="cypress"/>
import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import RegisterPage from '../../support/pages/register.page';
import data from '../../fixtures/data.json';
import commands from '../../support/pages/commands.js';

const email = `${data.user}_${Date.now()}@gmail.com`;

Given("I open the create account EBAC's page", function() {
    cy.visit('/minha-conta')
});

When("I create an user", function() {
    RegisterPage.register(email,data.pass)
    cy.get(`#main > div > div > p:nth-child(2) > strong:nth-child(1)`).should('contain',`${data.user}`)
});

And("I do the logout", function() {
    cy.logout()
});

Then("I should see the logout's page", function() {
    cy.get(':nth-child(2) > h2').contains('Register')
    cy.get(':nth-child(2) > h2').should('be.visible')
})