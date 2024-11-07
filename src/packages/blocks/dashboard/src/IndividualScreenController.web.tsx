import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";
import { message as MESSAGE } from "antd";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  history: any;
  location: any;
  // Customizable Area Start
  // Customizable Area End
}
interface S {
  // Customizable Area Start
  dashboardData: any;
  token: string;
  errorMsg: string;
  loading: boolean;
  isClick: any;
  yourImpactSelect: any;
  projectDistributionYourImpactSelect: any;
  isFalseOffset: any;
  climateProject: any;
  orderHistoryOneTime: any;
  isUserLoggedIn: boolean;
  climateProjectList: any;
  plantTreeList: any;
  ClimateProjectList: any;
  myProjectList: any;
  allIndividualCount: any;
  plant_trees: any;
  total_offset: any;
  project_count: any;
  your_impact_total: any;
  your_impact_total_recent: any;
  YourGiftImpact: boolean;
  getCarbonFootprint: any;
  getProjectDetails: any;
  climateProjectClick: any;
  treeplantedclickdata: any;
  showProjectModal: any;
  showPlanttreeModal: any;
  projectLocation: any;
  pageProjectdetails: any;
  dataAllProejctList: any;
  isNextButtonDisable: boolean;
  isPreviousButtonDisable: boolean;
  indOrderHistoryOneTime: any;
  indOrderNext: any;
  isImpactLoader: boolean;
  chartProejectDistribution: any;
  chartImpactOffsetType: any;
  chartImpactOffsetTypeRechart: any;
  ChartProjectCurrency: string;
  sumOfChartProejectDistribution: any;
  sumOfChartImpact: any;
  chartImpactOffsetTypeRecent: any;
  chartProejectDistributionRecent: any;
  sumOfChartProejectDistributionRecent: any;
  sumOfChartImpactRecent: any;
  showPopup: any;
  // Customizable Area End
}
interface SS {
  id: any;
}

export default class IndividualScreenController extends BlockComponent<
  Props,
  S,
  SS
> {

  // Customizable Area Start
  getTreesPlantDataAPICallID: any;
  getClimateProjectDataAPICallID: any;
  getProjectCountAPICallID: any;
  getAllCountAPICallID: any;
  getProjectDistributionChartAPICallID: any;
  // getProjectDetailsAPICallID: any;
  getCarbonFootprintAPICallID: any;
  getNextMProjectDetailsAPICallID: any;
  getOneTimeOrderHistoryAPICallID: any;
  getSubscriptionOrderHistoryAPICallID: any;
  getGiftCardOrderHistoryAPICallID: any;
  apiGetCartDetails: any;
  apiGetCurrencyConversion: any
  getBasicApiCallId: any;

  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);
    console.disableYellowBox = true;
    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.ReciveUserCredentials),
    ];

    this.state = {
      // Customizable Area Start
      dashboardData: [],
      errorMsg: "",
      token: "",
      yourImpactSelect: "current_year",
      projectDistributionYourImpactSelect: "project_distribution_current_year",
      loading: false,
      isClick: false,
      isFalseOffset: false,
      climateProject: true,
      orderHistoryOneTime: true,
      isUserLoggedIn: false,
      climateProjectList: [],
      plantTreeList: [],
      ClimateProjectList: [],
      myProjectList: [],
      allIndividualCount: "",
      plant_trees: "",
      total_offset: "",
      project_count: "",
      your_impact_total: "",
      your_impact_total_recent: "",
      YourGiftImpact: true,
      getCarbonFootprint: [],
      getProjectDetails: [],
      climateProjectClick: null,
      treeplantedclickdata: null,
      showProjectModal: false,
      showPlanttreeModal: false,
      projectLocation: { lat: 51.5072, lng: 0.1276 },
      pageProjectdetails: null,
      dataAllProejctList: [],
      isNextButtonDisable: false,
      isPreviousButtonDisable: true,
      indOrderHistoryOneTime: [],
      indOrderNext: 0,
      isImpactLoader: false,
      chartProejectDistribution: [],
      chartImpactOffsetType: [],
      chartImpactOffsetTypeRechart: [],
      ChartProjectCurrency: "",
      sumOfChartProejectDistribution: "",
      sumOfChartImpact: "",
      chartImpactOffsetTypeRecent: [],
      chartProejectDistributionRecent: [],
      sumOfChartProejectDistributionRecent: "",
      sumOfChartImpactRecent: "",
      showPopup: true
      // Customizable Area End
    };
    this.receive = this.receive.bind(this);
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
    // Customizable Area Start
    // Customizable Area End
  }

  async componentDidMount() {
    this.getBasicProfile()
    this.checkUserStatus();
    this.NextMProjectDetailsSetData();
    setTimeout(() => {
      this.setState({ showPopup: false })
    }, 5000);
  }

  NextMProjectDetailsSetData = () => {
    return this.setState(
      {
        pageProjectdetails: this.props.location.state?.item,
        dataAllProejctList: this.props.location.state?.dataList,
      },
      () => {
        console.log("@@@ dataAllProejctList", this.state.dataAllProejctList);
      }
    );
  };

  preiousProjectDetails = () => {
    let setDataList = this.state.dataAllProejctList;
    let setPage = this.state.pageProjectdetails;
    let selectIndex = setDataList.findIndex((dataItem: any) => {
      return dataItem.id === setPage.id;
    });
    this.setState(
      {
        pageProjectdetails: setDataList[selectIndex - 1],
        isNextButtonDisable: false,
      },
      () => {
        this.checkPreviousButtonStatus();
      }
    );
  };

  NextMProjectDetails = (item: any) => {
    let setDataList = this.state.dataAllProejctList;
    let setPage = this.state.pageProjectdetails;
    let selectIndex = setDataList.findIndex((dataItem: any) => {
      return dataItem.id === setPage.id;
    });
    this.setState({ pageProjectdetails: setDataList[selectIndex + 1] }, () => {
      this.checkNextButtonStatus();
    });
  };

  checkNextButtonStatus = () => {
    let setDataList = this.state.dataAllProejctList;
    let setPage = this.state.pageProjectdetails;
    let lastIndex = setDataList.length - 1;
    this.setState({
      isNextButtonDisable: setDataList[lastIndex].id === setPage.id,
      isPreviousButtonDisable: false,
    });
  };

  checkPreviousButtonStatus = () => {
    let setDataList = this.state.dataAllProejctList;
    let setPage = this.state.pageProjectdetails;
    this.setState({
      isPreviousButtonDisable: setDataList[0].id === setPage.id,
    });
  };

  checkUserStatus = async () => {
    let token = await localStorage.getItem("token");
    if (token) {
      this.setState({ isUserLoggedIn: true }, () => {
        if (this.state.isUserLoggedIn) {
          this.getClimateProjecttData();
          this.getMyProjectCount();
          this.getAllCount();
          this.getProjectDistributionChartData();
          this.GetCartDetailsData();
          this.getCarbonFootprint();
          this.getOneTimeOrderHistory();
          this.GetCurrencyData()
          this.getNextMProjectDetails();
        }
      });
    } else {
      this.getCarbonFootprint();
    }
  };

  async componentWillUnmount() {
    super.componentWillUnmount();
    window.scrollTo(0, 0)
  }

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
        if (responseJson.errors[0].token === "invalid token") {
          console.log("token invalid")
        }
        return;
      }

      if (responseJson && responseJson.data) {
        if (apiRequestCallId === this.getTreesPlantDataAPICallID) {
          this.setState({
            // plantTreeList: responseJson.data,
            isImpactLoader: false,
          });
        }
        if (apiRequestCallId === this.getBasicApiCallId) {
          localStorage.setItem("UserDetails", JSON.stringify(responseJson.data.attributes));
        }
        if (apiRequestCallId === this.getClimateProjectDataAPICallID) {
          this.setState({
            ClimateProjectList: responseJson.data,
            isImpactLoader: false,
          });
        }
        if (apiRequestCallId === this.getProjectCountAPICallID) {
          responseJson.data.map((val: any) => {
            val["isSelected"] = false;
          });
          this.setState({ myProjectList: responseJson.data });
        }
        if (apiRequestCallId === this.getAllCountAPICallID) {
          this.getAllCountSuccessCallBack(responseJson);
        }
        if (apiRequestCallId === this.getCarbonFootprintAPICallID) {
          this.getCarbonFootprintSuccessCallBack(responseJson);
        }
        if (apiRequestCallId === this.getNextMProjectDetailsAPICallID) {
          this.setState({ plantTreeList: responseJson.data });
        }
        if (apiRequestCallId === this.getOneTimeOrderHistoryAPICallID) {
          if (responseJson !== null && responseJson.data.length > 0) {
            console.log({ responseJson })
            this.setState({ indOrderHistoryOneTime: responseJson });
          } else {
            this.setState({ indOrderHistoryOneTime: [] });
          }
        }
        if (apiRequestCallId === this.apiGetCartDetails) {
          localStorage.setItem(
            "cart_item",
            responseJson.data.attributes.total_item
          );
          {
            window.location.pathname === "/individual/dashboard" &&
              this.props.history.replace("/individual/dashboard");
          }
        }
        if (apiRequestCallId === this.apiGetCurrencyConversion) {
          localStorage.setItem(
            "currency_conversion",
            JSON.stringify(responseJson?.data[0])
          );
        }

        if (apiRequestCallId === this.getProjectDistributionChartAPICallID) {
          if (responseJson !== null) {
            var tempData = responseJson?.data?.project_destribution?.filter((item: any) => item?.type != "Agroforestry" && item?.type != "Miyawaki"
            )

            var ImpactData = responseJson.data.impact_offset_type;

            var tempDataRecent =
              responseJson?.data?.recent_project_destribution?.filter((item: any) => item?.type != "Agroforestry" && item?.type != "Miyawaki"
              )
            var ImpactDataRecent =
              responseJson?.data?.recent_impact_offset_type;
            var tempArray = [["", ""]];
            var tempArrayRecent = [["", ""]];
            var impactArray = [
              [
                "",
                "",
                { role: "style" },
                {
                  role: "annotation",
                },
              ],
            ];
            var impactArrayRecent = [
              [
                "",
                "",
                { role: "style" },
                {
                  role: "annotation",
                },
              ],
            ];

            tempData.map((item: any) => {
              tempArray.push([item.type, item.value]);
            });
            tempDataRecent?.map((item: any) => {
              tempArrayRecent.push([item.type, item.value]);
            });

            ImpactData.map((item: any) => {
              if (item.value > 0) {
                if (item.year === "Your Offset") {
                  impactArray.push([item.year, item.value, "#486BAF", null]);
                } else if (item.year === "Country Annual Footprint") {
                  impactArray.push([item.year, item.value, "#86AF47", null]);
                } else if (item.year === "Global Annual Footprint") {
                  impactArray.push([item.year, item.value, "#A24F78", null]);
                }
              }
            });
            ImpactDataRecent?.map((item: any) => {
              if (item.value > 0) {
                if (item.year === "Your Offset") {
                  impactArrayRecent.push([
                    item.year,
                    item.value,
                    "#486BAF",
                    null,
                  ]);
                } else if (item.year === "Country Annual Footprint") {
                  impactArrayRecent.push([
                    item.year,
                    item.value,
                    "#86AF47",
                    null,
                  ]);
                } else if (item.year === "Global Annual Footprint") {
                  impactArrayRecent.push([
                    item.year,
                    item.value,
                    "#A24F78",
                    null,
                  ]);
                }
              }
            });

            const sum = tempData.reduce((accumulator: any, object: any) => {
              return accumulator + object.value;
            }, 0);
            const sumRecent = tempDataRecent?.reduce(
              (accumulator: any, object: any) => {
                return accumulator + object.value;
              },
              0
            );

            const sumImpact = ImpactData.reduce(
              (accumulator: any, object: any) => {
                return accumulator + object.value;
              },
              0
            );
            const sumImpactRecent = ImpactDataRecent?.reduce(
              (accumulator: any, object: any) => {
                return accumulator + object.value;
              },
              0
            );

            this.setState({
              chartImpactOffsetType: impactArray,
              chartImpactOffsetTypeRechart:
                responseJson.data.impact_offset_type,
              chartProejectDistribution: tempArray,
              ChartProjectCurrency: responseJson.data.currency_symbol,
              sumOfChartProejectDistribution: sum,
              sumOfChartImpact: sumImpact,

              chartImpactOffsetTypeRecent: impactArrayRecent,
              chartProejectDistributionRecent: tempArrayRecent,
              sumOfChartProejectDistributionRecent: sumRecent,
              sumOfChartImpactRecent: sumImpactRecent,
            });
          }
        }
      } else if (responseJson && responseJson.errors) {
        if (apiRequestCallId === this.getClimateProjectDataAPICallID) {
          this.setState({
            isImpactLoader: false,
          });
          if (responseJson.errors[0].token === "invalid token") {
            // localStorage.clear();
            // setTimeout(() => {
            //   this.props.history.push({
            //     pathname: "/login",
            //     state: "Individual"
            //   });
            // }, 2000);
          }
        }
        if (apiRequestCallId === this.getTreesPlantDataAPICallID) {
          // MESSAGE.error(responseJson.errors[0].token.toString(), 2);
          // localStorage.clear();
          this.setState({
            isImpactLoader: false,
          });
          // setTimeout(() => {
          //   this.props.history.push({
          //     pathname: "/login",
          //     state: "Individual"
          //   });
          // }, 2000);
        }
        if (apiRequestCallId === this.getProjectCountAPICallID) {
          // localStorage.clear();
          // setTimeout(() => {
          //   this.props.history.push({
          //     pathname: "/login",
          //     state: "Individual"
          //   });
          // }, 2000);
          // MESSAGE.error(responseJson.errors[0].token.toString(), 2);
        }
        if (apiRequestCallId === this.getAllCountAPICallID) {
          // localStorage.clear();
          // setTimeout(() => {
          //   this.props.history.push({
          //     pathname: "/login",
          //     state: "Individual"
          //   });
          // }, 2000);
          // MESSAGE.error(responseJson.errors[0].token.toString(), 2);
        }
        if (apiRequestCallId === this.getCarbonFootprintAPICallID) {
          // localStorage.clear();
          // setTimeout(() => {
          //   this.props.history.push({
          //     pathname: "/login",
          //     state: "Individual"
          //   });
          // }, 2000);
          // MESSAGE.error(responseJson.errors[0].token.toString(), 2);
        }
        if (apiRequestCallId === this.apiGetCartDetails) {
          if (responseJson.errors[0].token === "invalid token") {
            // localStorage.clear();
            // setTimeout(() => {
            //   this.props.history.push({
            //     pathname: "/login",
            //     state: "Individual"
            //   });
            // }, 2000);
          }
          // MESSAGE.error(responseJson.errors[0].token.toString(), 2);
        }
        if (apiRequestCallId === this.getProjectDistributionChartAPICallID) {
          if (responseJson.errors[0].token === "invalid token") {
            // localStorage.clear();
            // setTimeout(() => {
            //   this.props.history.push({
            //     pathname: "/login",
            //     state: "Individual"
            //   });
            // }, 2000);
          }
        }
      } else if (errorReponse) {
        MESSAGE.error("errorReponse".toString(), 4);
      }
    }
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

  apiWithoutTokenCall = async (data: any) => {
    const { contentType, method, endPoint, body } = data;
    const header = {
      "Content-Type": contentType,
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

  getClimateProjecttData = async () => {
    this.setState({
      isImpactLoader: true,
    });
    this.getClimateProjectDataAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getClimateProjectAPIEndPoint,
    });
  };

  getTreesPlantData = async () => {
    this.setState({
      isImpactLoader: true,
    });
    this.getTreesPlantDataAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getTreesPlantCountAPIEndPoint,
    });
  };

  getMyProjectCount = async () => {
    this.getProjectCountAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.myProjectsListEndPointUrl,
    });
  };

  getNextMProjectDetails = async () => {
    this.getNextMProjectDetailsAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: "bx_block_my_project/my_projects/my_plant_projects"
      // endPoint: `${configJSON.myProjectsListEndPointUrl}?page=${this.state.page}&per=1`,
    });
  };

  getAllCount = async () => {
    this.getAllCountAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getAllCountAPIEndPoint,
    });
  };

  getCarbonFootprint = async () => {
    const Role =
      window.location.pathname === "/individual/dashboard"
        ? "individual"
        : null;
    this.getCarbonFootprintAPICallID = await this.apiWithoutTokenCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getCarbonFootprintAPIEndPoint + `?role_type=${Role}`,
    });
  };

  getOneTimeOrderHistory = async () => {
    this.getOneTimeOrderHistoryAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: this.state.orderHistoryOneTime
        ? configJSON.getOrderHistoryEndPointUrl +
        `?product_type=One time&per=5&page=${this.state.indOrderNext}`
        : configJSON.getOrderHistoryEndPointUrl +
        `?product_type=Subscription&per=5&page=${this.state.indOrderNext}`,
    });
  };

  getSubscriptionOrderHistory = async () => {
    this.getCarbonFootprintAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getOrderHistoryEndPointUrl,
    });
  };
  getGiftCardOrderHistory = async () => {
    this.getCarbonFootprintAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getOrderHistoryEndPointUrl,
    });
  };

  handlePageClick = (e: any) => {
    let event = e.selected;
    this.setState({ indOrderNext: event + 1 }, () =>
      this.getOneTimeOrderHistory()
    );
  };
  YourGiftImpactTabClick = (tab: any) => {
    if (tab === "Your") {
      this.setState({ YourGiftImpact: true });
    } else {
      this.setState({ YourGiftImpact: false });
    }
  };
  ClimatProjectTabClick = (tab: string) => {
    if (tab === "Climate") {
      this.setState({
        climateProject: true,
        climateProjectClick: this.state.ClimateProjectList[0],
        showPlanttreeModal: false,
        showProjectModal: true,

      }, () =>
        this.getClimateProjecttData()
      );
    } else {
      this.setState({
        climateProject: false,
        showPlanttreeModal: true,
        showProjectModal: false,
        treeplantedclickdata: this.state.plantTreeList[0]
      }, () => this.getNextMProjectDetails());
    }
  };
  getCarbonFootprintSuccessCallBack = async (res: any) => {
    res.data.map((val: any) => {
      val["isSelected"] = false;
    });
    let carbonData = res.data;
    let count = 0;
    let newArr: any = [];
    let localArr: any = [];
    carbonData.map((item: any, index: any) => {
      localArr.push(item);
      count = count + 1;
      if (count === 3) {
        let dataObj = {
          data: localArr,
        };
        newArr.push(dataObj);
        count = 0;
        localArr = [];
      }
    });
    if (localArr.length !== 0) {
      newArr.push({
        data: localArr,
      });
    }
    this.setState({ getCarbonFootprint: newArr });
  };

  getAllCountSuccessCallBack = async (res: any) => {
    res.data.map((item: any) => {
      this.setState({
        plant_trees: item.plant_trees,
        total_offset: item.gift_impact,
        project_count: item.project_count,
        your_impact_total: item.your_impact_total,
        your_impact_total_recent: item.your_recent_impact_total
          ? item.your_recent_impact_total
          : 0,
      });
      localStorage.setItem("total_impact_recent", JSON.stringify(item.your_recent_impact_total))
    });
  };

  onSelectClimateProjectCell = (item: any) => {
    let listOfClimateproject = this.state.ClimateProjectList;
    listOfClimateproject.map((element: any) => {
      if (element.id === item.id) {
        element.isSelected = !element.isSelected;
      } else {
        element.isSelected = false;
      }
      return element;
    });
    this.setState({ ClimateProjectList: listOfClimateproject });
  };

  onSelectpPlanttreeCell = (item: any) => {
    let listOfClimateproject = this.state.plantTreeList;
    listOfClimateproject.map((element: any) => {
      if (element.id === item.id) {
        element.isSelected = true;
      } else {
        element.isSelected = false;
      }
      return element;
    });
    this.setState({ plantTreeList: listOfClimateproject });
  };

  getProjectDistributionChartData = async () => {
    this.getProjectDistributionChartAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getProjectDistributionChartApiEndPoint,
    });
  };

  ///Get Card Details data
  GetCartDetailsData = async () => {
    const Token = localStorage.getItem("token") || "";
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiGetCartDetails = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.CardDetailsEndPointUrl
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
  getBasicProfile = async () => {
    this.getBasicApiCallId = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: "account_block/profile",
    });
  };
}
