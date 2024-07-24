Feature: login - 1

  Scenario: sebagai user, saya dapat login di herokuapp

    Given I am on the login page
    When I login with '<username>' and '<password>'


    Examples:
        | username | password |
        | John Doe  | ThisIsNotAPassword | 


