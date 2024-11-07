import React from "react";
// Customizable Area Start
import IndividualProfileResetPasswordOtpController, {
  Props,
} from "./IndividualProfileResetPasswordOtpController.web";
import { Button, Col, Form, Modal, Row,Input } from "antd";
import OtpInput from "react-otp-input";
import OTPCounter from "../../../email-account-registration/src/OTPCounter.web";
//@ts-ignore
import OtpReste from "./OtpReste"
// Customizable Area End

class IndividualProfileResetPasswordOtp extends IndividualProfileResetPasswordOtpController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  resetOtpInput = ()=>{
    this.setState({otp: "",Otptime: 0})
    this.setState({isModalVisible:false})
    setTimeout(()=>{
      this.setState({isModalVisible:true})
      this.handleResendOTP()
    },500)
  }


  render() {
    const { isModalVisible, otp, IsotpExpired, Otptime } = this.state;
    return (
      <>
        <div className="indv-profile-bg">
          <Modal
            visible={isModalVisible}
            onOk={() => this.handleModalOk()}
            onCancel={() => this.handleModalCancel()}
            width={500}
            footer={false}
            className="idv-login-modal"
            destroyOnClose={true}
          >
            <Row>
              <Col lg={24} md={24} xs={24} sm={24}>
                <div className="idv-modal-upper-sec-back mb-3">
                  <button onClick={() => this.handleBack()}>
                    <i className="fas fa-angle-left" />
                  </button>
                </div>

                <div className="forgot-indv-left-sec-modal">
                  <div className="login-indv-form-up-txt mb-3">
                    <p className="mb-2">
                      <b>Reset Password</b>
                    </p>
                    <p>
                      Please enter the 6 digit code that you have received in
                      your registered email
                      <span className="f-w6">
                        {this.props.location.state}
                      </span>
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
                      Otptime={this.state.Otptime}
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
                        rules={[
                          { required: false, message: "Please enter OTP" },
                        ]}
                        >
                        <text style={{display:"none"}}>{otp}</text>
                        
                        <OtpInput
                          value={this.state.otp}
                          onChange={this.handleOtpChange}
                          numInputs={6}
                        />
                      </Form.Item>
                      <div className="justify-content-center ind-web-resend">
                        Didn't receive the code yet?
                        <span onClick={()=>this.resetOtpInput()}>Resend</span>
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
                  </Form>
                </div>
              </Col>
            </Row>
          </Modal>
        </div>
      </>
    );
  }
}

export default IndividualProfileResetPasswordOtp as React.ComponentType<any>;
// Customizable Area End
