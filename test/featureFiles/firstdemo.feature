Feature: Demo Feature

  @demo
  Scenario Outline: Run first demo Scenario
    Given Google page is opened
    When Search with <SearchItem>
    Then Click on the first search
    Then URL should match <ExpectedURL>

    Examples:
      | TestID     | SearchItem | ExpectedURL           |
      | Demp_TC001 | WDIO       | https://webdriver.io/ |
