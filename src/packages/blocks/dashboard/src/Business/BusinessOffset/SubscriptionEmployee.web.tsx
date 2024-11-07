import React from "react";
import { Col, Row, Select, Form, Input, Button } from "antd";
import IndividualOffset from "./IndividualOffset.web";
// Customizable Area Start
import SubscriptionEmployeeController, {
  Props,
} from "./SubscriptionEmployeeController.web";
import SubscriptionCard from "./SubscriptionCard.web";
import OrderSummary from "./BusinessOrderSummary.web";
import { FlightPlush, removeCircle } from "./assets";
import { CountryListData } from "../../CountryList";
import { VIDEO, EMAIL, GIFT, TREE, WINDMILL, BUILDING } from "./assets";
import BusinessOffsetDetail from "./BusinessOffsetDetail.web";
import { deviceMode, getHtmlElementById } from "../../../../../components/src/CommonUtils";
import SubscriptionMobileCard from "./SubsciptionCardMobile.web";

const { Option } = Select;
// Customizable Area End

class SubscriptionEmployee extends SubscriptionEmployeeController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { orderSummaryData, loader, btnDisabled, finalTotalImpact } =
      this.state;

    const sideBannerLists = [
      "It is time to tell your customers that you care.It is time to make a difference. Act now, offset your carbon footprint once, or commit to doing it regularly. One time offsetting or subscription plans? The choice is yours. The world will benefit both ways.",
    ];
    const footprintLists = [
      "Have you ever wondered how much carbon you are emitting and how much you need to offset? Ekobon makes it easy for you. Just select the location where your Office is located and input the no. of employees  to know how much emissions you are putting into the atmosphere.",
      "Package types- Conscious, Committed, Changemaker. As a conscious business, your offset all of your annual average carbon emissions. Committed businesses offset two times as much and changemaker walk the extra mile to offset 4 times their annual average.",
      "The cost of offsetting is based on the purchase price of carbon credits. This is a combination of equally weighted climate projects across renewable, energy efficiency, forestry, and other domains.Once you complete the purchase, you can choose a project you are passionate about.",
    ];
    const carbonReductionSlider = [
      {
        icon: VIDEO,
        head: "Encourage Online Events",
        title: "Host more online events",
      },
      {
        icon: EMAIL,
        head: "Stick To emails",
        title: "Avoid distributing too many brochures and pamphlets",
      },
      {
        icon: GIFT,
        head: "Give Gift Cards",
        title: "Avoid unnecessary giveaways.Give gift cards if you must",
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
            <div>
              <div className="offset-top-bg">
                {isMobile ? <SubscriptionMobileCard /> : <></>}
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/f8v38iayc5xerdg3cgg9xhc238po/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Employee_BG.jpg%22%3B%20filename%2A%3DUTF-8%27%27Employee_BG.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </div>
              {!isMobile ? <SubscriptionCard /> : <><>
                    <Row gutter={16} style={{ paddingTop: "10px" }}>
                      <Col lg={24}>
                        <div className="title-business-head business-offset-title">
                          <h4>CALCULATE YOUR FOOTPRINT</h4>
                          <h3>
                            OUR APPROACH TO CALCULATE THE CARBON
                            FOOTPRINT OF A <span>EMPLOYEE</span>
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
                  </></>}
              <div className="carbon-offset-flight-sec">
                <div className="carbon-offset-onetime-life-sec py-3">
                  <div className="offset-onetime-car-sec">
                    <div className="offset-onetime-car-sec-head py-3 px-4 d-flex justify-content-between">
                      <div>
                        <p>Employee</p>
                      </div>
                    </div>
                    <div className="offset-onetime-car-bottom-sec py-3 px-4 ct_padd_btm_65">
                      {this.state.employeeData.map((el: any, i: any) => (
                        <Row gutter={32} key={i}>
                          {i === 1 ? (
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

                          <Col lg={10} md={10}>
                            <p className="mb-2">Country</p>
                            <Form.Item
                              name="country"
                              rules={[
                                { required: true, message: "Select Country" },
                              ]}
                            >
                              <text style={{ display: "none" }}>
                                {el.country}
                              </text>
                              <Select
                                showSearch
                                // defaultValue="Select"
                                size="large"
                                allowClear
                                value={el.country}
                                disabled
                                onChange={this.handleContrySelectChange.bind(
                                  this,
                                  i,
                                  "country"
                                )}
                              >
                                {CountryListData.map((data: any) => (
                                  <Option
                                    value={el.vehicleType || data.CountryName}
                                    key={data.CountryName}
                                  >
                                    {data.CountryName}
                                  </Option>
                                ))}
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col lg={10} md={10}>
                            <p className="mb-2">Employees</p>

                            <div className="offset-input-custm">
                              <Form.Item
                                name="no_of_employee"
                                rules={[
                                  {
                                    required: true,
                                    message: "Enter Employee",
                                  },
                                ]}
                              >
                                <text style={{ display: "none" }}>
                                  {el.no_of_employee}
                                </text>

                                <Input
                                  size="large"
                                  type="number"
                                  min="0"
                                  max="100"
                                  placeholder="Enter Employee"
                                  value={el.no_of_employee || ""}
                                  onChange={this.handleEmployeeInputChange.bind(
                                    this,
                                    i
                                  )}
                                />
                              </Form.Item>
                            </div>
                          </Col>

                      {
                        el.no_of_employee?    <Col lg={2} md={2} className='co2e-desktop-ns'>
                        <p className="mb-3">Co2e</p>
                        <p>
                          <b>
                            {el.total_impact
                              ? el.total_impact + "t"
                              : 0 + "t"}
                          </b>
                        </p>
                      </Col>:null
                      }
                        </Row>
                      ))}
                      <div
                        className={
                          this.state.employeeData.length === 2
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
                            disabled={
                            isMobile?false:  loader ||
                            this.state.employeeData?.map(
                              (e: any) => e.no_of_employee <= 0
                            )[0]
                            }
                         
                            
                            onClick={() => {
                              this.employeeOrderSummaryData()
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
                "https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/zuu3prdta7dvcabb4ukl9725hldt/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Employee-Subscription-img.jpg%22%3B%20filename%2A%3DUTF-8%27%27Employee-Subscription-img.jpg&response-content-type=image%2Fjpeg"
              }
              subscriptionTitle="How do subscriptions for offsetting employees footprint work?"
              subscriptionPera="Our tool accounts for the office location and no. of employees and comes up with a figure for carbon footprint in the selected duration. Every time the billing cycle is renewed, the data is updated on the dashboard and there is an option to change the project you’d like to invest in."
              offsetName="EMPLOYEE"
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

export default SubscriptionEmployee as React.ComponentType<any>;
// Customizable Area End
