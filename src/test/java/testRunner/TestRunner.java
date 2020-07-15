package testRunner;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		features = {"C:\\Users\\aakti\\Desktop\\aktiresource_qaauto\\resource_qaauto\\Features\\loginpage.feature"},
		glue = {"stepDefinitions"},
		plugin = {"pretty", "html:test-out"},
		monochrome = true
		
)

public class TestRunner {
	
}
