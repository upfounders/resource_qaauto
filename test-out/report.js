$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/loginpage.feature");
formatter.feature({
  "name": "login page",
  "description": "Description: validate login page function",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user attempt to login wihtout any cridential",
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
  "location": "LoginPageTestSteps.i_have_opened_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the resourceful application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTestSteps.i_navigate_to_the_resourceful_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTestSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "empty email error message \"Email is required\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTestSteps.empty_email_error_message_should_be_displayed(String)"
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
  "location": "LoginPageTestSteps.i_have_opened_a_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the resourceful application",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageTestSteps.i_navigate_to_the_resourceful_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name \"mytest$outlook.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTestSteps.i_enter_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTestSteps.click_on_login_button()"
});
