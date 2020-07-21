Feature: invited page
Description:invited page login page design


Scenario: validate invited page
Given I open the application
And I click on invited link
Then Page title "Name of Invitee"  and "Email" and "Invited On" should be displayed

Scenario: validate the list
Given  I open the application
When   I click on invited link 
Then  first user   "omer faruk" and " abd.akti1@gmaail.com" and "Jul 15, 2020, 11:40:52 PM" should be displayed

