package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	
	public WebDriver driver;
	
	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how = How.XPATH,using="//img[@alt='nopCommerce demo store']")
	WebElement logoOnHomePage;
	
	@FindBy(how = How.XPATH, using="//a[contains(.,'Register')]")
	WebElement registerLink;
	
	@FindBy(how = How.XPATH, using="//a[contains(.,'Log in')]")
	WebElement loginLink;
	
	@FindBy(how = How.XPATH, using="//input[@value='Search']")
	WebElement searchBtn;
	
	@FindBy(how = How.XPATH, using="//a[@href='/logout']")
	WebElement logOutLink;
	
	// return True if logo displayed
	public boolean isLogodisplayed() {
		return logoOnHomePage.isDisplayed();
	}
	
	public RegisterPage goToRegisterPage() {
		registerLink.click();
		return new RegisterPage(driver);
	}
	
	public LoginPage goToLoginPage() {
		loginLink.click();
		return new LoginPage(driver);
	}
	
	public void clickOnSearchBtn() {
		searchBtn.click();
	}
	
	public boolean isLogoutLinkDisplayed() {
		return logOutLink.isDisplayed();
	}
	
	public void clickOnLogOutLink() {
		logOutLink.click();
	}
	
}
