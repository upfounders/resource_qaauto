package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
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
	
	@FindBy(xpath = "//p[@class='small'][contains(.,'Email is required')]")
	WebElement emptyEmailErrorMessage;
	
	@FindBy(xpath = "//p[contains(.,'Invalid email')]")
	WebElement wrongEmailFormatErrorMessage;
	
	@FindBy(xpath = "//p[contains(.,'Email / password is incorrect')]")
	WebElement wrongPasswordErrorMessage;
	
	@FindBy(xpath = "//p[contains(.,'Password is required')]")
	WebElement emptypassword;
	
	public void setUserName(String userEmail) {
		email.sendKeys(userEmail);
	}
	//need to be fixed 
	public void setPassword(String userPassword) {
		password.sendKeys(userPassword);
	}
	//need to be fixed
	public String captureLoginErrorwithemptyEmail() {
		return emptyEmailErrorMessage.getText();
	}
	//need to be fixed
		public String captureLoginErrorwithemptypassword() {
			return emptypassword.getText();
		}
	public String captureWrongEmailFormatError() throws Exception {
		Thread.sleep(2000);
		
		return wrongEmailFormatErrorMessage.getText();
	}
	
	public String captureFailedLoginMessage() {
		return wrongPasswordErrorMessage.getText();
	}

	public DashBoard clickOnLoginBtn() {
		loginBtn.click();
		return new DashBoard(driver);
	}
}
