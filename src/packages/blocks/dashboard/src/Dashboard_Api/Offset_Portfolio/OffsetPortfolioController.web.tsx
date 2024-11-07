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
    options: any;
    series: any;
    projectHistoryData: any;
    arrayseries: any;
    bankOrderHistory: any;
    offsetDetail: any;
    isGraphShow: any;
}

interface SS {
    id: any;
}

export default class OffsetPortfolioController extends BlockComponent<
    Props,
    S,
    SS
> {
    apiLoginAccount: string = "";

    constructor(props: Props) {
        super(props);
        this.state = this.getEmptyState();
        this.onHandleOffset = this.onHandleOffset.bind(this);
    }

    async componentDidMount() {
        super.componentDidMount();
        this.getOrderHistoryData();
        this.getBankOrderHistoryData();
        setTimeout(() => {
            this.setState({
                isGraphShow: true
            })
        }, 1000);
    }
    getEmptyState = () => ({
        options: {
            labels: [],
            responsive: [{
                options: {
                    chart: {
                        width: 400,
                        height: 500
                    }
                }
            }]
        },
        series: [],
        labels: [],
        projectHistoryData: [],
        arrayseries: [],
        bankOrderHistory: [],
        offsetDetail: "",
        isGraphShow: false,
    });

    getOrderHistoryData() {
        const data = {
            bank_id: `${2235}`
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.bankProjectsDistributionEndPointURL,
            data: data,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                console.log(res?.data?.projectsDistribution, "asdfadsfasdfaadsadsadsas")
                const arr = res?.data?.projectsDistribution?.map((item: any) => (
                    res?.data?.projectsDistribution?.length !== this.state?.arrayseries?.length &&
                    this.state?.arrayseries?.push(+ parseInt(item?.total_offset)),
                    res?.data?.options?.labels?.length !== this.state?.arrayseries?.length &&
                    this.state.options?.labels?.push(item?.project_type),
                    this.setState({
                        series: this.state.arrayseries,
                    })
                ))
                this.setState({
                    offsetDetail: res?.data?.myBankprojects,
                    projectHistoryData: res?.data?.projectsDistribution
                })
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }
    onHandleOffset() {
        this.props.history.push("/api/offset/detail")
    }
    getBankOrderHistoryData() {
        const data = {
            bank_id: `${2235}`
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.bankOrderHistoryDataEndPointURL,
            data: data,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                this.setState({
                    bankOrderHistory: res?.data?.myBankprojects
                })
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }

}
