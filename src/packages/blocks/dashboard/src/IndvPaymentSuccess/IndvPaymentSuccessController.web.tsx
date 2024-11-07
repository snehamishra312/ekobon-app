import { IBlock } from "../../../../framework/src/IBlock";
import { Message } from "../../../../framework/src/Message";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("../config");

export interface Props {
  // Customizable Area Start
  history: any;
  location: any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  TermConditionData: string;
  myProjectsList: any;
  selectProjectError: any;
  isUserLoggedIn: boolean;
  selectValue: string;
  selectedProjectId: string;
  isLoader: any;
  isGift: boolean;
  finalImpact: any,
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class IndvPaymentSuccessController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiFaq: string = "";
  apiGetMyProjectsList: string = "";
  apiConfirmSelectedProjects: string = "";

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
      if (apiRequestCallId === this.apiGetMyProjectsList) {
        if (responseJson != null) {
          if (responseJson.data) {
            console.log("@@@ response", responseJson);

            this.setState({
              myProjectsList: responseJson.data,
              isLoader: false,
            });
          } else {
            this.parseApiErrorResponse(responseJson);
          }
        } else {
          this.parseApiCatchErrorResponse(errorReponse);
        }
      }

      if (apiRequestCallId === this.apiConfirmSelectedProjects) {
        if (responseJson?.errors) {
          this.setState({ selectProjectError: responseJson?.errors[0] });
        } else if (responseJson != null) {
          this.props.history.push({
            pathname:
              window.location.pathname === "/individual-payment/success"
                ? "/individual/AddtoCard/payment"
                : "/business/AddtoCard/payment",
            selectedProjectId: {
              id: responseJson?.data,
              is_activated: "project_selected",
            },
          });
        } else {
          this.parseApiCatchErrorResponse(errorReponse);
        }
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    this.getMyProjectsList();
    this.checkUserStatus();
    const { total_no_of_trees, total_impact } =
      this.props?.history?.location?.state;

    const gift_redeem = localStorage.getItem("gift_redeem")
    const data = gift_redeem ? JSON.parse(gift_redeem) : "";
    const finalImpactValue = total_impact - total_no_of_trees * 0.04;
    if (data) {
      this.setState({
        isGift: true,
        finalImpact: 0
      })
    }
    else {
      this.setState({
        finalImpact: finalImpactValue
      })
    }

  }

  getEmptyState = () => ({
    TermConditionData: "",
    myProjectsList: [],
    isUserLoggedIn: false,
    selectValue: "",
    selectedProjectId: "",
    isLoader: false,
    isGift: false,
    selectProjectError: null,
    finalImpact: 0,
  });

  checkUserStatus = async () => {
    let token = await localStorage.getItem("token");
    if (token) {
      this.setState({ isUserLoggedIn: true });
    }
  };

  handleSelectProjectType = (data: any) => {
    const val = {
      project_name: data?.attributes?.project_name,
      project_image: data?.attributes?.image[0]
    }
    const selected_project_image = localStorage.setItem("selected_project_image", JSON.stringify(val));
    this.setState({
      selectedProjectId: data.id,
    });
  };

  getMyProjectsList = async () => {
    console.log("ad")
    this.setState({
      isLoader: true,
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
      configJSON.getProjectListEndPointUrl
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

  handleSelectChange = (value: string) => {
    this.setState({ selectValue: value });
  };

  handleConfirm = () => {
    const gift_redeem = localStorage.getItem("gift_redeem") || ""
    if (gift_redeem) {
      const local = localStorage.setItem("climate_project_id", this.state.selectedProjectId);
      window.location.href = "/individual-payment/success-alert";
    }
    else {
      const local = localStorage.setItem("climate_project_id", this.state.selectedProjectId);
      const token = localStorage.getItem("token") || "";
      const header = {
        "Content-Type": configJSON.validationApiContentType,
        token,
      };
      const requestMessage = new Message(
        getName(MessageEnum.RestAPIRequestMessage)
      );
      this.apiConfirmSelectedProjects = requestMessage.messageId;

      requestMessage.addData(
        getName(MessageEnum.RestAPIResponceEndPointMessage),
        configJSON.myProjectsListEndPointUrl
      );

      const httpBody = {
        data: {
          climate_project_id: this.state.selectedProjectId,
          total_offset: this.props.location.state.total_no_of_trees > 0 ? this.props.location.state.total_impact - (this.props.location.state.total_no_of_trees * 0.04) : this.props.location.state.total_impact
          ,
          amount_invested: this.props.location.state.total,
          no_tree_planted: 0,
          is_activated: false
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
    }
  };
  // Customizable Area End
}
