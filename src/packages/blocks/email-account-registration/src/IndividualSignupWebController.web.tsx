import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";
import { HISTORY } from "../../../components/src/comman";
import { message as MESSAGE } from "antd";
import firebase from 'firebase';

// Customizable Area Start
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  // Customizable Area Start
  history: any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  isModalVisible: boolean;
  isPolicyModalVisible: boolean;
  isTermsModalVisible: boolean;
  email: string;
  country: any;
  CountryListData: any;
  privacyData: any;
  tandcData: any;
  isReadMore: boolean;
  isReadMoreTermsCondition: boolean;
  role: any;
  screenLoard: boolean;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class IndividualSignupWebController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiRegisterAccount: string = "";
  getCountryApiCallId: any;
  getPrivacyApiCallId: any;
  getTandCApiCallId: any;
  apiGetProfileData: string = "";
  postGoogleSignInAPICallID: any;
  postFacebookSignInAPICallID:any;
  apiAutoRenewExpire:any;

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

  // GetProfileDetails = (token: any) => {
  //   console.log("@@@@@@@@@@@@@@@@@@@")
  //   const header = {
  //     "Content-Type": configJSON.jsonDataContentType,
  //     token: token,
  //   };
  //   const requestMessage = new Message(
  //     getName(MessageEnum.RestAPIRequestMessage)
  //   );
  //   this.apiGetProfileData = requestMessage.messageId;

  //   requestMessage.addData(
  //     getName(MessageEnum.RestAPIResponceEndPointMessage),
  //     configJSON.getBasicProfileAPIEndPoint
  //   );

  //   requestMessage.addData(
  //     getName(MessageEnum.RestAPIRequestBaseURLMessage),
  //     configJSON.baseURL
  //   );
  //   requestMessage.addData(
  //     getName(MessageEnum.RestAPIRequestHeaderMessage),
  //     JSON.stringify(header)
  //   );
  //   requestMessage.addData(
  //     getName(MessageEnum.RestAPIRequestMethodMessage),
  //     configJSON.validationApiMethodType
  //   );
  //   runEngine.sendMessage(requestMessage.id, requestMessage);
  // }

  GetProfileDetails = async (token: any) => {
    this.apiGetProfileData = await this.apiCall({
      contentType: configJSON.jsonDataContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getBasicProfileAPIEndPoint,
      ctoken: token
    });
  };


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

      if (apiRequestCallId === this.apiGetProfileData) {
        console.log("@@@@@@@@@@@@@@@@@@@@@@2222222222222222",responseJson)
        if (responseJson != null) {
          if (responseJson.data.attributes.email !== "") {
            localStorage.setItem(
              "UserDetails",
              JSON.stringify(responseJson.data.attributes)
            );
            if(responseJson.data.attributes.type === "Individual"){
             
              this.props.history.push("/individual/dashboard");
            }else{
            
              this.props.history.push("/business/dashboard");
            }
          }  
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }

      if (apiRequestCallId === this.postGoogleSignInAPICallID) {
        if(responseJson?.errors){
          MESSAGE.error(responseJson?.errors[0],4)
          }
        localStorage.setItem("token", responseJson.meta.token);
        this.GetProfileDetails(responseJson.meta.token)
      }else if (apiRequestCallId === this.postGoogleSignInAPICallID) {
        window.notify([{ message: responseJson?.message || 'Error Occured While connceting to Google', type: "danger" }]);
      }
      if (apiRequestCallId === this.postFacebookSignInAPICallID) {
        if(responseJson?.errors){
          MESSAGE.error(responseJson?.errors[0],4)
          }
        localStorage.setItem("token", responseJson.meta.token);
        this.GetProfileDetails(responseJson.meta.token)
      }else if (apiRequestCallId === this.postFacebookSignInAPICallID) {
        window.notify([{ message: responseJson?.message || 'Error Occured While connceting to Google', type: "danger" }]);
      }

      if (apiRequestCallId === this.getPrivacyApiCallId) {
        this.setState({
          privacyData: responseJson.privacy_policy,
        });
      }
      if (apiRequestCallId === this.getTandCApiCallId) {
        this.setState({
          tandcData: responseJson.term_and_conditions,
        });
      }
      if (responseJson && responseJson.data) {
        if (apiRequestCallId === this.getCountryApiCallId) {
          this.setState({
            CountryListData: responseJson,
          });
        }
      } else if (responseJson && responseJson.errors) {
        if (apiRequestCallId === this.getCountryApiCallId) {
          // localStorage.clear();
          // setTimeout(() => {
          //   this.props.history.push({
          //       pathname: "/login",
          //       state: "Individual"
          //     });
          // }, 2000);
        }
        if (apiRequestCallId === this.getPrivacyApiCallId) {
          // localStorage.clear();
          // setTimeout(() => {
          //   this.props.history.push({
          //       pathname: "/login",
          //       state: "Individual"
          //     });
          //   }, 2000);
        }
      }

      if (apiRequestCallId === this.apiRegisterAccount) {
        console.log(responseJson.error)
        if (responseJson != null) {
          if (!responseJson.errors) {
            localStorage.setItem("token", responseJson.meta.token);
            MESSAGE.success(`OTP has been sent to ${this.state.email}.`, 8);
            this.setState({
              screenLoard: false,
            });
            this.props.history.push({
              pathname: "/signup-enter-otp",
              state: this.state.email,
            });
          } else {
            MESSAGE.error(`${responseJson.errors[0].account}`, 5);
            this.setState({
              screenLoard: false,
            });
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    super.componentDidMount();
    this.getCountrySelect();
    this.getPrivacy();
    this.getTandC();

    if(this.state.role === "/business-signup"){
      this.setState({role: "Bussiness"})
    }else{
        this.setState({role: "Individual"})   
    }

  }
  ContentToggleShow = () => {
    this.setState({
      isReadMore: !this.state.isReadMore,
    });
  };
  ContentToggleShowTermsCondition = () => {
    this.setState({
      isReadMoreTermsCondition: !this.state.isReadMoreTermsCondition,
    });
  };
  getEmptyState = () => ({
    isModalVisible: true,
    isPolicyModalVisible: false,
    isTermsModalVisible: false,
    screenLoard:false,
    email: "",
    country: "",
    CountryListData: [],
    privacyData: "",
    tandcData: "",
    isReadMore: false,
    isReadMoreTermsCondition: false,
    role: ""
  });

  individualSignupUrl = () => {
    this.props.history.push("/individual-signup");
  };

  getIndividualLoginUrl = () => {
    return "/login";
  };

  handleBack = () => {
    HISTORY.goBack();
  };

  handleModalOk = () => {};

  handleModalCancel = () => {
    // this.setState({ isModalVisible: false });
    this.handleBack();
  };

  showHideTermsModal = (status: boolean) => {
    this.setState({ isTermsModalVisible: status });
  };

  handleTermsModalOk = () => {
    this.showHideTermsModal(false);
    this.individualSignupUrl();
  };

  handleTermsModalCancel = () => {
    this.setState({
      isReadMoreTermsCondition: false,
    });
    this.showHideTermsModal(false);
    this.individualSignupUrl();
  };

  showHidePolicyModal = (status: boolean) => {
    this.setState({ isPolicyModalVisible: status });
  };

  handlePolicyModalOk = () => {
    this.showHidePolicyModal(false);
    this.individualSignupUrl();
  };

  handlePolicyModalCancel = () => {
    this.setState({
      isReadMore: false,
    });
    this.showHidePolicyModal(false);
    this.individualSignupUrl();
  };

  handleInputOnchange = (values: any) => {
    this.setState({ email: values.email });
  };
  handleCountryChange = (values: any) => {
    this.setState({ country: values.country });
  };
  onFinish = async (values: any) => {
    if (this.validateForm(values)) {
      this.registerAccount(values);
    }
  };

  validateForm = (values: any) => {
    let isValid = true;

    return isValid;
  };


  //connect to google account
  connectGoogle = () => {
    const googleResult = new firebase.auth.GoogleAuthProvider();
    googleResult.addScope('profile');
    googleResult.addScope('email');
    firebase.auth().signInWithPopup(googleResult)
      .then(result => {
        if (result && result.credential && result.user && result.additionalUserInfo) {
          console.log('@@@ Google Login Response =========', result);
          this.postGoogleSignIn(result)
        }
      }).catch(err => {
        console.log("@@@ Google Login Error ==========", err);
        // @ts-ignore
        window.notify([{ message: err?.message || 'Error Occured While connceting to Google', type: "danger" }]);
      });
  };

  postGoogleSignIn = async (result: any) => {
    let googleLoginData = {
      data: { 
        attributes: {
          email: result.additionalUserInfo.profile.email,
          unique_auth_id: result.credential.accessToken,
          platform: "google"
        },
        type: "social_account",
        role: "Individual"
      }
    }
    this.postGoogleSignInAPICallID = await this.apiCall({
      contentType: configJSON.jsonDataContentType,
      method: configJSON.apiPostMethod,
      endPoint: configJSON.postGoogleSignInApiEndpoint,
      body: googleLoginData
    });
  }

  //connect to facebook account
  connectFacebook = () => {
    const facebookResult = new firebase.auth.FacebookAuthProvider();
    facebookResult.addScope('email');
    firebase.auth().signInWithPopup(facebookResult).then(result => {
      if (result.credential && result.user && result.additionalUserInfo) {
        console.log('@@@ Facebook Login Response =========', result);
        this.postFacebookSignIn(result)
      }
    }).catch(err => {
      window.notify([{ message: err?.message || 'Error Occured While connceting to Facebook', type: "danger" }]);
    })
  };

  postFacebookSignIn = async (result: any) => {
    let facebookLoginData = {
      data: {
        attributes: {
          email: result.additionalUserInfo.profile.email,
          unique_auth_id: result.credential.accessToken,
          platform: "facebook"
        },
        type: "social_account",
        role: "Individual"
      }
    }
    this.postFacebookSignInAPICallID = await this.apiCall({
      contentType: configJSON.jsonDataContentType,
      method: configJSON.apiPostMethod,
      endPoint: configJSON.postFacebookSignInApiEndpoint,
      body: facebookLoginData
    });
  }

  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body, ctoken } = data;
    const token = (await localStorage.getItem("token")) || "";
    const header = {
      "Content-Type": contentType,
      token: token || ctoken,
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

  getCountrySelect = async () => {
    this.getCountryApiCallId = await this.apiCall({
      contentType: configJSON.jsonDataContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getCountryAPIEndPoint,
    });
  };
  getPrivacy = async () => {
    this.getPrivacyApiCallId = await this.apiCall({
      contentType: configJSON.jsonDataContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getPrivacyAPIEndPoint,
    });
  };

  getTandC = async () => {
    this.getTandCApiCallId = await this.apiCall({
      contentType: configJSON.jsonDataContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getTandCAPIEndPoint,
    });
  };

  registerAccount = async (values: any) => {
    this.setState({
      screenLoard: true,
    });
    const header = {
      "Content-Type": configJSON.jsonDataContentType,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiRegisterAccount = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.registerAccountEndPoint
    );
    const httpBody = {
      data: {
        type: "individual",
        attributes: {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          country_name: values.country,
        },
      },
    };
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(httpBody)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBaseURLMessage),
      configJSON.baseUrl
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.POST
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };
  // Customizable Area End
}
