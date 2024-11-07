import { IBlock } from "../../../../framework/src/IBlock";
import { Message } from "../../../../framework/src/Message";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";
export const configJSON = require("../../../dashboard/src/Business/config");
import { HISTORY } from "../../../../components/src/comman";
import { message as MESSAGE } from "antd";

export interface Props {
  history: any;
  dataList: any;
  handleCancelChange: any;
}

interface S {
  isModalVisible: boolean;
  isShowModalCancel: boolean;
}

interface SS {
  id: any;
}

export default class IndividualProfilecancelsubscriptionController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiForgotPassword: string = "";
  apiCancelSubscription: any;

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage),
    ];

    this.state = this.getEmptyState();

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async componentDidMount() {
    super.componentDidMount();
    this.setState({
      isShowModalCancel: !this.state.isShowModalCancel,
    });
  }

  getEmptyState = () => ({
    isModalVisible: true,
    isShowModalCancel: false,
  });

  individualLoginUrl = () => {
    this.props.history.push("/login");
  };

  handleBack = () => {
    this.props.handleCancelChange(false);
  };

  handleCancelSusbcription = (ID: any) => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiCancelSubscription = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      "bx_block_my_project/my_subscription_projects/cancel" + `?id=${ID}`
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

  async receive(from: string, message: Message) {
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

      if(apiRequestCallId === this.apiCancelSubscription){
        if (responseJson != null && responseJson.data !== null) {
          MESSAGE.success("Product successfully cancelled.", 3);
          if (window.location.pathname === "/individual/mysubscription") {
            setTimeout(() => {
            HISTORY.push("/individual/mysubscription");
          }, 200);
        } else {
          setTimeout(() => {
            HISTORY.push("/business/mysubscription");
          }, 200);
        }}
      }
    }
  }
}
