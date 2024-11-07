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
    project_type: any;
    category_id: any;
    // partner_id: any;
    percentage_invested: any;
    allProjectData: any;
    selectValue: any;
    project1Value: any;
    project2Value: any;
    selectedProjectValue: any;
    selectedProject2Value: any;
    project_type2: any;
    category_id2: any;
    selectValue2: any
}

interface SS {
    id: any;
}

export default class ProjectsController extends BlockComponent<
    Props,
    S,
    SS
> {
    apiLoginAccount: string = "";

    constructor(props: Props) {
        super(props);
        this.onSelectProject = this.onSelectProject.bind(this);
        this.onHandleSave = this.onHandleSave.bind(this);
        this.onHandleLogout = this.onHandleLogout.bind(this);
        this.state = this.getEmptyState();
    }

    async componentDidMount() {
        super.componentDidMount();
        this.getAllProjectDetails();
    }

    getEmptyState = () => ({
        project_type: "",
        category_id: "",
        project_type2: "",
        category_id2: "",
        // partner_id: 1234,
        percentage_invested: 40,
        allProjectData: [],
        selectValue: "",
        project1Value: 0,
        project2Value: 0,
        selectedProjectValue: "",
        selectedProject2Value: "",
        selectValue2: "",
    });
    HandleClick = () => {
        this.props.history.push("/addMyPartnerProject")
    }
    onHandleLogout() {
        localStorage.clear()
        this.props.history.push("/api/partner/login")
    }
    onHandleChangeProject(val: any) {
        this.state.allProjectData.map((item: any) => (
            item.project_name == val &&
            this.setState({
                category_id: item.id,
                project_type: item.category_name,
            })
        ))
        this.setState({
            selectedProjectValue: val,
        })
    }
    onHandleChangeProject2(val: any) {
        this.state.allProjectData.map((item: any) => (
            item.project_name == val &&
            this.setState({
                category_id2: item.id,
                project_type2: item.category_name
            })
        ))
        this.setState({
            selectedProject2Value: val
        })
    }
    onSelectProject(val: any) {

        console.log(val)
        if (val.id) {
            if (this.state.selectValue == " ") {
                this.setState({
                    selectValue: val.id,
                    selectedProjectValue: val.project_name && this.state.project1Value == "50%",
                    project1Value: val == "50%"
                })
            }
            else if (this.state.selectValue2 == " ") {
                this.setState({
                    selectValue: val.id,
                    selectedProject2Value: val.project_name && this.state.project2Value == "50%",
                    project2Value: val == "50%"
                })
            }
            else {
                this.setState({
                    selectedProjectValue: this.state.selectedProject2Value,
                    selectedProject2Value: val.project_name
                })
            }
            if (this.state.selectValue === "") {
                this.setState({
                    selectValue: val.id,
                    selectedProjectValue: val.project_name
                })
            }
            else {
                this.setState({
                    selectValue: val.id,
                    selectedProject2Value: val.project_name
                })
            }
        }
    }
    getAllProjectDetails() {
        axios({
            method: configJSON.apiGetMethod,
            url: configJSON.baseUrl1 + configJSON.getAllProjectDataEndPointURL,
            headers: { "Content-Type": configJSON.jsonDataContentType },
        })
            .then((res: any) => {
                console.log(res.data.partnerProjectDetails)
                this.setState({
                    allProjectData: res.data.partnerProjectDetails
                })
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }
    onHandleSave() {
        console.log()
        const partner_id = localStorage.getItem("user_info")
        const P_id = partner_id ? JSON.parse(partner_id) : "";

        const data = {
            project_name: `${this.state.selectedProjectValue},${this.state.selectedProject2Value}`,
            category_id: `${this.state.category_id},${this.state.category_id2}`,
            // partner_id: 1234,
            partner_id: `${P_id.id}`,
            percentage_invested: `${this.state.project1Value},${this.state.project2Value}`,
            project_type: `${this.state.project_type},${this.state.project_type2}`,
        }
        axios({
            method: configJSON.apiPostMethod,
            url: configJSON.baseUrl1 + configJSON.saveProjectDetailEndPointURL,
            headers: { "Content-Type": configJSON.dashboarContentType },
            data: data
        })
            .then((res: any) => {
                console.log({ res })
                if (res.data.success == true) {
                    MESSAGE.success(res.data.message, 5);
                }
                else {
                    MESSAGE.error(res.data.message, 5);
                }
            })
            .catch((err: any) => {
                console.log({ err })
            })
    }
}

