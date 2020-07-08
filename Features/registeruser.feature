Feature: register a new user account
Discription: user create a new account on nopCommerce

Scenario: user registeration
Given I open the application
And navigate to register page
When I provide my personal details
|Gender |First Name|Last Name |DoB Day |DoB Month |DoB Year |Email            |Company Name   |Password   |Confirm Password|
|Male   |John      |Wayne     |26      |May       |1950     |john12.wayne@yahoo.com|business llc   |myAccount12|myAccount12     |
And click on register button
Then I have my new account