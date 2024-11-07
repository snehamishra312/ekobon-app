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
    flight_type: any;
    Nox: any;
    dropdown_menu: any;
    selected_value: any;
    selected_value2: any;
    isNox: any;
    totalOffset: any;
    offset: any;
    transaction_id: any;
    order_id: any
    anonymous_userid: any
    secret_key: any;
    partner_id: any;
    to_airport: any;
    from_airport: any;
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
export default class FlightPageController extends BlockComponent<
    Props,
    S,
    SS
> {
    apiLoginAccount: string = "";

    constructor(props: Props) {
        super(props);
        this.onNoxChekced = this.onNoxChekced.bind(this);
        this.state = this.getEmptyState();
    }
    getEmptyState = () => ({
        flight_type: "",
        Nox: "",
        dropdown_menu: [],
        selected_value: '',
        selected_value2: '',
        isNox: 0,
        totalOffset: '',
        offset_type: '',
        offset_sub_type: '',
        offset: '',
        transaction_id: '',
        order_id: '',
        anonymous_userid: '',
        secret_key: '',
        partner_id: '',
        to_airport: '',
        from_airport: '',
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
    async componentDidMount() {
        super.componentDidMount();

        const orderval = "ZPLive7777541194223";
        localStorage.setItem("orderId", JSON.stringify(orderval))

        const val = 189687828965;
        localStorage.setItem("transactionId", JSON.stringify(val));
        axios({
            method: configJSON.apiGetMethod,
            url: configJSON.baseUrl1 + configJSON.getAirportEndPointURL,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res) => {
                console.log(res.data.response.rows)
                this.setState({
                    dropdown_menu: res.data.response.rows
                })
            })
            .catch((err) => {
                console.log({ err })
            })
    }
    handleChange(e: any) {
        if (this.state.selected_value2 !== e.target.value) {
            this.setState({
                selected_value: e.target.value
            })
        }
        else {
            MESSAGE.error("To and from not be same", 2);
        }
    }
    handleChangeDropdownValue(e: any) {
        if (this.state.selected_value !== e.target.value) {
            this.setState({
                selected_value2: e.target.value
            })
        }
        else {
            MESSAGE.error("To and from not be same", 2);
        }
    }
    handleSelectFlight(e: any) {
        this.setState({
            flight_type: e.target.value
        })
    }
    onNoxChekced() {
        if (this.state.isNox == 0) {
            this.setState({
                isNox: 1
            });
        }
        else {
            this.setState({
                isNox: 0
            });
        }
    }
    onHandleLoginSubmit(e: any) {
        e.preventDefault();
        const tranId = localStorage.getItem("transactionId");
        const id = tranId ? JSON.parse(tranId) : "";
        const partner_id = localStorage.getItem("user_info")
        const p_id = partner_id ? JSON.parse(partner_id) : " ";

        if (this.state) {
            axios({
                method: configJSON.apiPostMethod,
                url: configJSON.baseUrl1 + configJSON.postFlightEndPointURL,
                data: {
                    transaction_id: `${id}`,
                    flight_type: this.state.flight_type,
                    Nox: `${this.state.isNox}`,
                    order_id: '0122345',
                    anonymous_userid: "rufidui21213",
                    secret_key: "Me3rJ9gUT6AOrZjo0OVjz4vctzBYwRti0LC",
                    partner_id: `${p_id.id}`,
                    to_airport: this.state.selected_value,
                    from_airport: this.state.selected_value2,
                },
                headers: { "Content-Type": configJSON.dashboarContentType }
            })
                .then((res) => {
                    if (res.data.success == true) {
                        MESSAGE.success(res.data.message, 5);
                        this.setState({
                            flight_type: "",
                            selected_value: '',
                            selected_value2: '',
                        })
                    }
                    else {
                        MESSAGE.error(res.data.message, 5);
                    }
                })
                .catch((err) => {
                    console.log({ err })
                })
        }
        else {
            MESSAGE.error("Every Field Are Maindetory", 5);
        }
    }
    onHandleSubmit(e: any) {
        e.preventDefault();
        const tranId = localStorage.getItem("transactionId");
        const id = tranId ? JSON.parse(tranId) : "";
        const partner_id = localStorage.getItem("user_info")
        const p_id = partner_id ? JSON.parse(partner_id) : " ";
        const data = {
            transaction_id: `${id}`,
            flight_type: this.state.flight_type,
            Nox: `${this.state.isNox}`,
            order_id: '0122345',
            anonymous_userid: "rufidui21213",
            secret_key: "Me3rJ9gUT6AOrZjo0OVjz4vctzBYwRti0LC",
            partner_id: `${p_id.id}`,
            to_airport: this.state.selected_value,
            from_airport: this.state.selected_value2,
        }
        if (this.state) {
            axios({
                method: configJSON.apiPostMethod,
                url: configJSON.baseUrl1 + configJSON.postFlightEndPointURL,
                data: data,
                headers: { "Content-Type": configJSON.dashboarContentType }
            })
                .then((res) => {
                    console.log({ res })
                    this.setState({
                        totalOffset: res.data.offsetDetails.offset,
                        anonymous_userid1: res.data.offsetDetails.anonymous_userid,
                        offset1: res.data.offsetDetails.offset,
                        offset_sub_type1: res.data.offsetDetails.offset_sub_type,
                        offset_type1: res.data.offsetDetails.offset_type,
                        order_id1: res.data.offsetDetails.order_id,
                        partner_id1: res.data.offsetDetails.partner_id,
                        transaction_id1: res.data.offsetDetails.transaction_id,
                    })
                })
                .catch((err) => {
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
        console.log(p_id.id, "iiii")
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
        if (E_ID !== "" && orderID) {
            axios({
                method: configJSON.apiPostMethod,
                url: 'https://3.108.49.27:4000/payment/payNow',
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
