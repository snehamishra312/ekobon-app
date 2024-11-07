Feature: AllEventDetailScreen

    Scenario: User navigates to AllEventDetailScreen
        Given I am a User loading AllEventDetailScreen
        When I navigate to the AllEventDetailScreen
        Then AllEventDetailScreen will load with out errors
        And I can click buttons without errors
        And I can leave the screen with out errors