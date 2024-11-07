import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../../framework/src/RunEngine";
import { message as MESSAGE } from "antd";
import { constants } from "../../../../../components/src/types";

export const configJSON = require("../config");

const UserDetails: any = localStorage.getItem("UserDetails");

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
  employeeData: any;
  finalTotalImpact: any;
  btnDisabled: boolean;
  is_custom_impact: any;
  is_custom_amount: any;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class SubscriptionEmployeeController extends BlockComponent<
  Props,
  S,
  SS
> {
  getEmployeeDetailsApiCalled: any = "";
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
      if (apiRequestCallId === this.getEmployeeDetailsApiCalled) {
        if (
          (responseJson != null && responseJson.data !== null) ||
          responseJson.message === ""
        ) {
          if (responseJson.data.length > 0) {
            this.setState({
              employeeData: responseJson.data,
              btnDisabled: false,
            });
          } else {
            this.setState({
              employeeData: [],
              btnDisabled: false,
            });
          }
        } else {
          this.setState({
            employeeData: [],
            btnDisabled: false,
          });
          MESSAGE.error(responseJson.message, 4);
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
    if (window.location.href.includes("/business/subscription-employee")) {
      window.scrollTo(850, 0);
    }
  };
  getEmptyState = () => ({
    is_custom_impact: null,
    is_custom_amount: null,
    orderSummaryData: null,
    loader: false,
    btnDisabled: true,
    finalTotalImpact: "",
    employeeData: [
      {
        country:
          localStorage.getItem("token") &&
          JSON.parse(UserDetails)?.country_name !== null
            ? JSON.parse(UserDetails)?.country_name
            : null,
        no_of_employee: "",
        total_impact: 0,
        total: "",
      },
    ],
  });

  callGetOrderSummaryCar = async () => {
    const subscriptionEmployeeControllerConstants = constants.SubscriptionEmployeeController;
    const { employeeData } = this.state;
    if (employeeData.length === 1) {
      if (
        employeeData[0].country !== "" &&
        employeeData[0].no_of_employee !== ""
      ) {
        if (
          employeeData[0].no_of_employee < 100 &&
          employeeData[0].no_of_employee > 0
        ) {
          this.getEmployeeDetails();
        } else {
          MESSAGE.error(subscriptionEmployeeControllerConstants.SUBSCRIPTION_EMPLOYEE_ERROR, 5);
        }
      }
    } else {
      if (
        employeeData[1].country !== "" &&
        employeeData[1].no_of_employee !== ""
      ) {
        if (
          employeeData[1].no_of_employee < 100 &&
          employeeData[1].no_of_employee > 0
        ) {
          this.getEmployeeDetails();
        } else {
          MESSAGE.error(subscriptionEmployeeControllerConstants.SUBSCRIPTION_EMPLOYEE_ERROR, 5);
        }
      }
    }
  };

  addClick() {
    if (
      this.state.employeeData.length === 1 ||
      this.state.employeeData.length < 2
    ) {
      this.setState((prevState) => ({
        employeeData: [
          ...prevState.employeeData,
          {
            country:
              localStorage.getItem("token") &&
              JSON.parse(UserDetails)?.country_name !== null
                ? JSON.parse(UserDetails)?.country_name
                : null,
            no_of_employee: "",
            total_impact: 0,
            total: "",
          },
        ],
      }));
    }
  }

  removeClick(i: any) {
    if (this.state.employeeData.length > 1) {
      let employeeData = [...this.state.employeeData];
      employeeData.splice(i, 1);
      this.setState({ employeeData });
    }
  }

  handleContrySelectChange(i: any, name: any, data: string) {
    let employeeData = [...this.state.employeeData];
    employeeData[i] = { ...employeeData[i], [name]: data };
    this.setState({ employeeData }, () => this.callGetOrderSummaryCar());
  }

  handleEmployeeInputChange(i: any, e: any) {
    const { value } = e.target;
    if (value === "" || value) {
      this.setState({
        orderSummaryData: null,
        finalTotalImpact: null,
      });
    }
    let employeeData = [...this.state.employeeData];
    if ((value < 100000 && value > 0) || value.length === 0) {
      employeeData[i] = { ...employeeData[i], ["no_of_employee"]: value };
      this.setState({ employeeData }, () => this.callGetOrderSummaryCar());
    }
  }

  getEmployeeDetails = async () => {
    const Token = localStorage.getItem("token") || "";
    const { employeeData } = this.state;
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.getEmployeeDetailsApiCalled = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getSubscriptionEmployeeDataAPIEndPoint
    );
    const httpBody = {
      data: employeeData,
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

  employeeOrderSummaryData = async () => {
    this.setState({
      loader: true,
      is_custom_impact: null,
      is_custom_amount: null,
    });
    localStorage.setItem(
      "is_custom_data",
      JSON.stringify({
        is_custom_impact: this.state.is_custom_impact,
        is_custom_amount: this.state.is_custom_amount,
      })
    );
    const Token = localStorage.getItem("token") || "";
    const { employeeData } = this.state;
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
      configJSON.postSubscriptionEmployeeOrderDataAPIEndPoint
    );
    const httpBody = {
      data: employeeData,
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
    this.setState({
      employeeData: [
        {
          country:
            localStorage.getItem("token") &&
            JSON.parse(UserDetails)?.country_name !== null
              ? JSON.parse(UserDetails)?.country_name
              : null,
          no_of_employee: "",
          total_impact: this.state?.employeeData?.map(
            (e: any) => e?.total_impact
          )[0],
          total: this.state?.employeeData?.map((e: any) => e?.total)[0],
        },
      ],
    });
  };

  // Customizable Area End
}
