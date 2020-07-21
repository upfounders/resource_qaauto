$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/aakti/eclipse-workspace/aakti_resource_qaauto/Features/addcontact.feature");
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
  "status": "passed"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "MainTestSteps.click_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have my new account",
  "keyword": "Then "
});
formatter.match({
  "location": "MainTestSteps.i_have_my_new_account()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.MainTestSteps.i_have_my_new_account(MainTestSteps.java:149)\r\n\tat ✽.I have my new account(file:/C:/Users/aakti/eclipse-workspace/aakti_resource_qaauto/Features/addcontact.feature:12)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "error_message": "java.util.regex.PatternSyntaxException: Unexpected internal error near index 1\r\n\\\r\n\tat java.base/java.util.regex.Pattern.error(Pattern.java:2015)\r\n\tat java.base/java.util.regex.Pattern.compile(Pattern.java:1784)\r\n\tat java.base/java.util.regex.Pattern.\u003cinit\u003e(Pattern.java:1427)\r\n\tat java.base/java.util.regex.Pattern.compile(Pattern.java:1068)\r\n\tat java.base/java.lang.String.replaceAll(String.java:2135)\r\n\tat utilities.CustomeExtentReport.getScreenShotLocation(CustomeExtentReport.java:48)\r\n\tat utilities.CustomeExtentReport.createTest(CustomeExtentReport.java:32)\r\n\tat stepDefinitions.Hooks.afterScenario(Hooks.java:42)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:142)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:172)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});