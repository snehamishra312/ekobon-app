import React from "react";
import { Col, Row, Select, Form, Input, Button } from "antd";
import IndividualOffset from "./IndividualOffset.web";
// Customizable Area Start
import OffsetOneTimeCarController, {
  Props,
} from "./OffsetOneTimeCarController.web";
import OneTimeCard from "./OneTimeCard.web";
import OrderSummary from "./BusinessOrderSummary.web";
import { FlightPlush, FlightMinus } from "./assets";
import {
  removeCircle,
  CYCLE,
  TRAFFIC,
  BUS,
  TREE,
  WINDMILL,
  BUILDING,
} from "./assets";
import { VehicleTypeList } from "../../VehicleTypeList";
import { FuelTypeList } from "../../FuelTypeList";
import { PowerSourceList } from "../../PowerSourceList";
import BusinessOffsetDetail from "./BusinessOffsetDetail.web";
import {
  deviceMode,
  getHtmlElementById,
} from "../../../../../components/src/CommonUtils";
import OneTimeMobileCard from "./OneTimeCardMobile.web";

const { Option } = Select;
// Customizable Area End

class OffsetOneTimeCar extends OffsetOneTimeCarController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { orderSummaryData, carData, loader, btnDisabled, clickShow } = this.state;
    const sideBannerLists = [
      "It is time to tell your customers that you care.It is time to make a difference. Act now, offset your carbon footprint once, or commit to doing it regularly. One time offsetting or subscription plans? The choice is yours. The world will benefit both ways.",
    ];
    const footprintLists = [
      "Manually input the distance traveled and no of cars. You can add multiple journeys too. Account for all cabs and even the shortest trips for your business. The more diligent you are in entering these details, the more accurate will be your emission calculation.",
      "The size and make of the vehicle and fuel type are crucial factors that help arrive at the correct fuel usage estimate. In the case of electric cars, the power source for the battery is taken into account to estimate the emission correctly.",
    ];
    const carbonReductionSlider = [
      {
        icon: TRAFFIC,
        head: "More Traffic,Avoid Driving",
        title:
          "This will save your employees a lot of time and also reduce your fuel spends.",
      },
      {
        icon: CYCLE,
        head: "Invest in low-carbon vehicles",
        title:
          "As a responsible business, it is a good idea to invest in low-carbon vehicles.",
      },
      {
        icon: BUS,
        head: "Encourage Public Transport",
        title:
          "People in leadership positions can set an example by taking public transport too.",
      },
    ];
    const footerCarousel = [
      {
        icon: TREE,
        title:
          "As a part of your CSR activities, involve your team in activities like planning trees",
      },
      {
        icon: WINDMILL,
        title:
          "Educate your employees about the importance of reducing carbon footprint and ways to do so",
      },
      {
        icon: BUILDING,
        title: "Center your office communication around eco-consciousness",
      },
    ];
    const isMobile = deviceMode.isMobile;

    return (
      <div className="one-time-offset-sec">
        <IndividualOffset />

        <Row gutter={16} className="remove-overflow-x py-3 px-2 ct_alignment_center">
          <Col lg={16} md={16}>
            <div className="px">
              <div className="offset-top-bg">
                {isMobile ? <OneTimeMobileCard /> : <></>}
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/01v0d0uuvca1sheytb4rzouok6nv/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Car_BG.jpg%22%3B%20filename%2A%3DUTF-8%27%27Car_BG.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </div>
              <>
                {isMobile ? (
                  <>
                    <Row gutter={16} style={{ paddingTop: "10px" }}>
                      <Col lg={24} md={12} xs={24} sm={24}>
                        <div className="our-approach-main-sec-text-fliht offset_details_head">
                          <p>CALCULATE YOUR FOOTPRINT</p>
                        </div>
                      </Col>
                    </Row>
                  </>
                ) : (
                  ""
                )}
              </>

              {!isMobile ? <OneTimeCard /> : <></>}
              <div className="carbon-offset-flight-sec">
                <div className="carbon-offset-onetime-life-sec carbon-offset-onetime-life-business   py-3">
                  <div className="offset-onetime-car-sec">
                    <div className="offset-onetime-car-sec-head py-3 px-4 d-flex justify-content-between">
                      <div>
                        <p>Car</p>
                      </div>
                    </div>
                    <div className="offset-onetime-car-bottom-sec py-3 px-4 ct_wrape_container">
                      {carData.map((el: any, i: any) => (
                        <Row gutter={16} key={i}>
                          {i !== 0 ? (
                            <Col lg={1} md={2}>
                              <div className="businees-offset-car-form-removeBtn mt-5">
                                <a onClick={this.removeClick.bind(this, i)}>
                                  <img src={removeCircle} width="24" />
                                </a>
                              </div>
                            </Col>
                          ) : (
                            <Col lg={1} md={2} />
                          )}

                          <Col lg={5} md={5}>
                            <p className="mb-2">Vehicle Type</p>
                            <Form.Item
                              name="vehicle_type"
                              rules={[
                                {
                                  required: true,
                                  message: "Select Vehicle Type",
                                },
                              ]}
                            >
                              <text style={{ display: "none" }}>
                                {el.vehicle_type}
                              </text>
                              <Select
                                showSearch
                                placeholder="Select"
                                size="large"
                                allowClear
                                value={el.vehicle_type}
                                onChange={this.handleVehicleFuelChange.bind(
                                  this,
                                  i,
                                  "vehicle_type"
                                )}
                              >
                                {VehicleTypeList.map((type: any, v: any) => (
                                  <Option value={type.value} key={v}>
                                    {type.name}
                                  </Option>
                                ))}
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col lg={5} md={5}>
                            <p className="mb-2">Fuel Type</p>
                            <Form.Item
                              name="fuel_type"
                              rules={[
                                { required: true, message: "Select Fuel Type" },
                              ]}
                            >
                              <Select
                                showSearch
                                placeholder="Select"
                                size="large"
                                allowClear
                                onChange={this.handleVehicleFuelChange.bind(
                                  this,
                                  i,
                                  "fuel_type"
                                )}
                              >
                                {FuelTypeList.map((type: any, f: any) => (
                                  <Option value={type.value} key={f}>
                                    {type.name}
                                  </Option>
                                ))}
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col lg={5} md={5}>
                            <p className="mb-2">Trip Distance(km)</p>
                            <div className="offset-input-custm">
                              <Form.Item name="distance">
                                <text style={{ display: "none" }}>
                                  {el.distance}
                                </text>
                                <Input
                                  size="large"
                                  type="number"
                                  value={el.distance || ""}
                                  placeholder="Distance(km)"
                                  onChange={this.handleTripDistanceChange.bind(
                                    this,
                                    i,
                                    "Distance"
                                  )}
                                />
                              </Form.Item>
                            </div>
                          </Col>
                          <Col lg={4} md={4} className='input-units-mobile-ns'>
                            <div className="flight-pass-data">
                              <p className="mb-2">Cars</p>
                              <div className="offset-input-custm">
                                <Form.Item name="no_of_cars">
                                  <text className="hidentext">
                                    {el.no_of_cars}
                                  </text>
                                  <Input
                                    size="large"
                                    type="number"
                                    value={el.no_of_cars || ""}
                                    placeholder="Cars"
                                    max={5000}
                                    onChange={this.handleTripDistanceChange.bind(
                                      this,
                                      i,
                                      "Cars"
                                    )}
                                  />
                                </Form.Item>
                              </div>
                            </div>
                          </Col>
                          <Col lg={2} md={2} className='co2e-mobile-ns co2e-desktop-ns'>
                            <p className="mb-3">Co2e</p>
                            <div>
                              <p>
                                <b>
                                  {el.total_impact
                                    ? el.total_impact.toFixed(2) + "t"
                                    : 0 + "t"}
                                </b>
                              </p>
                            </div>
                          </Col>
                          {el.fuel_type === "electric" && (
                            <>
                              <Col lg={7} md={7} />
                              <Col lg={5} md={5}>
                                <p className="mb-2">Power Source</p>
                                <Form.Item
                                  name="power_source"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Select Power Source",
                                    },
                                  ]}
                                >
                                  <Select
                                    showSearch
                                    placeholder="Select"
                                    size="large"
                                    allowClear
                                    onChange={this.handleVehicleFuelChange.bind(
                                      this,
                                      i,
                                      "power_source"
                                    )}
                                  >
                                    {PowerSourceList.map(
                                      (type: any, p: any) => (
                                        <Option value={type.value} key={p}>
                                          {type.name}
                                        </Option>
                                      )
                                    )}
                                  </Select>
                                </Form.Item>
                              </Col>
                            </>
                          )}
                        </Row>
                      ))}
                      <Row>
                        <Col span={6}>
                          <a
                            className={
                              carData.length === 10
                                ? "d-flex align-items-center webGreenColor disabed-click"
                                : "d-flex align-items-center webGreenColor"
                            }
                            onClick={this.addClick.bind(this)}
                          >
                            <img src={FlightPlush} width="22" />
                            <p className="ms-2">Add New</p>
                          </a>
                        </Col>
                      </Row>
                      <hr />
                      <Row className="car-one-time-offset-btn-center">
                        <Col lg={12} md={12} />
                        <Col lg={12} md={12}>
                          <Button
                            className={
                              btnDisabled
                                ? "disabed-click carbon-offset-btn"
                                : "carbon-offset-btn"
                            }
                            size="large"
                            htmlType="submit"
                            disabled={btnDisabled}
                            onClick={() => {
                              this.carOrderSummaryData();
                              if (isMobile) {
                                getHtmlElementById("order-summary-mobile");
                              }
                            }}
                          >
                            {loader
                              ? "Calculating Emissions.."
                              : "Calculate my Emissions"}
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isMobile ? (
              <>
                <OrderSummary
                  id={""}
                  history={""}
                  location={""}
                  orderSummaryData={orderSummaryData}
                />
                <Row gutter={16} style={{ paddingTop: "10px" }}>
                  <Col lg={24} md={12} xs={24} sm={24}>
                    <div className="our-approach-main-sec-head offset_details" style={{ marginTop: '-80px' }}>
                      <p className="our-approach-sec-desc text-align-lifestyle-ns ct_accordian_tab" onClick={this.handleClickFunction}>
                        <span className="">
                          How does the tool works
                            </span>
                        <button><i className={clickShow == false ? "fa fa-chevron-down " : "fa fa-chevron-up"} aria-hidden="true"></i></button>
                      </p>
                    </div>
                  </Col>
                  <div
                    className="about-hate-climate-chng-sec Tool_user"
                    style={{ padding: "0", marginTop: '-20px' }}
                  >
                    <div className="container">
                      <Row style={{ marginTop: '90px' }} className={clickShow == false ? "one-time-car-center ct_para_cnt align-items-start" : "one-time-car-center ct_accordion_item align-items-start"}>
                        {footprintLists.map((e: any, i: any) => {
                          return (
                            <Col lg={12} key={i}>
                              <div className="about-hate-climate-chng-text-second Tool_user_section">
                                <Row className="ct_grid_2">
                                  <Col lg={3} className="">
                                    <div className="">
                                      <p
                                        className={
                                          i + 1 === 1
                                            ? "firstsquareT1 Tool_user_number mb-0"
                                            : "firstsquareT Tool_user_number mb-0"
                                        }
                                      >
                                        {i + 1}
                                      </p>
                                    </div>
                                  </Col>
                                  <Col lg={50}>
                                    <div className="tool_user_contents ct_tool_user_contents">
                                      <p
                                        className="pText"
                                        style={{ fontWeight: "500" }}
                                      >
                                        {e}
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
                </Row>
              </>
            ) : (
              <></>
            )}
            <BusinessOffsetDetail
              offsetType="onetime"
              offsetName="CAR"
              bannerClimateTitle="Climate change is wrecking the living experience for people around the world."
              bannerClimateSubTitle="They are looking for organizations that care."
              sideBannerHead="Do environmentally friendly business operations matter to you?Would you go the extra mile to give the world more than you take from it?"
              sideBannerLists={sideBannerLists}
              calculateCarbonHead="CALCULATE YOUR FOOTPRINT"
              calculateCarbonSubhead="OUR APPROACH TO CALCULATE THE CARBON FOOTPRINT OF A"
              footprintLists={footprintLists}
              carbonReductionTitle="Carbon Reduction Tips"
              carbonReductionSubTitle="Reduce carbon footprint from "
              carbonReductionSlider={carbonReductionSlider}
              footerHead="An Investment"
              footerSubHead="Grown into Awarness & CSR"
              footerCarousel={footerCarousel}
            />
          </Col>
          <Col lg={8} md={8}>
            {!isMobile ? (
              <OrderSummary
                id={""}
                history={""}
                location={""}
                orderSummaryData={orderSummaryData}
              />
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default OffsetOneTimeCar as React.ComponentType<any>;
// Customizable Area End
