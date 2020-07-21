Feature: add a new contact 
Discription: user create a new contact on Resourceful

Scenario: adding new contact 
Given I open the browser
And I login the application with "abd.akti@gmail.com" and "Mavibeyaz25"
And I click on  add contact button
When I provide my personal details
|imgURL|Full Name |Email             |Company     |Title |phone |url               | City   | State |Country |hashtag    |
|C:\Users\aakti\Desktop\kdr.jpg|Kadir Akti|abd.akti16@gmail.com|Upfounders  |Tester|19500675443 |https://www.linkedin.com/ |Dallas,  |Texas,  |USA     |CloseFriend|
And click on register button
Then I have my new account