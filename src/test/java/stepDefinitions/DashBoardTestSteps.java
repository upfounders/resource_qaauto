package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.*;
import pageObject.LoginPage;
import pageObject.AddContact;
import pageObject.DashBoard;
import utilities.SeleniumDriver;

public class DashBoardTestSteps {
	public WebDriver driver;
	public DashBoard dashboard;
	public AddContact registerPage;
	public LoginPage loginPage;
	
	
	@Given("I open a browser")
	public void i_open_a_browser() {
	   driver = SeleniumDriver.getDriver();
	   dashboard = new DashBoard (driver);
	   registerPage = new AddContact(driver);
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
	  Assert.assertTrue(dashboard.isLogodisplayed());
	}
	

@When("I enter the password {string}")
public void i_enter_the_password(String rigthPassword) {
   
	loginPage.setPassword(rigthPassword);
}

@Then("Page title {string}  and logo should be displayed")
public void page_title_and_logo_should_be_displayed(String dashboardTitle) {
	Assert.assertEquals(registerPage.getRegisterPageTitle(), dashboardTitle);
}

@When("I click on invited link")
public void i_click_on_invited_link() {
    
	dashboard.goToInvatedPage();
}

@Then("title of {string} should be displayed")
public void title_of_nameofinvitee_should_be_displayed(String titleofInvitee) {
	
	Assert.assertEquals(dashboard.getTheinviteeTitle(), titleofInvitee); 

}

@When("I click on shared link")
public void i_click_on_shared_link() {
   dashboard.goToSharedPage();
}

@When("I click mesagging button")
public void i_click_mesagging_button() {
   dashboard.clickOnMesage();
   try {
       WebDriverWait wait = new WebDriverWait(driver, 2);
       wait.until(ExpectedConditions.alertIsPresent());
       Alert alert = driver.switchTo().alert();
       alert.accept();
   } catch (Exception e) {
       //exception handling
   }
}

@Then("user name {string} should be displayed")
public void user_name_should_be_displayed(String chatterName) {
	Assert.assertEquals(dashboard.getChatPersonName(),chatterName);

}

}
