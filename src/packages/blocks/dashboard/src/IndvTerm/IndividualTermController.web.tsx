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
  TermConditionData: string;
  isLoader: boolean;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class IndividualTermController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiFaq: string = "";

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
      if (apiRequestCallId === this.apiFaq) {
        if (responseJson != null) {
          if (responseJson.term_and_conditions.length > 0) {
            this.setState({
              TermConditionData: responseJson.term_and_conditions,
              isLoader: false,
            });
          } else {
            this.setState({
              isLoader: false,
            });
            this.parseApiErrorResponse(responseJson);
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    this.FetchTermsData();
  }

  getEmptyState = () => ({
    TermConditionData: "",
    isLoader: false,
  });

  FetchTermsData = async () => {
    this.setState({
      isLoader: true,
    });
    const header = {
      "Content-Type": configJSON.validationApiContentType,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiFaq = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.TermConditionEndPointUrl
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
