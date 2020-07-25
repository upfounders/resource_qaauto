package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;


import io.cucumber.java.en.*;
import pageObject.LoginPage;
import pageObject.AddContact;
import pageObject.ChatWindow;
import pageObject.ContactProfile;
import pageObject.DashBoard;
import utilities.SeleniumDriver;

public class MainTestSteps {
	
	public SeleniumDriver driver;
	public DashBoard dashboard;
	public AddContact addContact;
	public LoginPage loginPage;
	public ContactProfile createdProfile;
	public ChatWindow chatWindow;

	
//dashboard test starts here
	
@Given("I open the browser")
public void i_open_the_browser() {
	   dashboard = new DashBoard (SeleniumDriver.getDriver());
	   addContact = new AddContact(SeleniumDriver.getDriver());
	   loginPage = new LoginPage(SeleniumDriver.getDriver());
	   chatWindow = new ChatWindow(SeleniumDriver.getDriver());
}
//login 

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




//login end

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
	Assert.assertEquals(SeleniumDriver.getDriver().getTitle(), pageTitle);
	
	
}

//invited link page start here
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


//shared link page start here 

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

//adding contact page test start here 


@When("I click on  add contact button")
public void i_click_on_add_contact_button() throws Exception {
	Thread.sleep(2000);
	dashboard.gotoAddContact();}

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

 
@When("click on register button")
public void click_on_register_button() throws Exception {
	
	addContact. slidetog();
	Thread.sleep(2000);
	addContact.clickOnsendInvitation();
	Thread.sleep(2000);
}


@Then("creating new contact title of {string} should be displayed")
public void creating_new_contact_title_of_should_be_displayed(String addContactTitle) throws Exception {
	Thread.sleep(2000);
	Assert.assertEquals(addContact.getAddContactPageTitle(), addContactTitle); 
}

//contact profile page starts here 

@Then("I have my new account")
public void i_have_my_new_account() throws Exception {
	
	Thread.sleep(4000);
	
	Assert.assertEquals(createdProfile.verifyRegisterSucess(),"Contact profile");

	
	
	
}

@Then("I click on the first person on the dashboard")
public void i_click_on_the_first_person_on_the_dashboard() {
  dashboard.clickOnanyContact();
}

@Then("Page title {string} should be displayed")
public void page_title_should_be_displayed(String string) {
   
}

// omar  is working here
//chatwindow
@When("I click mesagging field")
public void i_click_mesagging_field() throws Exception {
    chatWindow.clickOnMessageIcon();
    Thread.sleep(5000);
}

@When("I type {string} on field")
public void i_type_on_field(String string) {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

@Then("in the chat field {string} should be displayed")
public void in_the_chat_field_should_be_displayed(String string) {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

@Given("I open the application")
public void i_open_the_application() {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

@When("I select the one from list")
public void i_select_the_one_from_list() {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

@When("i go to his profile and click on mesage button")
public void i_go_to_his_profile_and_click_on_mesage_button() {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

}


