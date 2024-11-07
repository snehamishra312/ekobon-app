import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import { IBlock } from "../../../../../framework/src/IBlock";
import { Message } from "../../../../../framework/src/Message";
import MessageEnum, {
    getName,
} from "../../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../../framework/src/RunEngine";
import { message as MESSAGE } from "antd";
import axios from "axios";
export const configJSON = require("../../config.js");

export interface Props {
    history: any;
}
interface S {
    isSideBarClick: any;
    isScroll: any;
    loginFlag: any;
    isDarkMode: any;
    onMenuOpen: any;
    onOpenIndividuals: any;
    onOpenCorporates: any;
    onOpenResources: any;
    onOpenResources1: any;
    climateProjectList: any;
    full_name: any;
    contact_number: any;
    user_email: any;
    company: any;
    ekobon_help_you: any;
    message: any;
}
interface SS {
    id: any;
}
export default class Climate_ProjectController extends BlockComponent<
    Props,
    S,
    SS
> {
    apiClimateProjects: string = "";

    constructor(props: Props) {
        super(props);
        this.state = this.getEmptyState();
        this.onHandleSideBar = this.onHandleSideBar.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleSwithmode = this.handleSwithmode.bind(this);
        this.toTopFunction = this.toTopFunction.bind(this);
        this.onHandleOpenMenu = this.onHandleOpenMenu.bind(this);
        this.onHandleIndividualsOpen = this.onHandleIndividualsOpen.bind(this);
        this.onHandleCorporatesOpen = this.onHandleCorporatesOpen.bind(this);
        this.onClickResources = this.onClickResources.bind(this);
        this.onHandleGiftCard = this.onHandleGiftCard.bind(this);
        this.onHandlePlantTree = this.onHandlePlantTree.bind(this);
        this.onHandlePrivacyPolicy = this.onHandlePrivacyPolicy.bind(this);
        this.onHandleTermCondition = this.onHandleTermCondition.bind(this);
        this.onClickResources1 = this.onClickResources1.bind(this);
        this.receive = this.receive.bind(this);
        // Customizable Area Start
        this.subScribedMessages = [
            getName(MessageEnum.AccoutLoginSuccess),
            getName(MessageEnum.RestAPIResponceMessage),
            getName(MessageEnum.SessionSaveMessage),
            getName(MessageEnum.SessionResponseMessage),
        ];

        this.state = this.getEmptyState();

        // Customizable Area End
        runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
    }

    async receive(from: string, message: Message) {
        // Customizable Area Start
        runEngine.debugLog("Message Received", message);

        if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
            const apiRequestCallId = message.getData(
                getName(MessageEnum.RestAPIResponceDataMessage)
            );
            const responseJson = message.getData(
                getName(MessageEnum.RestAPIResponceSuccessMessage)
            );
            const errorReponse = message.getData(
                getName(MessageEnum.RestAPIResponceErrorMessage)
            );
            if (apiRequestCallId === this.apiClimateProjects) {
                if (responseJson != null) {
                    if (responseJson) {
                        if (responseJson.data) {
                            this.setState({
                                climateProjectList: responseJson.data,
                            });
                        }
                    } else {
                        this.parseApiErrorResponse(responseJson);
                    }
                }
                this.parseApiCatchErrorResponse(errorReponse);
            }
        }
        // Customizable Area End
    }
    async componentDidMount() {
        super.componentDidMount();
        this.FecthClimateProjectData();
        window.addEventListener('scroll', this.handleScroll);

        let loginDetails: any = localStorage.getItem("UserDetails");
        const loginFlags = JSON.parse(loginDetails)?.type;
        this.setState({
            loginFlag: loginFlags
        })
        const theme_data = localStorage.getItem("clim_theme");
        const data_val = theme_data ? JSON.parse(theme_data) : ''
        if (data_val != "") {
            console.log(data_val)
            if (data_val == "theme-light") {
                this.setState({
                    isDarkMode: false
                })
            }
            else {
                this.setState({
                    isDarkMode: true
                })
            }
        }
    }
    getEmptyState = () => ({
        loginFlag: "",
        isSideBarClick: false,
        isScroll: false,
        isDarkMode: false,
        onMenuOpen: false,
        onOpenIndividuals: false,
        onOpenCorporates: false,
        onOpenResources: false,
        climateProjectList: [],
        onOpenResources1: false,
        full_name: "",
        contact_number: "",
        user_email: "",
        company: "",
        ekobon_help_you: "",
        message: "",
    });
    toTopFunction() {
        window.scrollTo(0, 0)
    }

    onHandleSubmitRequestApi(e: any) {
        e.preventDefault();
        if (this.state.full_name && this.state.contact_number && this.state.user_email && this.state.company && this.state.ekobon_help_you && this.state.full_name && this.state.message) {
            const data = {
                fullName: this.state.full_name,
                phone_number: this.state.contact_number,
                email: this.state.user_email,
                message: this.state.message,
                helpyou: this.state.ekobon_help_you,
                company: this.state.company
            }
            axios({
                method: configJSON.apiPostMethod,
                url: configJSON.baseUrl1 + configJSON.contactUs2EndPointURL,
                data: data,
                headers: { "Content-Type": configJSON.dashboarContentType },
            })
                .then((res) => {
                    console.log({ res })
                    this.setState({
                        full_name: "",
                        contact_number: "",
                        user_email: "",
                        company: "",
                        ekobon_help_you: "",
                        message: "",
                    })
                    if (res?.data?.success == true) {
                        MESSAGE.success(res?.data?.message, 2);
                    } else {
                        MESSAGE.error(res?.data?.message, 2);
                    }
                })
                .catch((err) => {
                    console.log({ err })
                })
        } else {
            MESSAGE.error("All fields are maindetory!", 2);
        }
    }
    handleScroll() {
        if (window.scrollY > 100) {
            this.setState({
                isScroll: true
            });
        } else {
            this.setState({
                isScroll: false
            });
        }
    };

    FecthClimateProjectData = async () => {
        const header = {
            "Content-Type": configJSON.validationApiContentType,
        };
        const requestMessage = new Message(
            getName(MessageEnum.RestAPIRequestMessage)
        );
        this.apiClimateProjects = requestMessage.messageId;

        requestMessage.addData(
            getName(MessageEnum.RestAPIResponceEndPointMessage),
            configJSON.landingClimateProjectsEndPointUrl
        );

        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestBaseURLMessage),
            configJSON.baseURL
        );
        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestHeaderMessage),
            JSON.stringify(header)
        );
        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestMethodMessage),
            configJSON.apiGetMethod
        );
        runEngine.sendMessage(requestMessage.id, requestMessage);
    };

    handleSwithmode() {
        if (this.state.isDarkMode == true) {
            this.setState({
                isDarkMode: false,
            });
            localStorage.setItem("clim_theme", JSON.stringify("theme-light"))
        }
        else {
            this.setState({
                isDarkMode: true,
            });
            localStorage.setItem("clim_theme", JSON.stringify("theme-dark"))
        }
    }

    onClickResources1() {
        if (this.state.onOpenResources1 == true) {
            this.setState({
                onOpenResources1: false
            })
        }
        else {
            this.setState({
                onOpenResources1: true
            })
        }
    }

    onHandleSideBar() {
        if (this.state.isSideBarClick == true) {
            this.setState({
                isSideBarClick: false
            })
        } else {
            this.setState({
                isSideBarClick: true
            })
        }
    }

    onHandleIndividualsOpen() {
        if (this.state.onOpenIndividuals == true) {
            this.setState({
                onOpenIndividuals: false
            })
        } else {
            this.setState({
                onOpenIndividuals: true
            })
        }
    }

    onHandleCorporatesOpen() {
        if (this.state.onOpenCorporates == true) {
            this.setState({
                onOpenCorporates: false
            })
        } else {
            this.setState({
                onOpenCorporates: true
            })
        }
    }

    onClickResources() {
        if (this.state.onOpenResources == true) {
            this.setState({
                onOpenResources: false
            })
        }
        else {
            this.setState({
                onOpenResources: true
            })
        }
    }

    onHandleOpenMenu() {
        if (this.state.onMenuOpen == true) {
            this.setState({
                onMenuOpen: false
            })
        }
        else {
            this.setState({
                onMenuOpen: true
            })
        }
    }

    onHandleGiftCard() {
        localStorage.setItem("redirect_url", ("gift_card"))
        if (this.state.loginFlag) {
            this?.props?.history.push("/individual/giftCard")
        }
        else {
            this?.props?.history.push({
                pathname: "/login",
                state: "Individual"
            })
        }
    }

    onHandlePlantTree() {
        localStorage.setItem("redirect_url", ("plant_tree"))
        if (this.state.loginFlag) {
            this?.props?.history.push("/individual/offset-onetime")
        }
        else {
            this?.props?.history.push({
                pathname: "/login",
                state: "Individual"
            })
        }
    }

    onHandlePrivacyPolicy() {
        this?.props?.history.push("/individual/privacy-policy")
    }
    onHandleTermCondition() {
        this?.props?.history.push("/individual/terms-conditions")
    }
}
