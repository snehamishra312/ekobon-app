import { Message } from "../../../../../framework/src/Message";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import { FaTemperatureLow } from "react-icons/fa";
import { AmdDependency } from "typescript";
import axios from "axios";
export const configJSON = require("../../config");
import { message as MESSAGE } from "antd";
export interface Props {
    history: any;
}
interface S {
    isInduvidual: any;
    isSideBarClick: any;
    isScroll: any;
    options: any;
    options2: any;
    options1: any;
    isDarkMode: any;
    loginFlag: any;
    classChange: any;
    onMenuOpen: any;
    onOpenIndividuals: any;
    onOpenCorporates: any;
    onOpenResources: any;
    userName: any;
    emailAddress: any;
    phone_number: any;
    onOpenResources1: any;
    options4: any;
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
export default class HomeDashboardController extends BlockComponent<
    Props,
    S,
    SS
> {
    apiRegisterAccount: string = "";
    constructor(props: Props) {
        super(props);
        this.state = this.getEmptyState();
        const newLocal = this;
        newLocal.onHandleSideBar = this.onHandleSideBar.bind(this);
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
        this.onHandlePushOnContact = this.onHandlePushOnContact.bind(this);
        this.onClickResources1 = this.onClickResources1.bind(this);
    }
    async componentDidMount() {
        super.componentDidMount();

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
        isInduvidual: true,
        isSideBarClick: false,
        onOpenResources1: false,
        isScroll: false,
        isDarkMode: false,
        loginFlag: "",
        classChange: false,
        onMenuOpen: false,
        onOpenIndividuals: false,
        onOpenCorporates: false,
        onOpenResources: false,
        userName: "",
        emailAddress: "",
        phone_number: "",
        options: {
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 1300,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1,
                },

                600: {
                    items: 2,
                },

                1000: {
                    items: 3,
                }
            },
        },
        options2: {
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 1300,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1,
                },

                600: {
                    items: 1,
                },

                1000: {
                    items: 1,
                }
            },
        },
        options4: {
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 1300,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1,
                },

                600: {
                    items: 1,
                },

                1000: {
                    items: 3,
                }
            },
        },
        options1: {
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 1300,
            autoplayTimeout: 8000,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },

                1000: {
                    items: 1,
                }
            },
        },
        full_name: "",
        contact_number: "",
        user_email: "",
        company: "",
        ekobon_help_you: "",
        message: "",
    });

    onHandleCarbonEmissionsTab(val: any) {
        if (val == "Individual") {
            this.setState({
                isInduvidual: false
            })
        } else {
            this.setState({
                isInduvidual: true
            })
        }
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

    toTopFunction() {
        window.scrollTo(0, 0)
    }

    // handleScroll() {
    //     if (window.scrollY > 100) {
    //         this.setState({
    //             isScroll: true,
    //             classChange: true
    //         });
    //     } else {
    //         this.setState({
    //             isScroll: false,
    //             classChange: false
    //         });
    //     }
    // };

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

    onHandlePrivacyPolicy() {
        this?.props?.history.push("/individual/privacy-policy")
    }
    onHandleTermCondition() {
        this?.props?.history.push("/individual/terms-conditions")
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
    onHandlePushOnContact() {
        this?.props?.history?.push("/contact")
    }

    onHandleSubmitDetail(e: any) {
        e.preventDefault();
        if (this.state.userName && this.state.emailAddress && this.state.phone_number) {
            const url1 = window?.location?.href;
            const baseUrl = url1 == "https://www.ekobon.com/" ? "https://backend.ekobon.com" : "http://3.111.2.55:3000";
            console.log(baseUrl)
            const data = [{
                "data": {
                    name: this.state.userName,
                    email: this.state.emailAddress,
                    phone_number: this.state.phone_number,
                    description: ".",
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
                            userName: "",
                            emailAddress: "",
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

}
