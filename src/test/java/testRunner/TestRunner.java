package testRunner;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//features = {"Features\\chatwindow.feature"},
		//features = {"Features\\contactprofile.feature"},
		//features = {"Features\\dashboard.feature"},
		//features = {"Features\\invitedpage.feature"},
		features = {"Features\\addcontact.feature"},
		glue = {"stepDefinitions"},
		plugin = {"pretty", "html:test-out"},
		monochrome = true
		
)

public class TestRunner {
	
}
