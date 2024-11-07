import { IBlock } from "../../../../framework/src/IBlock";
import { Message } from "../../../../framework/src/Message";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("../config");

export interface Props {
  // Customizable Area Start
  history: any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  lifestyleList: any;
  vehicleList: any;
  accomodationList: any;
  flightList: any;
  lifeStyleCardId: string;
  lifeStyleCardselected: string;
  topicName: string;
  tabValue: string;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class SubscriptionOffsetController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiGetLifestyleList: string = "";
  apiGetVehicleList: string = "";
  apiGetAccomodationList: string = "";
  apiGetFlightList: string = "";

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);
    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.ReciveUserCredentials),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage),
    ];

    this.state = this.getEmptyState();

    // Customizable Area End
    this.receive = this.receive.bind(this);
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
    runEngine.debugLog("Message Received", message);
    console.log("Check Message--", message);
    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );
      const responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );
      const errorReponse = message.getData(
        getName(MessageEnum.RestAPIResponceErrorMessage)
      );

      if (apiRequestCallId === this.apiGetLifestyleList) {
        if (responseJson != null) {
          if (responseJson.data && responseJson.data.length > 0) {
            var tempData = responseJson.data;
            /* generat dynamic Id */
            tempData.forEach((element: any) => {
              element.final_Id = element.id + "_lifestyle";
            });
            this.handleSelectCard(tempData[0]?.final_Id,tempData[0]?.attributes?.name,"Lifestyle") 
            this.setState({
              lifestyleList: tempData,
            });
          } else {
            this.parseApiErrorResponse(responseJson);
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiGetVehicleList) {
        if (responseJson != null) {
          if (responseJson.data && responseJson.data.length > 0) {
            var tempData = responseJson.data;
            /* generat dynamic Id */
            tempData.forEach((element: any) => {
              element.final_Id = element.id + "_vehicle";
            });

            this.setState({
              vehicleList: tempData,
            });
          } else {
            this.parseApiErrorResponse(responseJson);
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiGetAccomodationList) {
        if (responseJson != null) {
          if (responseJson.data && responseJson.data.length > 0) {
            var tempData = responseJson.data;
            /* generat dynamic Id */
            tempData.forEach((element: any) => {
              element.final_Id = element.id + "_accomodation";
            });

            this.setState({
              accomodationList: tempData,
            });
          } else {
            this.parseApiErrorResponse(responseJson);
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiGetFlightList) {
        if (responseJson != null) {
          if (responseJson.data && responseJson.data.length > 0) {
            var tempData = responseJson.data;
            /* generat dynamic Id */
            tempData.forEach((element: any) => {
              element.final_Id = element.id + "_flight";
            });

            this.setState({
              flightList: tempData,
            });
          } else {
            this.parseApiErrorResponse(responseJson);
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    super.componentDidMount();

    this.getLifestyleList();
    this.getVehicleList();
    this.getAccomodationList();
    this.getFlightList();
    this.redirectToOrderHistory();
  }
  redirectToOrderHistory = () => {
    if (window.location.href.includes("/individual/offset-subscription")) {
      window.scrollTo(850, 0);
    }
  };
  handleSelectCard = (value: any, data: any, tabname: any) => {

    this.setState({
      lifeStyleCardId: value,
      lifeStyleCardselected: data,
      topicName: tabname,
    });
    localStorage.setItem("topic_name", tabname ? tabname : "");
  };

  handleSelectMobileCard = (value: any, data: any, tabname: any) => {
    this.setState({
      lifeStyleCardId: value,
      lifeStyleCardselected: data,
      topicName: tabname,
    });
    // localStorage.setItem("topic_name", tabname ? tabname : "");
  };
  getEmptyState = () => ({
    lifestyleList: [],
    vehicleList: [],
    accomodationList: [],
    flightList: [],
    lifeStyleCardId: "",
    lifeStyleCardselected: "",
    topicName: "",
    tabValue: "1",
  });

  getLifestyleList = async () => {
    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetLifestyleList = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.offsetSubscriptionLifestyleEndPointUrl
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBaseURLMessage),
      configJSON.baseURL
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.GetApiMethodType
    );

    console.log("LifeStyle List--", requestMessage);

    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
  };

  getVehicleList = async () => {
    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetVehicleList = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.offsetSubscriptionVehicleEndPointUrl
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBaseURLMessage),
      configJSON.baseURL
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.GetApiMethodType
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };

  getAccomodationList = async () => {
    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetAccomodationList = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.offsetSubscriptionAccomodationEndPointUrl
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBaseURLMessage),
      configJSON.baseURL
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.GetApiMethodType
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };

  getFlightList = async () => {
    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetFlightList = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.offsetSubscriptionFlightEndPointUrl
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBaseURLMessage),
      configJSON.baseURL
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.GetApiMethodType
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };
  // Customizable Area End
}
