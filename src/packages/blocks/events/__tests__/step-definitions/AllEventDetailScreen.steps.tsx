import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";

import React from "react";
import AllEventDetailScreen from "../../src/AllEventDetailScreen";
const navigation = require("react-navigation");

const screenProps = {
  navigation: {
    getParam: jest.fn(),
    goBack: jest.fn(),
  },
  id: "AllEventDetailScreen",
};

const feature = loadFeature(
  "./__tests__/features/AllEventDetailScreen-scenario.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to AllEventDetailScreen", ({ given, when, then }) => {
    let exampleBlockA: ShallowWrapper;
    let instance: AllEventDetailScreen;

    given("I am a User loading AllEventDetailScreen", () => {
      exampleBlockA = shallow(<AllEventDetailScreen {...screenProps} />);
    });

    when("I navigate to the AllEventDetailScreen", () => {
      instance = exampleBlockA.instance() as AllEventDetailScreen;
    });

    then("AllEventDetailScreen will load with out errors", () => {
      instance.componentDidMount();
      expect(exampleBlockA).toBeTruthy();
      
    });

    then("I can click buttons without errors", () => {
      instance = exampleBlockA.instance() as AllEventDetailScreen;
      let buttonComponent = exampleBlockA.findWhere(
        (node) => node.prop("testID") === "btnBack"
      );

      if (buttonComponent && buttonComponent.length > 0) {
        buttonComponent.simulate("press");
      }

      buttonComponent = exampleBlockA.findWhere(
        (node) => node.prop("testID") === "btnEdit"
      );

      if (buttonComponent && buttonComponent.length > 0) {
        buttonComponent.simulate("press");
      }

      expect(exampleBlockA).toBeTruthy();
      
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(exampleBlockA).toBeTruthy();
      
    });
  });
});
