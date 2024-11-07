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
    country: any;
    hotelRating: any;
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
    buyerAddress: any;
    buyerCity: any;
    buyerState: any;
    buyerCountry: any;
    buyerPincode: any;
    buyerPhoneNumber: any;
}
interface SS {
    id: any;
}
export default class HotelBookingController extends BlockComponent<
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
        const orderval = "ZPLive7777541194223";
        localStorage.setItem("orderId", JSON.stringify(orderval))
        const val = 776777111854;
        localStorage.setItem("transactionId", JSON.stringify(val));
    }
    getEmptyState = () => ({
        country: "",
        hotelRating: "",
        totalOffset: "",
        anonymous_userid1: '',
        offset1: '',
        offset_sub_type1: '',
        offset_type1: '',
        order_id1: '',
        partner_id1: '',
        transaction_id1: '',
        orderId: "",
        amount: " ",
        buyeremail: " ",
        buyerFirstName: " ",
        buyerLastName: " ",
        buyerAddress: " ",
        buyerCity: " ",
        buyerState: " ",
        buyerCountry: " ",
        buyerPincode: " ",
        buyerPhoneNumber: " "
    });

    HandleClick = () => {
        this.props.history.push("/ecommerce")
    }

    onHandleSubmit = (e: any) => {
        const tranId = localStorage.getItem("transactionId");
        const id = tranId ? JSON.parse(tranId) : "";
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";
        const order_id1 = localStorage.getItem("orderId")
        const id_order = order_id1 ? JSON.parse(order_id1) : "";
        console.log(id_order)
        e.preventDefault();
        console.log(P_id)
        const data = {
            country: this.state.country,
            hotel_rating: this.state.hotelRating,
            order_id: `${id_order}`,
            transaction_id: `${id}`,
            anonymous_userid: "rufidui21213",
            partner_id: `${P_id.id}`,
            secret_key: "Me3rJ9gUT6AOrZjo0OVjz4vctzBYwRti0LC",
            partner_name: P_id.firstname,
        }
        if (this.state) {
            axios({
                method: configJSON.apiPostMethod,
                url: configJSON.baseUrl1 + configJSON.hotelBookingEndPointURL,
                data: data,
                headers: { "Content-Type": configJSON.dashboarContentType }
            })
                .then((res: any) => {
                    console.log(res)
                    this.setState({
                        country: "",
                        hotelRating: "",
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
            partner_name: p_id.firstname,
        }
        if (this.state) {
            axios({
                method: configJSON.apiPostMethod,
                url: configJSON.baseUrl + configJSON.addsPartnerOffsetEndPointURL,
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
            orderId: orderID,
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
                url: `${configJSON.baseUrl1}payment/payNow`,
                data: data,
                headers: { "Content-Type": configJSON.dashboarContentType }
            })
                .then((res) => {
                    console.log(res)
                    const orderidValue = orderID
                    localStorage.setItem("orderId", JSON.stringify(orderidValue))
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
