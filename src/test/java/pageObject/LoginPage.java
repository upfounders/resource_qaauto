package pageObject;


import org.openqa.selenium.WebDriver;

//akti --- need to add one more test case with logining app with google, 
//with window hendler after opening new window, we need to loging valid google account with valid credentials 
//so we can login app with valid credentials

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	public WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
	
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath = "//input[contains(@name,'username')]")
	WebElement email;
	
	@FindBy(xpath = "//input[contains(@type,'password')]")
	WebElement password;
	
	@FindBy(xpath = "//button[contains(@id,'submit')]")
	WebElement loginBtn;
	
	@FindBy(xpath = "//p[@class='small error ng-star-inserted'][contains(.,'Email is required')]")
	WebElement emptyEmailErrorMessage;
	
	@FindBy(xpath = "//p[@class='small error ng-star-inserted'][contains(.,'Invalid email')]")
	WebElement wrongEmailFormatErrorMessage;
	
	@FindBy(xpath = "//p[contains(.,'Email / password is incorrect')]")
	WebElement wrongPasswordErrorMessage;
	
	@FindBy(xpath = "//p[@class='small error ng-star-inserted'][contains(.,'Password is required')]")
	WebElement emptypassword;
	
	@FindBy(xpath = "//p[contains(.,'Invalid email')]")
	WebElement notFound;
	
	public void setUserName(String userEmail) {
		email.sendKeys(userEmail);
	}

	public void setPassword(String userPassword) {
		password.sendKeys(userPassword);
	}
	
	public String captureLoginErrorwithemptyEmail() throws Exception {
		Thread.sleep(2000);
		return emptyEmailErrorMessage.getText();
	}
	
		public String captureLoginErrorwithemptypassword() throws Exception {
			Thread.sleep(2000);
			return emptypassword.getText();
		}
	public String captureWrongEmailFormatError() throws Exception {
		Thread.sleep(2000);
		
		return wrongEmailFormatErrorMessage.getText();
	}
	
	public String captureFailedLoginMessage() throws Exception {
		Thread.sleep(2000);
		return wrongPasswordErrorMessage.getText();
	}

	public DashBoard clickOnLoginBtn() {
		loginBtn.click();
		return new DashBoard(driver);
	}

	public String captureNoAccountMessage() throws Exception {
		Thread.sleep(2000);
		return notFound.getText();
	}
}
