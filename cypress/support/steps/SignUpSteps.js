import { signUpData } from "../../fixtures/signUpData";
import { signUpData } from "../../fixtures/signUpData";
import sighUpPage from "../pages/signUpPage";

const signUpPageSteps = {
    createNewClient () {
        sighUpPage.getFirstNameEntryField ()
            .type(signUpData.firstName)
        sighUpPage.getEmailEntryField ()
            .type(signUpData.email)
        sighUpPage.getPasswordEntryField ()
            .type(signUpData.password)  
        sighUpPage.getSignUpButton ()
            .click()
    }
}

export default signUpPageSteps;