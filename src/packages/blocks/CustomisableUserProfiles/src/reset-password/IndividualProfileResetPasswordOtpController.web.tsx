import { IBlock } from "../../../../framework/src/IBlock";
import { Message } from "../../../../framework/src/Message";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";
import { HISTORY } from "../../../../components/src/comman";
import { message as MESSAGE } from "antd";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("../config.js");

export interface Props {
  // Customizable Area Start
  history: any;
  location: any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  isModalVisible: boolean;
  IsotpExpired: boolean;
  email: string;
  otp: string;
  Otptime: any;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class IndividualProfileResetPasswordOtpController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiOtpConfirmation: string = "";
  apiResenOtp: string = "";

  constructor(props: Props) {
    super(props);
    console.log(this.props, "Props");

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
      if (apiRequestCallId === this.apiOtpConfirmation) {
        if (responseJson != null) {
          if (!responseJson.errors) {
            localStorage.setItem("token", responseJson.messages[0].token);            
            this.props.history.push("/profile-reset-password-set");
          } else {
            MESSAGE.error(`${responseJson.errors[0].otp}`, 5);
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiResenOtp) {
        if (responseJson != null) {
          if (!responseJson.errors) {
            this.setState({
              otp: '',
              Otptime: Date.now() + 60 * 1000,
              IsotpExpired: false,
            });
            MESSAGE.success(
              `OTP has been sent to ${this.props.location.state}`,
              8
            );
          } else {
            MESSAGE.error(`${responseJson.errors[0].account}`, 5);
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
    email: "",
    otp: "",
    IsotpExpired: false,
    Otptime: Date.now() + 60 * 1000,
  });

  // Customizable Area Start
  handleBack = () => {
    HISTORY.goBack();
  };

  OtpFinishTime = () => {
    this.setState({
      IsotpExpired: true,
    });
  };

  handleModalOk = () => {};

  handleModalCancel = () => {
    this.handleBack();
  };
 
  onFinish = async (values: any) => {    
    if (this.validateForm(values)) {
      this.setState({ email: values.email });
      this.otpConfirmation(values);
    }
  };
  handleOtpChange = (otp: string) => {
    this.setState({
      otp:otp
    })
  };

  validateForm = (values: any) => {
    let isValid = true;
    return isValid;
  };

  handleResendOTP = () => {
    this.resendOtp();
  };
  otpConfirmation = async (values:any) => {
    const header = {
      "Content-Type": configJSON.validationApiContentType,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiOtpConfirmation = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.OtpConfirmationEndPoint
    );
    const httpBody = {
      data: {
        otp: this.state.otp,
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

  resendOtp = async () => {    
    const header = {
      "Content-Type": configJSON.validationApiContentType,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiResenOtp = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.resendOtpEndPoint
    );
    const httpBody = {
      data: {
        attributes: {
          email: this.props.location.state,
        },
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
