Feature: add a new contact 
Discription: user create a new contact on Resourceful

Scenario: adding new contact 
Given I open the application
And navigate to register page
When I provide my personal details
|Full Name |Email             |Company     |Title |PhoneNumber |LinkedInUrl               | City   | State |Country |HashTag     |
|Kadir Akti|abd.akti@gmail.com|Upfounders  |Tester|19500675443 |https://www.linkedin.com/ |Dallas  |Texas  |USA     |Close Friend|
And click on register button
Then I have my new account