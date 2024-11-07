import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import { message as MESSAGE } from "antd";
import axios from "axios";
export const configJSON = require("../../config");

export interface Props {
    history: any;
}

interface S {
    refcode: any;
    totalOffset: any;
    anonymous_userid1: any;
    offset1: any;
    offset_sub_type1: any;
    offset_type1: any;
    order_id1: any;
    partner_id1: any;
    transaction_id1: any;
    orderId: any;
    amount: any;
    buyeremail: any;
    buyerFirstName: any;
    buyerLastName: any;
    buyerAddress: any
    buyerCity: any;
    buyerState: any
    buyerCountry: any;
    buyerPincode: any
    buyerPhoneNumber: any;
}

interface SS {
    id: any;
}

export default class EcommerceController extends BlockComponent<
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
        const orderval = "ZPLive1999807994223";
        localStorage.setItem("orderId", JSON.stringify(orderval))
        const val = 199868928975;
        localStorage.setItem("transactionId", JSON.stringify(val))

    }
    getEmptyState = () => ({
        refcode: "",
        totalOffset: "",
        anonymous_userid1: '',
        offset1: '',
        offset_sub_type1: '',
        offset_type1: '',
        order_id1: '',
        partner_id1: '',
        transaction_id1: '',
        orderId: "",
        amount: "",
        buyeremail: "",
        buyerFirstName: "",
        buyerLastName: "",
        buyerAddress: "",
        buyerCity: "",
        buyerState: "",
        buyerCountry: "",
        buyerPincode: "",
        buyerPhoneNumber: ""
    })
    onHandleSubmit = (e: any) => {
        const tranId = localStorage.getItem("transactionId");
        const id = tranId ? JSON.parse(tranId) : "";
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";
        e.preventDefault();
        const data = {
            ref_code: this.state.refcode,
            order_id: `${5}`,
            transaction_id: `${id}`,
            anonymous_userid: "rufidui21213",
            partner_id: `${P_id.id}`,
            secret_key: "Me3rJ9gUT6AOrZjo0OVjz4vctzBYwRti0LC",
        }
        if (this.state) {
            axios({
                method: configJSON.apiPostMethod,
                url: configJSON.baseUrl1 + configJSON.ecommerceEndPointURL,
                data: data,
                headers: { "Content-Type": configJSON.dashboarContentType }
            })
                .then((res: any) => {
                    console.log(res)
                    this.setState({
                        refcode: "",
                        totalOffset: res.data.totaloffset_per_seat,
                        anonymous_userid1: res.data.offsetDetails.anonymous_userid,
                        offset1: res.data.offsetDetails.offset,
                        offset_sub_type1: res.data.offsetDetails.offset_sub_type,
                        offset_type1: res.data.offsetDetails.offset_type,
                        order_id1: res.data.offsetDetails.order_id,
                        partner_id1: res.data.offsetDetails.partner_id,
                        transaction_id1: res.data.offsetDetails.transaction_id,
                    })
                    const transactionValue = id + 1
                    localStorage.setItem("transactionId", JSON.stringify(transactionValue))
                    if (e.target.value !== "button") {
                        if (res.data.success == true) {
                            MESSAGE.success(res.data.message, 5);
                        }
                        else {
                            MESSAGE.error(res.data.message, 5);
                        }
                    }
                })
                .catch((err: any) => {
                    console.log({ err })
                })
        }
        else {
            MESSAGE.error("Every Field Are Maindetory", 5);
        }
    }

    onHandleAddPartnersOffset(e: any) {
        e.preventDefault();
        const tranId = localStorage.getItem("transactionId");
        const id = tranId ? JSON.parse(tranId) : "";
        const partner_id = localStorage.getItem("user_info")
        const p_id = partner_id ? JSON.parse(partner_id) : " ";
        const data = {
            anonymous_userid: this.state.anonymous_userid1,
            offset: this.state.offset1,
            offset_sub_type: this.state.offset_sub_type1,
            offset_type: this.state.offset_type1,
            order_id: this.state.order_id1,
            partner_id: `${p_id.id}`,
            transaction_id: `${id}`,
        }
        if (this.state) {
            axios({
                method: configJSON.apiPostMethod,
                url: configJSON.baseUrl1 + configJSON.addsPartnerOffsetEndPointURL,
                data: data,
                headers: { "Content-Type": configJSON.dashboarContentType }
            })
                .then((res) => {
                    console.log({ res })
                })
                .catch((err) => {
                    console.log({ err })
                })
        }
        else {
            MESSAGE.error("Every Field Are Maindetory", 5);
        }
    }

    onHandlePayment(e: any) {
        e.preventDefault();
        const orderID = JSON.parse(localStorage.getItem("orderId") || "");
        const email = localStorage.getItem("user_info");
        const E_ID = email ? JSON.parse(email) : " ";

        const data = {
            orderId: `${orderID}`,
            amount: 1000,
            buyerEmail: E_ID.email,
            buyerFirstName: E_ID.firstname,
            buyerLastName: E_ID.lastname,   
            buyerAddress: E_ID.address,
            buyerCity: E_ID.city,
            buyerState: E_ID.state,
            buyerCountry: E_ID.country_name,
            buyerPincode: E_ID.pincode,
            buyerPhoneNumber: E_ID.phone_number,
        }

        if (this.state) {
            axios({
                method: configJSON.apiPostMethod,
                url: 'https://3.108.49.27:4000/payment/payNow',
                data: data,
                headers: { "Content-Type": configJSON.dashboarContentType }
            })
                .then((res) => {
                    console.log({ res })
                    window.location.href = res.data.userinfo[0].url
                    this.setState({
                        amount: ""
                    })
                })
                .catch((err) => {
                    console.log({ err })
                })
        }
        else {
            MESSAGE.error("Every Field Are Maindetory", 5);
        }
    }
}