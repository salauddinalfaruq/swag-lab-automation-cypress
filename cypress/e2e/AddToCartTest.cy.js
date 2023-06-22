import LoginPage from "../pages/LoginPage"
import AddToCart from "../pages/AddToCart"

describe("Add product to the cart", ()=>{

    const loginPage = new LoginPage();
    const addtocart = new AddToCart();

    beforeEach(()=>{
        loginPage.userLogin("standard_user" , "secret_sauce");
    })

    it("Verify product purchase is successful", ()=>{
        addtocart.userInDashboard();
        addtocart.viewProduct();
        addtocart.addingToCart();
        addtocart.goingToCartPage();
        addtocart.checkoutPage();
        addtocart.checkoutCustomerInformation("Mafiul" , "Sadman" , "1234");
        addtocart.clickContinueButtonAndGoChecoutOverview();
        addtocart.clickOnFinishButtonAndCompletePurchase();
        addtocart.finisgMessage();
    });

    it("Verify product purchase is cancelled", ()=>{
        addtocart.userInDashboard();
        addtocart.viewProduct();
        addtocart.addingToCart();
        addtocart.goingToCartPage();
        addtocart.checkoutPage();
        addtocart.checkoutCustomerInformation("Mafiul" , "Sadman" , "1234");
        addtocart.clickContinueButtonAndGoChecoutOverview();
        addtocart.clickOnCancelButtonInCheckoutOverviewPage();
    })
})