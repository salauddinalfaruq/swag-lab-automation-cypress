import LoginPage from "../pages/LoginPage"

class AddToCart{
    
    userInDashboard(){
        cy.get('.title').should("have.text", "Products");
    }

    viewProduct(){
        cy.get('#item_4_title_link > .inventory_item_name').click();
    }

    addingToCart(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    goingToCartPage(){
        cy.get('.shopping_cart_link').click();
    }

    checkoutPage(){
        cy.get('[data-test="checkout"]').click();
    }

    checkoutCustomerInformation(firstname , lastname , postalCode){
        cy.get('[data-test="firstName"]').type(firstname);
        cy.get('[data-test="lastName"]').type(lastname);
        cy.get('[data-test="postalCode"]').type(postalCode);
    }

    clickContinueButtonAndGoChecoutOverview(){
        cy.get('[data-test="continue"]').click();
    }

    clickOnFinishButtonAndCompletePurchase(){
        cy.get('[data-test="finish"]').click();
    }

    clickOnCancelButtonInCheckoutOverviewPage(){
        cy.get('[data-test="cancel"]').click();
    }

    finisgMessage(){
        cy.get('.complete-header').should("have.text" , "Thank you for your order!")
    }
}

export default AddToCart;