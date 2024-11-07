import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../../framework/src/RunEngine";
import { TravelCityList, TopTravelCityList } from "../../TravelCityList";
// Customizable Area Start
// Customizable Area End

export const configJSON = require("../../config");

export interface Props {
  // Customizable Area Start
  id: string;
  history: any;
  location: any;
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
  no_of_Journey: any;
  TravelCityData: any;
  TopTravelCityData: any;
  clickShow: boolean;
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
      if (apiRequestCallId === this.apiOrderSummaryFlight) {
        if (responseJson != null) {
          this.setState({
            orderSummaryData: responseJson,
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
    orderSummaryData: null,
    loader: false,
    CheckViaValue: false,
    CheckToValue: false,
    CheckFromValue: false,
    no_of_Journey: "",
    TravelCityData: TravelCityList,
    TopTravelCityData: TopTravelCityList,
    clickShow: false,
  });

  handleOneWayStatusChange(e: any, check: string) {
    if (e.target.value < 100000 && e.target.value > 0) {
      this.setState({
        no_of_Journey: e.target.value,
      });
    } else if (e.target.value.length === 0) {
      if (check === "radio") {
        this.setState({
          oneWayStatus: e.target.value,
        });
      } else {
        this.setState({
          no_of_Journey: e.target.value,
        });
      }
    }
    if (check === "radio") {
      this.setState({
        oneWayStatus: e.target.value,
      });
    }
  }

  handleFromChange = (value: any) => {
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

  handleSelectFrom = (input: any, option: any) => {
    var FromCode = this.state.TravelCityData.find(
      (city: any) => city.id === Number(option.key)
    );

    const TopFromCode = this.state?.TopTravelCityData?.find(
      (city: any) => city.id === Number(option.key)
    );
    const FromCityName = FromCode?.name || TopFromCode?.name;
    if (
      this.state.selectedVia === FromCityName ||
      this.state.selectedTo === FromCityName
    ) {
      this.setState({
        CheckFromValue: true,
      });
    } else {
      this.setState({
        selectedFrom: FromCityName,
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

  handleSelectVia = (input: any, option: any) => {
    var ViaCode = this.state.TravelCityData.find(
      (city: any) => city.id === Number(option.key)
    ).name;

    if (
      this.state.selectedFrom === ViaCode ||
      this.state.selectedTo === ViaCode
    ) {
      this.setState({
        CheckViaValue: true,
      });
    } else {
      this.setState({
        selectedVia: ViaCode,
        CheckViaValue: false,
      });
    }
  };

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

  handleSelectTo = (input: any, option: any) => {
    var ToCode = this.state.TravelCityData?.find(
      (city: any) => city.id === Number(option.key)
    );
    const TopCityCode = this.state.TopTravelCityData?.find(
      (city: any) => city.id === Number(option.key)
    );
    const TopCiytName = ToCode?.name || TopCityCode?.name;

    if (
      this.state.selectedFrom === TopCiytName ||
      this.state.selectedVia === TopCiytName
    ) {
      this.setState({
        CheckToValue: true,
      });
    } else {
      this.setState({
        selectedTo: TopCiytName,
        CheckToValue: false,
      });
    }
  };

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
      this.state.CheckFromValue !== null &&
      this.state.CheckToValue !== null &&
      this.state.selectedTravelClass !== null
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
      no_of_Journey,
    } = this.state;
    this.setState({
      loader: true,
    });
    const selectedFromCode = TravelCityList.find(
      (city) => city.name === selectedFrom
    )?.code;
    const topSelectedFromCode = TopTravelCityList.find(
      (city) => city.name === selectedFrom
    )?.code;
    const finalSelectedFromCode = selectedFromCode || topSelectedFromCode;

    const selectedToCode = TravelCityList.find(
      (city) => city.name === selectedTo
    )?.code;
    const topSelectedToCode = TopTravelCityList.find(
      (city) => city.name === selectedTo
    )?.code;
    const finalSelectedToCode = selectedToCode || topSelectedToCode;

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
        `&from_city_code=${finalSelectedFromCode}` +
        `&via=${
          selectedVia === undefined || selectedVia === "" ? "" : selectedVia
        }` +
        `&to=${selectedTo}` +
        `&to_city_code=${finalSelectedToCode}` +
        `&class=${selectedTravelClass}` +
        `&passengers=${passengers}` +
        `&account_nox_emissions=${accountNoxEmissionsStatus}` +
        `&no_of_journey=${no_of_Journey}`
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
}
