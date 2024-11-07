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
    bankRefineMyFootprintData: any;
    footPrintDataW1: any;
    footPrintDataW2: any;
    footPrintDataW3: any;
    footPrintDataW4: any;
}
interface SS {
    id: any;
}
export default class RefineFootprintController extends BlockComponent<
    Props,
    S,
    SS
> {
    apiLoginAccount: string = "";

    constructor(props: Props) {
        super(props);
        this.state = this.getEmptyState();
        this.onHandleLogout = this.onHandleLogout.bind(this);
        this.onHandleClickOnAnswerW1 = this.onHandleClickOnAnswerW1.bind(this);
        this.onHanldeSubmitData = this.onHanldeSubmitData.bind(this);
        this.bankRefineMyFootprint()
    }

    async componentDidMount() {
        super.componentDidMount();
    }

    getEmptyState = () => ({
        bankRefineMyFootprintData: [],
        footPrintDataW1: [],
        footPrintDataW2: [],
        footPrintDataW3: [],
        footPrintDataW4: [],
    });
    onHandleLogout() {
        localStorage.clear()
        this.props.history.push("/api/partner/login")
    }

    bankRefineMyFootprint() {
        const data = {
            bank_id: `${2235}`
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.bankRefineMyFootprintEndPointURL,
            data: data,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                res?.data?.bankRefineMyFootprint?.map((item: any) => (
                    this.state.footPrintDataW1.push(item?.w1),
                    this.state.footPrintDataW2.push(item?.w2),
                    this.state.footPrintDataW3.push(item?.w3),
                    this.state.footPrintDataW4.push(item?.w4)
                ))
                this.setState({
                    bankRefineMyFootprintData: res?.data?.bankRefineMyFootprint
                })
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }

    onHandleClickOnAnswerW1(val: any) {
        console.log(val)
        if (!this.state.footPrintDataW1?.includes(val)) {
            this.setState({
                footPrintDataW1: [val]
            })
        }
        else {
            this.setState({
                footPrintDataW1: []
            })
        }
    }

    onHandleClickOnAnswerW2(val: any) {
        console.log(val)
        if (!this.state.footPrintDataW2?.includes(val)) {
            this.setState({
                footPrintDataW2: [val]
            })
        }
        else {
            this.setState({
                footPrintDataW2: []
            })
        }
    }

    onHandleClickOnAnswerW3(val: any) {
        console.log(val)
        if (!this.state.footPrintDataW3?.includes(val)) {
            this.setState({
                footPrintDataW3: [val]
            })
        }
        else {
            this.setState({
                footPrintDataW3: []
            })
        }
    }

    onHandleClickOnAnswerW4(val: any) {
        console.log(val)
        if (!this.state.footPrintDataW4?.includes(val)) {
            this.setState({
                footPrintDataW4: [val]
            })
        }
        else {
            this.setState({
                footPrintDataW4: []
            })
        }
    }

    onHanldeSubmitData() {
        // createRefineEndPointURL
        const data = {
            bank_id: `${2235}`,
            w1: this.state.footPrintDataW1[0],
            w2: this.state.footPrintDataW2[0],
            w3: this.state.footPrintDataW3[0],
            w4: this.state.footPrintDataW4[0],
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.createRefineEndPointURL,
            data: data,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                console.log({ res })
                if (res?.data?.success == true) {
                    MESSAGE.success(res?.data?.message, 4);
                } else {
                    MESSAGE.error(res?.data?.message, 4);
                }
                // res.data.message
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }

}
