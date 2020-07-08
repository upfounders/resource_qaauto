Feature: home page
Description: validate home page design

Scenario: validate page title and logo
Given I open a browser
When I navigate to the application
Then page title should be "nopCommerce demo store"
And logo should be displyed

Scenario: validate register link on homepage
Given I open a browser
When I navigate to the application
And I click on the register link
Then register page loaded and message "Register" should be displayed