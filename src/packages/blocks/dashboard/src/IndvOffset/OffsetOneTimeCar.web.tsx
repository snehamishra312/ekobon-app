import React from "react";
// Customizable Area Start
import OffsetOneTimeCarController, {
  Props,
} from "./OffsetOneTimeCarController.web";
import { Row, Col, Form, Input, Button, Radio, Select } from "antd";
import IndividualOffset from "./IndividualOffset.web";
import OneTimeCard from "./OneTimeCard.web";
import OneTimeMobileCard from "./OneTimeMobileCard.web";
import OrderSummary from "./OrderSummary.web";
import { TravelCityList } from "../TravelCityList";
import { VehicleTypeList } from "../VehicleTypeList";
import { FuelTypeList } from "../FuelTypeList";
import { PowerSourceList } from "../PowerSourceList";
import IndividualOffsetDetails from "./IndividualOffsetDetails.web";
import { deviceMode, getHtmlElementById } from "../../../../components/src/CommonUtils";
import { constants } from "../../../../components/src/types";

const { Option } = Select;
// Customizable Area End
class OffsetOneTimeCar extends OffsetOneTimeCarController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  renderHeading = () => {
    const {
      CALCULATE_FOOTPRINT,
      EKOBON_APPROACH1,
      EKOBON_APPROACH2,
      EKOBON_APPROACH2_WEB,
      OFFSET_FOOTPRINT_CAR
    } = constants.IndividualOffsetDetails;

    const {
      selectedTrip,
      frequencyPerYear,
      distance,
      selectedFuelType,
      orderSummaryData,
      loader,
      CheckViaValue,
      CheckToValue,
      CheckFromValue,
      clickShow,
    } = this.state;


    return (
      <Col lg={24} md={12} xs={24} sm={24}>
        <div className="our-approach-main-sec-text-fliht offset_details_head">
          <p>{OFFSET_FOOTPRINT_CAR?.toUpperCase()}</p>
        </div>
      </Col>
    );
  };

  renderHeading2 = () => {
    const {
      CALCULATE_FOOTPRINT,
      EKOBON_APPROACH1,
      EKOBON_APPROACH2,
      EKOBON_APPROACH2_WEB,
      OFFSET_FOOTPRINT_CAR
    } = constants.IndividualOffsetDetails;

    const {
      selectedTrip,
      frequencyPerYear,
      distance,
      selectedFuelType,
      orderSummaryData,
      loader,
      CheckViaValue,
      CheckToValue,
      CheckFromValue,
      clickShow,
    } = this.state;


    return (
      <Col lg={24} md={12} xs={24} sm={24}>
        <div className="our-approach-main-sec-head offset_details">
          <p className="our-approach-sec-desc our-approach-sec-desc-padding-ns ct_accordian_tab ct_margin_top_25 ct_margin_right1_0" onClick={this.handleClickFunction}>
            <span>
              {EKOBON_APPROACH1}
            </span>
            <button><i className={clickShow == false ? "fa fa-chevron-down " : "fa fa-chevron-up"} aria-hidden="true"></i></button>
          </p>
        </div>
      </Col>
    );
  };

  renderFlightToolUses = () => {
    const {
      selectedTrip,
      frequencyPerYear,
      distance,
      selectedFuelType,
      orderSummaryData,
      loader,
      CheckViaValue,
      CheckToValue,
      CheckFromValue,
      clickShow,
    } = this.state;

    return (
      <div
        className="about-hate-climate-chng-sec Tool_user"
        style={{ padding: "0", marginTop: "90px" }}
      >
        <div className="container">
          <Row gutter={48} className={clickShow == false ? "ct_para_cnt align-items-start" : "ct_accordion_item align-items-start"}>
            {constants?.IndividualOffsetCar?.map((e: any, i: any) => {
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
      selectedTrip,
      frequencyPerYear,
      distance,
      selectedFuelType,
      orderSummaryData,
      loader,
      CheckViaValue,
      CheckToValue,
      CheckFromValue,
    } = this.state;
    const isMobile = deviceMode.isMobile;

    return (
      <div className="one-time-offset-sec ">
        <IndividualOffset />
        <Row gutter={16} className="remove-overflow-x align-items-start  py-3 px-2">
          <Col lg={16} md={16}>
            <div className=" px-2 " >
              <div className="offset-top-bg">
                {isMobile ? <OneTimeMobileCard /> : <></>}
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/xt4quutlmsu477lnpd0nbwwufarx/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Car_BG.jpg%22%3B%20filename%2A%3DUTF-8%27%27Car_BG.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </div>
              {!isMobile ? <OneTimeCard /> : <></>}<br />
              <div>
                <Row gutter={16}>
                  {window.location.pathname ===
                    "/individual/offset-onetime-car" && (
                      <>
                        {this.renderHeading()}
                      </>
                    )}
                </Row>
              </div><br />
              <br />
              <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={this.handleFinish}
              >
                <div className="carbon-offset-onetime-life-sec carbon-offset-bg-img mt-0 py-3">
                  <div className="offset-onetime-car-sec">
                    <div className="offset-onetime-car-sec-head py-3 px-4">
                      <p>Car</p>
                    </div>
                    <div className="offset-onetime-car-bottom-sec py-3 px-4">
                      <Radio.Group
                        onChange={this.handleTripChange}
                        value={selectedTrip}
                      >
                        <Radio value={"one_way"}>One Way</Radio>
                        <Radio value={"return"}>Return</Radio>
                        <Radio value={"frequency"}>Frequency Trip</Radio>
                      </Radio.Group>
                      <div className="mt-4">
                        {/* Only avaible when Frequency Trip is selected*/}
                        {selectedTrip === "frequency" && (
                          <>
                            <Row className="mb-2">
                              <p>Frequency (Per year)</p>
                            </Row>
                            <Form.Item
                              name="frequencyPerYear"
                              rules={[
                                {
                                  required: true,
                                  message: "Enter Frequency(Per year)",
                                },
                              ]}
                            >
                              <Input
                                size="large"
                                type="number"
                                min="0"
                                max="9999"
                                value={frequencyPerYear}
                                onChange={(e) => this.handleFrequencyChange(e)}
                              />
                            </Form.Item>
                          </>
                        )}
                      </div>
                      <div className="mt-3">
                        <Row gutter={16} className="position-relative">
                          <Col lg={12} md={12}>
                            <div className="offset-onetime-car-bottom-sec-form-border px-3 py-3">
                              <Row className="mb-2">
                                <p>From</p>
                              </Row>
                              <Form.Item
                                name="from"
                                rules={[
                                  {
                                    ...(!distance && { required: true }),
                                    message: "Select From",
                                  },
                                ]}
                              >
                                <Select
                                  showSearch
                                  placeholder="Select Place or City"
                                  size="large"
                                  allowClear
                                  onChange={this.handleFromChange}
                                >
                                  {TravelCityList.sort((a, b) =>
                                    a.city.localeCompare(b.city, "es", {
                                      sensitivity: "base",
                                    })
                                  ).map((city: any, f: any) => (
                                    <Option value={city.city} key={f}>
                                      {city.city}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>

                              <Row className="mb-2">
                                <p>Via (Optional)</p>
                              </Row>
                              <Form.Item name="via">
                                <Select
                                  showSearch
                                  placeholder="Optional"
                                  size="large"
                                  allowClear
                                  onChange={this.handleViaChange}
                                >
                                  {TravelCityList.sort((a, b) =>
                                    a.city.localeCompare(b.city, "es", {
                                      sensitivity: "base",
                                    })
                                  ).map((city: any, v: any) => (
                                    <Option value={city.city} key={v}>
                                      {city.city}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>

                              <Row className="mb-2">
                                <p>To</p>
                              </Row>
                              <Form.Item
                                name="to"
                                rules={[
                                  {
                                    ...(!distance && { required: true }),
                                    message: "Select To",
                                  },
                                ]}
                              >
                                <Select
                                  showSearch
                                  placeholder="Select Place or City"
                                  size="large"
                                  allowClear
                                  onChange={this.handleToChange}
                                >
                                  {TravelCityList.sort((a, b) =>
                                    a.city.localeCompare(b.city, "es", {
                                      sensitivity: "base",
                                    })
                                  ).map((city: any, t: any) => (
                                    <Option value={city.city} key={t}>
                                      {city.city}
                                    </Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            </div>
                          </Col>
                          <div className="offset-onetime-car-bottom-sec-or">
                            <p>OR</p>
                          </div>
                          <Col lg={12} md={12}>
                            <div className="offset-onetime-car-bottom-sec2-form-border px-3 py-3 d-flex align-items-center ">
                              <div className="flex-fill">
                                <Row className="mb-2">
                                  <p>Distance (in km)</p>
                                </Row>
                                <Form.Item name="distance">
                                  <text style={{ display: "none" }}>
                                    {distance}
                                  </text>
                                  <Input
                                    size="large"
                                    type="number"
                                    min="0"
                                    value={distance}
                                    onChange={(e) => this.handleDistance(e)}
                                  />
                                </Form.Item>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="offset-car-vehicle-detail pt-4 pb-2">
                        <div className="offset-car-vehicle-detail-head mb-2">
                          <p>Vehicle Details</p>
                        </div>

                        <Row gutter={16} className="">
                          <Col
                            lg={selectedFuelType === "electric" ? 8 : 12}
                            md={selectedFuelType === "electric" ? 8 : 12}
                          >
                            <Row className="mb-2">
                              <p>Vehicle Type</p>
                            </Row>
                            <Form.Item
                              name="vehicleType"
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
                                onChange={this.handleVehicleTypeChange}
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
                            lg={selectedFuelType === "electric" ? 8 : 12}
                            md={selectedFuelType === "electric" ? 8 : 12}
                          >
                            <Row className="mb-2">
                              <p>Fuel Type</p>
                            </Row>
                            <Form.Item
                              name="fuelType"
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
                                onChange={this.handleFuelTypeChange}
                              >
                                {FuelTypeList.map((type: any, f: any) => (
                                  <Option value={type.value} key={f}>
                                    {type.name}
                                  </Option>
                                ))}
                              </Select>
                            </Form.Item>
                          </Col>
                          {selectedFuelType === "electric" && (
                            <Col lg={8} md={8}>
                              <Row className="mb-2">
                                <p>Power Source</p>
                              </Row>
                              <Form.Item
                                name="powerSource"
                                rules={[
                                  {
                                    required: true,
                                    message: "Select Power Source Type",
                                  },
                                ]}
                              >
                                <Select
                                  showSearch
                                  placeholder="Select"
                                  size="large"
                                  allowClear
                                  onChange={this.handlePowerSourceChange}
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
                        </Row>
                      </div>

                      <Row
                        className={
                          isMobile
                            ? "offset-car-vehicle-detail-btn justify-content-center pt-3 ct_padding_btm_50"
                            : "offset-car-vehicle-detail-btn justify-content-end pt-3"
                        }
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
                            {distance < 0 && (
                              <div className="select-validation">
                                Please enter valid distance
                              </div>
                            )}
                            {frequencyPerYear < 0 && (
                              <div className="select-validation">
                                Please enter valid Frequency
                              </div>
                            )}
                          </>
                        </Col>
                        <Col lg={12} md={12}>
                          <Button
                            className="carbon-offset-btn"
                            size="large"
                            htmlType="submit"
                            // disabled={loader}
                            onClick={() => {
                              if (isMobile) {
                                getHtmlElementById("order-summary-mobile")
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
              </Form>
            </div>
            {isMobile ? (
              <>
                <OrderSummary
                  id={""}
                  history={""}
                  location={""}
                  orderSummaryData={orderSummaryData}
                /><br />
                <div>
                  <Row gutter={16}>
                    {window.location.pathname ===
                      "/individual/offset-onetime-car" && (
                        <>
                          {this.renderHeading2()}
                          {this.renderFlightToolUses()}
                        </>
                      )}
                  </Row>
                </div><br />
              </>
            ) : (
              <></>
            )}
            <IndividualOffsetDetails
              id={""}
              history={""}
              location={""}
              heading={"Car"}
              rightData={[
                "Use modern fuel-efficient cars. ",
                "Driving too fast will burn more fuel and thus cause more carbon emissions, drive efficiently.",
                "Modern vehicles do not need to be warmed up, turn them on only when you need to drive.",
                "Opt for carpooling whenever possible.",
              ]}
              leftData={[
                "Do not skip servicing and periodic tune-ups of your car to maintain fuel efficiency.",
                "It is a good idea to switch to electric or hybrid cars. This will help you reduce your expenditure apart from your carbon footprint.",
                "Turn off the air conditioning when you can.",
              ]}
              toolUses={[
                {
                  id: 1,
                  name:
                    "The tool starts by calculating the distance between the destination and the starting point to compute the total fuel used during the journey",
                },
                {
                  id: 2,
                  name:
                    "If the car journey is regular like a daily commute, the tool can compute the footprint over a period of time instead of a full journey.",
                },
                {
                  id: 3,
                  name:
                    "The size and make of vehicle and fuel type are crucial factors that help arrive at the correct fuel usage estimate. In the case of electric cars, the power source for the battery is taken into account to estimate the emission correctly.",
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

export default OffsetOneTimeCar as React.ComponentType<any>;
// Customizable Area End
