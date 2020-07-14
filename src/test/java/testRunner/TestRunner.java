package testRunner;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		features = {"C:\\Users\\aakti\\eclipse-workspace\\resource_qaauto\\Features"},
		glue = {"stepDefinitions"},
		plugin = {"pretty", "html:test-out"},
		monochrome = true
		
)

public class TestRunner {
	
}
