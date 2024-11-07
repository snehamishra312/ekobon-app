import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../../framework/src/RunEngine";
import { message as MESSAGE } from "antd";

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
  orderSummaryData: any;
  loader: boolean;
  CheckViaValue: boolean;
  CheckToValue: boolean;
  CheckFromValue: boolean;
  btnDisabled: boolean;
  carData: any;
  finalTotalImpact: string;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class SubscriptionCarController extends BlockComponent<
  Props,
  S,
  SS
> {
  getCarDetailsApiCalled: any = "";
  getOrderSummaryApiCallId: any = "";

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
          responseJson.message === ""
        ) {
          if (responseJson.data.length > 0) {
            this.setState({
              carData: responseJson.data,
              btnDisabled: false,
            });
          } else {
            this.setState({
              carData: [],
              btnDisabled: false,
            });
          }
        } else {
          MESSAGE.error(responseJson.message, 4);
          this.setState({
            carData: [],
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
            });
          } else {
            this.setState({
              loader: false,
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
  }
  redirectToOrderHistory = () => {
    if (window.location.href.includes("/business/subscription-car")) {
      window.scrollTo(850, 0);
    }
  };
  getEmptyState = () => ({
    orderSummaryData: null,
    loader: false,
    CheckViaValue: false,
    CheckToValue: false,
    CheckFromValue: false,
    btnDisabled: true,
    carData: [
      {
        vehicle_type: "",
        fuel_type: "",
        power_source: "",
        no_of_cars: 0,
        total_impact: 0,
        total: "",
      },
    ],
    finalTotalImpact: "",
  });

  callGetOrderSummaryCar = async () => {
    const { carData } = this.state;
    if (carData.length === 1) {
      if (
        carData[0].vehicle_type !== "" &&
        carData[0].fuel_type !== "" &&
        carData[0].no_of_cars !== ""
      ) {
        this.getCarDetails();
      }
    } else {
      if (
        carData[1].vehicle_type !== "" &&
        carData[1].fuel_type !== "" &&
        carData[1].no_of_cars !== ""
      ) {
        this.getCarDetails();
      }
    }
  };

  addClick() {
    if (this.state.carData.length === 1 || this.state.carData.length < 10) {
      this.setState((prevState) => ({
        carData: [
          ...prevState.carData,
          {
            vehicle_type: "",
            fuel_type: "",
            power_source: "",
            no_of_cars: 0,
            total_impact: 0,
            total: "",
          },
        ],
      }));
    }
  }

  removeClick(i: any) {
    if (this.state.carData.length > 1) {
      let carData = [...this.state.carData];
      carData.splice(i, 1);
      this.setState({ carData });
    }
  }

  handleVehicleFuelChange(i: any, name: any, data: string) {
    let carData = [...this.state.carData];
    carData[i] = { ...carData[i], [name]: data };
    this.setState({ carData }, () => this.callGetOrderSummaryCar());
  }
  handleCarNoInputChange(i: any, e: any) {
    const { value } = e.target;
    let carData = [...this.state.carData];
    if ((value < 5000 && value > 0) || value.length === 0) {
      carData[i] = { ...carData[i], ["no_of_cars"]: value };
    }
    this.setState({ carData }, () => this.callGetOrderSummaryCar());
  }
  // noOfCarCount(i: any, check: string) {
  //   let carData = [...this.state.carData];
  //   var tempData = 0;
  //   if (check === "plush") {
  //     if (carData[i].no_of_cars < 10) {
  //       tempData = carData[i].no_of_cars += 1;
  //       carData[i] = { ...carData[i], ["no_of_cars"]: tempData };
  //     }
  //   } else {
  //     if (carData[i].no_of_cars > 1) {
  //       tempData = carData[i].no_of_cars -= 1;
  //       carData[i] = { ...carData[i], ["no_of_cars"]: tempData };
  //     }
  //   }

  //   this.setState({ carData });
  //   this.callGetOrderSummaryCar();
  // }

  getCarDetails = async () => {
    const Token = localStorage.getItem("token") || "";
    const { carData } = this.state;
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
      configJSON.getSubscriptionCarDataAPIEndPoint
    );

    const httpBody = {
      data: carData,
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

  carOrderSummaryData = async () => {
    this.setState({
      loader: true,
    });

    const Token = localStorage.getItem("token") || "";
    const { carData } = this.state;
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
      configJSON.postSubscriptionCarOrderDataAPIEndPoint
    );
    const httpBody = {
      data: carData,
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
