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
  selectedCountry: string;
  employeeNo: string;
  loader: boolean;
  EmployeeData: any;
  orderSummaryData: any;
  btnDisabled: boolean;
  CountryListData: any;
  selectedCountryEmployee: any
  is_custom_impact: any
  is_custom_amount: any
  clickShow: boolean;
  // Customizable Area End
}

interface SS {
  id: any;
}

const UserDetails: any = localStorage.getItem("UserDetails");
export default class OffsetEmployeeController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiEmployeeCalculateImpt: string = "";
  getCountryApiCallId: any;

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
      selectedCountry: "",
      employeeNo: "",
      loader: false,
      EmployeeData: {},
      orderSummaryData: {},
      btnDisabled: false,
      CountryListData: [],
      selectedCountryEmployee: [],
      is_custom_impact: '',
      is_custom_amount: '',
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
      if (apiRequestCallId === this.apiEmployeeCalculateImpt) {
        if (responseJson != null) {
          this.setState({
            EmployeeData: responseJson,
            orderSummaryData: responseJson,
            loader: false,
            btnDisabled: false
          });
        } else {
          this.setState({
            loader: false,
            btnDisabled: false,
          });
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }
      if (apiRequestCallId === this.getCountryApiCallId) {
        if (responseJson != null) {
          var finalData = responseJson.data
          if (finalData.length > 0) {
            this.setState({
              CountryListData: finalData,
            });
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    // this.getCountrySelect()
  }

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

  handleCountryChange = (value: any) => {
    this.setState({
      selectedCountryEmployee: value,
    });
    // if (this.state.employeeNo.length !== 0 && value.length !== 0) {
    //   this.setState({btnDisabled: false})
    // }
  };

  handleEmployeeInput = (e: any) => {
    const { value } = e.target;
    if (value === "" || value) {
      this.setState({
        employeeNo: "",
        EmployeeData: null,
        orderSummaryData: null
      })
    }
    if (value < 100000 && value > 0 || value.length === 0) {
      this.setState({
        employeeNo: value,
      });
      if (this.state.selectedCountry.length !== 0 && e.target.value.length !== 0) {
        this.setState({ btnDisabled: false })
      }
    } else if (value.length === 0) {
      this.setState({
        employeeNo: value,
      });
    }
  };


  handleFinish = () => {
    if (this.state.employeeNo !== "" && this.state.selectedCountry !== "") {
      this.calculateEmployeeData();
      this.setState({ employeeNo: "" })
    }
  };

  getEmptyState = () => ({
    selectedCountry: localStorage.getItem('token') && JSON.parse(UserDetails)?.country_name !== null ? JSON.parse(UserDetails)?.country_name : null,
    employeeNo: "",
    EmployeeData: {},
    orderSummaryData: {},
    loader: false,
    btnDisabled: true,
    CountryListData: [],
    selectedCountryEmployee: null,
    is_custom_impact: null,
    is_custom_amount: null
  });
  callBackFromOrderSummaary = (data: any) => {
    // this.setState({
    //   orderSummaryData:data
    // })

  }
  getCountrySelect = async () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.getCountryApiCallId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getCountryAPIEndPoint
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


  calculateEmployeeData = async () => {
    this.setState({
      loader: true,
      btnDisabled: false,
    });
    localStorage.setItem("is_custom_data", JSON.stringify({
      is_custom_impact: null,
      is_custom_amount: null,
    }))
    const Token = localStorage.getItem("token") || "";
    const { selectedCountryEmployee, employeeNo } = this.state;
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiEmployeeCalculateImpt = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getEmployeeCalculateAPIEndPoint +
      `?country=${selectedCountryEmployee}&no_of_employee=${employeeNo}`
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
  // Customizable Area End
}
