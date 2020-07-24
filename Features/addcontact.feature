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


# add new contact with smaller icon

# add new contact with large icon

# add new contact with right icon

# adding new contact without any data

# adding new contact without one word for name

# adding new contact without two words for name 

# adding new contact without two words for name which 100 charaters 

# adding new contact for email with just one word

# adding new contact for email with out anything after at

# adding new contact for email with invalid format with at

# adding new contact for email with invalid format with 50 charaters after at

# adding new contact for company with more than 50 charaters 

# adding new contact for company with less than 50 charaters 

# adding new contact for title with less than 50 charaters 

# adding new contact for title with more than 50 charaters 

# adding new contact for phone with valid local number //10 charters 540-888-3333 // 540888333

# adding new contact for phone with valid international number //091540888333
 
# adding new contact for phone with invalid local number //540888333abc

# adding new contact for phone with invalid international number 091540888333abc

# adding new contact for linkedin profile with anything without linked url

# adding new contact for linkedin profile with valid linked url

# adding new contact for location with any string

# adding new contact for location with one comma string

# adding new contact for location with two comma string

# adding new contact for tag which includes special charaters //@ $ #

# adding new contact for tag which without special charaters //@ $ #




