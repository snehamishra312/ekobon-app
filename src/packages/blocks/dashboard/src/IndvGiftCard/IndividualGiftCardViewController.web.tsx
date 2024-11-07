import { IBlock } from "../../../../framework/src/IBlock";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import { Message } from "../../../../framework/src/Message";
import { message as MESSAGE } from "antd";
import MessageEnum, {
    getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";
import { boolean } from "yup";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("../config");

export interface Props {
    id: string;
    history: any;
    location: any;
}

interface S {
    // Customizable Area Start
    loader: boolean;
    allGiftCard: any;
    selectedId: any;
    currencyCode: any;
}

interface SS {
    id: any;
}

export default class IndividualGiftCardViewController extends BlockComponent<
    Props,
    S,
    SS
> {
    apiGetGiftCardsList: string = "";
    apiGiftCardOrderSummary: string = "";
    apiGiftCardCategories: string = "";
    apiSetToCart: any = "";
    apiRedeemGiftCardId: any = "";

    constructor(props: Props) {
        super(props);

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
            if (apiRequestCallId === this.apiGetGiftCardsList) {
                if (responseJson !== null) {
                    this.setState({
                        allGiftCard: responseJson.gift_card
                    })
                }
            }
            else if (apiRequestCallId === this.apiSetToCart) {
                if (responseJson !== null) {
                    console.log(responseJson, "<<<<<<<<<<<<<>>>>>>>>>>>>>>");
                    localStorage.setItem("orderId", JSON.stringify(responseJson?.order_id))
                    console.log(responseJson, "+=======++=======++")
                    this.redeemGiftCard(responseJson?.gift_card_id);
                }
            }
            else if (apiRequestCallId === this.apiRedeemGiftCardId) {
                if (responseJson !== null) {
                    console.log({ responseJson });
                    setTimeout(() => {
                        if (responseJson?.redeem[0]?.category == "Generic Climate Offsetting") {
                            window.location.href = "/individual-payment/success"
                        }
                        else {
                            window.location.href = "/individual-payment/success-alert"
                        }
                    }, 1000)
                }
            }
        }
    }

    async componentDidMount() {
        super.componentDidMount();
        if (localStorage.getItem("token")) {
            this.getGiftCardsList();
            const currency_conversion = localStorage.getItem("currency_conversion") || "";
            const currencyConvert = currency_conversion ? JSON.parse(currency_conversion) : "";
            this.setState({
                currencyCode: currencyConvert?.currency_code,
            })
        }
    }

    getEmptyState = () => ({
        loader: false,
        allGiftCard: [],
        selectedId: 0,
        currencyCode: "",
    });

    onHandleSelectId = (val: any) => {
        this.setState({
            selectedId: val.id
        })
        MESSAGE.success("Project Selected", 5);
        const gift_redeem = "redeem_gift";
        localStorage.setItem("gift_redeem", gift_redeem);
        this.getAddtoGiftCardList(val);
    }

    redeemGiftCard = (data: any) => {
        const header = {
            "Content-Type": configJSON.validationApiContentType,
        };
        const requestMessage = new Message(
            getName(MessageEnum.RestAPIRequestMessage)
        );
        this.apiRedeemGiftCardId = requestMessage.messageId;
        requestMessage.addData(
            getName(MessageEnum.RestAPIResponceEndPointMessage),
            configJSON.individualRedemGiftCardEndPointUrl + `?id=${data}`
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
            configJSON.apiPostMethod
        );
        runEngine.sendMessage(requestMessage.id, requestMessage);
    }

    getAddtoGiftCardList = (val: any) => {
        this.setState({
            loader: true,
        });

        const token = localStorage.getItem("token") || "";
        const header = {
            "Content-Type": configJSON.validationApiContentType,
            token
        };
        const requestMessage = new Message(
            getName(MessageEnum.RestAPIRequestMessage)
        );
        this.apiSetToCart = requestMessage.messageId;
        requestMessage.addData(
            getName(MessageEnum.RestAPIResponceEndPointMessage),
            configJSON.getAddToCardEndPointUrl
        );
        const httpBody = {
            country: "India",
            currency_code: "INR",
            currency_rate: 80.5,
            currency_symbol: "₹",
            is_subscription: false,
            member: 1,
            name_on_certificate: val.name,
            offsetable_id: 1,
            gift_card_id: val.id,
            offsetable_type: "BxBlockCatalogue::IndividualLifestyleOneTimeOffset",
            total: val.amount,
            total_impact: val.total_impact,
            product_name: "reedem_type"
        };
        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestBaseURLMessage),
            configJSON.baseURL
        );
        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestHeaderMessage),
            JSON.stringify(header)
        );
        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestBodyMessage),
            JSON.stringify(httpBody)
        );
        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestMethodMessage),
            configJSON.apiPostMethod
        );
        runEngine.sendMessage(requestMessage.id, requestMessage);
    }

    getGiftCardsList = async () => {
        this.setState({
            loader: true,
        });
        const token = localStorage.getItem("UserDetails") || "";
        const data = JSON.parse(token ? token : "")
        console.log({ data })
        const header = {
            "Content-Type": configJSON.validationApiContentType,
            //   token,
        };
        const requestMessage = new Message(
            getName(MessageEnum.RestAPIRequestMessage)
        );
        this.apiGetGiftCardsList = requestMessage.messageId;
        requestMessage.addData(
            getName(MessageEnum.RestAPIResponceEndPointMessage),
            configJSON.getMyGiftCardEndPointUrl + `?email=${data.email}`
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
            configJSON.GetApiMethodType
        );
        runEngine.sendMessage(requestMessage.id, requestMessage);
    };
}