import { IBlock } from "../../../../framework/src/IBlock";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import { Message } from "../../../../framework/src/Message";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("../config");

export interface Props {
  id: string;
  history: any;
  location: any;
}

interface S {
  // Customizable Area Start
  loader: boolean;
  selectGiftCard: any;
  giftCardsList: any;
  orderSummaryData: any;
  total_Gift_card: any;
  total_gift_card_categories: any;
  selected_gift_card: any;
  giftSummaryData: any;
  giftAmount:any;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class IndividualGiftCardController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiGetGiftCardsList: string = "";
  apiGiftCardOrderSummary: string = "";
  apiGiftCardCategories: string = "";
  apiCalculateNoOfTrees: any = "";
  apiCalculateNoOfFlight: any = "";
  apiCalculateNoOfOffset: any;

  constructor(props: Props) {
    super(props);

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
      if (apiRequestCallId === this.apiGetGiftCardsList) {
        if (responseJson != null) {
          const { giftCardsList } = this.state;
          if (responseJson.gift_cards && responseJson.gift_cards.length > 0) {
            responseJson.gift_cards.forEach((giftCard: any, index: number) => {
              giftCardsList[index] = {
                ...giftCardsList[index],
                ...giftCard,
              };
            });
            this.setState({
              giftCardsList: giftCardsList,
              total_Gift_card: responseJson?.cabron_offset,
              loader: false,
            });
          } else {
            this.setState({
              loader: false,
              total_Gift_card: 0
            });
            this.parseApiErrorResponse(responseJson);
          }
        }
      }
      else if (apiRequestCallId === this.apiCalculateNoOfTrees) {
        if (responseJson != null) {
          this.setState({
            giftSummaryData: responseJson,
            giftAmount: responseJson?.total
          })
        }
      }
      else if (apiRequestCallId === this.apiCalculateNoOfFlight) {
        if (responseJson != null) {
          this.setState({
            giftSummaryData: responseJson
          })
          console.log({ responseJson }, "klagflkahfkagdkufahksfhalugfluwegrugeqwiugrfeugfugaiug")
        }
      }
      else if (apiRequestCallId === this.apiCalculateNoOfOffset) {
        if (responseJson != null) {
          this.setState({
            giftSummaryData: responseJson
          })
          console.log({ responseJson }, "klagflkahfkagdkufahksfhalugfluwegrugeqwiugrfeugfugaiug")
        }
      }
      else if (apiRequestCallId === this.apiGiftCardOrderSummary) {
        if (responseJson != null) {
          console.log({ responseJson })
          this.setState({
            orderSummaryData: responseJson,
          });
        } else {
          this.parseApiCatchErrorResponse(errorReponse);
        }
      }
      else if (apiRequestCallId === this.apiGiftCardCategories) {
        if (responseJson != null) {
          this.setState({
            total_gift_card_categories: responseJson[0]?.categories
          })
        }
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    super.componentDidMount();
    if (localStorage.getItem("token")) {
      this.getGiftCardsList();
      this.getGiftCardCategories();
    }
  }

  getEmptyState = () => ({
    loader: false,
    giftAmount:"",
    selectGiftCard: 0,
    selected_gift_card: [],
    total_gift_card_categories: [],
    giftCardsList: [
      {
        key: "1000",
      },
      {
        key: "2000",
      },
      {
        key: "4000",
      },
      {
        key: "Custom",
      },
      {
        key: "Custom",
      },
    ],
    total_Gift_card: 0,
    orderSummaryData: null,
    giftSummaryData: null,
  });

  handleSelectGiftCard = (value: any) => {
    console.log(this.state.selectGiftCard, "=====++++++++++===========")
    this.setState({
        selectGiftCard: value,
        orderSummaryData: this.state?.total_gift_card_categories[value - 1]
      });
     const data =  localStorage.setItem("gift_card_type",JSON.stringify(value));
  };

  handleGetGiftCardData = (amount: any) => {
    var tempData = {
      id: this.state.selectGiftCard.id,
      amount,
    };
    this.getGiftCardOrderSummary(tempData);
  };

  handleOrderSummaryData = (e: any) => {
    if (this.state?.orderSummaryData == "Plant trees") {
      const token = localStorage.getItem("token") || "";
      const header = {
        "Content-Type": configJSON.validationApiContentType,
        token,
      };
      const requestMessage = new Message(
        getName(MessageEnum.RestAPIRequestMessage)
      );
      this.apiCalculateNoOfTrees = requestMessage.messageId;

      requestMessage.addData(
        getName(MessageEnum.RestAPIResponceEndPointMessage),
        configJSON.AgroforestryOrderSummaryAPIEndPoint +
        `?no_of_trees=${e}`
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
    }
    else if (this.state?.orderSummaryData == "Flight travel") {
      const id = e == "Small" ? 25 : e == "Medium" ? 24 : e == "Large" ? 27 : ""
      const token = localStorage.getItem("token") || "";
      const header = {
        "Content-Type": configJSON.validationApiContentType,
        token,
      };
      const requestMessage = new Message(
        getName(MessageEnum.RestAPIRequestMessage)
      );
      this.apiCalculateNoOfFlight = requestMessage.messageId;

      requestMessage.addData(
        getName(MessageEnum.RestAPIResponceEndPointMessage),
        configJSON.getAirTravelSubscriptionEndPointUrl + `?individual_airtravel_subscription_offset_id=${id}&country=India&flight=&frequency=1`
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
    }
    else if (this.state?.orderSummaryData == "Generic Climate Offsetting") {
      // ?individual_lifestyle_one_time_offset_id=1&country=India&package=5&member=&custom_amount=10&custom_impact=&is_amount=true 
      const token = localStorage.getItem("token") || "";
      const header = {
        "Content-Type": configJSON.validationApiContentType,
        token,
      };
      const requestMessage = new Message(
        getName(MessageEnum.RestAPIRequestMessage)
      );
      this.apiCalculateNoOfOffset = requestMessage.messageId;

      requestMessage.addData(
        getName(MessageEnum.RestAPIResponceEndPointMessage),
        configJSON.OffsetLifeStyleOrderSummery + `?individual_lifestyle_one_time_offset_id=1&country=India&package=5&member=&custom_amount=${e}&custom_impact=&is_amount=true`
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
    }
  }

  getGiftCardsList = async () => {
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
    this.apiGetGiftCardsList = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.giftCardsListEndPointUrl
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

  getGiftCardOrderSummary = async (data: any) => {
    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGiftCardOrderSummary = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.giftCardOrderSummaryEndPointUrl +
      `?gift_card_id=${data}`
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
  getGiftCardCategories = async () => {
    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      // token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGiftCardCategories = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.giftCardCategoriesEndPointUrl
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
}