import axios from "axios";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import { message as MESSAGE } from "antd";

export const configJSON = require("../../config");

export interface Props {
    history: any;
}

interface S {
    paymentLoader: boolean,
}

interface SS {
    id: any;
}

export default class IndvPaymentSuccessAlertController extends BlockComponent<
    Props,
    S,
    SS
> {
    constructor(props: Props) {
        super(props);
        this.state = this.getEmptyState();
        this.onHandleCloseAlert = this.onHandleCloseAlert.bind(this);
    }

    async componentDidMount() {
        super.componentDidMount();
        console.log(window.location.search.slice(1))
        if (window?.location?.search?.slice(1) == "success") {
            this.setState({
                paymentLoader: true
            })
        }
        else {
            MESSAGE.error("Payment Failed", 4)
            setTimeout(() => {
                window.location.href = "/api/partner/dashboard"
            }, 2000);
        }
    }

    getEmptyState = () => ({
        paymentLoader: false,
    });

    onHandleCloseAlert() {
        window.location.href = "/api/partner/dashboard"
    }

}