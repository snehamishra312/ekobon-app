import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import { message as MESSAGE } from "antd";
import axios from "axios";
export const configJSON = require("../../config");
import moment from 'moment';
export interface Props {
  history: any;
}
interface S {
  series: any;
  series2: any;
  series3: any;
  options: any,
  options3: any,
  billingHistoryData: any;
  monthOffset: any;
  totalMonthOffset: any;
  totalOffsetFootprint: any;
  arrayseries: any;
  totalMonthValue: any;
  filterMonthData: any;
  valOfFilterMap: any;
  // New data value
  currentMonthValue: any;
  bankEquivalentValue: any;
  isGraphShow: any;
  options2: any;
  arrayseries2: any;
  arrayseries3: any;
}
interface SS {
  id: any;
}
export default class TrackmyFootprintController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiLoginAccount: string = "";

  constructor(props: Props) {
    super(props);
    this.state = this.getEmptyState();
    this.onHandleLogout = this.onHandleLogout.bind(this);
    this.handleClickMonthGraph = this.handleClickMonthGraph.bind(this);
  }
  async componentDidMount() {
    super.componentDidMount();
    this.getBillingHistory();
    this.getBankClimateAction();
    this.getBankClimateActionCurrent();
    this.bankEquivalentData();
    setTimeout(() => {
      this.setState({
        isGraphShow: true
      })
    }, 1000);
    const month_value = new Date();
    const month = month_value.getMonth();
    if (month == 0) {
      this.setState({
        filterMonthData: ['Nov', 'Dec', 'Jan']
      })
    }
    else if (month == 1) {
      this.setState({
        filterMonthData: ['Dec', 'Jan', 'Feb']
      })
    }
    else {
      for (var i = month - 2; i <= month; i++) {
        this.state.filterMonthData.push(this.state.totalMonthValue[i])
      }
    }
    this.setState({
      valOfFilterMap: this.state.totalMonthValue[month]
    })
  }
  getEmptyState = () => ({
    filterMonthData: [],
    isGraphShow: false,
    currentMonthValue: [],
    bankEquivalentValue: [],
    totalMonthValue: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [],
    series2: [],
    series3: [],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ["Food", "Shopping", "Travel", "Transport", "Energy and Utilities"],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
    options2: {
      chart: {
        type: 'donut',
      },
      labels: ["Food", "Shopping", "Travel", "Transport", "Energy and Utilities"],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
    options3: {
      chart: {
        type: 'donut',
      },
      labels: ["Food", "Shopping", "Travel", "Transport", "Energy and Utilities"],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
    billingHistoryData: [],
    monthOffset: [],
    totalMonthOffset: '',
    totalOffsetFootprint: ' ',
    setGraph: [],
    arrayseries: [],
    arrayseries2: [],
    arrayseries3: [],
    valOfFilterMap: ""
  });

  handleClickMonthGraph(val: any) {
    this.setState({
      valOfFilterMap: val
    })
  }
  getBillingHistory() {
    const data = {
      bank_id: `${2235}`
    }
    axios({
      method: configJSON.apiPostMethod,
      url: configJSON.baseUrl1 + configJSON.getBillingHistoryOfFootprint,
      data: data,
      headers: { "Content-Type": configJSON.dashboarContentType },
    })
      .then((res: any) => {
        const date = new Date();
        const month = date.getMonth();
        let val = 0;
        const data = res.data.billingHistoryDetails.map((item: any) => (
          month == moment(item.purchase_date).month() &&
          this.setState({
            billingHistoryData: res.data.billingHistoryDetails,
          })
        ))
      })
      .catch((err: any) => {
        console.log({ err })
      })
  }
  getBankClimateAction() {
    const data = {
      bank_id: `${2235}`
    }
    axios({
      method: configJSON.apiPostMethod,
      url: configJSON.baseUrl1 + configJSON.getBankmyClimateAction,
      data: data,
      headers: { "Content-Type": configJSON.dashboarContentType },
    })
      .then((res: any) => {
        const arr = res?.data?.billingHistoryDetails[1]?.bank_category?.map((item: any) => (
          res?.data?.billingHistoryDetails?.length !== this.state?.arrayseries2?.length &&
          this.state?.arrayseries2?.push(+ parseInt(item?.offset)),
          this.setState({
            series2: this.state.arrayseries2,
          })
        ))
        const arr1 = res?.data?.billingHistoryDetails[0]?.bank_category?.map((item: any) => (
          res?.data?.billingHistoryDetails?.length !== this.state?.arrayseries3?.length &&
          this.state?.arrayseries3?.push(+ parseInt(item?.offset)),
          this.setState({
            series3: this.state.arrayseries3,
          })
        ))
      })
      .catch((err: any) => {
        console.log({ err })
      })
  }

  getBankClimateActionCurrent() {
    const data = {
      bank_id: `${2235}`
    }
    axios({
      method: configJSON.apiPostMethod,
      url: configJSON.baseUrl1 + configJSON.getBankmyClimateActionCurrentMonth,
      data: data,
      headers: { "Content-Type": configJSON.dashboarContentType },
    })
      .then((res: any) => {
        let val = 0;
        res?.data?.billingHistoryDetails?.map((item: any) => (
          val = parseInt(`${val}`) + parseInt(item?.offset),
          res.data.billingHistoryDetails.length !== this.state.arrayseries.length &&
          this.state.arrayseries.push(+ parseInt(item?.offset)),
          this.setState({
            totalMonthOffset: val,
            series: this.state.arrayseries,
          })
        ));
        this.setState({
          currentMonthValue: res?.data?.billingHistoryDetails
        })
      })
      .catch((err: any) => {
        console.log({ err })
      })
  }

  bankEquivalentData() {
    const data = {
      bank_id: `${2235}`
    }
    axios({
      method: configJSON.apiPostMethod,
      url: configJSON.baseUrl1 + configJSON.bankEquivalentToEndPointURL,
      data: data,
      headers: { "Content-Type": configJSON.dashboarContentType },
    })
      .then((res: any) => {
        this.setState({
          bankEquivalentValue: res?.data?.billingHistoryDetails
        })
      })
      .catch((err: any) => {
        console.log({ err })
      })
  }

  onHandleLogout() {
    localStorage.clear()
    this.props.history.push("/api/partner/login")
  }
}

