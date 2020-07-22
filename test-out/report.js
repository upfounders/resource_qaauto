$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/addcontact.feature");
formatter.feature({
  "name": "add a new contact",
  "description": "Discription: user create a new contact on Resourceful",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "adding new contact",
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
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "MainTestSteps.i_open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login the application with \"abd.akti@gmail.com\" and \"Mavibeyaz25\"",
  "keyword": "And "
});
formatter.match({
  "location": "MainTestSteps.i_login_the_application_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on  add contact button",
  "keyword": "And "
});
formatter.match({
  "location": "MainTestSteps.i_click_on_add_contact_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide my personal details",
  "rows": [
    {
      "cells": [
        "imgURL",
        "Full Name",
        "Email",
        "Company",
        "Title",
        "phone",
        "url",
        "City",
        "State",
        "Country",
        "hashtag"
      ]
    },
    {
      "cells": [
        "C:\\Users\\aakti\\Desktop\\kdr.jpg",
        "Kadir Akti",
        "abd.akti16@gmail.com",
        "Upfounders",
        "Tester",
        "19500675443",
        "https://www.linkedin.com/",
        "Dallas,",
        "Texas,",
        "USA",
        "CloseFriend"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainTestSteps.i_provide_my_personal_details(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument: File not found : C:\\Users\\aakti\\Desktop\\kdr.jpg\n  (Session info: chrome\u003d84.0.4147.89)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WINDOWS-8J941V9\u0027, ip: \u0027192.168.254.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\omars\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51153}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 558579cdef8aa785dad97b1509486b53\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat pageObject.AddContact.uploadImg(AddContact.java:137)\r\n\tat stepDefinitions.MainTestSteps.i_provide_my_personal_details(MainTestSteps.java:111)\r\n\tat ✽.I provide my personal details(file:Features/addcontact.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "MainTestSteps.click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I have my new account",
  "keyword": "Then "
});
formatter.match({
  "location": "MainTestSteps.i_have_my_new_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "error_message": "java.util.regex.PatternSyntaxException: Unexpected internal error near index 1\r\n\\\r\n\tat java.util.regex.Pattern.error(Unknown Source)\r\n\tat java.util.regex.Pattern.compile(Unknown Source)\r\n\tat java.util.regex.Pattern.\u003cinit\u003e(Unknown Source)\r\n\tat java.util.regex.Pattern.compile(Unknown Source)\r\n\tat java.lang.String.replaceAll(Unknown Source)\r\n\tat utilities.CustomeExtentReport.getScreenShotLocation(CustomeExtentReport.java:48)\r\n\tat utilities.CustomeExtentReport.createTest(CustomeExtentReport.java:32)\r\n\tat stepDefinitions.Hooks.afterScenario(Hooks.java:42)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:142)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:172)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
});