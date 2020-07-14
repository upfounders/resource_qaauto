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
	public AddContact registerPage;
	private DashBoard dashboard;
	
	
	@Given("I open the application")
	public void i_open_the_application() {
		driver = SeleniumDriver.getDriver();
		dashboard = new DashBoard(driver);
		registerPage = new AddContact(driver);
		loginPage = new LoginPage(driver);
	}

	@Given("navigate to register page")
	public void navigate_to_register_page() throws Exception {
		SeleniumDriver.openPage();
		
		// ve need to add new method for adding user
		dashboard.goToInvatedPage();
		Thread.sleep(2000);
	}

	@When("I provide my personal details")
	public void i_provide_my_personal_details(io.cucumber.datatable.DataTable dataTable) throws InterruptedException {

		 List<Map<String, String>> list = dataTable.asMaps(String.class, String.class);
		 if (list.get(0).get("Gender").equalsIgnoreCase("Male")) {
			 registerPage.selectGenderMale();
		 } else {
			 registerPage.selectGenderFemale();
		 }
		 registerPage.setFirstName(list.get(0).get("First Name"));
		 registerPage.setLastName(list.get(0).get("Last Name"));
		 registerPage.setDoBDay(list.get(0).get("DoB Day"));
		 registerPage.setDoBMonth(list.get(0).get("DoB Month"));
		 registerPage.setDoBYear(list.get(0).get("DoB Year"));
		 registerPage.setEmail(list.get(0).get("Email"));
		 registerPage.setCompnayName(list.get(0).get("Company Name"));
		 registerPage.setPassword(list.get(0).get("Password"));
		 registerPage.setConfirmPassword(list.get(0).get("Confirm Password"));
	}

	@When("click on register button")
	public void click_on_register_button() throws Exception {
		registerPage.clickRegisterButton();
		Thread.sleep(2000);
	}

	@Then("I have my new account")
	public void i_have_my_new_account() {
		Assert.assertEquals(registerPage.verifyRegisterSucess(), "Your registration completed");
		registerPage.clickOnContinue();
	}



}
