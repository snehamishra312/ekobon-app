import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import { message, message as MESSAGE } from "antd";
import axios from 'axios';
export const configJSON = require("../../config");

export interface Props {
    history: any;
}
interface S {
    partner_id: any
    partnerUser: any

    firstName: any
    lastName: any
    phoneNumber: any
    companyName: any
    state: any
    city: any
    pincode: any
    passWord: any
    address: any
    contryName: any

}
interface SS {
    id: any;
}
export default class AdminDashboardController extends BlockComponent<
    Props,
    S,
    SS
> {
    apiRegisterAccount: string = "";
    constructor(props: Props) {
        super(props);
        this.state = this.getEmptyState();
        this.onHandleLogout = this.onHandleLogout.bind(this);
    }
    async componentDidMount() {
        super.componentDidMount();
        this.getAllPartnerUser()
    }

    getAllUsers() {

    }

    getEmptyState = () => ({
        // getAllPartnerUserEndPointURL
        partner_id: " ",
        partnerUser: [],
        firstName: " ",
        lastName: " ",
        phoneNumber: " ",
        companyName: " ",
        state: " ",
        city: " ",
        pincode: " ",
        passWord: " ",
        address: " ",
        contryName: " "
    });

    getAllPartnerUser() {
        axios({
            method: configJSON.apiGetMethod,
            url: configJSON.baseUrl1 + configJSON.getAllusersEndPoint,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                console.log(res)
                this.setState({
                    partnerUser: res?.data?.data,
                })
                console.log(res.data.data, "res?.data?.data,")
            })
            .catch((err) => {
                console.log(err)
            })
    }
    onHandleLogout() {
        localStorage.clear()
        this.props.history.push("/api/partner/login")
    }
    onHandleDelete(val: any) {
        const data = {
            partner_id: val
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.deletePartnerEndPoint,
            data: data,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                console.log(res)
                MESSAGE.success("User delete successfully", 4);
                this.getAllPartnerUser()
            })
            .catch((error) => {
                console.log(error)
            })
    }
    onHandleSubmit(val: any) {
        const partnerid = localStorage.setItem("partner_id", JSON.parse(val))
        window.location.href = '/api/update/partner';
    }
}
