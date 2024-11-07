import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import { message, message as MESSAGE } from "antd";
import axios from 'axios';
export const configJSON = require("../../config");

export interface Props {
    history: any;
}
interface S {
    climate_project: any
}
interface SS {
    id: any;
}
export default class AdminProjectController extends BlockComponent<
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
        this.getAllClimateProject()
    }

    getEmptyState = () => ({
        climate_project: [],
    });

    getAllClimateProject() {
        axios({
            method: configJSON.apiGetMethod,
            url: configJSON.baseUrl1 + configJSON.getAllClimateProjectEndPoint,
            headers: { "Content-Type": configJSON.dashboarContentType },
        })
            .then((res: any) => {
                console.log({res})
                this.setState({
                    climate_project: res?.data?.data,
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
