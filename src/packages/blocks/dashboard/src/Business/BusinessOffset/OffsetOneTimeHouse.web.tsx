import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import IndividualOffset from "./IndividualOffset.web";
import OneTimeCard from "./OneTimeCard.web";
import OrderSummary from "./BusinessOrderSummary.web";
import OffsetOneTimeHouseController from "./OffsetOneTimeHouseController.web";

export default class OffsetOneTimeHouse extends OffsetOneTimeHouseController {
  render() {
    const { orderSummaryData, loader } = this.state;
    return (
      <div className="one-time-offset-sec">
        <IndividualOffset />
        <Row gutter={16} className="remove-overflow-x  py-3 px-2 ct_alignment_center">
          <Col lg={16} md={16}>
            <div className=" px-2">
              <OneTimeCard />
              <div className="carbon-offset-onetime-life-sec py-3">
                <div className="offset-onetime-car-sec">
                  <div className="offset-onetime-car-sec-head py-3 px-4">
                    <p>Household</p>
                  </div>
                  <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    autoComplete="off"
                  >
                    <div className="offset-onetime-car-bottom-sec py-3 px-4 ct_padd_btm_65">
                      <div className="offset-onetime-household-sec ">
                        <Row gutter={32}>
                          <Col lg={12} md={12}>
                            <div className="offset-onetime-household-sec-head pt-3">
                              <p>Electricity</p>
                            </div>

                            <div className="offset-onetime-household-sec-text py-2">
                              <p>
                                Average monthly consumption for the household
                              </p>
                            </div>

                            <Row className="mb-2 mt-3">
                              <p>Classic Provider (kWh/month)</p>
                            </Row>

                            <Form.Item
                              label=""
                              name="classicProvider"
                              rules={[
                                {
                                  required: true,
                                  message: "Classic Provider Required",
                                },
                              ]}
                            >
                              <Input
                                size="large"
                                placeholder="Enter Classic Provider"
                              />
                            </Form.Item>

                            <Row className="mb-2 mt-3">
                              <p>Green Provider (kWh/month)</p>
                            </Row>

                            <Form.Item
                              label=""
                              name="greenProvider"
                              rules={[
                                {
                                  required: true,
                                  message: "Green Provider Required",
                                },
                              ]}
                            >
                              <Input
                                size="large"
                                placeholder="Enter Green Provider"
                              />
                            </Form.Item>
                          </Col>
                          <Col lg={12} md={12}>
                            <div className="offset-onetime-household-sec-head pt-3">
                              <p>Gas</p>
                            </div>

                            <div className="offset-onetime-household-sec-text py-2">
                              <p>
                                Average monthly consumption for the household
                              </p>
                            </div>

                            <Row className="mb-2 mt-3">
                              <p>Gas (kWh/month)</p>
                            </Row>

                            <Form.Item
                              label=""
                              name="gas"
                              rules={[
                                { required: true, message: "Gas Required" },
                              ]}
                            >
                              <Input size="large" placeholder="Enter Gas" />
                            </Form.Item>
                          </Col>
                        </Row>
                      </div>
                      <div className="offset-house-btn-sec">
                        <Row className="offset-car-vehicle-detail-btn justify-content-end pt-4">
                          <Col lg={12} md={12}>
                            <Button
                              className="carbon-offset-btn"
                              size="large"
                              htmlType="submit"
                              disabled={loader}
                              onClick={this.handleFinish}
                            >
                              {loader
                                ? "Calculating Emissions.."
                                : "Calculate my Emissions"}
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
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
