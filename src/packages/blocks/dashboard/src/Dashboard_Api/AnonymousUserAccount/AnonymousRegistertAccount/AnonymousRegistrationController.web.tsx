import { Message } from "../../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../../framework/src/BlockComponent";
import { message, message as MESSAGE } from "antd";
import axios from "axios";
export const configJSON = require("../../../config");

export interface Props {
    history: any;
}
interface S {
    email: any;
    password: any;
    firstName: any;
    LastName: any;
    country: any;
    phoneNumber: any;
}
interface SS {
    id: any;
}
export default class AnonymousRegistrationController extends BlockComponent<
    Props,
    S,
    SS
> {
    apiRegisterAccount: string = "";
    constructor(props: Props) {
        super(props);
        this.receive = this.receive.bind(this);
        this.state = this.getEmptyState();
    }
    async componentDidMount() {
        super.componentDidMount();
    }
    getEmptyState = () => ({
        email: "",
        password: "",
        firstName: "",
        LastName: "",
        phoneNumber: "",
        country: "",
    });
    onHandleSubmit = (e: any) => {
        e.preventDefault();
        const data = {
            password: this.state.password,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.LastName,
            phone_number: this.state.phoneNumber,
            country: this.state.country,
            country_code: +91
        }
        if (this.state.password != "" && this.state.email != "" && this.state.firstName != "" && this.state.LastName != "" && this.state.phoneNumber != "" && this.state.country != "") {
            axios({
                method: configJSON.apiPostMethod,
                url: configJSON.baseUrl1 + configJSON.registerAccountEndPoint,
                data: data,
                headers: { "Content-Type": configJSON.dashboarContentType }
            })
                .then((res) => {
                    console.log({ res })
                    if (res.data.success == true) {
                        MESSAGE.success(res.data.message, 5);
                        setTimeout(() => {
                            this.props.history.push('/api/anonymous/login');
                        }, 3000);
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
}
