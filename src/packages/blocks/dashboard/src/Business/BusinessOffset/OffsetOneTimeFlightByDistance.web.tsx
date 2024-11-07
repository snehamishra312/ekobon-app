import { Col, Row, Select, Form, Input, Checkbox, Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import IndividualOffset from "./IndividualOffset.web";
// Customizable Area Start
import OffsetOneTimeFlightByDistanceController, {
  Props,
} from "./OffsetOneTimeFlightByDistanceController.web";
import OneTimeCard from "./OneTimeCard.web";
import OrderSummary from "./BusinessOrderSummary.web";
import { FlightPlush, FlightMinus, removeCircle } from "./assets";
import { TravelClassList } from "../../TravelClassList";
import { VIDEO, AIRPLANE, JET, TREE, WINDMILL, BUILDING } from "./assets";
import BusinessOffsetDetail from "./BusinessOffsetDetail.web";
import { deviceMode, getHtmlElementById } from '../../../../../components/src/CommonUtils';
import OneTimeMobileCard from "./OneTimeCardMobile.web";
const { Option } = Select;
// Customizable Area End

class OffsetOneTimeFlightByDistance extends OffsetOneTimeFlightByDistanceController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const {
      orderSummaryData,
      loader,
      flightListData,
      flightDistanceMaxValue,
      flightDistanceMinValue,
      btnDisabled
    } = this.state;

    const location = window.location.pathname;
    const checkDistanceLocation =
      location == "/business/offset-flight-by-distance";
    const checkFromLocation = location == "/business/offset-flight";

    const sideBannerLists = [
      "It is time to tell your customers that you care.It is time to make a difference.Act now, offset your carbon footprint once, or commit to doing it regularly. One time offsetting or subscription plans? The choice is yours. The world will benefit both ways.",
    ];
    const footprintLists = [
      "The tool uses the great circle distance calculator to compute the travel distance between two airports and adjusts it for detour corrections. You can either manually input the source and destination of the flight or add the distance travelled and type of flight for the tool to calculate.",
      "The input used is the average fuel burnt per km based on aircraft type and total distance covered. This way the tool calculates the total fuel burnt during the flight. Later, the tool accounts for the fuel burnt while take- off and landing and adjusts the value.",
      "Using 3.1 as the conversion factor for CO2 emitted for every 1kg of fuel burnt, the tool calculatesthe total CO2 emitted during air travel.It then doubles the resultant total CO2 emissions to factor in NOx and other greenhouse gases.",
      "Finally, the tool divides this amount by the number of passengers and adjusts it for passenger payload factor and weight by cabin class to calculate the individual contribution to carbon emission.",
    ];
    const carbonReductionSlider = [
      {
        icon: AIRPLANE,
        head: "Travel Economy",
        title:
          "Encourage employees to travel economy as opposed to business class.",
      },
      {
        icon: JET,
        head: "Avoid Jets",
        title: "Avoid private jets for business travel",
      },
      {
        icon: VIDEO,
        head: "Virtual Meetings",
        title: "Switch to virtual meetings wherever possible.",
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
                {isMobile ?
                  <OneTimeMobileCard /> :
                  <></>}
                <img src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/t7il6xt6mmlvjixhi8k1e78blgm7/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Airplane_BG.jpg%22%3B%20filename%2A%3DUTF-8%27%27Airplane_BG.jpg&response-content-type=image%2Fjpeg" alt="img" />
              </div>
              {!isMobile ?
                <OneTimeCard /> :
                <></>}
              <div className="carbon-offset-flight-sec">
                <div className="carbon-offset-onetime-life-sec py-3">
                  <div className="offset-onetime-car-sec">
                    <div className="offset-onetime-car-sec-head py-3 px-4 d-flex justify-content-between buss-flight-header">
                      <div>
                        <p>Flight</p>
                      </div>
                      <div>
                        <ul className="d-flex business-offset-flight-top-right">
                          <li className="business-offset-flight-tab">
                            <NavLink
                              to="/business/offset-flight"
                              className={`${checkFromLocation == true ? "active" : ""
                                } `}>
                              From / To
                            </NavLink>
                          </li>
                          <li className="business-offset-flight-tab">
                            <NavLink
                              to="/business/offset-flight-by-distance"
                              className={`${checkDistanceLocation == true
                                ? "active me-4"
                                : "me-4"
                                } `}
                            >
                              By Distance
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="offset-onetime-car-bottom-sec py-3 px-4">
                      {this.state.flightData?.map((el: any, i: any) => (
                        <Row gutter={18} key={i} className={i === 1 ? "offset_tab_m-t ct_item_align_start" : "ct_item_align_start"}>
                          {i !== 0 ? (
                            <Col lg={1} md={2}>
                              <div className="bussiness-offset-flight-35-removebtn">
                                <a onClick={this.removeClick.bind(this, i)}>
                                  <img src={removeCircle} width="24" />
                                </a>
                              </div>
                            </Col>
                          ) : (
                            <Col lg={1} md={2} />
                          )}
                          <Col lg={9} md={9} className="flight-card-block flight-time-input-mobile-ns">
                            <p className="mb-2" style={{ textAlign: "start" }}>Average Flight time</p>
                            <Form.Item
                              name="product_name"
                            >
                              <text style={{ display: "none" }}>{el.product_name}</text>
                              <Select
                                showSearch
                                placeholder="Select"
                                size="large"
                                allowClear
                                value={el.product_name}
                                onChange={this.handleAvgFlightTimeChange.bind(
                                  this,
                                  i,
                                  "product_name"
                                )}
                              >
                                {flightListData.map((data: any, i: any) => (
                                  <Option
                                    value={data.attributes.name}
                                    key={i}
                                  >
                                    {data.attributes.name}
                                  </Option>
                                ))}
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col lg={6} md={6} className='flight-distance-input-mobile-ns'>
                            <p className="mb-2">Flight distance(km)</p>
                            <div className="offset-input-custm">
                              <Form.Item
                                name="distance"
                              >
                                <Input
                                  size="large"
                                  type="number"
                                  placeholder="0"
                                  min={flightDistanceMinValue.toString()}
                                  max={flightDistanceMaxValue.toString()}
                                  onChange={this.handleFlightDistance.bind(
                                    this,
                                    i
                                  )}
                                />
                              </Form.Item>
                            </div>
                          </Col>
                          <Col lg={4} md={4}>
                            <div className="flight-pass-data">
                              <p className="mb-2">
                                Passengers
                                </p>
                              <div className="d-flex justify-content-between align-items-center margin-top15">
                                <div
                                  className="flight-img-card"
                                  onClick={(e) =>
                                    this.handlePassengerCount(i, "minus")
                                  }
                                >
                                  <img src={FlightMinus} alt="FlightMinus" />
                                </div>
                                <label>{el.no_of_passengers}</label>
                                <div
                                  className="flight-img-card"
                                  onClick={(e) =>
                                    this.handlePassengerCount(i, "plush")
                                  }
                                >
                                  <img src={FlightPlush} alt="FlightPlush" />
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col lg={3} md={3} className='co2e-mobile-ns co2e-flight-distance-mobile-ns co2e-desktop-ns'>
                            <p className="busoness-offset-flight-bydis-label-marginbottm">
                              Co2e
                              </p>
                            <div className="margin-top15">
                              <p>
                                {el.total_impact
                                  ? el.total_impact + "t"
                                  : 0 + "t"}
                              </p>
                            </div>
                          </Col>
                          <Col lg={2} md={2} />

                          <Col lg={4} md={4} className='return-flight-mobile-ns'>
                            <p className="mb-2">Return Flight</p>
                            <Checkbox
                              checked={el.return_flight === "Yes" ? true : false}
                              onChange={(data) =>
                                this.handleReturnFlight(i, data)
                              }
                              className="mt-2"
                            />

                          </Col>
                          <Col lg={6} md={6}>
                            <p className="mb-2">
                              Class
                              </p>
                            <Form.Item
                              name="class_type"
                            >
                              <Select
                                showSearch
                                placeholder="Select"
                                size="large"
                                allowClear
                                onChange={this.handleAvgFlightTimeChange.bind(
                                  this,
                                  i,
                                  "class_type"
                                )}
                              >
                                {TravelClassList.map(
                                  (travelClass: any, i: any) => (
                                    <Option
                                      value={travelClass.name.toLowerCase()}
                                      key={i}
                                    >
                                      {travelClass.value}
                                    </Option>
                                  )
                                )}
                              </Select>
                            </Form.Item>
                          </Col>

                        </Row>
                      ))}
                      <Row>
                        <Col span={23}>
                          <div
                            className={
                              this.state.flightData?.length === 10
                                ? "d-flex align-items-center webGreenColor disabed-click mt-4"
                                : "d-flex align-items-center webGreenColor mt-4"
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
                        </Col>
                      </Row>
                      <hr />
                      <Row style={{ justifyContent: "center" }}>
                        <Col lg={12} md={12} />
                        <Col lg={12} md={12}>
                          <Button
                            className={btnDisabled ? "disabed-click carbon-offset-btn" : "carbon-offset-btn"}
                            size="large"
                            htmlType="submit"



                            disabled={isMobile ? false : btnDisabled}
                            onClick={() => {
                              if (isMobile) {
                                this.flightOrderSummaryData()
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
              />
            ) : (
              <></>
            )}
            <BusinessOffsetDetail
              offsetType="onetime"
              offsetName="Flight"
              //   note="You can enter distance based on the sum of all flights that your employees and
              // You take and calculate the flight footprint for your business."
              bannerClimateTitle="Climate change is wrecking the living experience for people around the world."
              bannerClimateSubTitle="They are looking for organizations that care."
              sideBannerHead="Do environmentally friendly business operations matter to you?Would you go the extra mile to give the world more than you take from it?"
              sideBannerLists={sideBannerLists}
              calculateCarbonHead="Calculate Your Footprint"
              calculateCarbonSubhead="Our approach to calcule the carbon footprint of a"
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

export default OffsetOneTimeFlightByDistance as React.ComponentType<any>;
// Customizable Area End
