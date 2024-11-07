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
  paymentLoader: boolean,
  val: boolean,
  gift_mail : any,
  update_message:any,
}

interface SS {
  id: any;
}

export default class IndvPaymentSuccessAlertController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiForgotPassword: string = "";
  apiDeleteCart: any;

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);
    this.state = this.getEmptyState();
    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage),
    ];

    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }


  async receive(from: string, message: Message) {
    // Customizable Area Start
    runEngine.debugLog("Message Received", message);
    // Customizable Area End
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
      if (apiRequestCallId === this.apiDeleteCart) {
        if (responseJson != null) {
          if (this.state.val == false) {
            const current_location = localStorage.getItem("current_localtion");
            var dashboard_location = current_location ? JSON.parse(current_location) : "";
            setTimeout(() => {
              dashboard_location === "/business/AddtoCard/payment" ?
                window.location.href = "/business/dashboard" :
                window.location.href = "/individual/dashboard";
            }, 2000);
          }
          else {
            localStorage.removeItem("climate_project_id");
            this.setState({
              paymentLoader: false,
            })
          }
        }
      }
    }
  }

  async componentDidMount() {
    super.componentDidMount();
    // const gift_mail = localStorage.getItem("gifted_mail")
    // const giftmailId = gift_mail ? JSON.parse(gift_mail) : "";
    // this.setState({
    //   gift_mail : giftmailId,
    // })
  }

  getEmptyState = () => ({
    val: false,
    paymentLoader:true,
    gift_mail:"",
    update_message:"",
  });

  handleRemoveCart = (data: any) => {
    if (data == "0") {
      this.setState({
        val: false
      })
    }
    else {
      this.setState({
        val: true
      })
    }
    const id = localStorage.getItem("orderId");
    const orderId = id ? JSON.parse(id) : "";
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiDeleteCart = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.RemoveOrderDeleteCartEndPointUrl + `?order_id=${orderId}`
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
      configJSON.apiDeleteMethod
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };

  // Customizable Area Start
  // Customizable Area End
}
