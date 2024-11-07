import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import { message, message as MESSAGE } from "antd";
import axios from 'axios';
export const configJSON = require("../../config");

export interface Props {
    history: any;
}
interface S {
    offsetData: any
}
interface SS {
    id: any;
}
export default class offsetConverstionController extends BlockComponent<
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
        this.getAllOffsetData()
    }

    getAllUsers() {

    }

    getEmptyState = () => ({
        offsetData: [],
    });

    getAllOffsetData() {
        axios({
            method: configJSON.apiGetMethod,
            url: configJSON.baseUrl1 + configJSON.getAllOffsetConverstionEndPoint,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                console.log(res)
                this.setState({
                    offsetData: res?.data?.data,
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
    onHandleSubmit(val: any) {
        const partnerid = localStorage.setItem("partner_id", JSON.parse(val))
        window.location.href = '/api/update/partner';
    }
}
