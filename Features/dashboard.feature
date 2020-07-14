Feature: dashboard page
Description: validate login page design

Scenario: validate page title and logo
Given I open a browser
When I navigate to the application
Then page title should be "Resourseful"
And logo should be displyed

