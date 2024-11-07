import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import { message as MESSAGE } from "antd";
import axios from "axios";
import { isThisTypeNode } from "typescript";
export const configJSON = require("../../config");

export interface Props {
    history: any;
}
interface S {
    monthlyOffset1: any;
    monthlyOffset2: any;
    allMonthValue: any;
    monthValue1: any;
    monthValue2: any;
    monthAmount1: any;
    totalOffsetAmount1: any;
    totalOffsetAmount2: any;
    monthAmount2: any;
    currentYear: any;
    rangeValue1: any;
    rangeValue: any;
}
interface SS {
    id: any;
}
export default class OffsetDetailController extends BlockComponent<
    Props,
    S,
    SS
> {
    constructor(props: Props) {
        super(props);
        this.state = this.getEmptyState();
        this.onHandleLogout = this.onHandleLogout.bind(this);
        this.onHandleClickOn1Next = this.onHandleClickOn1Next.bind(this);
        this.onHandleClickOn2Next = this.onHandleClickOn2Next.bind(this);
        this.onChangeRangeChange1 = this.onChangeRangeChange1.bind(this);
        this.onChangeRangeChange = this.onChangeRangeChange.bind(this);
    }

    async componentDidMount() {
        super.componentDidMount();
        this.getBankClimateAction()
        const date = new Date().getFullYear();
        this.setState({
            currentYear: date
        })
        var length = 12,
            charset = "0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        localStorage.setItem("order_id", JSON.stringify(`ZPLiveO${retVal}`))
    }

    getEmptyState = () => ({
        monthlyOffset1: "",
        rangeValue1: 2,
        rangeValue: 2,
        monthlyOffset2: "",
        allMonthValue: [" ", "January", "february", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthValue1: "",
        monthAmount1: "",
        monthAmount2: "",
        monthValue2: "",
        currentYear: "",
        totalOffsetAmount1: "",
        totalOffsetAmount2: "",
    });
    onHandleLogout() {
        localStorage.clear()
        this.props.history.push("/api/partner/login")
    }

    onChangeRangeChange(e: any) {
        this.setState({
            rangeValue: e.target.value
        })
    }
    onChangeRangeChange1(e: any) {
        this.setState({
            rangeValue1: e.target.value
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
                console.log(res?.data?.billingHistoryDetails)
                this.setState({
                    monthlyOffset1: res?.data?.billingHistoryDetails[2]?.total_offset,
                    monthlyOffset2: res?.data?.billingHistoryDetails[1]?.total_offset,
                    monthAmount1: res?.data?.billingHistoryDetails[2]?.total_amount,
                    monthAmount2: res?.data?.billingHistoryDetails[1]?.total_amount,
                    monthValue1: this.state.allMonthValue[res?.data?.billingHistoryDetails[2].date_format.slice(1)],
                    totalOffsetAmount1: res?.data?.billingHistoryDetails[2]?.final_total_amount,
                    totalOffsetAmount2: res?.data?.billingHistoryDetails[1]?.final_total_amount,
                    monthValue2: this.state.allMonthValue[res?.data?.billingHistoryDetails[1].date_format.slice(1)]
                })
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }

    onHandleClickOn1Next() {
        if (this.state.rangeValue == 1) {
            const rangeData = (this.state.monthAmount1 / 2)
            const finalData = (parseInt(`${rangeData}`) * 100);
            const order_id = localStorage.getItem("order_id");
            const id_order = order_id ? JSON.parse(order_id) : "";
            const data = {
                orderId: `${id_order}`,
                amount: `${finalData.toFixed(0)}`,
                bank_id: `${2235}`,
            }
            axios({
                method: configJSON.apiPostMethod,
                url: configJSON.baseUrl1 + configJSON.bankApiPaymentEndPointURL,
                data: data,
                headers: { "Content-Type": configJSON.dashboarContentType },
            })
                .then((res: any) => {
                    console.log(res?.data?.userinfo[0]?.url)
                    window.location.href = res?.data?.userinfo[0]?.url
                })
                .catch((err: any) => {
                    console.log({ err })
                })
        } else {
            const order_id = localStorage.getItem("order_id");
            const id_order = order_id ? JSON.parse(order_id) : "";
            const data = {
                orderId: `${id_order}`,
                amount: `${this.state.totalOffsetAmount1}`,
                bank_id: `${2235}`,
            }
            axios({
                method: configJSON.apiPostMethod,
                url: configJSON.baseUrl1 + configJSON.bankApiPaymentEndPointURL,
                data: data,
                headers: { "Content-Type": configJSON.dashboarContentType },
            })
                .then((res: any) => {
                    console.log(res?.data?.userinfo[0]?.url)
                    window.location.href = res?.data?.userinfo[0]?.url
                })
                .catch((err: any) => {
                    console.log({ err })
                })
        }
    }

    onHandleClickOn2Next() {
        console.log(this.state.rangeValue1)
        if (this.state.rangeValue1 == 1) {
            const rangeData = (this.state.monthAmount2 / 2)
            const finalData = parseInt(`${rangeData}`) * 100;
            const order_id = localStorage.getItem("order_id");
            const id_order = order_id ? JSON.parse(order_id) : "";
            const data = {
                orderId: `${id_order}`,
                amount: `${finalData.toFixed(0)}`,
                bank_id: `${2235}`,
            }
            axios({
                method: configJSON.apiPostMethod,
                url: configJSON.baseUrl1 + configJSON.bankApiPaymentEndPointURL,
                data: data,
                headers: { "Content-Type": configJSON.dashboarContentType },
            })
                .then((res: any) => {
                    console.log(res?.data?.userinfo[0]?.url)
                    window.location.href = res?.data?.userinfo[0]?.url
                })
                .catch((err: any) => {
                    console.log({ err })
                })
        } else {
            const order_id = localStorage.getItem("order_id");
            const id_order = order_id ? JSON.parse(order_id) : "";
            const data = {
                orderId: `${id_order}`,
                amount: `${this.state.totalOffsetAmount2}`,
                bank_id: `${2235}`,
            }
            axios({
                method: configJSON.apiPostMethod,
                url: configJSON.baseUrl1 + configJSON.bankApiPaymentEndPointURL,
                data: data,
                headers: { "Content-Type": configJSON.dashboarContentType },
            })
                .then((res: any) => {
                    console.log(res?.data?.userinfo[0]?.url)
                    window.location.href = res?.data?.userinfo[0]?.url
                })
                .catch((err: any) => {
                    console.log({ err })
                })
        }
    }
}
