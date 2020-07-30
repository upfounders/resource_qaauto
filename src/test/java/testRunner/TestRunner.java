package testRunner;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
	
		features = {"Features//loginpage.feature"},
		glue = {"stepDefinitions"},
		plugin = {"pretty", "html:test-out"}, 
		monochrome = true
		
)

public class TestRunner extends io.cucumber.testng.AbstractTestNGCucumberTests {
	
}
