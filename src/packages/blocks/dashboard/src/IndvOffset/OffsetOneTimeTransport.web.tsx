import React from "react";
// Customizable Area Start
import OffsetOneTimeTransportController, {
  Props,
} from "./OffsetOneTimeTransportController.web";
import { Row, Col, Form, Input, Button, Radio, Select } from "antd";
import IndividualOffset from "./IndividualOffset.web";
import OneTimeCard from "./OneTimeCard.web";
import OrderSummary from "./OrderSummary.web";
import { Plush, Icon_Close } from "../assets";
import { TravelCityList } from "../TravelCityList";
import { RailwayStationList } from "../RailwayStationList";
import IndividualOffsetDetails from "./IndividualOffsetDetails.web";
import {
  deviceMode,
  getHtmlElementById,
} from "../../../../components/src/CommonUtils";
import OneTimeMobileCard from "./OneTimeMobileCard.web";

const { Option } = Select;
// Customizable Area End

class OffsetOneTimeTransport extends OffsetOneTimeTransportController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const {
      stage,
      selectedTransportTab,
      selectedTrip,
      selectedVia,
      selectedThen,
      frequencyPerYear,
      distance,
      orderSummaryData,
      TransportTrainTypeList,
      TransportBusTypeList,
      TransportTwoWheelerTypeList,
      loader,
      CheckViaValue,
      CheckToValue,
      CheckFromValue,
      selectedType,
    } = this.state;
    const isMobile = deviceMode.isMobile;

    return (
      <div className="one-time-offset-sec">
        <IndividualOffset />
        <Row gutter={16} className="remove-overflow-x  py-3 px-2 align-items-start">
          <Col lg={16} md={16}>
            <div className=" px-2">
              <div className="offset-top-bg">
                {isMobile ? <OneTimeMobileCard /> : <></>}
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/07hwr46fnhh8j5j2g3wydwvfhq0p/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22OtherTransport_BG.jpg%22%3B%20filename%2A%3DUTF-8%27%27OtherTransport_BG.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </div>
              {!isMobile ? <OneTimeCard /> : <></>}{" "}
              <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={this.handleFinish}
              >
                <div className="carbon-offset-onetime-life-sec carbon-offset-bg-img py-3 carbon-offset-bg-img-other-transport">
                  <div className="offset-onetime-car-sec ct_padding_btm_50">
                    <div className="offset-onetime-car-sec-head py-3 px-4 other-transport-header">
                      <p style={{ display: "flex" }}>Other Transport</p>
                      <ul className="other-transport-tab other-transport-tab-ns pl-0">
                        <li
                          onClick={() => this.otherTransportTabHandler("Train")}
                          className={`${selectedTransportTab === "Train" ? "active" : ""
                            }`}
                        >
                          Train
                        </li>
                        <li
                          className={`${selectedTransportTab === "Bus" ? "active" : ""
                            }`}
                          onClick={() => this.otherTransportTabHandler("Bus")}
                        >
                          Bus
                        </li>
                        <li
                          className={`${selectedTransportTab === "TwoWheeler"
                            ? "active"
                            : ""
                            }`}
                          onClick={() =>
                            this.otherTransportTabHandler("TwoWheeler")
                          }
                        >
                          {isMobile ? "Scooter/ Bike" : "Scooter / Motorbike"}
                        </li>
                      </ul>
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
                        <>
                          <Row className="mb-2">
                            <p>Type</p>
                          </Row>
                          <Form.Item
                            name="type"
                            rules={[
                              { required: false, message: "Select Type" },
                            ]}
                          >
                            <text style={{ display: "none" }}>
                              {selectedType}
                            </text>
                            <Select
                              showSearch
                              placeholder={"Select"}
                              value={selectedType}
                              size="large"
                              allowClear
                              onChange={this.handleTypeChange}
                            >
                              {selectedTransportTab === "Train" &&
                                TransportTrainTypeList.map(
                                  (data: any, a: any) => (
                                    <Option value={data.attributes.id} key={a}>
                                      {data.attributes.name}
                                    </Option>
                                  )
                                )}
                              {selectedTransportTab === "Bus" &&
                                TransportBusTypeList.map(
                                  (data: any, b: any) => (
                                    <Option value={data.attributes.id} key={b}>
                                      {data.attributes.name}
                                    </Option>
                                  )
                                )}
                              {selectedTransportTab === "TwoWheeler" &&
                                TransportTwoWheelerTypeList.map(
                                  (data: any, c: any) => (
                                    <Option value={data.attributes.id} key={c}>
                                      {data.attributes.name}
                                    </Option>
                                  )
                                )}
                            </Select>
                            {this.state.selectTypeValidation ? (
                              <text style={{ color: "red" }}>Select Type</text>
                            ) : null}
                          </Form.Item>
                        </>
                        {/* Only Avaible when tab Type is train */}
                        {selectedTrip === "frequency" && (
                          <>
                            <Row className="mb-2">
                              <p>Frequency (Per year)</p>
                            </Row>
                            <Form.Item
                              name="frequencyPerYear"
                              rules={[
                                {
                                  required: false,
                                  message: "Enter Frequency(Per year)",
                                },
                              ]}
                            >
                              <text style={{ display: "none" }}>
                                {frequencyPerYear}
                              </text>
                              <Input
                                size="large"
                                type="number"
                                value={frequencyPerYear}
                                min="0"
                                max="3"
                                onChange={(e) => this.handleFrequencyChange(e)}
                              />
                              {this.state.selectFrequencyValidation ? (
                                <text style={{ color: "red" }}>
                                  Enter Frequency(Per year)
                                </text>
                              ) : null}
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
                                    ...(!distance && { required: false }),
                                    message: "Select From",
                                  },
                                ]}
                              >
                                <text style={{ display: "none" }}>
                                  {this.state.selectedFrom}
                                </text>
                                {selectedTransportTab === "Train" && (
                                  <Select
                                    showSearch
                                    placeholder="Select/type Station"
                                    size="large"
                                    allowClear
                                    value={this.state.selectedFrom}
                                    onChange={this.handleFromChange}
                                  >
                                    {RailwayStationList.map(
                                      (station: any, f: any) => (
                                        <Option value={station.name} key={f}>
                                          {station.name} ({station.code})
                                        </Option>
                                      )
                                    )}
                                  </Select>
                                )}

                                {selectedTransportTab === "Bus" && (
                                  <Select
                                    showSearch
                                    placeholder="Select City"
                                    size="large"
                                    allowClear
                                    value={this.state.selectedFrom}
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
                                )}

                                {selectedTransportTab === "TwoWheeler" && (
                                  <Select
                                    showSearch
                                    placeholder="Select City"
                                    size="large"
                                    allowClear
                                    value={this.state.selectedFrom}
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
                                )}
                              </Form.Item>

                              {stage === 1 || stage === 2 ? (
                                <>
                                  <Row className="mb-2">
                                    <p>Via</p>
                                  </Row>
                                  <Row gutter={16}>
                                    <Col lg={21} md={21}>
                                      <Form.Item name="via">
                                        <Select
                                          showSearch
                                          placeholder="Select/type Station"
                                          size="large"
                                          allowClear
                                          value={selectedVia}
                                          onChange={this.handleViaChange}
                                        >
                                          {RailwayStationList.map(
                                            (station: any, f: any) => (
                                              <Option
                                                value={station.name}
                                                key={f}
                                              >
                                                {station.name} ({station.code})
                                              </Option>
                                            )
                                          )}
                                        </Select>
                                      </Form.Item>
                                    </Col>

                                    <Col lg={3} md={3}>
                                      <div className="other-transport-remove-btn">
                                        <img
                                          src={Icon_Close}
                                          alt="img"
                                          onClick={() =>
                                            this.onViaRemoveStage()
                                          }
                                        />
                                      </div>
                                    </Col>
                                  </Row>
                                </>
                              ) : null}

                              {stage === 2 ? (
                                <>
                                  <Row className="mb-2">
                                    <p>Then</p>
                                  </Row>
                                  <Row gutter={16}>
                                    <Col lg={21} md={21}>
                                      <Form.Item name="then">
                                        <Select
                                          showSearch
                                          placeholder="Select/type Station"
                                          size="large"
                                          allowClear
                                          value={selectedThen}
                                          onChange={this.handleThenChange}
                                        >
                                          {RailwayStationList.map(
                                            (station: any, f: any) => (
                                              <Option
                                                value={station.name}
                                                key={f}
                                              >
                                                {station.name} ({station.code})
                                              </Option>
                                            )
                                          )}
                                        </Select>
                                      </Form.Item>
                                    </Col>

                                    <Col lg={3} md={3}>
                                      <div className=" other-transport-remove-btn">
                                        <img
                                          src={Icon_Close}
                                          alt="img"
                                          onClick={() =>
                                            this.onThenRemoveStage()
                                          }
                                        />
                                      </div>
                                    </Col>
                                  </Row>
                                </>
                              ) : null}

                              <Row className="mb-2">
                                <p>To</p>
                              </Row>
                              <Form.Item
                                name="to"
                                rules={[
                                  {
                                    ...(!distance && { required: false }),
                                    message: "Select To",
                                  },
                                ]}
                              >
                                <text style={{ display: "none" }}>
                                  {this.state.selectedTo}
                                </text>
                                {selectedTransportTab === "Train" && (
                                  <Select
                                    showSearch
                                    placeholder="Select/type Station"
                                    size="large"
                                    allowClear
                                    value={this.state.selectedTo}
                                    onChange={this.handleToChange}
                                  >
                                    {RailwayStationList.map(
                                      (station: any, f: any) => (
                                        <Option value={station.name} key={f}>
                                          {station.name} ({station.code})
                                        </Option>
                                      )
                                    )}
                                  </Select>
                                )}

                                {selectedTransportTab === "Bus" && (
                                  <Select
                                    showSearch
                                    placeholder="Select City"
                                    size="large"
                                    allowClear
                                    value={this.state.selectedTo}
                                    onChange={this.handleToChange}
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
                                )}

                                {selectedTransportTab === "TwoWheeler" && (
                                  <Select
                                    showSearch
                                    placeholder="Select City"
                                    size="large"
                                    allowClear
                                    value={this.state.selectedTo}
                                    onChange={this.handleToChange}
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
                                )}
                              </Form.Item>

                              <div className="other-transport-add-stage-btn">
                                <Button onClick={this.onAddStage}>
                                  <img
                                    src={Plush}
                                    alt="img"
                                    className="btn-img-span"
                                  />

                                  <span className="btn-text-span ms-2 pt-2">
                                    Add a Stage
                                  </span>
                                </Button>
                              </div>
                            </div>
                          </Col>
                          <div className="offset-onetime-car-bottom-sec-or">
                            <p>OR</p>
                          </div>
                          <Col lg={12} md={12}>
                            <div className="offset-onetime-car-bottom-sec2-form-border px-3 py-3 d-flex align-items-center ">
                              <div className="flex-fill ct_position_8">
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
                      <div className="pt-4 pb-2">
                        <Row
                          className={
                            isMobile
                              ? "offset-car-vehicle-detail-btn justify-content-center pt-3"
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
            {isMobile ? (
              <Col lg={8} md={8}>
                <OrderSummary
                  id={""}
                  history={this.state}
                  location={""}
                  orderSummaryData={orderSummaryData}
                />
              </Col>
            ) : (
              <></>
            )}
            <IndividualOffsetDetails
              id={""}
              history={""}
              location={""}
              heading={"Other Transport"}
              rightData={[
                "Make the switch from fossil fuel run vehicles to electric vehicles.",
                "Consider using public transport.",
              ]}
              leftData={[
                "Ride your motorcycle within legal speed limits, over speeding increases the amount of CO2 you emit.",
                "Invest in servicing and maintaining your motorcycle at regular intervals.",
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
                history={this.state}
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

export default OffsetOneTimeTransport as React.ComponentType<any>;
// Customizable Area End
