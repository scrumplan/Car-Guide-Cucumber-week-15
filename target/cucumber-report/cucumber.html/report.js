$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 2,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\" on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\" on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\" on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\" on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Jeep",
        "Compass",
        "QLD - All",
        "$20,000"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Kia",
        "Rio",
        "VIC - All",
        "$15,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Mazda",
        "CX-5",
        "NSW - All",
        "$15,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "NSW - All",
        "$10,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "BMW",
        "118d",
        "VIC - All",
        "$25,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5128470900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Jeep\" on new and used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Compass\" on new and used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"QLD - All\" on new and used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$20,000\" on new and used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 131651400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 225239100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 111477100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1465375000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "BuyStep.iSelectMakeOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 217286300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compass",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectModelOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 110533200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "BuyStep.iSelectLocationOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 76992800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectPriceOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 83491100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickOnFindMyNextCarTabOnNewAndUsedCardSearch()"
});
formatter.result({
  "duration": 2939867400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "BuyStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2050427400,
  "status": "passed"
});
formatter.after({
  "duration": 673216400,
  "status": "passed"
});
formatter.before({
  "duration": 3649333400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Kia\" on new and used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Rio\" on new and used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"VIC - All\" on new and used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$15,000\" on new and used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 33100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 180309700,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 114411600,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1633665600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "BuyStep.iSelectMakeOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 91266400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rio",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectModelOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 101962700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - All",
      "offset": 19
    }
  ],
  "location": "BuyStep.iSelectLocationOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 72673800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectPriceOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 70071900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickOnFindMyNextCarTabOnNewAndUsedCardSearch()"
});
formatter.result({
  "duration": 2343685900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "BuyStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2052566000,
  "status": "passed"
});
formatter.after({
  "duration": 679078100,
  "status": "passed"
});
formatter.before({
  "duration": 3837257200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Mazda\" on new and used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"CX-5\" on new and used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\" on new and used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$15,000\" on new and used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Mazda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 18900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 198451000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 149981600,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 1307233100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 15
    }
  ],
  "location": "BuyStep.iSelectMakeOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 221856900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CX-5",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectModelOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 104221500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyStep.iSelectLocationOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 78205000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectPriceOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 69264200,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickOnFindMyNextCarTabOnNewAndUsedCardSearch()"
});
formatter.result({
  "duration": 2358526500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 23
    }
  ],
  "location": "BuyStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2040185400,
  "status": "passed"
});
formatter.after({
  "duration": 674613800,
  "status": "passed"
});
formatter.before({
  "duration": 3587852000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Audi\" on new and used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"A3\" on new and used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\" on new and used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$10,000\" on new and used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 25400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 273019100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 116434300,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 2507006500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuyStep.iSelectMakeOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 202974400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectModelOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 140214800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyStep.iSelectLocationOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 65968600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectPriceOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 68867000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickOnFindMyNextCarTabOnNewAndUsedCardSearch()"
});
formatter.result({
  "duration": 1996906000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuyStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2043311000,
  "status": "passed"
});
formatter.after({
  "duration": 669403300,
  "status": "passed"
});
formatter.before({
  "duration": 3642938500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"BMW\" on new and used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"118d\" on new and used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"VIC - All\" on new and used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$25,000\" on new and used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 18600,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 185383200,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 1786394900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 168255100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuyStep.iSelectMakeOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 84400600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "118d",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectModelOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 127809400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - All",
      "offset": 19
    }
  ],
  "location": "BuyStep.iSelectLocationOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 71996000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$25,000",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectPriceOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 67846300,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickOnFindMyNextCarTabOnNewAndUsedCardSearch()"
});
formatter.result({
  "duration": 2145329500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuyStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2041874900,
  "status": "passed"
});
formatter.after({
  "duration": 680062800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"\u003cmake\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"\u003cmodel\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"\u003clocation\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"\u003cprice\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 36,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Jeep",
        "Compass",
        "QLD - All",
        "$20,000"
      ],
      "line": 37,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Kia",
        "Rio",
        "VIC - All",
        "$15,000"
      ],
      "line": 38,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Mazda",
        "CX-5",
        "NSW - All",
        "$15,000"
      ],
      "line": 39,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "NSW - All",
        "$10,000"
      ],
      "line": 40,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "BMW",
        "118d",
        "VIC - All",
        "$25,000"
      ],
      "line": 41,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5557913500,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"Jeep\" on used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"Compass\" on used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"QLD - All\" on used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$20,000\" on used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 21200,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 209333200,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickUsedLink()"
});
formatter.result({
  "duration": 128662300,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 1508938500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "BuyStep.iSelectMakeOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 239006800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compass",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectModelOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 83586300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "BuyStep.iSelectLocationOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 65877600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectPriceOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 83656800,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickOnFindMyNextCarTabOnUsedCardSearch()"
});
formatter.result({
  "duration": 2142056500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "BuyStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2052830200,
  "status": "passed"
});
formatter.after({
  "duration": 670613400,
  "status": "passed"
});
formatter.before({
  "duration": 3583461600,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"Kia\" on used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"Rio\" on used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"VIC - All\" on used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$15,000\" on used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 30100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 153236400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickUsedLink()"
});
formatter.result({
  "duration": 1489351200,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 166753900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "BuyStep.iSelectMakeOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 100990300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rio",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectModelOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 324686700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - All",
      "offset": 19
    }
  ],
  "location": "BuyStep.iSelectLocationOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 161101900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectPriceOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 65606000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickOnFindMyNextCarTabOnUsedCardSearch()"
});
formatter.result({
  "duration": 2477585000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "BuyStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2039223400,
  "status": "passed"
});
formatter.after({
  "duration": 661009000,
  "status": "passed"
});
formatter.before({
  "duration": 3830013300,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"Mazda\" on used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"CX-5\" on used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"NSW - All\" on used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$15,000\" on used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"Mazda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 51900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 171398600,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickUsedLink()"
});
formatter.result({
  "duration": 182738900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 1679464400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 15
    }
  ],
  "location": "BuyStep.iSelectMakeOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 187892800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CX-5",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectModelOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 256980900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyStep.iSelectLocationOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 78291800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectPriceOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 80020800,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickOnFindMyNextCarTabOnUsedCardSearch()"
});
formatter.result({
  "duration": 2284686700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 23
    }
  ],
  "location": "BuyStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2046364500,
  "status": "passed"
});
formatter.after({
  "duration": 688130100,
  "status": "passed"
});
formatter.before({
  "duration": 5925989500,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"Audi\" on used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"A3\" on used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"NSW - All\" on used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$10,000\" on used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 20800,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 216520000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickUsedLink()"
});
formatter.result({
  "duration": 121969900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 1869791700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuyStep.iSelectMakeOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 112839800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectModelOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 269158400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyStep.iSelectLocationOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 60299700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectPriceOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 64866300,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickOnFindMyNextCarTabOnUsedCardSearch()"
});
formatter.result({
  "duration": 2467162400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuyStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2049358800,
  "status": "passed"
});
formatter.after({
  "duration": 688217300,
  "status": "passed"
});
formatter.before({
  "duration": 3947817700,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"BMW\" on used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"118d\" on used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"VIC - All\" on used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$25,000\" on used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 26600,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 161694000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickUsedLink()"
});
formatter.result({
  "duration": 2063655300,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 80802800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuyStep.iSelectMakeOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 191558900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "118d",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectModelOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 157610700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - All",
      "offset": 19
    }
  ],
  "location": "BuyStep.iSelectLocationOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 71802100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$25,000",
      "offset": 16
    }
  ],
  "location": "BuyStep.iSelectPriceOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 69218300,
  "status": "passed"
});
formatter.match({
  "location": "BuyStep.iClickOnFindMyNextCarTabOnUsedCardSearch()"
});
formatter.result({
  "duration": 1911918900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuyStep.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2051486700,
  "status": "passed"
});
formatter.after({
  "duration": 669738600,
  "status": "passed"
});
});