/// <reference types="cypress" />
class RegisterPage {
    get #email() { return cy.get("#reg_email")}
    get #pass() { return cy.get("#reg_password")}
    get #register() { return cy.get('[name="register"]')}

    register(user, pass){
        this.#email.wait(200).type(user, {force: true})
        this.#pass.type(pass,{log:false})
        this.#register.click()
    }
}
module.exports = new RegisterPage()