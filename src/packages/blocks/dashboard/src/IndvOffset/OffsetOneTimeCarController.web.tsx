import { IBlock } from "../../../../framework/src/IBlock";
import { Message } from "../../../../framework/src/Message";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";
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
  selectedTrip: string;
  frequencyPerYear: any;
  selectedFrom: string;
  selectedVia: string;
  selectedTo: string;
  distance: any;
  selectedVehicleType: string;
  selectedFuelType: string;
  selectedPowerSource: string;
  orderSummaryData: any;
  loader: boolean;
  CheckViaValue: boolean;
  CheckToValue: boolean;
  CheckFromValue: boolean;
  clickShow: boolean;

  // Customizable Area End
}

interface SS {
  id: any;
}

export default class OffsetOneTimeCarController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiOrderSummaryCar: string = "";

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
      selectedTrip: "",
      frequencyPerYear: "",
      selectedFrom: "",
      selectedVia: "",
      selectedTo: "",
      distance: "",
      selectedVehicleType: "",
      selectedFuelType: "",
      selectedPowerSource: "",
      orderSummaryData: [],
      loader: false,
      CheckViaValue: false,
      CheckToValue: false,
      CheckFromValue: false,
      clickShow: false,
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
      if (apiRequestCallId === this.apiOrderSummaryCar) {
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
    selectedTrip: "one_way",
    frequencyPerYear: null,
    selectedFrom: "",
    selectedVia: "",
    selectedTo: "",
    distance: "",
    selectedVehicleType: "",
    selectedFuelType: "",
    selectedPowerSource: "",
    orderSummaryData: {},
    loader: false,
    CheckViaValue: false,
    CheckToValue: false,
    CheckFromValue: false,
  });

  handleTripChange = (e: any) => {
    this.setState({
      selectedTrip: e.target.value,
    });
  };

  handleFrequencyChange = (e: any) => {
    if (e.target.value < 100000 && e.target.value > 0) {
      this.setState({
        frequencyPerYear: e.target.value,
      });
    }
  };

  handleFromChange = (value: any) => {
    // if (this.state.selectedVia === value || this.state.selectedTo === value) {
    //   this.setState({
    //     CheckFromValue: true,
    //   });
    // } else {
    this.setState({
      selectedFrom: value,
      //  CheckFromValue: false,
    });
    // }
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

  handleViaChange = (value: any) => {
    // if (this.state.selectedFrom === value || this.state.selectedTo === value) {
    //   this.setState({
    //     CheckViaValue: true,
    //   });
    // } else {
    this.setState({
      selectedVia: value,
      //  CheckViaValue: false,
    });
    // }
  };

  handleToChange = (value: any) => {
    // if (this.state.selectedFrom === value || this.state.selectedVia === value) {
    //   this.setState({
    //     CheckToValue: true,
    //   });
    // } else {
    this.setState({
      selectedTo: value,
      // CheckToValue: false,
    });
    // }
  };

  handleDistance = (e: any) => {
    if (e.target.value < 100000 && e.target.value > 0) {
      this.setState({
        distance: e.target.value,
      });
    }
  };

  handleVehicleTypeChange = (value: any) => {
    this.setState({
      selectedVehicleType: value,
    });
  };

  handleFuelTypeChange = (value: any) => {
    this.setState({
      selectedFuelType: value,
      selectedPowerSource: "",
    });
  };

  handlePowerSourceChange = (value: any) => {
    this.setState({
      selectedPowerSource: value,
    });
  };

  handleFinish = (values: any) => {
    if (this.state.distance !== "") {
      this.setState({
        CheckFromValue: false,
        CheckViaValue: false,
        CheckToValue: false,
        selectedTo: "",
        selectedFrom: "",
        selectedVia: "",
      });
      this.getOrderSummaryCar();
    } else if (this.state.selectedTo !== "" && this.state.selectedFrom !== "") {
      if (
        this.state.selectedVia === this.state.selectedFrom ||
        this.state.selectedTo === this.state.selectedFrom
      ) {
        this.setState({
          CheckFromValue: true,
          CheckViaValue: false,
          CheckToValue: false,
        });
      } else if (
        this.state.selectedFrom === this.state.selectedVia ||
        this.state.selectedTo === this.state.selectedVia
      ) {
        this.setState({
          CheckViaValue: true,
          CheckFromValue: false,
          CheckToValue: false,
        });
      } else if (
        this.state.selectedFrom === this.state.selectedTo ||
        this.state.selectedVia === this.state.selectedTo
      ) {
        this.setState({
          CheckToValue: true,
          CheckViaValue: false,
          CheckFromValue: false,
        });
      } else {
        this.setState({
          distance: "",
          CheckFromValue: false,
          CheckViaValue: false,
          CheckToValue: false,
        });
        this.getOrderSummaryCar();
      }
    }
  };

  getOrderSummaryCar = async () => {
    const {
      selectedTrip,
      frequencyPerYear,
      selectedFrom,
      selectedVia,
      selectedTo,
      distance,
      selectedVehicleType,
      selectedFuelType,
      selectedPowerSource,
    } = this.state;
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
    this.apiOrderSummaryCar = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.orderSummaryCarEndPointUrl +
      `?trip=${selectedTrip}` +
      `&frequency_per_year=${frequencyPerYear}` +
      `&from=${selectedFrom}` +
      `&via=${selectedVia === undefined || selectedVia === "" ? "" : selectedVia
      }` +
      `&to=${selectedTo}` +
      `&distance=${distance}` +
      `&vehicle_type=${selectedVehicleType}` +
      `&fuel_type=${selectedFuelType}` +
      `&power_source=${selectedPowerSource}`
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
