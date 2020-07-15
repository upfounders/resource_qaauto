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

Scenario Outline: verify registered accounts
Given I have opened a browser
When I navigate to the resourceful application
And I enter user name "<email>"
And I enter password "<password>"
And click on login button
Then I am able to see logout link on home page
And I click on logout link

Examples:
|email                     |password   |
|abd.akti@gmail.com        |Mavibeyaz25|




