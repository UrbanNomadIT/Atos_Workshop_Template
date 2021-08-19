Feature: Test Automation

  @Register
  Scenario Outline: Invalid Login in Facebook
    Given I am in the page "<Url>"
    Then I see the message for cookies
    And I click the button accept cookies
    And I type my "<username>" and "<password>"
    And I click login
    Then I see the wrong message


    Examples:
      | Url |  username | password  |
      | Facebook |  WrongUsername | WrongPassword  |