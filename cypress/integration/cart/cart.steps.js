/// <reference types="cypress"/>
import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps';
import AddToCart from '../../support/pages/AddToCart.page';
import DeleteFromCart from '../../support/pages/deleteFromCart.page';
import commands from '../../support/pages/commands.js';

Before(() => {
    cy.intercept({
        method: 'POST',
        url: '**/product/*'
    }, req => {
        req.continue((res)=>{
            expect(res.statusCode).to.equal(200)
        })
    })

    cy.intercept({
        method: 'GET',
        url: '**/carrinho/?removed_item*'
    }, req => {
        req.continue((res)=>{
            expect(res.statusCode).to.equal(200)
        })
    })
})

Given("I open the EBAC Shop page", function () {
    cy.visit('/')
});

When("I search for a product", function () {
    AddToCart.addProduct()
    cy.wait(200)
    cy.url().should('contain', `product`)
});

Then("I add the product to the cart", function () {
    AddToCart.addToProductCart()
    cy.contains('a', 'Ver carrinho').should('be.visible').click()
    cy.contains('h1[class="page-title"]', 'Carrinho').should('be.visible')
})

And("I delete a product from the cart", function () {
    DeleteFromCart.deleteProductFromCart()
    cy.contains('p[class="cart-empty woocommerce-info"]', 'Seu carrinho está vazio.').should('be.visible')
})