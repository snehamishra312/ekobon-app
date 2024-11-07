import React from "react";
// Customizable Area Start
import OffsetOneTimeFlightController, {
  Props,
} from "./OffsetOneTimeFlightController.web";
import { Row, Col, Form, Button, Checkbox, Card, Radio, Select } from "antd";
import IndividualOffset from "./IndividualOffset.web";
import OneTimeCard from "./OneTimeCard.web";
import OrderSummary from "./OrderSummary.web";
import OneTimeMobileCard from "./OneTimeMobileCard.web";

import { FlightRightLeft, FlightPlush, FlightMinus } from "./assets";
import { TopTravelCityList, TravelCityList } from "../TravelCityList";
import { TravelClassList } from "../TravelClassList";
import IndividualOffsetDetails from "./IndividualOffsetDetails.web";
import { constants } from "../../../../components/src/types";

import {
  deviceMode,
  getHtmlElementById,
} from "../../../../components/src/CommonUtils";
import {
  downwardoffsetindv,
  AirplaneSubscription,
  TipFlightSun,
  TipFlightWind,
} from "./assets";
const { Option } = Select;
// Customizable Area End

class OffsetOneTimeFlight extends OffsetOneTimeFlightController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  renderHeading = () => {
    const {
      CALCULATE_FOOTPRINT,
      OFFSET_FOOTPRINT,
      EKOBON_APPROACH1,
      EKOBON_APPROACH2,
      EKOBON_APPROACH2_WEB,
    } = constants.IndividualOffsetDetails;

    const {
      oneWayStatus,
      passengers,
      accountNoxEmissionsStatus,
      orderSummaryData,
      loader,
      CheckViaValue,
      CheckToValue,
      CheckFromValue,
      clickShow
    } = this.state;

    return (
      <Col lg={24} md={12} xs={24} sm={24}>
        <div className="our-approach-main-sec-text-fliht offset_details_head mb-3">
          <p>{OFFSET_FOOTPRINT?.toUpperCase()}</p>
        </div>
      </Col>
    );
  };

  renderHeading2 = () => {
    const {
      CALCULATE_FOOTPRINT,
      OFFSET_FOOTPRINT,
      EKOBON_APPROACH1,
      EKOBON_APPROACH2,
      EKOBON_APPROACH2_WEB,
    } = constants.IndividualOffsetDetails;

    const {
      oneWayStatus,
      passengers,
      accountNoxEmissionsStatus,
      orderSummaryData,
      loader,
      CheckViaValue,
      CheckToValue,
      CheckFromValue,
      clickShow
    } = this.state;

    return (
      <Col lg={24} md={12} xs={24} sm={24}>
        <div className="our-approach-main-sec-head offset_details">
          <p className="our-approach-sec-desc our-approach-sec-desc-flight-padding-ns ct_accordian_tab ct_margin_top_25" onClick={this.handleClickFunction}>
            <span className="">
              {EKOBON_APPROACH1.slice(0, 27)}
              <br />
            </span>
            <button><i className={clickShow == false ? "fa fa-chevron-down " : "fa fa-chevron-up"}></i></button>
          </p>
        </div>
      </Col>
    );
  };

  renderFlightToolUses = () => {
    const {
      RIGHT_DATA1,
      RIGHT_DATA2,
      RIGHT_DATA3,
      LEFT_DATA1,
      LEFT_DATA2,
      TOOL_USES1,
      TOOL_USES2,
      TOOL_USES3,
      TOOL_USES4,
    } = constants.OffsetOneTimeFlight;

    const {
      oneWayStatus,
      passengers,
      accountNoxEmissionsStatus,
      orderSummaryData,
      loader,
      CheckViaValue,
      CheckToValue,
      CheckFromValue,
      clickShow
    } = this.state;

    let toolUses = [
      {
        id: 1,
        name: TOOL_USES1,
      },
      {
        id: 2,
        name: TOOL_USES2,
      },
      {
        id: 3,
        name: TOOL_USES3,
      },
      {
        id: 4,
        name: TOOL_USES4,
      },
    ];
    return (
      <div
        className="about-hate-climate-chng-sec Tool_user"
        style={{ padding: "0", marginTop: "70px" }}
      >
        <div className="container">
          <Row gutter={48} className={clickShow == false ? "ct_para_cnt align-items-start" : "ct_accordion_item align-items-start"}>
            {toolUses.map((e: any, i: any) => {
              return (
                <Col lg={12} key={i}>
                  <div className="about-hate-climate-chng-text-second Tool_user_section">
                    <Row className="ct_grid_2">
                      <Col lg={3} className="">
                        <div className="">
                          <p
                            className={
                              e.id === 1
                                ? "firstsquareT1 Tool_user_number mb-0"
                                : "firstsquareT Tool_user_number mb-0"
                            }
                          >
                            {e.id}
                          </p>
                        </div>
                      </Col>
                      <Col lg={50}>
                        <div className="tool_user_contents ct_tool_user_contents">
                          <p className="pText" style={{ fontWeight: "400" }}>
                            {e.name}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  };

  render() {
    const {
      RIGHT_DATA1,
      RIGHT_DATA2,
      RIGHT_DATA3,
      LEFT_DATA1,
      LEFT_DATA2,
      TOOL_USES1,
      TOOL_USES2,
      TOOL_USES3,
      TOOL_USES4,
      SELECT_AIRPORT,
      ONE_WAY,
      RETURN_FLIGHT,
      VIA_OPTIONAL,
      NOX_EMISSIONS,
      SELECT_FROM,
      SELECT_TO,
      SELECT_VIA,
    } = constants.OffsetOneTimeFlight;

    const {
      oneWayStatus,
      passengers,
      accountNoxEmissionsStatus,
      orderSummaryData,
      loader,
      CheckViaValue,
      CheckToValue,
      CheckFromValue,
    } = this.state;
    const isMobile = deviceMode.isMobile;

    return (
      <div className="one-time-offset-second">
        <IndividualOffset />

        <Row gutter={16} className="py-3 px-2 align-items-start">
          <Col lg={16} md={16}>
            <div className="px-2">
              <div className="offset-top-bg">
                {isMobile ? <OneTimeMobileCard /> : <></>}
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/1mm92nubfp1ch4gr8yugfxg1jf7p/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Airplane_BG.jpg%22%3B%20filename%2A%3DUTF-8%27%27Airplane_BG.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </div>
              {!isMobile ? <OneTimeCard /> : <></>}
              {!isMobile ? <>
                <div>
                  <Row gutter={16}>
                    {window.location.pathname ===
                      "/individual/offset-onetime-flight" && (
                        <>
                          {this.renderHeading()}
                        </>
                      )}
                  </Row>
                </div><br />
                <br />
              </> :
                <>
                  <div>
                    <Row gutter={16}>
                      {window.location.pathname ===
                        "/individual/offset-onetime-flight" && (
                          <>
                            {this.renderHeading()}
                          </>
                        )}
                    </Row>
                  </div>
                </>}

              <div className="carbon-offset-flight-sec">
                <Form
                  name="basic"
                  layout="vertical"
                  initialValues={{ remember: true }}
                  onFinish={this.handleFinish}
                >
                  <Card title="Flight" bordered={true}>
                    <Radio.Group
                      className="offset-flight-radio indi-offset-flight-radio"
                      onChange={this.handleOneWayStatusChange}
                      value={oneWayStatus}
                    >
                      <Radio value={false}>{ONE_WAY}</Radio>
                      <Radio value={true}>{RETURN_FLIGHT}</Radio>
                    </Radio.Group>
                    <div className="flight-card-content">
                      <Row gutter={16}>
                        <Col lg={7} md={7} className="flight-card-block">
                          <p>From</p>
                          <Form.Item
                            name="from"
                            rules={[{ required: true, message: "Select From" }]}
                          >
                            <Select
                              showSearch
                              // style={{ width: "250px" }}
                              placeholder={SELECT_AIRPORT}
                              size="large"
                              allowClear
                              onChange={this.handleFromChange}
                            >
                              {TopTravelCityList.map((city: any) => (
                                <Option
                                  value={city.city}
                                  key={city.id}
                                  title={`${city.name} (${city.city})`}
                                >
                                  {`${city.city}, ${city.name} (${city.code})`}
                                </Option>
                              ))}
                              {TravelCityList.sort((a, b) =>
                                a.city.localeCompare(b.city, "es", {
                                  sensitivity: "base",
                                })
                              ).map((city: any) => (
                                <Option
                                  value={city.city}
                                  key={city.id}
                                  title={`${city.name} (${city.city})`}
                                >
                                  {`${city.city}, ${city.name} (${city.code})`}
                                </Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col lg={1} md={1} className="d-flex pad-0">
                          <Row className="align-items-center">
                            <img
                              src={FlightRightLeft}
                              alt="FlightRightLeft"
                              className="FlightRightLeft"
                            />
                          </Row>
                        </Col>
                        <Col lg={7} md={7} className="flight-card-block">
                          <p>{VIA_OPTIONAL}</p>
                          <Form.Item name="via">
                            <Select
                              showSearch
                              // style={{ width: "250px" }}
                              placeholder={SELECT_AIRPORT}
                              size="large"
                              allowClear
                              onChange={this.handleViaChange}
                            >
                              {TopTravelCityList.map((city: any) => (
                                <Option
                                  value={city.city}
                                  key={city.id}
                                  title={`${city.name} (${city.city})`}
                                >
                                  {`${city.city}, ${city.name} (${city.code})`}
                                </Option>
                              ))}
                              {TravelCityList.sort((a, b) =>
                                a.city.localeCompare(b.city, "es", {
                                  sensitivity: "base",
                                })
                              ).map((city: any) => (
                                <Option
                                  value={city.city}
                                  key={city.id}
                                  title={`${city.name} (${city.city})`}
                                >
                                  {`${city.city}, ${city.name} (${city.code})`}
                                </Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col lg={1} md={1} className="d-flex pad-0">
                          <Row className="align-items-center">
                            <img
                              src={FlightRightLeft}
                              alt="FlightRightLeft"
                              className="FlightRightLeft"
                            />
                          </Row>
                        </Col>
                        <Col lg={7} md={7} className="flight-card-block">
                          <p>To</p>
                          <Form.Item
                            name="to"
                            rules={[{ required: true, message: "Select To" }]}
                          >
                            <Select
                              showSearch
                              // style={{ width: "250px" }}
                              placeholder={SELECT_AIRPORT}
                              size="large"
                              allowClear
                              onChange={this.handleToChange}
                            >
                              {TopTravelCityList.map((city: any) => (
                                <Option
                                  value={city.city}
                                  key={city.id}
                                  title={`${city.name} (${city.city})`}
                                >
                                  {`${city.city}, ${city.name} (${city.code})`}
                                </Option>
                              ))}
                              {TravelCityList.sort((a, b) =>
                                a.city.localeCompare(b.city, "es", {
                                  sensitivity: "base",
                                })
                              ).map((city: any) => (
                                <Option
                                  value={city.city}
                                  key={city.id}
                                  title={`${city.name} (${city.city})`}
                                >
                                  {`${city.city}, ${city.name} (${city.code})`}
                                </Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col lg={12} md={12}>
                          <p>Class</p>
                          <Form.Item
                            name="class"
                            rules={[
                              { required: true, message: "Select Class" },
                            ]}
                          >
                            <Select
                              showSearch
                              // style={{ width: "250px" }}
                              placeholder="Select"
                              size="large"
                              allowClear
                              onChange={this.handleTravelClassChange}
                            >
                              {TravelClassList.map(
                                (travelClass: any, c: any) => (
                                  <Option value={travelClass.name} key={c}>
                                    {travelClass.value}
                                  </Option>
                                )
                              )}
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col lg={12} md={12} className="d-flex-center">
                          <div className="flight-pass-data">
                            <p>Passengers</p>
                            <div
                              className="flight-img-card"
                              onClick={(e) =>
                                this.handlePassengerCount("minus")
                              }
                            >
                              <img src={FlightMinus} alt="FlightMinus" />
                            </div>
                            <label>{passengers}</label>
                            <div
                              className="flight-img-card"
                              onClick={(e) =>
                                this.handlePassengerCount("plush")
                              }
                            >
                              <img src={FlightPlush} alt="FlightPlush" />
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Form.Item name="accountNoxEmissions">
                          <Checkbox
                            onChange={
                              this.handleaccountNoxEmissionsStatusChange
                            }
                            checked={accountNoxEmissionsStatus}
                          >
                            {NOX_EMISSIONS}
                          </Checkbox>
                        </Form.Item>
                      </Row>
                      <hr />
                      <Row>
                        <Col lg={12} md={12}>
                          <>
                            {CheckFromValue && (
                              <div className="select-validation">
                                {SELECT_FROM}
                              </div>
                            )}
                            {CheckViaValue && (
                              <div className="select-validation">
                                {SELECT_VIA}
                              </div>
                            )}
                            {CheckToValue && (
                              <div className="select-validation">
                                {SELECT_TO}
                              </div>
                            )}
                          </>
                        </Col>
                        <Col
                          lg={12}
                          md={12}
                          style={{
                            width: isMobile ? "100%" : "",
                          }}
                        >
                          <Button
                            className="carbon-offset-btn"
                            size="large"
                            htmlType="submit"
                            // disabled={loader}
                            onClick={
                              ()=>{
                                this.carOrderSummaryData()
                                if (isMobile) {
                                  getHtmlElementById("order-summary-mobile");
                                }
                              }
                            }
                          >
                            {loader
                              ? "Calculating Emissions.."
                              : "Calculate my Emissions"}
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Form>
              </div>
              <br />
            </div>
            {isMobile ? (
              <>
                <OrderSummary
                  id={""}
                  history={""}
                  location={""}
                  orderSummaryData={orderSummaryData}
                /><br />
                <>
                  <div>
                    <Row gutter={16}>
                      {window.location.pathname ===
                        "/individual/offset-onetime-flight" && (
                          <>
                            {this.renderHeading2()}
                            {this.renderFlightToolUses()}
                          </>
                        )}
                    </Row>
                  </div><br />
                </>
              </>
            ) : (
              <></>
            )}
            <IndividualOffsetDetails
              id={""}
              history={""}
              location={""}
              heading={"Flight"}
              rightData={[RIGHT_DATA1, RIGHT_DATA2, RIGHT_DATA3]}
              leftData={[LEFT_DATA1, LEFT_DATA2]}
              toolUses={[
                {
                  id: 1,
                  name: TOOL_USES1,
                },
                {
                  id: 2,
                  name: TOOL_USES2,
                },
                {
                  id: 3,
                  name: TOOL_USES3,
                },
                {
                  id: 4,
                  name: TOOL_USES4,
                },
              ]}
            />
          </Col>
          {!isMobile ? (
            <Col lg={8} md={8}>
              <OrderSummary
                id={""}
                history={""}
                location={""}
                orderSummaryData={orderSummaryData}
              />
            </Col>
          ) : (
            <></>
          )}
        </Row>
      </div>
    );
  }
}

export default OffsetOneTimeFlight as React.ComponentType<any>;
// Customizable Area End
