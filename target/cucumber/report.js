$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Domingos/eclipse-workspace/cucumber-java-skeleton-master/src/test/resources/io/cucumber/skeleton/compra.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: pedrofalcao@outlook.com"
    },
    {
      "line": 2,
      "value": "#language: en"
    }
  ],
  "line": 4,
  "name": "Purchase",
  "description": "As a visitor of the ecommerce website\nI want to choose one product\nSo that I can see the products and costs of what I want to purchase",
  "id": "purchase",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Select one product to buy",
  "description": "",
  "id": "purchase;select-one-product-to-buy",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have a list of products",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on the chosen product",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click to buy now with one-click",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters \"\u003cname\u003e\" and \"\u003cvalue\u003e\" and \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click to submit",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "purchase;select-one-product-to-buy;",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "email"
      ],
      "line": 20,
      "id": "purchase;select-one-product-to-buy;;1"
    },
    {
      "cells": [
        "falcao",
        "5581992151293",
        "falcao@example.com"
      ],
      "line": 21,
      "id": "purchase;select-one-product-to-buy;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Select one product to buy",
  "description": "",
  "id": "purchase;select-one-product-to-buy;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I have a list of products",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on the chosen product",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click to buy now with one-click",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters \"falcao\" and \"5581992151293\" and \"falcao@example.com\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click to submit",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseSteps.user_app_home_page()"
});
formatter.result({
  "duration": 42638342276,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.user_clicks_on_Product()"
});
formatter.result({
  "duration": 10077130423,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.user_clicks_on_Buynow()"
});
formatter.result({
  "duration": 40910254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "falcao",
      "offset": 13
    },
    {
      "val": "5581992151293",
      "offset": 26
    },
    {
      "val": "falcao@example.com",
      "offset": 46
    }
  ],
  "location": "PurchaseSteps.user_enters_username_and_password(String,String,String)"
});
formatter.result({
  "duration": 2232167034,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.user_clicks_on_submit()"
});
formatter.result({
  "duration": 114793498,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.close_the_Browser()"
});
formatter.result({
  "duration": 1083278380,
  "status": "passed"
});
});