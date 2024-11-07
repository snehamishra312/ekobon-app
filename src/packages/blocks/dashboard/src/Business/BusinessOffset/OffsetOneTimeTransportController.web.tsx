import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../../framework/src/RunEngine";

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
  stage: any;
  selectedTransportTab: string;
  selectedTrip: string;
  selectedType: string;
  frequencyPerYear: number;
  selectedFrom: string;
  selectedVia: string;
  selectedThen: string;
  selectedTo: string;
  distance: number;
  orderSummaryData: any;
  TransportTrainTypeList: any;
  TransportBusTypeList: any;
  TransportTwoWheelerTypeList: any;
  loader: boolean;
  CheckViaValue: boolean;
  CheckToValue: boolean;
  CheckThenValue: boolean;
  CheckFromValue: boolean;

  // Customizable Area End
}

interface SS {
  id: any;
}

export default class OffsetOneTimeTransportController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiOrderSummaryTrain: string = "";
  apiOrderSummaryBus: string = "";
  apiOrderSummaryTwoWheeler: string = "";
  apiGetTypeData: string = "";
  apiBusData: string = "";

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
    const { selectedTransportTab } = this.state;
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
      if (apiRequestCallId === this.apiOrderSummaryTrain) {
        if (responseJson != null) {
          this.setState({
            orderSummaryData: responseJson,
            loader: false,
          });
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiOrderSummaryBus) {
        if (responseJson != null) {
          this.setState({
            orderSummaryData: responseJson,
            loader: false,
          });
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiOrderSummaryTwoWheeler) {
        if (responseJson != null) {
          this.setState({
            orderSummaryData: responseJson,
            loader: false,
          });
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiGetTypeData) {
        if (selectedTransportTab === "Train") {
          if (responseJson.data.length > 0) {
            this.setState({
              TransportTrainTypeList: responseJson.data,
            });
          }
          this.parseApiCatchErrorResponse(errorReponse);
        } else if (selectedTransportTab === "Bus") {
          if (responseJson.data.length > 0) {
            this.setState({
              TransportBusTypeList: responseJson.data,
            });
          }
          this.parseApiCatchErrorResponse(errorReponse);
        } else if (selectedTransportTab === "TwoWheeler") {
          if (responseJson.data.length > 0) {
            this.setState({
              TransportTwoWheelerTypeList: responseJson.data,
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
    this.handleGetTypeDropDownData("Train");
  }

  getEmptyState = () => ({
    stage: 0,
    selectedTransportTab: "Train",
    selectedTrip: "one_way",
    selectedType: "",
    frequencyPerYear: 0,
    selectedFrom: "",
    selectedVia: "",
    selectedThen: "",
    selectedTo: "",
    distance: 0,
    orderSummaryData: "",
    TransportTrainTypeList: [],
    TransportBusTypeList: [],
    TransportTwoWheelerTypeList: [],
    loader: false,
    CheckViaValue: false,
    CheckToValue: false,
    CheckFromValue: false,
    CheckThenValue: false,
  });

  onAddStage = () => {
    this.setState({
      stage: this.state.stage >= 2 ? 2 : this.state.stage + 1,
    });
  };

  onViaRemoveStage = () => {
    this.setState({
      stage: this.state.stage == 1 ? 0 : 1,
      selectedVia: "",
    });
  };

  onThenRemoveStage = () => {
    this.setState({
      stage: this.state.stage - 1,
      selectedThen: "",
    });
  };

  otherTransportTabHandler = (type: string) => {
    this.setState({
      selectedTransportTab: type,
    });
    this.handleGetTypeDropDownData(type);
  };

  handleTripChange = (e: any) => {
    this.setState({
      selectedTrip: e.target.value,
    });
  };

  handleTypeChange = (value: any) => {
    this.setState({
      selectedType: value,
    });
  };

  handleFrequencyChange = (e: any) => {
    this.setState({
      frequencyPerYear: e.target.value,
    });
  };

  handleFromChange = (value: any) => {
    if (
      this.state.selectedVia === value ||
      this.state.selectedTo === value ||
      this.state.selectedThen === value
    ) {
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

  handleViaChange = (value: any) => {
    if (
      this.state.selectedFrom === value ||
      this.state.selectedTo === value ||
      this.state.selectedThen === value
    ) {
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

  handleThenChange = (value: any) => {
    if (
      this.state.selectedFrom === value ||
      this.state.selectedVia === value ||
      this.state.selectedTo === value
    ) {
      this.setState({
        CheckThenValue: true,
      });
    } else {
      this.setState({
        selectedThen: value,
        CheckThenValue: false,
      });
    }
  };

  handleToChange = (value: any) => {
    if (
      this.state.selectedFrom === value ||
      this.state.selectedVia === value ||
      this.state.selectedThen === value
    ) {
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

  handleDistance = (e: any) => {
    this.setState({
      distance: e.target.value,
    });
  };
  handleGetTypeDropDownData = async (value: any) => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetTypeData = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      value === "Train"
        ? configJSON.offsetOneTimetransportTrainEndPointUrl
        : value === "Bus"
        ? configJSON.offsetOneTimetransportBusEndPointUrl
        : configJSON.offsetOneTimetransportTwoWheelerEndPointUrl
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

  handleFinish = () => {
    const { selectedTransportTab } = this.state;
    if (
      !this.state.CheckFromValue &&
      !this.state.CheckViaValue &&
      !this.state.CheckThenValue &&
      !this.state.CheckToValue
    ) {
      if (selectedTransportTab === "Train") {
        this.getOrderSummaryTrain();
      } else if (selectedTransportTab === "Bus") {
        this.getOrderSummaryBus();
      } else if (selectedTransportTab === "TwoWheeler") {
        this.getOrderSummaryTwoWheeler();
      }
    }
  };

  getOrderSummaryTrain = async () => {
    const {
      selectedTrip,
      selectedType,
      frequencyPerYear,
      selectedFrom,
      selectedVia,
      selectedThen,
      selectedTo,
      distance,
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
    this.apiOrderSummaryTrain = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.orderSummaryTrainEndPointUrl +
        `?trip=${selectedTrip}` +
        `&frequency_per_year=${frequencyPerYear}` +
        `&from=${selectedFrom}` +
        `&via=${selectedVia}` +
        `&then=${selectedThen}` +
        `&to=${selectedTo}` +
        `&distance=${distance}` +
        `&individual_train_type_id=${selectedType}`
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

  getOrderSummaryBus = async () => {
    const {
      selectedTrip,
      selectedType,
      frequencyPerYear,
      selectedFrom,
      selectedVia,
      selectedThen,
      selectedTo,
      distance,
    } = this.state;

    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiOrderSummaryBus = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.orderSummaryBusEndPointUrl +
        `?distance=${distance}` +
        `&trip=${selectedTrip}` +
        `&individual_bus_type_id=${selectedType}` +
        `&frequency_per_year=${frequencyPerYear}` +
        `&from_to=${selectedFrom}${selectedVia &&
          "," + selectedVia}${selectedThen && "," + selectedThen}${"," +
          selectedTo}`
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

  getOrderSummaryTwoWheeler = async () => {
    const {
      selectedTrip,
      selectedType,
      frequencyPerYear,
      selectedFrom,
      selectedVia,
      selectedThen,
      selectedTo,
      distance,
    } = this.state;
    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiOrderSummaryTwoWheeler = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.orderSummaryTwoWheelerEndPointUrl +
        `?distance=${distance}` +
        `&trip=${selectedTrip}` +
        `&individual_two_wheeler_type_id=${selectedType}` +
        `&frequency_per_year=${frequencyPerYear}` +
        `&from_to=${selectedFrom}${selectedVia &&
          "," + selectedVia}${selectedThen && "," + selectedThen}${"," +
          selectedTo}`
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
