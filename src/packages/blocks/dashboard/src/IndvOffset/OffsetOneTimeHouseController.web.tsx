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
  id: string;
  history: any;
  location: any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  orderSummaryData: any;
  loader: boolean;
  classicProvider: any;
  greenProvider: any;
  gas: any;
  classicProviderValidation: boolean;
  greenProviderValidation: boolean;
  gasValidation: boolean;

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
  apiOrderSummaryHouseHold: any;

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
    orderSummaryData: {},
    classicProvider: "",
    greenProvider: "",
    gas: "",
    classicProviderValidation: false,
    greenProviderValidation: false,
    gasValidation: false,
  });

  handleFinish = () => {
    if (this.state.classicProvider === "") {
      this.setState({
        classicProviderValidation: true,
      });
    }
    else if (this.state.greenProvider === "") {
      this.setState({
        greenProviderValidation: true,
      });
    }
    else if (this.state.gas === "") {
      this.setState({
        gasValidation: true,
      });
    } else {
      this.handleSubmitHouseHolddata();
    }
  };
  handleInputOnchange = (e: any, check: string) => {
    if (e.target.value !== "0") {
      if (check === "classicProvider") {
        if (e.target.value === "") {
          this.setState({
            classicProviderValidation: true,
          });
        } else {
          this.setState({
            classicProviderValidation: false,
          });
        }
        this.setState({
          classicProvider: e.target.value,
        });
      }
      if (check === "greenProvider") {
        if (e.target.value === "") {
          this.setState({
            greenProviderValidation: true,
          });
        } else {
          this.setState({
            greenProviderValidation: false,
          });
        }
        this.setState({
          greenProvider: e.target.value,
        });
      }
      if (check === "gas") {
        if (e.target.value === "") {
          this.setState({
            gasValidation: true,
          });
        } else {
          this.setState({
            gasValidation: false,
          });
        }
        this.setState({
          gas: e.target.value,
        });
      }
    }
  };
  validation = () => {
    const { classicProvider, greenProvider, gas } = this.state;
    if (classicProvider === "") {
      this.setState({
        classicProviderValidation: true,
      });
    } else {
      this.setState({
        classicProviderValidation: false,
      });
    }
    if (greenProvider === "") {
      this.setState({
        greenProviderValidation: true,
      });
    } else {
      this.setState({
        greenProviderValidation: false,
      });
    }
    if (gas === "") {
      this.setState({
        gasValidation: true,
      });
    } else {
      this.setState({
        gasValidation: false,
      });
    }
  };
  handleSubmitHouseHolddata = async () => {
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
        classical_provider: this.state.classicProvider,
        green_provider: this.state.greenProvider,
        gas: this.state.gas,
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
