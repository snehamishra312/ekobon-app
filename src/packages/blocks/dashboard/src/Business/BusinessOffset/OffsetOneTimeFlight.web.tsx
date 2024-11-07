import React from "react";
// Customizable Area Start
import OffsetOneTimeFlightController, {
  Props,
} from "./OffsetOneTimeFlightController.web";
import { Row, Col, Form, Button, Checkbox, Radio, Select, Input } from "antd";
import IndividualOffset from "./IndividualOffset.web";
import OneTimeCard from "./OneTimeCard.web";
import OrderSummary from "./BusinessOrderSummary.web";
import { FlightRightLeft, FlightPlush, FlightMinus } from "./assets";
import { TopTravelCityList, TravelCityList } from "../../TravelCityList";
import { TravelClassList } from "../../TravelClassList";
import { NavLink } from "react-router-dom";
import "./BusinessOffset.css";
import { VIDEO, AIRPLANE, JET, TREE, WINDMILL, BUILDING } from "./assets";
import BusinessOffsetDetail from "./BusinessOffsetDetail.web";
import { constants } from "../../../../../components/src/types";
import {
  deviceMode,
  getHtmlElementById,
} from "../../../../../components/src/CommonUtils";
import OneTimeMobileCard from "./OneTimeCardMobile.web";

const { Option } = Select;
// Customizable Area End

class OffsetOneTimeFlight extends OffsetOneTimeFlightController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const {
      SIDE_BANNER_LIST,
      FOOT_PRINT_LIST1,
      FOOT_PRINT_LIST2,
      FOOT_PRINT_LIST3,
      FOOT_PRINT_LIST4,
      FOOTER_CAROUSEL1,
      FOOTER_CAROUSEL2,
      FOOTER_CAROUSEL3,
    } = constants.OffsetOneTimeFlightBusiness;
    const {
      oneWayStatus,
      passengers,
      accountNoxEmissionsStatus,
      orderSummaryData,
      loader,
      CheckViaValue,
      CheckToValue,
      CheckFromValue,
      no_of_Journey,
      clickShow
    } = this.state;

    const location = window.location.pathname;
    const checkDistanceLocation =
      location == "/business/offset-flight-by-distance";
    const checkFromLocation = location == "/business/offset-flight";

    const sideBannerLists = [SIDE_BANNER_LIST];
    const footprintLists = [
      FOOT_PRINT_LIST1,
      FOOT_PRINT_LIST2,
      FOOT_PRINT_LIST3,
      FOOT_PRINT_LIST4,
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
        title: FOOTER_CAROUSEL1,
      },
      {
        icon: WINDMILL,
        title: FOOTER_CAROUSEL2,
      },
      {
        icon: BUILDING,
        title: FOOTER_CAROUSEL3,
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
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/t7il6xt6mmlvjixhi8k1e78blgm7/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Airplane_BG.jpg%22%3B%20filename%2A%3DUTF-8%27%27Airplane_BG.jpg&response-content-type=image%2Fjpeg"
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
                <Form
                  name="basic"
                  layout="vertical"
                  initialValues={{ remember: true }}
                  onFinish={this.handleFinish}
                >
                  <div className="carbon-offset-onetime-life-sec carbon-offset-onetime-life-business py-3">
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
                                  } `}
                              >
                                From / To
                              </NavLink>
                            </li>
                            <li className="business-offset-flight-tab">
                              <NavLink
                                // exact
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
                        <Radio.Group
                          className="offset-flight-radio indi-offset-flight-radio"
                          onChange={(e) =>
                            this.handleOneWayStatusChange(e, "radio")
                          }
                          value={oneWayStatus}
                        >
                          <Radio value={false}>One Way</Radio>
                          <Radio value={true}>Return Flight</Radio>
                        </Radio.Group>
                        <div className="flight-card-content">
                          <Row gutter={16}>
                            <Col lg={7} md={7} className="flight-card-block">
                              <p>From</p>
                              <Form.Item
                                name="from"
                                rules={[
                                  { required: true, message: "Select From" },
                                ]}
                              >
                                <Select
                                  showSearch
                                  placeholder="Select Airport"
                                  size="large"
                                  allowClear
                                  onChange={this.handleFromChange}
                                  onSelect={this.handleSelectFrom}
                                  filterOption={(input: any, option: any) =>
                                    option.props.children[0]
                                      .toLowerCase()
                                      .indexOf(input.toLowerCase()) >= 0 ||
                                    option.props.value
                                      .toLowerCase()
                                      .indexOf(input.toLowerCase()) >= 0
                                  }
                                >
                                  {TopTravelCityList.map((city: any) => (
                                    <Option
                                      value={city.city}
                                      key={city.id}
                                      title={`${city.name} (${city.city})`}
                                    >
                                      {`${city.city}, ${city.name} (${city.code
                                        })`}
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
                                      {`${city.city}, ${city.name} (${city.code
                                        })`}
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
                              <p>Via (Optional)</p>
                              <Form.Item name="via">
                                <Select
                                  showSearch
                                  placeholder="Select Airport"
                                  size="large"
                                  allowClear
                                  onChange={this.handleViaChange}
                                  onSelect={this.handleSelectVia}
                                  filterOption={(input: any, option: any) =>
                                    option.props.children[0]
                                      .toLowerCase()
                                      .indexOf(input.toLowerCase()) >= 0 ||
                                    option.props.value
                                      .toLowerCase()
                                      .indexOf(input.toLowerCase()) >= 0
                                  }
                                >
                                  {TopTravelCityList.map((city: any) => (
                                    <Option
                                      value={city.city}
                                      key={city.id}
                                      title={`${city.name} (${city.city})`}
                                    >
                                      {`${city.city}, ${city.name} (${city.code
                                        })`}
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
                                      {`${city.city}, ${city.name} (${city.code
                                        })`}
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
                                rules={[
                                  { required: true, message: "Select To" },
                                ]}
                              >
                                <Select
                                  showSearch
                                  placeholder="Select Airport"
                                  size="large"
                                  allowClear
                                  onChange={this.handleToChange}
                                  onSelect={this.handleSelectTo}
                                  filterOption={(input: any, option: any) =>
                                    option.props.children[0]
                                      .toLowerCase()
                                      .indexOf(input.toLowerCase()) >= 0 ||
                                    option.props.value
                                      .toLowerCase()
                                      .indexOf(input.toLowerCase()) >= 0
                                  }
                                >
                                  {TopTravelCityList.map((city: any) => (
                                    <Option
                                      value={city.city}
                                      key={city.id}
                                      title={`${city.name} (${city.city})`}
                                    >
                                      {`${city.city}, ${city.name} (${city.code
                                        })`}
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
                                      {`${city.city}, ${city.name} (${city.code
                                        })`}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row gutter={16}>
                            <Col lg={7} md={7}>
                              <p>Class</p>
                              <Form.Item
                                name="class"
                                rules={[
                                  { required: true, message: "Select Class" },
                                ]}
                              >
                                <Select
                                  showSearch
                                  placeholder="Select Class"
                                  size="large"
                                  allowClear
                                  onChange={this.handleTravelClassChange}
                                >
                                  {TravelClassList.map(
                                    (travelClass: any, i: any) => (
                                      <Option value={travelClass.name} key={i}>
                                        {travelClass.value}
                                      </Option>
                                    )
                                  )}
                                </Select>
                              </Form.Item>
                            </Col>
                            <Col lg={8} md={8}>
                              <p>No of Journeys</p>
                              <div className="offset-input-custm">
                                <Form.Item name="noOfJourneys">
                                  <text className="hidentext">
                                    {no_of_Journey}
                                  </text>
                                  <Input
                                    size="large"
                                    type="number"
                                    placeholder="Optional"
                                    min="0"
                                    max="100"
                                    value={no_of_Journey}
                                    onChange={(e) =>
                                      this.handleOneWayStatusChange(e, "input")
                                    }
                                  />
                                </Form.Item>
                              </div>
                            </Col>
                            <Col lg={8} md={8} className="d-flex-center">
                              <div
                                className="flight-pass-data mt-1"
                                style={{ paddingLeft: "30px" }}
                              >
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
                                Take into account NOx emissions and other
                                greenhouse gases
                              </Checkbox>
                            </Form.Item>
                          </Row>
                          <hr />
                          <Row
                            className="flight-text-center"
                            style={{ justifyContent: "center" }}
                          >
                            <Col lg={12} md={12}>
                              <>
                                {CheckFromValue && (
                                  <div className="select-validation">
                                    Please select another From value
                                  </div>
                                )}
                                {CheckViaValue && (
                                  <div className="select-validation">
                                    Please select another Via value
                                  </div>
                                )}
                                {CheckToValue && (
                                  <div className="select-validation">
                                    Please select another To value
                                  </div>
                                )}
                                {no_of_Journey < 0 && (
                                  <div className="select-validation">
                                    Please enter valid no of journey
                                  </div>
                                )}
                              </>
                            </Col>
                            <Col lg={12} md={12}>
                              <Button
                                className={
                                  loader
                                    ? "disabed-click carbon-offset-btn"
                                    : "carbon-offset-btn"
                                }
                                size="large"
                                htmlType="submit"
                                disabled={isMobile ? false : loader}
                                onClick={() => {
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
                </Form>
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
              offsetName="FLIGHT"
              //   note="You can enter distance based on the sum of all flights that your employees and
              // You take and calculate the flight footprint for your business."
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

export default OffsetOneTimeFlight as React.ComponentType<any>;
// Customizable Area End
