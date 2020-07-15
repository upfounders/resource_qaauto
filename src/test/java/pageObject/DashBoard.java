package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class DashBoard {

	public WebDriver driver;
	
	public DashBoard(WebDriver driver) {
		
		PageFactory.initElements(driver, this);
		
	}
	//omar we need to change this part name as a landing page 
	@FindBy(xpath = "162")
	WebElement logoOnHomePage;
	
	@FindBy(how = How.XPATH, using="//a[contains(.,'Register')]")
	WebElement invitedLink;
	
	@FindBy(how = How.XPATH, using="//a[contains(.,'Log in')]")
	WebElement sharedLink;
	
	@FindBy(how = How.XPATH, using="//input[@value='Search']")
	WebElement addBtn;
	
	@FindBy(xpath = "//p[@class='pointer nav-item'][contains(.,'Log out')]")
	WebElement logOutLink;
	
	// we need too add 2 more one for notifications and one for mesajing app for later
	
	// return True if logo displayed
	public boolean isLogodisplayed() {
		return logoOnHomePage.isDisplayed();
	}
	
	public InvitedPage goToInvatedPage() {
		invitedLink.click();
		return new InvitedPage(driver);
	}
	
	public SharedPage goToSharedPage() {
		sharedLink.click();
		return new SharedPage(driver);
	}
	
	public void clickOnSearchBtn() {
		addBtn.click();
	}
	//need to be fixed
	public boolean isLogoutLinkDisplayed() {
		return logOutLink.isDisplayed();
	}
	
	public void clickOnLogOutLink() {
		logOutLink.click();
	}
	
}


