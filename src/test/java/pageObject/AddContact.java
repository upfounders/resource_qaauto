package pageObject;


import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;

//son metoda  addition dan sonra contact profiline giden yeri eklememiz lazim 

// add contact page gitmiyor onuda fix etmek lazim 


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;




public class AddContact {
	
public WebDriver driver;
	
public AddContact(WebDriver driver) {
		
	this.driver=driver;
	
	PageFactory.initElements(driver, this);
	
}
	

    @FindBy(xpath = "(//input)[1]" )
    WebElement uploadImg;
	
	@FindBy(xpath = "//h4")
	WebElement AddContactTitle;
	
	@FindBy(xpath = "(//input)[2]" )
	WebElement name;

	@FindBy(xpath = "(//input)[3]" )
	WebElement email;

	@FindBy(xpath = "(//input)[4]" )
	WebElement companyName;
	
	@FindBy(xpath = "(//input)[5]" )
	WebElement contactTitle;
	
	@FindBy(xpath = "(//input)[6]" )
	WebElement phonenumber;
	

	@FindBy(xpath = "(//input)[7]" )
	WebElement linkedInUrl;
	
	
	@FindBy(xpath = "//input[contains(@id,'mat-input-6')]")
	WebElement locationCity;
	
	@FindBy(xpath = "//input[contains(@id,'mat-input-6')]")
	WebElement locationState;
	
	@FindBy(xpath = "//input[contains(@id,'mat-input-6')]")
	WebElement locationCountry;
	
	@FindBy(xpath = "(//input)[9]")
	WebElement hastag;

	
	@FindBy(xpath = "(//input)[10]")
	WebElement togglethumb;
	
	
	@FindBy(xpath = "(//span[@class='mat-button-wrapper'][contains(.,'Add Contact')])[1]")
	WebElement Addcontactbutton;

	
	public String getAddContactPageTitle() {		
		return AddContactTitle.getText();
	}
	

	public void setFullName(String fullName) {
		
		name.sendKeys(fullName);
	}
	

	public void setTitle(String title) {
		contactTitle.sendKeys(title);
	}
	
	
	public void setCity(String city) {
		locationCity.sendKeys(city);
	}
	
	
	public void setState(String state) {
		locationState.sendKeys(state);
	}
	
	public void setCountry(String country) {
		locationCountry.sendKeys(country);
	}
	
	public void setEmail(String userEmail) {
		email.sendKeys(userEmail);
	}
	
	public void setCompanyName(String company) {
		companyName.sendKeys(company);
	}
	
	public void setPhonenumber(String phone) {
		
		phonenumber.sendKeys(String.valueOf(phone));
		
	}
	
	public void setLinkedInUrl(String url) {
		
		linkedInUrl.sendKeys(String.valueOf(url));
	}
	
	public void addHastag(String hashtag) throws InterruptedException {
		hastag.click();
		Thread.sleep(1000);
		hastag.sendKeys(hashtag);
		hastag.sendKeys(Keys.TAB);
	}
	
	public void slidetog() throws Exception {
		 JavascriptExecutor executor = (JavascriptExecutor) driver;
		  executor.executeScript("arguments[0].click();", driver.findElement(By.xpath("(//input)[10]")));
			Thread.sleep(3000);
	}
	
	public void clickOnsendInvitation() throws Exception {
		
		Addcontactbutton.submit();
	}


	public void uploadImg(String imgURL) {
		
		uploadImg.sendKeys(imgURL);
	}
	}






