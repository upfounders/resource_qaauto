package stepDefinitions;

import java.util.List;
import java.util.Map;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import io.cucumber.java.en.*;
import pageObject.LoginPage;
import pageObject.AddContact;
import pageObject.DashBoard;
import utilities.SeleniumDriver;

public class AddContactTestSteps {
	
	public WebDriver driver;
	
	public LoginPage loginPage;
	public AddContact addContact;
	private DashBoard dashboard;
	
	
	@Given("I open the application")
	public void i_open_the_application() {
		driver = SeleniumDriver.getDriver();
		dashboard = new DashBoard(driver);
		addContact = new AddContact(driver);
		loginPage = new LoginPage(driver);
	}

	@Given("navigate to register page")
	public void navigate_to_register_page() throws Exception {
		SeleniumDriver.openPage();
	
		dashboard.goToInvatedPage();
		Thread.sleep(2000);
	}

	@When("I provide my personal details")
	public void i_provide_my_personal_details(io.cucumber.datatable.DataTable dataTable) throws InterruptedException {

		 List<Map<String, String>> list = dataTable.asMaps(String.class, String.class);
		
		 addContact.setFullName(list.get(0).get("Full Name"));
		 
		 addContact.setEmail(list.get(0).get("Email"));
		 
		 addContact.setCompanyName(list.get(0).get("Company"));
		 
		 addContact.setTitle(list.get(0).get("Title"));
		 
		 addContact.setCity(list.get(0).get("City"));
		 
		 addContact.setState(list.get(0).get("State"));
		 
		 addContact.setCountry(list.get(0).get("Country"));
		
		 addContact.setLinkedInUrl(list.get(0).get("linkedUrl"));
		
		 addContact.setPhonenumber(list.get(0).get("Phone"));
		
	}

	@When("click on register button")
	public void click_on_register_button() throws Exception {
		addContact.clickOnsendInvitation();;
		Thread.sleep(2000);
	}

	@Then("I have my new account")
	public void i_have_my_new_account() {
		Assert.assertEquals(addContact.verifyRegisterSucess(), "Contact Profile");
		addContact.clickOnContinue();
	}



}
