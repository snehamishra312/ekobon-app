import React from "react";
import {
  Collapse,
  Col,
  Row,
  Button,
  Radio,
  Form,
  Input,
  Card,
  Checkbox,
  Spin,
} from "antd";

import IndividualAddtoCartAndPaymentController, {
  Props,
} from "./IndividualAddtoCartAndPaymentController.web";
import {
  AmericanExpressCard,
  VisaImg,
  UnionpCard,
  MasterCard,
  DeleteTrash,
  ToastErrorIcon,
  Icon_Close
} from "../assets";
import { FlightImg, EkobonLogo, RenewableImg, BannerImg3Img, NaureBasedSolutionsImg } from "../assets";


import PaymentInputs from "./PaymentInputs.web";
import OrderSummary from "../IndvOffset/OrderSummary.web";
import BusinessOrderSummary from "../Business/BusinessOffset/BusinessOrderSummary.web";
import { constants } from "../../../../components/src/types";
import { deviceMode } from "../../../../components/src/CommonUtils";
import moment from "moment";

const { Panel } = Collapse;

export default class IndividualAddtoCartAndPayment extends IndividualAddtoCartAndPaymentController {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const {
      tabClick,
      selectedMethod,
      selectedDebitCredit,
      cardNumber,
      expiryDate,
      cvvNo,
      cardName,
      CartListData,
      screenLoard,
      cardLoard,
      paymentStatusLoader,
      orderSummaryData,
      noOfTrees,
      project_detail,
      project_image,
      gift_offset,
      cardPaymentDetail,
      fromName,
      currencyCode,
    } = this.state;
    const isMobile = deviceMode.isMobile
    const location = window.location.pathname;
    const { contact_team } = constants?.BusinessScreen;

    return (
      <div className="one-time-offset-sec">
        <div className={
          this.state.paymentError ? "errorToastContainer" : "closeToast"
        }
        >
          <section className="closeIconConatiner">
            <div className="toast-flex"
            ><img src={ToastErrorIcon} alt="error-icon" className="errToastIconLeft" />
              <p className="toastText">{contact_team}</p>
            </div>
            <img src={Icon_Close} alt="close" onClick={() => {
              this.setState({ paymentError: null })
            }} className="toastClose" />
          </section>
        </div>
        <div className={(selectedDebitCredit === "addnew" && isMobile) ? "remove-overflow-x py-3 px-1" : "remove-overflow-x py-3 px-4"}
        >
          <div className="indv-faq-head mb-4">
            <button>
              <i
                className="fas fa-angle-left"
                onClick={() => this.props.history.goBack()}
              />
            </button>
            <p>Cart</p>
          </div>
          <Row gutter={16} className="remove-overflow-x py-3 px-2 ct_align_start">
            <Col lg={16} md={16}>
              <div className="indv-add-cart-sec">
                <Spin
                  spinning={paymentStatusLoader}
                  tip="Please do not refresh the page and wait while we are processing your payment. This can take a few minutes."
                >
                  <div>
                    <Collapse
                      accordion
                      expandIconPosition="right"
                      activeKey={tabClick}
                      onChange={this.collapseOnchangeTab}
                    >
                      <Panel
                        header="Payment Details"
                        key="1"
                        className="indiv_add_cart_table"
                      >
                        <div className="img_section_custome">
                          <div className="row mb-3">
                            {cardPaymentDetail &&
                              cardPaymentDetail.map((item: any) => (item?.attributes?.offset_type != "gift_cards" && item?.attributes?.product_name != "Agroforestry" &&
                                <>
                                  <div className="col-md-6 mb-4 mb-md-0">
                                    <div className="ct_project_img new_Class_img">
                                      <img
                                        src={item?.attributes?.image}
                                        alt="project_detail"
                                        width="100%"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6 align-self-center mb-4 mb-md-0">
                                    <div className="ct_project_dtl">
                                      <div className="mb-2">
                                        <h4 style={{ fontWeight: "600" }}>Project Selected :-</h4>
                                        <div style={{ fontWeight: "300" }}> {item?.attributes?.product_name}</div>
                                      </div>
                                      <div>
                                        <h4 style={{ fontWeight: "600" }}>Number of Trees :-</h4>
                                        <p className="mb-0"><strong>{0}</strong> trees</p>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              ))
                            }
                            {cardPaymentDetail &&
                              cardPaymentDetail.map((item: any) => (item?.attributes?.offset_type != "gift_cards" && item?.attributes?.product_name == "Agroforestry" &&
                                <>
                                  <div className="col-md-6 mb-4 mb-md-0">
                                    <div className="ct_project_img new_Class_img">
                                      <img
                                        src={item?.attributes?.image}
                                        alt="project_detail"
                                        width="100%"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6  mb-4 mb-md-0">
                                    <div className="ct_project_dtl">
                                      <div className="mb-2">
                                        <h4 style={{ fontWeight: "600" }}>Project Selected :-</h4>
                                        <div style={{ fontWeight: "300" }}> {item?.attributes?.product_name}</div>
                                      </div>
                                      <div>
                                        <h4 style={{ fontWeight: "600" }}>Number of Trees :-</h4>
                                        <p className="mb-0"><strong>{noOfTrees}</strong> trees</p>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              ))
                            }
                            {cardPaymentDetail &&
                              cardPaymentDetail.map((item: any) => (item?.attributes?.offset_type == "gift_cards" && item?.attributes?.giftcard_type == "Generic Climate Offsetting"  &&
                                <div className="col-md-12 mt-2" >
                                  <div className="ct_gift_card_main align-items-start ct_payment_gift_main">
                                    <div className="ct_gift_left ct_gift_left_12">
                                      <div className="ct_gift_short_head">
                                        <h5>Type- {item?.attributes?.giftcard_type}</h5>
                                      </div>
                                      <div className="ct_gift_title">
                                        <h4 className="ct_certificate_head ct_font_14 mb-2"><span className="ct_Comforter_font ct_font_35">Gift </span> CARD</h4>
                                      </div>
                                      <div className="ct_middle_cnt ct_payment_gift_middle">
                                        <div className="ct_middle_item">
                                          <h5><strong>To</strong></h5>
                                          <h5><strong>{item?.attributes?.name}</strong></h5>
                                        </div>
                                        <div className="ct_middle_item ">
                                          <h5>From </h5>
                                          <h5 style={{ marginLeft: '5px' }}>{fromName}</h5>
                                        </div>
                                        <div className="ct_middle_item">
                                          <h5>Amount</h5>
                                          <h5>{item?.attributes?.total}{" "}{currencyCode}</h5>
                                        </div>
                                        <div className="ct_middle_item">
                                          <h5>Valid Until</h5>
                                          <h5>{moment(item?.attributes?.expire).format('DD/MM/YYYY')}</h5>
                                        </div>
                                      </div>
                                      <div className="ct_bottom_cnt ct_flex_between ct_payment_gift_btm">
                                        <div className="ct_bottom_item">
                                          <img src={EkobonLogo} />
                                        </div>
                                        <div className="ct_bottom_item">
                                          <p>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ct_gift_bgimg12 ct_h_126">
                                      <img src={RenewableImg} />
                                      <img src={BannerImg3Img} />
                                    </div>
                                  </div>
                                </div>
                              ))
                            }
                            {cardPaymentDetail &&
                              cardPaymentDetail.map((item: any) => (item?.attributes?.offset_type == "gift_cards" && item?.attributes?.giftcard_type == "Plant trees"  &&
                                <div className="col-md-12 mt-2" >
                                  <div className="ct_gift_card_main align-items-start ct_payment_gift_main">
                                    <div className="ct_gift_left ct_gift_left_12">
                                      <div className="ct_gift_short_head">
                                        <h5>Type- {item?.attributes?.giftcard_type}</h5>
                                      </div>
                                      <div className="ct_gift_title">
                                        <h4 className="ct_certificate_head ct_font_14 mb-2"><span className="ct_Comforter_font ct_font_35">Gift </span> CARD</h4>
                                      </div>
                                      <div className="ct_middle_cnt ct_payment_gift_middle">
                                        <div className="ct_middle_item">
                                          <h5><strong>To</strong></h5>
                                          <h5><strong>{item?.attributes?.name}</strong></h5>
                                        </div>
                                        <div className="ct_middle_item ">
                                          <h5>From </h5>
                                          <h5 style={{ marginLeft: '5px' }}>{fromName}</h5>
                                        </div>
                                        <div className="ct_middle_item">
                                          <h5>Amount</h5>
                                          <h5>{item?.attributes?.total}{" "}{currencyCode}</h5>
                                        </div>
                                        <div className="ct_middle_item">
                                          <h5>Valid Until</h5>
                                          <h5>{moment(item?.attributes?.expire).format('DD/MM/YYYY')}</h5>
                                        </div>
                                      </div>
                                      <div className="ct_bottom_cnt ct_flex_between ct_payment_gift_btm">
                                        <div className="ct_bottom_item">
                                          <img src={EkobonLogo} />
                                        </div>
                                        <div className="ct_bottom_item">
                                          <p>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ct_gift_height">
                                      <img src={NaureBasedSolutionsImg} className="ct_height_157" />
                                    </div>
                                  </div>
                                </div>
                              ))
                            }
                            {cardPaymentDetail &&
                              cardPaymentDetail.map((item: any) => (item?.attributes?.offset_type == "gift_cards" && item?.attributes?.giftcard_type == "Flight travel" &&
                                <div className="col-md-12 mt-2" >
                                  <div className="ct_gift_card_main align-items-start ct_payment_gift_main">
                                    <div className="ct_gift_left ct_gift_left_12">
                                      <div className="ct_gift_short_head">
                                        <h5>Type- {item?.attributes?.giftcard_type}</h5>
                                      </div>
                                      <div className="ct_gift_title">
                                        <h4 className="ct_certificate_head ct_font_14 mb-2"><span className="ct_Comforter_font ct_font_35">Gift </span> CARD</h4>
                                      </div>
                                      <div className="ct_middle_cnt ct_payment_gift_middle">
                                        <div className="ct_middle_item">
                                          <h5><strong>To</strong></h5>
                                          <h5><strong>{item?.attributes?.name}</strong></h5>
                                        </div>
                                        <div className="ct_middle_item ">
                                          <h5 >From </h5>
                                          <h5 style={{ marginLeft: '5px' }}>{fromName}</h5>
                                        </div>
                                        <div className="ct_middle_item">
                                          <h5>Amount</h5>
                                          <h5>{item?.attributes?.total}{" "}{currencyCode}</h5>
                                        </div>
                                        <div className="ct_middle_item">
                                          <h5>Valid Until</h5>
                                          <h5>{moment(item?.attributes?.expire).format('DD/MM/YYYY')}</h5>
                                        </div>
                                      </div>
                                      <div className="ct_bottom_cnt ct_flex_between ct_payment_gift_btm">
                                        <div className="ct_bottom_item">
                                          <img src={EkobonLogo} />
                                        </div>
                                        <div className="ct_bottom_item">
                                          <p>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ct_gift_height">
                                      <img src={FlightImg} className="ct_height_157"/>
                                    </div>
                                  </div>
                                </div>
                              ))
                            }
                            {/* <div className="col-md-6 mb-4 mb-md-0">
                              <div className="ct_project_img">
                                {project_image ?
                                  <img
                                    src={project_image}
                                    alt="project_detail"
                                    width="100%"
                                  />
                                  : project_detail?.project_image &&
                                  <img
                                    src={project_detail?.project_image}
                                    alt="project_detail"
                                    width="100%"
                                  />
                                }
                              </div>
                            </div>
                            <div className="col-md-6  mb-4 mb-md-0">
                              <div className="ct_project_dtl">
                                <div className="mb-2">
                                  <h4>{gift_offset ? "Gift card Type" : "Project Selected"} :-</h4>
                                  <p>{gift_offset ? gift_offset : project_detail?.project_name ? project_detail?.project_name : <div style={{ fontWeight: "500" }}>NA</div>}</p>
                                </div>
                                {gift_offset == "Flight travel" ? <div>
                                  <h4>Number of Flight :-</h4>
                                  <p className="mb-0"><strong>{noOfTrees}</strong> flights</p>
                                </div> :
                                  <div>
                                    <h4>Number of Trees :-</h4>
                                    <p className="mb-0"><strong>{noOfTrees}</strong> trees</p>
                                  </div>
                                }
                              </div>
                            </div> */}
                          </div>
                        </div>
                        <div className="cart-border-top">
                          <div className="cart-radio-button">
                            {/* <Radio
                              checked={selectedMethod === "GPay" ? true : false}
                              onChange={(e) =>
                                this.PaymentMenthodSelect("GPay")
                              }
                            >
                             Continue Payment
                            </Radio> */}
                            {/* {selectedMethod === "GPay" && (
                              <div className="payment-method-input" />
                            )} */}
                            {/* <span className="cart-border" /> */}
                            {/* <Radio
                              checked={
                                selectedMethod === "paytm" ? true : false
                              }
                              onChange={(e) =>
                                this.PaymentMenthodSelect("paytm")
                              }
                            >
                              Paytm
                            </Radio>
                            {selectedMethod === "paytm" && (
                              <div className="payment-method-input" />
                            )} */}
                            {/* <span className="cart-border" />
                            <Radio
                              checked={
                                selectedMethod === "debitCredit" ? true : false
                              }
                              onChange={(e) =>
                                this.PaymentMenthodSelect("debitCredit")
                              }
                            >
                              Debit/Credit Card
                            </Radio> */}
                            {/* {selectedMethod === "debitCredit" && (
                              <Spin spinning={screenLoard} tip="Please wait...">
                                <div className="debit-credit-card debit-credit-card-padding-ns">
                                  <Card className="card-padding-payment-ns">
                                    <div className="payment-method-input">
                                      {CartListData.map((data: any, i: any) => {
                                        return (
                                          <>
                                            <div
                                              className="d-flex justify-content-between align-items-center"
                                              key={i}
                                            >
                                              <Radio
                                                checked={
                                                  selectedDebitCredit ===
                                                  data.id
                                                    ? true
                                                    : false
                                                }
                                                onChange={(e) =>
                                                  this.PaymentSelectedCard(
                                                    data.id
                                                  )
                                                }
                                                className="card-img-radio"
                                              >
                                                <div className="saved-card-details">
                                                  <p>
                                                    .... .... .... {data.last4}
                                                  </p>
                                                  <p>
                                                    Expiry: {data.exp_month}/
                                                    {data.exp_year}
                                                  </p>
                                                </div>
                                              </Radio>

                                              <div className="saved-card-details-img padding-r">
                                                {data.brand === "Visa" ? (
                                                  <img
                                                    src={VisaImg}
                                                    alt="VisaImg"
                                                  />
                                                ) : data.brand ===
                                                  "MasterCard" ? (
                                                  <img
                                                    src={MasterCard}
                                                    alt="MasterCard"
                                                  />
                                                ) : data.brand ===
                                                  "American Express" ? (
                                                  <img
                                                    src={AmericanExpressCard}
                                                    alt="AmericanExpressCard"
                                                  />
                                                ) : data.brand ===
                                                  "UnionPay" ? (
                                                  <img
                                                    src={UnionpCard}
                                                    alt="UnionpCard"
                                                  />
                                                ) : null}
                                              </div>
                                              <div className="trashCard">
                                                <img
                                                  src={DeleteTrash}
                                                  alt="DeleteTrash"
                                                  onClick={() =>
                                                    this.handleRemoveCardFromList(
                                                      data.id
                                                    )
                                                  }
                                                />
                                              </div>
                                            </div>
                                            <span className="cart-border" />
                                          </>
                                        );
                                      })}
                                      <Radio
                                        checked={
                                          selectedDebitCredit === "addnew"
                                            ? true
                                            : false
                                        }
                                        onChange={(e) =>
                                          this.PaymentSelectedCard("addnew")
                                        }
                                      >
                                        Add new Card
                                      </Radio>
                                      {selectedDebitCredit === "addnew" && (
                                        <div className="payment-method-input">
                                          <div
                                            className="AddNewCard AddNewCard-margin-ns"
                                          >
                                             <Spin spinning={cardLoard} tip="Please wait...">
                                            <p>Card Number</p>
                                            <Form
                                              layout="vertical"
                                              autoComplete="off"
                                            >
                                              <Form.Item
                                                label=""
                                                name="cardNumber"
                                                rules={[
                                                  {
                                                    required: true,
                                                    message:
                                                      "Enter Card Number",
                                                  },
                                                ]}
                                              >
                                                <PaymentInputs
                                                  cardNumber={cardNumber}
                                                  expiryDate={expiryDate}
                                                  cvvNo={cvvNo}
                                                  handleInputOnChange={(
                                                    e: any
                                                  ) =>
                                                    this.handleInputOnChange.bind(
                                                      this,
                                                      e
                                                    )
                                                  }
                                                />
                                              </Form.Item>
                                              <div className="py-3">
                                                <p>Name On Card</p>
                                                <Form.Item
                                                  name="cardName"
                                                  rules={[
                                                    {
                                                      required: true,
                                                      message:
                                                        "Enter Card Name",
                                                    },
                                                    {
                                                      pattern:
                                                        /^[a-zA-Z ]{2,40}$/,
                                                      message:
                                                        "Name must contain letter, NO number and special character (@,$,%,#).",
                                                    },
                                                  ]}
                                                >
                                                  <Input
                                                    size="large"
                                                    placeholder="Enter Name Of Card"
                                                    value={cardName}
                                                    onChange={(e: any) =>
                                                      this.handleNameInputOnChange(
                                                        e
                                                      )
                                                    }
                                                  />
                                                </Form.Item>
                                              </div>

                                              <Form.Item
                                                name="cardsave"
                                                className="mt-3"
                                              >
                                                <Checkbox>
                                                  Save this Card Securely
                                                </Checkbox>
                                              </Form.Item>
                                              <div className={isMobile?"d-flex justify-content-center":"d-flex justify-content-end"}>
                                                <Button
                                                  className={
                                                    cardName.length > 0
                                                      ? "indv-cart-btn"
                                                      : "disabed-click indv-cart-btn"
                                                  }
                                                  onClick={
                                                    this.handleAddNewCard
                                                  }
                                                  disabled={
                                                    cardName.length > 0
                                                      ? false
                                                      : true
                                                  }
                                                >
                                                  Save
                                                </Button>
                                              </div>
                                            </Form>
                                          </Spin>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </Card>
                                </div>
                              </Spin>
                            )} */}
                            {/* <span className="cart-border" />
                            <Radio
                              checked={
                                selectedMethod === "internetbank" ? true : false
                              }
                              onChange={(e) =>
                                this.PaymentMenthodSelect("internetbank")
                              }
                            >
                              Internet Banking
                            </Radio>
                            {selectedMethod === "internetbank" && (
                              <div className="payment-method-input" />
                            )} */}
                            {/* <span className="cart-border" /> */}
                          </div>
                          <div className={isMobile ? "d-flex justify-content-center" : "d-flex justify-content-end"}>
                            <Button
                              className="indv-cart-btn"
                              onClick={this.handleCardOrderContinue}
                            >
                              Checkout
                            </Button>
                          </div>
                        </div>
                      </Panel>
                    </Collapse>
                  </div>
                </Spin>
              </div>
            </Col>
            <Col lg={8} md={8}>
              {location == "/business/AddtoCard" ||
                location === "/business/AddtoCard/payment" ? (
                <BusinessOrderSummary
                  id={""}
                  history={""}
                  location={""}
                  orderSummaryData={orderSummaryData}
                />
              ) : (
                <OrderSummary
                  id={""}
                  history={""}
                  location={""}
                  orderSummaryData={orderSummaryData}
                />
              )}
            </Col>
          </Row>
        </div>
      </div >
    );
  }
}
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}