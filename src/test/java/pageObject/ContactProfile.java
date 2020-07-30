package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ContactProfile {	
	public WebDriver driver;
	
	public ContactProfile(WebDriver driver) {
			
		this.driver=driver;
		
		PageFactory.initElements(driver, this);
		
		
		
		
	}
	
	@FindBy(xpath = "(//h4)[1]")
	WebElement verifyContactAddition;
	
	
	@FindBy(xpath = "//i[contains(.,'edit')]")
	WebElement pen;
	
	@FindBy(xpath = "(//img[@class='userImg ng-star-inserted'])[1]")
	WebElement anyContact;

	public  String verifyRegisterSucess() {
		
		return verifyContactAddition.getText();
	}
	public void clickOncontact() {
		anyContact.click();
	}
	public void clickOnpen() {
		pen.click();
	}
	

}
