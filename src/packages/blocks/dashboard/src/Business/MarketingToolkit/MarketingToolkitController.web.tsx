import { IBlock } from "../../../../../framework/src/IBlock";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import { Message } from "../../../../../framework/src/Message";
import MessageEnum, {
  getName,
} from "../../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../../framework/src/RunEngine";
import copy from "copy-to-clipboard";
import { message as MESSAGE } from "antd";
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
  IsEnableImpact: boolean;
  selectedColor: string;
  selectedUnit: string;
  total_impact: string;
  final_EmbededCode: string;
  total_impact_value: any;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class MarketingToolkitController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiPostMarketingDetails: string = "";

  constructor(props: Props) {
    super(props);

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage),
    ];

    this.state = {
      IsEnableImpact: false,
      selectedColor: "",
      selectedUnit: "",
      total_impact: "",
      final_EmbededCode: "",
      total_impact_value: 0,
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
      if (apiRequestCallId === this.apiPostMarketingDetails) {
        if (responseJson != null && responseJson.data !== null) {
          var total_impact = responseJson.data.attributes.total_impact;
          var impact_unit = responseJson.data.attributes.unit;
          var impact_color = responseJson.data.attributes.color;
          var final_EmbededCode =
            window.location.origin +
            `/marketing-total-impact/${impact_color}-${impact_unit}-${total_impact}`;
          this.setState({
            total_impact,
            final_EmbededCode,
          });
        } else {
          this.setState({
            total_impact: "0",
          });
          this.parseApiErrorResponse(responseJson);
        }
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    super.componentDidMount();
    const impact = localStorage.getItem("total_impact");
    const value = JSON.parse(impact ? impact : "")
    this.setState({
      total_impact_value : value
    })
  }
  SwitchOnChange = () => {
    this.setState({
      IsEnableImpact: !this.state.IsEnableImpact,
    });
    this.getMarketingdetailsByColorUnit();
  };

  handleDropDownChange = (value: any, check: string) => {
    if (check === "color") {
      this.setState(
        {
          selectedColor: value,
        },
        () => this.getMarketingdetailsByColorUnit()
      );
    } else {
      this.setState(
        {
          selectedUnit: value,
        },
        () => this.getMarketingdetailsByColorUnit()
      );
    }
  };

  CopytoClipText = () => {
    copy(this.state.final_EmbededCode);
    MESSAGE.success("Impact code copy", 5);
  };

  getEmptyState = () => ({
    IsEnableImpact: false,
    selectedColordataObj: "",
    selectedColor: "green",
    selectedUnit: "kg",
    total_impact: "0",
    final_EmbededCode: window.location.origin,
  });

  getMarketingdetailsByColorUnit = async () => {
    const { selectedUnit, selectedColor } = this.state;

    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.apiPostMarketingDetails = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.postMarketing_toolkitAPIEndPoint
    );

    const httpBody = {
      data: {
        unit: selectedUnit,
        color: selectedColor,
      },
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
