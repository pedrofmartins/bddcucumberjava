#Author: pedrofalcao@outlook.com
#language: en

Feature: Purchase
  As a visitor of the ecommerce website
  I want to choose one product
  So that I can see the products and costs of what I want to purchase 

  
  Scenario Outline: Select one product to buy
    Given I have a list of products
    When I click on the chosen product
    And I click to buy now with one-click
    Then user enters "<name>" and "<value>" and "<email>"
    And I click to submit
    Then Close the Browser
    
Examples: 

|name  |value        |email             |
|falcao|5581992151293|falcao@example.com|
