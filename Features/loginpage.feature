Feature: login page
Description: validate login page function

Scenario: user attempt to login wihtout any cridential
Given I have opened a browser
When I navigate to the resourceful application
And click on login button
Then error message "Please enter your email" should be displayed

Scenario: user enter wrong email format
Given I have opened a browser
When I navigate to the resourceful application
And I enter user name "mytest$outlook.com"
And click on login button
Then error message "Wrong email" should be displayed

Scenario: user attempt to login without password
Given I have opened a browser
When I navigate to the resourceful application
And I enter user name "john12.wayne@yahoo.com"
And click on login button
Then login failure message "Login was unsuccessful." should be displayed

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
|abd.akti1@gmail.com       |Mavibeyaz26|
|projectibrahim25@gmail.com|Mavibeyaz27|





