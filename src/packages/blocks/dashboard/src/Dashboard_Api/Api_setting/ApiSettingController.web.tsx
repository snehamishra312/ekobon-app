import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import { message as MESSAGE } from "antd";
import axios from "axios";
import moment from 'moment'

export const configJSON = require("../../config");

export interface Props {
    history: any;
}
interface S {
    monthlyData: any;
    hourlyData: any
    layout: any;
    totalYearApi: any;
    totalWeeklyApi: any;
    totalHourlyApi: any;
    totalMonthApi: any;
    weeklyData: any;
    weeklyGraph3: any;
    hourlyGraph2: any;
    hourlyGraph1: any;
    options: any;
    series: any;
    hourlyOptions: any;
    hourlySeries: any;
    monthlyOptions: any;
    monthlySeries: any;
    totalDailyApi: any;
    optionss: any;

}

interface SS {
    id: any;
}

export default class ApiSettingController extends BlockComponent<
    Props,
    S,
    SS
> {
    apiLoginAccount: string = "";

    constructor(props: Props) {
        super(props);
        this.state = this.getEmptyState();
    }

    async componentDidMount() {
        super.componentDidMount();
        this.getYearlyApiResponseDetails();
        this.getHourlyApiResponseDetails();
        this.getWeeklyApiResponseDetails();
        this.getMonthlyApiResponseDetails();
        this.getDailyApiResponseDetails();
        setTimeout(() => {
            this.setState({
                weeklyGraph3: false,
                hourlyGraph2: false,
                hourlyGraph1: false,
            })
        }, 1000)
    }
    getEmptyState = () => ({
        optionss: {
            series: [{
                name: 'Website Blog',
                type: 'column',
                data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
            }, {
                name: 'Social Media',
                type: 'line',
                data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                },
                stroke: {
                    width: [0, 4]
                },
                title: {
                    text: 'Traffic Sources'
                },
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]
                },
                labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
                xaxis: {
                    type: 'datetime'
                },
                yaxis: [{
                    title: {
                        text: 'Website Blog',
                    },

                }, {
                    opposite: true,
                    title: {
                        text: 'Social Media'
                    }
                }]
            }
        },
        options: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: []
            }
        },
        series: [{
            name: 'series-1',
            data: []
        }],
        hourlyOptions: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: []
            }
        },
        hourlySeries: [{
            name: 'series-1',
            data: []
        }],
        monthlyOptions: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: []
            }
        },
        monthlySeries: [{
            name: 'series-1',
            data: []
        }],
        monthlyData: [{
            name: 'bar chart example',
            type: 'bar',
            x: [],
            y: [],
        }],
        weeklyData: [{
            name: 'bar chart example',
            type: 'bar',
            x: [],
            y: [],
        }],
        layout: {
            title: 'Api Detail',
            xaxis: {
                title: 'Api response'
            },
        },
        hourlyData: [{
            name: 'bar chart example',
            type: 'bar',
            x: [],
            y: [],
        }],
        totalYearApi: [],
        totalWeeklyApi: [],
        totalHourlyApi: [],
        totalMonthApi: "",
        weeklyGraph3: true,
        hourlyGraph2: true,
        hourlyGraph1: true,
        totalDailyApi: "",
    });

    getYearlyApiResponseDetails() {
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";
        const data = {
            partner_id: `${P_id.id}`
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.getApiResponseDetailEndPointURL,
            data: data,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                this.setState({
                    totalYearApi: res.data.result
                })

            })
            .catch((err: any) => {
                console.log({ err })
            })
    }
    getMonthlyApiResponseDetails() {
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";
        const val = new Date()
        const date = moment(val).format("YYYY/MM/DD")
        const Date2 = moment(val).format("MM")
        const Date3 = moment(val).format("DD")
        const Date4 = moment(val).format("YYYY")
        const second_date = (parseInt(Date2) - 1) + "/" + Date3 + "/" + Date4
        const data1 = {
            partner_id: `${P_id.id}`,
            start_date: second_date,
            end_date: date
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.getMonthlyApiResponseEndPointURL,
            data: data1,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                this.setState({
                    totalMonthApi: res.data.result[0].hit_count
                })
                const arr: any[] = [];
                const vall: any[] = [];
                res.data.result.map((item: any) => (
                    arr.push(item.month_now),
                    vall.push(item.hour_now)
                ))
                const array = arr.sort(function (a, b) { return a - b });
                for (var i = 1; i <= array[array.length - 1]; i++) {
                    if (this.state.monthlySeries[0].data.length !== array[array.length - 1]) {
                        this.state.monthlyOptions.xaxis.categories.push(i)
                        if (!arr.includes(i)) {
                            this.state.monthlySeries[0].data.push(0)
                        }
                        else {
                            for (var j = 0; j < arr.length; j++) {
                                if (arr[j] == i) {
                                    this.state.monthlySeries[0].data.push(+ parseInt(res.data.result[j].hit_count))
                                }
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
                console.log(res.data.result, "============>>>>>>>>"),
                    console.log(this.state.monthlySeries[0].data, "============>>>>>>>>")
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }
    getWeeklyApiResponseDetails() {
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";
        const data = {
            partner_id: `${P_id.id}`,
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.getWeeklyApiResponseEndPointURL,
            data: data,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                this.setState({
                    totalWeeklyApi: res.data.result
                })
                const arr: any[] = [];
                const vall: any[] = [];
                res.data.result.map((item: any) => (
                    arr.push(item.week_now),
                    vall.push(item.week_now)
                ))
                const array = arr.sort(function (a, b) { return a - b });
                for (var i = 1; i <= array[array.length - 1]; i++) {
                    if (this.state.series[0].data.length !== array[array.length - 1]) {
                        this.state.options.xaxis.categories.push(i)
                        if (!arr.includes(i)) {
                            this.state.series[0].data.push(0)
                        }
                        else {
                            for (var j = 0; j < arr.length; j++) {
                                if (vall[j] == i) {
                                    this.state.series[0].data.push(+ parseInt(res.data.result[j].hit_count))
                                }
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }
    getHourlyApiResponseDetails() {
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";
        const val = new Date()
        const date = moment(val).format("YYYY/MM/DD")
        const data = {
            partner_id: `${P_id.id}`,
            start_date: date,
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.getHourlyApiResponseEndPointURL,
            data: data,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                this.setState({
                    totalHourlyApi: res.data.result
                })
                const arr: any[] = [];
                const vall: any[] = [];
                res.data.result.map((item: any) => (
                    arr.push(item.hour_now),
                    vall.push(item.hour_now)
                ))
                const array = arr.sort(function (a, b) { return a - b });
                for (var i = 1; i <= array[array.length - 1]; i++) {
                    if (this.state.hourlySeries[0].data.length !== array[array.length - 1]) {
                        this.state.hourlyOptions.xaxis.categories.push(i)
                        if (!arr.includes(i)) {
                            this.state.hourlySeries[0].data.push(0)
                        }
                        else {
                            for (var j = 0; j < arr.length; j++) {
                                if (vall[j] == i) {
                                    this.state.hourlySeries[0].data.push(res.data.result[j].hit_count)
                                    break;
                                }
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }

    onChangeWeeklyGraph(val: any) {
        if (val == "Weekly") {
            this.setState({
                weeklyGraph3: false
            })
        }
        else if (val == "Monthly") {
            this.setState({
                weeklyGraph3: true
            })
        }
    }

    onHanldeClickOnToggle(val: any) {
        if (val == "Hourly") {
            this.setState({
                hourlyGraph2: false
            })
        }
        else if (val == "Monthly") {
            this.setState({
                hourlyGraph2: true
            })
        }
    }
    onClickonHourlygraph(val: any) {
        if (val == "Hourly") {
            this.setState({
                hourlyGraph1: false
            })
        }
        else if (val == "Weekly") {
            this.setState({
                hourlyGraph1: true
            })
        }
    }
    getDailyApiResponseDetails() {
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";

        const val = new Date()
        const date = moment(val).format("YYYY/MM/DD")

        const data = {
            partner_id: `${P_id.id}`,
            start_date: date,
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.getDailyApiResponseEndPointURL,
            data: data,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                this.setState({
                    totalDailyApi: res.data.result[0].hit_count
                })
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }
}
