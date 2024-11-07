import React from "react";
// Customizable Area Start
import BusinessOrderSummaryController, {
  Props,
} from "./BusinessOrderSummaryController.web";
import { Row, Col, Card, Form, Input, Button, Select, Tooltip } from "antd";
import { flightImg, CartProjects, InfoImg, LOGO } from "./assets";
import { BusinessPackageData } from "../../BusinessPackageData";
import { FrequencyDataList } from "../../FrequencyDataList";
import { HISTORY } from "../../../../../components/src/comman";
export const NewGiftCardImg = require("../../../assets/Gift_cart_green_img.png");
import { constants } from "../../../../../components/src/types";
import {
  calculateTotalAmountForBusiness,
  calculateTotalImpactBusiness,
  roundTwoDecimal,
} from "../../../../../framework/src/Utilities";
import { deviceMode } from "../../../../../components/src/CommonUtils";

const { Option } = Select;
// Customizable Area End

class BusinessOrderSummary extends BusinessOrderSummaryController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const disableCartButton = () => {
      let isDisable = false;
      const location = window.location.pathname;
      if (
        location === "/business/offset-employee" &&
        (this.state.orderSummaryDetails?.total_impact <= 0 ||
          !this.props.orderSummaryData?.total_impact)
      ) {
        isDisable = true;
      }
      if (
        location === "/business/subscription-employee" &&
        (!this.state.orderSummaryDetails?.frequency_total_impact ||
          !this.props.orderSummaryData?.total_impact)
      ) {
        isDisable = true;
      }
      if (
        location === "/business/subscription-flight" &&
        !this.state.orderSummaryDetails?.frequency_total_impact
      ) {
        isDisable = true;
      } else if (!this.state.orderSummaryDetails?.total_impact) {
        isDisable = true;
      }
      return isDisable;
    };

    let currency_conversion = localStorage.getItem("currency_conversion");
    let currency_conversion_response = currency_conversion
      ? JSON.parse(currency_conversion)
      : null;
    let is_custom_data = localStorage.getItem("is_custom_data");
    let is_custom_data_response = is_custom_data
      ? JSON.parse(is_custom_data)
      : null;

    const {
      EMPLOYEES_NUMBER,
      ACCOUNT_NOX,
      PEOPLE_RELATED,
      FLIGHT_RELATED,
      CAR_RELATED,
      HOTEL_RELATED,
      NUMBERS_PLANT,
      VALUE_GREATER_50,
      CERTIFICATE_NAME,
      TOTAL_IMPACT,
      ANNUAL_OFFSET_TREE,
      MATURITY_TREE,
      HOORAY_MESSAGE,
      AMOUNT_CCY,
      IMPACT_TONNES,
      ANNUAL_AMOUNT,
      ENTER_PLANT_NUMBER,
      RENEW_MESSAGE,
    } = constants.BusinessOrderSummary;
    const customAmountHandler = () => {
      if (is_custom_data_response?.is_custom_impact) {
        return roundTwoDecimal(
          currency_conversion_response?.currency_rate *
          this.state.customImpact *
          this.state.carbonPerTonValue
        );
      }
      if (is_custom_data_response?.is_custom_impact == null) {
        return roundTwoDecimal(
          currency_conversion_response?.currency_rate *
          this.state.customImpact *
          this.state.carbonPerTonValue || orderSummaryData?.custom_amount
        );
      }
      return roundTwoDecimal(customAmount);
    };
    const { orderSummaryData, EmployeeData, finalTotalImpact } = this.props;
    const {
      orderSummaryDetails,
      orderName,
      comments,
      name_on_certificate,
      finalTotal,
      NoOfPlants,
      customAmount,
      customImpact,
      giftCardName,
    } = this.state;

    const location = window.location.pathname;
    const isMobile = deviceMode.isMobile;

    const title =
      location == ("/business/AddtoCard" || "business/AddtoCard/payment") ? (
        "Price Details"
      ) : isMobile ? (
        <div className="order-summary-header ns-order-summary-header">
          {"Order Summary".toUpperCase()}
        </div>
      ) : (
        "Order Summary"
      );

    const showOrderName =
      location == "/business/offset-employee" ||
      location == "/business/offset-flight" ||
      location == "/business/offset-flight-by-distance" ||
      location == "/business/offset-car" ||
      location == "/business/offset-event" ||
      location == "/business/subscription-employee" ||
      location == "/business/subscription-flight" ||
      location == "/business/subscription-car";
    const showPackage =
      location == "/business/offset-employee" ||
      location == "/business/subscription-employee";
    const showFrequency =
      location == "/business/subscription-employee" ||
      location == "/business/subscription-flight" ||
      location == "/business/subscription-car";
    const showCertificate =
      location == "/business/offset-employee" ||
      location == "/business/offset-flight" ||
      location == "/business/offset-flight-by-distance" ||
      location == "/business/offset-car" ||
      location == "/business/offset-event" ||
      location == "/business/subscription-employee" ||
      location == "/business/subscription-flight" ||
      location == "/business/subscription-car";
    const showComments =
      location == "/business/offset-employee" ||
      location == "/business/offset-flight" ||
      location == "/business/offset-flight-by-distance" ||
      location == "/business/offset-car" ||
      location == "/business/offset-event" ||
      location == "/business/subscription-employee" ||
      location == "/business/subscription-flight" ||
      location == "/business/subscription-car";

    return (
      <div
        className="indv-offset-order-summay ct_mt_70"
        id={this.props.urbonSmoothScrollForMobileId}
      >
        <Card title={title} bordered={false} id="order-summary-mobile">
          <div className="my-2">
            <Form
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={this.handleFinish}
              autoComplete="off"
              className="offset-onetime-order-summery"
            >
              {location === "/business/offset-employee" && (
                <>
                  <div className="px-4 py-3">
                    <div className="mb-3 d-flex justify-content-between">
                      <div className="buss-sum-head-txt">
                        <p>COUNTRY</p>
                      </div>
                      <div className="buss-sum-head-txt-p">
                        <p>
                          {EmployeeData?.country ? EmployeeData?.country : "--"}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="buss-sum-head-txt">
                        <p>{EMPLOYEES_NUMBER}</p>
                      </div>
                      <div className="buss-sum-head-txt-p">
                        <p>
                          {EmployeeData?.no_of_employee
                            ? EmployeeData?.no_of_employee
                            : "--"}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {location === "/business/offset-flight" && (
                <>
                  <div className="padding-top-Left">
                    {orderSummaryData && (
                      <div className="mb-4">
                        <Row gutter={16}>
                          <Col lg={6} md={6}>
                            <div className="buss-sum-head-txt-p">
                              <p>FROM</p>
                            </div>
                            <div className="buss-sum-head-txt2">
                              <p>
                                {orderSummaryData
                                  ? orderSummaryData.from
                                  : "--"}
                              </p>
                            </div>
                          </Col>
                          <Col lg={11} md={11}>
                            <div className="bus-offset-flight-sum-img d-flex justify-content-center align-items-center">
                              <img src={flightImg} />
                            </div>
                          </Col>
                          <Col lg={7} md={7}>
                            <div className="buss-sum-head-txt-p">
                              <p>TO</p>
                            </div>
                            <div className="buss-sum-head-txt2">
                              <p title={orderSummaryData?.to}>
                                {orderSummaryData?.to?.length > 20
                                  ? orderSummaryData?.to
                                    ?.substr(0, 20)
                                    ?.concat("...")
                                  : orderSummaryData?.to}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    )}

                    <div className="mb-3 d-flex justify-content-between">
                      <div className="buss-sum-head-txt">
                        <p>TOTAL DISTANCE</p>
                      </div>
                      <div className="buss-sum-head-txt-p">
                        <p>
                          {orderSummaryData
                            ? orderSummaryData.total_distance
                            : "--"}
                        </p>
                      </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                      <div className="buss-sum-head-txt">
                        <p>PASSENGERS</p>
                      </div>
                      <div className="buss-sum-head-txt-p">
                        <p>
                          {orderSummaryData
                            ? orderSummaryData.passengers
                            : "--"}
                        </p>
                      </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                      <div className="buss-sum-head-txt">
                        <p>CLASS</p>
                      </div>
                      <div className="buss-sum-head-txt-p">
                        <p className="text_capital">
                          {orderSummaryData ? orderSummaryData.class : "--"}
                        </p>
                      </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                      <div className="buss-sum-head-txt">
                        <p>RETURN FLIGHT</p>
                      </div>
                      <div className="buss-sum-head-txt-p">
                        <p>
                          {orderSummaryData
                            ? orderSummaryData.return_flight
                            : "--"}
                        </p>
                      </div>
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                      <div className="buss-sum-head-txt">
                        <p>NO OF JOURNEYS</p>
                      </div>
                      <div className="buss-sum-head-txt-p">
                        <p>
                          {orderSummaryData
                            ? orderSummaryData.no_of_journey
                            : "--"}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="buss-sum-head-txt">
                        <p>{ACCOUNT_NOX}</p>
                      </div>
                      <div className="buss-sum-head-txt-p">
                        <p>
                          {orderSummaryData
                            ? orderSummaryData.take_account_of_nox_emission ===
                              "true"
                              ? "YES"
                              : "NO"
                            : "--"}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {location === "/business/offset-flight-by-distance" && (
                <>
                  {orderSummaryData !== null &&
                    orderSummaryData.flight_types.map((data: any, f: any) => {
                      return (
                        <div className="padding-top-Left" key={f}>
                          <Row gutter={16} className="car-related-summary">
                            <Col lg={12} md={12}>
                              <div className="buss-sum-head-txt">
                                <p>
                                  {data.product_name}, {data.class_type}
                                </p>
                              </div>
                            </Col>
                            <Col lg={12} md={12}>
                              <div className="buss-sum-head-txt-p d-flex justify-content-end">
                                <p>{data.total_distance} km</p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      );
                    })}
                </>
              )}

              {location === "/business/offset-car" && (
                <>
                  {orderSummaryData !== null &&
                    orderSummaryData.car_types.map((data: any, i: any) => {
                      return (
                        <div className="padding-top-Left" key={i}>
                          <Row gutter={16} className="car-related-summary">
                            <Col lg={12} md={12}>
                              <div className="buss-sum-head-txt">
                                <p>
                                  {data.vehicle_type}, {data.fuel_type}
                                </p>
                              </div>
                            </Col>
                            <Col lg={12} md={12}>
                              <div className="buss-sum-head-txt-p d-flex justify-content-end">
                                <p>{data.distance} km</p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      );
                    })}
                </>
              )}

              {location === "/business/offset-event" && (
                <>
                  <div className="padding-top-Left">
                    {/* <Row className="buss-sum-head-txt-p mb-3">
                      <p>{ }</p>
                    </Row> */}
                    <>
                      {orderSummaryData !== null &&
                        orderSummaryData.event_types
                          .filter(
                            (data: any, j: any) =>
                              data.product_name === "Participant"
                          )
                          .map((data: any, j: any) => {
                            return (
                              <Row
                                gutter={16}
                                className="mb-3 event-related-summary"
                                key={j}
                              >
                                <div>
                                  <div className="buss-sum-head-txt2">
                                    <p>
                                      {data?.country},{" "}
                                      {data?.no_of_employee + " "}
                                      PARTICIPANT
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <div className="buss-sum-head-txt-p d-flex justify-content-end">
                                    <p>{data?.days} Days</p>
                                  </div>
                                </div>
                              </Row>
                            );
                          })}
                    </>

                    <Row className="buss-sum-head-txt-p mb-3">
                      <p>{FLIGHT_RELATED}</p>
                    </Row>
                    <>
                      {orderSummaryData !== null &&
                        orderSummaryData.event_types
                          .filter(
                            (data: any, j: any) =>
                              data.offsetable_type ===
                              "BusinessFlightOneTimeOffset"
                          )
                          .map((data: any, j: any) => {
                            return (
                              <Row
                                gutter={16}
                                className="mb-3 event-related-summary"
                                key={j}
                              >
                                <div>
                                  <div className="buss-sum-head-txt2">
                                    <p>
                                      {data.product_name}, {data.class_type}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <div className="buss-sum-head-txt-p d-flex justify-content-end">
                                    <p>{data.total_distance} km</p>
                                  </div>
                                </div>
                              </Row>
                            );
                          })}
                    </>
                    <Row className="buss-sum-head-txt-p mb-3">
                      <p>{CAR_RELATED}</p>
                    </Row>
                    <>
                      {orderSummaryData !== null &&
                        orderSummaryData.event_types
                          .filter(
                            (data: any, j: any) =>
                              data.offsetable_type ===
                              "BusinessCarOneTimeOffsets"
                          )
                          .map((data: any, j: any) => {
                            return (
                              <Row
                                gutter={16}
                                className="mb-3 event-related-summary"
                                key={j}
                              >
                                <div>
                                  <div className="buss-sum-head-txt2">
                                    <p className="text_cap_lock">
                                      {data.vehicle_type}, {data.fuel_type}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <div className="buss-sum-head-txt-p d-flex justify-content-end">
                                    <p>{data.distance} km</p>
                                  </div>
                                </div>
                              </Row>
                            );
                          })}
                    </>

                    <Row className="buss-sum-head-txt-p mb-3">
                      <p>{HOTEL_RELATED}</p>
                    </Row>

                    <>
                      {orderSummaryData !== null &&
                        orderSummaryData.event_types
                          .filter(
                            (data: any, j: any) => data.product_name === "Hotel"
                          )
                          .map((data: any, j: any) => {
                            return (
                              <Row
                                gutter={16}
                                className="mb-3 event-related-summary"
                                key={j}
                              >
                                <div>
                                  <div className="buss-sum-head-txt2">
                                    <p>
                                      {data?.country}, {data?.hotel}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <div className="buss-sum-head-txt-p d-flex justify-content-end">
                                    <p>{data?.no_of_travellers} Travellers</p>
                                  </div>
                                </div>
                              </Row>
                            );
                          })}
                    </>
                  </div>
                </>
              )}

              {location === "/business/subscription-employee" && (
                <>
                  {orderSummaryData !== null &&
                    orderSummaryData.employee_types.map((data: any, j: any) => {
                      return (
                        <div className="padding-top-Left" key={j}>
                          <Row gutter={16} className="car-related-summary">
                            <Col lg={12} md={12}>
                              <div className="buss-sum-head-txt">
                                <p>{data?.country}</p>
                              </div>
                            </Col>
                            <Col lg={12} md={12}>
                              <div className="buss-sum-head-txt-p d-flex justify-content-end">
                                <p>{data?.no_of_employee} employees</p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      );
                    })}
                </>
              )}

              {location === "/business/subscription-flight" && (
                <>
                  {orderSummaryData !== null &&
                    orderSummaryData.flight_types.map((data: any, k: any) => {
                      return (
                        <div className="padding-top-Left" key={k}>
                          <Row gutter={16} className="car-related-summary">
                            <Col lg={12} md={12}>
                              <div className="buss-sum-head-txt">
                                <p>{data.product_name}</p>
                              </div>
                            </Col>
                            <Col lg={12} md={12}>
                              <div className="buss-sum-head-txt-p d-flex justify-content-end">
                                <p>{data.no_of_flights} Flights</p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      );
                    })}
                </>
              )}

              {location === "/business/subscription-car" && (
                <>
                  {orderSummaryData !== null &&
                    orderSummaryData.car_types.map((data: any, k: any) => {
                      return (
                        <div className="padding-top-Left" key={k}>
                          <Row gutter={16} className="car-related-summary">
                            <Col lg={12} md={12}>
                              <div className="buss-sum-head-txt">
                                <p>
                                  {data.vehicle_type}, {data.fuel_type}
                                </p>
                              </div>
                            </Col>
                            <Col lg={12} md={12}>
                              <div className="buss-sum-head-txt-p d-flex justify-content-end">
                                <p>
                                  {data?.no_of_cars > 1
                                    ? data?.no_of_cars + " Cars"
                                    : data?.no_of_cars + " Car"}
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      );
                    })}
                </>
              )}

              {location === "/business/plant-tree" && (
                <>
                  <div className="padding-top-Left">
                    <Row gutter={16} className="mb-3">
                      <div className="buss-sum-head-txt">
                        <p className="select-onetime-card">
                          {this.props.history.activeTabKey === "1"
                            ? "Agroforestry"
                            : "Urban Forestation - Miyawaki Method"}
                        </p>
                      </div>
                    </Row>

                    {this.props.history.selectGiftCard === "Agroforestry" ||
                      this.props.history.selectGiftCard === "Urban" ? (
                      <>
                        {/* <div className="plant-tree-gift-card">
                            <Row>
                              <p>Number of plants you want to gift </p>
                            </Row>

                            <Form.Item
                              label=""
                              name="country"
                              rules={[{ required: true, message: "Select" }]}
                            >
                              <text style={{display: 'none'}}>{this.state.selectedNoPlant}</text>
                              <Select
                                // showSearch
                                placeholder="Select"
                                size="large"
                                allowClear
                                value={this.state.selectedNoPlant}
                                onChange={this.handleSelectPlantNoChange}
                              >
                                {NumberOfPlantList.map((data: any) => (
                                <Option value={data.no} key={data.no}>
                                  {data.no}
                                </Option>
                                ))}
                              </Select>
                            </Form.Item>
                          </div> */}
                        {this.props.history.selectNoTrees === "custom" && (
                          <>
                            <Row className="txt-algn-cntr">
                              <span className="txt-no-input">
                                {NUMBERS_PLANT}
                              </span>
                            </Row>

                            <Form.Item
                              label=""
                              name="plantno"
                              rules={[
                                {
                                  required: true,
                                  message: "Enter number of plants",
                                },
                              ]}
                            >
                              <Input
                                size="large"
                                type="number"
                                placeholder="Enter number of plants"
                                value={NoOfPlants}
                                min={50}
                                maxLength={5}
                                onChange={(e) => this.PlantInputOnchange(e)}
                              />
                              {this.state.minPlantError ? (
                                <p className="text_error">{VALUE_GREATER_50}</p>
                              ) : null}
                            </Form.Item>
                          </>
                        )}
                        <Row>
                          <p>Gift Card preview</p>
                        </Row>

                        <div className="order-summary-newgift-card-sec">
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

                          <div className="new-giftcard-name ps-3">
                            <p>
                              Hi,
                              {this.state.giftCardName === ""
                                ? "(Name)"
                                : giftCardName}
                            </p>
                          </div>
                          <div className="new-giftcard-desc ps-3">
                            <p>You've been Gifted!</p>
                          </div>

                          <div className="new-giftcard-value ps-3">
                            <p>No of Trees</p>
                          </div>
                          <div className="new-giftcard-amount ps-3">
                            <p>
                              {this.props.history.selectNoTrees === "custom"
                                ? NoOfPlants
                                : orderSummaryData.no_of_trees}
                            </p>
                          </div>

                          <div className="new-giftcard-btn ps-3">
                            <button onClick={() => HISTORY.push("/redeemgift")}>
                              How to Redeem
                            </button>
                          </div>

                          <div className="offset-summary-rightimg-sec">
                            <div className="offset-summary-rightimg-sub-sec">
                              <img src={NewGiftCardImg} />
                            </div>
                          </div>
                        </div>

                        <div className="py-3">
                          <Row>
                            <p>
                              Type the name you want to appear <br />
                              on gift card
                            </p>
                          </Row>

                          <Form.Item
                            label=""
                            name="giftCard"
                            rules={[{ required: false, message: "required" }]}
                          >
                            <Input
                              size="large"
                              placeholder="Optional"
                              value={giftCardName}
                              onChange={(e: any) =>
                                this.GiftCardInputChange(e, "giftcard")
                              }
                            />
                          </Form.Item>
                          <Row>
                            <p>Email id of the person</p>
                          </Row>

                          <Form.Item
                            label=""
                            name="emailidperson"
                          // rules={[{ required: true, message: "required" }]}
                          >
                            <Input size="large" placeholder="email@gmail.com" />
                          </Form.Item>
                        </div>
                      </>
                    ) : (
                      <>
                        {this.props.history.selectNoTrees === "custom" ? (
                          <>
                            <Row className="txt-algn-cntr">
                              <span className="txt-no-input">
                                Enter number of plants you want to plant
                              </span>
                            </Row>

                            <Form.Item label="" name="plantno">
                              <Input
                                size="large"
                                type="number"
                                placeholder="Enter number of plants"
                                value={NoOfPlants}
                                maxLength={5}
                                onChange={(e) => this.PlantInputOnchange(e)}
                              />
                              {this.state.plantRequiredError ? (
                                <p className="text_error">
                                  {ENTER_PLANT_NUMBER}
                                </p>
                              ) : this.state.minPlantError ? (
                                <p className="text_error">{VALUE_GREATER_50}</p>
                              ) : null}
                            </Form.Item>
                          </>
                        ) : (
                          <Row gutter={16} className="txt-algn-cntr">
                            <Col lg={12} md={12}>
                              <span>Number Of Trees</span>
                            </Col>
                            <Col lg={12} md={12} className="text-end">
                              <label>
                                {orderSummaryData.no_of_trees
                                  ? orderSummaryData.no_of_trees
                                  : "--"}
                              </label>
                            </Col>
                          </Row>
                        )}
                      </>
                    )}
                  </div>
                </>
              )}

              {location === "/business/AddtoCard" ||
                location === "/business/AddtoCard/payment" ? (
                <>
                  <div className="padding-top-Left">
                    <Row gutter={16} className="mb-3 business-cart-price">
                      <Col lg={12} md={12}>
                        <div className="buss-sum-head-txt">
                          <p>TOTAL ITEMS</p>
                        </div>
                      </Col>
                      <Col lg={12} md={12}>
                        <div className="buss-sum-head-txt-p d-flex justify-content-end">
                          <label>
                            <p className="ms-1">
                              {orderSummaryData
                                ? orderSummaryData?.total_item
                                : "--"}
                            </p>
                          </label>
                        </div>
                      </Col>
                    </Row>
                    <Row gutter={16} className="mb-3 business-cart-price">
                      <Col lg={12} md={12}>
                        <div className="buss-sum-head-txt">
                          <p>SUB TOTAL</p>
                        </div>
                      </Col>
                      <Col lg={12} md={12}>
                        <div className="buss-sum-head-txt-p d-flex justify-content-end">
                          <span className="d-flex align-items-center">
                            <label>
                              <p className="ms-1">
                                {currency_conversion_response?.currency_symbol}
                                {orderSummaryData
                                  ? orderSummaryData?.sub_total
                                  : "--"}
                              </p>
                            </label>
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <Row gutter={16} className="mb-3 business-cart-price">
                      <Col lg={12} md={12}>
                        <div className="buss-sum-head-txt">
                          <p>TAX ({this.state.gstValue * 100}%)</p>
                        </div>
                      </Col>
                      <Col lg={12} md={12}>
                        <div className="buss-sum-head-txt-p d-flex justify-content-end">
                          <span className="d-flex align-items-center">
                            <p className="ms-1">
                              <label>
                                {orderSummaryData ? orderSummaryData.tax : "--"}
                              </label>
                            </p>
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </>
              ) : null}

              {/* Form start */}

              <div className="px-4 ">
                <div className="buss-summary-form-sec">
                  <div className="mt-3">
                    {showOrderName && (
                      <>
                        <Row>
                          <p>Order Name</p>
                        </Row>

                        <Form.Item
                          label=""
                          name="orderName"
                        // rules={[
                        //   { required: true, message: "Enter Order name" },
                        // ]}
                        >
                          <Input
                            size="large"
                            placeholder="Order Name"
                            value={orderName}
                            onChange={(e: any) =>
                              this.handleInputOnchage(e, "orderName")
                            }
                          />
                        </Form.Item>
                      </>
                    )}

                    {showPackage && (
                      <>
                        <Row>
                          <p>Package</p>
                        </Row>
                        <Form.Item
                          label=""
                          name="package"
                        // rules={[
                        //   { required: true, message: "Select Package" },
                        // ]}
                        >
                          <Select
                            placeholder="Select Package"
                            size="large"
                            allowClear
                            defaultValue={
                              window.location.pathname ===
                                "/business/offset-employee" ||
                                window.location.pathname ===
                                "/business/subscription-employee"
                                ? BusinessPackageData[3]?.Name
                                : BusinessPackageData[0]?.Name
                            }
                            onChange={this.PackageFrequecyOnChange.bind(
                              this,
                              "package"
                            )}
                          >
                            {BusinessPackageData.map((data: any) => (
                              <Option value={data.Id || ""} key={data.Id}>
                                {data.Name + " "}
                                <div className="ct_tooltip"> <img src={InfoImg} width={18} />
                                  <span className="ct_tooltiptext">{data?.hoverName}</span>
                                </div>
                                {/* <Tooltip
                                  placement="topLeft"
                                  title={data.hoverName}
                                >
                                  <img src={InfoImg} width={18} />
                                </Tooltip> */}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </>
                    )}
                    {window.location.pathname === "/business/offset-employee" ||
                      window.location.pathname ===
                      "/business/subscription-employee" ? (
                      <>
                        {this.state.selectedPackage === "5" && (
                          <Row gutter={32}>
                            <Col lg={11} md={11}>
                              <Row>
                                <p>{AMOUNT_CCY}</p>
                              </Row>
                              <Form.Item label="" name="customAmount">
                                <text style={{ display: "none" }}>
                                  {customAmount}
                                </text>
                                <Input
                                  size="large"
                                  type="number"
                                  name="customAmount"
                                  value={customAmountHandler()}
                                  maxLength={8}
                                  onChange={(e) =>
                                    this.CustomeAmountImpactInputOnchange(e)
                                  }
                                />
                              </Form.Item>
                            </Col>
                            <Col
                              lg={2}
                              md={2}
                              className="business-order-summary-or"
                            >
                              <p className="business-order-summary-or-txt">
                                or
                              </p>
                            </Col>
                            <Col lg={11} md={11}>
                              <Row>
                                <p>{IMPACT_TONNES}</p>
                              </Row>
                              <Form.Item label="" name="customImpact">
                                <text style={{ display: "none" }}>
                                  {customImpact}
                                </text>
                                <Input
                                  size="large"
                                  type="number"
                                  name="customImpact"
                                  value={
                                    is_custom_data_response?.is_custom_amount
                                      ? roundTwoDecimal(
                                        this.state.customAmount /
                                        (this.state.carbonPerTonValue *
                                          currency_conversion_response?.currency_rate)
                                      )
                                      : roundTwoDecimal(
                                        customImpact ||
                                        orderSummaryData?.custom_impact
                                      )
                                  }
                                  maxLength={8}
                                  onChange={(e) =>
                                    this.CustomeAmountImpactInputOnchange(e)
                                  }
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                        )}
                      </>
                    ) : null}
                    {showFrequency && (
                      <>
                        <Row>
                          <p>Frequency</p>
                        </Row>

                        <Form.Item
                          label=""
                          name="frequency"
                        // rules={[
                        //   { required: true, message: "Select Frequency" },
                        // ]}
                        >
                          <Select
                            placeholder="Select Frequency"
                            size="large"
                            allowClear
                            onChange={this.PackageFrequecyOnChange.bind(
                              this,
                              "frequency"
                            )}
                            defaultValue={FrequencyDataList[0]?.Name}
                          >
                            {FrequencyDataList.map((data: any) => (
                              <Option value={data.Id || ""} key={data.Id}>
                                {data.Name}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </>
                    )}

                    {showCertificate && (
                      <>
                        <Row>
                          <p>{CERTIFICATE_NAME}</p>
                        </Row>
                        <Form.Item label="" name="name_on_certificate">
                          <Input
                            size="large"
                            placeholder="Optional"
                            value={name_on_certificate}
                            onChange={(e: any) =>
                              this.handleInputOnchage(e, "name_on_certificate")
                            }
                          />
                        </Form.Item>
                      </>
                    )}

                    {showComments && (
                      <>
                        <Row>
                          <p>Comments</p>
                        </Row>
                        <Form.Item label="" name="comments">
                          <Input.TextArea
                            placeholder="Optional"
                            autoSize={{ minRows: 5, maxRows: 5 }}
                            className="form_textarea"
                            value={comments}
                            onChange={(e: any) =>
                              this.handleInputOnchage(e, "comments")
                            }
                          />
                        </Form.Item>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {/* Form end */}
              {location === "/business/AddtoCard" ||
                location === "/business/AddtoCard/payment" ? (
                <div>
                  <Row className="justify-content-between indv-offset-order-total-1 px-4 py-3">
                    <p className="ord-total-imp">{TOTAL_IMPACT}</p>
                    <span>
                      {orderSummaryData
                        ? +orderSummaryData?.total_impact
                        : "--"}
                      <b>t</b>
                    </span>
                  </Row>
                  <Row className="justify-content-between indv-offset-order-total-2 px-4 py-3">
                    <p className="ord-total-imp">TOTAL </p>
                    <span>
                      <b>
                        {currency_conversion_response?.currency_symbol}
                        {orderSummaryData ? orderSummaryData.total : "0"}
                      </b>
                    </span>
                  </Row>
                </div>
              ) : (
                <div>
                  <Row className="justify-content-between indv-offset-order-total-1 px-4 py-3">
                    {location === "/business/plant-tree" ? (
                      <p className="ord-total-imp">
                        {this.props.history.isSelectGift
                          ? "Total gifted impact (CO2e)"
                          : "Total impact (CO2e)"}
                      </p>
                    ) : (
                      <p className="ord-total-imp">{TOTAL_IMPACT}</p>
                    )}
                    <span>
                      {calculateTotalImpactBusiness(
                        orderSummaryDetails?.frequency_total_impact ||
                        orderSummaryDetails?.total_impact ||
                        orderSummaryData?.custom_impact
                      )}
                      <b>t</b>
                    </span>
                  </Row>
                  <Row className="justify-content-between indv-offset-order-total-2 px-4 py-3">
                    <p className="ord-total-imp">TOTAL </p>
                    <span>
                      <b>
                        <>
                          {currency_conversion_response?.currency_symbol}
                          {calculateTotalAmountForBusiness(
                            orderSummaryDetails?.total
                          )}
                        </>
                      </b>
                    </span>
                  </Row>
                </div>
              )}

              {location === "/business/plant-tree" ? (
                <>
                  <Row gutter={32} className="px-4 pb-15">
                    <Col
                      lg={24}
                      md={24}
                      sm={24}
                      xs={24}
                      className={isMobile ? "treeplant-buy-btn-ns" : ""}
                    >
                      <Button
                        className="indv-offset-order-btn-buy-gift"
                        htmlType="submit"
                        onClick={this.AddToCartData}
                        disabled={
                          this.props?.history?.selectNoTrees === "custom" &&
                          (this.state.minPlantError ||
                            this.state.NoOfPlants === "")
                        }
                      >
                        {constants.BusinessScreen.buyNow}
                      </Button>
                    </Col>
                  </Row>
                  <div className="px-4">
                    <div className="buss-plant-sum-btm-txt-head">
                      <p>Assumptions</p>
                    </div>
                    <div className="buss-plant-sum-btm-txt-para">
                      <ul>
                        <li>{ANNUAL_AMOUNT}</li>
                        <li>{MATURITY_TREE}</li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : null}

              {location != "/business/plant-tree" &&
                location != "/business/AddtoCard" &&
                location != "/business/AddtoCard/payment" && (
                  <>
                    <Col
                      className={isMobile ? "business-add-to-cart-mobile" : ""}
                    >
                      <Form.Item className="order-summary-add-cart-btn-ns">
                        <Button
                          className={
                            disableCartButton()
                              ? "indv-offset-order-btn-cart disable-add-to-cart"
                              : "indv-offset-order-btn-cart"
                          }
                          htmlType="submit"
                          onClick={this.AddToCartData}
                          disabled={disableCartButton()}
                        >
                          Add to Cart
                        </Button>
                      </Form.Item>
                    </Col>
                    {!location.includes("business/offset") && (
                      <p
                        className={
                          isMobile
                            ? "renew-message renew-message-ns"
                            : "renew-message"
                        }
                      >
                        {RENEW_MESSAGE}
                      </p>
                    )}
                  </>
                )}
            </Form>
          </div>
        </Card>
      </div>
    );
  }
}
export default BusinessOrderSummary as React.ComponentType<any>;
// Customizable Area End
