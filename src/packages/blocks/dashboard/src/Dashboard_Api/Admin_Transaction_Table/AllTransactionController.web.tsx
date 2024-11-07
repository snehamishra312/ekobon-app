import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import { message, message as MESSAGE } from "antd";
import axios from 'axios';
export const configJSON = require("../../config");

export interface Props {
    history: any;
}
interface S {
    allTransactionData: any;
    allInvestedProject: any;
}
interface SS {
    id: any;
}
export default class AllTransactionController extends BlockComponent<
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
        this.getAllPartnerUser();
        this.getAllInvestedProject();
    }

    getEmptyState = () => ({
        allTransactionData: [],
        allInvestedProject: [],
    });

    getAllPartnerUser() {
        axios({
            method: configJSON.GetApiMethodType,
            url: configJSON.baseUrl1 + configJSON.getAllTransactionEndPoint,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                console.log(res)
                this.setState({
                    allTransactionData: res?.data?.data,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    getAllInvestedProject() {
        axios({
            method: configJSON.GetApiMethodType,
            url: configJSON.baseUrl1 + configJSON.getAllInvestedProjectEndPoint,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                console.log(res)
                this.setState({
                    allInvestedProject: res?.data?.data,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    onHandleLogout() {
        localStorage.clear()
        this.props.history.push("/api/partner/login")
    }
}