Feature: login page
Description: validate login page function

Scenario: user attempt to login wiht google acount 
Given I have opened a browser
When I navigate to the https://upfounders-staging.herokuapp.com/#/login
And I navigate to login page
And click on sign in with google button
Then then click your email