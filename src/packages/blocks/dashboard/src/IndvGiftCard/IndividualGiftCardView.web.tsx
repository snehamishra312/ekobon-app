import React from "react";
// Customizable Area Start
import IndividualGiftCardViewController, {
    Props,
} from "./IndividualGiftCardViewController.web";
import { Row, Col } from "antd";
import OrderSummary from "../IndvOffset/OrderSummary.web";
import "./IndividualGiftCard.css";
import { SECONDSQUARE } from "../assets";
import {
    // VERTICALLINE,
    LOGO,
    NewGiftCardImg,
} from "./assets";
import { FlightImg, EkobonLogo, RenewableImg, BannerImg3Img, NaureBasedSolutionsImg } from "../assets";
import "../IndividaualScreen.web.css";
import { constants } from "../../../../components/src/types";
import {
    deviceMode,
    getHtmlElementById,
} from "../../../../components/src/CommonUtils";
import { selected } from "../../../events/src/assets";
import { url } from "inspector";
import moment from "moment";
// Customizable Area End
export default class IndividualGiftCardView extends IndividualGiftCardViewController {
    render() {
        const {
            allGiftCard,
            selectedId,
            currencyCode
        } = this.state;

        const isMobile = deviceMode.isMobile;
        return (
            <div className="Indivdual_Project_MiddleContainer">
                <div>
                    <div>
                        <h4 style={{ margin: "25px 10px 30px 18px" }}>
                            My Gift Card
                        </h4>
                    </div>
                    <div className="carbon-offset-onetime-life-sec">
                        <section>
                            <div className="container">
                                {allGiftCard?.length !== 0 ? allGiftCard &&
                                    <div className="row align-items-center">
                                        {allGiftCard?.map((item: any) => (
                                            item?.category === "Generic Climate Offsetting" &&
                                            <div className="col-lg-12  mb-4 mx-auto" onClick={() => this.onHandleSelectId(item)}>
                                                <div className="ct_gift_card_main">
                                                    <div className="ct_gift_left ct_90_width">
                                                        <div className="ct_gift_short_head">
                                                            <h5>Type- {item?.category}</h5>
                                                        </div>
                                                        <div className="ct_gift_title">
                                                            <h4 className="ct_certificate_head ct_font_30 mb-2"><span className="ct_Comforter_font ct_font_75">Gift </span> CARD</h4>
                                                        </div>
                                                        <div className="ct_middle_cnt ct_big_gift_middle ct_mob_90">
                                                            <div className="ct_middle_item">
                                                                <h5><strong>To</strong></h5>
                                                                <h5><strong>{item?.name}</strong></h5>
                                                            </div>
                                                            <div className="ct_middle_item ">
                                                                <h5>From</h5>
                                                                <h5>{item?.from}</h5>
                                                            </div>
                                                            <div className="ct_middle_item">
                                                                <h5>Amount</h5>
                                                                <h5>{item?.amount}{" "}{currencyCode}</h5>
                                                            </div>
                                                            <div className="ct_middle_item">
                                                                <h5>Valid Until</h5>
                                                                <h5>{moment(item?.expiration).format('DD/MM/YYYY')}</h5>
                                                            </div>
                                                        </div>
                                                        <div className="ct_bottom_cnt ct_flex_between">
                                                            <div className="ct_bottom_item">
                                                                <img src={EkobonLogo} />
                                                            </div>
                                                            <div className="ct_bottom_item">
                                                                <p>
                                                                    <a>Click to redeem</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ct_gift_bgimg12 w-100">
                                                        <img src={RenewableImg} />
                                                        <img src={BannerImg3Img} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {allGiftCard?.map((item: any) => (
                                            item?.category === "Flight travel" &&
                                            <div className="col-lg-12  mb-4 mx-auto" onClick={() => this.onHandleSelectId(item)}>
                                                <div className="ct_gift_card_main">
                                                    <div className="ct_gift_left ct_90_width">
                                                        <div className="ct_gift_short_head">
                                                            <h5>Type- {item?.category}</h5>
                                                        </div>
                                                        <div className="ct_gift_title">
                                                            <h4 className="ct_certificate_head ct_font_30 mb-2"><span className="ct_Comforter_font ct_font_75">Gift </span> CARD</h4>
                                                        </div>
                                                        <div className="ct_middle_cnt ct_big_gift_middle ct_mob_90">
                                                            <div className="ct_middle_item">
                                                                <h5><strong>To</strong></h5>
                                                                <h5><strong>{item?.name}</strong></h5>
                                                            </div>
                                                            <div className="ct_middle_item">
                                                                <h5>From</h5>
                                                                <h5><strong>{item?.from}</strong></h5>
                                                            </div>
                                                            <div className="ct_middle_item">
                                                                <h5>No of Flights</h5>
                                                                <h5>{item?.no_of_flight}</h5>
                                                            </div>
                                                            <div className="ct_middle_item">
                                                                <h5>Valid Until</h5>
                                                                <h5><strong>{moment(item?.expiration).format('DD/MM/YYYY')}</strong></h5>
                                                            </div>
                                                        </div>
                                                        <div className="ct_bottom_cnt ct_flex_between">
                                                            <div className="ct_bottom_item">
                                                                <img src={EkobonLogo} />
                                                            </div>
                                                            <div className="ct_bottom_item">
                                                                <p>
                                                                    <a>Click to redeem</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ct_gift_bgimg13">
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {allGiftCard?.map((item: any) => (
                                            item?.category === "Plant trees" &&
                                            <div className="col-lg-12  mb-4 mx-auto" onClick={() => this.onHandleSelectId(item)}>
                                                <div className="ct_gift_card_main">
                                                    <div className="ct_gift_left ct_90_width">
                                                        <div className="ct_gift_short_head">
                                                            <h5>Type- {item?.category}</h5>
                                                        </div>
                                                        <div className="ct_gift_title">
                                                            <h4 className="ct_certificate_head ct_font_30 mb-2"><span className="ct_Comforter_font ct_font_75">Gift </span> CARD</h4>
                                                        </div>
                                                        <div className="ct_middle_cnt ct_big_gift_middle ct_mob_90">
                                                            <div className="ct_middle_item">
                                                                <h5><strong>To</strong></h5>
                                                                <h5>Type- {item?.name}</h5>
                                                            </div>
                                                            <div className="ct_middle_item">
                                                                <h5>From</h5>
                                                                <h5>Type- {item?.from}</h5>
                                                            </div>
                                                            <div className="ct_middle_item">
                                                                <h5>No. of Trees</h5>
                                                                <h5>{item?.no_of_trees}</h5>
                                                            </div>
                                                            <div className="ct_middle_item">
                                                                <h5>Valid Until</h5>
                                                                <h5><strong>{moment(item?.expiration).format('DD/MM/YYYY')}</strong></h5>
                                                            </div>
                                                        </div>
                                                        <div className="ct_bottom_cnt ct_flex_between">
                                                            <div className="ct_bottom_item">
                                                                <img src={EkobonLogo} />
                                                            </div>
                                                            <div className="ct_bottom_item">
                                                                <p>
                                                                    <a>Click to redeem</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ct_gift_bgimg_tree">
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    :
                                    <div>
                                        <h5 style={{ textAlign: "center" }}>
                                            No Gift Card Found !!
                                        </h5>
                                    </div>
                                }
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
