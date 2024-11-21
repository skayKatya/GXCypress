import { loginData } from "../../fixtures/loginData";
import loginPage from "../pages/loginPage";

const loginPageSteps = {
    enterClientData () {
        loginPage.getEmailEntryField()
            .type(loginData.email)
        loginPage.getPasswordEntryField()
            .type(loginData.password)
        loginPage.getLogInButton()
            .click()   
    }
}

export default loginPageSteps;