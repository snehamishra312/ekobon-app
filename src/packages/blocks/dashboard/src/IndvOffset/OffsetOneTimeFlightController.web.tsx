import { IBlock } from "../../../../framework/src/IBlock";
import { Message } from "../../../../framework/src/Message";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";
import { TopTravelCityList, TravelCityList } from "../TravelCityList";
import axios from 'axios';
import { getHtmlElementById } from "../../../../components/src/CommonUtils";
// Customizable Area Start
// Customizable Area End

export const configJSON = require("../config");

export interface Props {
  // Customizable Area Start
  id: string;
  history: any;
  location: any;
  heading: any;
  rightData: any;
  leftData: any;
  toolUses: any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  oneWayStatus: boolean;
  selectedFrom: string;
  selectedVia: string;
  selectedTo: string;
  selectedTravelClass: string;
  passengers: number;
  accountNoxEmissionsStatus: boolean;
  orderSummaryData: any;
  loader: boolean;
  CheckViaValue: boolean;
  CheckToValue: boolean;
  CheckFromValue: boolean;
  emissionsReadMore: boolean;
  TravelCityData: any;
  TopTravelCityData: any;
  clickShow: boolean;
  flightData: any;
  getOrderSummaryApiCallId: any;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class OffsetOneTimeFlightController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiOrderSummaryFlight: string = "";
  getOrderSummaryApiCallId: any = "";
  flightData: any = "";

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

    this.state = {
      oneWayStatus: false,
      selectedFrom: "",
      selectedVia: "",
      selectedTo: "",
      selectedTravelClass: "",
      passengers: 0,
      accountNoxEmissionsStatus: false,
      orderSummaryData: [],
      loader: false,
      CheckViaValue: false,
      CheckToValue: false,
      CheckFromValue: false,
      emissionsReadMore: false,
      TravelCityData: [],
      TopTravelCityData: [],
      clickShow: false,
      getOrderSummaryApiCallId: "",
      flightData: ""
    }

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
      if (apiRequestCallId === this.apiOrderSummaryFlight) {
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
    // Customizable Area End
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  getEmptyState = () => ({
    oneWayStatus: false,
    selectedFrom: "",
    selectedFromCode: "",
    selectedVia: "",
    selectedTo: "",
    selectedToCode: "",
    selectedTravelClass: "",
    passengers: 1,
    accountNoxEmissionsStatus: false,
    orderSummaryData: {},
    loader: false,
    CheckViaValue: false,
    CheckToValue: false,
    CheckFromValue: false,
    emissionsReadMore: false,
    TravelCityData: TravelCityList,
    TopTravelCityData: TopTravelCityList,
  });

  handleOneWayStatusChange = (e: any) => {
    this.setState({
      oneWayStatus: e.target.value,
    });
  };

  handleFromChange = (value: any) => {
    console.log({ value })
    if (this.state.selectedVia === value || this.state.selectedTo === value) {
      this.setState({
        CheckFromValue: true,
      });
    } else {
      this.setState({
        selectedFrom: value,
        CheckFromValue: false,
      });
    }
  };

  handleClickFunction = () => {
    if (this.state.clickShow === false) {
      this.setState({
        clickShow: true,
      })
    }
    else {
      this.setState({
        clickShow: false,
      })
    }
  }

  carOrderSummaryData = async () => {
    this.setState({
      loader: true,
    });
    const Token = localStorage.getItem("token") || "";
    const flightDatas = this.state;
    
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
      configJSON.postFlightApiEndPoints
    );
    const httpBody = {
      data: flightDatas,
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
      configJSON.dashboarApiMethodType
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };

  handleSelectFrom = (input: any, option: any) => {
    var FromCode = this.state.TravelCityData.find(
      (city: any) => city.id === Number(option.key)
    );
    const TopFromCode = this.state.TopTravelCityData.find(
      (city: any) => city.id === Number(option.key)
    );

    const fromName = FromCode?.name || TopFromCode?.name;

    if (
      this.state.selectedVia === fromName ||
      this.state.selectedTo === fromName
    ) {
      this.setState({
        CheckFromValue: true,
      });
    } else {
      this.setState({
        selectedFrom: fromName,
        CheckFromValue: false,
      });
    }
  };

  handleViaChange = (value: any) => {
    if (this.state.selectedFrom === value || this.state.selectedTo === value) {
      this.setState({
        CheckViaValue: true,
      });
    } else {
      this.setState({
        selectedVia: value,
        CheckViaValue: false,
      });
    }
  };

  // handleSelectVia = (input: any, option: any) => {
  //   var ViaCode = this.state.TravelCityData.find(
  //     (city: any) => city.id === Number(option.key)
  //   ).name;

  //   if (
  //     this.state.selectedFrom === ViaCode ||
  //     this.state.selectedTo === ViaCode
  //   ) {
  //     this.setState({
  //       CheckViaValue: true,
  //     });
  //   } else {
  //     this.setState({
  //       selectedVia: ViaCode,
  //       CheckViaValue: false,
  //     });
  //   }
  // };

  handleToChange = (value: any) => {
    if (this.state.selectedFrom === value || this.state.selectedVia === value) {
      this.setState({
        CheckToValue: true,
      });
    } else {
      this.setState({
        selectedTo: value,
        CheckToValue: false,
      });
    }
  };

  // handleSelectTo = (input: any, option: any) => {
  //   var ToCode = this.state.TravelCityData.find(
  //     (city: any) => city.id === Number(option.key)
  //   )
  //   var ToCodeTopCity = this.state.TopTravelCityData.find(
  //     (city: any) => city.id === Number(option.key)
  //   )
  //   const ToCodeName = ToCode?.name || ToCodeTopCity?.name
  //   if (
  //     this.state.selectedFrom === ToCodeName ||
  //     this.state.selectedVia === ToCodeName
  //   ) {
  //     this.setState({
  //       CheckToValue: true,
  //     });
  //   } else {
  //     this.setState({
  //       selectedTo: ToCodeName,
  //       CheckToValue: false,
  //     });
  //   }
  // };

  handleTravelClassChange = (value: any) => {
    this.setState({
      selectedTravelClass: value,
    });
  };

  handlePassengerCount = (value: any) => {
    if (value === "plush") {
      if (this.state.passengers < 10) {
        this.setState({
          passengers: this.state.passengers + 1,
        });
      }
    } else {
      if (this.state.passengers > 1) {
        this.setState({
          passengers: this.state.passengers - 1,
        });
      }
    }
  };

  handleaccountNoxEmissionsStatusChange = (e: any) => {
    this.setState({
      accountNoxEmissionsStatus: !this.state.accountNoxEmissionsStatus,
    });
  };

  handleFinish = () => {
    if (
      !this.state.CheckFromValue &&
      !this.state.CheckViaValue &&
      !this.state.CheckToValue
    ) {
      this.getOrderSummaryFlight();
    }
  };

  getOrderSummaryFlight = async () => {
    const {
      oneWayStatus,
      selectedFrom,
      selectedVia,
      selectedTo,
      selectedTravelClass,
      passengers,
      accountNoxEmissionsStatus,
    } = this.state;
    this.setState({
      loader: true,
    });
    const selectedFromCodeTravelCity = TravelCityList.find(
      (city) => city.name === selectedFrom
    );
    const selectedFromCodeTopTravelCity = TopTravelCityList.find(
      (city) => city.name === selectedFrom
    );
    const selectedFromCode =
      selectedFromCodeTravelCity?.code || selectedFromCodeTopTravelCity?.code;

    const selectedToCodeTopTravelCity = TopTravelCityList.find(
      (city) => city.name === selectedTo
    );
    const selectedToCodeTravelCity = TravelCityList.find(
      (city) => city.name === selectedTo
    );
    const selectedToCode = selectedToCodeTravelCity?.code ||
      selectedToCodeTopTravelCity?.code

    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiOrderSummaryFlight = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.orderSummaryFlightEndPointUrl +
      `?return_flight=${oneWayStatus}` +
      `&from=${selectedFrom}` +
      `&from_city_code=${selectedFromCode}` +
      `&via=${selectedVia === undefined || selectedVia === "" ? "" : selectedVia
      }` +
      `&to=${selectedTo}` +
      `&to_city_code=${selectedToCode}` +
      `&class=${selectedTravelClass}` +
      `&passengers=${passengers}` +
      `&account_nox_emissions=${accountNoxEmissionsStatus}`
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

  handleEmissionsReadMore = async () => {
    this.setState({
      emissionsReadMore: !this.state.emissionsReadMore,
    });
  };

  // Customizable Area End
}
