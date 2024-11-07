import { IBlock } from "../../../../framework/src/IBlock";
import { Message } from "../../../../framework/src/Message";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";
import { HISTORY } from "../../../../components/src/comman";

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
  isModalVisible: boolean;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class IndividualProfileResetPasswordController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiForgotPassword: string = "";

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
      if (apiRequestCallId === this.apiForgotPassword) {
        if (responseJson != null) {
          if (!responseJson.errors) {
            this.props.history.push(
              "/profile-reset-password-success"
            );
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
  }

  getEmptyState = () => ({
    isModalVisible: true,
  });

  handleBack = () => {
    HISTORY.goBack();
  };

  handleModalOk = () => {};

  handleModalCancel = () => {
    this.handleBack();
  };

  onFinish = async (values: any) => {
    if (this.validateForm(values)) {
      this.createPassword(values);
    }
  };

  validateForm = (values: any) => {
    let isValid = true;

    return isValid;
  };

  createPassword = async (values: any) => {
    const getToken: any = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiForgotPassword = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.forgotPasswordEndPoint
    );
    const httpBody = {
      data: {
        token: getToken,
        new_password: values.new_password,
        confirm_password: values.confirm_password,
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
      configJSON.httpPostMethod
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };
  // Customizable Area End
}
