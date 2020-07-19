package stepDefinitions;

import org.openqa.selenium.WebDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObject.AddContact;

import pageObject.InvitedPage;
import pageObject.LoginPage;
import utilities.SeleniumDriver;


public class InvatedPageTestSteps {
	public WebDriver driver;

	public LoginPage loginPage;
	public AddContact addContact;
	public  InvitedPage invitedPage;
	
	@Given("I open the application")
	public void i_open_the_application() {
		driver = SeleniumDriver.getDriver();
		
		addContact = new AddContact(driver);
		loginPage = new LoginPage(driver);
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Given("I click on invited link")
	public void i_click_on_invited_link() {
	invitedPage.clickOnInvited();
	    // Write code here that turns the phrase above into concrete actions
	   
	}

	@Then("Page title {string}  and {string} and {string} and {string} should be displayed")
	public void page_title_and_and_and_should_be_displayed(String string, String string2, String string3, String string4) {
	    // Write code here that turns the phrase above into concrete actions
	   
	}

	@When("I click on invited link")
	public void i_click_on_invited_link1() {
	    // Write code here that turns the phrase above into concrete actions
	  
	}

	@Then("first user {string} and {string} and {string} should be displayed")
	public void first_user_and_and_should_be_displayed(String string, String string2, String string3) {
	    // Write code here that turns the phrase above into concrete actions
	   
	}

}
