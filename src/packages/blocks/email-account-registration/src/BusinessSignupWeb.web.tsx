import React from "react";
// Customizable Area Start
import BusinessSignupWebController, {
  Props,
} from "./BusinessSignupWebController.web";
import { Button, Checkbox, Col, Form, Input, Modal, Row, Select, Spin } from "antd";
import { Link } from "react-router-dom";
const { Option } = Select;

// Customizable Area End

export default class BusinessSignupWeb extends BusinessSignupWebController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const {
      isModalVisible,
      isPolicyModalVisible,
      isTermsModalVisible,
      screenLoard,
    } = this.state;
    console.log("isModalVisible", isModalVisible);
    return (
      <>
        <div className="auth-bg">
          <Modal
            visible={isModalVisible}
            onOk={() => this.handleModalOk()}
            onCancel={() => this.handleModalCancel()}
            width={900}
            footer={false}
            className="idv-login-modal indi_bus_Modal"
          >
            <Row gutter={24}>
              <Col lg={12} md={12}>
                <div className="idv-login-modal-content">
                  <p className="title">Sign Up for Business</p>
                  <div className="login-indv-form-up-txt mb-4">
                    <p>
                      Sign Up for
                      <Link to="/individual-signup">Individual</Link>
                    </p>
                    <p>
                      Already a user?
                      <button 
                      className="business-sign-in-ns"
                      onClick={()=>{
                        this.props.history.push({
                          pathname:"/login",
                          state:"Bussiness"
                        })
                      }}
                      >
                    <Link to="#">Sign in
                      </Link>
                      </button>
                     
                    </p>
                  </div>
                  <Spin spinning={screenLoard} tip="Please wait...">
                  <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    autoComplete="off"
                    className="login-indv-form indi_bus_form" 
                    onValuesChange={this.handleInputOnchange}
                  >
                    <Row>
                      <p>Company Name</p>
                    </Row>

                    <Form.Item
                      name="company_name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter company name",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Company" />
                    </Form.Item>

                    <Row>
                      <p className="Profile_details_lable">Country</p>
                    </Row>

                    <Form.Item
                      label=""
                      name="country"
                      rules={[{ required: true, message: "Select Country" }]}
                    >
                      <Select
                        showSearch
                        placeholder="Select Country"
                        size="large"
                        allowClear
                        onChange={this.handleCountryChange}
                      >
                        {this.state.CountryListData?.data?.map((data: any) => (
                          <Option
                            value={data.attributes.CountryName}
                            key={data.attributes.CountryName}
                          >
                            {data.attributes.CountryName}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>

                    <Row>
                      <p>Company Size</p>
                    </Row>

                    <Form.Item
                      name="company_size"
                      rules={[
                        { required: true, message: "Select Company Size" },
                      ]}
                    >
                      <Select placeholder="company members" size="large" allowClear>
                        <Option value="0-100">0-100</Option>
                        <Option value="100-500">100-500</Option>
                        <Option value="500-5000">50-5000</Option>
                        <Option value="5000+">5000+</Option>
                      </Select>
                    </Form.Item>
                    <Row>
                      <p>Company email</p>
                    </Row>

                    <Form.Item
                      label=""
                      name="email"
                      rules={[
                        { required: true, message: "Please input your email!" },
                        {
                          type: "email",
                          message: "Please enter a valid E-mail address.",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="email@company.com" />
                    </Form.Item>
                    <Row className="indv-login-form-btn-sec">
                      <Form.Item name="remember" valuePropName="checked">
                        <div className="fix-display">
                          <Checkbox>I have read and agree with </Checkbox>
                          <span className="ind-web-span">
                            <a onClick={() => this.showHideTermsModal(true)}>
                              Terms & Conditions
                            </a>
                            <br />
                          </span>
                          <span className="ind-web-span-lft">
                            and
                            <a
                              onClick={() =>
                                this.showHidePolicyModal(!isPolicyModalVisible)
                              }
                            >
                              Privacy Policy
                            </a>
                          </span>
                        </div>
                      </Form.Item>
                    </Row>

                    <Form.Item>
                      <Button
                        className="carbon-idv-signin-btn w-100"
                        size="large"
                        htmlType="submit"
                      >
                        Next
                      </Button>
                    </Form.Item>
                  </Form>
                  </Spin>
                  {/* <div className="carbon-idv-signin-social-sec d-flex justify-content-between align-items-center">
                      <hr />
                      <span>Or Sign Up Using</span>
                      <hr />
                    </div> */}

                    {/* <Row
                      gutter={24}
                      className="carbon-idv-signin-social-btn-sec justify-content-between mt-3"
                    >
                      <Col lg={12}>
                        <div className="idv-login-g-btn">
                          <button className="g_btn" onClick={() => this.connectGoogle()}>
                            Google <i className="fa-brands fa-google" />
                          </button>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="idv-login-f-btn">
                          <button className="f_btn" onClick={() => this.connectFacebook()}>
                            Facebook
                            <i className="fa-brands fa-facebook-f" />
                          </button>
                        </div>
                      </Col>
                    </Row> */}
                </div>
              </Col>
              <Col lg={12} md={12}>
                <div className="indv-auth-img indivibusinessModal mt-5">
                  <img
                    src={
                      "https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/qqpihxzv8uzlvqynolkk5lkqc0kk/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22authImg.jpg%22%3B%20filename%2A%3DUTF-8%27%27authImg.jpg&response-content-type=image%2Fjpeg"
                    }
                    alt="AuthImg"
                  />
                </div>
              </Col>
            </Row>
          </Modal>

          <Modal
            title=""
            visible={isTermsModalVisible}
            onOk={() => this.handleTermsModalOk()}
            onCancel={() => this.handleTermsModalCancel()}
            width={700}
            footer={
              <Button
                className="term-cond-btn-foot-signup"
                onClick={() => this.handleTermsModalCancel()}
              >
                Agree
              </Button>
            }
            className="idv-signup-modal-term-condition "
          >
            <div className="term-cond-signup-head">
              <p>Terms & Conditions</p>
            </div>
            <div
              className={
                this.state.isReadMore
                  ? "privacy_height_adjust"
                  : "privacy_height"
              }
            >
              {this.state.tandcData?.length >= 420 ? (
                <span
                  className="first_PlantTree_block_P"
                  onClick={() => this.ContentToggleShow()}
                >
                  {this.state.isReadMore ? (
                    <span
                      dangerouslySetInnerHTML={{ __html: this.state.tandcData }}
                      className="inlinePera"
                    />
                  ) : (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: this.state.tandcData.substr(0, 404),
                      }}
                      className="inlinePera"
                    />
                  )}
                  {this.state.isReadMore ? (
                    <span className="p_c_box_Section">
                      <u>...Show Less</u>
                    </span>
                  ) : (
                    <span className="p_c_box_Section">
                      <u>...Read More</u>
                    </span>
                  )}
                </span>
              ) : (
                <p className="first_PlantTree_block_P">
                  {this.state.tandcData}
                </p>
              )}
            </div>
          </Modal>

          <Modal
            visible={isPolicyModalVisible}
            onOk={() => this.handlePolicyModalOk()}
            onCancel={() => this.handlePolicyModalCancel()}
            width={700}
            footer={
              <Button
                className="term-cond-btn-foot-signup"
                onClick={() => this.handlePolicyModalCancel()}
              >
                Agree
              </Button>
            }
            className="idv-signup-modal-term-condition"
          >
            <div className="term-cond-signup-head">
              <p>Privacy Policy</p>
            </div>
            <div
              className={
                this.state.isReadMore
                  ? "privacy_height_adjust"
                  : "privacy_height"
              }
            >
              {this.state.privacyData?.length >= 420 ? (
                <span
                  className="first_PlantTree_block_P"
                  onClick={() => this.ContentToggleShow()}
                >
                  {this.state.isReadMore ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: this.state.privacyData,
                      }}
                      className="inlinePera"
                    />
                  ) : (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: this.state.privacyData.substr(0, 404),
                      }}
                      className="inlinePera"
                    />
                  )}
                  {this.state.isReadMore ? (
                    <span className="p_c_box_Section">
                      
                      <u>...Show Less</u>
                    </span>
                  ) : (
                    <span className="p_c_box_Section">
                      
                      <u>...Read More</u>
                    </span>
                  )}
                </span>
              ) : (
                <p className="first_PlantTree_block_P">
                  {this.state.privacyData}
                </p>
              )}
            </div>
          </Modal>
        </div>
      </>
    );
  }
}
