import React from "react";
import HeaderWeb from "../../../../components/src/Header/Header.web";
import FooterWeb from "../../../../components/src/Footer/Footer.web";
import {
  // AvtaarImg,
  FacebookImg,
  TwitterImg,
  // MountainBg,
  InstaImg,
  linkedinImg,
} from "../assets";
import { Row, Col, Tabs } from "antd";

import AboutUsController, { Props } from "./AboutUsController.web";
import { Link } from "react-router-dom";
import { constants } from "../../../../components/src/types";
import { deviceMode } from "../../../../components/src/CommonUtils";
export default class AboutUs extends AboutUsController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    // const { about_us, our_vision, our_mission } = this.state;
    const { meetTeamId } = this.state;
    const isMobile = deviceMode.isMobile;
    const aboutUsConstants = constants.AboutUs;

    return (
      <>
        <HeaderWeb />
        <div className="about-us-sec-climate-crisis">
          <div className="container">
            <div className="head">
              <h1>
                <div className="about-us-sec-header-text">
                  <span>
                    {isMobile
                      ? aboutUsConstants.ABOUT_US_HEADER1
                      : aboutUsConstants.ABOUT_US_HEADER7}
                  </span>
                  {aboutUsConstants.ABOUT_US_HEADER2}
                </div>
                {aboutUsConstants.ABOUT_US_HEADER3}
              </h1>
            </div>
            <div className="about-us-sec-climate-crisis-img my-2">
              <img
                src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/e1iwcmzmyltcn6lowp7n9z4uph5i/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22about-us-1img.jpg%22%3B%20filename%2A%3DUTF-8%27%27about-us-1img.jpg&response-content-type=image%2Fjpeg"
                alt="img"
              />
            </div>
            <div className="text mt-4 about-us-sec-texts">
              <p>
                <span>{aboutUsConstants.ABOUT_IMAGE_TEXT1}</span>
                <span>{aboutUsConstants.ABOUT_IMAGE_TEXT2}</span>
                <span>{aboutUsConstants.ABOUT_IMAGE_TEXT3}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="about-hate-climate-chng-sec">
          <div className="container">
            <Row gutter={16} className="about-us-climate-change-sec">
              <Col lg={10} className="about-us-climate-main-sec">
                <div className="about-hate-climate-chng-sec-img">
                  <img
                    src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/ts2m7iep1nseng1k36d4puogdt7i/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22about-us-2img.jpg%22%3B%20filename%2A%3DUTF-8%27%27about-us-2img.jpg&response-content-type=image%2Fjpeg"
                    alt="img"
                  />
                </div>
              </Col>
              <Col lg={14} className="about-us-climate-main-sec">
                <div className="about-hate-climate-chng-text-sec">
                  <div className="head">
                    <p>
                      <span>{aboutUsConstants.ABOUT_US_HEADER4}</span>
                      <span>{aboutUsConstants.ABOUT_US_HEADER5}</span>
                    </p>
                  </div>

                  <div>
                    <p className="head-green">
                      {aboutUsConstants.ABOUT_US_HEADER6}
                    </p>
                    <p className="text">
                      <div className="head-green-text">
                        <span>{aboutUsConstants.ABOUT_IMAGE_TEXT5}</span>
                        <span>{aboutUsConstants.ABOUT_IMAGE_TEXT6}</span>
                        <span>{aboutUsConstants.ABOUT_IMAGE_TEXT7}</span>
                      </div>
                      <div>
                        <span>{aboutUsConstants.ABOUT_IMAGE_TEXT8}</span>
                        <span>{aboutUsConstants.ABOUT_IMAGE_TEXT9}</span>
                      </div>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="eko-positive-sec">
          <div className="container">
            <div className="eko-positive-sec-img-bg">
              <p>
                We help you fund global <span>Eko-</span>positive projects to
                <br />
                balance your car<span>bon</span> footprint
              </p>
            </div>
          </div>
        </div>

        <div className="about-us-mission-vision-sec">
          <div className="container">
            <div>
              <div className="about-our-mission-sec">
                <div className="head">
                  <p>
                    <span>Our </span>
                    <span>Mission</span>
                  </p>
                </div>
                <div className="border-sec">
                  <hr />
                </div>
                <div className="text">
                  <p>
                    {aboutUsConstants.OUR_MISSION_TEXT1}
                    {aboutUsConstants.OUR_MISSION_TEXT2}
                    {isMobile ? null : <br />}
                    {aboutUsConstants.OUR_MISSION_TEXT3}
                  </p>
                </div>
              </div>
              <div className="about-our-vision-sec mt-2">
                <div className="text">
                  {isMobile ? (
                    <p>{aboutUsConstants.OUR_VISION_TEXT_NS}</p>
                  ) : (
                    <p>
                      {aboutUsConstants.OUR_VISION_TEXT1}
                      <br />
                      {aboutUsConstants.OUR_VISION_TEXT2}
                    </p>
                  )}
                </div>
                <div className="border-sec">
                  <hr />
                </div>
                <div className="head head-spacing">
                  <p>
                    <span>Our </span>
                    <span>Vision</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-us-meet-team-sec">
          <div className="container">
            <div className="head">
              <p>Meet the Team</p>
            </div>
            {isMobile && (
              <div>
                <div className="image-header">
                  <div>
                    <div
                      className={
                        meetTeamId === 1
                          ? "image-header-sec-active mb-2"
                          : "image-header-sec mb-2"
                      }
                    >
                      <img
                        src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/1vifngtxqqghsewzbk6exhi6qnzu/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Nikhil.jpeg%22%3B%20filename%2A%3DUTF-8%27%27Nikhil.jpeg&response-content-type=image%2Fjpeg"
                        style={{ height: "490px" }}
                        alt="img"
                        onClick={() => this.setState({ meetTeamId: 1 })}
                      />
                    </div>
                    <p
                      className={
                        meetTeamId === 1 ? "head image-header-sec-head" : "head"
                      }
                    >
                      Nikhil Jain
                    </p>
                  </div>
                  <div>
                    <div
                      className={
                        meetTeamId === 2
                          ? "image-header-sec-active mb-2"
                          : "image-header-sec mb-2"
                      }
                    >
                      <img
                        src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/hyf27u6ttx1z82cy5kelb87x8lvh/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Nirdesh.jpeg%22%3B%20filename%2A%3DUTF-8%27%27Nirdesh.jpeg&response-content-type=image%2Fjpeg"
                        style={{ height: "490px" }}
                        alt="img"
                        onClick={() => this.setState({ meetTeamId: 2 })}
                      />
                    </div>
                    <p
                      className={
                        meetTeamId === 2 ? "head image-header-sec-head" : "head"
                      }
                    >
                      Nirdesh Badjatya
                    </p>
                  </div>
                </div>
                <div>
                  {meetTeamId === 2 ? (
                    <Row className="about-us-meet-team-sec-box mt-5">
                      <Col lg={14} md={14}>
                        <div className="text-sec">
                          <div>
                            <p className="text1 text-sec-text1">
                              <span>{aboutUsConstants.MEET_TEEM_TEXT1}</span>
                              <span>{aboutUsConstants.MEET_TEEM_TEXT2}</span>
                            </p>
                          </div>
                          <div className="about-us-sec-polygon2" />
                          <div className="about-us-sec-text">
                            <p className="text2">
                              {aboutUsConstants.MEET_TEEM_TEXT3}
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  ) : (
                    <Row className="about-us-meet-team-sec-box">
                      <Col lg={14} md={14}>
                        <div className="text-sec">
                          <div>
                            <p className="text1 text-sec-text2">
                              <span>{aboutUsConstants.MEET_TEEM_TEXT4}</span>
                              <span>{aboutUsConstants.MEET_TEEM_TEXT5}</span>
                            </p>
                          </div>
                          <div className="about-us-sec-polygon1" />
                          <div className="about-us-sec-text">
                            <p className="team_p-t">
                              {aboutUsConstants.MEET_TEEM_TEXT6}
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  )}
                </div>
              </div>
            )}
            {!isMobile && (
              <div>
                <Row className="about-us-meet-team-sec-box">
                  <Col lg={10} md={10}>
                    <div className="img-sec">
                      <img
                        src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/1vifngtxqqghsewzbk6exhi6qnzu/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Nikhil.jpeg%22%3B%20filename%2A%3DUTF-8%27%27Nikhil.jpeg&response-content-type=image%2Fjpeg"
                        style={{ height: "490px" }}
                        alt="img"
                      />
                    </div>
                  </Col>
                  <Col lg={14} md={14}>
                    <div className="text-sec">
                      <div>
                        <p className="head">Nikhil Jain</p>
                        <p className="text1">
                          {aboutUsConstants.MEET_TEEM_TEXT4}{" "}
                          {aboutUsConstants.MEET_TEEM_TEXT5}
                        </p>
                      </div>
                      <div>
                        <p className="team_p-t">
                          "{aboutUsConstants.MEET_TEEM_TEXT6}
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row className="about-us-meet-team-sec-box mt-5">
                  <Col lg={10} md={10}>
                    <div className="img-sec">
                      <img
                        src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/hyf27u6ttx1z82cy5kelb87x8lvh/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Nirdesh.jpeg%22%3B%20filename%2A%3DUTF-8%27%27Nirdesh.jpeg&response-content-type=image%2Fjpeg"
                        alt="img"
                      />
                    </div>
                  </Col>
                  <Col lg={14} md={14}>
                    <div className="text-sec">
                      <div>
                        <p className="head">Nirdesh Badjatya</p>
                        <p className="text1">
                          {aboutUsConstants.MEET_TEEM_TEXT1}
                          {aboutUsConstants.MEET_TEEM_TEXT2}
                        </p>
                      </div>

                      <div>
                        <p className="text2">
                          {aboutUsConstants.MEET_TEEM_TEXT3}
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </div>
        </div>

        <div className="about-us-abstract-sec">
          <div className="container">
            <Row gutter={32}>
              <Col lg={12} md={12} className="about-full-width">
                <div className="about-bottom-img-sec">
                  <div className="about-bottom-img-sec-overlay">
                    <div>
                      <p className="head">
                        {aboutUsConstants.BOTTOM_SEC_TEXT1} <br />
                        {aboutUsConstants.BOTTOM_SEC_TEXT2}
                      </p>
                      <p className="text">
                        {aboutUsConstants.BOTTOM_SEC_TEXT3} <br />
                        {aboutUsConstants.BOTTOM_SEC_TEXT4}
                      </p>
                    </div>
                    <div className="about-bottom-img-sec-social">
                      <div className="about-bottom-img-sec-social-fb">
                        <a
                          target="_blank"
                          href="https://www.facebook.com/Ekobon-101865165892125/"
                        >
                          <img src={FacebookImg} alt="img" />
                        </a>
                      </div>
                      <div className="about-bottom-img-sec-social-insta mx-2">
                        <a
                          target="_blank"
                          href="https://instagram.com/ekobon_green?igshid=YmMyMTA2M2Y="
                        >
                          <img src={InstaImg} alt="img" />
                        </a>
                      </div>
                      <div className="about-bottom-img-sec-social-twitter mx-2">
                        <a>
                          <a
                            target="_blank"
                            href="https://twitter.com/ekobon_green?t=9W_3NYvKFEUChTbypbbIPA&s=08"
                          >
                            <img src={TwitterImg} alt="img" />
                          </a>
                        </a>
                      </div>
                      <div className="about-bottom-img-sec-social-linked">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/company/ekobon/"
                        >
                          <img src={linkedinImg} alt="img" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={12} md={12} className="about-full-width">
                <div className="about-bottom-img-sec2">
                  <div className="about-bottom-img-sec2-overlay">
                    <div>
                      <p className="head">
                        {aboutUsConstants.BOTTOM_SEC_TEXT5}
                        <br />
                        {aboutUsConstants.BOTTOM_SEC_TEXT6}
                      </p>
                      <p className="text">
                        {aboutUsConstants.BOTTOM_SEC_TEXT7} <br />
                        {aboutUsConstants.BOTTOM_SEC_TEXT8}
                      </p>
                    </div>
                    <div className="about-bottom-img-sec-btn">
                      <Link to="/">
                        <button>{aboutUsConstants.BOTTOM_SEC_TEXT9}</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <FooterWeb />
      </>
    );
  }
}
