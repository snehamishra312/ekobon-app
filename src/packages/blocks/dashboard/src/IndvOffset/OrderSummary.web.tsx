import React from "react";
// Customizable Area Start
import OrderSummaryController, { Props } from "./OrderSummaryController.web";
import { Row, Col, Card, Form, Input, Radio, Button, Select, Tooltip } from "antd";
import {
  FlightPlush,
  FlightMinus,
  flightImg,
  LOGO,
  CartProjects,
  NewGiftCardImg,
  InfoImg,
} from "./assets";
import "../IndvGiftCard/IndividualGiftCard.css";
import "./IndividualOffset.css";
import { CountryListData } from "../CountryList";
import { IndividualPackageData } from "../IndividualPackageData";
import { FrequencyDataList } from "../FrequencyDataList";
import { HISTORY } from "../../../../components/src/comman";
import { constants } from "../../../../components/src/types";
import { deviceMode } from "../../../../components/src/CommonUtils";
import {
  calculateTotalAmount,
  calculateTotalImpact,
} from "../../../../framework/src/Utilities";
const { Option } = Select;
// Customizable Area End

function capitalizeFirstLetter(string: any) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class OrderSummary extends OrderSummaryController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const {
      COUNTRY,
      FLIGHTS,
      FREQUENCY_YEAR,
      SELECT_COUNTRY,
      PACKAGE,
      SELECT_PACKAGE,
      AMOUNT_CCY,
      IMPACT_TONNES,
      FAMILY_MEMBERS,
      FLIGHTS_YEAR,
      FREQUENCY,
      SELCECT_FREQUENCY,
      AMOUNT,
      IMPACT,
      TOTAL_DISTANCE,
      PASSENGERS,
      RETURN_FLIGHT,
      EMISSIONS,
      EMISSIONS2,
      CLASSIC,
      GREEN,
      GAS,
      CUSTOM_GIFT,
      GIFT_PREVIEW,
      GIFT_CARD,
      GIFTED_MESSAGE,
      VALUE,
      HOW_REDEEM,
      GIFT_AMOUNT,
      CARD_NAME1,
      CARD_NAME2,
      PLANTS_GIFT,
      PLANTS_PLANT,
      EMAIL,
      TREES_NUMBER,
      TOTAL_IMPACT,
      REMOVE_GIFT,
      OFFSET_AMOUNT,
      TREE_MATURITY,
      NOT_SURE_OFFSET1,
      NOT_SURE_OFFSET2,
      NOT_SURE_OFFSET3,
      NOT_SURE_OFFSET4,
      NOT_SURE_OFFSET5,
      NOT_SURE_OFFSET6,
      NOT_SURE_OFFSET7,
      CARD_MESSAGE,
      VALUE_GREATER_50,
      ENTER_PLANT_NUMBER,
      RENEW_MESSAGE,
    } = constants.OrderSummary;
    const { orderSummaryData, giftSummaryData } = this.props;
    const { topicName } = this.props.history;
    const {
      passengersCount,
      orderSummaryDetails,
      selectedNoPlant,
      NoOfPlants,
      certificateName,
      GiftCardPlantNo,
      giftCode,
      giftCardName,
      giftCardEmail,
      giftCardAmount,
      giftCustom_amount,
      isValidCode,
      giftCodeObj,
      customAmount,
      customImpact,
      total,
      total_impact,
      giftNoOfFlight,
      giftNoOfTree,
    } = this.state;
    const isMobile = deviceMode.isMobile;
    const location = window.location.pathname;
    const UserDetails: any = localStorage.getItem("UserDetails");

    let currency_conversion = localStorage.getItem("currency_conversion");
    let currency_conversion_response = currency_conversion
      ? JSON.parse(currency_conversion)
      : null;
    let is_custom_data = localStorage.getItem("is_custom_data");
    let is_custom_data_response = is_custom_data
      ? JSON.parse(is_custom_data)
      : null;
    const disableCartButton = () => {
      if (
        window.location.pathname === "/individual/offset-onetime-transport" &&
        (this.props.orderSummaryData?.total_impact <= 0 ||
          !this.props.orderSummaryData?.total_impact)
      ) {
        return true;
      }
      if (
        window.location.pathname !== "/individual/offset-onetime-transport" &&
        (this.state.orderSummaryDetails?.total_impact <= 0 ||
          !this.state.orderSummaryDetails?.total_impact)
      ) {
        return true;
      }

      return false;
    };
    return (
      <div
        className="indv-offset-order-summay"
        id={this.props.urbonSmoothScrollForMobileId}
      >
        <Card
          id="order-summary-mobile" className="ct_order_box"
          title={
            location === "/individual/AddtoCard" ||
              location === "/individual/AddtoCard/payment" ? (
              "Price Details"
            ) : isMobile ? (
              <div
                id="order-summary-mobile"
                className="order-summary-header ns-order-summary-header "
              >
                {"Offset Details".toUpperCase()}
              </div>
            ) : (
              "Order Summary"
            )
          }
          bordered={false}
        >
          <div className="my-2">
            <Form
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={this.handleFinish}
              autoComplete="off"
              className="offset-onetime-order-summery"
            >
              <div className="px-4">
                {location === "/individual/offset-onetime" && (
                  <div>
                    <p className="select-onetime-card mt-3">
                      {this.props.history.lifeStyleCardselected}
                    </p>
                    {isMobile &&
                      <div className="carbon-offset-onetime-life-sec-card-dropdown dropdown-border-ns">
                        <p>Select an option</p>
                        <Select
                          className="select-border-ns"
                          placeholder="Select --"
                          size="large"
                          defaultValue={this.props?.defaultValue}
                          value={this.props?.value}
                          allowClear
                          onChange={this.props?.onChange}
                        >
                          {this.props?.lifestyleCardData?.map((data: any) => (
                            <Option
                              value={data.attributes.name}
                              key={data.id}
                              className="offset-onetime-pacakge-i"
                            >
                              {data.attributes.name + " "}
                            </Option>
                          ))}
                        </Select>
                      </div>
                    }
                    <Row>
                      <p>{COUNTRY}</p>
                    </Row>

                    <Form.Item
                      label=""
                      name="country"
                      className="not_edit"
                    // rules={[{ required: true, message: "Country" }]}
                    >
                      <text style={{ display: "none" }}>
                        {this.state.selectedCountry}
                      </text>
                      <Select
                        className="not_edit"
                        showSearch
                        placeholder="Select Country"
                        size="large"
                        allowClear
                        disabled={true}
                        value={
                          localStorage.getItem("token") &&
                            JSON.parse(UserDetails)?.country_name !== null
                            ? JSON.parse(UserDetails)?.country_name
                            : null
                        }
                        onChange={this.handleCountryChange}
                      >
                        {CountryListData.map((data: any) => (
                          <Option
                            value={data.CountryName}
                            key={data.CountryName}
                          >
                            {data.CountryName}
                          </Option>
                        ))}
                      </Select>
                      {this.state.countryValidat && (
                        <span className="validate_error">{SELECT_COUNTRY}</span>
                      )}
                    </Form.Item>
                    <Row>

                    </Row>
                    <Row>
                      <p>{PACKAGE}</p>
                    </Row>
                    <Form.Item
                      label=""
                      name="package"
                    // rules={[{ required: true, message: "Select Package" }]}
                    >
                      <text style={{ display: "none" }}>
                        {this.state.selectedPackage}
                      </text>
                      <Select
                        placeholder="Select Package"
                        size="large"
                        allowClear
                        value={
                          this.state.selectedPackage === null
                            ? location === "/individual/offset-onetime"
                              ? IndividualPackageData[3]?.Name
                              : IndividualPackageData[0]?.Name
                            : this.state.selectedPackage
                        }
                        onChange={this.PackageFrequecyOnChange.bind(
                          this,
                          "package"
                        )}
                      >
                        {IndividualPackageData.map((data: any) => (
                          <Option
                            value={data.Id}
                            key={data.Id}
                            className="offset-onetime-pacakge-i"
                          >
                            {data.Name + " "}
                            {/* <Tooltip placement="topLeft" title={data?.hoverName} >
                              <img src={InfoImg} width={18} />
                            </Tooltip> */}
                            <div className="ct_tooltip"> <img src={InfoImg} width={18} />
                              <span className="ct_tooltiptext">{data?.hoverName}</span>
                            </div>
                          </Option>
                        ))}
                      </Select>
                      {this.state.packageValidat && (
                        <span className="validate_error">{SELECT_PACKAGE}</span>
                      )}
                    </Form.Item>

                    {this.state.selectedPackage === "5" ? (
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
                              value={customAmount}
                              maxLength={8}
                              name="customAmount"
                              onChange={(e) =>
                                this.CustomeAmountImpactInputOnchange(e)
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col lg={2} md={2} className="order-summary-or">
                          <p className="order-summary-or-txt">or</p>
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
                              value={calculateTotalImpact(customImpact)}
                              maxLength={8}
                              onChange={(e) =>
                                this.CustomeAmountImpactInputOnchange(e)
                              }
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                    ) : null}

                    {this.props.history.lifeStyleCardselected ===
                      "Family Offset" && (
                        <Row className="offset-order-summery-label padding-t-b">
                          <div className="d-flex-center">
                            <div className="flight-pass-data offset-mtp">
                              <p>{FAMILY_MEMBERS}</p>
                              <div
                                className="flight-img-card mr-rght"
                                onClick={(e) =>
                                  this.handlePassengerCount("minus")
                                }
                              >
                                <img src={FlightMinus} alt="FlightMinus" />
                              </div>
                              <label>{passengersCount}</label>
                              <div
                                className="flight-img-card mr-lft"
                                onClick={(e) =>
                                  this.handlePassengerCount("plush")
                                }
                              >
                                <img src={FlightPlush} alt="FlightPlush" />
                              </div>
                            </div>
                          </div>
                        </Row>
                      )}
                  </div>
                )}
                {location === "/individual/offset-subscription" && (
                  <div>
                    <p className="select-onetime-card mt-3">
                      {this.props.history.lifeStyleCardselected}
                    </p>
                    {topicName === "Flight" ? (
                      <>
                        <Row>
                          <p>{FLIGHTS_YEAR}</p>
                        </Row>
                        <Form.Item
                          label=""
                          name="numberFlight"
                          rules={[
                            {
                              required: true,
                              message: "Enter Number of Flights",
                            },
                          ]}
                        >
                          <Input
                            size="large"
                            placeholder="Number of Flights"
                            type="number"
                            min="0"
                            onChange={this.FlightNoInputChange}
                          />
                        </Form.Item>
                      </>
                    ) : topicName === "Lifestyle" ? (
                      <>
                        <Row>
                          <p>{COUNTRY}</p>{" "}
                        </Row>
                        <text style={{ display: "none" }}>
                          {this.state.selectedCountry}
                        </text>
                        <Form.Item
                          label=""
                          name="country"
                          className="not_edit"
                        // rules={[
                        //   { required: true, message: "Select Country" },
                        // ]}
                        >
                          <Select
                            className="not_edit"
                            showSearch
                            placeholder="Select"
                            size="large"
                            allowClear
                            disabled={true}
                            value={
                              localStorage.getItem("token") &&
                                JSON.parse(UserDetails)?.country_name !== null
                                ? JSON.parse(UserDetails)?.country_name
                                : null
                            }
                            onChange={this.handleCountryChange}
                          >
                            {CountryListData.map((data: any) => (
                              <Option
                                value={data.CountryName}
                                key={data.CountryName}
                              >
                                {data.CountryName}
                              </Option>
                            ))}
                          </Select>
                          {this.state.countryValidat && (
                            <span className="validate_error">
                              {SELECT_COUNTRY}
                            </span>
                          )}
                        </Form.Item>
                        <Row>
                          <p>{PACKAGE}</p>
                        </Row>
                        <Form.Item
                          label=""
                          name="package"
                        // rules={[
                        //   { required: true, message: "Select Package" },
                        // ]}
                        >
                          <text style={{ display: "none" }}>
                            {this.state.selectedPackage}
                          </text>
                          <Select
                            placeholder="Select Package"
                            size="large"
                            allowClear
                            value={
                              this.state.selectedPackage === ""
                                ? topicName === "Lifestyle"
                                  ? IndividualPackageData[3]?.Name
                                  : IndividualPackageData[0]?.Name
                                : this.state.selectedPackage
                            }
                            onChange={this.PackageFrequecyOnChange.bind(
                              this,
                              "package"
                            )}
                          >
                            {IndividualPackageData.map((data: any) => (
                              <Option value={data.Id} key={data.Id}>
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
                          {this.state.packageValidat && (
                            <span className="validate_error">
                              {SELECT_PACKAGE}
                            </span>
                          )}
                        </Form.Item>
                      </>
                    ) : (
                      <>
                        <Row>
                          <p>{FREQUENCY}</p>
                        </Row>
                        <Form.Item
                          label=""
                          name="frequency"
                        // rules={[
                        //   { required: true, message: "Select Frequency" },
                        // ]}
                        >
                          <text style={{ display: "none" }}>
                            {this.state.selectedFrequency}
                          </text>
                          <Select
                            allowClear
                            placeholder="Select Frequency"
                            size="large"
                            defaultValue={FrequencyDataList[0]?.Name}
                            onChange={this.PackageFrequecyOnChange.bind(
                              this,
                              "frequency"
                            )}
                          >
                            {FrequencyDataList.map((data: any) => (
                              <Option
                                value={data.Id}
                                key={data.Id}
                                defaultValue={FrequencyDataList[0]?.Name}
                              >
                                {data.Name}
                              </Option>
                            ))}
                          </Select>
                          {this.state.frequencyValidat && (
                            <span className="validate_error">
                              {SELCECT_FREQUENCY}
                            </span>
                          )}
                        </Form.Item>
                      </>
                    )}

                    {location === "/individual/offset-subscription" && (
                      <>
                        {topicName === "Lifestyle" && (
                          <>
                            {this.state.selectedPackage === "5" && (
                              <Row gutter={32}>
                                <Col lg={12} md={12}>
                                  <Row>
                                    <p>{AMOUNT}</p>
                                  </Row>
                                  <Form.Item label="" name="customAmount">
                                    <text style={{ display: "none" }}>
                                      {customAmount}
                                    </text>
                                    <Input
                                      size="large"
                                      placeholder=""
                                      type="number"
                                      name="customAmount"
                                      maxLength={8}
                                      value={
                                        is_custom_data_response?.is_custom_impact
                                          ? Math.round(
                                            currency_conversion_response?.currency_rate *
                                            this.state.customImpact *
                                            this.state.carbonPerTonValue *
                                            100
                                          ) / 100
                                          : Math.round(customAmount * 100) / 100
                                      }
                                      onChange={(e) =>
                                        this.CustomeAmountImpactInputOnchange(e)
                                      }
                                    />
                                  </Form.Item>
                                </Col>
                                <Col lg={12} md={12}>
                                  <Row>
                                    <p>{IMPACT}</p>
                                  </Row>
                                  <Form.Item label="" name="customImpact">
                                    <text style={{ display: "none" }}>
                                      {customImpact}
                                    </text>
                                    <Input
                                      size="large"
                                      type="number"
                                      name="customImpact"
                                      maxLength={8}
                                      value={
                                        is_custom_data_response?.is_custom_amount
                                          ? Math.round(
                                            (this.state.customAmount /
                                              (this.state.carbonPerTonValue *
                                                currency_conversion_response?.currency_rate)) *
                                            100
                                          ) / 100
                                          : Math.round(customImpact * 100) / 100
                                      }
                                      onChange={(e) =>
                                        this.CustomeAmountImpactInputOnchange(e)
                                      }
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>
                            )}
                          </>
                        )}
                      </>
                    )}

                    {(topicName === "Flight" || topicName === "Lifestyle") && (
                      <>
                        <Row>
                          <p>{FREQUENCY}</p>
                        </Row>
                        <Form.Item
                          label=""
                          name="frequency"
                        // rules={[
                        //   { required: true, message: "Select Frequency" },
                        // ]}
                        >
                          <text style={{ display: "none" }}>
                            {this.state.selectedFrequency}
                          </text>
                          <Select
                            allowClear
                            placeholder="Select Frequency"
                            size="large"
                            // value={this.state.selectedFrequency}
                            onChange={this.PackageFrequecyOnChange.bind(
                              this,
                              "frequency"
                            )}
                            defaultValue={FrequencyDataList[0]?.Name}
                          >
                            {FrequencyDataList.map((data: any) => (
                              <Option value={data.Id} key={data.Id}>
                                {data.Name}
                              </Option>
                            ))}
                          </Select>
                          {this.state.frequencyValidat && (
                            <span className="validate_error">
                              {SELCECT_FREQUENCY}
                            </span>
                          )}
                        </Form.Item>
                      </>
                    )}

                    {this.props.history.lifeStyleCardselected ===
                      "Family Offset" && (
                        <Row className="offset-order-summery-label padding-t-b">
                          <div className="d-flex-center">
                            <div className="flight-pass-data offset-mtp">
                              <p>{FAMILY_MEMBERS}</p>
                              <div
                                className="flight-img-card mr-rght"
                                onClick={(e) =>
                                  this.handlePassengerCount("minus")
                                }
                              >
                                <img src={FlightMinus} alt="FlightMinus" />
                              </div>
                              <label>{passengersCount}</label>
                              <div
                                className="flight-img-card mr-lft"
                                onClick={(e) =>
                                  this.handlePassengerCount("plush")
                                }
                              >
                                <img src={FlightPlush} alt="FlightPlush" />
                              </div>
                            </div>
                          </div>
                        </Row>
                      )}
                  </div>
                )}

                {location === "/individual/offset-onetime-flight" && (
                  <div className="offset-flight-card offset-flight-card-ns">
                    {orderSummaryData.total_distance ||
                      orderSummaryData.passengers ? (
                      <Row
                        gutter={20}
                        className="txt-algn-cntr txt-algn-baseline-ns"
                      >
                        <Col lg={5} md={5}>
                          <label>From</label>
                          <span>{orderSummaryData.from}</span>
                        </Col>
                        <Col
                          lg={12}
                          md={12}
                          xs={24}
                          className="offset-flight-image"
                        >
                          {" "}
                          <div className="flight-place-way">
                            {" "}
                            <hr /> <img src={flightImg} alt="flightImg" />{" "}
                          </div>{" "}
                        </Col>
                        <Col lg={5} md={5}>
                          <label>To</label>
                          <span>{orderSummaryData.to}</span>
                        </Col>
                      </Row>
                    ) : null}

                    <div className="off-ord-flight-data-card">
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>{TOTAL_DISTANCE}</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData.total_distance
                              ? orderSummaryData.total_distance
                              : "--"}
                          </label>
                        </Col>
                      </Row>
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>{PASSENGERS}</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData.passengers
                              ? orderSummaryData.passengers
                              : "--"}
                          </label>
                        </Col>
                      </Row>
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>Class</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label className="text_capital">
                            {orderSummaryData.class
                              ? orderSummaryData.class
                              : "--"}
                          </label>
                        </Col>
                      </Row>
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>{RETURN_FLIGHT}</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData.return_flight
                              ? orderSummaryData.return_flight
                              : "--"}
                          </label>
                        </Col>
                      </Row>
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>
                            {EMISSIONS} <br />
                            {EMISSIONS2}
                          </span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData.take_account_of_nox_emission ==
                              "true"
                              ? "Yes"
                              : "No"}
                          </label>
                        </Col>
                      </Row>
                    </div>
                    <hr />
                  </div>
                )}
                {location === "/individual/offset-onetime-car" && (
                  <div className="offset-flight-card">
                    {orderSummaryData.distance && (
                      <div className="car-from-to-container-ns">
                        <div>
                          <p className="car-from-to-heading-ns">From</p>
                          <p className="car-from-to-value-ns">
                            {orderSummaryData.from}
                          </p>
                        </div>
                        <div>
                          <p className="car-from-to-heading-ns">To</p>
                          <p className="car-from-to-value-ns">
                            {orderSummaryData.to}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="off-ord-flight-data-card">
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>{TOTAL_DISTANCE}</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData.distance
                              ? orderSummaryData.distance
                              : "--"}
                          </label>
                        </Col>
                      </Row>
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>Return</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData.return
                              ? orderSummaryData.return
                              : "--"}
                          </label>
                        </Col>
                      </Row>
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>{FREQUENCY_YEAR}</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData.frequency
                              ? orderSummaryData.frequency
                              : "--"}
                          </label>
                        </Col>
                      </Row>
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>Fuel Type</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData.fuel_type
                              ? capitalizeFirstLetter(
                                orderSummaryData.fuel_type
                              )
                              : "--"}
                          </label>
                        </Col>
                      </Row>
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>Power Source</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData.power_source
                              ? capitalizeFirstLetter(
                                orderSummaryData.power_source
                              )
                              : "--"}
                          </label>
                        </Col>
                      </Row>
                    </div>
                    <hr />
                  </div>
                )}
                {location === "/individual/offset-onetime-transport" && (
                  <div>
                    {orderSummaryData.distance && (
                      <>
                        {orderSummaryData.from !== "null" &&
                          orderSummaryData.to !== "null" && (
                            <div className="car-from-to-container-ns">
                              <div>
                                <p className="car-from-to-heading-ns">From</p>
                                <p className="car-from-to-value-ns">
                                  {orderSummaryData.from}
                                </p>
                              </div>
                              <div>
                                <p className="car-from-to-heading-ns">To</p>

                                <p className="car-from-to-value-ns">
                                  {orderSummaryData.to}
                                </p>
                              </div>
                            </div>
                          )}
                      </>
                    )}

                    <div className="off-ord-flight-data-card">
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>{TOTAL_DISTANCE}</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData.distance
                              ? orderSummaryData.distance
                              : "--"}
                          </label>
                        </Col>
                      </Row>
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>Return</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData.return_trip
                              ? orderSummaryData.return_trip
                              : "--"}
                          </label>
                        </Col>
                      </Row>
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>{FREQUENCY_YEAR}</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData.frequency
                              ? orderSummaryData.frequency
                              : "---"}
                          </label>
                        </Col>
                      </Row>
                    </div>
                    <hr />
                  </div>
                )}
                {location === "/individual/offset-onetime-house" && (
                  <div>
                    <div className="off-ord-flight-data-card">
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>{CLASSIC}</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData.classical_provider
                              ? orderSummaryData.classical_provider
                              : "--"}
                          </label>
                        </Col>
                      </Row>
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>{GREEN}</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData.green_provider
                              ? orderSummaryData.green_provider
                              : "--"}
                          </label>
                        </Col>
                      </Row>
                      <Row
                        gutter={16}
                        className="txt-algn-cntr car-related-summary"
                      >
                        <Col lg={12} md={12}>
                          <span>{GAS}</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData.gas ? orderSummaryData.gas : "--"}
                          </label>
                        </Col>
                      </Row>
                    </div>
                    <hr />
                  </div>
                )}

                {location === "/individual/giftCard" && (
                  <>
                    <div className="py-3">
                      {orderSummaryData == "Plant trees" &&
                        <div>
                          <Row>
                            <p>
                              {CARD_NAME1} <span> {CARD_NAME2}</span>
                            </p>
                          </Row>

                          <Form.Item
                            label=""
                            name="giftCard"
                          >
                            <Input
                              size="large"
                              placeholder="Name"
                              value={giftCardName}
                              onChange={(e: any) =>
                                this.GiftCardInputChange(e, "giftcard")
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            label=""
                            name="giftCardEmail"
                          >
                            <Input
                              size="large"
                              placeholder="Email"
                              value={giftCardEmail}
                              onChange={(e: any) =>
                                this.GiftCardInputChange(e, "giftCardEmail")
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            label=""
                            name="Enter No Of Plants"
                          >
                            <Input
                              size="large"
                              placeholder="Enter No of Tree"
                              value={giftNoOfTree}
                              onChange={(e: any) =>
                                this.GiftCardInputChange(e, "giftNoOfTree")
                              }
                            />
                          </Form.Item>
                        </div>
                      }
                      {orderSummaryData == "Flight travel" &&
                        <div>
                          <Row>
                            <p>
                              {CARD_NAME1} <span> {CARD_NAME2}</span>
                            </p>
                          </Row>
                          <Form.Item
                            label=""
                            name="giftCard"
                          >
                            <Input
                              size="large"
                              placeholder="Name"
                              value={giftCardName}
                              onChange={(e: any) =>
                                this.GiftCardInputChange(e, "giftcard")
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            label=""
                            name="giftCardEmail"
                          >
                            <Input
                              size="large"
                              placeholder="Email"
                              value={giftCardEmail}
                              onChange={(e: any) =>
                                this.GiftCardInputChange(e, "giftCardEmail")
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            label=""
                            name="NoOfFlight"
                          >
                            <Input
                              size="large"
                              placeholder="Enter No of Flight"
                              value={giftNoOfFlight}
                              onChange={(e: any) =>
                                this.GiftCardInputChange(e, "giftNoOfFlight")
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            label=""
                            name="flightselect"
                          >
                            <text style={{ display: "none" }}>
                              {this.state.selectedPackage}
                            </text>
                            <Select
                              placeholder="Type of flight"
                              size="large"
                              allowClear
                              // value={}
                              onChange={(e) => this.GiftCardInputChange(e, "flightselect")}
                            >
                              <Option value="Small" key="1">
                                Small
                              </Option>
                              <Option value="Medium" key="2">
                                Medium
                              </Option>
                              <Option value="Large" key="3">
                                Large
                              </Option>
                            </Select>
                          </Form.Item>

                        </div>
                      }
                      {orderSummaryData == "Generic Climate Offsetting" &&
                        <div>
                          <Row>
                            <p>
                              {CARD_NAME1} <span> {CARD_NAME2}</span>
                            </p>
                          </Row>

                          <Form.Item
                            label=""
                            name="giftCard"
                          // rules={[{ required: true, message: "required" }]}
                          >
                            <Input
                              size="large"
                              placeholder="Name"
                              value={giftCardName}
                              onChange={(e: any) =>
                                this.GiftCardInputChange(e, "giftcard")
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            label=""
                            name="giftCardEmail"
                          // rules={[{ required: true, message: "required" }]}
                          >
                            <Input
                              size="large"
                              placeholder="Email"
                              value={giftCardEmail}
                              onChange={(e: any) =>
                                this.GiftCardInputChange(e, "giftCardEmail")
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            label=""
                            name="giftCardAmount"
                          // rules={[{ required: true, message: "required" }]}
                          >
                            <Input
                              size="large"
                              placeholder="Amount"
                              value={giftCardAmount}
                              onChange={(e: any) =>
                                this.GiftCardInputChange(e, "giftCardAmount")
                              }
                            />
                          </Form.Item>
                        </div>
                      }
                      {!orderSummaryData &&
                        <div>
                          <Row>
                            <p>
                              {CARD_NAME1} <span> {CARD_NAME2}</span>
                            </p>
                          </Row>

                          <Form.Item
                            label=""
                            name="giftCard"
                          // rules={[{ required: true, message: "required" }]}
                          >
                            <Input
                              size="large"
                              placeholder="Name"
                              value={giftCardName}
                              onChange={(e: any) =>
                                this.GiftCardInputChange(e, "giftcard")
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            label=""
                            name="giftCardEmail"
                          // rules={[{ required: true, message: "required" }]}
                          >
                            <Input
                              size="large"
                              placeholder="Email"
                              value={giftCardEmail}
                              onChange={(e: any) =>
                                this.GiftCardInputChange(e, "giftCardEmail")
                              }
                            />
                          </Form.Item>
                          <Form.Item
                            label=""
                            name="giftCardAmount"
                          // rules={[{ required: true, message: "required" }]}
                          >
                            <Input
                              size="large"
                              placeholder="Amount"
                              value={giftCardAmount}
                              onChange={(e: any) =>
                                this.GiftCardInputChange(e, "giftCardAmount")
                              }
                            />
                          </Form.Item>
                        </div>
                      }
                    </div>
                  </>
                )}

                {location === "/individual/plant-tree" ? (
                  <div>
                    <div className="off-ord-flight-data-card">
                      {this.props.history.isSelectGift ? (
                        <p className="select-onetime-card">
                          {this.props.history.selectGiftCard === "Agroforestry"
                            ? "Agroforestry Gift Card"
                            : "Urban Forestation Gift Card"}
                        </p>
                      ) : (
                        <p className="select-onetime-card">
                          {this.props.history.activeTabKey === "1"
                            ? "Agroforestry"
                            : "Urban Forestation - Miyawaki Method"}
                        </p>
                      )}
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
                                <p>{PLANTS_GIFT}</p>
                              </Row>

                              <Form.Item label="" name="plantno">
                                <Input
                                  size="large"
                                  type="number"
                                  placeholder="Enter number of plants"
                                  value={GiftCardPlantNo}
                                  maxLength={5}
                                  onChange={(e) =>
                                    this.setState(
                                      {
                                        GiftCardPlantNo: e.target.value,
                                      },
                                      () =>
                                        this.props.fetchCustomTreeno(
                                          this.state.GiftCardPlantNo
                                        )
                                    )
                                  }
                                />
                              </Form.Item>
                            </>
                          )}
                          <Row>
                            <p>{GIFT_PREVIEW}</p>
                          </Row>

                          <div className="order-summary-newgift-card-sec">
                            <div className="d-flex justify-content-between px-3 pt-3">
                              <div>
                                <p>{GIFT_CARD}</p>
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
                                {giftCardName === "" ? "(Name)" : giftCardName}
                              </p>
                            </div>
                            <div className="new-giftcard-desc ps-3">
                              <p>{GIFTED_MESSAGE}</p>
                            </div>

                            <div className="new-giftcard-value ps-3">
                              <p>No of Trees</p>
                            </div>
                            <div className="new-giftcard-amount ps-3">
                              <p>
                                {selectedNoPlant === "custom"
                                  ? GiftCardPlantNo
                                  : selectedNoPlant}
                              </p>
                            </div>

                            <div className="new-giftcard-btn ps-3">
                              <button
                                onClick={() => HISTORY.push("/redeemgift")}
                              >
                                {HOW_REDEEM}
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
                                {CARD_NAME1} <span>{CARD_NAME2}</span>
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
                              <p>{EMAIL}</p>
                            </Row>

                            <Form.Item
                              label=""
                              name="emailidperson"
                            // rules={[{ required: true, message: "required" }]}
                            >
                              <Input
                                size="large"
                                placeholder="email@gmail.com"
                              />
                            </Form.Item>
                          </div>
                        </>
                      ) : (
                        <>
                          {this.props.history.selectNoTrees === "custom" ? (
                            <>
                              <Row className="txt-algn-cntr">
                                <span className="txt-no-input">
                                  {PLANTS_PLANT}
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
                                ) : null}
                              </Form.Item>
                            </>
                          ) : (
                            <Row gutter={16} className="txt-algn-cntr">
                              <Col lg={12} md={12}>
                                <span>{TREES_NUMBER}</span>
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
                  </div>
                ) : (
                  <>
                    {location !== "/individual/AddtoCard" &&
                      location !== "/individual/giftCard" &&
                      location !== "/individual/AddtoCard/payment" && (
                        <>
                          <Row>
                            <p>Name on Certificate</p>
                          </Row>

                          <Form.Item
                            label=""
                            name="certificate"
                          // rules={[
                          //   { required: true, message: "Enter certificate name" },
                          // ]}
                          >
                            <text style={{ display: "none" }}>
                              {certificateName}
                            </text>
                            <Input
                              size="large"
                              placeholder="Optional"
                              value={certificateName}
                              onChange={(e) => this.CertificateInputChange(e)}
                            />
                          </Form.Item>
                        </>
                      )}
                  </>
                )}

                {location === "/individual/AddtoCard" ||
                  location === "/individual/AddtoCard/payment" ? (
                  <div className="offset-flight-card">
                    <div className="off-ord-flight-data-card">
                      <Row
                        gutter={16}
                        className="txt-algn-cntr cart-card-price"
                      >
                        <Col lg={12} md={12}>
                          <span>Total Items</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData
                              ? orderSummaryData.total_item
                              : "--"}
                          </label>
                        </Col>
                      </Row>
                      <Row
                        gutter={16}
                        className="txt-algn-cntr cart-card-price"
                      >
                        <Col lg={12} md={12}>
                          <span>Sub Total</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {currency_conversion_response?.currency_symbol}
                            {orderSummaryData
                              ? orderSummaryData.sub_total
                              : "0"}
                          </label>
                        </Col>
                      </Row>
                      <Row
                        gutter={16}
                        className="txt-algn-cntr cart-card-price"
                      >
                        <Col lg={12} md={12}>
                          <span>TAX ({this.state.gstValue * 100}%)</span>
                        </Col>
                        <Col lg={12} md={12} className="text-end">
                          <label>
                            {orderSummaryData ? orderSummaryData.tax : "--"}
                          </label>
                        </Col>
                      </Row>
                    </div>
                  </div>
                ) : null}
              </div>

              <div>
                <Row className="justify-content-between indv-offset-order-total-1 px-4 py-3 ct_flex_important">
                  {location === "/individual/plant-tree" ? (
                    <p className="ord-total-imp">
                      {" "}
                      {this.props.history.isSelectGift
                        ? "Total gifted impact (CO2e)"
                        : "Total impact (CO2e)per year"}{" "}
                    </p>
                  ) : (
                    <p className="ord-total-imp">{TOTAL_IMPACT}</p>
                  )}
                  {location !== "/individual/giftCard" &&
                    < span >
                      {
                        calculateTotalImpact(
                          orderSummaryData?.total_impact ||
                          orderSummaryDetails?.total_impact
                        )
                      }
                      <b>t</b>
                    </span>
                  }

                  {location == "/individual/giftCard" &&
                    orderSummaryData == "Flight travel" &&
                    <span>
                      {calculateTotalImpact(giftNoOfFlight ? giftSummaryData?.total_impact * giftNoOfFlight : giftSummaryData?.total_impact * 1)}
                      <b>t</b>
                    </span>
                  }
                  {location == "/individual/giftCard" &&
                    orderSummaryData == "Generic Climate Offsetting" &&
                    <span>
                      {calculateTotalImpact(giftSummaryData?.total_impact)}
                      <b>t</b>
                    </span>
                  }
                  {location == "/individual/giftCard" &&
                    orderSummaryData == "Plant trees" &&
                    <span>
                      {giftNoOfTree && calculateTotalImpact(giftSummaryData?.total_impact)}
                      <b>t</b>
                    </span>
                  }
                </Row>
                {/* {location === "/individual/AddtoCard" ||
                  location === "/individual/AddtoCard/payment" ? (
                  <>
                    <div className="offset-flight-card gift_card_total">
                      <div className="off-ord-flight-data-card">
                        <Row
                          gutter={16}
                          className="txt-algn-cntr cart-card-price"
                        >
                          <Col lg={12} md={12}>
                            <span>Gift Card Off</span>
                          </Col>
                          <Col lg={12} md={12} className="text-end">
                            {isValidCode ? (
                              <label> {giftCodeObj.gift_card_off}</label>
                            ) : (
                              <label>
                                {orderSummaryData
                                  ? orderSummaryData.gift_card_off
                                  : "0"}
                              </label>
                            )}
                          </Col>
                        </Row>
                        <Row
                          gutter={16}
                          className="txt-algn-cntr cart-card-price ct_flex_row"
                        >
                          <Col lg={12} md={12}>
                            <span>Total</span>
                          </Col>
                          <Col lg={12} md={12} className="text-end">
                            {currency_conversion_response?.currency_symbol}
                            {calculateTotalAmount(giftSummaryData?.total)}
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </>
                ) : null} */}
              </div>
              {location === "/individual/AddtoCard" ||
                location == "/individual/AddtoCard/payment" ? null : (
                <>
                  <Row className="justify-content-between indv-offset-order-total-2 px-4 py-3 ct_flex_important">
                    <p className="ord-total-imp">TOTAL </p>
                    <span>
                      {location == "/individual/giftCard" ?
                        orderSummaryData == "Generic Climate Offsetting" ?
                          <b>
                            {currency_conversion_response?.currency_symbol}
                            {giftSummaryData?.total}
                          </b>
                          :
                          orderSummaryData == "Flight travel" ?
                            <b>
                              {currency_conversion_response?.currency_symbol}
                              {giftNoOfFlight ? calculateTotalAmount(
                                giftSummaryData?.total * giftNoOfFlight
                              ) : calculateTotalAmount(
                                giftSummaryData?.total * 1
                              )}
                            </b>
                            :
                            orderSummaryData == "Plant trees" &&
                            <b>
                              {currency_conversion_response?.currency_symbol}
                              {giftNoOfTree && calculateTotalAmount(giftSummaryData?.total)}
                            </b>
                        :
                        <b>
                          {currency_conversion_response?.currency_symbol}
                          {calculateTotalAmount(
                            orderSummaryData?.total ||
                            orderSummaryDetails?.total
                          )}
                        </b>
                      }
                    </span>
                  </Row>
                  {location === "/individual/giftCard" ||
                    location === "/individual/plant-tree" ? (
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
                          onClick={() => this.handleCheckOffsetValidation(orderSummaryData)}
                          disabled={
                            this.props?.history?.selectNoTrees === "custom" &&
                            (this.state.minPlantError ||
                              (this.props.history.isSelectGift
                                ? this.state.GiftCardPlantNo === ""
                                : this.state.NoOfPlants === ""))
                          }
                        >
                          Buy Now
                        </Button>
                      </Col>
                    </Row>
                  ) : location !== "/individual/AddtoCard/payment" ? (
                    <>
                      <Col className="order-summary-add-cart-btn">
                        <Form.Item className="order-summary-add-cart-btn-ns text-center">
                          <Button
                            className={
                              disableCartButton()
                                ? "indv-offset-order-btn-cart disable-add-to-cart"
                                : "indv-offset-order-btn-cart"
                            }
                            htmlType="submit"
                            onClick={() =>
                              this.handleCheckOffsetValidation(
                                topicName === "Flight"
                              )
                            }
                            disabled={disableCartButton()}
                          >
                            Add to Cart
                          </Button>
                        </Form.Item>
                      </Col>
                    </>
                  ) : null}
                </>
              )}
            </Form>
            {location.includes("/individual/offset-subscription") ? (
              <p
                className={
                  isMobile ? "renew-message renew-message-ns" : "renew-message"
                }
              >
                {RENEW_MESSAGE}
              </p>
            ) : null}
            {location === "/individual/AddtoCard" ||
              location === "/individual/AddtoCard/payment" ? null : (
              <>
                {location === "/individual/plant-tree" ? (
                  <>
                    <div className="indv-offset-order-summay-desc  px-4 py-3">
                      <p className="font-text16">Assumptions</p>
                      <div className="plant-tree-ord">
                        <ul>
                          <li>{OFFSET_AMOUNT}</li>
                          <li>{TREE_MATURITY}</li>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {location !== "/individual/giftCard" &&
                      location !== "/individual/offset-onetime-house" &&
                      location === "/individual/offset-onetime" ? (
                      <div className="indv-offset-order-summay-desc  px-4 py-3">
                        <p>{NOT_SURE_OFFSET1} </p>
                        <ul>
                          <li>
                            {NOT_SURE_OFFSET2}
                            {" " + JSON.parse(UserDetails)?.country_name + " "}
                            {NOT_SURE_OFFSET3}
                            <span className="indv-offset-order-summay-num">
                              {this.state?.parseGlobalAndCountryOffset?.find((item: any) => item?.year === "Country Annual Footprint")?.value}
                            </span>
                            {NOT_SURE_OFFSET4}
                          </li>
                          <li>
                            {NOT_SURE_OFFSET5}
                            <span className="indv-offset-order-summay-num">
                              {this.state.parseGlobalAndCountryOffset?.find((item: any) => item?.year === "Global Annual Footprint")?.value}
                            </span>
                            {NOT_SURE_OFFSET4}
                          </li>
                          <li>
                            {NOT_SURE_OFFSET6}
                            <span className="indv-offset-order-summay-num">
                              1
                            </span>
                            {NOT_SURE_OFFSET7}
                          </li>
                        </ul>
                      </div>
                    ) : null}
                  </>
                )}
              </>
            )}
          </div>
        </Card>
      </div >
    );
  }
}

export default OrderSummary as React.ComponentType<any>;
// Customizable Area End
