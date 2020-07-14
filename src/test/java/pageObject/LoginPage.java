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
	
	@FindBy(xpath = "//input[contains(@name,'password')]")
	WebElement password;
	
	@FindBy(xpath = "//button[contains(@id,'submit')]")
	WebElement loginBtn;
	
	@FindBy(xpath = "//p[contains(.,'Email is required')]")
	WebElement emptyCridentialErrorMessage;
	
	@FindBy(xpath = "//p[@class='small ng-star-inserted']")
	WebElement wrongEmailFormatErroMessage;
	
	@FindBy(xpath = "//p[contains(.,'Email / password is incorrect')]")
	WebElement wrongPasswordErrorMessage;
	
	
	public void setUserName(String userEmail) {
		email.sendKeys(userEmail);
	}
	
	public void setPassword(String userPassword) {
		password.sendKeys(userPassword);
	}
	
	public String captureLoginError() {
		return emptyCridentialErrorMessage.getText();
	}
	
	public String captureWrongEmailFormatError() {
		return wrongEmailFormatErroMessage.getText();
	}
	
	public String captureFailedLoginMessage() {
		return wrongPasswordErrorMessage.getText();
	}

	public DashBoard clickOnLoginBtn() {
		loginBtn.click();
		return new DashBoard(driver);
	}
}
