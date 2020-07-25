package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;

//ben buradan check ettim mesaj ve linkleri ama daha iyi ayarlanmasi lazim 
//sadece linklerin check edilmesi lazim 
//bide notification partina test case yazmak lazim 




import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;


public class DashBoard {

	public WebDriver driver;
	
	public DashBoard(WebDriver driver) {
		
		this.driver= driver;
		
		PageFactory.initElements(driver, this);
		
		
	}


	@FindBy(xpath = "(//input)[2]" )
	WebElement name;

	
	@FindBy(xpath = "//div/a/img")
	WebElement logoOnHomePage;
	
	@FindBy(xpath ="//div[contains(text(),'Invited')]")
	WebElement invitedLink;
	
	@FindBy(xpath = "//mat-header-cell[1]")
	WebElement inviteeTitle;
	
	@FindBy(id ="mat-tab-label-2-2")
	WebElement sharedLink;
	
	@FindBy(xpath = "//mat-header-row/mat-header-cell[1]")
	WebElement sharedTitle;
	
	@FindBy(xpath = "//i[@class='material-icons'][contains(.,'message')]")
	WebElement mesaggeButton;
	
	@FindBy(xpath = "(//h5[contains(.,'Omer Faruk')])[2]")
	WebElement chat;
	
	@FindBy(how = How.XPATH, using="(//button)[2]]")
	WebElement adduserBtn;
	
	@FindBy(xpath = "//h4")
	WebElement subtitleAddContact;
	
	@FindBy(xpath = "//p[@class='pointer nav-item'][contains(.,'Log out')]")
	WebElement logout;
	@FindBy(xpath = "(//img[@class='userImg ng-star-inserted'])[1]")
	WebElement anyContact;
	
	public boolean isLogodisplayed() {
		return logoOnHomePage.isDisplayed();
	}
	
 
	
	 public void goToInvatedPage() throws Exception {
		 JavascriptExecutor executor = (JavascriptExecutor)driver;
	     executor.executeScript("arguments[0].click();", driver.findElement(By.xpath("//div[contains(text(),'Invited')]/..")));
			Thread.sleep(3000);
		
		 }
	 public String getTheinviteeTitle() {
		  return inviteeTitle.getText();
	 }
	 
	public void goToSharedPage() throws Exception {
		 JavascriptExecutor executor = (JavascriptExecutor) driver;
		  executor.executeScript("arguments[0].click();", driver.findElement(By.xpath("//div[contains(text(),'Shared')]/..")));
			Thread.sleep(3000);
		
	}
	
	public String getSharedTitle() {
		
		return sharedTitle.getText();
	}
	
	public void clickOnMesage() {
		mesaggeButton.click();
	}
	
	public String getChatPersonName() {
		return chat.getText();
	}
	public void clickOnanyContact() {
		anyContact.click();
	}
	public AddContact gotoAddContact() throws Exception {
		
		
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		
		executor.executeScript("arguments[0].click();", driver.findElement(By.xpath("(//button)[2]")));
			Thread.sleep(3000);
		
			return new AddContact(driver);
		
	}
public void seeLogOutLink() {
		
		 logout.isDisplayed();
	}
	

	public void clickOnLogOutLink() {
		
		logout.click();
	}
	

	public void logoOnDashboard() {
		logoOnHomePage.isDisplayed();
		
	}
	
}


