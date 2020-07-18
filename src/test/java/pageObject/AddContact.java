package pageObject;


//son metoda  addition dan sonra contact profiline giden yeri eklememiz lazim 

// add contact page gitmiyor onuda fix etmek lazim 


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class AddContact {
	
	public WebDriver driver;
	
	public AddContact(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	
	
	@FindBy(xpath = "(//span[@class='mat-button-wrapper'][contains(.,'Add Contact')])[1]")
	WebElement registerSectionTitle;
	
	@FindBy(xpath = "//input[@id='mat-input-0']")
	WebElement fullName;

	@FindBy(xpath = "//input[contains(@formcontrolname,'email')]")
	WebElement email;

	@FindBy(xpath = "//input[contains(@id,'mat-input-2')]")
	WebElement companyName;
	
	@FindBy(xpath = "//input[contains(@id,'mat-input-3')]")
	WebElement contactTitle;
	
	@FindBy(xpath = "//input[contains(@id,'mat-input-4')]")
	WebElement phonenumber;
	

	@FindBy(xpath = "//input[contains(@id,'mat-input-5')]")
	WebElement linkedInUrl;
	
	
	@FindBy(xpath = "//input[contains(@id,'mat-input-6')]")
	WebElement locationCity;
	
	@FindBy(xpath = "//input[contains(@id,'mat-input-6')]")
	WebElement locationState;
	
	@FindBy(xpath = "//input[contains(@id,'mat-input-6')]")
	WebElement locationCountry;
	
	@FindBy(xpath = "//input[contains(@class,'text-input ng-pristine ng-valid ng-touched')]")
	WebElement hastag;

	
	@FindBy(xpath = "//div[@class='mat-slide-toggle-thumb']")
	WebElement togglethumb;
	
	
	@FindBy(xpath = "(//span[@class='mat-button-wrapper'][contains(.,'Add Contact')])[1]")
	WebElement Addcontactbutton;
	
	@FindBy(xpath = "//nav[contains(@class,'navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top')]")
	WebElement verifyContactAddition;
	
	public String getRegisterPageTitle() {		
		return registerSectionTitle.getText();
	}
	

	public void setFullName(String fName) {
		fullName.sendKeys(fName);
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
		phonenumber.sendKeys(phone);
	}
	
	public void setLinkedInUrl(String url) {
		linkedInUrl.sendKeys(url);
	}
	
	public void addHastag(String hastag1) {
		
		hastag.sendKeys(hastag1);
		
		hastag.click();
	}
	
	public void slidetog() {
		togglethumb.click();
	}
	
	public void clickOnsendInvitation() {
		Addcontactbutton.click();
		
	}


	public ContactProfile verifyRegisterSucess() {
		verifyContactAddition.getText();
		return new ContactProfile();
	}


	public void clickOnContinue() {
		// buraya addition dan sonra contact profiline giden yeri eklememiz lazim 
		
	}



}
