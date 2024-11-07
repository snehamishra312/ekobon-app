import { IBlock } from "../../../../framework/src/IBlock";
import { Message } from "../../../../framework/src/Message";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";
import { message as MESSAGE } from "antd";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("../config");
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
  show: boolean;
  graphFilterShow: boolean;
  selectOrder: any;
  filterOffsetGraph: any;
  token: string;
  errorMsg: string;
  loading: boolean;
  isClick: any;
  isFalseOffset: any;
  climateProject: any;
  orderHistoryOneTime: any;
  isUserLoggedIn: boolean;
  yourImpactSelect: any;
  climateProjectList: any;
  plantTreeList: any;
  myProjectList: any;
  allIndividualCount: any;
  plant_trees: any;
  total_offset: any;
  project_count: any;
  your_impact_total: any;
  your_recent_impact_total: any;
  getCarbonFootprint: any;
  getProjectDetails: any;
  climateProjectClick: any;
  treeplantedclickdata: any;
  showProjectModal: any;
  showPlanttreeModal: any;
  projectLocation: any;
  chartProejectDistribution: any;
  chartImpactOffsetType: any;
  indOrderHistoryOneTime: any;
  indOrderNext: any;
  indOrderNextSub: any;
  currency_symbol_chart:any;
  sumOfChartProejectDistribution: any;
  chartProejectDistributionRecent: any;
  projectDistributionYourImpactSelect: any;
  sumOfChartProejectDistributionRecent: any;
  showPopup:any
  // Customizable Area End
}
interface SS {
  id: any;
}

export default class BusinessScreenController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  getTreesPlantCountAPICallID: any;
  getProjectCountAPICallID: any;
  getAllCountAPICallID: any;
  getChartAPICallID: any;
  // getProjectDetailsAPICallID: any;
  getCarbonFootprintAPICallID: any;
  apiGetCartDetails: any;
  getOneTimeOrderHistoryAPICallID: any;
  apiGetCurrencyConversion: any;
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
      currency_symbol_chart:"",
      show: false,
      graphFilterShow: false,
      selectOrder: "All",
      filterOffsetGraph: "All",
      errorMsg: "",
      token: "",
      loading: false,
      isClick: false,
      isFalseOffset: false,
      climateProject: true,
      orderHistoryOneTime: true,
      isUserLoggedIn: false,
      yourImpactSelect: "current_year",
      climateProjectList: [],
      plantTreeList: [],
      myProjectList: [],
      allIndividualCount: "",
      plant_trees: "",
      total_offset: "",
      project_count: "",
      your_impact_total: "",
      your_recent_impact_total: "",
      getCarbonFootprint: [],
      getProjectDetails: [],
      climateProjectClick: null,
      treeplantedclickdata: null,
      showProjectModal: false,
      showPlanttreeModal: false,
      projectLocation: { lat: 51.5072, lng: 0.1276 },
      chartProejectDistribution: [],
      chartImpactOffsetType: [],
      indOrderHistoryOneTime: [],
      indOrderNext: 0,
      indOrderNextSub: 0,
      sumOfChartProejectDistribution: "",
      chartProejectDistributionRecent: [],
      projectDistributionYourImpactSelect: "project_distribution_current_year",
      sumOfChartProejectDistributionRecent: "",
      showPopup:true
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

    setTimeout(() => {
      this.setState({showPopup:false})
     },5000);
  }

  checkUserStatus = async () => {
    let token = await localStorage.getItem("token");
    if (token) {
      this.setState({ isUserLoggedIn: true }, () => {
        if (this.state.isUserLoggedIn) {
          this.getTreesPlantCount();
          this.getMyProjectCount();
          this.getAllCount();
          this.getChart();
          // this.getCarbonFootprint();
          this.getOneTimeOrderHistory();
          this.GetCartDetailsData();
          this.GetCurrencyData();
        }
      });
    }
    // else{
    //   this.getCarbonFootprint();
    // }
  };

  async componentWillUnmount() {
    super.componentWillUnmount();
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
        // localStorage.clear();
        // setTimeout(() => {
        //   this.props.history.push({
        //     pathname:"/login",
        //     state:"Business"
        //   });
        // }, 2000);
        return;
      }

      if (responseJson && responseJson.data) {
        if (apiRequestCallId === this.getBasicApiCallId) {
          localStorage.setItem("UserDetails", JSON.stringify(responseJson.data.attributes));
        }
        if (apiRequestCallId === this.getTreesPlantCountAPICallID) {
          this.getTreesPlantCountSuccessCallBack(responseJson);
        }
        if (apiRequestCallId === this.getProjectCountAPICallID) {
          this.getProjectCountSuccessCallBack(responseJson);
        }
        if (apiRequestCallId === this.getAllCountAPICallID) {
          localStorage.setItem("total_impact",JSON.stringify(responseJson?.data[0]?.your_impact_total))
          this.getAllCountSuccessCallBack(responseJson);
        }
        if (apiRequestCallId === this.getCarbonFootprintAPICallID) {
          this.getCarbonFootprintSuccessCallBack(responseJson);
        }
        if (apiRequestCallId === this.getChartAPICallID) {
          this.getChartSuccessCallBack(responseJson);
        }
        if (apiRequestCallId === this.apiGetCartDetails) {
          localStorage.setItem(
            "cart_item",
            responseJson.data.attributes.total_item
          );
          this.props.history.replace("/business/dashboard");
        }
        if (apiRequestCallId === this.apiGetCurrencyConversion) {
          localStorage.setItem(
            "currency_conversion",
            JSON.stringify(responseJson?.data[0])
          );
        }
        if (apiRequestCallId === this.getOneTimeOrderHistoryAPICallID) {
          if (responseJson !== null && responseJson.data.length > 0) {
            this.setState({ indOrderHistoryOneTime: responseJson });
          } else {
            this.setState({ indOrderHistoryOneTime: [] });
          }
        }
      } else if (responseJson && responseJson.errors) {
        if (apiRequestCallId === this.getTreesPlantCountAPICallID) {
          this.getTreesPlantCountFailureCallBack(responseJson);
        }
        if (apiRequestCallId === this.getProjectCountAPICallID) {
          this.getProjectCountFailureCallBack(responseJson);
        }
        if (apiRequestCallId === this.getAllCountAPICallID) {
          this.getAllCountFailureCallBack(responseJson);
        }
        if (apiRequestCallId === this.getCarbonFootprintAPICallID) {
          this.getCarbonFootprintFailureCallBack(responseJson);
        }
        if (apiRequestCallId === this.getChartAPICallID) {

          this.getChartFailureCallBack(responseJson);
        }
        if (apiRequestCallId === this.apiGetCartDetails) {
          // MESSAGE.error(responseJson.errors[0].token.toString(), 2);
          // localStorage.clear();
          // setTimeout(() => {
          //   this.props.history.push({
          //     pathname:"/login",
          //     state:"Business"
          //   });
          // }, 2000);
        }
      } else if (errorReponse) {
        window.notify([{ type: "error", message: "errorReponse" }]);
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

  getChart = async () => {
    const params =
      this.state.filterOffsetGraph === "All"
        ? configJSON.getChartAPIEndPoint
        : configJSON.getChartAPIEndPoint +
        `?duration=${this.state.filterOffsetGraph}`;

    this.getChartAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: params,
    });
  };

  getTreesPlantCount = async () => {
    this.getTreesPlantCountAPICallID = await this.apiCall({
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

  getAllCount = async () => {
    this.getAllCountAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getAllCountAPIEndPoint,
    });
  };

  getCarbonFootprint = async () => {
    const Role =
      window.location.pathname === "/business/dashboard" ? "bussiness" : null;
    this.getCarbonFootprintAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: configJSON.getCarbonFootprintAPIEndPoint + `?role_type=${Role}`,
    });
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

  getChartSuccessCallBack = async (res: any) => {

    const recent_project_destribution= res.data?.recent_project_destribution.filter((item:any)=>  item?.type!="Agroforestry" && item?.type!="Miyawaki"
    )
    const project_destribution= res.data?.project_destribution.filter((item:any)=>  item?.type!="Agroforestry" && item?.type!="Miyawaki"
    )

    const sum = project_destribution.reduce((accumulator: any, object: any) => {
      return accumulator + object.value;
    }, 0);

    const tempArrayRecent = [["", ""]];
    recent_project_destribution?.map((item: any) => {
      tempArrayRecent.push([item.type, item.value]);
    });

    const tempDataRecent = recent_project_destribution?.filter((item: any) => item?.type != "Agroforestry" && item?.type != "Miyawaki"
    )

    const sumRecent = tempDataRecent?.reduce(
      (accumulator: any, object: any) => {
        return accumulator + object.value;
      },
      0
    );

    const tempArray = [["", ""]];
    project_destribution.map((item: any) => {
      tempArray.push([item.type, item.value]);
    });

    this.setState({
      currency_symbol_chart: res?.data?.currency_symbol,
      chartProejectDistribution: tempArray,
      chartImpactOffsetType:
        this.state.filterOffsetGraph !== "All"
          ? res.data.recent_impact_offset_type
          : res.data.impact_offset_type,
      sumOfChartProejectDistribution: sum,
      chartProejectDistributionRecent: tempArrayRecent,
      sumOfChartProejectDistributionRecent: sumRecent,
    });
  };

  getChartFailureCallBack = (error: any) => {
    // MESSAGE.error(error.errors[0].token.toString(), 2);
    // localStorage.clear();
    // setTimeout(() => {
    //   this.props.history.push("/");
    // }, 2000);
  };

  getCarbonFootprintFailureCallBack = (error: any) => {
    console.log("@@@ Get CarbonFootprint Failure CallBack ============", error);
    // MESSAGE.error(error.errors[0].token.toString(), 2);
    // localStorage.clear();
    // setTimeout(() => {
    //   this.props.history.push("/");
    // }, 2000);
  };

  getAllCountSuccessCallBack = async (res: any) => {
    console.log(
      "@@@ Get All Count Count Success CallBack ============",
      res.data
    );
    res.data.map((item: any) => {
      console.log("@@@item", item);
      this.setState({
        plant_trees: item.plant_trees,
        total_offset: item.total_offset,
        project_count: item.project_count,
        your_impact_total: item.your_impact_total,
        your_recent_impact_total: item.your_recent_impact_total,
      });
    });
  };

  getAllCountFailureCallBack = (error: any) => {
    console.log("@@@ Get All Count Failure CallBack ============", error);
    // MESSAGE.error(error.errors[0].token.toString(), 2);
    // localStorage.clear();
    // setTimeout(() => {
    //   this.props.history.push("/");
    // }, 2000);
  };

  getTreesPlantCountSuccessCallBack = async (res: any) => {
    console.log("@@@ Get Trees Plant Count Success CallBack ============", res);
    this.setState({ plantTreeList: res.data });
  };

  getOneTimeOrderHistory = async () => {
    const queryParams =
      this.state.selectOrder === "All"
        ? `?product_type=One time&per=5&page=${this.state.indOrderNext}`
        : `?duration=${
          this.state.selectOrder
      } &product_type=One time&per=5&page=${this.state.indOrderNext}`;
    const queryParamsForSub =
      this.state.selectOrder === "All"
        ? `?product_type=Subscription&per=5&page=${this.state.indOrderNextSub}`
        : `?duration=${
          this.state.selectOrder
        } &product_type=Subscription&per=5&page=${
          this.state.indOrderNextSub
      }`;

    this.getOneTimeOrderHistoryAPICallID = await this.apiCall({
      contentType: configJSON.ApiContentType,
      method: configJSON.apiGetMethod,
      endPoint: this.state.orderHistoryOneTime
        ? configJSON.getOrderHistoryEndPointUrl + queryParams
        : configJSON.getOrderHistoryEndPointUrl + queryParamsForSub,
    });
  };
  handlePageClick = (e: any) => {
    let event = e.selected;

    this.setState({ indOrderNext: event + 1 }, () =>
      this.getOneTimeOrderHistory()
    );
  };
  handlePageClickForSub = (e: any) => {
    let event = e.selected;

    this.setState({ indOrderNextSub: event + 1 }, () =>
      this.getOneTimeOrderHistory()
    );
  };

  getTreesPlantCountFailureCallBack = (error: any) => {
    console.log(
      "@@@ Get Trees Plant Count Failure CallBack ============",
      error
    );
    // MESSAGE.error(error.errors[0].token.toString(), 2);
    // localStorage.clear();
    // setTimeout(() => {
    //   this.props.history.push("/");
    // }, 2000);
  };

  onSelectClimateProjectCell = (item: any) => {
    let listOfClimateproject = this.state.myProjectList;
    listOfClimateproject.map((element: any) => {
      if (element.id === item.id) {
        element.isSelected = !element.isSelected;
      } else {
        element.isSelected = false;
      }
      return element;
    });
    this.setState({ myProjectList: listOfClimateproject });
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

  getProjectCountSuccessCallBack = (res: any) => {
    console.log("@@@ Get  Project Count Success CallBack ============", res);
    res.data.map((val: any) => {
      val["isSelected"] = false;
    });
    this.setState({ myProjectList: res.data });
  };

  getProjectCountFailureCallBack = (error: any) => {
    console.log("@@@ Get  Project Count Failure CallBack ============", error);
    // MESSAGE.error(error.errors[0].token.toString(), 2);
    // localStorage.clear();
    // setTimeout(() => {
    //   this.props.history.push("/");
    // }, 2000);
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
