$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:homepage.feature");
formatter.feature({
  "name": "home page",
  "description": "Description: validate home page design",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "validate page title and logo",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageTestSteps.i_open_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageTestSteps.i_navigate_to_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page title should be \"nopCommerce demo store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "logo should be displyed",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageTestSteps.logo_should_be_displyed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "validate register link on homepage",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageTestSteps.i_open_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageTestSteps.i_navigate_to_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the register link",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageTestSteps.i_click_on_the_register_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "register page loaded and message \"Register\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.register_page_loaded_and_message_should_be_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:loginpage.feature");
formatter.feature({
  "name": "login page",
  "description": "Description: validate login page function",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user attempt to login wihtou any cridential",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageTest.i_have_opened_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the nopcommerce application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.i_navigate_to_the_nopcommerce_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message \"Please enter your email\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.error_message_should_be_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user enter wrong email format",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageTest.i_have_opened_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the nopcommerce application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.i_navigate_to_the_nopcommerce_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name \"mytest$outlook.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_enter_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message \"Wrong email\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.error_message_should_be_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user attempt to login without password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageTest.i_have_opened_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the nopcommerce application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.i_navigate_to_the_nopcommerce_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name \"john12.wayne@yahoo.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_enter_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login failure message \"Login was unsuccessful.\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.login_failure_message_should_be_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verify registered accounts",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have opened a browser",
  "keyword": "Given "
});
formatter.step({
  "name": "I navigate to the nopcommerce application",
  "keyword": "When "
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "And "
});
formatter.step({
  "name": "I enter user name \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "I am able to see logout link on home page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "j.wayne@yahoo.com",
        "myAccount12"
      ]
    },
    {
      "cells": [
        "john.wayne@yahoo.com",
        "myAccount12"
      ]
    },
    {
      "cells": [
        "john2.wayne@yahoo.com",
        "myAccount12"
      ]
    },
    {
      "cells": [
        "john12.wayne@yahoo.com",
        "myAccount12"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify registered accounts",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageTest.i_have_opened_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the nopcommerce application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.i_navigate_to_the_nopcommerce_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name \"j.wayne@yahoo.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_enter_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"myAccount12\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to see logout link on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.i_am_able_to_see_logout_link_on_home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@href\u003d\u0027/logout\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027HSATEACHER73\u0027, ip: \u0027192.168.0.120\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\aakti\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61630}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9fb546273a3765698906eb376be610a5\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027/logout\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat pageObject.HomePage.isLogoutLinkDisplayed(HomePage.java:53)\r\n\tat stepDefinitions.LoginPageTest.i_am_able_to_see_logout_link_on_home_page(LoginPageTest.java:65)\r\n\tat ✽.I am able to see logout link on home page(file:loginpage.feature:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_click_on_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "error_message": "java.util.regex.PatternSyntaxException: Unexpected internal error near index 1\r\n\\\r\n\tat java.base/java.util.regex.Pattern.error(Pattern.java:2015)\r\n\tat java.base/java.util.regex.Pattern.compile(Pattern.java:1784)\r\n\tat java.base/java.util.regex.Pattern.\u003cinit\u003e(Pattern.java:1427)\r\n\tat java.base/java.util.regex.Pattern.compile(Pattern.java:1068)\r\n\tat java.base/java.lang.String.replaceAll(String.java:2135)\r\n\tat utilities.CustomeExtentReport.getScreenShotLocation(CustomeExtentReport.java:48)\r\n\tat utilities.CustomeExtentReport.createTest(CustomeExtentReport.java:32)\r\n\tat stepDefinitions.Hooks.afterScenario(Hooks.java:42)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:142)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:172)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "verify registered accounts",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageTest.i_have_opened_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the nopcommerce application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.i_navigate_to_the_nopcommerce_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name \"john.wayne@yahoo.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_enter_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"myAccount12\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to see logout link on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.i_am_able_to_see_logout_link_on_home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@href\u003d\u0027/logout\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027HSATEACHER73\u0027, ip: \u0027192.168.0.120\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\aakti\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61630}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9fb546273a3765698906eb376be610a5\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027/logout\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat pageObject.HomePage.isLogoutLinkDisplayed(HomePage.java:53)\r\n\tat stepDefinitions.LoginPageTest.i_am_able_to_see_logout_link_on_home_page(LoginPageTest.java:65)\r\n\tat ✽.I am able to see logout link on home page(file:loginpage.feature:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_click_on_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "error_message": "java.util.regex.PatternSyntaxException: Unexpected internal error near index 1\r\n\\\r\n\tat java.base/java.util.regex.Pattern.error(Pattern.java:2015)\r\n\tat java.base/java.util.regex.Pattern.compile(Pattern.java:1784)\r\n\tat java.base/java.util.regex.Pattern.\u003cinit\u003e(Pattern.java:1427)\r\n\tat java.base/java.util.regex.Pattern.compile(Pattern.java:1068)\r\n\tat java.base/java.lang.String.replaceAll(String.java:2135)\r\n\tat utilities.CustomeExtentReport.getScreenShotLocation(CustomeExtentReport.java:48)\r\n\tat utilities.CustomeExtentReport.createTest(CustomeExtentReport.java:32)\r\n\tat stepDefinitions.Hooks.afterScenario(Hooks.java:42)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:142)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:172)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "verify registered accounts",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageTest.i_have_opened_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the nopcommerce application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.i_navigate_to_the_nopcommerce_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name \"john2.wayne@yahoo.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_enter_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"myAccount12\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to see logout link on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.i_am_able_to_see_logout_link_on_home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@href\u003d\u0027/logout\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027HSATEACHER73\u0027, ip: \u0027192.168.0.120\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\aakti\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61630}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9fb546273a3765698906eb376be610a5\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027/logout\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat pageObject.HomePage.isLogoutLinkDisplayed(HomePage.java:53)\r\n\tat stepDefinitions.LoginPageTest.i_am_able_to_see_logout_link_on_home_page(LoginPageTest.java:65)\r\n\tat ✽.I am able to see logout link on home page(file:loginpage.feature:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_click_on_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "error_message": "java.util.regex.PatternSyntaxException: Unexpected internal error near index 1\r\n\\\r\n\tat java.base/java.util.regex.Pattern.error(Pattern.java:2015)\r\n\tat java.base/java.util.regex.Pattern.compile(Pattern.java:1784)\r\n\tat java.base/java.util.regex.Pattern.\u003cinit\u003e(Pattern.java:1427)\r\n\tat java.base/java.util.regex.Pattern.compile(Pattern.java:1068)\r\n\tat java.base/java.lang.String.replaceAll(String.java:2135)\r\n\tat utilities.CustomeExtentReport.getScreenShotLocation(CustomeExtentReport.java:48)\r\n\tat utilities.CustomeExtentReport.createTest(CustomeExtentReport.java:32)\r\n\tat stepDefinitions.Hooks.afterScenario(Hooks.java:42)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:142)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:172)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "verify registered accounts",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened a browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageTest.i_have_opened_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the nopcommerce application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTest.i_navigate_to_the_nopcommerce_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name \"john12.wayne@yahoo.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_enter_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"myAccount12\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to see logout link on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.i_am_able_to_see_logout_link_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.i_click_on_logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:registeruser.feature");
formatter.feature({
  "name": "register a new user account",
  "description": "Discription: user create a new account on nopCommerce",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user registeration",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterPageTestSteps.i_open_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to register page",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterPageTestSteps.navigate_to_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide my personal details",
  "rows": [
    {
      "cells": [
        "Gender",
        "First Name",
        "Last Name",
        "DoB Day",
        "DoB Month",
        "DoB Year",
        "Email",
        "Company Name",
        "Password",
        "Confirm Password"
      ]
    },
    {
      "cells": [
        "Male",
        "John",
        "Wayne",
        "26",
        "May",
        "1950",
        "john12.wayne@yahoo.com",
        "business llc",
        "myAccount12",
        "myAccount12"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "RegisterPageTestSteps.i_provide_my_personal_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterPageTestSteps.click_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have my new account",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterPageTestSteps.i_have_my_new_account()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027result\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027HSATEACHER73\u0027, ip: \u0027192.168.0.120\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\aakti\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61660}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 828b626959044bef4671c09e208722c4\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027result\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getText(Unknown Source)\r\n\tat pageObject.RegisterPage.verifyRegisterSucess(RegisterPage.java:117)\r\n\tat stepDefinitions.RegisterPageTestSteps.i_have_my_new_account(RegisterPageTestSteps.java:64)\r\n\tat ✽.I have my new account(file:registeruser.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "error_message": "java.util.regex.PatternSyntaxException: Unexpected internal error near index 1\r\n\\\r\n\tat java.base/java.util.regex.Pattern.error(Pattern.java:2015)\r\n\tat java.base/java.util.regex.Pattern.compile(Pattern.java:1784)\r\n\tat java.base/java.util.regex.Pattern.\u003cinit\u003e(Pattern.java:1427)\r\n\tat java.base/java.util.regex.Pattern.compile(Pattern.java:1068)\r\n\tat java.base/java.lang.String.replaceAll(String.java:2135)\r\n\tat utilities.CustomeExtentReport.getScreenShotLocation(CustomeExtentReport.java:48)\r\n\tat utilities.CustomeExtentReport.createTest(CustomeExtentReport.java:32)\r\n\tat stepDefinitions.Hooks.afterScenario(Hooks.java:42)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:142)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:172)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
});