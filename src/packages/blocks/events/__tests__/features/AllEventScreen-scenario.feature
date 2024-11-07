Feature: AllEventScreen

    Scenario: User navigates to AllEventScreen
        Given I am a User loading AllEventScreen
        When I navigate to the AllEventScreen
        Then AllEventScreen will load with out errors
        And I can click the event list item
        And I can leave the screen with out errors