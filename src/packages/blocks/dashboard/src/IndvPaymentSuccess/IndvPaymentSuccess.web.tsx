import { Affix, Button, Col, Form, Row, Select } from "antd";
import React from "react";
import {
  PaymentSuccessImg,
  ScreenLoader,
  ToastErrorIcon,
  Icon_Close,
} from "../assets";
import IndvPaymentSuccessController, {
  Props,
} from "./IndvPaymentSuccessController.web";
import ClimateProjectMiddleCarousel from "../LandingPages/ClimateProjectMiddleCarousel.web";
import { constants } from "../../../../components/src/types";
const { Option } = Select;

export default class IndvPaymentSuccess extends IndvPaymentSuccessController {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { isGift, finalImpact } = this.state
    const IndvPaymentSuccessConstants = constants.IndvPaymentSuccess;
    return (
      <div className="indv-payment-success-sec" >
        {
          this.state?.selectProjectError ?
            <>
              <div className="notification-toast-container">
                <section className="notification-toast-image-flex">
                  <div className="notification-toast-flex">
                    <img
                      src={ToastErrorIcon}
                      alt="ToastErrorIcon"
                      className="notification-toast-error-icon"
                    />
                    <p className="notification-toast-text">
                      {this.state?.selectProjectError}
                    </p>
                  </div>
                  <button className="notification-toast-button">
                    <img
                      className="notification-toast-close-icon"
                      src={Icon_Close}
                      alt="close"
                      onClick={() => {
                        this.setState({ selectProjectError: null });
                      }}
                    />
                  </button>
                </section>
              </div>
            </> : ""
        }
        < div className="indv-payment-success-done-sec" >
          <div className="container">
            <div className="indv-payment-success-done-sec-up">
              <Row>
                <Col span={12} offset={6}>
                  <div className="indv-payment-success-done-sec-up-img d-flex justify-content-center">
                    <img src={PaymentSuccessImg} />
                  </div>
                  <div className="text-center">
                    <p className="indv-payment-success-sec-text-ns">
                      {`${constants.BusinessScreen.selectProject} ${finalImpact
                        ? Math.round(finalImpact * 100) / 100
                        : finalImpact
                        }T`}</p>
                  </div>
                  <div className="pt-3">
                    <Form.Item
                      label=""
                      name="package"
                      rules={[{ required: true, message: "Select Package" }]}
                    >
                      <Select
                        defaultValue="Select Package"
                        size="large"
                        allowClear
                        onChange={this.handleSelectChange}
                      >
                        {Object.keys(this.state.myProjectsList).map(
                          (item: any) => {
                            return (
                              <Option value={item} key={item}>
                                {item}
                              </Option>
                            );
                          }
                        )}
                      </Select>
                    </Form.Item>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="indv-payment-success-done-sec-down mt-5">
              <div className="container">
                <div className="indv-payment-success-done-sec-down-head">
                  <p>{IndvPaymentSuccessConstants.ALL_PROJECT}</p>
                </div>
                <div>
                  {this.state.isLoader ? (
                    <div className="screen-loader-center">
                      <img
                        src={ScreenLoader}
                        alt="loader"
                        className="screen-loader"
                      />
                    </div>
                  ) : (
                    <>
                      {this.state.selectValue ? (
                        <Row>
                          <Col lg={24} md={24} xs={24}>
                            <div className="Carousel_Main  Carousel_Project_Main">
                              <ClimateProjectMiddleCarousel
                                dataList={
                                  this.state.myProjectsList[
                                    this.state.selectValue
                                  ].data
                                }
                                isUserLoggedIn={this.state.isUserLoggedIn}
                                heading={this.state.selectValue}
                                SelectProjectType={this.handleSelectProjectType}
                                selectedProjectId={this.state.selectedProjectId}
                              />
                            </div>
                          </Col>
                        </Row>
                      ) : (
                        Object.keys(this.state.myProjectsList).map(
                          (item: any) => {
                            return (
                              <Row>
                                <Col lg={24} md={24} xs={24}>
                                  <div className="Carousel_Main  Carousel_Project_Main">
                                    <ClimateProjectMiddleCarousel
                                      dataList={
                                        this.state.myProjectsList[item].data
                                      }
                                      isUserLoggedIn={this.state.isUserLoggedIn}
                                      heading={item}
                                      SelectProjectType={
                                        this.handleSelectProjectType
                                      }
                                      selectedProjectId={
                                        this.state.selectedProjectId
                                      }
                                    />
                                  </div>
                                </Col>
                              </Row>
                            );
                          }
                        )
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Affix offsetBottom={0} className="payment-success-foot">
            <div className="indv-payment-foot">
              <div className="container">
                <div className="d-flex align-items-center justify-content-between  py-4 payment-success-foot-ns">
                  <Button
                    className="carbon-offset-payment-success-foot-btn"
                    size="large"
                    htmlType="submit"
                    disabled={
                      this.state.selectedProjectId.length > 0 ? false : true
                    }
                    onClick={this.handleConfirm}
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </Affix>
        </div>
      </div >
    );
  }
}
