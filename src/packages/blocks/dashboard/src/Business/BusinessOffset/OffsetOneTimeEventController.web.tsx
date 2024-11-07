import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../../framework/src/RunEngine";
import { message as MESSAGE } from "antd";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
// Customizable Area Start
const UserDetails: any = localStorage.getItem("UserDetails");

// Customizable Area End

// export const configJSON = require("../../config");
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
  oneWayStatus: boolean;
  passengers: number;
  orderSummaryData: any;
  loader: boolean;
  peopleData: any;
  flight: any;
  car: any;
  hotel: any;
  offsetEventData: any;
  setaverageFlightTime: any;
  selectedFlightData: any;
  btnDisabled: boolean;
  CountryListData: any;
  clickShow : boolean;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class OffsetOneTimeEventController extends BlockComponent<
  Props,
  S,
  SS
> {
  getPeopleRelatedEventAPICallID: any;
  apiOrderSummaryFlight: string = "";
  getOrderSummaryApiCallId: any;
  postOrderSummaryApiCallId: any;
  getAverageFligtTimeAPICallID: any;
  getFlightRelatedEventAPICallID: any;
  getCarDetailsApiCalled: any;
  getHotelDetailsApiCalled: any;
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

    this.state = this.getEmptyState();

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
      if (responseJson.status === 500) {
        window.notify([{ type: "error", message: responseJson.error }]);
        return;
      }
      if (apiRequestCallId === this.getCountryApiCallId) {
        this.setState({
          CountryListData: responseJson?.data,
        });
      }
      if (responseJson && responseJson.data) {
        if (apiRequestCallId === this.getAverageFligtTimeAPICallID) {
          this.setState({ setaverageFlightTime: responseJson.data });
        }
      } else if (responseJson && responseJson.errors) {
        if (apiRequestCallId === this.getAverageFligtTimeAPICallID) {
          this.parseApiCatchErrorResponse(responseJson);
        }
      } else if (errorReponse) {
        this.parseApiCatchErrorResponse(errorReponse);
      }
      if (apiRequestCallId === this.getPeopleRelatedEventAPICallID) {
        if (responseJson != null) {
          let offsetEventData = this.state.offsetEventData;
          if (responseJson.data.length > 0) {
            offsetEventData["people"] = responseJson.data;
            this.setState({
              offsetEventData: offsetEventData,
              btnDisabled: false,
            });
          } else {
            offsetEventData["people"] = [];
            this.setState({
              offsetEventData: offsetEventData,
              btnDisabled: false,
            });
          }
        }

        this.parseApiCatchErrorResponse(errorReponse);
      }
      if (apiRequestCallId === this.getFlightRelatedEventAPICallID) {
        if (responseJson != null && responseJson.data !== null) {
          let offsetEventData = this.state.offsetEventData;
          let flightData = this.state.offsetEventData.flight;
          if (responseJson.data.length > 0) {
            for (let i = 0; i < responseJson.data.length; i++) {
              if (!responseJson.data[i].errors) {
                offsetEventData["flight"][i] = responseJson.data[i];
                this.setState({
                  offsetEventData,
                  btnDisabled: false,
                });
              } else {
                if (responseJson.data[0].errors) {
                  offsetEventData["flight"][0] = flightData[0];
                } else {
                  offsetEventData["flight"][1] = flightData[1];
                }
                this.setState({
                  offsetEventData,
                  btnDisabled: false,
                });
                MESSAGE.error(responseJson.data[i].errors.message, 4);
              }
            }
          } else {
            offsetEventData["flight"] = flightData;
            this.setState({
              offsetEventData,
              btnDisabled: false,
            });
          }
        }

        this.parseApiCatchErrorResponse(errorReponse);
      }
      if (apiRequestCallId === this.getCarDetailsApiCalled) {
        if (responseJson != null) {
          let offsetEventData = this.state.offsetEventData;
          if (responseJson.data.length > 0) {
            offsetEventData["car"] = responseJson.data;
            this.setState({
              offsetEventData: offsetEventData,
              btnDisabled: false,
            });
          } else {
            offsetEventData["car"] = [];
            this.setState({
              offsetEventData: offsetEventData,
              btnDisabled: false,
            });
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }
      if (apiRequestCallId === this.getHotelDetailsApiCalled) {
        if (responseJson != null) {
          let offsetEventData = this.state.offsetEventData;
          if (responseJson.data.length > 0) {
            offsetEventData["hotel"] = responseJson.data;
            this.setState({
              offsetEventData: offsetEventData,
              btnDisabled: false,
            });
          } else {
            offsetEventData["hotel"] = [];
            this.setState({
              offsetEventData: offsetEventData,
              btnDisabled: false,
            });
          }
        }
        this.parseApiCatchErrorResponse(errorReponse);
      } else {
        if (apiRequestCallId === this.postOrderSummaryApiCallId) {
          if (responseJson != null) {
            this.setState({
              orderSummaryData: responseJson,
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

      if (apiRequestCallId === this.apiOrderSummaryFlight) {
        if (responseJson != null) {
          this.setState({
            orderSummaryData: responseJson,
            loader: false,
          });
        }
        this.parseApiCatchErrorResponse(errorReponse);
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    super.componentDidMount();
    if (localStorage.getItem("token")) {
      this.getAverageFligtTime();
      this.getCountrySelect();
    }
  }

  getEmptyState = () => ({
    CountryListData: [],
    btnDisabled: true,
    oneWayStatus: false,
    passengers: 1,
    orderSummaryData: null,
    loader: false,
    setaverageFlightTime: [],
    clickShow: false,
    peopleData: [
      {
        country: "",
        days: "",
        package: "",
        no_of_employee: 1,
        total_impact: 0,
        total: "",
        Id: 1,
      },
    ],
    flight: [{ averageFlightTime: "", flightDistance: "", class: "" }],
    car: [
      {
        vehicle_type: "",
        fuel_type: "",
        distance: "",
        power_source: "",
        no_of_cars: 0,
      },
    ],
    hotel: [{ country: "", hotel: "", noOfOvernights: "" }],
    offsetEventData: {
      people: [
        {
          country:
            localStorage.getItem("token") &&
            JSON.parse(UserDetails)?.country_name !== null
              ? JSON.parse(UserDetails)?.country_name
              : null,
          package: null,
          days: "",
          no_of_employee: 0,
          total_impact: 0,
        },
      ],
      flight: [
        {
          business_flight_type_id: null,
          no_of_passengers: 0,
          class_type: null,
          total_impact: 0,
          total: "",
          distance: "",
          return_flight: false,
          min: 0,
          max: 0,
        },
      ],
      car: [
        {
          vehicle_type: null,
          fuel_type: null,
          distance: "",
          no_of_cars: 0,
          total_impact: 0,
        },
      ],
      hotel: [
        {
          country:
            localStorage.getItem("token") &&
            JSON.parse(UserDetails)?.country_name !== null
              ? JSON.parse(UserDetails)?.country_name
              : null,
          no_of_travellers: 0,
          hotel: null,
          no_of_overnights: "",
          total_impact: 0,
        },
      ],
    },
    selectedFlightData: null,
  });

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

  postPeopleRelatedEventSuccessCallBack = (responseJson: any) => {
    this.setState({
      orderSummaryData: responseJson,
      loader: false,
    });
  };

  postPeopleRelatedEventFailurallBack = (res: any) => {
    this.setState({
      loader: false,
    });
  };

  callGetOrderSummaryCar = async () => {
    const { offsetEventData } = this.state;
    if (offsetEventData.car.length === 1) {
      if (
        offsetEventData.car[0].vehicle_type !== "" &&
        offsetEventData.car[0].fuel_type !== "" &&
        offsetEventData.car[0].distance !== ""
      ) {
        this.getCarDetails();
      }
    } else {
      if (
        offsetEventData.car[1].vehicle_type !== "" &&
        offsetEventData.car[1].fuel_type !== "" &&
        offsetEventData.car[1].distance !== ""
      ) {
        this.getCarDetails();
      }
    }
  };

  callGetOrderSummaryHotel = async () => {
    const { offsetEventData } = this.state;
    if (offsetEventData.hotel.length === 1) {
      if (
        offsetEventData.hotel[0].country !== "" &&
        offsetEventData.hotel[0].hotel !== "" &&
        offsetEventData.hotel[0].no_of_overnights !== ""
      ) {
        this.getHotelDetails();
      }
    } else {
      if (
        offsetEventData.hotel[1].country !== "" &&
        offsetEventData.hotel[1].hotel !== "" &&
        offsetEventData.hotel[1].no_of_overnights !== ""
      ) {
        this.getHotelDetails();
      }
    }
  };

  callGetOrderSummaryPeople = async () => {
    const { offsetEventData } = this.state;
    if (offsetEventData.people.length === 1) {
      if (
        offsetEventData.people[0].country !== "" &&
        offsetEventData.people[0].package !== "" &&
        offsetEventData.people[0].package !== null &&
        offsetEventData.people[0].days !== ""
      ) {
        this.getPeopleEvent();
      }
    } else {
      if (
        offsetEventData.people[1].country !== "" &&
        offsetEventData.people[1].package !== "" &&
        offsetEventData.people[1].package !== null &&
        offsetEventData.people[1].days !== ""
      ) {
        this.getPeopleEvent();
      }
    }
  };

  callGetOrderSummaryFlight = async (id: any = 1) => {
    let setaverageFlightTime = this.state.setaverageFlightTime;

    let selectedFlightIndex = setaverageFlightTime.findIndex(
      (item: any) => item.id === id
    );
    if (selectedFlightIndex !== -1) {
      this.setState(
        { selectedFlightData: setaverageFlightTime[selectedFlightIndex] },
        () => {
          let offsetEventData = this.state.offsetEventData;
          let flightData = this.state.offsetEventData.flight;
          let flightIndex = flightData.findIndex(
            (item: any) => item.business_flight_type_id === id
          );
          if (flightIndex !== -1) {
            flightData[flightIndex].min =
              this.state.selectedFlightData.attributes.min_km;
            flightData[flightIndex].max =
              this.state.selectedFlightData.attributes.max_km;
          }

          offsetEventData["flight"] = flightData;
          this.setState({ offsetEventData: offsetEventData });
        }
      );
    }
    const { offsetEventData } = this.state;
    if (offsetEventData.flight.length === 1) {
      if (
        offsetEventData.flight[0].business_flight_type_id !== "" &&
        offsetEventData.flight[0].return_flight !== "" &&
        offsetEventData.flight[0].distance !== "" &&
        offsetEventData.flight[0].class_type !== ""
      ) {
        this.getFlightEvent();
      }
    } else {
      if (
        offsetEventData.flight[1].business_flight_type_id !== "" &&
        offsetEventData.flight[1].return_flight !== "" &&
        offsetEventData.flight[1].distance !== "" &&
        offsetEventData.flight[1].class_type !== ""
      ) {
        this.getFlightEvent();
      }
    }
  };

  peopleAddClick() {
    if (
      this.state.offsetEventData.people.length === 1 ||
      this.state.offsetEventData.people.length < 2
    ) {
      let offsetEventData = this.state.offsetEventData;
      let people = offsetEventData.people;
      people.push({
        country:
          localStorage.getItem("token") &&
          JSON.parse(UserDetails)?.country_name !== null
            ? JSON.parse(UserDetails)?.country_name
            : null,
        days: "",
        package: null,
        no_of_employee: 1,
        total_impact: 0,
        total: "",
      });
      offsetEventData["people"] = people;
      this.setState({ offsetEventData });
    }
  }

  handlePeopleDataChange(
    i: any,
    name: any,
    offsetSectionName: any,
    data: string
  ) {
    let peopleData = this.state.offsetEventData[offsetSectionName];
    peopleData[i] = { ...peopleData[i], [name]: data };
    let offsetEventData = this.state.offsetEventData;
    offsetEventData[offsetSectionName] = peopleData;

    this.setState({ offsetEventData }, () => {
      if (offsetSectionName === "people") {
        this.callGetOrderSummaryPeople();
      }
      if (offsetSectionName === "flight") {
        this.callGetOrderSummaryFlight(data);
      }
      if (offsetSectionName === "car") {
        this.callGetOrderSummaryCar();
      }
      if (offsetSectionName === "hotel") {
        this.callGetOrderSummaryHotel();
      }
    });
  }

  // peoplePassengerCount(i: any, check: string) {
  //   let people = this.state.offsetEventData.people;
  //   let offsetEventData = this.state.offsetEventData;

  //   if (check === "plush") {
  //     if (people[i].no_of_employee < 10) {
  //       people[i].no_of_employee += 1;
  //     }
  //   } else {
  //     if (people[i].no_of_employee > 1) {
  //       people[i].no_of_employee -= 1;
  //     }
  //   }
  //   offsetEventData["people"] = people;
  //   this.setState({ offsetEventData }, () => {
  //     this.callGetOrderSummaryPeople();
  //   });
  // }

  // hotelPassengerCount(i: any, check: string) {
  //   let hotel = this.state.offsetEventData.hotel;
  //   let offsetEventData = this.state.offsetEventData;

  //   if (check === "plush") {
  //     if (hotel[i].no_of_travellers < 10) {
  //       hotel[i].no_of_travellers += 1;
  //     }
  //   } else {
  //     if (hotel[i].no_of_travellers > 1) {
  //       hotel[i].no_of_travellers -= 1;
  //     }
  //   }
  //   offsetEventData["hotel"] = hotel;
  //   this.setState({ offsetEventData }, () => {
  //     this.callGetOrderSummaryHotel();
  //   });
  // }

  // flightPassengerCount(i: any, check: string) {
  //   let offsetEventData = this.state.offsetEventData;
  //   let flightData = this.state.offsetEventData.flight;

  //   if (check === "plush") {
  //     if (flightData[i].no_of_passengers < 10) {
  //       flightData[i].no_of_passengers += 1;
  //     }
  //   } else {
  //     if (flightData[i].no_of_passengers > 1) {
  //       flightData[i].no_of_passengers -= 1;
  //     }
  //   }
  //   offsetEventData["flight"] = flightData;
  //   this.setState({ offsetEventData }, () => {
  //     this.callGetOrderSummaryFlight();
  //   });
  // }

  // carPassengerCount(i: any, check: string) {
  //   let offsetEventData = this.state.offsetEventData;
  //   let flightData = this.state.offsetEventData.car;

  //   if (check === "plush") {
  //     if (flightData[i].no_of_cars < 10) {
  //       flightData[i].no_of_cars += 1;
  //     }
  //   } else {
  //     if (flightData[i].no_of_cars > 1) {
  //       flightData[i].no_of_cars -= 1;
  //     }
  //   }
  //   offsetEventData["car"] = flightData;
  //   this.setState({ offsetEventData }, () => {
  //     this.callGetOrderSummaryCar();
  //   });
  // }
  flightCheckboxOnChange(i: any, e: any) {
    let returnFlight = e.target.checked;
    var tempFlight = returnFlight ? "Yes" : "No";
    let flightData = this.state.offsetEventData.flight;
    let offsetEventData = this.state.offsetEventData;
    flightData[i] = { ...flightData[i], ["return_flight"]: tempFlight };
    offsetEventData["flight"] = flightData;
    this.setState({ offsetEventData }, () => {
      this.callGetOrderSummaryFlight();
    });
  }
  getAverageFligtTime = async () => {
    this.getAverageFligtTimeAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getAverageFligthTimeAPIEndPoint,
    });
  };

  getHotelDetails = async () => {
    const Token = localStorage.getItem("token") || "";
    const { offsetEventData } = this.state;
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const currencySymbolHandler = (country: any) => {
      const response = this.state.CountryListData?.find((item: any) => {
        return item?.attributes?.CountryName === country?.country;
      });
      return response?.attributes?.CurrencySymbol;
    };
    let finaldata = offsetEventData.hotel.map((item: any) => {
      return { ...item, currency_symbol: currencySymbolHandler(item) };
    });
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.getHotelDetailsApiCalled = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getHotelAPIEndPoint
    );

    const httpBody = {
      data: finaldata,
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

  getCarDetails = async () => {
    const Token = localStorage.getItem("token") || "";
    const { offsetEventData } = this.state;
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.getCarDetailsApiCalled = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getOrderSummaryEndPoint
    );

    const httpBody = {
      data: offsetEventData.car,
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

  getPeopleEvent = async () => {
    const Token = localStorage.getItem("token") || "";
    const { offsetEventData } = this.state;
    const currencySymbolHandler = (country: any) => {
      const response = this.state.CountryListData?.find((item: any) => {
        return item?.attributes?.CountryName === country?.country;
      });
      return response?.attributes?.CurrencySymbol;
    };
    let finaldata = offsetEventData.people.map((item: any) => {
      return { ...item, currency_symbol: currencySymbolHandler(item) };
    });

    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.getPeopleRelatedEventAPICallID = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getPeopleEventAPIEndPoint
    );

    const httpBody = {
      data: finaldata,
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

  getFlightEvent = async () => {
    const Token = localStorage.getItem("token") || "";
    const { offsetEventData } = this.state;
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.getFlightRelatedEventAPICallID = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getFlightEventAPIEndPoint
    );

    const httpBody = {
      data: offsetEventData.flight,
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

  handleFinish = () => {
    this.OrderSummaryData();
  };

  OrderSummaryData = async () => {
    this.setState({
      loader: true,
    });
    const Token = localStorage.getItem("token") || "";
    // const { peopleData } = this.state;
    let orderSummaryData = [];
    const currencySymbolHandler = (country: any) => {
      const response = this.state.CountryListData?.find((item: any) => {
        return item?.attributes?.CountryName === country?.country;
      });
      return response?.attributes?.CurrencySymbol;
    };
    let finaldataForPeople = this.state.offsetEventData.people.map(
      (item: any) => {
        return { ...item, currency_symbol: currencySymbolHandler(item) };
      }
    );
    orderSummaryData = finaldataForPeople;

    orderSummaryData = orderSummaryData.concat(this.state.offsetEventData.car);
    orderSummaryData = orderSummaryData.concat(
      this.state.offsetEventData.flight
    );
    let finaldataForHotel = this.state.offsetEventData.hotel.map(
      (item: any) => {
        return { ...item, currency_symbol: currencySymbolHandler(item) };
      }
    );
    orderSummaryData = orderSummaryData.concat(finaldataForHotel);
    const header = {
      "Content-Type": configJSON.ApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.postOrderSummaryApiCallId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.postEventOneTimeOrderSummaryApiEndPoint
    );
    const httpBody = {
      data: orderSummaryData,
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

  handlePeopleDataInputChange(i: any, e: any) {
    const { value } = e.target;
    let people = [...this.state.offsetEventData.people];
    if ((value < 100000 && value > 0) || value.length === 0) {
      people[i] = { ...people[i], ["days"]: value };
      let offsetEventData = this.state.offsetEventData;
      offsetEventData["people"] = people;
      this.setState({ offsetEventData }, () =>
        this.callGetOrderSummaryPeople()
      );
    }
  }
  handleEventsInputChange(i: any, check: any, e: any) {
    const { value } = e.target;
    if (check === "People") {
      let people = [...this.state.offsetEventData.people];
      if ((value < 1000000 && value > 0) || value.length === 0) {
        people[i] = { ...people[i], ["no_of_employee"]: value };
        let offsetEventData = this.state.offsetEventData;
        offsetEventData["people"] = people;
        this.setState({ offsetEventData }, () =>
          this.callGetOrderSummaryPeople()
        );
      }
    } else if (check === "Flight") {
      let flight = [...this.state.offsetEventData.flight];
      if ((value < 5000 && value > 0) || value.length === 0) {
        flight[i] = { ...flight[i], ["no_of_passengers"]: value };
        let offsetEventData = this.state.offsetEventData;
        offsetEventData["flight"] = flight;
        this.setState({ offsetEventData }, () =>
          this.callGetOrderSummaryFlight()
        );
      }
    } else if (check === "Car") {
      let car = [...this.state.offsetEventData.car];
      if ((value < 5000 && value > 0) || value.length === 0) {
        car[i] = { ...car[i], ["no_of_cars"]: value };
        let offsetEventData = this.state.offsetEventData;
        offsetEventData["car"] = car;
        this.setState({ offsetEventData }, () => this.callGetOrderSummaryCar());
      }
    } else if (check === "Hotel") {
      let hotel = [...this.state.offsetEventData.hotel];
      if ((value < 5000 && value > 0) || value.length === 0) {
        hotel[i] = { ...hotel[i], ["no_of_travellers"]: value };
        let offsetEventData = this.state.offsetEventData;
        offsetEventData["hotel"] = hotel;
        this.setState({ offsetEventData }, () =>
          this.callGetOrderSummaryHotel()
        );
      }
    }
  }

  carAddClick() {
    if (
      this.state.offsetEventData.car.length === 1 ||
      this.state.offsetEventData.car.length < 10
    ) {
      let offsetEventData = this.state.offsetEventData;
      let flight = offsetEventData.car;
      flight.push({
        vehicle_type: null,
        fuel_type: null,
        distance: "",
        no_of_cars: 0,
        total_impact: 0,
        total: "",
      });
      offsetEventData["car"] = flight;
      this.setState({ offsetEventData: offsetEventData });
    }
  }

  flightAddClick() {
    if (
      this.state.offsetEventData.flight.length === 1 ||
      this.state.offsetEventData.flight.length < 10
    ) {
      let offsetEventData = this.state.offsetEventData;
      let flight = offsetEventData.flight;
      flight.push({
        business_flight_type_id: null,
        no_of_passengers: 1,
        return_flight: false,
        distance: "",
        class_type: null,
        total_impact: 0,
        total: "",
      });
      offsetEventData["flight"] = flight;
      this.setState({ offsetEventData });
    }
  }
  peopleRemoveClick(i: any) {
    if (this.state.offsetEventData.people.length > 0) {
      let people = this.state.offsetEventData.people;
      let offsetEventData = this.state.offsetEventData;
      people.splice(i, 1);
      offsetEventData["people"] = people;
      this.setState({ offsetEventData });
    }
  }

  flightRemoveClick(i: any) {
    if (this.state.offsetEventData.flight.length > 1) {
      let flightData = this.state.offsetEventData.flight;
      let offsetEventData = this.state.offsetEventData;
      flightData.splice(i, 1);
      offsetEventData["flight"] = flightData;
      this.setState({ offsetEventData });
    }
  }

  carRemoveClick(i: any) {
    if (this.state.offsetEventData.car.length > 1) {
      let carData = this.state.offsetEventData.car;
      let offsetEventData = this.state.offsetEventData;
      carData.splice(i, 1);
      offsetEventData["car"] = carData;
      this.setState({ offsetEventData });
    }
  }

  hotelRemoveClick(i: any) {
    if (this.state.offsetEventData.hotel.length > 1) {
      let hotelData = this.state.offsetEventData.hotel;
      let offsetEventData = this.state.offsetEventData;
      hotelData.splice(i, 1);
      offsetEventData["hotel"] = hotelData;
      this.setState({ offsetEventData });
    }
  }

  flightHandleChange(i: any, e: any) {
    const { value } = e.target;
    let selectedFlightPayload = null;
    var filghtData = this.state.setaverageFlightTime;
    let offsetEventData = this.state.offsetEventData;
    let flight = this.state.offsetEventData.flight;
    // for (let i = 0; i < filghtData.length; i++) {
    //   if (
    //     Number(value) >= filghtData[i].attributes.min_km &&
    //     Number(value) <= filghtData[i].attributes.max_km
    //   ) {
    //     this.handlePeopleDataChange(
    //       0,
    //       "business_flight_type_id",
    //       "flight",
    //       filghtData[i].id
    //     );
    //   }
    // }

    filghtData.map((item: any, index: any) => {
      if (value >= item.attributes.min_km && value <= item.attributes.max_km) {
        selectedFlightPayload = item;
        flight[i]["product_name"] = item.attributes.name;
        flight[i]["business_flight_type_id"] = item.id;
      }
    });

    flight[i].distance = value;
    offsetEventData["flight"] = flight;
    this.setState({ offsetEventData }, () => {
      this.callGetOrderSummaryFlight();
    });
  }

  // handleFlightDistance(i: any, e: any) {
  //   const { value } = e.target;
  //   let selectedFlightPayload = null;
  //   let flightListData = this.state.flightListData;
  //   let flightData: any = [...this.state.flightData];
  //   flightListData.map((item:any, index: any)=> {
  //     if(value>= item.attributes.min_km && value <= item.attributes.max_km){
  //        selectedFlightPayload = item;
  //        flightData[i]['product_name'] = item.attributes.name;
  //        flightData[i]['business_flight_type_id'] = item.id
  //     }
  //   });
  //   this.setState({ flightListData: flightListData }, () => {});
  //   flightData[i] = { ...flightData[i], ["distance"]: value };
  //   this.setState({ flightData }, () => this.callFlightImapactApi());
  // }

  carHandleChange(i: any, e: any) {
    const { value } = e.target;
    let peopleData = this.state.offsetEventData.car;
    if (value > 0 || value.length === 0) {
      peopleData[i].distance = value;
      let offsetEventData = this.state.offsetEventData;
      offsetEventData["distance"] = peopleData;
      this.setState({ offsetEventData }, () => {
        this.callGetOrderSummaryCar();
      });
    }
  }

  hotelAddClick() {
    if (
      this.state.offsetEventData.hotel.length === 1 ||
      this.state.offsetEventData.hotel.length < 2
    ) {
      let offsetEventData = this.state.offsetEventData;
      let hotel = offsetEventData.hotel;
      hotel.push({
        country:
          localStorage.getItem("token") &&
          JSON.parse(UserDetails)?.country_name !== null
            ? JSON.parse(UserDetails)?.country_name
            : null,
        no_of_travellers: 0,
        hotel: null,
        no_of_overnights: "",
        total_impact: 0,
        total: "",
      });
      offsetEventData["hotel"] = hotel;
      this.setState({ offsetEventData: offsetEventData });
    }
  }

  hotelHandleChange(i: any, e: any) {
    const { value } = e.target;
    let peopleData = this.state.offsetEventData.hotel;
    if (value > 0 || value.length === 0) {
      peopleData[i].no_of_overnights = value;
      let offsetEventData = this.state.offsetEventData;
      offsetEventData["no_of_overnights"] = peopleData;
      this.setState({ offsetEventData }, () => {
        this.callGetOrderSummaryHotel();
      });
    }
  }
  getCountrySelect = async () => {
    this.getCountryApiCallId = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getCountryAPIEndPoint,
    });
  };
  // Customizable Area End
}
