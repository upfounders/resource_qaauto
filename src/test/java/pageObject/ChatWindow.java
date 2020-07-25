package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ChatWindow {
	public WebDriver driver;

	public ChatWindow(WebDriver driver) {
		// TODO Auto-generated constructor stub

		this.driver = driver;

		PageFactory.initElements(driver, this);

	}
	//@FindBy(xpath = "//i[@class='material-icons'][contains(.,'message')]")
	//@FindBy(xpath = "//div/a/img")
	@FindBy(xpath = "//button[contains(.,'add')]")
	//@FindBy(xpath = "//*[@id=\"https://resourceful-avatar.s3.us-west-1.amazonaws.com/prod/1593480932864-7604544a481da491148240ba40bc51b9.jpg?AWSAccessKeyId=AKIAI3WPLZYQLP26PA6Q&Expires=1595563722&Signature=QbP3H8nKbp3E8VSfb%2BGrfZbNaz4%3D")
	WebElement message;
	
	
	
	
	
	
	public void clickOnMessageIcon() {
		message.click();
	}
}
