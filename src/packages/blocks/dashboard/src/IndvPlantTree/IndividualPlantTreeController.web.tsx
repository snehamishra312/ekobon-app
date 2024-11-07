import { IBlock } from "../../../../framework/src/IBlock";
import { Message } from "../../../../framework/src/Message";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("../config.js");

export interface Props {
  // Customizable Area Start
  history: any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  selectNoTrees: string;
  selectGiftCard: string;
  activeTabKey: string;
  PlantTreesData: any;
  orderSummaryData: any;
  isSelectGift: boolean;
  isReadMore: boolean;
  customeNoTree: string;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class IndividualPlantTreeController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiPlantTreeData: string = "";
  apiSelectnoTrees: string = "";

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
      if (apiRequestCallId === this.apiPlantTreeData) {
        if (responseJson.data != null && responseJson.data.length > 0) {
          if (responseJson) {
            this.setState({
              PlantTreesData: responseJson,
            });
          }
          this.parseApiErrorResponse(responseJson);
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiSelectnoTrees) {
        if (responseJson != null) {
          this.setState({
            orderSummaryData: responseJson,
          });
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }
    }
    // Customizable Area End
  }

  getEmptyState = () => ({
    selectNoTrees:
      window?.location?.pathname === "/business/plant-tree" ? "200" : "5",
    selectGiftCard: "",
    PlantTreesData: {},
    activeTabKey: "1",
    orderSummaryData: {},
    isSelectGift: false,
    isReadMore: false,
    customeNoTree: "0",
  });

  handleNumberTreeSelect = (e: any) => {
    var value = e.target.value;
    this.setState({
      selectNoTrees: value,
    });
    if (value !== "custom") {
      this.handleGetSelectNoTrees(value);
    }
    if (value === "custom") {
      this.setState({
        orderSummaryData: {},
      });
    }
  };

  SelectGiftcard = (card: any) => {
    this.setState({
      selectGiftCard: card,
      isSelectGift: true,
    });
    this.handleGetSelectNoTrees(
      this.state.selectNoTrees === "custom"
        ? this.state.customeNoTree
        : this.state.selectNoTrees
    );
  };

  TabonChange = (Key: any) => {
    this.setState({
      activeTabKey: Key,
      orderSummaryData: {},
      isSelectGift: false,
      selectGiftCard: "",
      selectNoTrees: "5",
    });
    setTimeout(() => {
      this.GetPlantTreeTabData();
    }, 500);
  };

  async componentDidMount() {
    super.componentDidMount();
    if (localStorage.getItem("token")) {
      this.GetPlantTreeTabData();
    }
  }

  handleGetOrderSummaryData = (ResponseData: any) => {
    this.setState({
      orderSummaryData: ResponseData,
    });
  };

  ContentToggleShow = () => {
    this.setState({
      isReadMore: !this.state.isReadMore,
    });
  };
  handleFetchCustomTreeNo = (treeNo: any) => {
    
    this.setState({
      customeNoTree: treeNo,
    });
    if(treeNo!==""){
      this.handleGetSelectNoTrees(treeNo)
    }
  };

  GetPlantTreeTabData = async () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiPlantTreeData = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      this.state.activeTabKey === "1"
        ? configJSON.getAgroforestry_VarietiesAPIEndPoint
        : configJSON.getMiyawaki_VarietiesAPIEndPoint
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

  handleGetSelectNoTrees = async (SelectedNo: any) => {
    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiSelectnoTrees = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      this.state.activeTabKey === "1"
        ? configJSON.AgroforestryOrderSummaryAPIEndPoint +
            `?no_of_trees=${SelectedNo}`
        : configJSON.MiyawakiOrderSummaryAPIEndPoint +
            `?no_of_trees=${SelectedNo}`
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
