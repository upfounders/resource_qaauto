package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import io.cucumber.java.en.*;
import pageObject.HomePage;
import pageObject.LoginPage;
import pageObject.RegisterPage;
import utilities.SeleniumDriver;

public class LoginPageTest {
	public WebDriver driver;
	public HomePage homePage;
	public LoginPage loginPage;

	@Given("I have opened a browser")
	public void i_have_opened_a_browser() {

		driver = SeleniumDriver.getDriver();
		homePage = new HomePage(driver);
		loginPage = new LoginPage(driver);

	}

	@When("I navigate to the nopcommerce application")
	public void i_navigate_to_the_nopcommerce_application() {
		SeleniumDriver.openPage();
	}

	@When("I navigate to login page")
	public void i_navigate_to_login_page() throws Exception {
		homePage.goToLoginPage();
		Thread.sleep(2000);
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
	public void i_enter_user_name(String username) {
	    loginPage.setUserName(username);
	}
	
	@Then("login failure message {string} should be displayed")
	public void login_failure_message_should_be_displayed(String loginFailureMessage) {
	   Assert.assertTrue(loginPage.captureFailedLoginMessage().contains(loginFailureMessage));
	}
	

	@When("I enter password {string}")
	public void i_enter_password(String password) {
	  loginPage.setPassword(password);
	}

	@Then("I am able to see logout link on home page")
	public void i_am_able_to_see_logout_link_on_home_page() {
	    Assert.assertTrue(homePage.isLogoutLinkDisplayed());
	}

	@Then("I click on logout link")
	public void i_click_on_logout_link() {
	    homePage.clickOnLogOutLink();
	}

}
