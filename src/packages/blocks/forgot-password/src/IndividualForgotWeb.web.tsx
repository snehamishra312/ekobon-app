import React from "react";
import { Row, Col, Modal, Button, Form, Input } from "antd";
const AuthImg = require("../assets/authImg.png");
import IndividualForgotWebController, {
  Props,
} from "./IndividualForgotWebController.web";

class IndividualForgotWeb extends IndividualForgotWebController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { isModalVisible } = this.state;
    return (
      <div className="auth-bg">
        <Modal
          visible={isModalVisible}
          onOk={() => this.handleModalOk()}
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

              <div>
                <div className="login-indv-form-up-txt">
                  <p className="mb-2">
                    <b>Forgot Password</b>
                  </p>
                  <p>
                    Please enter your registered email address and we'll send a
                    verification code to reset your password
                  </p>
                </div>

                <Form
                  name="basic"
                  layout="vertical"
                  initialValues={{ remember: true }}
                  onFinish={this.onFinish}
                  autoComplete="off"
                >
                  <div className="padding-data-ui">
                    <Row className="">
                      <p>Email</p>
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
                      className="mb-5"
                    >
                      <Input size="large" placeholder="example@gmail.com" />
                    </Form.Item>
                  </div>
                  <Form.Item>
                    <Button
                      className="carbon-idv-signin-btn carbon-idv-forgot-btn"
                      size="large"
                      htmlType="submit"
                    >
                      Next
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
            <Col lg={12} md={12}>
              <div className="indv-auth-img mt-4">
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
      </div>
    );
  }
}

export default IndividualForgotWeb;
