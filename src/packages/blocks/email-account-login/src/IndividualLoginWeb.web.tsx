import React from "react";
// Customizable Area Start
import IndividualLoginWebController, {
  Props,
} from "./IndividualLoginWebController.web";
import { ScreenLoader } from "../../../blocks/dashboard/src/assets";
import { authImg, handHoldingImg, giftCardImg, houseImage } from "./assets";
import { Button, Checkbox, Col, Form, Input, Modal, Row } from "antd";
import { Link } from "react-router-dom";
// Customizable Area End

class IndividualLoginWeb extends IndividualLoginWebController {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { isModalVisible, loader, loginFlag } = this.state;

    return (
      <>
        <div className="auth-bg">
          {loader === true ?
            <div className="screen-loader-center">
              <img
                src={ScreenLoader}
                alt="loader"
                className="screen-loader"
              />
            </div>
            :
            // new Design
            <section>
              <div className="ct_login_width_bg">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <div className="ct_login_bg12">
                        <div className="" style={{ minWidth: "300px" }}>
                          <ul className="nav nav-pills ct_login_tab">
                            <li className="nav-item" onClick={this.onClickLoginCard}>
                              <a
                                className="nav-link"
                                data-bs-toggle="pill"
                                href="#home"
                              >
                                <img src={houseImage} alt="" />
                                {
                                  this.props.location.state === "Individual" ?
                                    <p className="mb-0">EKO Spark</p>
                                    :
                                    <p className="mb-0">EKO Trace</p>
                                }
                              </a>
                            </li>
                            {
                              this.props.location.state === "Individual" ?
                                <li className="nav-item" onClick={this.onClickLoginCard}>
                                  <a className="nav-link active" data-bs-toggle="pill" href="#menu1"
                                  >
                                    <img src={handHoldingImg} alt="" />
                                    <p className="mb-0">Carbon Footprint Offsetting / Plant trees</p></a>
                                </li>
                                :
                                <li className="nav-item">
                                  <a className="nav-link active" data-bs-toggle="pill" href="#menu1"
                                  >
                                    <img src={handHoldingImg} alt="" />
                                    <p className="mb-0">Business</p></a>
                                </li>
                            }
                            {
                              this.props.location.state === "Individual" ?
                                <li className="nav-item" onClick={this.onClickGiftCard}>
                                  <a className="nav-link" data-bs-toggle="pill" href="#menu2"
                                  >
                                    <img src={giftCardImg} alt="" />
                                    <p className="mb-0">Climate positive gift cards</p>
                                  </a>
                                </li>
                                :
                                <li className="nav-item">
                                  <a className="nav-link" data-bs-toggle="pill" href="#menu2"
                                  >
                                    <img src={giftCardImg} alt="" />
                                    <p className="mb-0">API's partner login</p>
                                  </a>
                                </li>
                            }
                          </ul>
                        </div>
                        <div className="tab-content ">
                          <div className="tab-pane container fade" id="home">
                            <div className="ct_login_form_cnt12 d-flex align-items-center justify-content-center">
                              <h2 className="ct_center_position">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" /></svg>
                                Please contact <br />EKOBON team </h2>
                            </div>  
                          </div>
                          <div className="tab-pane container active" id="menu1">
                            <div className="ct_login_form_cnt12">
                              <h5 className="mb-4">Login Here</h5>
                              <div className="login-indv-form-up-txt mb-4">
                                <p>New to Ekobon?</p>
                                {this.props.location.state === "Individual" ?
                                  <p>
                                    Sign up as an&nbsp;
                                <Link to={"/individual-signup"}>Individual</Link>
                                  </p>
                                  :
                                  <p>
                                    Sign up as an&nbsp;
                                  <Link to={"/business-signup"}>Business</Link>
                                  </p>
                                }
                              </div>
                              <Form
                                name="basic"
                                layout="vertical"
                                initialValues={{ remember: true }}
                                onFinish={this.onFinish}
                                autoComplete="off"
                                className="login-indv-form"
                              >

                                <div className="row">
                                  <div className="col-md-6">
                                    <Row className="">
                                      <p className="mb-0">Email</p>
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
                                      <Input size="large" placeholder="example@gmail.com" />
                                    </Form.Item>
                                  </div>
                                  <div className="col-md-6">
                                    <Row className="justify-content-between">
                                      <p className="mb-0">Password</p>
                                      <Link to={"/forgot-password"} className="greentxt">
                                        Forgot Password?
                       </Link>
                                    </Row>
                                    <Form.Item
                                      label=""
                                      name="password"
                                      rules={[
                                        {
                                          required: true,
                                          message: "Please input your password!",
                                        },
                                      ]}
                                    >
                                      <Input.Password size="large" placeholder="********" />
                                    </Form.Item>
                                  </div>

                                </div>
                                <Row className="indv-login-form-btn-sec">
                                  <Form.Item name="remember">
                                    <Checkbox>Keep me logged in</Checkbox>
                                  </Form.Item>
                                  <Form.Item>
                                    <Button
                                      className="carbon-idv-signin-btn"
                                      size="large"
                                      htmlType="submit"
                                    >
                                      Sign In
                         </Button>
                                  </Form.Item>
                                </Row>
                              </Form>
                              <div>
                                <div className="carbon-idv-signin-social-sec d-flex justify-content-between align-items-center">
                                  <hr />
                                  <span>Or Sign in Using</span>
                                  <hr />
                                </div>
                                <Row
                                  gutter={24}
                                  className="carbon-idv-signin-social-btn-sec justify-content-md-between ct_social_icon_g mt-3"
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
                                        Facebook <i className="fa-brands fa-facebook-f" />
                                      </button>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane container fade" id="menu2">
                            <div className="ct_login_form_cnt12">
                              <h5 className="mb-4">Login Here</h5>
                              {
                                this.props.location.state === "Individual" ?
                                  <div>
                                    <div className="login-indv-form-up-txt mb-4">
                                      <p>New to Ekobon?</p>
                                      {this.props.location.state === "Individual" &&
                                        <p>
                                          Sign up as an&nbsp;
                                <Link to={"/individual-signup"}>Individual</Link>
                                        </p>
                                      }
                                    </div>
                                    <Form
                                      name="basic"
                                      layout="vertical"
                                      initialValues={{ remember: true }}
                                      onFinish={this.onFinish}
                                      autoComplete="off"
                                      className="login-indv-form"
                                    >
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <Row className="">
                                            <p className="mb-0">Email</p>
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
                                            <Input size="large" placeholder="example@gmail.com" />
                                          </Form.Item>
                                        </div>
                                        <div className="col-lg-6">

                                          <Row className="justify-content-between">
                                            <p className="mb-0">Password</p>
                                            <Link to={"/forgot-password"} className="greentxt">
                                              Forgot Password?
                     </Link>
                                          </Row>
                                          <Form.Item
                                            label=""
                                            name="password"
                                            rules={[
                                              {
                                                required: true,
                                                message: "Please input your password!",
                                              },
                                            ]}
                                          >
                                            <Input.Password size="large" placeholder="********" />
                                          </Form.Item>
                                        </div>

                                      </div>
                                      <Row className="indv-login-form-btn-sec">
                                        <Form.Item name="remember">
                                          <Checkbox>Keep me logged in</Checkbox>
                                        </Form.Item>
                                        <Form.Item>
                                          <Button
                                            className="carbon-idv-signin-btn"
                                            size="large"
                                            htmlType="submit"
                                          >
                                            Sign In
                       </Button>
                                        </Form.Item>
                                      </Row>
                                    </Form>
                                    <div>
                                      <div className="carbon-idv-signin-social-sec d-flex justify-content-between align-items-center">
                                        <hr />
                                        <span>Or Sign in Using</span>
                                        <hr />
                                      </div>
                                      <Row
                                        gutter={24}
                                        className="carbon-idv-signin-social-btn-sec justify-content-md-between ct_social_icon_g mt-3"
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
                                              Facebook <i className="fa-brands fa-facebook-f" />
                                            </button>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                  :
                                  <div>
                                    <div className="login-indv-form-up-txt mb-4">
                                      <p>New to Ekobon?</p>
                                      <p>
                                        Sign up as an&nbsp;
                                       <a>Apis partner</a>
                                      </p>
                                    </div>
                                    <Form
                                      name="basic"
                                      layout="vertical"
                                      initialValues={{ remember: true }}
                                      onFinish={this.onHandlePartnerLogin}
                                      autoComplete="off"
                                      className="login-indv-form"
                                    >
                                      <div className="row">
                                        <Row className="">
                                          <p className="mb-0">Email</p>
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
                                          <Input size="large" placeholder="example@gmail.com" />
                                        </Form.Item>
                                        <Row className="justify-content-between">
                                          <p className="mb-0">Password</p>
                                        </Row>
                                        <Form.Item
                                          label=""
                                          name="password"
                                          rules={[
                                            {
                                              required: true,
                                              message: "Please input your password!",
                                            },
                                          ]}
                                        >
                                          <Input.Password size="large" placeholder="********" />
                                        </Form.Item>
                                      </div>
                                      <Row className="indv-login-form-btn-sec">
                                        <Form.Item name="remember">
                                          <Checkbox>Keep me logged in</Checkbox>
                                        </Form.Item>
                                        <Form.Item>
                                          <Button
                                            className="carbon-idv-signin-btn"
                                            size="large"
                                            htmlType="submit"
                                          >
                                            Sign In
                       </Button>
                                        </Form.Item>
                                      </Row>
                                    </Form>
                                  </div>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
        </div>
      </>
    );
  }
}

export default IndividualLoginWeb as React.ComponentType<any>;
        // Customizable Area End
