package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import io.cucumber.java.en.*;
import pageObject.HomePage;
import pageObject.LoginPage;
import pageObject.RegisterPage;
import utilities.SeleniumDriver;

public class HomePageTestSteps {
	public WebDriver driver;
	public HomePage homePage;
	public RegisterPage registerPage;
	public LoginPage loginPage;
	
	
	@Given("I open a browser")
	public void i_open_a_browser() {
	   driver = SeleniumDriver.getDriver();
	   homePage = new HomePage(driver);
	   registerPage = new RegisterPage(driver);
	   loginPage = new LoginPage(driver);
	}

	@When("I navigate to the application")
	public void i_navigate_to_the_application() {
		SeleniumDriver.openPage();
	}

	@Then("page title should be {string}")
	public void page_title_should_be(String pageTitle) {
		Assert.assertEquals(driver.getTitle(), pageTitle);
	}

	@Then("logo should be displyed")
	public void logo_should_be_displyed() {
	  Assert.assertTrue(homePage.isLogodisplayed());
	}
	
	@When("I click on the register link")
	public void i_click_on_the_register_link() {
	    homePage.goToRegisterPage();
	}

	@Then("register page loaded and message {string} should be displayed")
	public void register_page_loaded_and_message_should_be_displayed(String pageTitle) {
	    Assert.assertEquals(registerPage.getRegisterPageTitle(), pageTitle);
	}

}
