import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import axios from "axios";
export const configJSON = require("../../config");
import { message, message as MESSAGE } from "antd";

export interface Props {
    history: any;
}
interface S {
    firstName: any;
    lastName: any;
    email: any;
    phoneNumber: any;
    companyName: any;
    state: any;
    city: any;
    pincode: any;
    address: any;
    contryName: any;
}
interface SS {
    id: any;
}
export default class UpdatePartnerController extends BlockComponent<
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
        this.onHandleUpdate()
    }
    getEmptyState = () => ({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        state: "",
        city: "",
        pincode: "",
        address: "",
        contryName: "",
    });
    onHandleAddButton = (e: any) => {
        e.preventDefault();
    }
    onHandleLogout() {
        localStorage.clear()
        this.props.history.push("/api/partner/login")
    }
    onHandleUpdate() {
        const partnerid = JSON.parse(localStorage.getItem("partner_id") || "");
        const data = {
            partner_id: partnerid,
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.getUserbyIdEndPoint,
            data: data,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                console.log(res)
                this.setState({
                    firstName: res.data.data[0].firstname,
                    lastName: res.data.data[0].lastname,
                    email: res.data.data[0].email,
                    phoneNumber: res.data.data[0].phone_number,
                    companyName: res.data.data[0].company_name,
                    city: res.data.data[0].city,
                    state: res.data.data[0].state,
                    pincode: res.data.data[0].pincode,
                    address: res.data.data[0].address,
                    contryName: res.data.data[0].country_name
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    updateUser(e: any) {
        e.preventDefault()
        const partnerid = JSON.parse(localStorage.getItem("partner_id") || "");
        console.log(this.state.firstName, "this.state.firstNameeeeeee")
        const data = {
            partner_id: partnerid,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            companyName: this.state.companyName,
            state: this.state.state,
            city: this.state.city,
            pincode: this.state.pincode,
            address: this.state.address,
            contryName: this.state.contryName
        }
        axios({
            method: configJSON.apiPostMethod,
            data: data,
            url: configJSON.baseUrl1 + configJSON.updateUserEndPoint,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                MESSAGE.success("User updated successfully", 2);
                setTimeout(() => {
                    window.location.href = '/api/admin';
                }, 2000);
                console.log(res)
                this.setState({
                    firstName: res.data.data.firstname,
                    lastName: res.data.data.lastname,
                    phoneNumber: res.data.data.phone_number,
                    companyName: res.data.data.company_name,
                    state: res.data.data.state,
                    city: res.data.data.city,
                    pincode: res.data.data.pincode,
                    address: res.data.data.address,
                    contryName: res.data.data.country_name,
                })
                console.log(res.data.data.firstname, "res.data.data.firstname")
            })

            .catch((err) => {
                console.log(err)
            })
    }
}

