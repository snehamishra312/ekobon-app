import { IBlock } from "../../../../framework/src/IBlock";
import { Message } from "../../../../framework/src/Message";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";
import { HISTORY } from "../../../../components/src/comman";
import { message as MESSAGE } from "antd";
import { IndividualPackageData } from "../IndividualPackageData";
import { FrequencyDataList } from "../FrequencyDataList";
import {
  calculateTotalAmount,
  calculateTotalImpact,
} from "../../../../framework/src/Utilities";
import { values } from "lodash";

export const configJSON = require("../config");
export interface Props {
  id: string;
  history: any;
  location: any;
  orderSummaryData: any;
  handleGetOrderSummaryData: any;
  CallGiftCardOrdersummary: any;
  fetchCustomTreeno: any;
  urbonSmoothScrollForMobileId: any;
  defaultValue: any;
  handleOrderSummaryData: any;
  value: any;
  lifestyleCardData: any;
  onChange: any;
  giftSummaryData: any;
  giftAmount: any;
}

interface S {
  passengersCount: number;
  selectedCountry: any;
  selectedPackage: any;
  selectedFrequency: any;
  orderSummaryDetails: any;
  selectedNoPlant: any;
  NoOfPlants: string;
  minPlantError: any;
  plantRequiredError: any;
  NoOfPlantValidation: boolean;
  GiftCardPlantNo: string;
  certificateName: any;
  giftCode: string;
  giftCardName: string;
  giftCardAmount: any;
  giftCardEmail: any;
  giftCardFlightType: any;
  giftCustom_amount: string;
  loader: boolean;
  isValidCode: boolean;
  giftCodeObj: any;
  validGiftCode: any;
  validGiftCodeMessage: any;
  flightNo: string;
  lastOffsetValue: string;
  TransportTab: string;
  countryValidat: boolean;
  packageValidat: boolean;
  frequencyValidat: boolean;
  customAmount: any;
  customImpact: any;
  is_amount: boolean;
  is_custom_impact: any;
  is_custom_amount: any;
  gstValue: any;
  carbonPerTonValue: any;
  parseGlobalAndCountryOffset: any;
  currency_symbol: any;
  offsetable_type: any;
  total: any;
  total_impact: any;
  giftNoOfFlight: any;
  giftNoOfTree: any;
  gift_Cards_Id: any;
}

interface SS {
  id: any;
}
const UserDetails: any = localStorage.getItem("UserDetails");
export default class OrderSummaryController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiLifeStyeOrderSummery: string = "";
  apiSelectnoTrees: string = "";
  apiAddToCart: string = "";
  apiPostGiftCode: string = "";
  apiGetRemoveGiftCode: string = "";
  apiGetGstValue: any;
  apiCarbonPerTonValue: any;
  getProjectDistributionChartAPICallID: any;
  apiGiftCardAdd: any;
  apiGiftCardOrderSummary: any;
  orderSummaryDataId: any;
  apiCalculateNoOfTrees: any;

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
    giftNoOfTree: "",
    giftNoOfFlight: "",
    currency_symbol: "",
    offsetable_type: "",
    total: "",
    total_impact: "",
    parseGlobalAndCountryOffset: [],
    giftCardFlightType: "",
    passengersCount: 1,
    selectedCountry: JSON.parse(UserDetails)?.country_name,
    selectedPackage:
      window.location.pathname === "/individual/offset-onetime" ||
        window.location.pathname === "/individual/offset-subscription"
        ? "5"
        : "",
    selectedFrequency: "1",
    orderSummaryDetails: {},
    selectedNoPlant: this.props.history.selectNoTrees
      ? this.props.history.selectNoTrees
      : 5,
    NoOfPlants: "",
    minPlantError: null,
    plantRequiredError: false,
    NoOfPlantValidation: false,
    certificateName: "",
    giftCode: "",
    giftCardName: "",
    giftCardAmount: 0,
    giftCardEmail: "",
    GiftCardPlantNo: "",
    giftCustom_amount: "0",
    loader: true,
    isValidCode: false,
    giftCodeObj: {},
    validGiftCode: "",
    validGiftCodeMessage: "",
    flightNo: "",
    lastOffsetValue: "",
    TransportTab: "",
    countryValidat: false,
    packageValidat: false,
    frequencyValidat: false,
    customAmount: "",
    customImpact: "",
    is_amount: false,
    is_custom_impact: null,
    gstValue: 0,
    carbonPerTonValue: 1,
    is_custom_amount: null,
    gift_Cards_Id: "",
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
      if (apiRequestCallId === this.getProjectDistributionChartAPICallID) {
        if (responseJson !== null) {

          var ImpactData = responseJson.data.impact_offset_type;
          this.setState({ parseGlobalAndCountryOffset: ImpactData })
        }

      }
      if (apiRequestCallId === this.apiGetGstValue) {
        this.setState({
          gstValue: responseJson?.data ? responseJson?.data[0]?.gst : 0,
        });
        if (responseJson != null) {
          this.orderSummary()
        }
      }
      if (apiRequestCallId === this.orderSummaryDataId) {
        if (responseJson != null) {
          console.log({ responseJson }, ">>>>>>>>>>>>>>>>>>>>>")
        }
      }
      if (apiRequestCallId === this.apiCarbonPerTonValue) {
        this.setState({
          carbonPerTonValue: responseJson?.cost_of_one_ton_co2,
        });
      }

      if (apiRequestCallId === this.apiLifeStyeOrderSummery) {
        if (responseJson != null) {
          if (responseJson) {
            this.setState({
              orderSummaryDetails: responseJson,
              countryValidat: false,
              packageValidat: false,
              frequencyValidat: false,
            });
            if (
              this.state.customAmount !== "" ||
              this.state.customImpact !== ""
            ) {
              const is_frequency =
                this.state.selectedFrequency == "3" ||
                this.state.selectedFrequency == "6" ||
                this.state.selectedFrequency == "12";
              this.setState({
                customAmount: is_frequency
                  ? this.state.customAmount
                  : responseJson.total,
                customImpact: is_frequency
                  ? this.state.customImpact
                  : Number(responseJson.total_impact),
              });
            }
            setTimeout(() => {
              this.setState({
                loader: false,
              });
            }, 100);
          } else {
            this.setState({
              loader: false,
            });
            this.parseApiErrorResponse(responseJson);
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
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
      } else if (apiRequestCallId === this.apiAddToCart) {
        if (responseJson != null && responseJson.data != null) {
          MESSAGE.success("Product successfully added to your cart.", 3);
          localStorage.setItem("project_id", JSON.stringify(responseJson.data.id))
          setTimeout(() => {
            HISTORY.push("/individual/AddtoCard");
          }, 200);
        } else {
          MESSAGE.error("Product Not Added", 5);
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else if (apiRequestCallId === this.apiGiftCardAdd) {
        if (responseJson != null) {
          console.log({ responseJson })
          localStorage.setItem("GiftCardId", JSON.stringify(responseJson?.gift_card?.id))
          this.AddToCardOrderSummary(responseJson?.gift_card?.id)
        }
      }
      else if (apiRequestCallId == this.apiGiftCardOrderSummary) {
        if (responseJson != null) {
          this.setState({
            currency_symbol: responseJson.currency_symbol,
            offsetable_type: responseJson.offsetable_type,
            total: responseJson.total,
            total_impact: responseJson.total_impact,
          })
          this.AddToCartData();
        }
      }
      else if (apiRequestCallId == this.apiCalculateNoOfTrees) {
        if (responseJson != null) {
          this.setState({
            currency_symbol: responseJson.currency_symbol,
            offsetable_type: responseJson.offsetable_type,
            total: responseJson.total,
            total_impact: responseJson.total_impact,
          })
          console.log({ responseJson }, "================>>>>>>>>>>>>>>>>>>>>>")
        }
      }

      else if (apiRequestCallId === this.apiPostGiftCode) {
        if (responseJson != null) {
          MESSAGE.success(responseJson.message, 3);
          const gift = 'Gift'
          this.GetGstData(gift);
          const data = "giftItemAdded"
          localStorage.setItem("giftitem", JSON.stringify(data))
          if (responseJson.message == "congrats you reedem the coupon code") {
            setTimeout(() => {
              window.location.pathname === 'individual/AddtoCard' || "/individual/AddtoCard/payment" ?
                window.location.href = "/individual-payment/success-alert" :
                window.location.href = "/business-payment/success-alert";
            }, 3000);
          }
        }
        else {
          MESSAGE.success("Gift code Not Applied!", 3);
          this.setState({
            isValidCode: false,
            giftCodeObj: {},
            validGiftCode: "error",
            validGiftCodeMessage: "Invalid Code",
          });
        }
      } else if (apiRequestCallId === this.apiGetRemoveGiftCode) {
        if (responseJson != null && responseJson.data != null) {
          this.setState({
            isValidCode: false,
            giftCode: "",
            giftCodeObj: {},
          });
          MESSAGE.success("Gift code Removed.", 3);
        } else {
          this.setState({
            isValidCode: false,
            giftCodeObj: {},
          });
        }
      }
    }
    // Customizable Area End
  }
  async componentDidMount() {
    const gift = 'Value'
    this.GetCarbonPerTonValue();
    this.GetGstData(gift);
    this.getProjectDistributionChartData();
  }
  async componentDidUpdate() {

    if (
      this.props.orderSummaryData !== undefined &&
      this.props.orderSummaryData !== null
    ) {
      if (window.location.pathname === "/individual/offset-onetime-transport") {
        this.setState({
          orderSummaryDetails: {},
        });
        if (
          this.state.TransportTab !== this.props.history.selectedTransportTab
        ) {
          this.setState({
            TransportTab: this.props.history.selectedTransportTab,
            certificateName: null,
          });
        }
      } else {
        this.setState({
          orderSummaryDetails: this.props.orderSummaryData,
        });
      }
    }
    if (
      this.state.lastOffsetValue !== this.props.history.lifeStyleCardselected
    ) {
      this.setState({
        lastOffsetValue: this.props.history.lifeStyleCardselected,
        // selectedPackage: null,
        certificateName: null,
        selectedFrequency: "1",
        orderSummaryDetails: {},
        countryValidat: false,
        packageValidat: false,
        frequencyValidat: false,
      });
    }

    if (this.props.history.selectNoTrees) {
      this.handleSelectPlantNoChange(this.props.history.selectNoTrees);
    }

    if (
      this.state.TransportTab !== this.props.history.lifeStyleCardselected &&
      this.state.lastOffsetValue !== this.props.history.lifeStyleCardId
    ) {
      this.setState({
        TransportTab: this.props.history.lifeStyleCardselected,
        lastOffsetValue: this.props.history.lifeStyleCardId,
      });
      if (this.props.history.lifeStyleCardId) { this.handleSubscritionGetTotalData(); }
    }
  }
  async componentWillUpdate() { }

  handleFinish = (values: any) => {
    console.log("ORDER--", values);
  };

  GiftCardInputChange = (e: any, check: string) => {
    localStorage.setItem("gifted_offset", JSON.stringify(this?.props?.orderSummaryData))
    if (check === "giftcard") {
      this.setState({
        giftCardName: e.target.value,
      });
    } else if (check === "giftCardAmount") {
      const { value, maxLength } = e.target;
      this.setState({
        giftCardAmount: value,
      })
      this.props.handleOrderSummaryData(value);
    }
    else if (check === "giftNoOfFlight") {
      const { value, maxLength } = e.target;
      this.setState({
        giftNoOfFlight: value,
      })
      localStorage.setItem("no_of_trees", JSON.stringify(value))
      this.props.handleOrderSummaryData(this.state?.giftCardFlightType);
    }
    else if (check === "giftCardEmail") {
      this.setState({
        giftCardEmail: e.target.value,
      });
    }
    else if (check === "giftNoOfTree") {
      this.setState({
        giftNoOfTree: e.target.value,
      });
      this.props.handleOrderSummaryData(e.target.value);
      localStorage.setItem("no_of_trees", JSON.stringify(e.target.value))
    }
    else if (check == "flightselect") {
      this.setState({
        giftCardFlightType: e,
      })
      this.props.handleOrderSummaryData(e);
    }
    else if (this.state.giftCardAmount && this.state.giftCardEmail && this.state.giftCardName) {
      () => this.props.CallGiftCardOrdersummary(this.state.giftCustom_amount)
    }
  };

  FlightNoInputChange = (e: any) => {
    this.setState(
      {
        flightNo: e.target.value,
      },
      () => this.handleSubscritionGetTotalData()
    );
  };

  handleCountryChange = (value: any) => {
    this.setState({
      selectedCountry: value,
      countryValidat: false,
    });
    if (window.location.pathname === "/individual/offset-subscription") {
      if (this.props.history.topicName) {
        setTimeout(() => {
          this.handleSubscritionGetTotalData();
        }, 500);
      } else {
        MESSAGE.error("Please Select Offset", 4);
      }
    } else {
      setTimeout(() => {
        this.handleSubscritionGetTotalData();
      }, 500);
    }
  };

  handleSelectPlantNoChange = (value: any) => {
    this.setState({
      selectedNoPlant: value,
    });
  };

  PlantInputOnchange = (e: any) => {
    const { value, maxLength } = e.target;
    if (value === "") {
      this.setState({
        plantRequiredError: true,
        NoOfPlants: value.slice(0, maxLength)
      })
    }
    else {
      this.setState({
        NoOfPlants: value.slice(0, maxLength),
        minPlantError: null,
        plantRequiredError: false,
      });
      if (String(value).length <= maxLength) {
        this.handleGetSelectNoTrees(value.slice(0, maxLength));
        this.props.fetchCustomTreeno(value.slice(0, maxLength));
      }
    }
  };

  CertificateInputChange = (e: any) => {
    this.setState({
      certificateName: e.target.value,
    });
  };

  PackageFrequecyOnChange(check: string, value: any) {
    if (check === "package") {
      this.setState({
        selectedPackage: value,
        packageValidat: false,
      });
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
        frequencyValidat: false,
      });
    }
    if (window.location.pathname === "/individual/offset-subscription") {
      if (this.props.history.topicName) {
        setTimeout(() => {
          this.handleSubscritionGetTotalData();
        }, 500);
      } else {
        MESSAGE.error("Please Select Offset", 4);
      }
    } else {
      setTimeout(() => {
        this.handleSubscritionGetTotalData();
      }, 500);
    }
  }
  CustomeAmountImpactInputOnchange = (e: any) => {
    const { name, value, maxLength } = e.target;
    if (name === "customAmount") {
      this.setState(
        {
          customAmount: value.slice(0, maxLength),
          is_amount: true,
          is_custom_impact: false,
          is_custom_amount: true,
        },
        () => this.handleSubscritionGetTotalData()
      );
      localStorage.setItem(
        "is_custom_data",
        JSON.stringify({
          is_custom_impact: false,
          is_custom_amount: true,
        })
      );
    } else {
      this.setState(
        {
          customImpact: value.slice(0, maxLength),
          is_amount: false,
        },
        () => this.handleSubscritionGetTotalData()
      );
      localStorage.setItem(
        "is_custom_data",
        JSON.stringify({
          is_custom_impact: true,
          is_custom_amount: false,
        })
      );
    }
  };

  handlePassengerCount = (value: any) => {
    if (value === "plush") {
      if (this.state.passengersCount < 10) {
        this.setState(
          {
            passengersCount: this.state.passengersCount + 1,
          },
          () => this.handleSubscritionGetTotalData()
        );
      }
    } else {
      if (this.state.passengersCount > 1) {
        this.setState(
          {
            passengersCount: this.state.passengersCount - 1,
          },
          () => this.handleSubscritionGetTotalData()
        );
      }
    }
  };

  orderCalculateSummary = (SelectedNo: any) => {
    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiCalculateNoOfTrees = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.AgroforestryOrderSummaryAPIEndPoint +
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
  }

  orderSummary = () => {
    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.orderSummaryDataId = requestMessage.messageId;
    // ?currency_code=${currency_conversion_response?.currency_code}&my_project_id=${item?.id}&is_activated=true
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.individualOrderContinueEndPointUrl + `?currency_code=INR&my_project_id=&is_activated=true`
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

  handleSubscritionGetTotalData = async () => {

    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiLifeStyeOrderSummery = requestMessage.messageId;

    var Sub_OffsetId = this.props.history?.lifeStyleCardId?.slice(
      0,
      this.props.history?.lifeStyleCardId?.indexOf("_")
    );

    /* ----Life Style---- */
    var Sub_lifeStyle = `individual_lifestyle_subscription_offset_id=${Sub_OffsetId}&country=${this.state.selectedCountry
      }&package=${this.state.selectedPackage === "" || this.state.selectedPackage === null
        ? IndividualPackageData[0]?.Id
        : this.state.selectedPackage
      }&frequency=${this.state.selectedFrequency === null
        ? FrequencyDataList[0]?.Id
        : this.state.selectedFrequency
      }&member=${this.props.history.lifeStyleCardselected === "Family Offset"
        ? this.state.passengersCount
        : ""
      }&custom_amount=${this.state.customAmount}&custom_impact=${this.state.customImpact
      }&is_amount=${this.state.is_amount}`;

    /* ----Vehical---- */
    var Sub_Vehical = `individual_vehicle_subscription_offset_id=${Sub_OffsetId}&country=${this.state.selectedCountry
      }&frequency=${this.state.selectedFrequency === null
        ? FrequencyDataList[0]?.Id
        : this.state.selectedFrequency
      }&package=${1
      }`;

    /* ----Accomodation---- */
    var Sub_Accomodation = `individual_accomodation_subscription_offset_id=${Sub_OffsetId}&frequency=${this.state.selectedFrequency === null
      ? FrequencyDataList[0]?.Id
      : this.state.selectedFrequency
      }`;

    /* ----Air Travel---- */
    var Sub_AirTravel = `individual_airtravel_subscription_offset_id=${Sub_OffsetId}&country=${this.state.selectedCountry
      }&flight=${this.state.flightNo}&frequency=${this.state.selectedFrequency === null
        ? FrequencyDataList[0]?.Id
        : this.state.selectedFrequency
      }`;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      window.location.pathname === "/individual/offset-subscription"
        ? this.props.history.topicName === "Lifestyle"
          ? `${configJSON.getLifeStyleSubscriptionEndPointUrl}?${Sub_lifeStyle}`
          : this.props.history.topicName === "Vehicle"
            ? `${configJSON.getVehicalSubscriptionEndPointUrl}?${Sub_Vehical}`
            : this.props.history.topicName === "Accomodation"
              ? `${configJSON.getAccomodationSubscriptionEndPointUrl}?${Sub_Accomodation}`
              : this.props.history.topicName === "Flight"
                ? `${configJSON.getAirTravelSubscriptionEndPointUrl}?${Sub_AirTravel}`
                : null
        : /*--------For One Time Condition--------*/
        `${configJSON.OffsetLifeStyleOrderSummery
        }?individual_lifestyle_one_time_offset_id=${this.props.history.lifeStyleCardId
        }&country=${this.state.selectedCountry}&package=${this.state.selectedPackage === "" ||
          this.state.selectedPackage === null
          ? IndividualPackageData[0]?.Id
          : this.state.selectedPackage
        }&member=${this.props.history.lifeStyleCardselected === "Family Offset"
          ? this.state.passengersCount
          : ""
        }&custom_amount=${this.state.customAmount}&custom_impact=${this.state.customImpact
        }&is_amount=${this.state.is_amount}`
    );
    console.log("handleSubscritionGetTotalData... ")
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
    if (SelectedNo !== "") {
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
        configJSON.GetApiMethodType
      );
      runEngine.sendMessage(requestMessage.id, requestMessage);
    } else {
      this.setState({
        NoOfPlantValidation: true,
      });
    }
  };
  handleCheckOffsetValidation = (val: any, isFlight = false) => {
    if (window.location.pathname === "/individual/offset-onetime") {
      if (
        this.state.selectedCountry === null ||
        this.state.selectedCountry === ""
      ) {
        this.setState({
          countryValidat: true,
        });
        return false;
      }
      this.AddToCartData();
    } else if (window.location.pathname === "/individual/offset-subscription") {
      if (this.props.history.topicName === "Accomodation") {
        if (
          this.state.selectedFrequency === null ||
          this.state.selectedFrequency === ""
        ) {
          this.setState({
            frequencyValidat: true,
          });
          return false;
        }
      } else {
        if (
          this.state.selectedCountry === null ||
          this.state.selectedCountry === ""
        ) {
          this.setState({
            countryValidat: true,
          });
          return false;
        }
        if (
          this.state.selectedFrequency === null ||
          this.state.selectedFrequency === ""
        ) {
          this.setState({
            frequencyValidat: true,
          });
          return false;
        }
      }

      if (
        isFlight &&
        (this.state.flightNo === null || this.state.flightNo === "")
      ) {
        return false;
      }
      this.AddToCartData();
    } else if (window.location.pathname === "/individual/giftCard") {
      if (this.state.giftCardName && this.state.giftCardAmount && this.state.giftCardEmail) {
        this.AddToGiftCartData(val);
        localStorage.setItem("gifted_mail", JSON.stringify(this.state.giftCardEmail))
      }
      else if (this.state.giftCardName && this.state.giftNoOfFlight && this.state.giftCardEmail) {
        this.AddToGiftCartData(val);
        localStorage.setItem("gifted_mail", JSON.stringify(this.state.giftCardEmail))
      }
      else if (this.state.giftCardName && this.state.giftNoOfTree && this.state.giftCardEmail) {
        this.AddToGiftCartData(val);
        localStorage.setItem("gifted_mail", JSON.stringify(this.state.giftCardEmail))
      }
    }
    else {
      localStorage.setItem("gifted_mail", JSON.stringify(""));
      this.AddToCartData();
    }
  };

  AddToCardOrderSummary = (id: any) => {
    console.log({ id });
    this.setState({
      gift_Cards_Id: id
    })
    const token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGiftCardOrderSummary = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.giftCardOrderSummaryEndPointUrl +
      `?gift_card_id=${id}`
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
  }

  ///Add to Cart
  AddToGiftCartData = (val: any) => {
    const location = window.location.pathname;
    const curency = localStorage.getItem("currency_conversion");
    const userDetail = localStorage.getItem("UserDetails");
    const UserDetails = userDetail ? JSON.parse(userDetail) : "";
    const currency = curency ? JSON.parse(curency) : "";
    const gift_amount = currency?.currency_rate * this.props?.giftAmount;
    const flightTotal = this.state.giftNoOfFlight ? calculateTotalAmount(this.props.giftSummaryData?.total * this.state.giftNoOfFlight)
      : calculateTotalAmount(this.props.giftSummaryData?.total * 1)
    if (location === "/individual/giftCard") {
      const Token = localStorage.getItem("token") || "";
      const header = {
        "Content-Type": configJSON.ApiContentType,
        // token: Token,
      };
      const requestMessage = new Message(
        getName(MessageEnum.RestAPIRequestMessage)
      );
      this.apiGiftCardAdd = requestMessage.messageId;

      requestMessage.addData(
        getName(MessageEnum.RestAPIResponceEndPointMessage),
        configJSON.individualAddToGiftCardEndPointUrl
      );

      const httpBody = val == "Generic Climate Offsetting" ? {
        name: this.state?.giftCardName,
        email: this.state?.giftCardEmail,
        amount: this.state?.giftCardAmount,
        category: this.props?.orderSummaryData,
        gifted_impact: this.props?.giftSummaryData?.total_impact,
        from: UserDetails.first_name,
      } : val == "Flight travel" ?
        {
          name: this.state?.giftCardName,
          email: this.state?.giftCardEmail,
          no_of_flight: this.state?.giftNoOfFlight,
          type: this.state?.giftCardFlightType,
          category: this.props?.orderSummaryData,
          amount: flightTotal,
          from: UserDetails.first_name,
          gifted_impact: this.state?.giftNoOfFlight ? this.props?.giftSummaryData?.total_impact * this.state?.giftNoOfFlight : this.props?.giftSummaryData?.total_impact * 1
        } : val == "Plant trees" ?
          {
            name: this.state?.giftCardName,
            email: this.state?.giftCardEmail,
            no_of_trees: this.state?.giftNoOfTree,
            category: this.props?.orderSummaryData,
            amount: gift_amount,
            gifted_impact: this.props?.giftSummaryData?.total_impact,
            from: UserDetails.first_name
          }
          : "";

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
  }

  AddToCartData = () => {
    var {
      orderSummaryDetails,
      certificateName,
      giftCardName,
      giftCustom_amount,
      passengersCount,
    } = this.state;
    const userDetail = localStorage.getItem("UserDetails");
    const UserDetails = userDetail ? JSON.parse(userDetail) : "";

    let currency_conversion = localStorage.getItem("currency_conversion");
    let currency_conversion_response = currency_conversion
      ? JSON.parse(currency_conversion)
      : null;
    if (
      (orderSummaryDetails && orderSummaryDetails.total_impact !== undefined) ||
      this?.props?.orderSummaryData !== undefined
    ) {
      const location = window.location.pathname;
      const token = localStorage.getItem("token") || "";
      let is_custom_data = localStorage.getItem("is_custom_data");
      let is_custom_data_response = is_custom_data
        ? JSON.parse(is_custom_data)
        : null;
      const header = {
        "Content-Type": configJSON.validationApiContentType,
        token,
      };
      const requestMessage = new Message(
        getName(MessageEnum.RestAPIRequestMessage)
      );
      this.apiAddToCart = requestMessage.messageId;
      requestMessage.addData(
        getName(MessageEnum.RestAPIResponceEndPointMessage),
        configJSON.AddToCartEndPointUrl
      );
      if (location === "/individual/offset-subscription") {
        var Sub_OffsetId = this.props.history?.lifeStyleCardId?.slice(
          0,
          this.props.history?.lifeStyleCardId?.indexOf("_")
        );
      }
      var httpBody = {};

      location === "/individual/offset-onetime" ||
        location === "/individual/offset-onetime-transport"
        ? (httpBody = {
          offsetable_id:
            orderSummaryDetails?.offsetable_id ||
            this.props?.orderSummaryData?.offsetable_id,
          offsetable_type:
            orderSummaryDetails?.offsetable_type ||
            this.props?.orderSummaryData?.offsetable_type,
          member: passengersCount,
          total_impact: calculateTotalImpact(
            orderSummaryDetails?.total_impact ||
            this?.props.orderSummaryData?.total_impact
          ),
          country: currency_conversion_response?.countr_name,
          currency_code: currency_conversion_response?.currency_code,
          currency_symbol: currency_conversion_response?.currency_symbol,
          currency_rate: currency_conversion_response?.currency_rate,
          total: calculateTotalAmount(
            orderSummaryDetails?.total || this?.props.orderSummaryData?.total
          ),
          is_subscription: false,
          name_on_certificate: certificateName ? certificateName : "",
        })
        : location === "/individual/giftCard"
          ? (httpBody = {
            offsetable_id: 1,
            offsetable_type: this.state.offsetable_type,
            total_impact: this.state?.giftNoOfFlight != "" ? calculateTotalImpact(this.state?.giftNoOfFlight ?
              this.props?.giftSummaryData?.total_impact * this.state?.giftNoOfFlight : 1
            ) : calculateTotalImpact(this.props?.giftSummaryData?.total_impact),
            custom_amount: this.state.total,
            name_on_certificate: certificateName,
            name_on_gift_card: giftCardName,
            email_on_gift_card: this.state?.giftCardEmail,
            country: currency_conversion_response?.countr_name,
            currency_code: currency_conversion_response?.currency_code,
            currency_symbol: currency_conversion_response?.currency_symbol,
            currency_rate: currency_conversion_response?.currency_rate,
            total: this.state.total,
            giftcard_type: this.props?.orderSummaryData,
            gift_card_id: this.state.gift_Cards_Id,
            gift_card_to: UserDetails?.email,
          })
          : location === "/individual/plant-tree"
            ? (httpBody = {
              total_impact: orderSummaryDetails?.total_impact,
              product_name: orderSummaryDetails.product_name,
              offsetable_type: orderSummaryDetails.offsetable_type,
              name_on_certificate: certificateName,
              no_of_trees: Number(orderSummaryDetails.no_of_trees),

              country: currency_conversion_response?.countr_name,
              currency_code: currency_conversion_response?.currency_code,
              currency_symbol: currency_conversion_response?.currency_symbol,
              currency_rate: currency_conversion_response?.currency_rate,
              total: calculateTotalAmount(orderSummaryDetails?.total),
            })
            : location === "/individual/offset-subscription"
              ? (httpBody = {
                offsetable_id: Sub_OffsetId,
                offsetable_type: orderSummaryDetails.offsetable_type,
                member: passengersCount,
                total_impact: calculateTotalImpact(
                  orderSummaryDetails?.total_impact
                ),
                name_on_certificate: certificateName,
                country: currency_conversion_response?.countr_name,
                currency_code: currency_conversion_response?.currency_code,
                currency_symbol: currency_conversion_response?.currency_symbol,
                currency_rate: currency_conversion_response?.currency_rate,
                total: calculateTotalAmount(orderSummaryDetails?.total),
                is_subscription: true,
                frequency:
                  this.state.selectedFrequency === ""
                    ? FrequencyDataList[0]?.Id : this.state.selectedFrequency
              })
              : (httpBody = {
                offsetable_id: orderSummaryDetails.offsetable_id,
                is_subscription: false,
                product_name: orderSummaryDetails.product_name,
                offsetable_type: orderSummaryDetails.offsetable_type,
                total_impact: orderSummaryDetails?.total_impact,
                name_on_certificate: certificateName,
                country: currency_conversion_response?.countr_name,
                currency_code: currency_conversion_response.currency_code,
                currency_symbol: currency_conversion_response?.currency_symbol,
                currency_rate: currency_conversion_response?.currency_rate, total: calculateTotalAmount(orderSummaryDetails.total),
              });

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

  /// Gift code apply
  ApplyGiftCode = () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiPostGiftCode = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.individualRedemGiftCardEndPointUrl + `?code=${this.state?.giftCode}&amount=${this.props?.orderSummaryData?.sub_total}`
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
  /// Remove Gift code
  removeGiftCode = () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetRemoveGiftCode = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.individualRemoveGiftCodeEndPointUrl
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
  GetGstData = async (gift: any) => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetGstValue = requestMessage.messageId;
    gift = 'Gift' ?
      requestMessage.addData(
        getName(MessageEnum.RestAPIResponceEndPointMessage),
        "/account_block/get_gst"
      ) :
      requestMessage.addData(
        getName(MessageEnum.RestAPIResponceEndPointMessage),
        `/account_block/get_gst?reedem=true`
      )

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
  getProjectDistributionChartData = async () => {
    this.getProjectDistributionChartAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getProjectDistributionChartApiEndPoint,
    });
  };
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
  GetCarbonPerTonValue = async () => {
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
      "/bx_block_settings/settings/base_setting"
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
