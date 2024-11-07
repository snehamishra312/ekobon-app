import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import { message as MESSAGE } from "antd";
import axios from "axios";
import moment from 'moment';
export const configJSON = require("../../config");

export interface Props {
  history: any;
}
interface S {
  options: any
  series: any;
  monthOffset: any
  billingHistoryData: any;
  totalMonthOffset: any;
  isOffset: any;
  arrayseries: any;
  totalOffset: any;
}
interface SS {
  id: any;
}
export default class ClimateActionController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiLoginAccount: string = "";

  constructor(props: Props) {
    super(props);
    this.state = this.getEmptyState();
    this.onHandleOffset = this.onHandleOffset.bind(this);
  }
  async componentDidMount() {
    super.componentDidMount();
    this.getBankClimateActionCurrent();
    setTimeout(() => {
      this.setState({
        isOffset: false
      })
    }, 1000)
  }
  getEmptyState = () => ({
    totalOffset: '',
    series: [{
      data: []
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        events: {

        }
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [],
        labels: {
          style: {
            fontSize: '12px'
          }
        }
      }
    },
    monthOffset: [],
    billingHistoryData: [],
    totalMonthOffset: [],
    arrayseries: [],
    isOffset: true,
  });

  onHandleSubmit = (e: any) => {
    e.preventDefault();
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
        console.log({ res })
        let val = 0;
        res.data.billingHistoryDetails.map((item: any) => (
          val = parseInt(`${val}`) + parseInt(item?.offset),
          res.data.billingHistoryDetails.length !== this.state.series[0].data.length &&
          this.state.series[0].data.push(+ parseInt(item.offset)),
          res.data.billingHistoryDetails.length !== this.state.options.xaxis.categories.length &&
          this.state.options.xaxis.categories.push(item.offset_type),
          this.setState({
            totalOffset: val
          })
        ))
      })
      .catch((err: any) => {
        console.log({ err })
      })
  }

  onHandleOffset() {
    this.props.history.push("/api/offset/detail")
  }

}
