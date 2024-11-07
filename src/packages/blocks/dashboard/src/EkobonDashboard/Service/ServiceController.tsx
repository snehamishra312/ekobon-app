import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import axios from "axios";
export const configJSON = require("../../config");
import { message as MESSAGE } from "antd";
export interface Props {
    history: any;
}
interface S {
    loginFlag: any;
    isSideBarClick: any;
    isScroll: any;
    onOpenResources1: any;
    isDarkMode: any;
    onMenuOpen: any;
    onOpenIndividuals: any;
    onOpenCorporates: any;
    onOpenResources: any;
    firstName: any;
    lastName: any;
    emailAddress: any;
    messages: any;
    phone_number: any;
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
export default class ServiceController extends BlockComponent<
    Props,
    S,
    SS
> {
    apiRegisterAccount: string = "";
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
        this.onHandleSubmitDetail = this.onHandleSubmitDetail.bind(this);
        this.onHandlePrivacyPolicy = this.onHandlePrivacyPolicy.bind(this);
        this.onHandleTermCondition = this.onHandleTermCondition.bind(this);
        this.onClickResources1 = this.onClickResources1.bind(this);

    }
    async componentDidMount() {
        window.scrollTo(0, 300);
        super.componentDidMount();
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
        isSideBarClick: false,
        isScroll: false,
        loginFlag: "",
        firstName: "",
        lastName: "",
        emailAddress: "",
        messages: "",
        phone_number: "",
        isDarkMode: false,
        onMenuOpen: false,
        onOpenIndividuals: false,
        onOpenCorporates: false,
        onOpenResources: false,
        onOpenResources1: false,
        full_name: "",
        contact_number: "",
        user_email: "",
        company: "",
        ekobon_help_you: "",
        message: "",
    });

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
    toTopFunction() {
        window.scrollTo(0, 0)
    }

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

    onHandleSubmitDetail(e: any) {
        e.preventDefault();
        if (this.state.firstName && this.state.emailAddress && this.state.phone_number && this.state.messages) {
            const url1 = window?.location?.href;
            const baseUrl = url1 == "https://www.ekobon.com/service" ? "https://backend.ekobon.com" : "http://3.111.2.55:3000";
            const data = [{
                "data": {
                    name: this.state.firstName + " " + this.state.lastName,
                    email: this.state.emailAddress,
                    phone_number: this.state.phone_number,
                    description: this.state.messages,
                }
            }]
            axios({
                method: configJSON.apiPostMethod,
                url: baseUrl + "/" + configJSON.ContactUsEndPointUrl,
                headers: { "Content-Type": configJSON.dashboarContentType },
                data: data[0],
            })
                .then((res: any) => {
                    if (res.data) {
                        MESSAGE.success("Details sent successfully.", 5);
                        this.setState({
                            firstName: "",
                            lastName: "",
                            emailAddress: "",
                            messages: "",
                            phone_number: "",
                        })
                    }
                    else {
                        MESSAGE.error("Unable to sent details!!", 5);
                    }
                })
                .catch((err) => {
                    console.log({ err })
                    MESSAGE.error("Unable to sent detail, Please try again!!", 5);
                })
        }
        else {
            MESSAGE.error("Please fill all the field", 5);
        }
    }

    onHandlePrivacyPolicy() {
        this?.props?.history.push("/individual/privacy-policy")
    }
    onHandleTermCondition() {
        this?.props?.history.push("/individual/terms-conditions")
    }
}
