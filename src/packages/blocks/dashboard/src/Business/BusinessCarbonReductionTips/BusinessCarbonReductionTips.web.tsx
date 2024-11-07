import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

import "./BusinessCarbonReductionTips.web.css";

import {
  driving1,
  driving2,
  driving3,
  driving4,
  driving5,
  fligh1,
  fligh2,
  fligh3,
  events1,
  events2,
  events3,
  employee1,
  employee2,
  employee3,
  employee4,
  employee5,
} from "./assets";
import CarbonReductionTipsController from "./CarbonReductionTipsController.web";
// import "../IndvProject/IndividualProject.web.css";
import Carousel from "react-elastic-carousel";
export class BusinessCarbonReductionTips extends CarbonReductionTipsController {
  renderSustainableDown = () => {
    // if (!this.state.pageProjectdetails) return;

    // const { image } = this.props.location.state.item.attributes;
    let carousel = React.createRef();
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 3, itemsToScroll: 3 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 3 },
    ];
    // const images = [climate2, climate];
    const renderPaginationDots = (
      pages: any,
      activePage: any,
      onClick: any
    ) => {
      return (
        <div className="dotsRow">
          {pages.map((itemPage: any) => {
            const isActivePage = activePage === itemPage;
            return (
              <div
                onClick={() => onClick(itemPage)}
                className="dots"
                style={{
                  backgroundColor: isActivePage ? "#30458c" : "#7c8188",
                }}
              />
            );
          })}
        </div>
      );
    };

    return (
      <div className="container climate_project climate-project-slider climate-project-slider-ns">
        <Carousel
          // itemsToShow={3}
          breakPoints={breakPoints}
          // enableAutoPlay
          autoPlaySpeed={1500}
          isRTL={false}
          showArrows={true}
          focusOnSelect={false}
          //@ts-ignore
          renderPagination={({ pages, activePage, onClick }) => {
            return renderPaginationDots(pages, activePage, onClick);
          }}
          //@ts-ignore
          ref={carousel}
        >
          <div className="main_div_new">
            <img src={driving1} alt="driving1" />
            <h4>
              More Traffic,
              <br /> Avoid Driving
            </h4>
            <p>
              This will save your employees a <br /> lot of time and also reduce
              your fuel spends.
            </p>
          </div>

          <div className="main_div_new">
            <img src={driving2} alt="" />
            <h4>
              Invest in <br />
              low-carbon vehicles
            </h4>
            <p>
              As a responsible business, it <br /> is a good idea to invest in
              low-carbon vehicles.
            </p>
          </div>

          <div className="main_div_new">
            <img src={driving3} alt="" />
            <h4>
              Encourage Public <br /> Transport
            </h4>
            <p>
              People in leadership positions <br /> can set an example by taking
              public transport too.
            </p>
          </div>

          <div className="main_div_new">
            <img src={driving4} alt="" />
            <h4>
              Encourage <br /> Carpooling Program
            </h4>
            <p>
              Come up with <br /> carpooling programs within the orqanization.
            </p>
          </div>

          <div className="main_div_new">
            <img src={driving5} alt="" />
            <h4>
              Battery-operated <br /> Vehicles
            </h4>
            <p>
              Offer subscription services for <br /> bicycles or
              battery-operated vehicles.
            </p>
          </div>
        </Carousel>
      </div>
    );
  };

  renderEmploye = () => {
    let carousel = React.createRef();
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 3, itemsToScroll: 3 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 3 },
    ];
    // const images = [climate2, climate];
    const renderPaginationDots = (
      pages: any,
      activePage: any,
      onClick: any
    ) => {
      return (
        <div className="dotsRow">
          {pages.map((itemPage: any) => {
            const isActivePage = activePage === itemPage;
            return (
              <div
                onClick={() => onClick(itemPage)}
                className="dots"
                style={{
                  backgroundColor: isActivePage ? "#30458c" : "#7c8188",
                }}
              />
            );
          })}
        </div>
      );
    };

    return (
      <div className="container climate_project climate-project-slider climate-project-slider-ns">
        {/* <div className="Carousel_Main  Carousel_Project_Main"> */}
        <Carousel
          // itemsToShow={3}
          breakPoints={breakPoints}
          // enableAutoPlay
          autoPlaySpeed={1500}
          isRTL={false}
          showArrows={true}
          focusOnSelect={false}
          //@ts-ignore
          renderPagination={({ pages, activePage, onClick }) => {
            return renderPaginationDots(pages, activePage, onClick);
          }}
          //@ts-ignore
          ref={carousel}
        >
          <div className="main_div_new">
            <img src={employee1} alt="" />
            <h4>
              Stock up <br />
              on less Stationary
            </h4>
            <p>
              Remember, abundance in <br />
              materials leads to wastage
            </p>
          </div>

          <div className="main_div_new">
            <img src={employee2} alt="" />
            <h4>
              Recycle <br />
              Office Waste
            </h4>
            <p>
              Segregate and <br />
              recycle office waste
            </p>
          </div>

          <div className="main_div_new">
            <img src={employee3} alt="" />
            <h4>
              Switch-off Hour <br />
              For All Machines
            </h4>
            <p>
              Everyday when all machines, <br />
              computers, and electrical <br />
              appliances stav off
            </p>
          </div>

          <div className="main_div_new">
            <img src={employee4} alt="" />
            <h4>
              Work <br />
              From Home
            </h4>
            <p>
              Encourage working <br />
              from home
            </p>
          </div>

          <div className="main_div_new">
            <img src={employee5} alt="" />
            <h4>
              Upgrade <br />
              The Fixtures
            </h4>
            <p>
              Upgrades the fixtures and <br />
              appliances in the office
            </p>
          </div>
        </Carousel>
      </div>
    );
  };
  render() {
    return (
      <>
        <div className="Individual_MiddleContainer ">
          <div className="Individual_MiddleScreenMain carbonR_header ">
            <div>
              <img
                className="CarbonR_header_img"
                src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/24pphl1oac3gh12f3iho881t8sz3/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22carbonreductionheader.jpg%22%3B%20filename%2A%3DUTF-8%27%27carbonreductionheader.jpg&response-content-type=image%2Fjpeg"
                alt="CARBONHEADER"
              />
            </div>
            <div className="Individual_MiddleScreenMain carbon_inner_position">
              <div className="container">
                <div style={{ display: "flex" }}>
                  <Row className="align-items-start" gutter={16}>
                    <Col lg={16} md={12} xs={24} sm={24}>
                      <div className="Carbon_ineer_header">
                        <div className="carbon_hedding_box1">
                          <h3 className="carbon_heading">
                            Carbon reduction guide for climate conscious
                            companies
                          </h3>
                          <h6 className="heading_down">What it Matters</h6>
                          <p className="Carbon_li_p_img">
                            As a part of corporate climate action strategy,
                            emphasis on climate reduction activities play
                            equally important role as offsetting unavoidable
                            emissions. A robust carbon reduction strategy
                            involves undertaking a comprehensive review of
                            emissions internally and engaging the internal team
                            to come up with measures geared towards carbon
                            reduction and climate awareness activities for
                            employees. It’s recommended to appoint a climate
                            action officer and have a cross department team to
                            ensure the entire organisation is involved.
                          </p>
                        </div>

                        <div className="carbon_hedding_box">
                          <h6 className="heading_down heading_down_p">
                            Reduce Carbon Footprint from Driving
                          </h6>

                          {this.renderSustainableDown()}
                        </div>

                        <div className="carbon_hedding_box1">
                          <h6 className="heading_down heading_down_p">
                            Reduce Carbon Footprint from Air Travel
                          </h6>
                          <Row>
                            <Col lg={8}>
                              <div className="main_div_new">
                                <img src={fligh1} alt="" />
                                <h4>Travel Economy</h4>
                                <p>
                                  Encourage employees to <br />
                                  travel economy as opposed <br />
                                  to business class
                                </p>
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className="main_div_new">
                                <img src={fligh2} alt="" />
                                <h4>Avoid Jets</h4>
                                <p>
                                  Avoid private jets for <br />
                                  business travel
                                </p>
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className="main_div_new">
                                <img src={fligh3} alt="" />
                                <h4>Virtual Meetings</h4>
                                <p>
                                  Switch to virtual meetings <br />
                                  wherever possible
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="carbon_hedding_box">
                          <h6 className="heading_down heading_down_p">
                            Reduce Carbon Footprint from Corporate Event
                          </h6>
                          <Row>
                            <Col lg={8}>
                              <div className="main_div_new">
                                <img src={events1} alt="" />
                                <h4>
                                  Encourage <br />
                                  Online Events
                                </h4>
                                <p>Host more online events to business class</p>
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className="main_div_new">
                                <img src={events2} alt="" />
                                <h4>
                                  Stick <br />
                                  To emails
                                </h4>
                                <p>
                                  Avoid distributing too many <br />
                                  brochures and pamphlets
                                </p>
                              </div>
                            </Col>
                            <Col lg={8}>
                              <div className="main_div_new">
                                <img src={events3} alt="" />
                                <h4>
                                  Give <br />
                                  Gift Cards
                                </h4>
                                <p>
                                  Avoid unnecessary giveaways. <br />
                                  Give gift cards if you must
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="carbon_hedding_box1">
                          <h6 className="heading_down heading_down_p">
                            Reduce Carbon Footprint from Employees
                          </h6>
                          {this.renderEmploye()}
                        </div>
                      </div>
                    </Col>
                    <Col lg={8} md={12} xs={24} sm={24}>
                      <div className="Carbon_ineer_header_side">
                        <h6 className="heading_down">
                          Ways to reduce your company’s carbon footprint
                        </h6>
                        <p className="Carbon_li_p_img">
                          Carbon offsets hold robust potential to accelerate
                          decarbonisation globally. Companies can either do one
                          time offset or subscribe to offset packages for
                          recurring travels, events and other corporate
                          practices.
                        </p>

                        <h6 className="side_heading_tab_upper">
                          One Time Offsets
                        </h6>
                        <Row gutter={16}>
                          <Col lg={12} md={12} xs={12} sm={12}>
                            <Link to="/business/offset-employee">
                              <div className="Carbon_side_tab">
                                <img
                                  className="Carbon_side_tab_img"
                                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/4at292xmpuytx4dkdx4b0rx4jgi3/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22onetime_emp.jpg%22%3B%20filename%2A%3DUTF-8%27%27onetime_emp.jpg&response-content-type=image%2Fjpeg"
                                  alt="CARBONONETIMEEMP"
                                />
                                <p className="carbon_tab_test">Employee</p>
                              </div>
                            </Link>
                          </Col>
                          <Col lg={12} md={12} xs={12} sm={12}>
                            <Link to="/business/offset-flight">
                              <div className="Carbon_side_tab">
                                <img
                                  className="Carbon_side_tab_img"
                                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/shbrmnzrratyacoogch6v1vxo8ix/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22onetime_flight.jpg%22%3B%20filename%2A%3DUTF-8%27%27onetime_flight.jpg&response-content-type=image%2Fjpeg"
                                  alt="CARBONONETIMEEMP"
                                />
                                <p className="carbon_tab_test">Flight</p>
                              </div>
                            </Link>
                          </Col>
                          <Col lg={12} md={12} xs={12} sm={12}>
                            <Link to="/business/offset-car">
                              <div className="Carbon_side_tab">
                                <img
                                  className="Carbon_side_tab_img"
                                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/yeddl3nsb3x57y9sy76ao5fll8p9/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22onetime_car.jpg%22%3B%20filename%2A%3DUTF-8%27%27onetime_car.jpg&response-content-type=image%2Fjpeg"
                                  alt="CARBONONETIMEEMP"
                                />
                                <p className="carbon_tab_test">Car</p>
                              </div>
                            </Link>
                          </Col>
                          <Col lg={12} md={12} xs={12} sm={12}>
                            <Link to="/business/offset-event">
                              <div className="Carbon_side_tab">
                                <img
                                  className="Carbon_side_tab_img"
                                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/cdmrfub56ovo3zv95zdt3f9uoaix/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22onetime_event.jpg%22%3B%20filename%2A%3DUTF-8%27%27onetime_event.jpg&response-content-type=image%2Fjpeg"
                                  alt="CARBONONETIMEEMP"
                                />
                                <p className="carbon_tab_test">Event</p>
                              </div>
                            </Link>
                          </Col>
                        </Row>
                        <h6 className="side_heading_tab_upper">
                          Subscription Offsets
                        </h6>
                        <Row gutter={16}>
                          <Col lg={12} md={12} xs={12} sm={12}>
                            <Link to="/business/subscription-employee">
                              <div className="Carbon_side_tab">
                                <img
                                  className="Carbon_side_tab_img"
                                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/ntjol2rvbg9922p5n2sb49cor8gq/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22subscription_emp.jpg%22%3B%20filename%2A%3DUTF-8%27%27subscription_emp.jpg&response-content-type=image%2Fjpeg"
                                  alt="CARBONONETIMEEMP"
                                />
                                <p className="carbon_tab_test">Employee</p>
                              </div>
                            </Link>
                          </Col>
                          <Col lg={12} md={12} xs={12} sm={12}>
                            <Link to="/business/subscription-car">
                              <div className="Carbon_side_tab">
                                <img
                                  className="Carbon_side_tab_img"
                                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/2u0c2hrbfhddbqctxgb65egr4bd3/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22subscription_car.jpg%22%3B%20filename%2A%3DUTF-8%27%27subscription_car.jpg&response-content-type=image%2Fjpeg"
                                  alt="CARBONONETIMEEMP"
                                />
                                <p className="carbon_tab_test">Car</p>
                              </div>
                            </Link>
                          </Col>
                          <Col lg={12} md={12} xs={12} sm={12}>
                            <Link to="/business/subscription-flight">
                              <div className="Carbon_side_tab">
                                <img
                                  className="Carbon_side_tab_img"
                                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/gdodydech14ubxxpcndnmsu2nl2v/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22subscription_flight.jpg%22%3B%20filename%2A%3DUTF-8%27%27subscription_flight.jpg&response-content-type=image%2Fjpeg"
                                  alt="CARBONONETIMEEMP"
                                />
                                <p className="carbon_tab_test">Flight</p>
                              </div>
                            </Link>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BusinessCarbonReductionTips;
