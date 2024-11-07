import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import IndividualOffset from "./IndividualOffset.web";
import OneTimeCard from "./OneTimeCard.web";
import OrderSummary from "./OrderSummary.web";
import OffsetOneTimeHouseController from "./OffsetOneTimeHouseController.web";
import IndividualOffsetDetails from "./IndividualOffsetDetails.web";
import {
  deviceMode,
  getHtmlElementById,
} from "../../../../components/src/CommonUtils";
import OneTimeMobileCard from "./OneTimeMobileCard.web";

export default class OffsetOneTimeHouse extends OffsetOneTimeHouseController {
  render() {
    const { orderSummaryData, loader } = this.state;
    const isMobile = deviceMode.isMobile;

    return (
      <div className="one-time-offset-sec">
        <IndividualOffset />
        <Row gutter={16} className="remove-overflow-x  py-3 px-2 align-items-start">
          <Col lg={16} md={16}>
            <div className=" px-2">
              <div
                className="offset-top-bg"
                style={{ paddingBottom: "50px !important" }}
              >
                {isMobile ? <OneTimeMobileCard /> : <></>}
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/shadra3bs9pktud72xjiasubwdst/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Household_BG.jpg%22%3B%20filename%2A%3DUTF-8%27%27Household_BG.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </div>
              {!isMobile ? <OneTimeCard /> : <></>}
              <div
                className="carbon-offset-onetime-life-sec carbon-offset-onetime-life-sec-household  carbon-offset-bg-img py-3"
                style={{ paddingTop: "50px !important" }}
              >
                <div className="offset-onetime-car-sec ct_mt_40 ct_padding_btm_50">
                  <div className="offset-onetime-car-sec-head py-3 px-4">
                    <p>Household</p>
                  </div>
                  <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    // onFinish={this.handleFinish}
                    autoComplete="off"
                  >
                    <div className="offset-onetime-car-bottom-sec py-3 px-4">
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
                                  required: false,
                                  message: "Classic Provider Required",
                                },
                              ]}
                            >
                              <text style={{ display: "none" }}>
                                {this.state.classicProvider}
                              </text>
                              <Input
                                size="large"
                                type="number"
                                name="classicProvider"
                                value={this.state.classicProvider}
                                min="0"
                                onChange={(e: any) =>
                                  this.handleInputOnchange(e, "classicProvider")
                                }
                                placeholder="Enter Classic Provider"
                              />
                              {this.state.classicProviderValidation ? (
                                <text style={{ color: "red" }}>
                                  Classic Provider Required
                                </text>
                              ) : null}
                            </Form.Item>

                            <Row className="mb-2 mt-3">
                              <p>Green Provider (kWh/month)</p>
                            </Row>

                            <Form.Item
                              label=""
                              name="greenProvider"
                              rules={[
                                {
                                  required: false,
                                  message: "Green Provider Required",
                                },
                              ]}
                            >
                              <text style={{ display: "none" }}>
                                {this.state.greenProvider}
                              </text>
                              <Input
                                size="large"
                                type="number"
                                min="0"
                                name="greenProvider"
                                value={this.state.greenProvider}
                                onChange={(e: any) =>
                                  this.handleInputOnchange(e, "greenProvider")
                                }
                                placeholder="Enter Green Provider"
                              />
                              {this.state.greenProviderValidation ? (
                                <text style={{ color: "red" }}>
                                  Green Provider Required
                                </text>
                              ) : null}
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
                                { required: false, message: "Gas Required" },
                              ]}
                            >
                              <text style={{ display: "none" }}>
                                {this.state.gas}
                              </text>
                              <Input
                                size="large"
                                placeholder="Enter Gas"
                                name="gas"
                                value={this.state.gas}
                                onChange={(e: any) =>
                                  this.handleInputOnchange(e, "gas")
                                }
                                type="number"
                                min="0"
                              />
                              {this.state.gasValidation ? (
                                <text style={{ color: "red" }}>
                                  Gas Required
                                </text>
                              ) : null}
                            </Form.Item>
                          </Col>
                        </Row>
                      </div>
                      <div className="offset-house-btn-sec">
                        <Row
                          className={
                            isMobile
                              ? "offset-car-vehicle-detail-btn justify-content-center pt-4"
                              : "offset-car-vehicle-detail-btn justify-content-end pt-4"
                          }
                        >
                          <Col lg={12} md={12}>
                            <Button
                              className="carbon-offset-btn"
                              size="large"
                              htmlType="submit"
                              disabled={loader}
                              onClick={
                                this.handleFinish}
                            // if (isMobile) {
                            //   getHtmlElementById("order-summary-mobile");
                            // }
                            // }}
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
            {isMobile ? (
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
            <IndividualOffsetDetails
              id={""}
              history={""}
              location={""}
              heading={"Household"}
              rightData={[
                "Turn off the lights and fans when not in use.",
                "Switch to energy-efficient home appliances.",
                "Avoid air conditioners and look for eco-friendly cooling alternatives such as insulating your home. Insulation will also help to prevent heating leaks in winters.",
              ]}
              leftData={[
                "Try switching to renewable sources of energy.",
                "Be mindful of your water consumption. Ration by filling in containers rather than keeping the tap running.",
                "Avoid buying plastic containers, reuse takeaway containers or opt for stainless steel or glass.",
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
