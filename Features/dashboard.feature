Feature: dashboard page
Description: validate login page design


Scenario: validate dashboardpage title and logo 
Given I open the application
Then Page title "Resourceful"  and logo should be displayed

Scenario: validate the invited link
Given  I open the application
When   I click on invited link 
Then  title of  "Name of Invitee" should be displayed


Scenario: validating the shared link
Given I open the application
When I click on shared link 
Then  title of  "Shared Contact" should be displayed


Scenario: validate the add contact button
Given I open the application
When I click on  add contact button
Then  title of "Complete the contact profile" should be displayed


Scenario: validate the mesagge page 
Given I open the application
When I click mesagging button 
Then  user name "Omer Faruk" should be displayed



