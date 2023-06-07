/// <reference types="cypress" />
import item from '../../fixtures/item.json'

class AddToCart {
    get #search() { return cy.get('button[data-toggle="modal"]') }
    get #searchBar() { return cy.get('#tbay-header .tbay-search') }
    get #item() { return cy.get(`a[title="${item.itemName}"]`) }
    get #size() { return cy.get(`li[title="${item.size}"]`) }
    get #color() { return cy.get(`li[title="${item.color}"]`) }
    get #buy() { return cy.get(`button[class="single_add_to_cart_button button alt"]`) }

    addProduct() {
        this.#search.click({ multiple: true, force:true })
        this.#searchBar.type(item.itemName, {force:true})
        this.#item.click({ multiple: true, force:true })
    };

    addToProductCart() {
        this.#size.click({ multiple: true, force:true })
        this.#color.click({ multiple: true, force:true })
        this.#buy.click({ multiple: true, force:true })
    }
}
module.exports = new AddToCart()