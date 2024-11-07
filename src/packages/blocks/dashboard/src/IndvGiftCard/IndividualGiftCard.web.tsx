import React from "react";
// Customizable Area Start
import IndividualGiftCardController, {
  Props,
} from "./IndividualGiftCardController.web";
import { Row, Col } from "antd";
import OrderSummary from "../IndvOffset/OrderSummary.web";
import "./IndividualGiftCard.css";
import { FlightImg, EkobonLogo, RenewableImg, BannerImg3Img, NaureBasedSolutionsImg } from "../assets";

import {
  // VERTICALLINE,
  LOGO,
  NewGiftCardImg,
} from "./assets";
import { ScreenLoader } from "../assets";
import "../IndividaualScreen.web.css";
import { constants } from "../../../../components/src/types";
import {
  deviceMode,
  getHtmlElementById,
} from "../../../../components/src/CommonUtils";
// Customizable Area End
export default class IndividualGiftCard extends IndividualGiftCardController {
  render() {
    const {
      GIFT_CARD_HEADER,
      HEADER_BLOCK,
      TOTAL_IMPACT,
      GIFT_CARD_SUB_HEADER,
    } = constants.IndividualGiftCard;
    const {
      selectGiftCard,
      giftCardsList,
      loader,
      orderSummaryData,
      total_Gift_card,
      total_gift_card_categories,
      giftSummaryData,
      giftAmount
    } = this.state;

    const isMobile = deviceMode.isMobile;
    return (
      <div className="Indivdual_Project_MiddleContainer">
        <div className="Individual_Project_MidScreen_Main">
          <Row gutter={16}>
            <Col lg={18} md={18}>
              <div className="Individual_Project_first_block  gift-card-first-text">
                <div className="first_Project_block1  gift-card-first-text">
                  <div className="first_Project_block1_Main">
                    <h1 className="first_Project_block_head">
                      {GIFT_CARD_HEADER}
                    </h1>
                    <p className="first_Project_block_P">{HEADER_BLOCK}</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="one-time-offset-sec">
          <h4 style={{ margin: "25px 10px 0px 18px" }}>
            {GIFT_CARD_SUB_HEADER}
          </h4>
          <Row gutter={16} className="remove-overflow-x py-3 px-2  align-items-start">
            <Col lg={16} xs={24} sm={24} md={24}>
              <div>
                {loader ? (
                  <div className="screen-loader-center">
                    <img
                      src={ScreenLoader}
                      alt="loader"
                      className="screen-loader"
                    />
                  </div>
                ) : (
                  <div className="carbon-offset-onetime-life-sec">
                    <Row gutter={32} className="ct_align_unset ct_margin_0_1_0">
                      {total_gift_card_categories?.lenght !== 0 &&
                        total_gift_card_categories?.map((item: any, index: any) => (
                          <Col lg={8} md={8} xs={24}>
                            {console.log({ item })}
                            { item == "Generic Climate Offsetting" &&
                              <div className={
                                selectGiftCard === index + 1
                                  ? "ct_gift_card_main ct_inner_gift_card_main life-card-img-select" : "ct_gift_card_main ct_inner_gift_card_main"}
                                onClick={(e) => {
                                  if (isMobile) {
                                    getHtmlElementById("order-summary-mobile");
                                  }
                                  this.handleSelectGiftCard(index + 1);
                                }}>
                                <div className="ct_gift_left">
                                  <div className="ct_head_flex">
                                    <div className="ct_head_logo">
                                      <img src={EkobonLogo} />
                                    </div>
                                    <div className="ct_gift_short_head">
                                      <h5>Type- {item}</h5>
                                    </div>
                                  </div>
                                  <div className="ct_gift_title">
                                    <h4 className="ct_certificate_head mb-2"><span className="ct_Comforter_font">Gift </span> CARD</h4>
                                  </div>
                                  <div className="ct_bottom_cnt">
                                    <div className="ct_bottom_item mt-4">
                                      <p>
                                       
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="ct_gift_bgimg12">
                                  <img src={RenewableImg} />
                                  <img src={BannerImg3Img} />
                                </div>
                              </div>
                            }
                            { item == "Plant trees" &&
                              <div className={
                                selectGiftCard === index + 1 ? "ct_gift_card_main ct_inner_gift_card_main life-card-img-select" : "ct_gift_card_main ct_inner_gift_card_main"}
                                onClick={(e) => {
                                  if (isMobile) {
                                    getHtmlElementById("order-summary-mobile");
                                  }
                                  this.handleSelectGiftCard(index + 1);
                                }}>
                                <div className="ct_gift_left">
                                  <div className="ct_head_flex">
                                    <div className="ct_head_logo">
                                      <img src={EkobonLogo} />
                                    </div>
                                    <div className="ct_gift_short_head">
                                      <h5>Type- {item}</h5>
                                    </div>
                                  </div>
                                  <div className="ct_gift_title">
                                    <h4 className="ct_certificate_head mb-2"><span className="ct_Comforter_font">Gift </span> CARD</h4>
                                  </div>
                                  <div className="ct_bottom_cnt">
                                    <div className="ct_bottom_item mt-4">
                                      <p>
                                       
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="ct_gift_bgimg12 d-block">
                                  <img src={NaureBasedSolutionsImg} />
                                </div>
                              </div>
                            }
                            { item == "Flight travel" &&
                              <div className={
                                selectGiftCard === index + 1 ? "ct_gift_card_main ct_inner_gift_card_main life-card-img-select" : "ct_gift_card_main ct_inner_gift_card_main"}
                                onClick={(e) => {
                                  if (isMobile) {
                                    getHtmlElementById("order-summary-mobile");
                                  }
                                  this.handleSelectGiftCard(index + 1);
                                }}>
                                <div className="ct_gift_left">
                                  <div className="ct_head_flex">
                                    <div className="ct_head_logo">
                                      <img src={EkobonLogo} />
                                    </div>
                                    <div className="ct_gift_short_head">
                                      <h5>Type- {item}</h5>
                                    </div>
                                  </div>
                                  <div className="ct_gift_title">
                                    <h4 className="ct_certificate_head mb-2"><span className="ct_Comforter_font">Gift </span> CARD</h4>
                                  </div>
                                  <div className="ct_bottom_cnt">
                                    <div className="ct_bottom_item mt-4">
                                      <p>
                                      
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="ct_gift_bgimg12 d-block">
                                  <img src={FlightImg} />
                                </div>
                              </div>
                            }
                            {/* <div
                              className={
                                selectGiftCard === index + 1
                                  ? "carbon-offset-onetime-life-sec-card gift_card ct_small_gift_card life-card-img-select"
                                  : "carbon-offset-onetime-life-sec-card ct_small_gift_card gift_card"
                              }
                              onClick={(e) => {
                                if (isMobile) {
                                  getHtmlElementById("order-summary-mobile");
                                }
                                this.handleSelectGiftCard(index + 1);
                              }}
                            >
                              <div className="carbon-offset-onetime-life-card-text py-4 px-4   gift_card_inner_text gift_card_inner_text_upperpart ">
                                <div className="order-summary-newgift-card-sec ct_gift_card_box ct_giftcard_select">
                                  <div className="d-flex justify-content-between px-3 pt-3">
                                    <div>
                                      <p>Gift Card</p>
                                    </div>
                                    <div>
                                      <img
                                        src={LOGO}
                                        alt="img"
                                        className="ekobon_logo_order_summary"
                                      />
                                    </div>
                                  </div>
                                  <div className="offset-summary-rightimg-sec">
                                    <div className="offset-summary-rightimg-sub-sec ">
                                      <img src={NewGiftCardImg} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="carbon-offset-onetime-life-card-text py-4 px-4 gift_card_inner_text"><div className="ant-row carbon-offset-onetime-life-card-text-head justify-content-between mt-3"><p>{item}</p></div></div>
                            </div> */}
                          </Col>
                        ))
                      }
                    </Row>
                  </div>
                )}
              </div>
            </Col>
            <Col lg={8} md={8}>
              <OrderSummary
                id={""}
                history={this.state}
                location={""}
                orderSummaryData={orderSummaryData}
                CallGiftCardOrdersummary={this.handleGetGiftCardData}
                giftSummaryData={giftSummaryData}
                handleOrderSummaryData={(e: any) => this.handleOrderSummaryData(e)}
                giftAmount={giftAmount}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
