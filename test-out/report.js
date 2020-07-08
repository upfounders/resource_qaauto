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
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});