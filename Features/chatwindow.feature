Feature: mesagge page
Description: validate chat window design


Scenario: validate the mesagge page 
Given I open mesaging page 
Then  user name "Omer Faruk" should be displayed



Scenario: validate the sending mesagge 
Given I open mesaging page
When I click mesagging field
And I type "hello" on field
Then  in the chat field "hello " should be displayed




Scenario: validate the sending mesagge 
Given I open the application 
When I select the one from list
And i go to his profile and click on mesage button
And I click mesagging field
And I type "hello to new user " on field
Then in the chat field "hello " should be displayed


