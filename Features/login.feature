Feature: login page
Description: validate login page function

Scenario: user attempt to login wihtou any cridential
Given I have opened a browser
When I navigate to the https://upfounders-staging.herokuapp.com/#/login
And I navigate to login page
And click on login button
Then error message "Please enter your email" should be displayed

Scenario: user enter wrong email format
Given I have opened a browser
When I navigate to the nopcommerce application
And I navigate to login page
And I enter user name "mytest$outlook.com"
And click on login button
Then error message "Wrong email" should be displayed

Scenario: user attempt to login without password
Given I have opened a browser
When I navigate to the nopcommerce application
And I navigate to login page
And I enter user name "john12.wayne@yahoo.com"
And click on login button
Then login failure message "Login was unsuccessful." should be displayed

Scenario Outline: verify registered accounts
Given I have opened a browser
When I navigate to the nopcommerce application
And I navigate to login page
And I enter user name "<username>"
And I enter password "<password>"
And click on login button
Then I am able to see logout link on home page
And I click on logout link

Examples:
|username              |password      |
|j.wayne@yahoo.com     |myAccount12   |
|john.wayne@yahoo.com  |myAccount12   |
|john2.wayne@yahoo.com |myAccount12   |
|john12.wayne@yahoo.com|myAccount12   |




