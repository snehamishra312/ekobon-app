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
    orderHistory: any;
    projectName: any;
    investedProjectDetail: any;
}

interface SS {
    id: any;
}

export default class OrderHistoryController extends BlockComponent<
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
        this.getOrderHistoryData();
        this.getInvestedProjectDetail();
    }

    getEmptyState = () => ({
        orderHistory: [],
        projectName: [],
        investedProjectDetail: [],
    });

    getOrderHistoryData() {
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";
        const data = {
            partner_id: `${P_id.id}`
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.getOrderHistoryDetailsEndPointURL,
            data: data,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                this.setState({
                    orderHistory: res.data.orderHistoryDetails,
                    projectName: res.data.projectDetails,
                })
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }

    getInvestedProjectDetail() {

        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";
        const data = {
            partner_id: `${P_id.id}`
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.getInvestedProjectDetailsEndPointURL,
            data: data,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                this.setState({
                    investedProjectDetail: res.data.partnerProjectDetails
                })
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }

}
