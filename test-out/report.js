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
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d84.0.4147.89)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027HSATEACHER73\u0027, ip: \u0027192.168.0.120\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\aakti\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50142}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0f744acd9d4231e45f801db30c21bcf1\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat pageObject.AddContact.setEmail(AddContact.java:111)\r\n\tat stepDefinitions.MainTestSteps.i_provide_my_personal_details(MainTestSteps.java:115)\r\n\tat ✽.I provide my personal details(file:Features/addcontact.feature:8)\r\n",
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
