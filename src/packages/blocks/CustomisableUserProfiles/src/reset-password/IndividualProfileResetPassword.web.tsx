import React from "react";
// Customizable Area Start
import IndividualProfileResetPasswordController, {
  Props,
} from "./IndividualProfileResetPasswordController.web";
import { Button, Col, Form, Input, Modal, Row } from "antd";

// Customizable Area End

export default class IndividualProfileResetPassword extends IndividualProfileResetPasswordController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { isModalVisible } = this.state;
    // console.log('isModalVisible', isModalVisible)
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
          >
            <Row>
              <Col lg={24} md={24} xs={24} sm={24}>
                <div className="idv-modal-upper-sec-back mb-3">
                  <button onClick={() => this.handleBack()}>
                    <i className="fas fa-angle-left" />
                  </button>
                </div>

                <div className="forgot-indv-left-sec-modal">
                  <div className="login-indv-form-up-txt mb-5">
                    <p className="mb-2">
                      <b>Reset Password</b>
                    </p>
                    <p>
                      Please enter your registered email address and we'll send
                      a verification code to reset your password
                    </p>
                  </div>

                  <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    autoComplete="off"
                    className="login-indv-form"
                    onValuesChange={this.handleInputonChange}
                  >
                    <div className="inv-create-pass">
                      <Row>
                        <p>Email</p>
                      </Row>

                      <Form.Item
                        label=""
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                          {
                            type: "email",
                            message: "Please enter a valid E-mail address.",
                          },
                        ]}
                      >
                        <Input size="large" placeholder="example@gmail.com" />
                      </Form.Item>
                    </div>

                    <div className="mt-5">
                      <Form.Item>
                        <Button
                          className="carbon-idv-signin-btn carbon-idv-forgot-btn"
                          size="large"
                          htmlType="submit"
                        >
                          Next
                        </Button>
                      </Form.Item>
                    </div>
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
