import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { message as MESSAGE } from "antd";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../../framework/src/RunEngine";

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
  flightListData: any;
  orderSummaryData: any;
  loader: boolean;
  flightData: any;
  btnDisabled: boolean;
  finalTotalImpact: string;

  // Customizable Area End
}

interface SS {
  id: any;
}

export default class SubscriptionFlightController extends BlockComponent<
  Props,
  S,
  SS
> {
  getCarDetailsApiCalled: any = "";
  getOrderSummaryApiCallId: any = "";
  getFlightData: any = "";

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

      if (apiRequestCallId === this.getCarDetailsApiCalled) {
        if (
          (responseJson != null && responseJson.data !== null) ||
          responseJson.errors === ""
        ) {
          // let flightData = this.state.flightData;
          if (this.state.flightData.length > 0) {
            // flightData = [...this.state.flightData];
            // flightData.splice(1, 1);
            // flightData.push(responseJson.data[0]);

            this.setState({
              flightData: responseJson.data,
              btnDisabled: false,
            });
          } else {
            this.setState({
              flightData: responseJson.data,
              btnDisabled: false,
            });
          }
        } else {
          MESSAGE.error(responseJson.message, 5);
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.getFlightData) {
        if (responseJson != null) {
          this.setState({
            flightListData: responseJson.data,
          });
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else {
        if (apiRequestCallId === this.getOrderSummaryApiCallId) {
          if (responseJson != null) {
            this.setState({
              orderSummaryData: responseJson,
              finalTotalImpact: responseJson.total_impact,
              loader: false,
              btnDisabled: false,
            });
          } else {
            this.setState({
              loader: false,
              btnDisabled: false,
            });
          }
          this.parseApiCatchErrorResponse(errorReponse);
        }
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    this.redirectToOrderHistory();
    super.componentDidMount();
    if (localStorage.getItem("token")) {
      this.getFlightListApi();
    }
  }
  redirectToOrderHistory = () => {
    if (window.location.href.includes("/business/subscription-flight")) {
      window.scrollTo(850, 0);
    }
  };
  getEmptyState = () => ({
    flightListData: [],
    btnDisabled: true,
    orderSummaryData: null,
    loader: false,
    flightData: [
      {
        product_name: "",
        no_of_pessangers: 0,
        no_of_flights: 0,
        total_impact: 0,
        total: "",
      },
    ],
    finalTotalImpact: "",
  });

  callGetOrderSummaryCar = async () => {
    const { flightData } = this.state;
    for (let i = 0; i < flightData.length; i++) {
      if (
        flightData[i].product_name !== "" &&
        flightData[i].no_of_flights > 0
      ) {
        this.getFlightDetails();
      }
    }
  };

  addClick() {
    if (
      this.state.flightData.length === 1 ||
      this.state.flightData.length < 10
    ) {
      this.setState((prevState) => ({
        flightData: [
          ...prevState.flightData,
          {
            product_name: "",
            no_of_pessangers: 0,
            no_of_flights: 0,
            total_impact: 0,
            total: "",
          },
        ],
      }));
    }
  }

  removeClick(i: any) {
    if (this.state.flightData.length > 1) {
      let flightData = [...this.state.flightData];
      flightData.splice(i, 1);
      this.setState({ flightData });
    }
  }

  handleFlightTimeChange(i: any, name: any, data: string) {
    let flightData = [...this.state.flightData];
    var flight_name = this.state.flightListData.filter(
      (x: any) => x.id === data
    )[0].attributes.name;
    flightData[i] = { ...flightData[i], [name]: flight_name };

    for (let i = 0; i < flightData.length; i++) {
      var flight_TypeId = this.state.flightListData.filter(
        (x: any) => x.attributes.name === flightData[i].product_name
      )[0].id;
      flightData[i].business_flight_type_id = flight_TypeId;
    }

    this.setState({
      flightData,
    });

    this.setState({ flightData }, () => this.callGetOrderSummaryCar());
  }

  handleFlightNoInputChange(i: any, check: any, e: any) {
    const { value } = e.target;
    let flightData = [...this.state.flightData];
    if (check === "flightNo") {
      if ((value < 100000 && value > 0) || value.length === 0) {
        flightData[i] = { ...flightData[i], ["no_of_flights"]: value };
      }
    } else {
      if ((value < 5000 && value > 0) || value.length === 0) {
        flightData[i] = { ...flightData[i], ["no_of_pessangers"]: value };
      }
    }
    this.setState({ flightData }, () => this.callGetOrderSummaryCar());
  }

  // peoplePassengerCount(i: any, check: string) {
  //   let flightData = [...this.state.flightData];
  //   var tempData = 0;
  //   if (check === "plush") {
  //     if (flightData[i].no_of_pessangers < 10) {
  //       tempData = flightData[i].no_of_pessangers += 1;
  //       flightData[i] = { ...flightData[i], ["no_of_pessangers"]: tempData };
  //     }
  //   } else {
  //     if (flightData[i].no_of_pessangers > 1) {
  //       tempData = flightData[i].no_of_pessangers -= 1;
  //       flightData[i] = { ...flightData[i], ["no_of_pessangers"]: tempData };
  //     }
  //   }

  //   this.setState({ flightData });
  //   this.callGetOrderSummaryCar();
  // }

  getFlightDetails = async () => {
    const Token = localStorage.getItem("token") || "";
    const { flightData } = this.state;
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.getCarDetailsApiCalled = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getflightSubscriptionImpactAPIEndPoint
    );

    console.log(flightData, "flightData@@");

    const httpBody = {
      data: flightData,
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

  //flightdata
  getFlightListApi = async () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.getFlightData = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getFlightListApiEndPoint
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
  //flightdata
  carOrderSummaryData = async () => {
    this.setState({
      loader: true,
    });

    const Token = localStorage.getItem("token") || "";
    const { flightData } = this.state;
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.getOrderSummaryApiCallId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.postFlightOrderSummaryApiEndPoint
    );

    const httpBody = {
      data: flightData,
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
