import { IBlock } from "../../../../framework/src/IBlock";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import { Message } from "../../../../framework/src/Message";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";

export const configJSON = require("../config");

export interface Props {
  id: string;
  history: any;
  location: any;
}

interface S {
  loader: boolean;
  isUserLoggedIn: boolean;
  myProjectsList: any;
  renewableEnergyProjectsList: any;
  forestryProjectsList: any;
  energyEfficiencyProjectsList: any;
  myProjectsSubscriptionsList: any;
  myProjectsSubscriptionsListPagination: any;
  indSubscriptionNext: any;
  costOfOneCO2:any
}

interface SS {
  id: any;
}

export default class IndividualProjectController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiGetMyProjectsList: string = "";
  apiGetRenewableEnergyProjectsList: string = "";
  apiGetForestryProjectsList: string = "";
  apiGetEnergyEfficiencyProjectsList: string = "";
  getProjectSubscriptionCountAPICallID: string = "";
  apiGetCarbonPerTon: any;
  constructor(props: Props) {
    super(props);

    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage),
    ];

    this.state = this.getEmptyState();

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async receive(from: string, message: Message) {
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
      if(apiRequestCallId===this.apiGetCarbonPerTon){
        
        this.setState({costOfOneCO2:responseJson?.cost_of_one_ton_co2})
      }
      if (apiRequestCallId === this.apiGetMyProjectsList) {
        if (responseJson != null) {
          if (responseJson.data && responseJson.data.length > 0) {
            this.setState({
              myProjectsList: responseJson,
            });
            setTimeout(() => {
              this.setState({
                loader: false,
              });
            }, 500);
          } else {
            this.parseApiErrorResponse(responseJson);
          }
        } else {
          this.parseApiCatchErrorResponse(errorReponse);
        }
      } else if (apiRequestCallId === this.apiGetRenewableEnergyProjectsList) {
        if (responseJson != null) {
          if (responseJson.data && responseJson.data.length > 0) {
            this.setState({
              renewableEnergyProjectsList: responseJson.data,
              loader: false,
            });
          } else {
            this.parseApiErrorResponse(responseJson);
          }
        } else {
          this.parseApiCatchErrorResponse(errorReponse);
        }
      } else if (apiRequestCallId === this.apiGetForestryProjectsList) {
        if (responseJson != null) {
          if (responseJson.data && responseJson.data.length > 0) {
            this.setState({
              forestryProjectsList: responseJson.data,
              loader: false,
            });
          } else {
            this.parseApiErrorResponse(responseJson);
          }
        } else {
          this.parseApiCatchErrorResponse(errorReponse);
        }
      } else if (apiRequestCallId === this.apiGetEnergyEfficiencyProjectsList) {
        if (responseJson != null) {
          if (responseJson.data && responseJson.data.length > 0) {
            this.setState({
              energyEfficiencyProjectsList: responseJson.data,
              loader: false,
            });
          } else {
            this.parseApiErrorResponse(responseJson);
          }
        } else {
          this.parseApiCatchErrorResponse(errorReponse);
        }
      } else if (
        apiRequestCallId === this.getProjectSubscriptionCountAPICallID
      ) {
        if (responseJson != null) {
          if (responseJson.data && responseJson.data.length > 0) {
            this.setState({
              myProjectsSubscriptionsList: responseJson.data,
              myProjectsSubscriptionsListPagination: responseJson.meta,
              loader: false,
            });
          } else {
            this.parseApiErrorResponse(responseJson);
          }
        } else {
          this.parseApiCatchErrorResponse(errorReponse);
        }
      }
    }
  }

  async componentDidMount() {
    super.componentDidMount();

    this.checkUserStatus();

    this.getMyProjectsList();
    // this.getRenewableEnergyProjectsList();
    // this.getForestryProjectsList();
    // this.getEnergyEfficiencyProjectsList();
    this.getMyProjectSubscriptionCount();
    this.GetCarbonValuePerTon()
  }

  getEmptyState = () => ({
    loader: false,
    isUserLoggedIn: false,
    myProjectsList: null,
    renewableEnergyProjectsList: [],
    forestryProjectsList: [],
    energyEfficiencyProjectsList: [],
    myProjectsSubscriptionsList: [],
    myProjectsSubscriptionsListPagination: [],
    indSubscriptionNext: 1,
    costOfOneCO2:0
  });

  checkUserStatus = async () => {
    let token = await localStorage.getItem("token");
    if (token) {
      this.setState({ isUserLoggedIn: true });
    }
  };

  getMyProjectsList = async () => {
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
    this.apiGetMyProjectsList = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.myProjectsListEndPointUrl
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
  GetCarbonValuePerTon = async () => {
    const Token = localStorage.getItem("token") || "";

    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetCarbonPerTon = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      "bx_block_settings/settings/base_setting"
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

  getRenewableEnergyProjectsList = async () => {
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
    this.apiGetRenewableEnergyProjectsList = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.renewableEnergyProjectsListEndPointUrl
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

  getForestryProjectsList = async () => {
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
    this.apiGetForestryProjectsList = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.forestryProjectsListEndPointUrl
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

  getEnergyEfficiencyProjectsList = async () => {
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
    this.apiGetEnergyEfficiencyProjectsList = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.energyEfficiencyProjectsListEndPointUrl
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

  getMyProjectSubscriptionCount = async () => {
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
    this.getProjectSubscriptionCountAPICallID = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.myProjectsSubscriptionsListEndPointUrl +
        `?per=7&page=${this.state.indSubscriptionNext}`
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

  handlePageClick = (e: any) => {
    let event = e.selected;
    this.setState({ indSubscriptionNext: event + 1 }, () =>
      this.getMyProjectSubscriptionCount()
    );
  };
}
