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
    data: any;
    layout: any;
    investedProjectsData: any;
    arrayseries: any;
    offsetHourly: any;
    total_amount: any;
    total_amount_monthly: any
    total_amount_weekly: any
    total_amount_Hourly: any;
    isOffset: any;
    series2: any;
    amount: any;
}
interface SS {
    id: any;
}
export default class AnonymousDashboardController extends BlockComponent<
    Props,
    S,
    SS
> {
    apiLoginAccount: string = "";

    constructor(props: Props) {
        super(props);
        this.state = this.getEmptyState();
        this.onHandleLogout = this.onHandleLogout.bind(this);
    }
    async componentDidMount() {
        super.componentDidMount();
        this.getHandleOffsetYearly();
        this.getHandleOffsetHourly();
        this.getHandleOffsetWeekly();
        this.getHandleOffsetMonthly();
        this.getAllInvestedProject();
        setTimeout(() => {
            this.setState({
                isOffset: false
            })
        }, 1000)
    }
    getEmptyState = () => ({
        amount: "",
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
            name: 'series-1',
            data: []
        }],
        results: [],
        data: [
            {
                values: [19, 26, 55],
                labels: ['Residential', 'Non-Residential', 'Utility'],
                type: 'pie'
            }
        ],
        layout: {
            height: 400,
            width: 500
        },
        options: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: ["jan", "feb", "mar", "aprl", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"]
            }
        },
        series: [{
            name: 'series-1',
            data: []
        }],
        series2: [{
            name: 'series-1',
            data: []
        }],
        isOffset: true
    });
    getAllInvestedProject() {
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";
        const data1 = {
            partner_id: `${P_id.id}`
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl + configJSON.investedProjectsEndPointURL,
            data: data1,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                // console.log(res.data.partnerProjectDetails)
                this.setState({
                    investedProjectsData: res.data.partnerProjectDetails
                })
            })
            .catch((err: any) => {

            })
    }
    getHandleOffsetYearly() {
        const data = {
            anonymous_userid: "rufidui21213"
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl + configJSON.OffsetYearlyAnonymousEndPointURL,
            data: data,
            headers: { "Content-Type": configJSON.formUrlenCodedContentType },

        })
            .then((res: any) => {
                // console.log(res,"fghgjhjuuuu")
                this.setState({
                    amount: res.data.result[0].amount

                })
                //  console.log(res.data.result[0].amount,"pppppppppppp")
            })

            .catch((err: any) => {
                console.log({ err })
            })
    }
    getHandleOffsetHourly() {
        const data = {
            "anonymous_userid": "rufidui21213",
            "start_date": "2023-06-02"
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl + configJSON.OffsetHourlyAnonymousEndPointURL,
            data: data,
            headers: { "Content-Type": configJSON.formUrlenCodedContentType },
        })
            .then((res: any) => {
                console.log(res, "fghgjhjzzz")
                this.setState({
                    amount: res.data.result[0].amount,
                    offsetHourly: res.data.offsetHourly
                })
                console.log(res.data.offsetHourly, "zzzzzzzzz")
            })

            .catch((err: any) => {
                console.log({ err })
            })

    }
    getHandleOffsetWeekly() {
        const data = {
            "anonymous_userid": "rufidui21213"
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl + configJSON.OffsetWeeklyAnonymousEndPointURL,
            data: data,
            headers: { "Content-Type": configJSON.formUrlenCodedContentType },

        })
            .then((res: any) => {
                //console.log(res,"fghgjhj")
                this.setState({
                    amount: res.data.result[0].amount,
                    offsetWeekly: res.data.offsetWeekly
                })
                console.log(res.data.offsetWeekly, "offsetWeekly")
            })

            .catch((err: any) => {
                console.log({ err })
            })
    }
    getHandleOffsetMonthly() {
        const data = {
            "anonymous_userid": "rufidui21213"
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl + configJSON.getMyFootprintMonthlyAnonymousPointURL,
            data: data,
            headers: { "Content-Type": configJSON.formUrlenCodedContentType },
        })
            .then((res: any) => {
                console.log(res, "qwqwwwwww")
                this.setState({
                    offsetMonthly: res.data.monthlyCount[0].offset,
                    total_amount_monthly: res.data.total_amount,
                })
                console.log(res.data.monthlyCount[0].offset, "jkjlkkkk")

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
                            this.state.series2[0].data.push(0),
                            console.log(this.state.series2[0].data, "yhjjhjjjjj")
                    }

                    else {
                        for (var j = 0; j < arr.length; j++) {
                            if (arr[j] == i) {
                                this.state.series[0].data.length !== array[array.length - 1] &&
                                    this.state.series[0].data.push(+ parseInt(res.data.monthlyCount[j].offset)),
                                    this.state.series2[0].data.length !== array[array.length - 1] &&
                                    this.state.series2[0].data.push(+ parseInt(res.data.monthlyCount[j].amount)),
                                    console.log(res.data.monthlyCount[j].amount, "aaaaaaaaaa")
                            }
                        }
                    }
                }
                console.log(res.data.monthlyCount[0].amount, "fdhfgjghfjjjjj")
                console.log(this.state.series2[0].data, "thtyjyhjkkqqqqq")
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }

    onHandleLogout() {
        localStorage.clear()
        this.props.history.push("/api/partner/login")
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

}