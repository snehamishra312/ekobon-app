import React from "react";
import HeaderWeb from "../../../../components/src/Header/Header.web";
import FooterWeb from "../../../../components/src/Footer/Footer.web";
import { locationMap, Icon_call, Icon_mail } from "../assets";
import { Row, Col, Form, Input, Button } from "antd";

import ContactUsController, { Props } from "./ContactUsController.web";

export default class ContactUs extends ContactUsController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { contactUsDetails } = this.state;
  
    return (
      <>
        <HeaderWeb />
        <div className="landing-header">
          <h2>
            Get In <span className="text_bold">Touch!</span>
          </h2>
        </div>
        <div className="page-content-contact-us">
          <Row gutter={16}>
            <Col lg={8} md={8} xs={8} sm={8}>
              <div className="contact-card-box">
                <label>
                  <p>
                    <img src={locationMap} alt="img" /> Address
                  </p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: contactUsDetails.contact_address,
                    }}
                  />
                </label>
              </div>
            </Col>
            <Col lg={8} md={8} xs={8} sm={8}>
              <div className="contact-card-box">
                <a
                  className="mailto"
                  href={`tel:${contactUsDetails.contact_number}`}
                >
                  <label>
                    <p>
                      <img src={Icon_call} alt="img" /> Mobile
                    </p>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: contactUsDetails.contact_number,
                      }}
                    />
                  </label>
                </a>
              </div>
            </Col>
            <Col lg={8} md={8} xs={8} sm={8}>
              <div className="contact-card-box">
                <a
                  className="mailto"
                  href={`mailto:${contactUsDetails.contact_email}`}
                >
                  <label className="mail-point">
                    <p>
                      <img src={Icon_mail} alt="img" /> Email
                    </p>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: contactUsDetails.contact_email,
                      }}
                    />
                  </label>
                </a>
              </div>
            </Col>
          </Row>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={this.handleFinish}
            autoComplete="off"
            className="contact-form"
          >
            <Row gutter={16}>
              <Col lg={12} md={12} xs={24} sm={24}>
                <Row>
                  <p>Your Name</p>
                </Row>
                <Form.Item
                  label=""
                  name="name"
                  rules={[{ required: true, message: "Please enter name" }]}
                >
                  <Input size="large" placeholder="Enter your name" />
                </Form.Item>
                <Row gutter={16}>
                  <Col lg={12} md={12} xs={24} sm={24}>
                    <Row>
                      <p>Mobile Number</p>
                    </Row>
                    <Form.Item
                      label=""
                      name="mobileNo"
                      rules={[
                        {
                          required: true,
                          message: "Please enter contact number",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        type="number"
                        maxLength={10}
                        placeholder="Enter your contact number"
                      />
                    </Form.Item>
                  </Col>
                  <Col lg={12} md={12} xs={24} sm={24}>
                    <Row>
                      <p>Email</p>
                    </Row>

                    <Form.Item
                      label=""
                      name="email"
                      rules={[
                        { required: true, message: "Please enter Email id" },
                        {
                          type: "email",
                          message: "Please enter a valid E-mail address.",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Enter your Email id" />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col lg={12} md={12} xs={24} sm={24}>
                <Row>
                  <p>Message</p>
                </Row>

                <Form.Item
                  label=""
                  name="message"
                  rules={[{ required: true, message: "Please enter Message" }]}
                >
                  <Input.TextArea
                    placeholder="Enter your message here"
                    autoSize={{ minRows: 7, maxRows: 7 }}
                    className="form_textarea"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={32} className="px-4 pb-15 just-cenrte">
              <Col lg={6} md={6}>
                <Button
                  htmlType="submit"
                  className="indv-offset-order-btn-buy-gift"
                >
                  Send Message
                </Button>
              </Col>
            </Row>
          </Form>
        </div>

        <FooterWeb />
      </>
    );
  }
}
