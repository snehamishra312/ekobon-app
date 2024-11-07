import { IBlock } from "../../../../framework/src/IBlock";
import { Message } from "../../../../framework/src/Message";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";
import { message as MESSAGE } from "antd";
import { LOGO } from "../assets";
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
  tabClick: string;
  carbonOffsetMaxLimitValue: any;
  carbonOffsetType: any;
  isCreditCardMaxLimit: boolean;
  selectedMethod: string;
  selectedDebitCredit: string;
  loader: boolean;
  orderBtnLoader: boolean;
  CartSummeryData: any;
  paginationData: any;
  CartOrderData: any;
  cardNumber: string;
  expiryDate: string;
  cvvNo: string;
  cardName: string;
  CartListData: any;
  screenLoard: boolean;
  indCartNext: any;
  orderSummaryData: any;
  payment_intent: any;
  paymentStatusLoader: boolean;
  razorPayOrderId: any;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class IndividualAddtoCartController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiGetCartSummery: string = "";
  apiDeleteCart: string = "";
  apiGetCartDetails: string = "";
  apiCartOrderContinue: string = "";
  apiAddNewCard: string = "";
  apiGetCartList: string = "";
  apiCreatePayments: string = "";
  apiConfirmPayments: string = "";
  apiRetrievePayment: string = "";
  apiDeleteCardFromCardList: string = "";
  apiAddDefaultCard: string = "";
  postRazorPayAPICallID: any;
  postRazorPayVerifyAPICallID: any;
  history: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      tabClick: "1",
      indCartNext: 0,
      isCreditCardMaxLimit: false,
      carbonOffsetMaxLimitValue: "",
      carbonOffsetType: [],
      selectedMethod: "",
      selectedDebitCredit: "",
      loader: false,
      orderBtnLoader: false,
      CartSummeryData: [],
      paginationData: {},
      CartOrderData: {},
      cardNumber: "",
      expiryDate: "",
      cvvNo: "",
      cardName: "",
      CartListData: [],
      screenLoard: false,
      orderSummaryData: {},
      payment_intent: "",
      paymentStatusLoader: false,
      razorPayOrderId: "",
    };
    this.receive = this.receive.bind(this);
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

      if (responseJson && responseJson.data) {
      } else if (responseJson && responseJson.errors) {
        if (apiRequestCallId === this.postRazorPayAPICallID) {
          MESSAGE.error(responseJson.error.message, 5);
          this.setState({
            loader: false,
          });
          this.parseApiErrorResponse(responseJson);
        }
        if (apiRequestCallId === this.postRazorPayVerifyAPICallID) {
          MESSAGE.error(responseJson.error.message, 5);
          this.setState({
            loader: false,
          });
          this.parseApiErrorResponse(responseJson);
        }
      }

      if (apiRequestCallId === this.apiGetCartSummery) {
        if (responseJson != null) {
          this.setState({
            carbonOffsetMaxLimitValue: responseJson.carbon_offset_max_limit,
          });
          if (responseJson.data && responseJson.data.length > 0) {
            this.setState({
              CartSummeryData: responseJson.data,
              paginationData: responseJson?.meta?.pagination,
              loader: false,
            });
           
            console.log(responseJson?.data[0]?.id)
              // localStorage.setItem(
              //   "order_id",
              //   JSON.stringify(responseJson?.data[0]?.id)
              // );
            responseJson?.data?.map((item: any) => (
              item?.attributes?.offset_type == "gift_cards" &&
              this.state?.carbonOffsetType?.push(item?.attributes?.offset_type)
            ))
          } else {
            this.setState({
              CartSummeryData: [],
              loader: false,
            });
            this.parseApiErrorResponse(responseJson);
          }
        }
        this.setState({
          loader: false,
        });
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiGetCartDetails) {
        if (responseJson != null && responseJson.data !== null) {
          this.setState({
            orderSummaryData: responseJson.data.attributes,
          });
          localStorage.setItem(
            "cart_item",
            responseJson.data.attributes.total_item
          );
          if (window.location.pathname === "/individual/AddtoCard") {
            this.props.history.replace("/individual/AddtoCard");
          } else {
            this.props.history.replace("/business/AddtoCard");
          }
        } else {
          this.setState({
            orderSummaryData: {},
          });
          this.parseApiErrorResponse(responseJson);
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiDeleteCart) {
        if (responseJson != null) {
          if (responseJson.message === "Record Deleted") {
            MESSAGE.success(responseJson.message, 5);
            this.setState({
              loader: false,
            });
            this.GetCartSummeryData();
            this.GetCartDetailsData();

          } else {
            MESSAGE.error(responseJson.message, 5);
            this.setState({
              loader: false,
            });
            this.parseApiErrorResponse(responseJson);
          }
        }
      } else if (apiRequestCallId === this.apiGetCartList) {
        if (responseJson !== null && responseJson.card_list.data.length > 0) {
          this.setState({
            CartListData: responseJson.card_list.data,
            screenLoard: false,
          });
        } else {
          this.setState({
            CartListData: [],
            screenLoard: false,
          });
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    if (localStorage.getItem("token")) {
      this.GetCartSummeryData();
      this.GetCartDetailsData();
      this.GetCartListData();
    }
  }
  handlePageClick = (e: any) => {
    let event = e.selected;
    this.setState({ indCartNext: event + 1 }, () =>
      this.GetCartSummeryData()
    );
  };
  collapseOnchangeTab = (tab: any) => {
    if (this.state.CartSummeryData.length > 0) {
      this.setState({
        tabClick: tab,
      });
      if (tab === "2") {
        this.GetCartListData();
      }
    }
  };

  handleNextCollapse = () => {
    this.GetCartListData();
    const location = window.location.pathname;
    if (this.state.carbonOffsetType[0] == "gift_cards") {
      location == "/business/AddtoCard"
        ? this.props.history.push({
          pathname: "/business/AddtoCard/payment",
          state: this.state.orderSummaryData,
        })
        : this.props.history.push({
          pathname: "/individual/AddtoCard/payment",
          state: this.state.orderSummaryData,
        });
    }
    else {
      if (
        this.state.orderSummaryData?.total_impact -
        this.state.orderSummaryData?.total_no_of_trees * 0.04 ==
        0
      ) {
        location == "/business/AddtoCard"
          ? this.props.history.push({
            pathname: "/business/AddtoCard/payment",
            state: this.state.orderSummaryData,
          })
          : this.props.history.push({
            pathname: "/individual/AddtoCard/payment",
            state: this.state.orderSummaryData,
          });
      } else {
        location == "/business/AddtoCard"
          ? this.props.history.push({
            pathname: "/business-payment/success",
            state: this.state.orderSummaryData,
          })
          : this.props.history.push({
            pathname: "/individual-payment/success",
            state: this.state.orderSummaryData,
          });
      }
    }
  };

  ///Get Order Summary data
  GetCartSummeryData = async () => {
    const Token = localStorage.getItem("token") || "";
    this.setState({
      loader: true,
    });
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetCartSummery = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.CartSummeryListEndPointUrl + `?per=5&page=${this.state.indCartNext}`
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

  ///Get Card Details data
  GetCartDetailsData = async () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetCartDetails = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.CardDetailsEndPointUrl
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

  ///Get Card List
  GetCartListData = async () => {
    this.setState({
      screenLoard: true,
    });
    const Token = localStorage.getItem("token") || "";

    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetCartList = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.individualGetCardListEndPointUrl
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

  ///Remove Cart from Order list
  handleRemoveCart = (ID: any) => {
    this.setState({
      loader: true,
    });
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
      configJSON.RemoveOrderSummeryCartEndPointUrl + `?id=${ID}`
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

  // Customizable Area End
}
