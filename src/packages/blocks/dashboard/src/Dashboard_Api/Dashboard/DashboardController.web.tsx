import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";

import axios from "axios";
export const configJSON = require("../../config");

export interface Props {
    history: any;
}
interface S {
    offsetyearly: any;
    yearlySum: any;
    results: any
    offsetMonthly: any;
    offsetWeekly: any;
    start_date: any;
    hour_now: any;
    end_date: any;
    week_now: any;
    options: any;
    series: any;
    investedProjectsData: any;
    arrayseries: any;
    offsetHourly: any;
    total_amount: any;
    total_amount_monthly: any
    total_amount_weekly: any
    total_amount_Hourly: any;
    isOffset: any;
    series2: any;
    series1: any;
    options1: any;
    isShowGraph: any;
    arrayseries2: any;
    isDropDownShow: any;
}
interface SS {
    id: any;
}
export default class DashboardController extends BlockComponent<
    Props,
    S,
    SS
> {
    apiLoginAccount: string = "";

    constructor(props: Props) {
        super(props);
        this.state = this.getEmptyState();
        this.onHandleLogout = this.onHandleLogout.bind(this);
        this.getOrderHistoryData = this.getOrderHistoryData.bind(this);
        this.onClickDropdown = this.onClickDropdown.bind(this);
    }
    async componentDidMount() {
        super.componentDidMount();
        this.getHandleOffsetYearly();
        this.getHandleOffsetHourly();
        this.getHandleOffsetWeekly();
        this.getHandleOffsetMonthly()
        this.getAllInvestedProject();
        this.getOrderHistoryData();
        setTimeout(() => {
            this.setState({
                isOffset: false,
                isShowGraph: true
            })
        }, 1000)
    }

    getEmptyState = () => ({
        isDropDownShow: false,
        offsetyearly: "",
        total_amount_monthly: "",
        total_amount_weekly: "",
        total_amount: '',
        total_amount_Hourly: ' ',
        offsetHourly: "",
        yearlySum: "",
        offsetMonthly: "",
        offsetWeekly: "",
        start_date: "2023-06-02",
        hour_now: "",
        end_date: "2023-06-26",
        week_now: "",
        investedProjectsData: [],
        arrayseries: [{
            data: []
        }],
        arrayseries2: [],
        results: [],
        options: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: ["jan", "feb", "mar", "aprl", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"]
            }
        },
        options1: {
            labels: [],
            responsive: [{
                options: {
                    chart: {
                        width: 400,
                        height: 500
                    }
                }
            }]
        },
        series1: [],
        series: [{
            data: []
        }],
        series2: [{
            data: []
        }],
        isOffset: true,
        isShowGraph: false,
    });

    onClickDropdown() {
        if (this?.state?.isDropDownShow == true) {
            this.setState({
                isDropDownShow: false
            })
        } else {
            this.setState({
                isDropDownShow: true
            })
        }
    }

    getAllInvestedProject() {
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";
        const data1 = {
            partner_id: `${P_id.id}`
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.investedProjectsEndPointURL,
            data: data1,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                console.log(res.data.partnerProjectDetails, "ADFJKHNADJSFHAJKSHFKJSH")
                this.setState({
                    investedProjectsData: res.data.partnerProjectDetails
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

    getHandleOffsetYearly() {
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";
        const data2 = {
            partner_id: `${P_id.id}`
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.dashboardPointURL,
            data: data2,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                this.setState({
                    offsetyearly: res.data.yearlySum,
                    total_amount: res.data.total_amount
                })
                console.log(res.data.total_amount, "pppp")
            })

            .catch((err: any) => {
                console.log({ err })
            })
    }
    getHandleOffsetHourly() {
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";
        const data3 = {
            partner_id: `${P_id.id}`,
            start_date: this.state.start_date
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.dashboard2PointURL,
            data: data3,
            headers: { "Content-Type": configJSON.dashboarContentType }
        })
            .then((res: any) => {
                console.log(res)
                this.setState({
                    //  hour_now: + parseInt(res.data.result[0].hour_now),
                    offsetHourly: res.data.total_amount,
                    total_amount_Hourly: res.data.offsetHourly
                })
                console.log(res.data.offsetHourly, "gffjghkhjkkk")
            })
    }
    getHandleOffsetWeekly() {
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";
        const data1 = {
            partner_id: `${P_id.id}`,
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.dashboard3PointURL,
            data: data1,
            headers: { "Content-Type": configJSON.dashboarContentType }
        })
            .then((res) => {
                console.log(res)
                this.setState({
                    week_now: res.data.result[0].week_now,
                    offsetWeekly: res.data.total_amount,
                    total_amount_weekly: res.data.total_amount
                })
            })

            .catch((err: any) => {
                console.log(err)
            })
    }
    getHandleOffsetMonthly() {
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";
        const data2 = {
            partner_id: `${P_id.id}`
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.getmyFootPrintMonthlyEndPointURL,
            data: data2,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                this.setState({
                    offsetMonthly: res.data.monthlySum,
                    total_amount_monthly: res.data.total_amount,
                })
                const arr: any[] = [];
                res.data.monthlyCount.map((item: any) => (
                    arr.push(+ parseInt(item.date_format))
                ))
                console.log(typeof arr[0])
                const array = arr.sort(function (a, b) { return a - b })
                for (var i = 1; i <= array[array.length - 1]; i++) {
                    if (!arr.includes(i)) {
                        this.state.series[0].data.length !== array[array.length - 1] &&
                            this.state.series[0].data.push(0),
                            this.state.series2[0].data.length !== array[array.length - 1] &&
                            this.state.series2[0].data.push(0)
                    }
                    else {
                        for (var j = 0; j < arr.length; j++) {
                            if (arr[j] == i) {
                                this.state.series[0].data.length !== array[array.length - 1] &&
                                    this.state.series[0].data.push(+ parseInt(res.data.monthlyCount[j].offset)),
                                    this.state.series2[0].data.length !== array[array.length - 1] &&
                                    this.state.series2[0].data.push(+ parseInt(res.data.monthlyCount[j].amount))
                            }
                        }
                    }
                }
                console.log(this.state.series[0].data, "fdhfgjghfjjjjj")
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }
    onHandleOffsetAmountClick(val: any) {
        if (val == "carbon amount") {
            this.setState({
                isOffset: true,
            })
        }
        else if (val == "carbon offset") {
            this.setState({
                isOffset: false
            })
        }
    }

    getOrderHistoryData() {
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";
        const data = {
            partner_id: `${P_id.id}`
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.partnerProjectsDistributionEndPointURL,
            data: data,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                console.log(res?.data?.projectsDistribution, "asdfadsfasdfaadsadsadsas")
                const arr = res?.data?.projectsDistribution?.map((item: any) => (
                    res?.data?.projectsDistribution?.length !== this.state?.arrayseries2?.length &&
                    this.state?.arrayseries2?.push(+ parseInt(item?.total_offset)),
                    res?.data?.options?.labels?.length !== this.state?.arrayseries2?.length &&
                    this.state.options1?.labels?.push(item?.project_type),
                    this.setState({
                        series1: this.state.arrayseries2,
                    })
                ))
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }

}