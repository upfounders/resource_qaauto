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

	@Then("error message {string} should be displayed")
	public void error_message_should_be_displayed(String errorMessage) {
		Assert.assertEquals(loginPage.captureLoginError(), errorMessage);
	}
	
	@When("I enter user name {string}")
	public void i_enter_user_name(String email) {
	    loginPage.setUserName(email);
	}
	
	@Then("login failure message {string} should be displayed")
	public void login_failure_message_should_be_displayed(String loginFailureMessage) {
	   Assert.assertTrue(loginPage.captureFailedLoginMessage().contains(loginFailureMessage));
	}
	

	@When("I enter password {string}")
	public void i_enter_password(String password) {
	  loginPage.setPassword(password);
	}
// this part should be change with dash board 
	@Then("I am able to see logout link on home page")
	public void i_am_able_to_see_logout_link_on_home_page() {
	    Assert.assertTrue(dashboard.isLogoutLinkDisplayed());
	}
//we should add log out link mto dash board 
	@Then("I click on logout link")
	public void i_click_on_logout_link() {
		dashboard.clickOnLogOutLink();
	}

}
