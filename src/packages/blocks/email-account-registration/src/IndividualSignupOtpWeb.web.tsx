import React from "react";
// Customizable Area Start
import IndividualSignupOtpWebController, {
  Props,
} from "./IndividualSignupOtpWebController.web";
import { authImg } from "./assets";
import { Row, Col, Modal, Button, Form } from "antd";
import OtpInput from "react-otp-input";
import OTPCounter from "./OTPCounter.web";

// Customizable Area End

class IndividualSignupOtpWeb extends IndividualSignupOtpWebController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { isModalVisible, otp, IsotpExpired, Otptime } = this.state;
    return (
      <>
        <div className="auth-bg">
          <Modal
            title=""
            visible={isModalVisible}
            onOk={() => this.handleModalOk}
            onCancel={() => this.props.history.goBack()}
            width={900}
            footer={false}
            className="idv-login-modal"
          >
            <Row gutter={24}>
              <Col lg={12} md={12}>
                <div className="idv-modal-upper-sec-back mb-3">
                  <button onClick={() => this.props.history.goBack()}>
                    <i className="fas fa-angle-left" />
                  </button>
                </div>

                <div className="login-indv-form-up-txt mb-4">
                  <p className="mb-2">
                    <b>Sign Up</b>
                  </p>
                  <p>
                    Please enter the 6 digit code that you have received in your
                    registered email
                    <span className="f-w6">{this.props.location.state}</span>
                    to verify
                  </p>
                </div>
                {IsotpExpired ? (
                  <label className="otp_expired_msg">
                    OTP has expired, Please Regenerate OTP again.
                  </label>
                ) : (
                  <OTPCounter
                    OtpFinishTime={this.OtpFinishTime}
                    Otptime={Otptime}
                  />
                )}

                <Form
                  name="basic"
                  layout="vertical"
                  initialValues={{ remember: true }}
                  onFinish={this.onFinish}
                  autoComplete="off"
                  className="login-indv-form indi-login-form"
                >
                  <div className="forgot-pass-idv-otp-enter-sec signup-otp-section">
                    <Form.Item
                      name="otp"
                      rules={[{ required: false, message: "Please enter OTP" }]}
                    >
                      <text style={{ display: "none" }}>{otp}</text>

                      <OtpInput
                        value={otp}
                        onChange={this.handleOtpChange}
                        numInputs={6}
                        separator={<span />}
                      />
                    </Form.Item>
                    <div className="justify-content-center ind-web-resend">
                      Didn't receive the code yet?
                      <span onClick={this.handleResendOTP}>Resend</span>
                    </div>
                  </div>

                  <Form.Item className="idv-otp-form indv-form-submit-sec">
                    <Button
                      className="carbon-idv-signin-btn carbon-idv-forgot-btn"
                      size="large"
                      htmlType="submit"
                    >
                      Verify
                    </Button>
                  </Form.Item>
                  <Row className="indv-login-form-btn-sec" />
                </Form>
              </Col>
              <Col lg={12} md={12}>
                <div className="indv-auth-img mt-4">
                  <img src={"https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/qqpihxzv8uzlvqynolkk5lkqc0kk/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22authImg.jpg%22%3B%20filename%2A%3DUTF-8%27%27authImg.jpg&response-content-type=image%2Fjpeg"} alt="authImg" />
                </div>
              </Col>
            </Row>
          </Modal>
        </div>
      </>
    );
  }
}

export default IndividualSignupOtpWeb as React.ComponentType<any>;
// Customizable Area End
