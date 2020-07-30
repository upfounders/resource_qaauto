package pageObject;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
//this is omars class 
public class ChatWindow {
	public WebDriver driver;

	public ChatWindow(WebDriver driver) {
		// TODO Auto-generated constructor stub

		this.driver = driver;

		PageFactory.initElements(driver, this);

	}
	@FindBy(xpath = "//*[@id='mat-tab-content-0-0']/div/div/div[1]/div/div[2]/div[1]/app-user-dashboard-item/div/div[1]/img")

	WebElement contact;

	@FindBy(xpath = "//button[contains(.,'Message')]")
	WebElement message;
	@FindBy(id = "sendInput")
	WebElement sendTxet;
	@FindBy(xpath = "(//img[@class='userImg ng-star-inserted'])[2]")
	WebElement message2;
	@FindBy(xpath = "//p[contains(.,'Log out')]")
	WebElement logOut;
	@FindBy(xpath = "//button[contains(.,'Message')]")
	//@FindBy(xpath = "//div[@class='content col pl-0']")
	WebElement popMessge;
	@FindBy(xpath = "//textarea[@rows='1']")
	WebElement typeText;

	public void clickOnDashboardContact() {
		contact.click();
	}

	public void clickOnMessageIcon() {
		message.click();
	}

	public void writeText() {
		sendTxet.sendKeys("hello Mr.omar");
		
	}
	public void enterTaxt() {
		sendTxet.sendKeys(Keys.ENTER);
	}
		public void logOut() {
			logOut.click();
			
		}
		
	
	public void clickOnMessgeIcon2() {
		message2.click();
	}
	public void clickOnPopMIcon() {
		popMessge.click();
	}
	public void typeText() {
		typeText.sendKeys("hello mR.akti");
	}
}
