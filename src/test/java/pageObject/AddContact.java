package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class AddContact {
	
	public WebDriver driver;
	
	public AddContact(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how=How.XPATH, using="//h1[contains(.,'Register')]")
	WebElement registerSectionTitle;
	
	@FindBy(how=How.XPATH, using="//input[@id='gender-male']")
	WebElement genderMale;
	
	@FindBy(how=How.XPATH, using="//input[@id='gender-female']")
	WebElement genderFemale;
	
	@FindBy(how=How.XPATH, using="//input[@id='FirstName']")
	WebElement firstName;
	
	@FindBy(how=How.XPATH, using="//input[@id='LastName']")
	WebElement lastName;
	
	@FindBy(how=How.XPATH, using="//select[@name='DateOfBirthDay']")
	WebElement DoBDay;
	
	@FindBy(how=How.XPATH, using="//select[@name='DateOfBirthMonth']")
	WebElement DoBMonth;
	
	@FindBy(how=How.XPATH, using="//select[@name='DateOfBirthYear']")
	WebElement DoBYear;
	
	@FindBy(how=How.XPATH, using="//input[@id='Email']")
	WebElement email;
	
	@FindBy(how=How.XPATH, using="//input[@name='Company']")
	WebElement companyName;
	
	@FindBy(how=How.XPATH, using="//input[@id='Password']")
	WebElement password;
	
	@FindBy(how=How.XPATH, using="//input[@id='ConfirmPassword']")
	WebElement confirmPassword;
	
	@FindBy(how=How.XPATH, using="//input[@id='register-button']")
	WebElement registerBtn;
	
	@FindBy(how=How.XPATH,using="//div[@class='result']")
	WebElement registerSuccessMessage;
	
	@FindBy(how=How.XPATH,using="//input[@value='Continue']")
	WebElement continuewBtn;
	
	public String getRegisterPageTitle() {		
		return registerSectionTitle.getText();
	}
	
	public void selectGenderMale() {
		genderMale.click();
	}
	
	public void selectGenderFemale() {
		genderFemale.click();
	}
	
	public void setFirstName(String fName) {
		firstName.sendKeys(fName);
	}
	
	public void setLastName(String lName) {
		lastName.sendKeys(lName);
	}
	
	public void setDoBDay(String day) {
		DoBDay.sendKeys(day);
	}
	
	
	public void setDoBMonth(String month) {
		DoBMonth.sendKeys(month);
	}
	
	public void setDoBYear(String year) {
		DoBYear.sendKeys(year);
	}
	
	public void setEmail(String userEmail) {
		email.sendKeys(userEmail);
	}
	
	public void setCompnayName(String company) {
		companyName.sendKeys(company);
	}
	
	public void setPassword(String userPassword) {
		password.sendKeys(userPassword);
	}
	
	public void setConfirmPassword(String userPassword) {
		confirmPassword.sendKeys(userPassword);
	}
	
	public void clickRegisterButton() {
		registerBtn.click();
	}
	
	public String verifyRegisterSucess() {
		return registerSuccessMessage.getText();
	}
	
	public DashBoard clickOnContinue() {
		continuewBtn.click();
		return new DashBoard(driver);
	}


}
