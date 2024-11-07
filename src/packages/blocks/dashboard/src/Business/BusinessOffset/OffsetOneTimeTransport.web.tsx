import React from "react";
// Customizable Area Start
import OffsetOneTimeTransportController, {
  Props,
} from "./OffsetOneTimeTransportController.web";
import { Row, Col, Form, Input, Button, Radio, Select } from "antd";
import IndividualOffset from "./IndividualOffset.web";
import OneTimeCard from "./OneTimeCard.web";
import OrderSummary from "./BusinessOrderSummary.web";
import { Plush, Icon_Close } from "../../assets";
import { TopTravelCityList, TravelCityList } from "../../TravelCityList";

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
    } = this.state;

    return (
      <div className="one-time-offset-sec">
        <IndividualOffset />
        <Row gutter={16} className="remove-overflow-x  py-3 px-2">
          <Col lg={16} md={16}>
            <div className=" px-2">
              <OneTimeCard />
              <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={this.handleFinish}
              >
                <div className="carbon-offset-onetime-life-sec py-3">
                  <div className="offset-onetime-car-sec">
                    <div className="offset-onetime-car-sec-head py-3 px-4">
                      <p>Other Transport</p>
                      <ul className="other-transport-tab">
                        <li
                          onClick={() => this.otherTransportTabHandler("Train")}
                          className={`${
                            selectedTransportTab === "Train" ? "active" : ""
                          }`}
                        >
                          Train
                        </li>
                        <li
                          className={`${
                            selectedTransportTab === "Bus" ? "active" : ""
                          }`}
                          onClick={() => this.otherTransportTabHandler("Bus")}
                        >
                          Bus
                        </li>
                        <li
                          className={`${
                            selectedTransportTab === "TwoWheeler"
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            this.otherTransportTabHandler("TwoWheeler")
                          }
                        >
                          Scooter/Motorbike
                        </li>
                      </ul>
                    </div>
                    <div className="offset-onetime-car-bottom-sec py-3 px-4 ct_padd_btm_65">
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
                            rules={[{ required: true, message: "Select Type" }]}
                          >
                            <Select
                              showSearch
                              defaultValue="Select"
                              size="large"
                              allowClear
                              onChange={this.handleTypeChange}
                            >
                              {selectedTransportTab === "Train" &&
                                TransportTrainTypeList.map((data: any) => (
                                  <Option value={data.attributes.id}>
                                    {data.attributes.name}
                                  </Option>
                                ))}
                              {selectedTransportTab === "Bus" &&
                                TransportBusTypeList.map((data: any) => (
                                  <Option value={data.attributes.id}>
                                    {data.attributes.name}
                                  </Option>
                                ))}
                              {selectedTransportTab === "TwoWheeler" &&
                                TransportTwoWheelerTypeList.map((data: any) => (
                                  <Option value={data.attributes.id}>
                                    {data.attributes.name}
                                  </Option>
                                ))}
                            </Select>
                          </Form.Item>
                        </>
                        {/* Only Avaible when tab Type is train */}
                        {selectedTrip === "frequency" && (
                          <>
                            <Row className="mb-2">
                              <p>Frequency (Per year)</p>
                            </Row>
                            <Form.Item name="frequencyPerYear">
                              <Input
                                size="large"
                                type="number"
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
                                  defaultValue="Select"
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
                                      {`${city.city}, ${city.name} (${
                                        city.code
                                      })`}
                                    </Option>
                                  ))}
                                  {TravelCityList.map((city: any) => (
                                    <Option value={city.name}>
                                      {city.name}
                                    </Option>
                                  ))}
                                </Select>
                                {CheckFromValue && (
                                  <div className="select-validation">
                                    Please select another value
                                  </div>
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
                                          defaultValue="Select"
                                          size="large"
                                          allowClear
                                          onChange={this.handleViaChange}
                                        >
                                          {TravelCityList.map((city: any) => (
                                            <Option value={city.name}>
                                              {city.name}
                                            </Option>
                                          ))}
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
                                          defaultValue="Select"
                                          size="large"
                                          allowClear
                                          onChange={this.handleThenChange}
                                        >
                                          {TravelCityList.map((city: any) => (
                                            <Option value={city.name}>
                                              {city.name}
                                            </Option>
                                          ))}
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
                                    ...(!distance && { required: true }),
                                    message: "Select To",
                                  },
                                ]}
                              >
                                <Select
                                  showSearch
                                  defaultValue="Select"
                                  size="large"
                                  allowClear
                                  onChange={this.handleToChange}
                                >
                                  {TravelCityList.map((city: any) => (
                                    <Option value={city.name}>
                                      {city.name}
                                    </Option>
                                  ))}
                                </Select>
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
                        <Row className="offset-car-vehicle-detail-btn justify-content-end pt-3">
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
                            </>
                          </Col>
                          <Col lg={12} md={12}>
                            <Button
                              className="carbon-offset-btn"
                              size="large"
                              htmlType="submit"
                              disabled={loader}
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
          </Col>
          <Col lg={8} md={8}>
            <OrderSummary
              id={""}
              history={""}
              location={""}
              orderSummaryData={orderSummaryData}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default OffsetOneTimeTransport as React.ComponentType<any>;
// Customizable Area End
