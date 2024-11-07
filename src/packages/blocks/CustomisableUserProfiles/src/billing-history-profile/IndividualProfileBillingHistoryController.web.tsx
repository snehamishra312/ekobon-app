import { IBlock } from "../../../../framework/src/IBlock";
import { Message } from "../../../../framework/src/Message";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";
import axios from "axios";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("../../../../framework/src/config");

export interface Props {
  // Customizable Area Start
  history: any;
  dataList: any;
  change: any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  isShowModal: boolean;
  orderData: any;
  isLoader: boolean;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class IndividualProfileBillingHistoryController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiDownloadOrderInvoice: any;

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
    // Customizable Area End
  }

  async componentDidMount() {
    super.componentDidMount();
    this.setState({
      isShowModal: !this.state.isShowModal,
      orderData: this.props.dataList,
    });
  }

  getEmptyState = () => ({
    isShowModal: false,
    orderData: {},
    isLoader: false,
  });

  // Customizable Area Start
  individualLoginUrl = () => {
    this.props.history.push("/login");
  };

  handleBack = () => {
    this.setState({ isShowModal: !this.state.isShowModal });
  };

  handleModalOk = () => {};

  handleModalCancel = () => {
    this.handleBack();
  };
  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body } = data;
    const token = (await localStorage.getItem("token")) || "";
    const header = {
      "Content-Type": contentType,
      token: token,
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

    this.DownloadOrderInvoiceApicalled(requestMessage);
  };

  DownloadOrderInvoice = async (invoiceID: any) => {
    this.apiDownloadOrderInvoice = await this.apiCall({
      method: configJSON.apiGetMethod,
      endPoint:
        "bx_block_order_management/order_histories/invoice" +
        `?order_item_id=${invoiceID}`,
    });
  };

  DownloadOrderInvoiceApicalled = (requestData: any) => {
    this.setState({
      isLoader: true,
    });
    const token = localStorage.getItem("token") || "";
    axios({
      url:
        requestData.properties.RestAPIRequestBaseURLMessage +
        "/" +
        requestData.properties.RestAPIResponceEndPointMessage,
      method: "GET",
      responseType: "blob", // important
      headers: {
        "Content-Type": "application/json",
        token,
      },
    })
      .then((response) => {
        this.setState({
          isLoader: false,
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Invoice.pdf");
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => {
        console.log(err.response, "ERRROR");
      });
  };
  // Customizable Area End
}
