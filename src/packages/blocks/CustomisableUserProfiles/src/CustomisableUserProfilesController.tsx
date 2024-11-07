import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";
import { notification } from "antd";
import { message as MESSAGE } from "antd";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  // Customizable Area Start
  navigation: any;
  id: string;
  history: any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  txtInputValue: string;
  txtSavedValue: string;
  enableField: boolean;
  OrderHistoryoneTimeTab: any;
  OrderHistorySubscribtionTab: any;
  OrderHistoryGiftCardTab: any;
  basicInfoTab: any;
  SecurityTab: any;
  OrderHistoryTab: any;
  RedeemGiftCardTab: any;
  renderIndividualBasicInformationEditinfo: any;
  billingHistory: any;
  isFetching: any;
  isFromError: any;
  errorMessage: any;
  showErrorModal: any;
  profileImage: any;
  isTermsModalVisible: boolean;
  isUserLoggedIn: boolean;
  btnLoader: boolean;
  objProfile: any;
  indOrderHistoryOneTime: any;
  indOrderNext: any;
  total_impact: string;
  totalImpact: any;
  one_time: string;
  subscription: string;
  Gift_card: string;
  countryValidat: boolean;
  selectedCountry: any;
  CountryListData: any;
  // Customizable Area End
}

interface SS {
  // Customizable Area Start
  id: any;
  // Customizable Area End
}

export default class CustomisableUserProfilesController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  getBasicApiCallId: any;
  putBasicEditApiCallId: any;
  getOneTimeOrderHistoryAPICallID: any;
  getOrderHistoryApiCallId: any;
  getCountryApiCallId: any;
  apiGetCurrencyConversion: any
  // Customizable Area End
  constructor(props: Props) {
    super(props);

    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.ReciveUserCredentials),
      getName(MessageEnum.CountryCodeMessage),
    ];

    this.state = {
      txtInputValue: "",
      txtSavedValue: "A",
      enableField: false,
      OrderHistoryoneTimeTab: true,
      OrderHistorySubscribtionTab: false,
      OrderHistoryGiftCardTab: false,
      basicInfoTab: true,
      SecurityTab: false,
      OrderHistoryTab: false,
      RedeemGiftCardTab: false,
      renderIndividualBasicInformationEditinfo: true,
      billingHistory: false,
      isFetching: false,
      isFromError: false,
      errorMessage: "",
      showErrorModal: false,
      objProfile: {},
      profileImage: null,
      isTermsModalVisible: false,
      isUserLoggedIn: false,
      btnLoader: false,
      indOrderHistoryOneTime: [],
      indOrderNext: 1,
      total_impact: "",
      totalImpact: "",
      one_time: "",
      subscription: "",
      Gift_card: "",
      countryValidat: false,
      selectedCountry: null,
      CountryListData: [],
    };
    this.receive = this.receive.bind(this);
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  // Customizable Area Start

  async componentDidMount() {
    this.checkUserStatus();
    this.getBasicProfile();
    this.getCountrySelect();
    this.getOrderHistoryData();
    this.redirectToOrderHistory();
    this.getOneTimeOrderHistory();

  }

  redirectToOrderHistory = () => {
    if (window.location.href.includes("#orderhistoryId")) {
      window.scrollTo(0, 850);
    }
  };

  checkUserStatus = async () => {
    let token = await localStorage.getItem("token");
    if (token) {
      this.setState({ isUserLoggedIn: true });

    }
  };

  showHideTermsModal = (status: boolean) => {
    this.setState({ isTermsModalVisible: status });
  };

  handleTermsModalOk = () => {
    this.props.history.push("/profile-reset-password");
  };

  handleTermsModalCancel = () => {
    this.showHideTermsModal(false);
  };

  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body } = data;
    const token = (await localStorage.getItem("token")) || "";
    const header = {
      "Content-Type": contentType,
      token: token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      endPoint
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      method
    );
    body &&
      requestMessage.addData(
        getName(MessageEnum.RestAPIRequestBodyMessage),
        JSON.stringify(body)
      );
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
  };

  async receive(from: string, message: Message) {
    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );

      var responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );

      var errorReponse = message.getData(
        getName(MessageEnum.RestAPIResponceErrorMessage)
      );

      if (responseJson.status === 500) {
        // MESSAGE.error(responseJson.errors[0].token, 4);
        // localStorage.clear();
        // setTimeout(() => {
        //   this.props.history.push({
        //     pathname:"/login",
        //     state:"Individual"
        //   });
        // }, 2000);
        return;
      }

      if (responseJson && responseJson.data) {
        if (apiRequestCallId === this.getBasicApiCallId) {
          this.setState({
            objProfile: responseJson.data.attributes,
            profileImage: responseJson.data.attributes.image,
          });
        }
        if (apiRequestCallId === this.getCountryApiCallId) {
          this.setState({
            CountryListData: responseJson,
          });
        }

        if (apiRequestCallId === this.getOneTimeOrderHistoryAPICallID) {
          if (responseJson !== null && responseJson.data.length > 0) {
            this.setState({ indOrderHistoryOneTime: responseJson });
          } else {
            this.setState({ indOrderHistoryOneTime: [] });
            // localStorage.clear();
            // setTimeout(()=>{
            //   this.props.history.push({
            //     pathname:"/login",
            //     state:"Individual"
            //   });
            // },2000)
          }
        } else if (apiRequestCallId === this.putBasicEditApiCallId) {
          this.GetCurrencyData()

          this.updateBasicProfileEditSuccesscallBack(responseJson);
        }
        else if (apiRequestCallId === this.apiGetCurrencyConversion) {
          localStorage.setItem(
            "currency_conversion",
            JSON.stringify(responseJson?.data[0])
          );
        }
      } else if (responseJson && responseJson.errors) {
        if (apiRequestCallId === this.getBasicApiCallId) {
          // localStorage.clear();
          // setTimeout(() => {
          //   this.props.history.push({
          //     pathname:"/login",
          //     state:"Individual"
          //   });
          // }, 2000);
          this.setState({ isFetching: false });
        }
        if (apiRequestCallId === this.getCountryApiCallId) {
          // localStorage.clear();
          // setTimeout(() => {
          //   this.props.history.push({
          //     pathname:"/login",
          //     state:"Individual"
          //   });
          // }, 2000);
          this.setState({ isFetching: false });
        }
        if (apiRequestCallId === this.putBasicEditApiCallId) {
          this.setState({ isFetching: false, btnLoader: false });
        }
        if (apiRequestCallId === this.getOneTimeOrderHistoryAPICallID) {
          // localStorage.clear();
          // setTimeout(() => {
          //   this.props.history.push({
          //     pathname:"/login",
          //     state:"Individual"
          //   });
          // }, 2000);
        }
        if (apiRequestCallId === this.getOrderHistoryApiCallId) {
          // localStorage.clear();
          // setTimeout(() => {
          //   this.props.history.push({
          //     pathname:"/login",
          //     state:"Individual"
          //   });
          // }, 2000);
        }
      } else if (errorReponse) {
        this.setState({
          isFromError: true,
          errorMessage: errorReponse,
          showErrorModal: true,
          isFetching: false,
        });
      }
      if (apiRequestCallId === this.getOrderHistoryApiCallId) {
        if (responseJson.total_impact !== "") {
          const data = localStorage.getItem("total_impact_recent");
          const data1 = data && JSON.parse(data);
          this.setState({
            total_impact: responseJson.total_impact,
            one_time: responseJson.one_time,
            subscription: responseJson.subscription,
            Gift_card: responseJson.gift_card,
            totalImpact: data1
          });
        } else {
          this.setState({
            total_impact: "0",
            one_time: "0",
            subscription: "0",
            Gift_card: "0",
          });
        }
      }
    }
  }

  getBasicProfile = async () => {
    this.getBasicApiCallId = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getBasicProfileAPIEndPoint,
    });
  };
  GetCurrencyData = async () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetCurrencyConversion = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      "account_block/currency_conversion"
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

  getCountrySelect = async () => {
    this.getCountryApiCallId = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getCountryAPIEndPoint,
    });
  };

  getOrderHistoryData = async () => {
    this.getOrderHistoryApiCallId = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getOrderTotalHistoryEndPointUrl,
    });
  };

  getOneTimeOrderHistory = async () => {
    this.setState({ indOrderHistoryOneTime: [] });
    this.getOneTimeOrderHistoryAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: this.state.OrderHistoryoneTimeTab
        ? configJSON.getOrderHistoryEndPointUrl +
        `?product_type=One time&per=5&page=${this.state.indOrderNext}`
        : this.state.OrderHistorySubscribtionTab
          ? configJSON.getOrderHistoryEndPointUrl +
          `?product_type=Subscription&per=5&page=${this.state.indOrderNext}`
          : this.state.OrderHistoryGiftCardTab
            ? configJSON.getOrderHistoryEndPointUrl +
            `?product_type=gift_cards&per=5&page=${this.state.indOrderNext}`
            : this.state?.RedeemGiftCardTab ?
              configJSON.getOrderHistoryEndPointUrl +
              `?product_type=reedem_card&per=5&page=${this.state.indOrderNext}`
              : null,
    });
  };

  handlePageClick = (e: any) => {
    let event = e.selected;
    this.setState({ indOrderNext: event + 1 }, () =>
      this.getOneTimeOrderHistory()
    );
  };

  updateBasicProfileEdit = async () => {
    this.setState({
      btnLoader: true,
    });
    let profileData = {};
    if (window.location.pathname === "/individual/profile") {
      profileData = {
        data: {
          first_name: this.state.objProfile.first_name,
          last_name: this.state.objProfile.last_name,
          email: this.state.objProfile.email,
          full_phone_number: this.state.objProfile.full_phone_number,
          image: this.state.profileImage ? this.state.profileImage : this.state.profileImage
            ?.replace("data:image/png;base64,", "")
            ?.replace("data:image/jpeg;base64", "")
            ?.replace("data:image/jpg;base64", ""),
          country_name: this.state.selectedCountry === null
            ? this.state.objProfile.country_name
            : this.state.selectedCountry,
        },
      };
    } else {
      profileData = {
        data: {
          company_name: this.state.objProfile.company_name,
          company_size: this.state.objProfile.company_size,
          email: this.state.objProfile.email,
          full_phone_number: this.state.objProfile.full_phone_number,
          image: this.state.profileImage ? this.state.profileImage : this.state.profileImage
            ?.replace("data:image/png;base64,", "")
            ?.replace("data:image/jpeg;base64", "")
            ?.replace("data:image/jpg;base64", ""),
          country_name: this.state.selectedCountry === null
            ? this.state.objProfile.country_name
            : this.state.selectedCountry,
        },
      };
    }
    this.putBasicEditApiCallId = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiPutMethod,
      endPoint: configJSON.updateBasicProfileEditAPIEndPoint,
      body: profileData,
    });
  };

  openNotificationWithIcon = () => {
    notification["success"]({
      message: "Profile Updated Successfully",
    });
  };
  handleInputOnChange = (e: any) => {
    var tempObjProfile = this.state.objProfile;
    tempObjProfile[e.target.name] = e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        objProfile: tempObjProfile,
      };
    });
  };
  updateBasicProfileEditSuccesscallBack = async (res: any) => {
    const location = window.location.pathname;
    localStorage.setItem("UserDetails", JSON.stringify(res.data.attributes));
    this.openNotificationWithIcon();
    this.setState(
      { renderIndividualBasicInformationEditinfo: true, btnLoader: false },
      () => {
        this.getBasicProfile();
      }
    );
    if (location === "/individual/profile") {
      this.props.history.replace("/individual/profile");
    } else {
      this.props.history.replace("/business/profile");
    }
  };

  handleCountryChange = (value: any) => {
    this.setState({
      selectedCountry: value,
      countryValidat: false,
    });
  };

  imageHandler = (e: any) => {
    const reader: any = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImage: reader.result }, () => { });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
}
// Customizable Area End
