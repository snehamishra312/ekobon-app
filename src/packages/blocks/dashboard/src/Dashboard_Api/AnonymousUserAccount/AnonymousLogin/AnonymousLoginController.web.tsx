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
    email: any;
    password: any;
}
interface SS {
    id: any;
}
export default class AnonymousLoginController extends BlockComponent<
    Props,
    S,
    SS
> {
    apiLoginAccount: string = "";
    constructor(props: Props) {
        super(props);
        this.state = this.getEmptyState();
    }
    getEmptyState = () => ({
        email: "",
        password: ""
    });
    async componentDidMount() {
        super.componentDidMount();
    }
    onHandleLoginSubmit = (e: any) => {
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password,
        }
        if (this.state.email && this.state.password) {
            axios({
                method: configJSON.apiPostMethod,
                url: configJSON.baseUrl1 + configJSON.loginAccountEndPoint,
                data: data,
                headers: { "Content-Type": configJSON.dashboarContentType }
            })
                .then((res) => {
                    if (res.data.success == true) {
                        MESSAGE.success(res.data.message, 5);
                        // localStorage.setItem("token", res.data.token);
                        localStorage.setItem("user_info", JSON.stringify(res.data.userinfo));
                        this.props.history.push('/api/anonymous/dashboard');
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
