import React from "react";
import { Col, Row, Select, Form, Input, Button } from "antd";
import IndividualOffset from "./IndividualOffset.web";
// Customizable Area Start
import SubscriptionFlightController, {
  Props,
} from "./SubscriptionFlightController.web";
import SubscriptionCard from "./SubscriptionCard.web";
import OrderSummary from "./BusinessOrderSummary.web";
import { FlightPlush, FlightMinus, removeCircle } from "./assets";
import { VIDEO, AIRPLANE, JET, TREE, WINDMILL, BUILDING } from "./assets";
import BusinessOffsetDetail from "./BusinessOffsetDetail.web";
import { deviceMode, getHtmlElementById } from '../../../../../components/src/CommonUtils';
import SubscriptionMobileCard from "./SubsciptionCardMobile.web";

const { Option } = Select;
// Customizable Area End

class SubscriptionFlight extends SubscriptionFlightController {
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
      btnDisabled,
      finalTotalImpact,
    } = this.state;

    const sideBannerLists = [
      "It is time to tell your customers that you care.It is time to make a difference. Act now, offset your carbon footprint once, or commit to doing it regularly. One time offsetting or subscription plans? The choice is yours. The world will benefit both ways.",
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
              { isMobile ? 
                <SubscriptionMobileCard/> : <></> }
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/t7il6xt6mmlvjixhi8k1e78blgm7/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Airplane_BG.jpg%22%3B%20filename%2A%3DUTF-8%27%27Airplane_BG.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </div>
              { !isMobile ? 
                <SubscriptionCard/> : <><>
                <Row gutter={16} style={{ paddingTop: "10px" }}>
                  <Col lg={24}>
                    <div className="title-business-head business-offset-title">
                      <h4>CALCULATE YOUR FOOTPRINT</h4>
                      <h3>
                        OUR APPROACH TO CALCULATE THE CARBON
                        FOOTPRINT OF A <span>FLIGHT</span>
                      </h3>
                    </div>
                  </Col>
                </Row>
                <div
                  className="about-hate-climate-chng-sec-flight Tool_user"
                  style={{ padding: "0" }}
                >
                  <div className="container">
                    <Row className="flight-text-center">
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
              </></> }
              <div className="carbon-offset-flight-sec">
                <div className="carbon-offset-onetime-life-sec py-3">
                  <div className="offset-onetime-car-sec">
                    <div className="offset-onetime-car-sec-head py-3 px-4 d-flex justify-content-between">
                      <div>
                        <p>Flight</p>
                      </div>
                    </div>
                    <div className="offset-onetime-car-bottom-sec py-3 px-4 ct_padd_btm_65">
                      {this.state.flightData?.map((el: any, i: any) => (
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
                          <Col lg={8} md={8} className="flight-card-block">
                            <p className="mb-2">Average Flight time</p>
                            <Form.Item
                              name="product_name"
                              rules={[
                                {
                                  required: true,
                                  message: "Select Average Flight time",
                                },
                              ]}
                            >
                              <Select
                                showSearch
                                placeholder="Select"
                                size="large"
                                allowClear
                                onChange={this.handleFlightTimeChange.bind(
                                  this,
                                  i,
                                  "product_name"
                                )}
                              >
                                {flightListData?.map((data: any, i: any) => (
                                  <Option value={data.id} key={i}>
                                    {data.attributes.name}
                                  </Option>
                                ))}
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col lg={7} md={7}>
                            <p className="mb-2">Number of Flights</p>
                            <div className="offset-input-custm">
                              <Form.Item
                                name="no_of_flight"
                                rules={[
                                  {
                                    required: true,
                                    message: "Enter Number of Flight",
                                  },
                                ]}
                              >
                                <text style={{ display: "none" }}>
                                  {el.no_of_flights}
                                </text>
                                <Input
                                  size="large"
                                  type="number"
                                  value={el.no_of_flights || ""}
                                  min="0"
                                  max="4"
                                  placeholder="Number of Flights"
                                  onChange={this.handleFlightNoInputChange.bind(
                                    this,
                                    i,
                                    "flightNo"
                                  )}
                                />
                              </Form.Item>
                            </div>
                          </Col>

                          <Col lg={6} md={6} className='input-units-mobile-ns'>
                            <div className="flight-pass-data">
                              <p className="mb-2">Passengers</p>
                              <div className="offset-input-custm">
                                <Form.Item name="no_of_pessangers">
                                  <text className="hidentext">
                                    {el.no_of_pessangers}
                                  </text>
                                  <Input
                                    size="large"
                                    type="number"
                                    value={el.no_of_pessangers || ""}
                                    placeholder="Travellers"
                                    max={5000}
                                    onChange={this.handleFlightNoInputChange.bind(
                                      this,
                                      i,
                                      "Passengers"
                                    )}
                                  />
                                </Form.Item>
                              </div>
                              {/* <div className="d-flex justify-content-between align-items-center">
                                <div
                                  className="flight-img-card"
                                  onClick={(e) =>
                                    this.peoplePassengerCount(i, "minus")
                                  }
                                >
                                  <img src={FlightMinus} alt="FlightMinus" />
                                </div>
                                <label>{el.no_of_pessangers}</label>
                                <div
                                  className="flight-img-card"
                                  onClick={(e) =>
                                    this.peoplePassengerCount(i, "plush")
                                  }
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
                          this.state.flightData.length === 10
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
                  </div>
                </div>
              </div>
            </div>
            { isMobile ?
            <>
            <OrderSummary
              id={""}
              history={""}
              location={""}
              orderSummaryData={orderSummaryData}
              finalTotalImpact={finalTotalImpact}
            /> </>: <></> }
            <BusinessOffsetDetail
              offsetType="subscription"
              subscriptionImage={
                "https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/vsqi6sn6wbju3omp2taocgrapz99/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22airplane_subscription.jpg%22%3B%20filename%2A%3DUTF-8%27%27airplane_subscription.jpg&response-content-type=image%2Fjpeg"
              }
              subscriptionTitle="How do subscriptions for offsetting flights footprint work?"
              subscriptionPera="The average footprint data is used to calculate carbon footprint based on flight length(short haul or long haul etc) and no. of travelers. The package is renewed based on the frequency of subscription and the requisite updates are made on the dashboard. You have the option to change the project you want to invest in and the investment for every billing cycle will be directed to the latest set of projects selected."
              offsetName="FLIGHT"
              note="You can enter distance based on the sum of all flights that your employees and
              You take and calculate the flight footprint for your business."
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
            { !isMobile ?
            <OrderSummary
              id={""}
              history={""}
              location={""}
              orderSummaryData={orderSummaryData}
              finalTotalImpact={finalTotalImpact}
            /> : <></> }
          </Col>
        </Row>
      </div>
    );
  }
}

export default SubscriptionFlight as React.ComponentType<any>;
// Customizable Area End
