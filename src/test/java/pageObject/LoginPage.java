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
	
	@FindBy(how=How.ID,using="Email")
	WebElement id;
	
	@FindBy(how=How.ID,using="Password")
	WebElement password;
	
	@FindBy(how=How.XPATH,using="//input[@value='Log in']")
	WebElement loginBtn;
	
	@FindBy(how=How.XPATH,using="//span[@id='Email-error']")
	WebElement emptyCridentialErrorMessage;
	
	@FindBy(how=How.XPATH,using="//span[contains(@id,'Email-error')]")
	WebElement wrongEmailFormatErroMessage;
	
	@FindBy(how=How.XPATH,using="//div[@class='message-error validation-summary-errors']")
	WebElement wrongPasswordErrorMessage;
	
	
	public void setUserName(String userName) {
		id.sendKeys(userName);
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

	public HomePage clickOnLoginBtn() {
		loginBtn.click();
		return new HomePage(driver);
	}
}
