package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.*;
import pageObject.LoginPage;
import pageObject.AddContact;
import pageObject.ContactProfile;
import pageObject.DashBoard;
import utilities.SeleniumDriver;

public class MainTestSteps {
	
	public SeleniumDriver driver;
	public DashBoard dashboard;
	public AddContact addContact;
	public LoginPage loginPage;
	public ContactProfile createdProfile;

@Given("I open the browser")
public void i_open_the_browser() {
	   dashboard = new DashBoard (driver.getDriver());
	   addContact = new AddContact(driver.getDriver());
	   loginPage = new LoginPage(driver.getDriver());
}


@When("I login the application with {string} and {string}")
public void i_login_the_application_with_and(String userEmail, String userPassword) throws Exception {
	SeleniumDriver.openPage();
	Thread.sleep(2000);
	loginPage.setUserName(userEmail);
	Thread.sleep(2000);
   loginPage.setPassword(userPassword);
   Thread.sleep(2000);
   loginPage.clickOnLoginBtn();
}



@Then("Page title {string}  and logo should be displayed")
public void page_title_and_logo_should_be_displayed(String pageTitle) throws Exception {
	Thread.sleep(2000);
	Assert.assertTrue(dashboard.isLogodisplayed());
	Thread.sleep(2000);
	Assert.assertEquals(driver.getDriver().getTitle(), pageTitle);
	
	
}

@When("I click on invited link")
public void i_click_on_invited_link() throws Exception {
	Thread.sleep(2000);
	dashboard.goToInvatedPage();
	
}

@Then("invited link title of  {string} should be displayed")
public void invited_link_title_of_should_be_displayed(String  titleofInvitee) throws Exception {
	Thread.sleep(2000);
	Assert.assertEquals(dashboard.getTheinviteeTitle(), titleofInvitee); 
	
}

@When("I click on shared link")
public void i_click_on_shared_link() throws Exception {
	Thread.sleep(2000);
	 dashboard.goToSharedPage();
	
}

@Then("shared link title of  {string} should be displayed")
public void shared_link_title_of_should_be_displayed(String sharedTitle) throws Exception {
	Thread.sleep(2000);
	Assert.assertEquals(dashboard.getSharedTitle(),sharedTitle); 
	
}
//blue button at home page
@When("I click on  add contact button")
public void i_click_on_add_contact_button() throws Exception {
	Thread.sleep(2000);
	dashboard.gotoAddContact();
	
}
//checking contact page
@Then("creating new contact title of {string} should be displayed")
public void creating_new_contact_title_of_should_be_displayed(String addContactTitle) throws Exception {
	Thread.sleep(2000);
	Assert.assertEquals(addContact.getAddContactPageTitle(), addContactTitle); 
	
	
}


//adding contact

@When("I provide my personal details")
public void i_provide_my_personal_details(io.cucumber.datatable.DataTable dataTable) throws InterruptedException {

	 List<Map<String, String>> list = dataTable.asMaps(String.class, String.class);
	
	 addContact.uploadImg(list.get(0).get("imgURL"));
	 
	 addContact.setFullName(list.get(0).get("Full Name"));
	 
	 addContact.setEmail(list.get(0).get("Email"));
	 
	 addContact.setCompanyName(list.get(0).get("Company"));
	 
	 addContact.setTitle(list.get(0).get("Title"));
	 
	 addContact.setCity(list.get(0).get("City"));
	 
	 addContact.setState(list.get(0).get("State"));
	 
	 addContact.setCountry(list.get(0).get("Country"));
	
	 addContact.setLinkedInUrl(list.get(0).get("url"));
	
	 addContact.setPhonenumber(list.get(0).get("phone"));
	 
	 addContact.addHastag(list.get(0).get("hashtag"));
	
}

// needs to be fixed 
@When("click on register button")
public void click_on_register_button() throws Exception {
	
	addContact. slidetog();
	Thread.sleep(2000);
	addContact.clickOnsendInvitation();
	Thread.sleep(2000);
}
//needs to be fixed 
@Then("I have my new account")
public void i_have_my_new_account() throws Exception {
	
	Thread.sleep(4000);
	
	Assert.assertEquals(createdProfile.verifyRegisterSucess(),"Contact profile");

	
	
	//Contact Profile 
	
	
	
}



}


