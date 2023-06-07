/// <reference types="cypress"/>

Cypress.Commands.add('logout', () => {

    cy.get(`#main > div > nav > ul > li.woocommerce-MyAccount-navigation-link.woocommerce-MyAccount-navigation-link--customer-logout > a`).then(($href)=>{
        const wpnonce = $href.attr('href').split("/?")[1]
        cy.request({
            url: `/minha-conta/customer-logout/?${wpnonce}`,
            method: "GET"
        })
        cy.visit('/minha-conta')
    })

})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })