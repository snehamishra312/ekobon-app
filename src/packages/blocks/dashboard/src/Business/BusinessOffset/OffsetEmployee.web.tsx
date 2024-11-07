import React from "react";
import { Row, Col } from "antd";
import IndividualOffset from "./IndividualOffset.web";
import OneTimeCard from "./OneTimeCard.web";
import OrderSummary from "./BusinessOrderSummary.web";
import OffsetEmployeeController from "./OffsetEmployeeController.web";
import { Form, Select, Input, Button } from "antd";
import { CountryListData } from "../../CountryList";
import { VIDEO, EMAIL, GIFT, TREE, WINDMILL, BUILDING } from "./assets";
import BusinessOffsetDetail from "./BusinessOffsetDetail.web";
import { constants } from "../../../../../components/src/types";
import {
  deviceMode,
  getHtmlElementById,
} from "../../../../../components/src/CommonUtils";
import OneTimeMobileCard from "./OneTimeCardMobile.web";

const { Option } = Select;
export default class OffsetEmployee extends OffsetEmployeeController {
  render() {
    const {
      SIDE_BANNER_LIST_OFFSET,
      FOOTPRINT_LIST1,
      FOOTPRINT_LIST2,
      FOOTPRINT_LIST3,
    } = constants.OffsetEmployee;
    const {
      employeeNo,
      loader,
      EmployeeData,
      btnDisabled,
      orderSummaryData,
      clickShow
    } = this.state;
    const sideBannerLists = [SIDE_BANNER_LIST_OFFSET];
    const footprintLists = [FOOTPRINT_LIST1, FOOTPRINT_LIST2, FOOTPRINT_LIST3];
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
                {isMobile ? <OneTimeMobileCard /> : <></>}
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/f8v38iayc5xerdg3cgg9xhc238po/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Employee_BG.jpg%22%3B%20filename%2A%3DUTF-8%27%27Employee_BG.jpg&response-content-type=image%2Fjpeg"
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
                        <div className="our-approach-main-sec-head offset_details" style={{ marginTop: '-25px', marginLeft: "18px" }}>
                          <p className="our-approach-sec-desc text-align-lifestyle-ns ct_accordian_tab" onClick={this.handleClickFunction}>
                            <span className="">
                              How does the tool works
                            </span>
                            <button><i className={clickShow == false ? "fa fa-chevron-down " : "fa fa-chevron-up"} aria-hidden="true"></i></button>
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <div
                      className="about-hate-climate-chng-sec_emp Tool_user"
                      style={{ padding: "0", marginTop: "90px" }}
                    >
                      <div className="container ">
                        <Row style={{ marginTop: '90px' }} className={clickShow == false ? "emp-one-time-desc-center ct_para_cnt align-items-start" : "emp-one-time-desc-center ct_accordion_item align-items-start"}>
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
                                    <Col lg={21}>
                                      <div className="tool_user_contents ct_tool_user_content">
                                        <p
                                          className="pText-emp"
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
                ) : (
                  ""
                )}
              </>

              {!isMobile ? <OneTimeCard /> : <></>}
              <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={this.handleFinish}
                style={{ marginTop: '20px' }}
              >
                <div className="carbon-offset-onetime-life-sec carbon-offset-onetime-life-business-emp carbon-offset-bg-img py-3 px-4">
                  <div className="offset-onetime-car-sec">
                    <div className="offset-onetime-car-sec-head py-3 px-4">
                      <p>Employee</p>
                    </div>
                    <div className="offset-onetime-car-bottom-sec py-3 px-4">
                      <Row className="mb-2">
                        <p>Country</p>
                      </Row>
                      <Form.Item
                        name="country"
                        rules={[{ required: false, message: "Select Country" }]}
                      >
                        <text style={{ display: "none" }}>
                          {this.state.selectedCountry}
                        </text>
                        <Select
                          showSearch
                          defaultValue="Select"
                          size="large"
                          allowClear
                          disabled={false}
                          value={
                            this.state.selectedCountryEmployee !== null
                              ? this.state.selectedCountryEmployee
                              : this.state.selectedCountry
                          }
                          onChange={this.handleCountryChange}
                        >
                          {CountryListData.map((data: any) => (
                            <Option
                              value={data.CountryName}
                              key={data.CountryName}
                            >
                              {data.CountryName}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>

                      <Row className="mb-2">
                        <p>Employees</p>
                      </Row>

                      <div className="offset-input-custm">
                        <Form.Item
                          name="employees"
                          rules={[
                            { required: false, message: "Enter Employees" },
                          ]}
                        >
                          <text className="hidentext">{employeeNo}</text>
                          <Input
                            size="large"
                            placeholder="Employees"
                            type="number"
                            min="0"
                            max="100"
                            value={employeeNo}
                            onChange={(e) => this.handleEmployeeInput(e)}
                          />
                        </Form.Item>
                      </div>
                      <hr />
                      <Row
                        className={
                          isMobile
                            ? "offset-car-vehicle-detail-btn carbon-offset-employee-btn justify-content-center pt-3"
                            : "offset-car-vehicle-detail-btn carbon-offset-employee-btn justify-content-end pt-3"
                        }
                      >
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
                            disabled={isMobile ? false : loader}
                            onClick={() => {
                              this.calculateEmployeeData()
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
              </Form>
            </div>
            {isMobile ? (
              <OrderSummary
                id={""}
                history={this.state}
                location={""}
                EmployeeData={EmployeeData}
                orderSummaryData={orderSummaryData}
                fetchCallBackOrderSummary={(data: any) =>
                  this.callBackFromOrderSummaary(data)
                }
              />
            ) : (
              <></>
            )}
            <BusinessOffsetDetail
              offsetType="onetime"
              offsetName="EMPLOYEE"
              bannerClimateTitle="Climate change is wrecking the living experience for people around the world."
              bannerClimateSubTitle="They are looking for organizations that care."
              sideBannerHead="Do environmentally friendly business operations matter to you? Would you go the extra mile to give the world more than you take from it?"
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
          {!isMobile ? (
            <Col lg={8} md={8}>
              <OrderSummary
                id={""}
                history={this.state}
                location={""}
                EmployeeData={EmployeeData}
                orderSummaryData={orderSummaryData}
                fetchCallBackOrderSummary={(data: any) =>
                  this.callBackFromOrderSummaary(data)
                }
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
