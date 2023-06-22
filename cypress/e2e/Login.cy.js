import LoginPage from "../pages/LoginPage"

describe("Login functionality test", () => {

    const loginPage = new LoginPage();

    beforeEach(()=>{
        cy.viewport(1920 , 1080)
    })

    it("Login with valid credentials", () => {
    
        loginPage.userLogin("standard_user" , "secret_sauce");
    })

    it("Login with invalid credentials", () => {

        loginPage.userLogin("standarduser" , "secret_sauce");
        cy.get('[data-test="error"]').should("have.text" , "Epic sadface: Username and password do not match any user in this service")
    })
})