import { IBlock } from "../../../../../../framework/src/IBlock";
import { Message } from "../../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../../framework/src/BlockComponent";
import { message as MESSAGE } from "antd";
import axios from "axios";
export const configJSON = require("../../../config");

export interface Props {
    history: any;
}

interface S {
    userName: any;
}

interface SS {
    id: any;
}

export default class AnonymousForgotPasswordController extends BlockComponent<
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
    }

    getEmptyState = () => ({
        userName: ""
    });
    onHandleSubmit = (e: any) => {
        e.preventDefault();
        const data = {
            email: this.state.userName
        }
        if (this.state.userName) {
            axios({
                method: configJSON.apiPostMethod,
                url: configJSON.baseUrl1 + configJSON.forgotPasswordEndPointURL,
                data: data,
                headers: { "Content-Type": configJSON.dashboarContentType }
            })
                .then((res) => {
                    if (res.data.success == true) {
                        MESSAGE.success(res.data.message, 5);
                        setTimeout(() => {
                            this.props.history.push('/');
                        }, 2000);
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
