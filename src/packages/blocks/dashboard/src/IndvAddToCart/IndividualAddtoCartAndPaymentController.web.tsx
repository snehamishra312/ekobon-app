import { IBlock } from "../../../../framework/src/IBlock";
import { Message } from "../../../../framework/src/Message";
import { BlockComponent } from "../../../../framework/src/BlockComponent";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";
import { message as MESSAGE } from "antd";
import { LOGO } from "../assets";
// import { useNavigate } from 'react-router-dom';
// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
import { constants } from '../../../../components/src/types'
import urlRedirect from "./urlRedirect";
import axios from "axios";
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
  isCreditCardMaxLimit: boolean;
  selectedMethod: string;
  selectedDebitCredit: string;
  loader: boolean;
  orderBtnLoader: boolean;
  CartSummeryData: any;
  CartOrderData: any;
  cardNumber: string;
  expiryDate: string;
  cvvNo: string;
  cardName: string;
  CartListData: any;
  screenLoard: boolean;
  orderSummaryData: any;
  orderDetail: any;
  orderId: any;
  payment_intent: any;
  paymentStatusLoader: boolean;
  razorPayOrderId: any;
  paymentError: any;
  paymentId: any
  razorpay_payment_id: any
  cardLoard: boolean;
  paymentLoader: boolean;
  noOfTrees: any;
  project_detail: any;
  project_image: any;
  gift_offset: any;
  cardPaymentDetail: any;
  fromName: any;
  currencyCode: any;

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
  [x: string]: any;
  apiGetCartSummery: string = "";
  apiPaymentFailure: any;
  apiPaymentSuccess: any;
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
  apiGetGiftCardImage: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      project_image: "",
      fromName: "",
      currencyCode:"",
      paymentLoader: false,
      razorpay_payment_id: "",
      tabClick: "1",
      isCreditCardMaxLimit: false,
      carbonOffsetMaxLimitValue: "",
      selectedMethod: "",
      selectedDebitCredit: "",
      loader: false,
      orderBtnLoader: false,
      CartSummeryData: [],
      CartOrderData: {},
      cardNumber: "",
      expiryDate: "",
      cvvNo: "",
      cardName: "",
      CartListData: [],
      screenLoard: false,
      cardLoard: false,
      orderSummaryData: {},
      orderDetail: [],
      orderId: [],
      payment_intent: "",
      paymentStatusLoader: false,
      razorPayOrderId: "",
      paymentError: null,
      paymentId: "",
      noOfTrees: 0,
      project_detail: {},
      gift_offset: "",
      cardPaymentDetail: [],
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

      if (responseJson?.status === 500) {
        if (this.state.paymentStatusLoader) {
          this.paymentFailerInfo()
        }
        this.setState({
          paymentStatusLoader: false,
          paymentError: true
        })
        //  MESSAGE.error(constants.BusinessScreen.contact_team,5)
        // //  this.props.history.push("/business/AddtoCard")
      }
      if (responseJson && responseJson.data) {
        if (apiRequestCallId === this.apiGetCartSummery) {
          localStorage.setItem(
            "cart_items",
            JSON.stringify(responseJson.data)
          );
          console.log({ responseJson }, "Hello this is the data")
          this.setState({
            cardPaymentDetail: responseJson.data
          })
        }
        if (apiRequestCallId === this.postRazorPayAPICallID) {
          this.setState(
            {
              razorPayOrderId: responseJson.data.razorpay_order.attributes,
              loader: false,
              paymentStatusLoader: false,
            },
            () => this.openCheckout(this.state.razorPayOrderId)
          );
        }
        if (apiRequestCallId === this.zaakpayPaymentApiCallId) {
          window.location.href = responseJson.data.url
        }
        if (apiRequestCallId === this.apiRetrievePayment) {
          console.log(responseJson)
          if (responseJson.data.payment_intent.status === "succeeded") {
            MESSAGE.success("Payment Successfully Done", 4);
            window.location.pathname === "/individual/AddtoCard/payment" ?
              window.location.href = "/individual-payment/success-alert" :
              window.location.href = "/business-payment/success-alert";
          }
        }
        if (apiRequestCallId === this.postRazorPayVerifyAPICallID) {
          MESSAGE.success("Payment Successfully Done", 4);
          this.paymentSuccess();
          this.props.history.push(
            window.location.pathname === "/individual/AddtoCard/payment"
              ? "/individual-payment/success-alert"
              : "/business-payment/success-alert"
          );
        }
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
              loader: false,
            });
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
          const gifted_mail = localStorage.getItem("gifted_mail");
          const is_gift = gifted_mail ? JSON.parse(gifted_mail) : "";
          is_gift ? "" : localStorage.setItem(
            "no_of_trees",
            responseJson.data.attributes.total_no_of_trees
          );
          this.handleNoOfTreeValue();
        } else {
          this.setState({
            orderSummaryData: {},
          });
          this.parseApiErrorResponse(responseJson);
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiDeleteCartItem) {
        if (responseJson != null) {
          if (responseJson.message === "Record Deleted") {
            this.setState({
              loader: false,
            });
            this.GetCartSummeryData();
            this.GetCartDetailsData();
          } else {
            this.setState({
              loader: false,
            });
            this.parseApiErrorResponse(responseJson);
          }
        }
      }
      else if (apiRequestCallId === this.apiGetGiftCardImage) {
        if (responseJson != null) {
          console.log({ responseJson })
          this.setState({
            project_image: responseJson?.image,
          })
        }
      }
      else if (apiRequestCallId === this.apiDeleteCart) {
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
      } else if (apiRequestCallId === this.apiCartOrderContinue) {
        if (responseJson?.message) {
          MESSAGE.error(responseJson?.message, 5)
          this.setState({
            orderBtnLoader: false,
            paymentStatusLoader: false,
            orderSummaryData: null
          })
        }
        if (responseJson != null && responseJson.data !== null) {
          this.setState(
            {
              CartOrderData: responseJson.data,
              orderBtnLoader: false,
            },
            () => this.postRazorPayOrder()
          );
        } else {
          this.setState({
            orderBtnLoader: false,
            paymentStatusLoader: false,
          });
          this.parseApiErrorResponse(responseJson);
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiAddNewCard) {
        if (responseJson.data !== null) {
          MESSAGE.success("Card successfully added.", 4);
          this.setState({
            selectedDebitCredit: "",
            cardLoard: false,
          });
          this.GetCartListData();
        } else {
          MESSAGE.error("Card note added.", 4);
          this.setState({
            cardLoard: false,
          });
          this.parseApiErrorResponse(responseJson);
        }

        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiGetCartList) {
        if (responseJson !== null && responseJson.card_list.data.length > 0) {
          const cartList: any = responseJson?.card_list?.data?.filter((ele: any, ind: any) =>
            ind === responseJson?.card_list?.data?.findIndex((elem: any) => elem.fingerprint === ele.fingerprint))
          console.log({ cartList })
          console.log(responseJson?.card_list?.data)
          this.setState({
            CartListData: cartList,
            screenLoard: false,
          });
        } else {
          this.setState({
            CartListData: [],
            screenLoard: false,
          });
        }

        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiAddDefaultCard) {
        if (responseJson !== null) {
          MESSAGE.success(responseJson.message, 4);
        }

        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiCreatePayments) {
        if (responseJson !== null && responseJson.data !== null) {
          this.setState(
            {
              payment_intent: responseJson.data.payment_intent.id,
            },
            () => this.handleConfirmPayment(responseJson.data.payment_intent.id)
          );
        }

        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiConfirmPayments) {
        if (responseJson !== null && responseJson.data !== null) {
          MESSAGE.success(responseJson.data.message, 4);
          console.log({ responseJson }, responseJson.data.message);
          this.setState(
            {
              paymentStatusLoader: false,
            },
            () => this.handleRetrievePayment()
          );
        } else {
          this.setState({
            paymentStatusLoader: false,
          });
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiRetrievePayment) {
        if (responseJson !== null && responseJson.data !== null) {
          this.handleServerResponse(responseJson.data);
        } else {
          this.setState({
            paymentStatusLoader: false,
          });
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiDeleteCardFromCardList) {
        if (responseJson.message === "Card removed successfully") {
          MESSAGE.success("Card removed successfully.", 4);
          this.GetCartListData();
        } else {
          MESSAGE.error("Card not removed", 4);
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    if (localStorage.getItem("token")) {
      this.handleNoOfTreeValue();
      this.GetCartSummeryData();
      this.GetCartDetailsData();
      this.handleGetGiftCardImage();
      const UserDetails = localStorage.getItem("UserDetails") || "";
      const UserData = UserDetails ? JSON.parse(UserDetails) : "";
      const currency_conversion = localStorage.getItem("currency_conversion") || "";
      const currencyConvert = currency_conversion ? JSON.parse(currency_conversion) : "";
      this.setState({
        fromName: UserData?.first_name,
        currencyCode : currencyConvert?.currency_code,
      })
    }
  }

  handleNoOfTreeValue = () => {
    const selected_project_image = localStorage.getItem("selected_project_image");
    const no_of_trees = localStorage.getItem("no_of_trees");
    const gifted_offset = localStorage.getItem("gifted_offset");
    const giftesOffset = gifted_offset ? JSON.parse(gifted_offset) : "";
    this.setState({
      gift_offset: giftesOffset
    })

    if (selected_project_image) {
      const val = JSON.parse(selected_project_image);
      this.setState({
        project_detail: val,
      })
    }
    if (no_of_trees) {
      const no_of_tree = JSON.parse(no_of_trees);
      this.setState({
        noOfTrees: no_of_tree,
      })
    }
  }

  handleCardOrderContinue = () => {
    const project_ids = localStorage.getItem("cart_items");
    const project_id = localStorage.getItem("project_id");
    const giftedMail = localStorage.getItem("gifted_mail");
    const giftMailId = giftedMail != null ? JSON.parse(giftedMail ? giftedMail : "") : ""
    const data = JSON.parse(project_ids !== null ? project_ids : "");
    this.setState({
      orderBtnLoader: true,
      paymentStatusLoader: true,
    });
    let currency_conversion = localStorage.getItem("currency_conversion");
    let currency_conversion_response = currency_conversion
      ? JSON.parse(currency_conversion)
      : null;
    const Token = localStorage.getItem("token") || "";
    data?.map((item: any) => {
      const header = {
        "Content-Type": configJSON.validationApiContentType,
        token: Token,
      };
      const requestMessage = new Message(
        getName(MessageEnum.RestAPIRequestMessage)
      );
      this.apiCartOrderContinue = requestMessage.messageId;
      const params = this.props.history?.location?.selectedProjectId;
      const is_activated = `?currency_code=${currency_conversion_response?.currency_code}&my_project_id=${item?.id}&is_activated=true`;
      const is_not_activated = `?currency_code=${currency_conversion_response?.currency_code}&my_project_id=${item.id}&is_activated=true`;
      const is_gift_card_active = `?currency_code=${currency_conversion_response?.currency_code}&my_project_id=${item.id}&is_activated=true&giftedmail=${giftMailId}`;
      const finalParams = giftMailId == "" ?
        params?.is_activated == "project_selected"
          ? is_activated
          : is_not_activated : is_gift_card_active;
      requestMessage.addData(
        getName(MessageEnum.RestAPIResponceEndPointMessage),
        configJSON.individualOrderContinueEndPointUrl + `${finalParams}`
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
    })
  };

  PaymentMenthodSelect = (tab: any) => {
    // this.GetCartListData();
    this.setState({
      selectedMethod: tab,
      selectedDebitCredit: "",
    });
  };
  PaymentSelectedCard = (id: any) => {
    this.setState({
      selectedDebitCredit: id,
    });
    if (id !== "addnew") {
      this.handleAddDefaultCard(id);
    }
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
    this.setState({
      tabClick: "2",
    });
    this.GetCartListData();
  };
  handleInputOnChange = (check: string, e: any) => {
    let value = e.target.value;
    if (check === "cardNumber") {
      this.setState({
        cardNumber: value,
      });
    } else if (check === "expiryDate") {
      this.setState({
        expiryDate: value,
      });
    } else if (check === "cvvNo") {

      this.setState({
        cvvNo: value,
      });
    }
  };

  handleNameInputOnChange = (e: any) => {
    let value = e.target.value;
    this.setState({
      cardName: value,
    });
  };

  ///add new credit or debit card
  handleAddNewCard = () => {
    this.setState({
      cardLoard: true,
    })
    const rule = /^[a-zA-Z ]{2,40}$/;

    var CurrentYear = new Date().getFullYear();
    let converCurrentYear = String(CurrentYear);
    let converCurrentYearArr = converCurrentYear.split("");
    converCurrentYearArr.splice(0, 2);
    let currentYearLastvalue = converCurrentYearArr.join("");

    const { cardNumber, expiryDate, cvvNo, cardName } = this.state;
    let expire = expiryDate.split("/")[1];
    if (!rule.test(cardName)) {
      MESSAGE.error(
        "Name must contain letter, NO number and special character (@,$,%,#)",
        5
      );
    } else if (cardNumber.length < 17 && cardNumber.length < 19) {
      MESSAGE.error("Please Enter Valid Card Number", 5);
    } else if (cardNumber.length > 19) {
      MESSAGE.error("Please Enter valid 16 digit card Number", 5);
    } else if (Number(expire) < Number(currentYearLastvalue)) {
      MESSAGE.error("Please Enter Valid Year", 5);
    } else if (cvvNo.length < 3) {
      MESSAGE.error("Please Enter valid cvv Number", 5);
    } else {
      const Token = localStorage.getItem("token") || "";
      const header = {
        "Content-Type": configJSON.validationApiContentType,
        token: Token,
      };
      const requestMessage = new Message(
        getName(MessageEnum.RestAPIRequestMessage)
      );
      this.apiAddNewCard = requestMessage.messageId;

      requestMessage.addData(
        getName(MessageEnum.RestAPIResponceEndPointMessage),
        configJSON.individualAddNewCardEndPointUrl
      );

      const httpBody = {
        card_number: cardNumber,
        exp_month: expiryDate.split("/")[0].trim(),
        exp_year: expiryDate.split("/")[1].trim(),
        cvc: cvvNo,
        card_name: cardName,
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
    }
  };
  ///remove card from card list
  handleRemoveCardFromList = (id: any) => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiDeleteCardFromCardList = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.individualRemoveCardEndPointUrl
    );

    const httpBody = {
      card_id: id,
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
      configJSON.apiDeleteMethod
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };
  //Get giftCard Image
  handleGetGiftCardImage = () => {
    const Token = localStorage.getItem("token") || "";
    const GiftName = localStorage.getItem("gift_card_type");
    const GiftCardName = GiftName ? JSON.parse(GiftName) : "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetGiftCardImage = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getGiftCardImageEndPointUrl + `?product_name=${GiftCardName}`
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

  ///Checkout Payment based on Order Id
  handleCreatePayment = () => {
    const { CartOrderData } = this.state;

    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiCreatePayments = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.individualCreatePaymentEndPointUrl
    );

    const httpBody = {
      order_id: CartOrderData.id,
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

  ///Checkout Payment based on Order Id
  handleConfirmPayment = (payment_intent: any) => {
    const { CartOrderData } = this.state;

    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiConfirmPayments = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.individualConfirmPaymentsEndPointUrl
    );

    const httpBody = {
      order_id: CartOrderData.id,
      payment_intent_id: payment_intent,
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

  /// Add default card
  handleAddDefaultCard = (id: any) => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiAddDefaultCard = requestMessage.messageId;

    const httpBody = {
      card_id: id.id,
    };

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(httpBody)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.individualAddDefaultCardEndPointUrl
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

  ///Retrieve after confirm payment
  handleRetrievePayment = () => {
    const params = this.props.history?.location?.selectedProjectId;
    let data: any = localStorage.getItem("cart_items")
    let cart_detail = JSON.parse(data)
    this.handleDeleteCartItem(cart_detail)
    const { payment_intent } = this.state;
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiRetrievePayment = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.individualRetrievePaymentsEndPointUrl +
      `?payment_intent_id=${payment_intent}`
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


  handleServerResponse = async (response: any) => {
    let data: any = localStorage.getItem("cart_items");
    let cart_detail = JSON.parse(data)
    this.handleDeleteCartItem(cart_detail)

    let iframe = document.createElement("iframe");
    iframe.src = `${response.payment_intent.next_action.use_stripe_sdk.stripe_js}`;
    iframe.id = "iframe2";
    iframe.style.position = "absolute";
    iframe.style.height = "400px";
    iframe.style.width = "400px";
    iframe.style.pointerEvents = "unset !important";
    iframe.style.backgroundColor = "white";
    iframe.style.border = "none";
    iframe.style.zIndex = "99 !important;";
    document.body.prepend(iframe);
    window.top.postMessage('3DS-authentication-complete', '*');

    const on3DSComplete = (result: any) => {
      if (result === 'succeeded') {
        MESSAGE.success("Payment SuccessFully Done.", 5);
        document.body.remove();
        this.handleRetrievePayment();
      } else if (result === "requires_payment_method") {
        MESSAGE.error("Payment Failed", 5);
        setTimeout(() => {
          window.location.pathname === "/individual/AddtoCard/payment" ?
            window.location.href = "/individual/dashboard" :
            window.location.href = "/business/dashboard";
        }, 1000);
      }
    }
    window.addEventListener('message', function (ev) {
      if (ev?.data?.message?.payment_intent?.status === 'succeeded') {
        on3DSComplete(ev?.data?.message?.payment_intent?.status);
      }
      else if (ev?.data?.message?.error?.payment_intent?.status === "requires_payment_method") {
        on3DSComplete(ev?.data?.message?.error?.payment_intent?.status);
      }
    }, false);
  }


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
      configJSON.CartSummeryListEndPointUrl
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
    console.log(ID)
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

  handleDeleteCartItem = (ID: any) => {
    const data = ID?.map((item: any) => {
      const Token = localStorage.getItem("token") || "";
      const header = {
        "Content-Type": configJSON.validationApiContentType,
        token: Token,
      };
      const requestMessage = new Message(
        getName(MessageEnum.RestAPIRequestMessage)
      );
      this.apiDeleteCartItem = requestMessage.messageId;

      requestMessage.addData(
        getName(MessageEnum.RestAPIResponceEndPointMessage),
        configJSON.RemoveOrderSummeryCartEndPointUrl + `?id=${item.id}`
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
    })
  }

  loadScript = (src: any) => {
    return new Promise((resolve) => {
      var script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  openCheckout = async (res: any) => {
    let cardItem: any = localStorage.getItem("cart_items");
    let cart_detail = JSON.parse(cardItem)
    this.handleDeleteCartItem(cart_detail)

    var UserDetails: any = await localStorage.getItem("UserDetails");
    let userResponse = JSON.parse(UserDetails);
    console.log(this.state?.CartOrderData?.id)
    localStorage.setItem("order_id", JSON.stringify(this.state?.CartOrderData?.id))
    localStorage.setItem("current_localtion", JSON.stringify(window.location.pathname))

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.zaakpayPaymentApiCallId = requestMessage.messageId;
    const params = this.props.history?.location?.selectedProjectId;
    const finalParams = `?amount=${res.amount}&currency_code=${res.currency}&order_id=${this.state?.CartOrderData?.id}&buyerEmail=${userResponse.email}`;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.zaakpayPaymentEndPointUrl + `${finalParams}`
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBaseURLMessage),
      configJSON.baseURL
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.apiPostMethod
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
    // const data =
    //   axios.post(configJSON.baseURL+configJSON.zaakpayPaymentEndPointUrl+`?amount=${res.amount}&currency_code=${res.currency}&order_id=${this.state?.CartOrderData?.id}&buyerEmail=${userResponse.email}`)
    //     .then(res => {
    //       window.location.href =  `${res.data.data.url}`
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
  };

  ///Checkout Payment based on Order Id
  postRazorPayOrder = async () => {
    const { CartOrderData } = this.state;
    this.setState({
      loader: true,
    });
    const razorPayData = {
      order_id: CartOrderData.id,
    };
    this.postRazorPayAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiPostMethod,
      endPoint: configJSON.individualRazorpayOrderEndPointUrl,
      body: razorPayData,
    });
  };

  postRazorPayVerifyOrder = async (res: any) => {
    this.setState({
      loader: true,
      razorpay_payment_id: res.razorpay_payment_id
    });
    const razorPayVerifyData = {
      razorpay_order_id: res.razorpay_order_id,
      razorpay_payment_id: res.razorpay_payment_id,
      razorpay_signature: res.razorpay_signature,
    };
    this.postRazorPayVerifyAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiPostMethod,
      endPoint: configJSON.individualRazorpayOrderVerifyEndPointUrl,
      body: razorPayVerifyData,
    });
  };

  paymentFailerInfo = () => {

    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiPaymentFailure = requestMessage.messageId;
    const finalParams = `?order_id=${this.state?.CartOrderData?.id}`;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      "bx_block_my_project/my_projects/deactivate_my_project" + `${finalParams}`
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
  paymentFailerFromRazorPay = () => {

    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiPaymentFailure = requestMessage.messageId;
    const params = this.props.history?.location?.selectedProjectId;
    const finalParams = `?payment_id=${this.state.paymentId}&my_project_id=${params?.id?.id || ""}&order_id=${this.state?.CartOrderData?.id}`;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      "bx_block_order_management/razorpays/check_out_failure" + `${finalParams}`
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
  paymentSuccess = () => {

    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.apiPaymentSuccess = requestMessage.messageId;
    const params = this.props.history?.location?.selectedProjectId;
    const finalParams = `?payment_id=${this.state.razorpay_payment_id}&my_project_id=${params?.id?.id || ""}&order_id=${this.state?.CartOrderData?.id}`;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      "bx_block_order_management/razorpays/check_out_success" + `${finalParams}`
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
