import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../../framework/src/RunEngine";
import { message as MESSAGE } from "antd";
// Customizable Area Start
// Customizable Area End

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
  btnDisabled: boolean;
  flightData: any;
  flightListData: any;
  flightDistanceMinValue: any;
  flightDistanceMaxValue: any;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class OffsetOneTimeFlightByDistanceController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiOrderSummaryFlight: string = "";
  getFlightList: string = "";
  calculateFlightImpace: string = "";
  submitFlightOrderSummaryDistance: string = "";

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
      if (apiRequestCallId === this.getFlightList) {
        if (responseJson != null) {
          this.setState({
            flightListData: responseJson.data,
          });
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.calculateFlightImpace) {
        if (responseJson != null && responseJson.data !== null) {
          let flightData = this.state.flightData;
          if (responseJson.data.length > 0) {
            for (let i = 0; i < responseJson.data.length; i++) {
              if (!responseJson.data[i].errors) {
                flightData[i] = responseJson.data[i];
                this.setState({
                  flightData,
                  btnDisabled: false,
                });
              } else {
                if (responseJson.data[0].errors) {
                  flightData[0] = flightData[0];
                } else {
                  flightData[1] = flightData[1];
                }
                this.setState({
                  flightData,
                  btnDisabled: false,
                });
                MESSAGE.error(responseJson.data[i].errors.message, 4);
              }
            }
            // this.setState({
            //   flightData: responseJson.data,
            //   btnDisabled: false,
            // });
          } else {
            this.setState({
              flightData,
              btnDisabled: false,
            });
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else {
        if (apiRequestCallId === this.submitFlightOrderSummaryDistance) {
          if (responseJson != null) {
            this.setState({
              orderSummaryData: responseJson,
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
    super.componentDidMount();
    if (localStorage.getItem("token")) {
      this.getFlightListApi();
    }
  }

  getEmptyState = () => ({
    orderSummaryData: null,
    loader: false,
    btnDisabled: true,
    flightListData: [],
    flightDistanceMinValue: 0,
    flightDistanceMaxValue: 100,
    flightData: [
      {
        product_name: null,
        distance: "",
        class_type: "",
        no_of_passengers: 1,
        offsetable_type: "",
        return_flight: false,
        total_impact: 0,
        total: "",
      },
    ],
  });

  getFlightListApi = async () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.getFlightList = requestMessage.messageId;

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

  getFlightImpactApi = async () => {
    const Token = localStorage.getItem("token") || "";
    const { flightData } = this.state;
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.calculateFlightImpace = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getFlightCalculateImapctApiEndPoint
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

  flightOrderSummaryData = async () => {
    const { flightData } = this.state;
    this.setState({
      loader: true,
    });

    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.submitFlightOrderSummaryDistance = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.postFlightApiEndPoint
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

  callFlightImapactApi = async () => {
    const { flightData } = this.state;
    if (flightData.length === 1) {
      if (
        flightData[0].class_type !== "" &&
        flightData[0].no_of_passengers !== "" &&
        flightData[0].distance !== "" &&
        flightData[0].product_name !== ""
      ) {
        this.getFlightImpactApi();
      }
    } else {
      if (
        flightData[1].class_type !== "" &&
        flightData[1].no_of_passengers !== "" &&
        flightData[1].distance !== "" &&
        flightData[1].product_name !== ""
      ) {
        this.getFlightImpactApi();
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
            distance: "",
            class_type: "",
            no_of_passengers: 1,
            offsetable_type: "",
            return_flight: false,
            total_impact: 0,
            total: "",
          },
        ],
      }));
    }
  }

  handlePassengerCount(i: any, check: string) {
    let flightData = [...this.state.flightData];
    var tempData = 0;
    if (check === "plush") {
      if (flightData[i].no_of_passengers < 10) {
        tempData = flightData[i].no_of_passengers += 1;
        flightData[i] = { ...flightData[i], ["no_of_passengers"]: tempData };
      }
    } else {
      if (flightData[i].no_of_passengers > 1) {
        tempData = flightData[i].no_of_passengers -= 1;
        flightData[i] = { ...flightData[i], ["no_of_passengers"]: tempData };
      }
    }

    this.setState({ flightData });
    this.callFlightImapactApi();
  }

  removeClick(i: any) {
    if (this.state.flightData.length > 1) {
      let flightData = [...this.state.flightData];
      flightData.splice(i, 1);
      this.setState({ flightData });
    }
  }

  handleAvgFlightTimeChange(i: any, name: any, data: string) {
    let flightData = [...this.state.flightData];
    flightData[i] = { ...flightData[i], [name]: data };

    if (name === "product_name") {
      var tempData = this.state.flightListData.filter(
        (x: any) => x.attributes.name === data
      )[0];
      flightData[i] = {
        ...flightData[i],
        ["business_flight_type_id"]: tempData.id,
      };

      this.setState({
        flightDistanceMaxValue: tempData.attributes.max_km,
        flightDistanceMinValue: tempData.attributes.min_km,
      });
    }

    this.setState({ flightData }, () => {
      if (data) {
        this.callFlightImapactApi();
      }
    });
  }

  handleFlightDistance(i: any, e: any) {
    const { value } = e.target;
    let selectedFlightPayload = null;
    let flightListData = this.state.flightListData;
    let flightData: any = [...this.state.flightData];

    flightListData.map((item: any, index: any) => {
      if (value >= item.attributes.min_km && value <= item.attributes.max_km) {
        selectedFlightPayload = item;
        flightData[i]["product_name"] = item.attributes.name;
        flightData[i]["business_flight_type_id"] = item.id;
      }
    });
    this.setState({ flightListData: flightListData }, () => {});
    flightData[i] = { ...flightData[i], ["distance"]: value };

    this.setState({ flightData }, () => this.callFlightImapactApi());
  }

  handleReturnFlight = async (i: any, data: any) => {
    const { checked } = data.target;
    let flightData = [...this.state.flightData];
    var returnFlight = checked ? "Yes" : "No";
    flightData[i] = { ...flightData[i], ["return_flight"]: returnFlight };
    this.setState({ flightData }, () => this.callFlightImapactApi());
  };
  // Customizable Area End
}
