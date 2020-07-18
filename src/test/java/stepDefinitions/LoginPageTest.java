package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import io.cucumber.java.en.*;
import pageObject.LoginPage;
import pageObject.AddContact;
import pageObject.DashBoard;
import utilities.SeleniumDriver;

public class LoginPageTest {
	public WebDriver driver;

	public LoginPage loginPage;

	private DashBoard dashboard;

@Given("I have opened a browser")
public void i_have_opened_a_browser() {
	driver = SeleniumDriver.getDriver();
	dashboard = new DashBoard(driver);
	loginPage = new LoginPage(driver);

	
}

@When("I navigate to the resourceful application")
public void i_navigate_to_the_resourceful_application() {
	SeleniumDriver.openPage();
	
}

@When("click on login button")
public void click_on_login_button() throws Exception {
	loginPage.clickOnLoginBtn();
	Thread.sleep(2000);
	
}

@Then("empty email error message {string} should be displayed")
public void empty_email_error_message_should_be_displayed(String errorMessage) throws Exception {
	Thread.sleep(2000);
	Assert.assertEquals(loginPage.captureLoginErrorwithemptyEmail(), errorMessage);
	
}

@When("I enter user name {string}")
public void i_enter_user_name(String email) {
	loginPage.setUserName(email);
}

@Then("error message {string} should be displayed")
public void error_message_should_be_displayed(String errorMessage) throws Exception {
	Thread.sleep(2000);
	Assert.assertEquals(loginPage.captureWrongEmailFormatError(), errorMessage);
}

@Then("login failure message {string} should be displayed")
public void login_failure_message_should_be_displayed(String loginFailureMessage) throws Exception {
	Thread.sleep(2000);
	Assert.assertEquals(loginPage.captureLoginErrorwithemptypassword(),loginFailureMessage );
}

@Then("not account found {string} should be displayed")
public void not_account_found_should_be_displayed(String noAccountMessage) throws Exception {
   
	Thread.sleep(2000);
	Assert.assertEquals(loginPage.captureNoAccountMessage(),noAccountMessage );
}



@When("I enter password {string}")
public void i_enter_password(String password) {
	 loginPage.setPassword(password);
}



@Then("I click on logout link")
public void i_click_on_logout_link() {
	dashboard.clickOnLogOutLink();
}

}