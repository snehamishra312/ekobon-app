Feature: VideoEmbeddingYoutube

    Scenario: User navigates to VideoEmbeddingYoutube
        Given I am a User loading VideoEmbeddingYoutube
        When I navigate to the VideoEmbeddingYoutube
        Then VideoEmbeddingYoutube will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors