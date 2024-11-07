import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import { message, message as MESSAGE } from "antd";
export const configJSON = require("../../config");
import axios from "axios";
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
    passWord: any;
    confirmPassword: any;
    address: any;
    contryName: any;
}
interface SS {
    id: any;
}
export default class AddPartnerController extends BlockComponent<
    Props,
    S,
    SS
> {
    apiRegisterAccount: string = "";
    confirmPassword: any;
    passWord: any;
    constructor(props: Props) {
        super(props);
        this.state = this.getEmptyState();
        this.onHandleLogout = this.onHandleLogout.bind(this);
        this.onHandleAddPartner = this.onHandleAddPartner.bind(this);
    }
    async componentDidMount() {
        super.componentDidMount();
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
        passWord: "",
        confirmPassword: "",
        address: "",
        contryName: "",
    });
    onHandleAddButton = (e: any) => {
        e.preventDefault();
        const data = {
        }
    }
    onHandleLogout() {
        localStorage.clear()
        this.props.history.push("/api/partner/login")
    }
    onHandleAddPartner(e: any) {
        e.preventDefault();
        // alert("enter")
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.phoneNumber && this.state.companyName &&
            this.state.state && this.state.city && this.state.pincode && this.state.passWord && this.state.address && this.state.contryName) {
            if (this.state.confirmPassword == this.state.passWord) {
                console.log(this.state.confirmPassword)
                const data = {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    phoneNumber: this.state.phoneNumber,
                    companyName: this.state.companyName,
                    state: this.state.state,
                    city: this.state.city,
                    pincode: this.state.pincode,
                    passWord: this.state.passWord,
                    address: this.state.address,
                    contryName: this.state.contryName,
                }
                axios({
                    method: configJSON.apiPostMethod,
                    url: configJSON.baseUrl1 + configJSON.addPartnerEndPoint,
                    data: data,
                    headers: { "Content-Type": configJSON.dashboarContentType },
                })
                    .then((res: any) => {
                        MESSAGE.success("User added successfully", 2);
                        setTimeout(() => {
                            window.location.href = '/api/admin';
                        }, 2000);
                    })
            } else {
                MESSAGE.error("Password and ConfirmPassword not matches", 4);
            }
        }
        else {
            alert("all field are mandatory")
        }
    }
}
