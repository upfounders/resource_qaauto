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
<<<<<<< HEAD
=======
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
  "name": "I navigate to the resourceful application",
  "keyword": "When "
});
formatter.match({
  "location": "MainTestSteps.i_navigate_to_the_resourceful_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "MainTestSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "empty email error message \"Email is required\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MainTestSteps.empty_email_error_message_should_be_displayed(String)"
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
  "name": "I navigate to the resourceful application",
  "keyword": "When "
});
formatter.match({
  "location": "MainTestSteps.i_navigate_to_the_resourceful_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name \"mytest$outlook.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "MainTestSteps.i_enter_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "MainTestSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message \"Invalid email\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MainTestSteps.error_message_should_be_displayed(String)"
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
  "name": "I navigate to the resourceful application",
  "keyword": "When "
});
formatter.match({
  "location": "MainTestSteps.i_navigate_to_the_resourceful_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name \"abd.akti@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "MainTestSteps.i_enter_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "MainTestSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login failure message \"Password is required\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MainTestSteps.login_failure_message_should_be_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verify unregistered accounts",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "I navigate to the resourceful application",
  "keyword": "When "
});
formatter.step({
  "name": "I enter user name \"\u003cemail\u003e\"",
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
  "name": "not account found \"No Account Found\" should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "abd.akti23@gmail.com",
        "Mavibeyaz251"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify unregistered accounts",
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
  "name": "I navigate to the resourceful application",
  "keyword": "When "
});
formatter.match({
  "location": "MainTestSteps.i_navigate_to_the_resourceful_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name \"abd.akti23@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "MainTestSteps.i_enter_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"Mavibeyaz251\"",
  "keyword": "And "
});
formatter.match({
  "location": "MainTestSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "MainTestSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "not account found \"No Account Found\" should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MainTestSteps.not_account_found_should_be_displayed(String)"
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
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "I navigate to the resourceful application",
  "keyword": "When "
});
formatter.step({
  "name": "I enter user name \"\u003cemail\u003e\"",
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
  "name": "I click on logout link",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "abd.akti@gmail.com",
        "Mavibeyaz25"
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
  "name": "I navigate to the resourceful application",
  "keyword": "When "
});
formatter.match({
  "location": "MainTestSteps.i_navigate_to_the_resourceful_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user name \"abd.akti@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "MainTestSteps.i_enter_user_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"Mavibeyaz25\"",
  "keyword": "And "
});
formatter.match({
  "location": "MainTestSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "MainTestSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on logout link",
  "keyword": "Then "
});
formatter.match({
  "location": "MainTestSteps.i_click_on_logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
>>>>>>> fba4bc0816cbb8b884e98d62f8b1b4b2ce7afd68
