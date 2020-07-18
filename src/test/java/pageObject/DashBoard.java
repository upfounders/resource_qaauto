package pageObject;

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
		
		PageFactory.initElements(driver, this);
		
	}
	
	@FindBy(xpath = "162")
	WebElement logoOnHomePage;
	
	@FindBy(how = How.XPATH, using="//a[contains(.,'Register')]")
	WebElement invitedLink;
	
	@FindBy(xpath = "//mat-header-cell[contains(.,'Name of Invitee')]")
	WebElement inviteeTitle;
	
	@FindBy(how = How.XPATH, using="//a[contains(.,'Log in')]")
	WebElement sharedLink;
	
	@FindBy(xpath = "//mat-header-cell[contains(.,'Shared Contact')]")
	WebElement sharedTitle;
	
	@FindBy(xpath = "//i[@class='material-icons'][contains(.,'message')]")
	WebElement mesaggeButton;
	
	@FindBy(xpath = "(//h5[contains(.,'Omer Faruk')])[2]")
	WebElement chat;
	
	@FindBy(how = How.XPATH, using="//input[@value='Search']")
	WebElement adduserBtn;
	
	@FindBy(xpath = "//p[@class='card-category'][contains(.,'Complete the contact profile')]")
	WebElement subtitleAddContact;
	
	@FindBy(xpath = "//p[@class='pointer nav-item'][contains(.,'Log out')]")
	WebElement logout;
	
	
	public boolean isLogodisplayed() {
		return logoOnHomePage.isDisplayed();
	}
	
	
	/*
	 * // public InvitedPage goToInvatedPage() { invitedLink.click(); return new
	 * InvitedPage(driver); }
	 */
	
	 public void goToInvatedPage() {
		 invitedLink.click();
		 
		 }
	 public String getTheinviteeTitle() {
		  return inviteeTitle.getText();
	 }
	
	public void goToSharedPage() {
		sharedLink.click();
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
	
	public AddContact gotoAddContact() {
		adduserBtn.click();
		
		return new AddContact(driver);
		
	}
public boolean seeLogOutLink() {
		
		return logout.getText() != null;
	}
	

	public void clickOnLogOutLink() {
		
		logout.click();
	}
	
	
}


