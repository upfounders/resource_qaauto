package pageObject;

//oncelikle bir user invited etmek gerekiyor 
// sonrada invited edilen userin butun ,parametrelerini check etmek gerekiyor 

// we need to ad saperate email 

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import org.openqa.selenium.support.PageFactory;

public class InvitedPage {

	public WebDriver driver;

	public InvitedPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

	}

	@FindBy(xpath = "//div[@id='mat-tab-label-3-1']")
	WebElement invited;

	public void clickOnInvited() {
		invited.click();

	}

	public void getTaxtName() {

	}

	public void getTaxtEmail() {

	}

	public void getTaxtInvitedOn() {

	}

}
