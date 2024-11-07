import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import AllEventScreen from "../../src/AllEventScreen";
const navigation = require("react-navigation");

const screenProps = {
  navigation: {
    getParam: jest.fn(),
  },
  id: "AllEventScreen",
};

const feature = loadFeature(
  "./__tests__/features/AllEventScreen-scenario.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to AllEventScreen", ({ given, when, then }) => {
    let allEventScreen: ShallowWrapper;
    let instance: AllEventScreen;

    given("I am a User loading AllEventScreen", () => {
      allEventScreen = shallow(<AllEventScreen {...screenProps} />);
    });

    when("I navigate to the AllEventScreen", () => {
      instance = allEventScreen.instance() as AllEventScreen;
    });

    then("AllEventScreen will load with out errors", () => {

      const tokenMsg: Message = new Message(getName(MessageEnum.SessionResponseMessage));
      tokenMsg.addData(getName(MessageEnum.SessionResponseToken), "TOKEN");
      runEngine.sendMessage("Unit Test", tokenMsg);
      
      const msgCreateEventAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgCreateEventAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgCreateEventAPI.messageId
      );
      msgCreateEventAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {
          "data":{"School Pick Up":[{"id":9,"title":"gggg","time":"2000-01-01T17:46:12.960Z","date":"2021-12-30","latitude":"","longitude":"","assign_to":[],"email_account_id":1,"notify":"15 Minutes Before","repeat":"Never","notes":"","visibility":[],"created_at":"2021-12-22T17:48:25.238Z","updated_at":"2021-12-22T17:48:25.238Z","event_type":"School Pick Up","address":"","custom_repeat_in_number":null,"custom_repeat_every":null,"assignee_email":[],"visible_email":[]}]},"each_serializer":{"transform_method":null,"cache_store_instance":null,"cache_store_options":null,"reflected_record_type":"event","record_type":"event","meta_to_serialize":null,"record_id":null,"attributes_to_serialize":{"title":{"key":"title","method":"title","conditional_proc":null},"time":{"key":"time","method":"time","conditional_proc":null},"latitude":{"key":"latitude","method":"latitude","conditional_proc":null},"longitude":{"key":"longitude","method":"longitude","conditional_proc":null},"email_account_id":{"key":"email_account_id","method":"email_account_id","conditional_proc":null},"notify":{"key":"notify","method":"notify","conditional_proc":null},"repeat":{"key":"repeat","method":"repeat","conditional_proc":null},"custom_repeat_in_number":{"key":"custom_repeat_in_number","method":"custom_repeat_in_number","conditional_proc":null},"custom_repeat_every":{"key":"custom_repeat_every","method":"custom_repeat_every","conditional_proc":null},"notes":{"key":"notes","method":"notes","conditional_proc":null},"assignee_email":{"key":"assignee_email","method":"assignee_email","conditional_proc":null},"visible_email":{"key":"visible_email","method":"visible_email","conditional_proc":null},"created_at":{"key":"created_at","method":"created_at","conditional_proc":null},"updated_at":{"key":"updated_at","method":"updated_at","conditional_proc":null},"event_type":{"key":"event_type","method":"event_type","conditional_proc":null},"address":{"key":"address","method":"address","conditional_proc":null},"date":{"key":"date","method":{},"conditional_proc":null},"color_code":{"key":"color_code","method":{},"conditional_proc":null},"role":{"key":"role","method":{},"conditional_proc":null},"assigned_to":{"key":"assigned_to","method":{},"conditional_proc":null},"visibility":{"key":"visibility","method":{},"conditional_proc":null},"user":{"key":"user","method":{},"conditional_proc":null}}}
        }
      );
      instance.apiGetAllEventId = msgCreateEventAPI.messageId;
      runEngine.sendMessage("Unit Test", msgCreateEventAPI);
      
      expect(allEventScreen).toBeTruthy();
      
    });

    then("I can click the event list item", () => {
      instance = allEventScreen.instance() as AllEventScreen;
      let buttonComponent = allEventScreen.findWhere(
        (node) => node.prop("testID") === "btnEventItem"
      );

      if (buttonComponent && buttonComponent.length > 0) {
        buttonComponent.simulate("press");
      }
      expect(allEventScreen).toBeTruthy();
      
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(allEventScreen).toBeTruthy();
      
    });
  });
});
