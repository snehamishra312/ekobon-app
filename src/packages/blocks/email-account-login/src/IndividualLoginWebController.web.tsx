import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";
import firebase from 'firebase';
import { message as MESSAGE } from "antd";
import { resolveTripleslashReference } from "typescript";
import axios from "axios";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  // Customizable Area Start
  history: any;
  location: any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  isModalVisible: boolean;
  userValues: any;
  loader: boolean;
  loginFlag: any;
  role: any
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class IndividualLoginWebController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiLogin: string = "";
  apiGetProfileData: string = "";
  postGoogleSignInAPICallID: any;
  postFacebookSignInAPICallID: any;
  apiAutoRenewExpire: any;
  apiAutoRenew: any;
  apiAutoCancelSubscription: any;
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
      userValues: null,
      isModalVisible: true,
      loader: false,
      role: this.props.location.state?.item,
      loginFlag: ""
    };

    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body } = data;
    const token = (await localStorage.getItem("token")) || "";
    const header = {
      "Content-Type": contentType,
      token,
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
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBaseURLMessage),
      configJSON.baseURL
    );
    body &&
      requestMessage.addData(
        getName(MessageEnum.RestAPIRequestBodyMessage),
        JSON.stringify(body)
      );
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
  };

  autoRenewExpire = async () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiAutoRenewExpire = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      "bx_block_my_project/my_subscription_projects/auto_expire"
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
      configJSON.validationApiMethodType
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };
  autoCancelSubscription = async () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiAutoCancelSubscription = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      "bx_block_my_project/my_subscription_projects/auto_cancel"
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
      configJSON.validationApiMethodType
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };
  autoRenew = async () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiAutoRenew = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      "bx_block_my_project/my_subscription_projects/auto_renewal"
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
      configJSON.validationApiMethodType
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
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
      if (apiRequestCallId === this.postGoogleSignInAPICallID) {
        this.setState({
          loader: true
        })
        if (responseJson?.errors) {
          MESSAGE.error(responseJson?.errors[0], 4)
        }
        localStorage.setItem("token", responseJson.meta.token);
        this.GetProfileDetails(responseJson.meta.token)
      }
      else if (apiRequestCallId === this.postGoogleSignInAPICallID) {
        this.setState({
          loader: false
        })
        window.notify([{ message: responseJson?.message || 'Error Occured While connceting to Google', type: "danger" }]);
      }


      if (apiRequestCallId === this.postFacebookSignInAPICallID) {
        localStorage.setItem("token", responseJson.meta.token);
        this.GetProfileDetails(responseJson.meta.token)
      }
      else if (apiRequestCallId === this.postFacebookSignInAPICallID) {
        window.notify([{ message: responseJson?.message || 'Error Occured While connceting to Google', type: "danger" }]);
      }
      if (apiRequestCallId === this.apiLogin) {
        if (responseJson != null) {
          if (!responseJson.errors) {
            const rediret = localStorage.getItem("redirect_url");
            localStorage.setItem("token", responseJson.meta.token);
            localStorage.setItem(
              "UserDetails",
              JSON.stringify(responseJson.meta.account.data.attributes)
            );

            this.autoRenewExpire()
            this.autoCancelSubscription()
            this.autoRenew()
            if (rediret == "gift_card") {
              this.props.history.push("/individual/giftCard");
              setTimeout(() => {
                localStorage.removeItem("redirect_url");
              }, 2000)
            } else if (rediret == "plant_tree") {
              this.props.history.push("/individual/offset-onetime");
              setTimeout(() => {
                localStorage.removeItem("redirect_url");
              }, 2000)
            } else if (rediret == "privacy_policy") {
              this.props.history.push("/individual/privacy-policy");
            } else if (rediret == "terms_conditions") {
              this.props.history.push("/individual/terms-conditions");
            }
            else if (responseJson.meta.account.data.attributes.type === "Individual") {
              this.props.history.push("/individual/dashboard");
            }
            else {
              this.props.history.push("/business/dashboard");
            }
          } else {
            MESSAGE.error("Please check username and password", 5);
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiGetProfileData) {
        if (responseJson != null) {
          if (responseJson.data.attributes.email !== "") {
            localStorage.setItem(
              "UserDetails",
              JSON.stringify(responseJson.data.attributes)
            );
            const rediret = localStorage.getItem("redirect_url");
            if (rediret == "gift_card") {
              this.props.history.push("/individual/giftCard");
              setTimeout(() => {
                localStorage.removeItem("redirect_url");
              }, 2000)
            } else if (rediret == "plant_tree") {
              this.props.history.push("/individual/offset-onetime");
              setTimeout(() => {
                localStorage.removeItem("redirect_url");
              }, 2000)
            }
            else if (responseJson.data.attributes.type === "Individual") {
              this.props.history.push("/individual/dashboard");
            } else {
              this.props.history.push("/business/dashboard");
            }
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    let loginDetails: any = localStorage.getItem("UserDetails");
    const loginFlags = JSON.parse(loginDetails)?.type;
    this.setState({
      loginFlag: loginFlags
    })
    if (this.state.role === "/business/dashboard") {
      this.setState({ role: "Bussiness" })
    } else {
      this.setState({ role: "Individual" })
    }

  }

  initFirebase = async () => {
    const app = await firebase.initializeApp({
      apiKey: "AIzaSyDloVdcrurl9h2HbDCd3i6ISHcxB9d7G-Y",
      authDomain: "carbon-app-9d1a2.firebaseapp.com",
    });
  }

  handleModalOk = () => { };

  onFinish = async (values: any) => {
    this.setState({ userValues: values }, () => {
      if (this.validateForm(values)) {
        this.login(values);
      }
    })
  };

  onHandlePartnerLogin = async (val: any) => {
    console.log({ val })
    const data = {
      email: val?.email,
      password: val?.password
    }
    axios({
      method: configJSON.apiPostMethod,
      url: configJSON.baseUrl1 + configJSON.getPartnerLoginEndPointURL,
      data: data,
      headers: { "Content-Type": configJSON.dashboarContentType }
    })
      .then((res) => {
        console.log({ res })
        if (res.data.success == true) {
          MESSAGE.success(res.data.message, 5);
          localStorage.setItem("user_info", JSON.stringify(res.data.userinfo));
          this.props.history.push('/api/partner/dashboard')
        }
        else {
          MESSAGE.error(res.data.message, 5);
        }
      })
      .catch((err) => {
        console.log({ err })
      })
  }

  validateForm = (values: any) => {
    let isValid = true;
    return isValid;
  };

  onClickGiftCard = () => {
    localStorage.setItem("redirect_url", JSON.stringify("gift_card"));
  }

  onClickLoginCard = () => {
    localStorage.removeItem("redirect_url");
  }

  postGoogleSignIn = async (result: any) => {
    let googleLoginData = {
      data: {
        attributes: {
          email: result?.result?.additionalUserInfo?.profile?.email,
          first_name: result?.result?.additionalUserInfo?.profile?.given_name,
          last_name: result?.result?.additionalUserInfo?.profile?.family_name,
          unique_auth_id: result?.result?.credential?.accessToken,
          platform: "google"
        },
        type: "social_account",
        role: this.props.location.state || this.state.role,
      }
    }
    this.postGoogleSignInAPICallID = await this.apiCall({
      contentType: configJSON.loginApiContentType,
      method: configJSON.loginAPiMethod,
      endPoint: configJSON.postGoogleSignInApiEndpoint,
      body: googleLoginData
    });
  }

  postFacebookSignIn = async (result: any) => {
    console.log({ result })
    let facebookLoginData = {
      data: {
        attributes: {
          email: result?.additionalUserInfo?.profile?.email,
          first_name: result?.additionalUserInfo?.profile?.given_name,
          last_name: result?.additionalUserInfo?.profile?.family_name,
          unique_auth_id: result?.credential?.accessToken,
          platform: "facebook"
        },
        type: "social_account",
        role: this.state.role
      }
    }
    this.postFacebookSignInAPICallID = await this.apiCall({
      contentType: configJSON.loginApiContentType,
      method: configJSON.loginAPiMethod,
      endPoint: configJSON.postFacebookSignInApiEndpoint,
      body: facebookLoginData
    });
  }

  //connect to google account
  connectGoogle = () => {
    const googleResult = new firebase.auth.GoogleAuthProvider();
    googleResult.addScope('profile');
    googleResult.addScope('email');
    firebase.auth().signInWithPopup(googleResult)
      .then(result => {
        if (result && result.credential && result.user && result.additionalUserInfo) {
          console.log('@@@ Google Login Response =========', result);
          this.postGoogleSignIn({ result })
        }
      }).catch(err => {
        console.log("@@@ Google Login Error ==========", { err });
        // @ts-ignore
        window.notify([{ message: err?.message || 'Error Occured While connceting to Google', type: "danger" }]);
      });
  };

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

  postFacebookSignInSuccessCallBack = (res: any) => {
    localStorage.setItem("token", res.meta.token);
    localStorage.setItem("UserDetails", JSON.stringify(res.data.attributes));
    const rediret = localStorage.getItem("redirect_url");
    if (rediret == "gift_card") {
      this.props.history.push("/individual/giftCard");
      setTimeout(() => {
        localStorage.removeItem("redirect_url");
      }, 2000)
    } else if (rediret == "plant_tree") {
      this.props.history.push("/individual/offset-onetime");
      setTimeout(() => {
        localStorage.removeItem("redirect_url");
      }, 2000)
    } else {
      this.props.history.push("/individual/dashboard");
    }
  }


  GetProfileDetails = (token: any) => {
    const header = {
      "Content-Type": configJSON.jsonDataContentType,
      token: token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetProfileData = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getBasicProfileAPIEndPoint
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
      configJSON.validationApiMethodType
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  }

  login = async (values: any) => {
    const header = {
      "Content-Type": configJSON.validationApiContentType,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiLogin = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.loginEndPoint
    );
    const httpBody = {
      data: {
        attributes: {
          email: values.email,
          password: values.password,
        },
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
      configJSON.loginAPiMethod
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };
  // Customizable Area End
}
