Feature: dashboard page
Description: validate dashboard page design


Scenario: validate dashboardpage title and logo 
Given I open the browser
And I login the application with "abd.akti@gmail.com" and "Mavibeyaz25"
Then Page title "Resourceful"  and logo should be displayed


Scenario: validate the invited link 
Given  I open the browser
When I login the application with "abd.akti@gmail.com" and "Mavibeyaz25"
When I click on invited link 
Then  invited link title of  "Name of Invitee" should be displayed


Scenario: validating the shared link
Given I open the browser
And I login the application with "abd.akti@gmail.com" and "Mavibeyaz25"
And I click on shared link 
Then  shared link title of  "Shared Contact" should be displayed


Scenario: validate the add contact button
Given I open the browser
And I login the application with "abd.akti@gmail.com" and "Mavibeyaz25"
And I click on  add contact button
Then  creating new contact title of "Add a Contact" should be displayed

#
#Scenario: validate the mesagge page 
#Given I open the application
#When I click mesagging button 
#Then  user name "Omer Faruk" should be displayed



