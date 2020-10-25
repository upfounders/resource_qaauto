Feature: add a new contact 
Description: user create a new contact on Resourceful




Scenario: adding new contact without any information
Given I open the browser
And I login the application with "abd.akti@gmail.com" and "Mavibeyaz25"
And I click on  add contact button
When I provide my personal details
|imgURL|Full Name |Email             |Company     |Title |phone |url               | City   | State |Country |hashtag    |
|      |          |                  |            |      |      | |  |     ||
And click on register button
Then I get "Full name is required" and "Email is required" and "Company is required" and "Location is required" and "At least 1 tag is required"


Scenario: adding new contact with full information
Given I open the browser
And I login the application with "abd.akti@gmail.com" and "Mavibeyaz25"
And I click on  add contact button
When I provide my personal details
|imgURL|Full Name |Email             |Company     |Title |phone |url               | City   | State |Country |hashtag    |
|C:\Users\aakti\Desktop\kdr.jpg|Kadir Akti|abd.akti16@gmail.com|Upfounders  |Tester|19500675443 |https://www.linkedin.com/ |Dallas,  |Texas,  |USA     |CloseFriend|
And click on register button
Then I have my new account



Scenario: adding new contact with partial information
Given I open the browser
And I login the application with "abd.akti@gmail.com" and "Mavibeyaz25"
And I click on  add contact button
When I provide my personal details
|imgURL|Full Name |Email             |Company     |Title |phone |url               | City   | State |Country |hashtag    |
|      |  a       | a               |            |      |      |                  |     assda   |   assda    |  assda      |     #@@      |
And click on register button
Then Iget "Please provide fullname, at least firstname and lastname." and "Invalid email" and "Title is limited to 20 characters only" and "Tag is limited to letters and numbers"
#  Then I continue get "Location format: City, State, Country (ex: San Francisco, CA, USA)" and "Invalid Linkedin url" and "Phone number is invalid (for international number follow this format, ex: +15556667777)"







# adding new contact without two words for name which 100 charaters 






# adding new contact for email with invalid format with 50 charaters after at

# adding new contact for company with more than 50 charaters 







# adding new contact for phone with valid international number //091540888333
 
# adding new contact for phone with invalid local number //540888333abc

# adding new contact for phone with invalid international number 091540888333abc










