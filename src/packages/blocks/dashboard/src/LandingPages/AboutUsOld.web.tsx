import React from "react";
import HeaderWeb from "../../../../components/src/Header/Header.web";
import FooterWeb from "../../../../components/src/Footer/Footer.web";
import { PROJECTCLIMATEWIND, Abou_mission, Abou_vision } from "../assets";
import { Row, Col } from "antd";

import AboutUsController, { Props } from "./AboutUsController.web";
export default class AboutUs extends AboutUsController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { about_us, our_vision, our_mission } = this.state;
    return (
      <>
        <HeaderWeb />

        <div className="indivi_about_us_content">
          <div className="container">
            <Row gutter={16}>
              <Col lg={12} md={12}>
                <div className="indivi_about_us">
                  <label className="text_bold mb-4">
                    About <span className="normal">Us</span>
                  </label>
                  <div className="indivi_about_us_data">
                    <p>{about_us}</p>
                  </div>
                </div>
              </Col>
              <Col lg={12} md={12}>
                <div className="indivi_about_us">
                  <img src={PROJECTCLIMATEWIND} alt="img" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="about_mission_vision_bgc mb-5">
          <div className="indivi_about_us_mission_vision">
            <Row>
              <Col lg={12} md={12} className="about-mis-vis-border">
                <div>
                  <Row justify="space-between">
                    <Col>
                      <div className="mt-5 about-us-mission-sec">
                        <label className="mission_vision_normal">
                          Our
                          <span className="mission_vision_bold">Mission</span>
                        </label>
                        <p className="mission_Vision_content">{our_vision}</p>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex ">
                        <div className="about-us-our-miss-img mt-5">
                          <img src={Abou_mission} alt="img" />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={12} md={12}>
                <Row justify="space-between">
                  <Col>
                    <div className="mt-5 about-us-vission-sec">
                      <label className="mission_vision_normal">
                        Our <span className="mission_vision_bold">Vision</span>
                      </label>
                      <p className="mission_Vision_content">{our_mission}</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="about-us-our-vis-img  mt-5">
                      <img src={Abou_vision} alt="img" />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>

        <FooterWeb />
      </>
    );
  }
}
