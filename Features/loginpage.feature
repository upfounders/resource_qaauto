Feature: login page
Description: validate login page function

Scenario: user attempt to login wihtout any cridential
Given I have opened a browser
When I navigate to the resourceful application
And click on login button
Then empty email error message "Email is required" should be displayed

Scenario: user enter wrong email format
Given I have opened a browser
When I navigate to the resourceful application
And I enter user name "mytest$outlook.com"
And click on login button
Then error message "Invalid email" should be displayed

Scenario: user attempt to login without password
Given I have opened a browser
When I navigate to the resourceful application
And I enter user name "abd.akti@gmail.com"
And click on login button
Then login failure message "Password is required" should be displayed

Scenario Outline: verify unregistered accounts
Given I have opened a browser
When I navigate to the resourceful application
And I enter user name "<email>"
And I enter password "<password>"
And click on login button
Then not account found "No Account Found" should be displayed


Examples:
|email                     |password    |
|abd.akti23@gmail.com      |Mavibeyaz251|



Scenario Outline: verify registered accounts
Given I have opened a browser
When I navigate to the resourceful application
And I enter user name "<email>"
And I enter password "<password>"
And click on login button
Then I click on logout link

Examples:
|email                     |password   |
|abd.akti@gmail.com        |Mavibeyaz25|





