package stepDefinitions;


import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import utilities.CustomeExtentReport;
import utilities.SeleniumDriver;

public class AfterActions {
	private static CustomeExtentReport customeExtentReport;
	
	@After
	public void afterScenario(Scenario scenario) throws IOException {
		WebDriver driver=SeleniumDriver.getDriver();
		String screenShotFile = "C:\\Users\\omars\\git\\resource_qaauto\\target" + scenario.getName().replaceAll("", "") + ".jpg";
		if(scenario.isFailed()) {
			 byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
             scenario.embed(screenshotBytes, "image/png");
		}
		
		customeExtentReport.createTest(scenario, screenShotFile);
		customeExtentReport.writeToReport();
		SeleniumDriver.tearDown();
	}
	
	
	@After
	public static void tearDown() {
		SeleniumDriver.tearDown();
	}


}
