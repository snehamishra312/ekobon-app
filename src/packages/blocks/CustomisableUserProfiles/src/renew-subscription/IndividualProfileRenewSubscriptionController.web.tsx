import { IBlock } from "../../../../framework/src/IBlock";
import { Message } from "../../../../framework/src/Message";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";
export const configJSON = require("../../../dashboard/src/Business/config");
import { HISTORY } from "../../../../components/src/comman";
import { message as MESSAGE } from "antd";
import MySubscriptionTable from "../../../dashboard/src/IndvProject/MySubscriptionTable.web";

export interface Props {
  history: any;
  dataList:any;
  handleRenewChange:any
}

interface S {
  isModalVisible: boolean;
  apiBusinessAddToCart:any;
  costOfOneCO2:any;
  isShowModalRenew: boolean;
}

interface SS {
  id: any;
}

export default class IndividualProfileRenewSubscriptionController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiForgotPassword: string = "";
  apiBusinessAddToCart: string = "";
  apiGetCarbonPerTon:any;

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage),
    ];

    this.state = this.getEmptyState();

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async componentDidMount() {
    
    super.componentDidMount();
    this.GetCarbonValuePerTon()
    this.setState({
      isShowModalRenew: !this.state.isShowModalRenew,
    });
  }

  getEmptyState = () => ({
    isModalVisible: true,
    isShowModalRenew: false,
    apiBusinessAddToCart:"", 
    costOfOneCO2:1
  });

  individualLoginUrl = () => {
    this.props.history.push("/login");
  };

  handleBack = () => {
   this.props.handleRenewChange(false);
  };
  GetCarbonValuePerTon= async () => {
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
  handleAddToCartData = (data:any) => {
    const { offsetable_id, due_amount, frequency, id, offsetable_type, project_type, product_name, renewable_types } = data?.attributes
    const Token = localStorage.getItem("token") || "";
    let currency_conversion = localStorage.getItem("currency_conversion");
    let currency_conversion_response = currency_conversion
      ? JSON.parse(currency_conversion)
      : null;
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiBusinessAddToCart = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.BusinessOffsetAddToCartAPIEndPoint
    );
    var httpBody = {
      offsetable_id:offsetable_id,
      is_subscription: true,
      offsetable_type: offsetable_type,
      total_impact:due_amount/ (this.state.costOfOneCO2*currency_conversion_response?.currency_rate) ,
      frequency: frequency,
      country: currency_conversion_response?.countr_name,
      currency_code: currency_conversion_response.currency_code,
      currency_symbol: currency_conversion_response?.currency_symbol,
      currency_rate: currency_conversion_response?.currency_rate,
      total: due_amount,
      my_project_id: id,
      project_type: project_type,
      product_name: product_name,
      renewable_types: renewable_types,
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
      if(apiRequestCallId === this.apiBusinessAddToCart){
        if (responseJson != null && responseJson.data !== null) {
          MESSAGE.success("Product successfully added to your cart.", 3);
          if (window.location.pathname === "/individual/mysubscription") {
            setTimeout(() => {
            HISTORY.push("/individual/AddtoCard");
          }, 200);
        } else {
          setTimeout(() => {
            HISTORY.push("/business/AddtoCard");
          }, 200);
        }}
      }
    }
  }
}
