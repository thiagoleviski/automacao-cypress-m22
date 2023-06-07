/// <reference types="cypress" />
import item from '../../fixtures/item.json'

class DeleteFromCart {
    get #deleteIcon() { return cy.get('a[title="Remove this item"]') }

    deleteProductFromCart() {
        this.#deleteIcon.click({ multiple: true, force: true })
    }
}
module.exports = new DeleteFromCart()