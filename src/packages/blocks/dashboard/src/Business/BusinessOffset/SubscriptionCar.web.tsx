import React from "react";
import { Col, Row, Select, Form, Button, Input } from "antd";
import IndividualOffset from "./IndividualOffset.web";
// Customizable Area Start
import SubscriptionCarController, {
  Props,
} from "./SubscriptionCarController.web";
import SubscriptionCard from "./SubscriptionCard.web";
import OrderSummary from "./BusinessOrderSummary.web";
import { VehicleTypeList } from "../../VehicleTypeList";
import { FuelTypeList } from "../../FuelTypeList";
import { PowerSourceList } from "../../PowerSourceList";
import {
  FlightPlush,
  FlightMinus,
  removeCircle,
  CYCLE,
  TRAFFIC,
  BUS,
  TREE,
  WINDMILL,
  BUILDING,
} from "./assets";
import BusinessOffsetDetail from "./BusinessOffsetDetail.web";
import SubscriptionMobileCard from "./SubsciptionCardMobile.web";
import {
  deviceMode,
  getHtmlElementById,
} from "../../../../../components/src/CommonUtils";

const { Option } = Select;
// Customizable Area End

class SubscriptionCar extends SubscriptionCarController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const {
      orderSummaryData,
      loader,
      btnDisabled,
      finalTotalImpact,
    } = this.state;

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
            <div className="px-2">
              <div className="offset-top-bg">
                {isMobile ? <SubscriptionMobileCard /> : <></>}
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/01v0d0uuvca1sheytb4rzouok6nv/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Car_BG.jpg%22%3B%20filename%2A%3DUTF-8%27%27Car_BG.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </div>
              {!isMobile ? (
                <SubscriptionCard />
              ) : (
                <>
                  <>
                    <Row gutter={16} style={{ paddingTop: "10px" }}>
                      <Col lg={24}>
                        <div className="title-business-head business-offset-title">
                          <h4>CALCULATE YOUR FOOTPRINT</h4>
                          <h3>
                            OUR APPROACH TO CALCULATE THE CARBON FOOTPRINT OF A{" "}
                            <span>CAR</span>
                          </h3>
                        </div>
                      </Col>
                    </Row>
                    <div
                      className="about-hate-climate-chng-sec-flight Tool_user"
                      style={{ padding: "0" }}
                    >
                      <div className="container">
                        <Row className="flight-text-center align-items-start">
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
                                          style={{
                                            fontWeight: "500",
                                            marginBottom: "0px",
                                          }}
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
                  </>
                </>
              )}
              <div className="carbon-offset-flight-sec">
                <div className="carbon-offset-onetime-life-sec py-3">
                  <div className="offset-onetime-car-sec">
                    <div className="offset-onetime-car-sec-head py-3 px-4 d-flex justify-content-between">
                      <div>
                        <p>Car</p>
                      </div>
                    </div>
                    <div className="offset-onetime-car-bottom-sec py-3 px-4 ct_padd_btm_65">
                      {this.state.carData.map((el: any, i: any) => (
                        <Row gutter={24} key={i}>
                          {i !== 0 ? (
                            <Col lg={1} md={1}>
                              <div className="businees-offset-car-form-removeBtn mt-5">
                                <a onClick={this.removeClick.bind(this, i)}>
                                  <img src={removeCircle} width="24" />
                                </a>
                              </div>
                            </Col>
                          ) : (
                            <Col lg={1} md={1} />
                          )}

                          <Col
                            lg={el.fuel_type === "electric" ? 5 : 8}
                            md={el.fuel_type === "electric" ? 5 : 8}
                          >
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
                              <Select
                                showSearch
                                placeholder="Select"
                                size="large"
                                allowClear
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
                          <Col
                            lg={el.fuel_type === "electric" ? 5 : 8}
                            md={el.fuel_type === "electric" ? 5 : 8}
                          >
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
                          {el.fuel_type === "electric" && (
                            <Col lg={5} md={5} className='power-src-mobile-ns'>
                              <p className="mb-2">Power Source</p>
                              <Form.Item
                                name="power_source"
                                rules={[
                                  {
                                    required: true,
                                    message: "Select Fuel Type",
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
                                  {PowerSourceList.map((type: any, p: any) => (
                                    <Option value={type.value} key={p}>
                                      {type.name}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            </Col>
                          )}

                          <Col lg={5} md={5} className='input-units-mobile-ns'>
                            <div className="flight-pass-data">
                              <p className="mb-2">No of Cars</p>
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
                                    onChange={this.handleCarNoInputChange.bind(
                                      this,
                                      i
                                    )}
                                  />
                                </Form.Item>
                              </div>
                              {/* <div className="d-flex justify-content-between align-items-center">
                                <div
                                  className="flight-img-card"
                                  onClick={(e) => this.noOfCarCount(i, "minus")}
                                >
                                  <img src={FlightMinus} alt="FlightMinus" />
                                </div>
                                <label>{el.no_of_cars}</label>
                                <div
                                  className="flight-img-card"
                                  onClick={(e) => this.noOfCarCount(i, "plush")}
                                >
                                  <img src={FlightPlush} alt="FlightPlush" />
                                </div>
                              </div> */}
                            </div>
                          </Col>
                          <Col lg={2} md={2} className='co2e-mobile-ns'>
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
                        </Row>
                      ))}
                      <div
                        className={
                          this.state.carData.length === 10
                            ? "d-flex align-items-center webGreenColor disabed-click"
                            : "d-flex align-items-center webGreenColor"
                        }
                      >
                        <div
                          className="disp_content"
                          onClick={this.addClick.bind(this)}
                        >
                          <img src={FlightPlush} width="22" />
                          <p className="ms-2 add_new_card">Add New</p>
                        </div>
                      </div>
                      <hr />
                      <Row className="subscription-emp-btn-center">
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
              <OrderSummary
                id={""}
                history={""}
                location={""}
                orderSummaryData={orderSummaryData}
                finalTotalImpact={finalTotalImpact}
              />
            ) : (
              <></>
            )}
            <BusinessOffsetDetail
              offsetType="subscription"
              subscriptionImage={
                "https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/ftw69jekl49pqyffup6avhdcn7eo/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Car-Subscription-img.jpg%22%3B%20filename%2A%3DUTF-8%27%27Car-Subscription-img.jpg&response-content-type=image%2Fjpeg"
              }
              subscriptionTitle="How do subscriptions for offsetting Car Carbon Footprint work?"
              subscriptionPera="Based on car and fuel type, the tool calculates the carbon footprint, assuming the yearly distance traveled by the vehicle as  10K km.While the Ekobon tool takes the default frequency for the subscription package as annual, you can choose other frequencies, too. In case you do that, the calculations will be made accordingly. They will then be updated on the dashboard. Suppose you can be chosen monthly  frequency,the dashboard will be updated every month post the receipt of funds. You also have the option to change the project you want to invest in, and the investment for the next billing cycle will be directed to the latest set of projects chosen."
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
                finalTotalImpact={finalTotalImpact}
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

export default SubscriptionCar as React.ComponentType<any>;
// Customizable Area End
