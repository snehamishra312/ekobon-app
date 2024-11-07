import React from "react";
import { Row, Col, Divider } from "antd";
import {
  offsetBanner,
  vision4,
  vision1,
  vision2,
  vision3,
  individual,
  organization,
  GreenArrow,
  BlueArrow,
  EARTH,
  WINDMILL,
  RECYCLE,
  SAVEICON,
  RENEWABLEENERGY,
} from "./assets";
import HeaderWeb from "../../../components/src/Header/Header.web";
import FooterWeb from "../../../components/src/Footer/Footer.web";
import "./OurApproch.web.css";
import { constants } from "../../../components/src/types";
import { deviceMode } from "../../../components/src/CommonUtils";

const OurApproch = () => {
  const {
    HEADER_TEXT1,
    HEADER_TEXT2,
    HEADER_TEXT3,
    HEADER_TEXT4,
    SUB_HEADER,
    OFFSET_SOLUTION_HEADER1,
    OFFSET_SOLUTION_HEADER2,
    OFFSET_SOLUTION_HEADER3,
    OFFSET_SOLUTION_HEADER4,
    ORGANISATION_HEADER,
    ORGANISATION_TEXT,
    INDIVIDUAL_HEADER,
    INDIVIDUAL_TEXT,
    OFFSET_WORKS_HEADER1,
    OFFSET_WORKS_HEADER2,
    OFFSET_WORKS_SUB_HEADER1,
    OFFSET_WORKS_SUB_HEADER2,
    OFFSET_WORKS_TEXT1,
    OFFSET_WORKS_TEXT2,
    OFFSET_WORKS_TEXT3,
    OFFSET_WORKS_TEXT4,
    OFFSET_WORKS_TEXT5,
    OFFSET_WORKS_TEXT6,
    OFFSET_WORKS_TEXT7,
    OFFSET_WORKS_TEXT8,
    TACKLE_CLIMATE_HEADER1,
    TACKLE_CLIMATE_HEADER2,
    TACKLE_CLIMATE_HEADER3,
    TACKLE_CLIMATE_TEXT1,
    TACKLE_CLIMATE_TEXT2,
    CHOOSING_EKOBON_HEADER1,
    CHOOSING_EKOBON_HEADER2,
    CHOOSING_EKOBON_HEADER3,
    CHOOSING_EKOBON_HEADER4,
    CHOOSING_EKOBON_TEXT1,
    CHOOSING_EKOBON_TEXT2,
    CHOOSING_EKOBON_TEXT3,
    CHOOSING_EKOBON_TEXT4,
  } = constants.OurApproch;
  const isMobile = deviceMode.isMobile;
  return (
    <>
      <HeaderWeb />
      <div className="our-approach-main-sec">
        <div>
          <div className="our-approach-main-sec-head our-approach-main-sec-head-ns">
            <h1 className="text-uppercase">
              {HEADER_TEXT1} <br /> {HEADER_TEXT2}
              <span className="climate_change">{HEADER_TEXT3}</span>
              <br /> {HEADER_TEXT4}
            </h1>
          </div>
          <div className="our-approach-main-sec-text">
            <p>{SUB_HEADER}</p>
          </div>
        </div>
      </div>
      <div className="carbon-app-reduce-emissions carbon-app-reduce-emissions-main">
        <div className="container">
          <div className="carbon-app-reduce-emissions-head">
            <h3 className="text-uppercase">
              <div>{OFFSET_SOLUTION_HEADER1}</div>
              <div>
                {OFFSET_SOLUTION_HEADER2}
                <span>{OFFSET_SOLUTION_HEADER3}</span>
                {OFFSET_SOLUTION_HEADER4}
              </div>
            </h3>
          </div>
          <div className="carbon-app-reduce-emissions-tabs mt-5">
            <Row gutter={32} className="justify-content-center">
              <Col lg={11} md={11} className="carbon-approach-emission-sec">
                <div>
                  <Row gutter={32} className="padding-b50">
                    <Col className="carbon-approach-emission-sec">
                      <div className="carbon_approach_emission">
                        <div className="carbon-setting-imgs">
                          <img src={organization} alt="img" className="w-100" />
                          <p className="label">{ORGANISATION_HEADER}</p>
                        </div>
                        <p className="description">{ORGANISATION_TEXT}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="carbon-approach-emission-blocks">
                  <img
                    src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/bux2otgx5n4x6we50hd0j01ud7ni/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Business_tab.jpg%22%3B%20filename%2A%3DUTF-8%27%27Business_tab.jpg&response-content-type=image%2Fjpeg"
                    className="w-100"
                    alt="img"
                  />
                </div>
              </Col>
              <div className="hr_col" />
              <Col lg={11} md={11} className="carbon-approach-emission-sec">
                <div>
                  <Row gutter={32} className=" padding-b50">
                    <Col className="carbon-approach-emission-sec">
                      <div className="carbon_approach_emission">
                        <div className="carbon-setting-imgs">
                          <img src={individual} alt="img" className="w-100" />
                          <p className="label">{INDIVIDUAL_HEADER}</p>
                        </div>
                        <p className="description">{INDIVIDUAL_TEXT}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="carbon-approach-emission-blocks">
                  <img
                    src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/cp23fhrionhyceaox71grgnfxhoh/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22indvOffImg.jpg%22%3B%20filename%2A%3DUTF-8%27%27indvOffImg.jpg&response-content-type=image%2Fjpeg"
                    className="w-100"
                    alt="img"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="our-approach-carbon-offsetting-works">
        <div className="container">
          {isMobile && (
            <Row>
              <Col lg={24} md={24} xs={24}>
                <div className="head text-center approach-text-center">
                  <p>
                    {OFFSET_WORKS_HEADER1}
                    <span>{OFFSET_WORKS_HEADER2}</span>
                  </p>
                </div>
              </Col>
              <Col lg={10} md={9}>
                <div className="para">{OFFSET_WORKS_SUB_HEADER1}</div>
                <div className="para2 carbon-offsetting-work-block-text">
                  <ul>
                    <li>{OFFSET_WORKS_SUB_HEADER2}</li>
                  </ul>
                </div>
              </Col>
              <Col lg={10} md={9}>
                <div className="carbon-offsetting-work-block">
                  <div className="bgImg">
                    <img src={RECYCLE} alt="img" />
                  </div>
                  <div className="carbon-offsetting-work-block-text-sec">
                    <p className="carbon-offsetting-work-block-head">
                      {OFFSET_WORKS_TEXT2}
                    </p>
                    <div className="our-approach-devider">
                      <Divider />
                    </div>
                    <div className="carbon-offsetting-work-block-text">
                      <ul>
                        <li>{OFFSET_WORKS_TEXT3}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="sideArrowDown carbon-offsetting-work-arrow">
                  <img src={GreenArrow} alt="img" />
                </div>
              </Col>
              <Col lg={10} md={9}>
                <div className="carbon-offsetting-work-block">
                  <div className="bgImg">
                    <img src={WINDMILL} alt="img" />
                  </div>
                  <p className="carbon-offsetting-work-block-head">
                    {OFFSET_WORKS_TEXT1}
                  </p>
                </div>
                <div className="sideArrowDown carbon-offsetting-work-arrow">
                  <img src={GreenArrow} alt="img" />
                </div>
              </Col>
              <Col lg={10} md={9}>
                <div className="carbon-offsetting-work-block">
                  <div className="bgImg">
                    <img src={SAVEICON} alt="img" />
                  </div>
                  <p className="carbon-offsetting-work-block-head">
                    {OFFSET_WORKS_TEXT4}
                  </p>
                </div>
                <div className="sideArrowDown sideArrowDown-block">
                  <img src={GreenArrow} alt="img" />
                </div>
              </Col>
              <Col lg={10} md={9}>
                <div className="carbon-offsetting-work-block">
                  <div className="bgImg">
                    <img src={RENEWABLEENERGY} alt="img" />
                  </div>
                  <div className="carbon-offsetting-work-block-text-sec">
                    <p className="carbon-offsetting-work-block-head">
                      {OFFSET_WORKS_TEXT7}
                    </p>
                    <div className="our-approach-devider">
                      <Divider />
                    </div>
                    <p className="carbon-offsetting-work-block-text">
                      <ul>
                        <li>{OFFSET_WORKS_TEXT8}</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className="sideArrowDown carbon-offsetting-work-arrow">
                  <img src={GreenArrow} alt="img" />
                </div>
              </Col>
              <Col lg={10} md={9}>
                <div className="carbon-offsetting-work-block">
                  <div className="bgImg">
                    <img src={EARTH} alt="img" />
                  </div>
                  <div className="carbon-offsetting-work-block-text-sec">
                    <p className="carbon-offsetting-work-block-head">
                      {OFFSET_WORKS_TEXT5}
                    </p>
                    <div className="our-approach-devider">
                      <Divider />
                    </div>
                    <p className="carbon-offsetting-work-block-text">
                      <ul>
                        <li>{OFFSET_WORKS_TEXT6}</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          )}
          {!isMobile && (
            <div>
              <Row gutter={32}>
                <Col lg={24} md={24} xs={24}>
                  <div className="head text-center approach-text-center">
                    <p>
                      {OFFSET_WORKS_HEADER1}
                      <br />
                      <span>{OFFSET_WORKS_HEADER2}</span>
                    </p>
                  </div>
                </Col>
                <Col lg={10} md={9}>
                  <div className="para">{OFFSET_WORKS_SUB_HEADER1}</div>
                  <div className="para2 carbon-offsetting-work-block-text">
                    <ul>
                      <li>{OFFSET_WORKS_SUB_HEADER2}</li>
                    </ul>
                  </div>
                </Col>
                <Col
                  lg={4}
                  md={6}
                  className="carbon-offsetting-work-block-arrow"
                >
                  <div className="sideArrow">
                    <img src={GreenArrow} alt="img" width={125} />
                  </div>
                </Col>
                <Col lg={10} md={9}>
                  <div className="carbon-offsetting-work-block">
                    <div className="bgImg">
                      <img src={WINDMILL} alt="img" />
                    </div>
                    <p className="carbon-offsetting-work-block-head">
                      {OFFSET_WORKS_TEXT1}
                    </p>
                  </div>
                </Col>
              </Row>
              <Row gutter={32}>
                <Col
                  lg={10}
                  md={9}
                  className="carbon-offsetting-work-block-arrow"
                >
                  <div className="sideArrowDown sideArrowDown-blue">
                    <img src={BlueArrow} alt="img" height={125} />
                  </div>
                </Col>
                <Col lg={4} md={6} />
                <Col lg={10} md={9} xs={24}>
                  <div className="sideArrowDown sideArrowDown-green">
                    <img src={GreenArrow} alt="img" />
                  </div>
                </Col>
              </Row>

              <Row gutter={32}>
                <Col lg={10} md={9}>
                  <div className="carbon-offsetting-work-block">
                    <div className="bgImg">
                      <img src={RECYCLE} alt="img" />
                    </div>
                    <div className="carbon-offsetting-work-block-text-sec">
                      <p className="carbon-offsetting-work-block-head">
                        {OFFSET_WORKS_TEXT2}
                      </p>
                      <div className="our-approach-devider">
                        <Divider />
                      </div>
                      <div className="carbon-offsetting-work-block-text">
                        <ul>
                          <li>{OFFSET_WORKS_TEXT3}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="sideArrowDown carbon-offsetting-work-block-arrow sideArrowDown-blue">
                    <img src={BlueArrow} alt="img" height={125} />
                  </div>
                  <div className="sideArrowDown carbon-offsetting-work-arrow sideArrowDown-green">
                    <img src={GreenArrow} alt="img" />
                  </div>
                </Col>
                <Col lg={4} md={6} />
                <Col lg={10} md={9}>
                  <div className="carbon-offsetting-work-block">
                    <div className="bgImg">
                      <img src={SAVEICON} alt="img" />
                    </div>
                    <p className="carbon-offsetting-work-block-head">
                      {OFFSET_WORKS_TEXT4}
                    </p>
                  </div>
                  <div className="sideArrowDown sideArrowDown-block sideArrowDown-green">
                    <img src={GreenArrow} alt="img" />
                  </div>
                </Col>
              </Row>
              <Row gutter={32}>
                <Col lg={10} md={9}>
                  <div className="carbon-offsetting-work-block">
                    <div className="bgImg">
                      <img src={EARTH} alt="img" />
                    </div>
                    <div className="carbon-offsetting-work-block-text-sec">
                      <p className="carbon-offsetting-work-block-head">
                        {OFFSET_WORKS_TEXT5}
                      </p>
                      <div className="our-approach-devider">
                        <Divider />
                      </div>
                      <p className="carbon-offsetting-work-block-text">
                        <ul>
                          <li>{OFFSET_WORKS_TEXT6}</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} xs={24}>
                  <div className="sideArrow carbon-offsetting-work-block-arrow sideArrow-green-image">
                    <img src={GreenArrow} alt="img" width={125} />
                  </div>
                  <div className="sideArrowDown carbon-offsetting-work-arrow sideArrowDown-green">
                    <img src={GreenArrow} alt="img" />
                  </div>
                </Col>
                <Col lg={10} md={9}>
                  <div className="carbon-offsetting-work-block">
                    <div className="bgImg">
                      <img src={RENEWABLEENERGY} alt="img" />
                    </div>
                    <div className="carbon-offsetting-work-block-text-sec">
                      <p className="carbon-offsetting-work-block-head">
                        {OFFSET_WORKS_TEXT7}
                      </p>
                      <div className="our-approach-devider">
                        <Divider />
                      </div>
                      <p className="carbon-offsetting-work-block-text">
                        <ul>
                          <li>{OFFSET_WORKS_TEXT8}</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </div>
      </div>

      <div className="carbon-climate-chng-sec">
        <div className="container">
          <Row>
            <Col lg={18} md={18}>
              <div className="tackle-climate-change-part">
                <div className="carbon-climate-inner-part-sec">
                  <p className="head text-uppercase">
                    {TACKLE_CLIMATE_HEADER1}
                    <span>
                      {TACKLE_CLIMATE_HEADER2} <br /> {TACKLE_CLIMATE_HEADER3}
                    </span>
                  </p>
                  <p className="details_para">
                    {TACKLE_CLIMATE_TEXT1}
                    <br />
                    {TACKLE_CLIMATE_TEXT2}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* <div className="transparency-at-our-code-sec transparency-at-our-code-sec-approach">
        <div className="container">
          <div className="transparency-at-our-code-sec-head transparency-at-our-code-sec-head-main">
            <p>
              {CHOOSING_EKOBON_HEADER1}
              <span>
                {CHOOSING_EKOBON_HEADER2} <br />
                {CHOOSING_EKOBON_HEADER3}
              </span>
              {CHOOSING_EKOBON_HEADER4}
            </p>
          </div>

          <div>
            <Row>
              <Col lg={12} md={12}>
                <div className="d-flex align-items-end border-css-custom approach-us-end-sec approach-us-end-sec-block1">
                  <div className="transparency-at-our-code-sec-block approach-us-end-sec-block-text">
                    <div className="appoach_img_sec approach-img-sec">
                      <img src={vision1} alt="img" />
                      <p>{CHOOSING_EKOBON_TEXT1}</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-end border-css-custom approach-us-end-sec approach-us-end-sec-block2">
                  <div className="transparency-at-our-code-sec-block2">
                    <div className="appoach_img_sec approach-img-sec">
                      <img src={vision4} alt="img" />
                      <p>{CHOOSING_EKOBON_TEXT2}</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={12} md={12}>
                <div className="d-flex align-items-end border-css-custom approach-us-end-sec approach-us-end-sec-block3">
                  <div className="transparency-at-our-code-sec-block3 approach-us-end-sec-block-text">
                    <div className="appoach_img_sec approach-img-sec">
                      <img src={vision2} alt="img" />
                      <p>{CHOOSING_EKOBON_TEXT3}</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-end border-css-custom approach-us-end-sec approach-us-end-sec-block4">
                  <div className="transparency-at-our-code-sec-block4 approach-us-end-sec-block-text">
                    <div className="appoach_img_sec approach-img-sec">
                      <img src={vision3} alt="img" />
                      <p>C{CHOOSING_EKOBON_TEXT4}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div> */}
      <FooterWeb />
    </>
  );
};

export default OurApproch;
