Feature: mesagge page
Description: validate chat window design


Scenario Outline: verify registered accounts
Given I open the browser
When I navigate to the resourceful application
And I enter user name "<email>"
And I enter password "<password>"
And click on login button
When I click mesagging field
And I type "hello" on field
Then  in the chat field "hello " should be displayed

Examples:
|email                     |password   |
|abd.akti@gmail.com        |Mavibeyaz25|

Scenario: validate the sending mesagge 
Given I open the application 
When I select the one from list
And i go to his profile and click on mesage button
And I click mesagging field
And I type "hello to new user " on field
Then in the chat field "hello " should be displayed


