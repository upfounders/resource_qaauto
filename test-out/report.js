$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/loginpage.feature");
formatter.feature({
  "name": "login page",
  "description": "Description: validate login page function",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user attempt to login wihtout any cridential",
  "description": "",
  "keyword": "Scenario"
});
