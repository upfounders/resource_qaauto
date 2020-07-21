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
	
	
	
	

	public  String verifyRegisterSucess() {
		
		return verifyContactAddition.getText();
	}

	
	

}
