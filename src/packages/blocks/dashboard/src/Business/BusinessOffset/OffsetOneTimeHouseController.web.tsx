import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../../framework/src/RunEngine";

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
  orderSummaryData: any;
  loader: boolean;

  // Customizable Area End
}

interface SS {
  id: any;
}

export default class OffsetOneTimeHouseController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiOrderSummaryHouseHold: string = "";

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);
    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage),
    ];

    this.state = this.getEmptyState();

    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

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
      if (apiRequestCallId === this.apiOrderSummaryHouseHold) {
        if (responseJson != null) {
          this.setState({
            orderSummaryData: responseJson,
            loader: false,
          });
        } else {
          this.setState({
            loader: false,
          });
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  getEmptyState = () => ({
    loader: false,
    orderSummaryData: "",
  });

  handleFinish = (values: any) => {
    this.handleSubmitHouseHolddata(values);
  };

  handleSubmitHouseHolddata = async (values: any) => {
    this.setState({
      loader: true,
    });

    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiOrderSummaryHouseHold = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.offsetOneTimeHouseHoldEndPointUrl
    );

    const httpBody = {
      data: {
        classical_provider: values.classicProvider,
        green_provider: values.greenProvider,
        gas: values.gas,
      },
    };
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(httpBody)
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
      configJSON.apiPostMethod
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };
  // Customizable Area End
}
