import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../../framework/src/RunEngine";
import { HISTORY } from "../../../../../components/src/comman";
import { message as MESSAGE } from "antd";
import { BusinessPackageData } from "../../BusinessPackageData";
import { FrequencyDataList } from "../../FrequencyDataList";

export const configJSON = require("../config");

export interface Props {
  id: string;
  history: any;
  location: any;
  orderSummaryData: any;
  finalTotalImpact: any;
  handleGetOrderSummaryData: any;
  EmployeeData: any;
  fetchCustomTreeno: any;
  fetchCallBackOrderSummary: any;
  urbonSmoothScrollForMobileId:any
}

interface S {
  selectedPackage: any;
  selectedFrequency: string;
  orderName: string;
  comments: string;
  name_on_certificate: string;
  orderSummaryDetails: any;
  finalTotal: any;
  gstValue: any;
  carbonPerTonValue:any;
  NoOfPlants: string;
  minPlantError: any;
  plantRequiredError: any;
  NoOfPlantValidation: boolean;
  selectFrequencyPackage: string;
  setLatestOrderSummaryData: any;
  customAmount: any;
  customImpact: any;
  is_amount: boolean;
  is_custom_impact: any;
  giftCardName: string;
  is_custom_amount: any;
}

interface SS {
  id: any;
}

export default class OrderSummaryController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiGetSubscriptionOrderSummery: string = "";
  apiBusinessAddToCart: string = "";
  apiGetOnetimeOrderSummary: string = "";
  apiSelectnoTrees: string = "";
  apiGetGstValue: any;
  apiCarbonPerTonValue:any;
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

  getEmptyState = () => ({
    selectedPackage:
      window.location.pathname === "/business/offset-employee" ||
      window.location.pathname === "/business/subscription-employee"
        ? "5"
        : "",
    selectedFrequency: "",
    orderName: "",
    comments: "",
    name_on_certificate: "",
    orderSummaryDetails: {},
    finalTotal: "",
    NoOfPlants: "",
    minPlantError: null,
    plantRequiredError: false,
    NoOfPlantValidation: false,
    selectFrequencyPackage: "",
    setLatestOrderSummaryData: "",
    customAmount: "",
    customImpact: "",
    is_amount: false,
    giftCardName: "",
    is_custom_impact: null,
    is_custom_amount: null,
    gstValue: 0,
    carbonPerTonValue:1
  });

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
      if (apiRequestCallId === this.apiGetGstValue) {
        this.setState({
          gstValue: responseJson?.data ? responseJson?.data[0]?.gst : 0,
        });
      }
      if (apiRequestCallId === this. apiCarbonPerTonValue) {
        this.setState({
         carbonPerTonValue:responseJson?.cost_of_one_ton_co2
        });
      }
     
      if (apiRequestCallId === this.apiGetSubscriptionOrderSummery) {
        if (responseJson != null) {
          if (responseJson) {
            this.setState({
              orderSummaryDetails: responseJson,
              finalTotal: responseJson.total,
            });
            if (
              responseJson.custom_amount !== "" ||
              responseJson.custom_impact !== ""
            ) {
              const is_frequency =
                this.state.selectedFrequency == "3" ||
                this.state.selectedFrequency == "6" ||
                this.state.selectedFrequency == "12";

              this.setState({
                customAmount: is_frequency
                  ? this.state.customAmount
                  : responseJson.custom_amount,
                customImpact: is_frequency
                  ? this.state.customImpact
                  : responseJson.custom_impact,
              });
            }
          } else {
            this.parseApiErrorResponse(responseJson);
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiBusinessAddToCart) {
        if (responseJson != null && responseJson.data != null) {
          MESSAGE.success("Product successfully added to your cart.", 3);
          localStorage.setItem("project_id",JSON.stringify(responseJson.data.id))
          setTimeout(() => {
            HISTORY.push("/business/AddtoCard");
          }, 200);
        } else {
          MESSAGE.error("Product Not Added", 5);
        }
      } else if (apiRequestCallId === this.apiSelectnoTrees) {
        if (responseJson != null) {
          this.setState({
            NoOfPlantValidation: false,
          });
          this.props.handleGetOrderSummaryData(responseJson);
          // this.setState({
          //   orderSummaryDetails: responseJson,
          // });
        }
      } else if (apiRequestCallId === this.apiGetOnetimeOrderSummary) {
        if (responseJson != null) {
          if (responseJson) {
            this.props.fetchCallBackOrderSummary(responseJson);
            this.setState({
              orderSummaryDetails: responseJson,
            });
          }
          if (
            this.state.customAmount !== "" ||
            this.state.customImpact !== ""
          ) {
            this.setState({
              customAmount: responseJson.total,
              customImpact: responseJson.total_impact,
            });
          }
        }
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    this.GetCarbonPerTonValue()
    this.GetGstData();
    
  }

  async componentDidUpdate() {
    if (
      window.location.pathname === "/business/subscription-employee" ||
      window.location.pathname === "/business/subscription-flight" ||
      window.location.pathname === "/business/subscription-car"
    ) {
      if (this.state.selectFrequencyPackage !== this.props.finalTotalImpact) {
        this.setState({
          selectFrequencyPackage: this.props.finalTotalImpact,
        });
        setTimeout(() => {
          this.handleGetTotalData();
        }, 200);
      }
    }
    if (window.location.pathname === "/business/offset-employee") {
      if (this.state.selectFrequencyPackage !== this.props.finalTotalImpact) {
        this.setState({
          selectFrequencyPackage: this.props.finalTotalImpact,
        });
        setTimeout(() => {
          this.updatePackageOrderSummary();
        }, 200);
      }
    }

    if (this.state.setLatestOrderSummaryData !== this.props.orderSummaryData) {
      this.setState({
        setLatestOrderSummaryData: this.props.orderSummaryData,
        orderSummaryDetails: this.props.orderSummaryData,
        customAmount: this.props?.orderSummaryData?.total,
        customImpact: this.props?.orderSummaryData?.total_impact,
      });
    }
  }

  handleFinish = (values: any) => {
    console.log("ORDER--", values);
  };

  handleInputOnchage = (e: any, check: string) => {
    if (check === "orderName") {
      this.setState(
        {
          orderName: e.target.value,
        },
        () => this.updatePackageOrderSummary()
      );
    } else if (check === "comments") {
      this.setState({
        comments: e.target.value,
      });
    } else if (check === "name_on_certificate") {
      this.setState({
        name_on_certificate: e.target.value,
      });
    }
  };

  PackageFrequecyOnChange(check: string, value: any) {
    if (check === "package") {
      this.setState(
        {
          selectedPackage: value,
        },
        () => this.updatePackageOrderSummary()
      );
      if (value !== "5") {
        this.setState({
          customAmount: "",
          customImpact: "",
          is_amount: false,
        });
      }
    } else {
      this.setState({
        selectedFrequency: value,
      });
    }
      if (
        window.location.pathname === "/business/subscription-employee" ||
        window.location.pathname === "/business/subscription-flight" ||
        window.location.pathname === "/business/subscription-car"
      ) {
        setTimeout(() => {
          this.handleGetTotalData();
        }, 500);
      }
    }
  
  CustomeAmountImpactInputOnchange = (e: any) => {
    const { name, value, maxLength } = e.target;
    if (name === "customAmount") {
      this.setState({
        customAmount: value.slice(0, maxLength),
        is_amount: true,
      });
      localStorage.setItem(
        "is_custom_data",
        JSON.stringify({
          is_custom_impact: false,
          is_custom_amount: true,
        })
      );
    } else {
      this.setState({
        customImpact: value.slice(0, maxLength),
        is_amount: false,
      });
      localStorage.setItem(
        "is_custom_data",
        JSON.stringify({
          is_custom_impact: true,
          is_custom_amount: false,
        })
      );
    }
    if (window.location.pathname === "/business/subscription-employee") {
      setTimeout(() => {
        this.handleGetTotalData();
      }, 500);
    } else {
      setTimeout(() => {
        this.updatePackageOrderSummary();
      }, 500);
    }
  };
  updatePackageOrderSummary = async () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    const { EmployeeData } = this.props;
    const { orderName } = this.state;

    this.apiGetOnetimeOrderSummary = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getEmployeeOrderSummaryAPIEndPoint +
        `?no_of_employee=${EmployeeData.no_of_employee}&total_impact=${
          EmployeeData.total_impact
        }&total=${EmployeeData.total}&package=${
          this.state.selectedPackage === ""
            ? BusinessPackageData[0]?.Id
            : this.state.selectedPackage
        }&order_name=${orderName}&custom_amount=${
          this.state.customAmount
        }&custom_impact=${this.state.customImpact}&is_amount=${
          this.state.is_amount
        }`
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
  PlantInputOnchange = (e: any) => {
    const { value, maxLength } = e.target;
    if (value === ""){
      this.setState({
        plantRequiredError: true,
      })
    }
    if (value > 0 && value < 50) {
      this.setState({
        minPlantError: true,
        plantRequiredError: false,
        NoOfPlants: value.slice(0, maxLength),
      });
    } else {
      this.setState({
        NoOfPlants: value.slice(0, maxLength),
        minPlantError: null,
      });
      if (String(value).length <= maxLength) {
        this.handleGetSelectNoTrees(value.slice(0, maxLength));
        this.props.fetchCustomTreeno(value.slice(0, maxLength));
      }
    }
  };

  handleGetSelectNoTrees = async (SelectedNo: any) => {
    if (Number(SelectedNo) >= 50 || SelectedNo === "") {
      const token = localStorage.getItem("token") || "";
      const header = {
        "Content-Type": configJSON.ApiContentType,
        token,
      };
      const requestMessage = new Message(
        getName(MessageEnum.RestAPIRequestMessage)
      );
      this.apiSelectnoTrees = requestMessage.messageId;

      requestMessage.addData(
        getName(MessageEnum.RestAPIResponceEndPointMessage),
        this.props.history.activeTabKey === "1"
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
        configJSON.apiGetMethod
      );
      runEngine.sendMessage(requestMessage.id, requestMessage);
    } else {
      this.setState({
        NoOfPlantValidation: true,
      });
    }
  };

  handleGetTotalData = async () => {
    const token = localStorage.getItem("token") || "";
    const location = window.location.pathname;
    const { finalTotalImpact } = this.props;
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token,
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetSubscriptionOrderSummery = requestMessage.messageId;

    /* ----Subscrition Employee, Flight and Car---- */
    var Subscrition_params = `total_impact=${finalTotalImpact}&frequency=${
      this.state.selectedFrequency === ""
        ? FrequencyDataList[0]?.Id
        : this.state.selectedFrequency
    }&package=${
      this.state.selectedPackage === ""
        ? BusinessPackageData[0]?.Id
        : this.state.selectedPackage
    }&custom_amount=${
      !this.state.customAmount
        ? this.props.orderSummaryData?.custom_amount
        : this.state.customAmount
    }&custom_impact=${this.state.customImpact}&is_amount=${
      this.state.is_amount
    }`;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      location === "/business/subscription-employee"
        ? `${configJSON.getSubscriptionEmployeeApiEndPoint}?${Subscrition_params}`
        : location === "/business/subscription-flight"
        ? `${configJSON.getSubscriptionFlightApiEndPoint}?${Subscrition_params}`
        : location === "/business/subscription-car"
        ? `${configJSON.getSubscriptionCarApiEndPoint}?${Subscrition_params}`
        : null
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

  GiftCardInputChange = (e: any, check: string) => {
    if (check === "giftcard") {
      this.setState({
        giftCardName: e.target.value,
      });
    }
  };

  ///Offset Add to Cart
  AddToCartData = () => {
    const {
      orderSummaryDetails,
      orderName,
      comments,
      name_on_certificate,
      selectedPackage,
      selectedFrequency,
      finalTotal,
    } = this.state;
    const { orderSummaryData } = this.props;
      const location = window.location.pathname;
      const Token = localStorage.getItem("token") || "";
      let currency_conversion = localStorage.getItem("currency_conversion");
      let currency_conversion_response = currency_conversion
        ? JSON.parse(currency_conversion)
        : null;
      let is_custom_data = localStorage.getItem("is_custom_data");
      let is_custom_data_response = is_custom_data
        ? JSON.parse(is_custom_data)
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
      var httpBody = {};
      var tempArray = [];
      location === "/business/offset-employee"
        ? (httpBody = {
            is_subscription:false,
            product_name: orderSummaryData.product_name,
            offsetable_type: orderSummaryData.offsetable_type,
            no_of_employee: orderSummaryData.no_of_employee,
            total_impact: is_custom_data_response?.is_custom_amount
              ? (orderSummaryDetails?.frequency_total_impact ||
                  orderSummaryDetails?.total_impact) /
                currency_conversion_response?.currency_rate
              : orderSummaryDetails.total_impact ||
                orderSummaryData.total_impact,

            order_name: orderName,
            name_on_certificate: name_on_certificate,
            comment: comments,
            country: currency_conversion_response?.countr_name,
            currency_code: currency_conversion_response?.currency_code,
            currency_symbol: currency_conversion_response?.currency_symbol,
            currency_rate: currency_conversion_response?.currency_rate,
            total: is_custom_data_response?.is_custom_amount
              ? orderSummaryDetails?.total || orderSummaryData?.total
              : (orderSummaryDetails?.total || orderSummaryData?.total) *
                currency_conversion_response?.currency_rate,
          })
        : location === "/business/offset-flight" ||
          location === "/business/offset-flight-by-distance"
        ? (tempArray.push(orderSummaryData),
          (httpBody = {
            is_subscription:false,
            flight_types:
              location === "/business/offset-flight"
                ? tempArray
                : orderSummaryData.flight_types,
            offsetable_type: orderSummaryData.offsetable_type,

            total_impact:
              orderSummaryDetails.total_impact || orderSummaryData.total_impact,
            order_name: orderName,
            name_on_certificate: name_on_certificate,
            comment: comments,
            country: currency_conversion_response?.countr_name,
            currency_code: currency_conversion_response?.currency_code,
            currency_symbol: currency_conversion_response?.currency_symbol,
            currency_rate: currency_conversion_response?.currency_rate,
            total:
              orderSummaryData?.total *
              currency_conversion_response?.currency_rate,
          }))
        : location === "/business/offset-car"
        ? (httpBody = {
          is_subscription:false,
            car_types: orderSummaryData.car_types,
            offsetable_type: orderSummaryData.offsetable_type,
            total_impact:
              orderSummaryDetails.total_impact || orderSummaryData.total_impact,
            order_name: orderName,
            name_on_certificate: name_on_certificate,
            comment: comments,
            country: currency_conversion_response?.countr_name,
            currency_code: currency_conversion_response?.currency_code,
            currency_symbol: currency_conversion_response?.currency_symbol,
            currency_rate: currency_conversion_response?.currency_rate,
            total:
              orderSummaryData?.total *
              currency_conversion_response.currency_rate,
          })
        : location === "/business/offset-event"
        ? (httpBody = {
          is_subscription:false,
            event_types: orderSummaryData.event_types,
            offsetable_type: orderSummaryData.offsetable_type,
            total_impact:
              orderSummaryDetails.total_impact || orderSummaryData.total_impact,

            order_name: orderName,
            name_on_certificate: name_on_certificate,
            comment: comments,
            country: currency_conversion_response?.countr_name,
            currency_code: currency_conversion_response.currency_code,
            currency_symbol: currency_conversion_response?.currency_symbol,
            currency_rate: currency_conversion_response?.currency_rate,
            total:
              orderSummaryData?.total *
              currency_conversion_response?.currency_rate,
          })
        : location === "/business/subscription-employee"
        ? (httpBody = {
          is_subscription:true,
            employee_types: orderSummaryData.employee_types,
            offsetable_type: orderSummaryData.offsetable_type,
            total_impact: is_custom_data_response?.is_custom_amount
              ? orderSummaryDetails?.frequency_total_impact /
                currency_conversion_response?.currency_rate
              : orderSummaryDetails?.frequency_total_impact ||
                orderSummaryDetails?.frequency_total_impact,
            order_name: orderName,
            package:
              selectedPackage === ""
                ? BusinessPackageData[0]?.Id
                : selectedPackage,
            frequency:
              selectedFrequency === ""
                ? FrequencyDataList[0]?.Id
                : selectedFrequency,
            name_on_certificate: name_on_certificate,
            comment: comments,
            country: currency_conversion_response?.countr_name,
            currency_code: currency_conversion_response.currency_code,
            currency_symbol: currency_conversion_response?.currency_symbol,
            currency_rate: currency_conversion_response?.currency_rate,
            total: is_custom_data_response?.is_custom_amount
              ? finalTotal
              : finalTotal * currency_conversion_response?.currency_rate,
          })
        : location === "/business/subscription-flight"
        ? (httpBody = {
            is_subscription:true,
            flight_types: orderSummaryData?.flight_types,
            offsetable_type: orderSummaryData?.offsetable_type,
            total_impact:
              orderSummaryDetails?.frequency_total_impact ||
              orderSummaryDetails.total_impact ||
              orderSummaryData.total_impact,

            order_name: orderName,
            frequency:
              selectedFrequency === ""
                ? FrequencyDataList[0]?.Id
                : selectedFrequency,
            name_on_certificate: name_on_certificate,
            comment: comments,
            country: currency_conversion_response?.countr_name,
            currency_code: currency_conversion_response?.currency_code,
            currency_symbol: currency_conversion_response?.currency_symbol,
            currency_rate: currency_conversion_response?.currency_rate,
            total: finalTotal * currency_conversion_response?.currency_rate,
          })
        : location === "/business/subscription-car"
        ? (httpBody = {
          is_subscription:true,
          frequency:
          selectedFrequency === ""
            ? FrequencyDataList[0]?.Id
            : selectedFrequency,
            car_types: orderSummaryData.car_types,
            offsetable_type: orderSummaryData.offsetable_type,
            total_impact:
              orderSummaryDetails?.frequency_total_impact ||
              orderSummaryDetails.total_impact ||
              orderSummaryData.total_impact,
            order_name: orderName,
            name_on_certificate: name_on_certificate,
            comment: comments,
            country: currency_conversion_response?.countr_name,
            currency_code: currency_conversion_response?.currency_code,
            currency_symbol: currency_conversion_response?.currency_symbol,
            currency_rate: currency_conversion_response?.currency_rate,
            total: finalTotal * currency_conversion_response?.currency_rate,
          })
        : location === "/business/plant-tree"
        ? (httpBody = {
            total_impact:
              orderSummaryDetails.total_impact || orderSummaryData.total_impact,
            product_name: orderSummaryData?.product_name,
            offsetable_type: orderSummaryData?.offsetable_type,
            name_on_certificate: name_on_certificate,
            no_of_trees: Number(orderSummaryData?.no_of_trees),
            country: currency_conversion_response?.countr_name,
            currency_code: currency_conversion_response?.currency_code,
            currency_symbol: currency_conversion_response?.currency_symbol,
            currency_rate: currency_conversion_response?.currency_rate,
            total:
              orderSummaryData?.total *
              currency_conversion_response?.currency_rate,
          })
        : null;

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
  GetGstData = async () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetGstValue = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      "/account_block/get_gst"
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
  GetCarbonPerTonValue  = async () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiCarbonPerTonValue = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      '/bx_block_settings/settings/base_setting'
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