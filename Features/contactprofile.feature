Feature: dashboard page
Description: validate contact profile page design


Scenario: validate contact profile title 
Given I open the application
And I click on the first person on the dashboard
Then Page title "Contact profile" should be displayed

Scenario: validate the sharing button link
Given  I open the application
When I click on the first person on the dashboard
And   I click on the sharing button 
And I type "abd.akti@gmail.com" and "this is invitation mesage"
Then  I should be able to click on share contact button


Scenario: validating phone button
Given  I open the application
When I click on the first person on the dashboard
And   I click on the phone button 
Then  chrome pop-up should be displayed


Scenario: validate email button
Given  I open the application
When I click on the first person on the dashboard
And   I click on the email button 
Then  I should be able to send email


Scenario: validate editing key strengths 
Given  I open the application
When I click on the first person on the dashboard
And   I click on key strength 
And I type "typing on strength"
Then "typing on strength" should be displayed



Scenario: validate editing key strengths 
Given  I open the application
When I click on the first person on the dashboard
And   I click on key strength 
And I type "typing on notes"
Then "typing on notes" should be displayed








