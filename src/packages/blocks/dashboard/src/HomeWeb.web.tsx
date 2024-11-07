import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Tabs,
  // Collapse, Button
} from "antd";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import { Link as Links } from "react-scroll";
import HeaderWeb from "../../../components/src/Header/Header.web";
import FooterWeb from "../../../components/src/Footer/Footer.web";
import { useMediaQuery } from 'react-responsive';

import {
  partnerCarousel1,
  partnerCarousel2,
  partnerCarousel3,
  bannerImg,
  offsetImg,
  plantImg,
  BusinessCar,
  NextStep1,
  NextStep2,
  NextStep3,
  NextStep4,
  NextStep5,
  NextStep6,
  climateAction1,
  climateAction2,
  climateAction3,
  climateAction4,
  vision1,
  vision2,
  vision3,
  vision4,
  BusinessIcon,
  IndvIcon,
  projectBlueCarbon,
  projectCarbonRemoval,
  projectCommunity1,
  projectEnergy,
  projectNatureBased,
  projectRenewable,
  climatePartner,
  sayTrees,
  acadia
} from "./assets";

import { carbonFootprintImageUrl, facilitateImageUrl, investmentImageUrl, offsetImageUrl, onTimeOffsetImageUrl, plantImageUrl, projectImageUrl } from "./constantsUrls";

import { SUSTAINABLE, SOLUTIONS, SIMPLIFIED, TAKE_CLIMATE, EKOBON_IS_A, FOR_INDIVIDUALS, FOR_BUSINESS, OUR_PARTNERS, REDUCE_YOUR, CARBON_EMISSIONS, CALCULATE_AND_OFFSET, YOUR_CARBON, FOOTPRINT, CALCULATE_AND, CARBON_FOOTPRINT, PLANT_A_TREE, CONTRIBUTE, GREENER, PLANT_GREENER, TO_THE, ONETIME_OFFSETS, CALCULATE_AND_OFFSETS, YOUR_ORGANISATION, CARBON_FOOTPRINT_FOR, SINGLE_TIME, CALCULATE, CARBON, SUBSCRIPTION, OFFSETS, TAKE_CARBON, FITS_YOUR, TAKE, PACKAGE_WHICH, YOUR_BUSINESS, OPERATIONS, WHY_CLIMATE_ACTION_SHOULD_BE, YOUR_NEXT_STEP, CLIMATE_CHANGE, UNLESS_EMISSIONS, SOURCE, MELTING, BIODIVERSITY, INTENSE, LONGER, CORAL, HIGH, CLIMATE_ACTION, IS_NOT, KNOW_YOUR, OUR_TOOL, BROWSE, KNOW_WHERE, DECIDE, EKOBON_ALLOWS, STAY_INFORMED, YOU_GET, TRANSPARENCY, AT_OUR, CLIMATE_ACTION_, IN_OUR, OUR_PROJECTS, PROJECT_LOCATION, DETAILS, PROJECT_COMPLETION, RECEIPTS, OUR_PROJECTS_FOR, CLIMATE_OFFSETTING, WE_INVEST, RENEWABLE, FOSSIL, TREE, NATURE, EKOBON_APPROACH, LEARN_ABOUT, EVERY_STEP, GET_STARTED, EKOBON_IS_A_, WAY, SIGNIFICANT, WONDERING, DIFFERENCE, _CLIMATE_ACTION_, YOUR_PARTNER_FOR, APART_FROM, BLUE_CARBON, ADVANCED, CARBON_REMOVAL, COMMUNITY, WHILE_WORKING, THERE_IS, FUEL, ENERGY, NATURE_HAS, FOR_A, CLIMATE_CHANGE_NS } from "./constantsString";

const { TabPane } = Tabs;

const HomeWeb = (props: any) => {
  const [climateActionNo, setClimateActionNo] = useState("1");
  function callback(key: any) {
    console.log(key);
  }
  useEffect(() => {
    redirectToFromAboutUs();
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

  const redirectToFromAboutUs = () => {
    if (window.location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  };

  const ClimateActionClick = (tab: string) => {
    setClimateActionNo(tab);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1024, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 3 },
    { width: 1750, itemsToShow: 3 },
  ];

  const partnersCacrouselData = !isMobile ? [
    { image: partnerCarousel1, id: 1 },
    { image: partnerCarousel2, id: 2 },
    { image: partnerCarousel3, id: 3 },
  ] : [
    { image: climatePartner, id: 1 },
    { image: sayTrees, id: 2 },
    { image: acadia, id: 3 },
  ];

  let loginDetails: any = localStorage.getItem("UserDetails");
  const loginFlag = JSON.parse(loginDetails)?.type;

  return (
    <>
      <HeaderWeb />
      <div id="homeupper" className="carbon-app-Banner">
        <div className="container">
          <Row className="carbon-app-bann-row">
            <Col lg={12} md={12} sm={24} xs={24}>
              <div className="mt-5">
                <h1>
                  {SUSTAINABLE} <br />
                  <span>{SOLUTIONS}</span>
                  <br />
                  {SIMPLIFIED}
                </h1>
                <p>
                  {TAKE_CLIMATE}
                </p>
                <p className="font-wg-500 color-black">
                  {EKOBON_IS_A}
                </p>
                <Row
                  gutter={32}
                  className="carbon-app-bann-btn-sec home_section"
                >
                  <Col
                    className="carbon-app-bann-green-btn"
                  >
                    <div
                      className="for-indv-text-home-btn"
                    >

                      <button
                        onClick={() => {
                          if (loginFlag === "Individual") {
                            props?.history.push({
                              pathname: "/individual/dashboard",
                              state: "Individual"
                            })
                          }
                          else {
                            props?.history.push({
                              pathname: "/login",
                              state: "Individual"
                            })
                          }
                        }}
                      >
                        <img src={IndvIcon} /> {FOR_INDIVIDUALS}
                      </button>
                    </div>
                  </Col>
                  <Col
                    className="carbon-app-bann-blue-btn"
                  >
                    <div
                      className="for-buss-text-home-btn"
                    >
                      <button
                        onClick={() => {
                          if (loginFlag === "Bussiness") {
                            props?.history.push({
                              pathname: "/business/dashboard",
                              state: "Business"
                            })
                          }
                          else {
                            props?.history.push({
                              pathname: "/login",
                              state: "Bussiness"
                            })
                          }

                        }}
                      >
                        <img src={BusinessIcon} /> {FOR_BUSINESS}
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <div className="carbon-banner-img">
                <img src={bannerImg} alt="img" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={24} md={24} sm={24} xs={24}>
              <div className="carbon-app-reduce-emissions-head">
                <h3>
                  <span className="partners-head">{OUR_PARTNERS}</span>
                </h3>
              </div>
              <div
                className="partnership-carousel"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0px 0",
                }}
              >
                <Carousel
                  breakPoints={breakPoints}
                  isRTL={false}
                  showArrows={true}
                  className="carousel-climate-project"
                >
                  {partnersCacrouselData.map((carouselData) => {
                    return (
                      <div className="carsousal-items" key={carouselData.id}>
                        <img
                          className={carouselData.id === 1 ? "carsousal-items-logo-image1 ct_object_cover" : carouselData.id === 2 ? "carsousal-items-logo-image2-image3 ct_object_cover" : "carsousal-items-logo-image3 ct_object_cover"}
                          src={carouselData.image}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="carbon-app-reduce-emissions">
        <div className="container">
          <div className="carbon-app-reduce-emissions-head">
            <h3>
              {REDUCE_YOUR} <span>{CARBON_EMISSIONS}</span>
            </h3>
          </div>
          <div className="carbon-app-reduce-emissions-tabs-new">
            <Tabs type="card" defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Individual" key="1">
                <Row gutter={32} className="justify-content-center">
                  <Col lg={11} md={11} className="ct_card_flex_div">
                    <div>
                      <Row
                        gutter={32}
                        className="justify-content-evenly padding-b50"
                      >
                        <Col>
                          <div className="carbon_emission_img">
                            <img src={offsetImg} className="w-100" />
                          </div>
                        </Col>
                        <Col>
                          <div className="carbon_emission ">
                            <p className="label">Offset</p>
                            {isMobile && <p className="description">
                              {CALCULATE_AND_OFFSET}<br />
                              {YOUR_CARBON}<br />
                              {FOOTPRINT}
                            </p>}
                            {!isMobile && <p className="description">
                              {CALCULATE_AND}<br />
                              {CARBON_FOOTPRINT}
                            </p>}
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <img
                        src={offsetImageUrl}
                        className="w-100"
                      />
                    </div>
                  </Col>
                  <div className="hr_col" />
                  <Col lg={11} md={11} className="ct_card_flex_div">
                    <div>
                      <Row
                        gutter={32}
                        className="justify-content-evenly padding-b50"
                      >
                        <Col>
                          <div className="carbon_emission_img">
                            <img src={plantImg} className="w-100" />
                          </div>
                        </Col>
                        <Col>
                          <div className="carbon_emission">
                            <p className="label">Plant Trees</p>
                            {isMobile && <p className="description">
                              {PLANT_A_TREE}<br />
                              {CONTRIBUTE}<br />
                              {GREENER}
                            </p>}
                            {!isMobile && <p className="description">
                              {PLANT_GREENER}<br />
                              {TO_THE}
                            </p>}
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <img
                        src={plantImageUrl}
                        className="w-100"
                      />
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Business" key="2">
                <Row gutter={32} className="justify-content-center">
                  <Col lg={11} md={11} className="ct_card_flex_div">
                    <Row
                      gutter={32}
                      className={!isMobile ? "padding-b50 justify_space_evenly" : "justify-content-evenly padding-b50"}
                    >
                      <Col>
                        <div className="carbon_emission_img">
                          <img src={offsetImg} className="w-100" />
                        </div>
                      </Col>
                      <Col>
                        <div className="carbon_emission">
                          <p className="label">{ONETIME_OFFSETS}</p>
                          {isMobile && <p className="description">
                            {CALCULATE_AND_OFFSETS}<br />
                            {YOUR_ORGANISATION}<br />
                            {CARBON_FOOTPRINT_FOR}<br />
                            {SINGLE_TIME}
                          </p>}
                          {!isMobile && <p className="description">
                            {CALCULATE}<br />
                            {CARBON}<br />
                            {FOR_A}
                          </p>}
                        </div>
                      </Col>
                    </Row>

                    <div>
                      <img
                        src={onTimeOffsetImageUrl}
                        alt="img"
                        className="w-100"
                      />
                    </div>
                  </Col>
                  <div className="hr_col" />
                  <Col lg={11} md={11} className="ct_card_flex_div">
                    <Row
                      gutter={32}
                      className={!isMobile ? "padding-b50 justify_space_evenly" : "justify-content-evenly padding-b50"}
                    >
                      <Col>
                        <div className="carbon_emission_img">
                          <img src={offsetImg} className="w-100" />
                        </div>
                      </Col>
                      <Col>
                        <div className="carbon_emission ">
                          {isMobile && <p className="label">{SUBSCRIPTION} <br />{OFFSETS}</p>}
                          {!isMobile && <p className="label">{SUBSCRIPTION}{OFFSETS}</p>}
                          {!isMobile && <p className="description">
                            {TAKE_CARBON}<br />
                            {FITS_YOUR}
                          </p>}
                          {isMobile && <p className="description">
                            {TAKE}<br />
                            {PACKAGE_WHICH}<br />
                            {YOUR_BUSINESS}<br />
                            {OPERATIONS}
                          </p>}
                        </div>
                      </Col>
                    </Row>

                    <div>
                      <img src={BusinessCar} alt="img" className="w-100" />
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="why-climate-change-sec py-5">
        <div className="container">
          <div className="why-climate-change-sec-head mb-4">
            <p>
              {WHY_CLIMATE_ACTION_SHOULD_BE}
              <br />
              <span>{YOUR_NEXT_STEP}</span>
            </p>
          </div>
          <div style={{ textAlign: "center" }} className="why-climate-change-sec-text mb-4 text-align-container-climate-ns">
            <p className="text-align-climate-ns">
              {/* {CLIMATE_CHANGE_NS} */}
              {CLIMATE_CHANGE} <br />
              {UNLESS_EMISSIONS}
              { /* <span>{SOURCE}</span> */}
            </p>
          </div>
          {
            isMobile ?
              <div>
                <section className="climate-mobile-container ct_why_climate_mob">
                  <p climate-mobile-not-even-text>Melting glaciers and sea level rise</p>
                  <p className="climate-mobile-even-text">Marine ecosystem collapse</p>
                  <p climate-mobile-not-even-text>Intense heat waves and frequent wildfires</p>
                  <p className="climate-mobile-even-text">Coral reefs disappear</p>
                  <p climate-mobile-not-even-text>Longer peroids of droughts</p>
                  <p className="climate-mobile-even-text">High level of food Insecure </p>
                </section>
              </div>
              : <Row className="why_climate_center ct_why_climate" gutter={64}>
                <Col lg={8} md={8}>
                  <div className="why-climate-change-sec-in why-climate-change-sec-in-padding-ns">
                    {isMobile ? null : <img src={NextStep1} />}
                    <p className="text">
                      {MELTING}
                    </p>
                  </div>
                </Col>
                <Col lg={8} md={8}>
                  <div className="why-climate-change-sec-in why-climate-change-sec-in-padding-ns">
                    {isMobile ? null : <img src={NextStep2} />}
                    <p className="text">
                      {BIODIVERSITY}
                    </p>
                  </div>
                </Col>
                <Col lg={8} md={8}>
                  <div className="why-climate-change-sec-in why-climate-change-sec-in-padding-ns">
                    {isMobile ? null : <img src={NextStep3} />}
                    <p className="text">
                      {INTENSE}
                    </p>
                  </div>
                </Col>
                <Col lg={8} md={8}>
                  <div className="why-climate-change-sec-in why-climate-change-sec-in-padding-ns">
                    {isMobile ? null : <img src={NextStep4} />}
                    <p className="text">
                      {LONGER}
                    </p>
                  </div>
                </Col>
                <Col lg={8} md={8}>
                  <div className="why-climate-change-sec-in why-climate-change-sec-in-padding-ns">
                    {isMobile ? null : <img src={NextStep5} />}
                    <p className="text">
                      {CORAL}
                    </p>
                  </div>
                </Col>
                <Col lg={8} md={8}>
                  <div className="why-climate-change-sec-in why-climate-change-sec-in-padding-ns">
                    {isMobile ? null : <img src={NextStep6} />}
                    <p className="text">
                      {HIGH}
                    </p>
                  </div>
                </Col>
              </Row>
          }
        </div>
      </div>

      <div className="climate-action-not-difficult ct_not_difficult_box">
        <div className="container">
          <div className="climate-action-not-difficult-head">
            <p>
              <span>{CLIMATE_ACTION}</span> <br />
              {IS_NOT}
            </p>
          </div>
          <Row className="ct_row_col">
            <Col
              lg={12}
              md={12}
              className="border-css-custom ct_col_full"
              style={{
                borderImage:
                  "linear-gradient( to bottom, rgba(0, 0, 0, 0) , #848484 ) 1 100%",
                borderRightWidth: "1px",
                borderRightStyle: "solid",
                padding: "20px",
              }}
            >
              <Row>
                <Col lg={3} md={3}>
                  <img className="climate-action-image" src={climateAction1} />
                </Col>
                <Col lg={21} md={21} className="ct_col_full">
                  <div
                    onClick={() => ClimateActionClick("1")}
                    style={{ cursor: "pointer" }}
                  >
                    <p
                      className={
                        climateActionNo === "1"
                          ? "climate-action-not-difficult-para-number color-green"
                          : "climate-action-not-difficult-para-number"
                      }
                    >
                      {KNOW_YOUR}
                    </p>
                    <p className="climate-action-not-difficult-para-text">
                      {OUR_TOOL}
                    </p>
                  </div>
                </Col>
              </Row>
              {isMobile && <div>
                <img
                  src={carbonFootprintImageUrl}
                  alt="img"
                  style={{ width: "100%" }}
                />
              </div>}
            </Col>
            <Col
              lg={12}
              md={12}
              className="border-css-custom ct_col_full"
              style={{
                borderImage:
                  "linear-gradient(to right, #848484, rgba(0, 0, 0, 0)) 1 / 1 / 0 stretch",
                borderBottom: "1px solid",
                borderLeft: "1px solid",
                padding: "20px",
              }}
            >
              <Row>
                <Col lg={3} md={3}>
                  <img className="climate-action-image" src={climateAction2} />
                </Col>
                <Col lg={21} md={21}>
                  <div
                    onClick={() => ClimateActionClick("2")}
                    style={{ cursor: "pointer" }}
                  >
                    <p
                      className={
                        climateActionNo === "2"
                          ? "climate-action-not-difficult-para-number color-green"
                          : "climate-action-not-difficult-para-number"
                      }
                    >
                      {BROWSE}
                    </p>
                    <p className="climate-action-not-difficult-para-text">
                      {KNOW_WHERE}
                    </p>
                  </div>
                </Col>
              </Row>
              {isMobile && <div>
                <img
                  src={projectImageUrl}
                  alt="img"
                  style={{ width: "100%" }}
                />
              </div>}
            </Col>
            <Col
              lg={12}
              md={12}
              className="border-css-custom ct_col_full"
              style={{
                borderImage:
                  "linear-gradient(to left, rgb(132 132 132 / 60%), rgba(0, 0, 0, 0)) 1 / 1 / 0 stretch",
                borderTop: "2px solid",
                marginTop: "-2px",
                marginRight: "0px",
                padding: "20px",
              }}
            >
              <Row>
                <Col lg={3} md={3}>
                  <img className="climate-action-image" src={climateAction3} />
                </Col>
                <Col lg={21} md={21}>
                  <div
                    onClick={() => ClimateActionClick("3")}
                    style={{ cursor: "pointer" }}
                  >
                    <p
                      className={
                        climateActionNo === "3"
                          ? "climate-action-not-difficult-para-number color-green"
                          : "climate-action-not-difficult-para-number"
                      }
                    >
                      {DECIDE}
                    </p>
                    <p className="climate-action-not-difficult-para-text">
                      {EKOBON_ALLOWS}
                    </p>
                  </div>
                </Col>
              </Row>
              {isMobile && <div>
                <img
                  src={investmentImageUrl}
                  alt="img"
                  style={{ width: "100%" }}
                />
              </div>}
            </Col>
            <Col
              lg={12}
              md={12}
              className="border-css-custom ct_col_full"
              style={{
                borderImage:
                  "linear-gradient(#848484, rgba(0, 0, 0, 0)) 1 100% / 1 / 0 stretch",
                borderLeftWidth: "2px",
                borderLeftStyle: "solid",
                marginLeft: "-1px",
                padding: "20px",
              }}
            >
              <Row>
                <Col lg={3} md={3}>
                  <img className="climate-action-image" src={climateAction4} alt="img" />
                </Col>
                <Col lg={21} md={21}>
                  <div
                    onClick={() => ClimateActionClick("4")}
                    style={{ cursor: "pointer" }}
                  >
                    <p
                      className={
                        climateActionNo === "4"
                          ? "climate-action-not-difficult-para-number color-green"
                          : "climate-action-not-difficult-para-number"
                      }
                    >
                      {STAY_INFORMED}
                    </p>
                    <p className="climate-action-not-difficult-para-text">
                      {YOU_GET}
                    </p>
                  </div>
                </Col>
              </Row>
              {isMobile && <div>
                <img
                  src={facilitateImageUrl}
                  alt="img"
                  style={{ width: "100%" }}
                />
              </div>}
            </Col>
            {!isMobile && <Col lg={24} md={24}>
              <div className="d-flex justify-content-center">
                <img
                  src={
                    climateActionNo === "1"
                      ? carbonFootprintImageUrl
                      : climateActionNo === "2"
                        ? projectImageUrl
                        : climateActionNo === "3"
                          ? investmentImageUrl
                          : climateActionNo === "4"
                            ? facilitateImageUrl
                            : ""
                  }
                  alt="img"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="d-flex justify-content-center climate_no">
                <p
                  className={climateActionNo === "1" ? "color-green-no" : ""}
                  onClick={() => ClimateActionClick("1")}
                >
                  1
                </p>
                <p
                  className={
                    climateActionNo === "2" ? "mx-3 color-green-no" : "mx-3"
                  }
                  onClick={() => ClimateActionClick("2")}
                >
                  2
                </p>
                <p
                  className={climateActionNo === "3" ? "color-green-no" : ""}
                  onClick={() => ClimateActionClick("3")}
                >
                  3
                </p>
                <p
                  className={
                    climateActionNo === "4" ? "mx-3 color-green-no" : "mx-3"
                  }
                  onClick={() => ClimateActionClick("4")}
                >
                  4
                </p>
              </div>
            </Col>}
          </Row>
        </div>
      </div>

      <div className="transparency-at-our-code-sec">
        <div className="container">
          <div className="transparency-at-our-code-sec-head">
            <p>
              {TRANSPARENCY} <span>{AT_OUR} </span>
              <br />
              {CLIMATE_ACTION_} <span> {IN_OUR}</span>
            </p>
          </div>
          {/* <div className="transparency-at-our-code-sec-text">
            <p className="font-wg-500">
              {OUR_PROJECTS}
            </p>
          </div> */}
          <div>
            <Row>
              <Col lg={12} md={12} className="ct_border_left_div">
                <div
                  className="d-flex align-items-end border-css-custom ct_border_div"
                  // style={{
                  //   borderImage: "linear - gradient(rgba(0, 0, 0, 0), rgb(132, 132, 132)) 1 100 % / 1 / 0 stretch",
                  //   borderRight: "1px solid",
                  // }}
                >
                  <div className="transparency-at-our-code-sec-block2 ">
                    <div className="transparency-at-our-code-sec-block-sub-div dashboard_img_sec">
                      <img src={vision1} className="imageIcon" />
                      <p>{PROJECT_LOCATION}</p>
                    </div>
                  </div>
                </div>

                <div
                  className="d-flex align-items-end border-css-custom ct_border_div"
                  // style={{
                  //   borderImage:
                  //   "linear-gradient(to left, rgb(132, 132, 132), rgba(0, 0, 0, 0)) 1 / 1 / 0 stretch",
                  //   borderBottom: "2px solid",
                  //   borderLeft: "1px solid",
                  // }}
                >
                  <div className="transparency-at-our-code-sec-block2">
                    <div className="transparency-at-our-code-sec-block3-sub-div dashboard_img_sec">
                      <img src={vision4} />
                      <p>{DETAILS}</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={12} md={12} className="ct_border_right_div">
                <div
                  className="d-flex align-items-end border-css-custom ct_border_div"
                  // style={{
                  //   borderImage:
                  //     " linear-gradient(to left, rgb(132, 132, 132), rgba(0, 0, 0, 0)) 1 / 1 / 0 stretch",
                  //     borderTop: "2px solid",
                  //     borderRight: "1px solid",
                  // }}
                >
                  <div className="transparency-at-our-code-sec-block2 ">
                    <div className="transparency-at-our-code-sec-block2-sub-div dashboard_img_sec">
                      <img src={vision2} />
                      <p>
                        {PROJECT_COMPLETION}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex align-items-end border-css-custom ct_border_div"
                  // style={{
                  //   borderImage: "linear-gradient(rgb(132, 132, 132), rgba(0, 0, 0, 0)) 1 100% / 1 / 0 stretch",
                  //   borderLeftWidth: "1px",
                  //   borderLeftStyle: "solid",
                  //   marginLeft: "0",
                  //   borderTop: "0px solid",
                  // }}
                >
                  <div className="transparency-at-our-code-sec-block2">
                    <div className="transparency-at-our-code-sec-block4-sub-div dashboard_img_sec">
                      <img src={vision3} />
                      <p>{RECEIPTS}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="climate-offsetting-projects-sec ct_offset_project_main">
        <div className="container">
          <div className="climate-offsetting-projects-head">
            <p>
              {OUR_PROJECTS_FOR}<br />
              <span>{CLIMATE_OFFSETTING}</span>
            </p>
          </div>
          <div className="climate-offsetting-projects-text">
            <p>
              {WE_INVEST}
            </p>
          </div>

          <Row gutter={24}>
            <Col lg={12} md={12}>
              <div className="d-flex align-items-center h-100">
                <div>
                  <p className="climate-offseting-sec-leftblock-head">
                    {RENEWABLE}
                  </p>
                  <p className="climate-offseting-sec-leftblock-text">
                    {FOSSIL}
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={12} md={12}>
              <div className="climate-project-img">
                <img src={projectRenewable} />
              </div>
            </Col>
          </Row>
          <Row gutter={24}>
            {!isMobile && <Col lg={12} md={12}>
              <div className="climate-project-img-left">
                <img src={projectNatureBased} />
              </div>
            </Col>}
            <Col lg={12} md={12}>
              <div className="d-flex align-items-center h-100 ">
                <div>
                  <p className="climate-offseting-sec-rightblock-head">
                    {TREE} <br /> {NATURE}
                  </p>
                  <p className="climate-offseting-sec-rightblock-text">
                    {NATURE_HAS}
                  </p>
                </div>
              </div>
            </Col>
            {isMobile && <Col lg={12} md={12}>
              <div className="climate-project-img-left">
                <img src={projectNatureBased} />
              </div>
            </Col>}
          </Row>
          <Row gutter={24}>
            <Col lg={12} md={12}>
              <div className="d-flex align-items-center h-100 ">
                <div>
                  <p className="climate-offseting-sec-leftblock-head">
                    {ENERGY}
                    <br />
                    {FUEL}
                  </p>
                  <p className="climate-offseting-sec-leftblock-text">
                    {THERE_IS}
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={12} md={12}>
              <div className="climate-project-img">
                <img src={projectEnergy} />
              </div>
            </Col>
          </Row>

          <Row gutter={24}>
            {!isMobile && <Col lg={12} md={12}>
              <div className="climate-project-img-left">
                <img src={projectCommunity1} />
              </div>
            </Col>}
            <Col lg={12} md={12}>
              <div className="d-flex align-items-center h-100 ">
                <div>
                  <p className="climate-offseting-sec-rightblock-head">
                    {COMMUNITY}
                  </p>
                  <p className="climate-offseting-sec-rightblock-text">
                    {WHILE_WORKING}
                  </p>
                </div>
              </div>
            </Col>
            {isMobile && <Col lg={12} md={12}>
              <div className="climate-project-img-left">
                <img src={projectCommunity1} />
              </div>
            </Col>}
          </Row>
          <Row gutter={24}>
            <Col lg={12} md={12}>
              <div className="d-flex align-items-center h-100 ">
                <div>
                  <p className="climate-offseting-sec-leftblock-head">
                    {CARBON_REMOVAL}
                  </p>
                  <p className="climate-offseting-sec-leftblock-text">
                    {ADVANCED}
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={12} md={12}>
              <div className="climate-project-img">
                <img src={projectCarbonRemoval} />
              </div>
            </Col>
          </Row>

          <Row gutter={24}>
            {!isMobile && <Col lg={12} md={12}>
              <div className="climate-project-img-left">
                <img src={projectBlueCarbon} />
              </div>
            </Col>}
            <Col lg={12} md={12}>
              <div className="d-flex align-items-center h-100 ">
                <div>
                  <p className="climate-offseting-sec-rightblock-head">
                    {BLUE_CARBON}
                  </p>
                  <p className="climate-offseting-sec-rightblock-text">
                    {APART_FROM}
                  </p>
                </div>
              </div>
            </Col>
            {isMobile && <Col lg={12} md={12}>
              <div className="climate-project-img-left">
                <img src={projectBlueCarbon} />
              </div>
            </Col>}
          </Row>
        </div>
      </div>

      <div className="container">
        <div className="carbon-action-sec-head">
          <p>
            {YOUR_PARTNER_FOR}
            <br />
            <span>{_CLIMATE_ACTION_}</span>
          </p>
        </div>

        <div className="carbon-action-sec ct_pad_30">
          <div className="carbon-action-img-sec">
            <div className="carbon-action-img-overlay-sec">
              <Row>
                <Col lg={12} md={12}>
                  <div className="carbon-action-sec-text1">
                    {isMobile && <p>
                      {WONDERING} <br />
                      {SIGNIFICANT} <br />
                      {DIFFERENCE}
                    </p>}
                    {!isMobile && <p>
                      {WONDERING} <br />
                      {SIGNIFICANT} {DIFFERENCE}
                    </p>}
                  </div>
                  <div className="carbon-action-sec-text2">
                    <p>
                      {EKOBON_IS_A_}
                      <br /> {WAY}
                    </p>
                    <a href='#homeupper'>
                      <button className="climate-action-btnsec-btn1">
                        {GET_STARTED}
                      </button>
                    </a>
                  </div>
                </Col>
                <Col lg={12} md={12}>
                  <div className="carbon-action-sec-text3">
                    <p>
                      {EVERY_STEP}
                    </p>
                  </div>
                  <div className="carbon-action-sec-text4">
                    <p>
                      {LEARN_ABOUT}
                    </p>
                  </div>

                  <div>
                    <button className="climate-action-btnsec-btn2">
                      <Link to="/our-approach">{EKOBON_APPROACH}</Link>
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <FooterWeb />
    </>
  );
};

export default HomeWeb;
