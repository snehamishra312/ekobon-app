import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../../framework/src/RunEngine";
import { message as MESSAGE } from "antd";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("../config");

export interface Props {
  // Customizable Area Start
  id: string;
  history: any;
  location: any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  selectedCountry: string;
  employeeNo: number;
  loader: boolean;
  carbonReductionTipsdriving: any;
  carbonReductionTipsCorporateEvent: any;
  carbonReductionTipsEmployees: any;
  carbonReductionTipsAirTravel: any;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class CarbonReductionTipsController extends BlockComponent<
  Props,
  S,
  SS
> {
  getCarbonReductionTipsApiCallId: any;
  apiLifeStye: string = "";

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);
    console.disableYellowBox = true;
    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.ReciveUserCredentials),
    ];

    this.state = {
      // Customizable Area Start
      selectedCountry: "",
      employeeNo: 0,
      loader: false,
      carbonReductionTipsdriving: [],
      carbonReductionTipsCorporateEvent: [],
      carbonReductionTipsEmployees: [],
      carbonReductionTipsAirTravel: [],
      // Customizable Area End
    };
    this.receive = this.receive.bind(this);
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
    // Customizable Area Start
    // Customizable Area End
  }

  async componentDidMount() {
    if (localStorage.getItem("token")) {
      this.getCarbonReductionTips();
    }
  }

  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body } = data;
    const token = (await localStorage.getItem("token")) || "";
    const header = {
      "Content-Type": contentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      endPoint
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      method
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBaseURLMessage),
      configJSON.baseURL
    );
    body &&
      requestMessage.addData(
        getName(MessageEnum.RestAPIRequestBodyMessage),
        JSON.stringify(body)
      );
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
  };

  async receive(from: string, message: Message) {
    // Customizable Area Start
    runEngine.debugLog("Message Received", message);

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

      if (responseJson.status === 500) {
        window.notify([{ type: "error", message: responseJson.error[0].token }]);
        return;
      }
      if (apiRequestCallId === this.getCarbonReductionTipsApiCallId) {
        if (responseJson != null) {
          let driving = responseJson.data.filter(
            (a: any) => a.attributes.category === "Driving"
          );
          let corporate_event = responseJson.data.filter(
            (a: any) => a.attributes.category === "Corporate Event"
          );
          let employees = responseJson.data.filter(
            (a: any) => a.attributes.category === "Employees"
          );
          let air_travel = responseJson.data.filter(
            (a: any) => a.attributes.category === "Air Travel"
          );
          this.setState({
            carbonReductionTipsdriving: driving,
            carbonReductionTipsAirTravel: air_travel,
            carbonReductionTipsCorporateEvent: corporate_event,
            carbonReductionTipsEmployees: employees,
          });
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }
    }
    // Customizable Area End
  }

  getCarbonReductionTips = async () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.getCarbonReductionTipsApiCallId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getCarbonRedctionTipsApiEndPoint
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
      configJSON.apiGetMethod
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };
  // Customizable Area End
}
