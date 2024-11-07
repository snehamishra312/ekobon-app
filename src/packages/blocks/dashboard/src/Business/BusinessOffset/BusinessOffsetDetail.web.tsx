import React from "react";
// Customizable Area Start
import { Row, Col, Button } from "antd";
import "./BusinessOffsetDetail.css";
import { Link } from "react-router-dom";
// Customizable Area End
import { deviceMode } from "../../../../../components/src/CommonUtils";
import { constants } from "../../../../../components/src/types";

export default function BusinessOffsetDetail(props: any) {
  const showSubscriptionBtn =
    window.location.pathname === "/business/offset-employee" ||
    window.location.pathname === "/business/offset-flight" ||
    window.location.pathname === "/business/offset-flight-by-distance" ||
    window.location.pathname === "/business/offset-car" ||
    window.location.pathname === "/business/offset-event";
  const isMobile = deviceMode.isMobile;

  return (
    <>
      <div className="business-detail-offset-wrapper">
        <div className="container offset_down_heade_back">
          <Row gutter={16}>
            <Col
              lg={18}
              className={showSubscriptionBtn ? "m-b-50" : ""}
              style={{ margin: "auto" }}
            >
              <div className="business-detail-leftside">
                <h4 className="business-detail-head">{props.sideBannerHead}</h4>
                {props.sideBannerLists.map((data: any, index: any) => (
                  <div className="business-left-side-pera" key={index}>
                    <p className="text-start">{data}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
          {showSubscriptionBtn ? (
            <div className="subscription_btn">
              <Col lg={4} md={4}>
                <Button className="indv-offset-order-btn-cart-subscribe">
                  <Link
                    to={{
                      pathname: `${window.location.pathname === "/business/offset-employee"
                        ? "/business/subscription-employee"
                        : window.location.pathname ===
                          "/business/offset-flight"
                          ? "/business/subscription-flight"
                          : window.location.pathname ===
                            "/business/offset-flight-by-distance"
                            ? "/business/subscription-flight"
                            : window.location.pathname === "/business/offset-car"
                              ? "/business/subscription-car"
                              : window.location.pathname ===
                                "/business/offset-event"
                                ? "/business/subscription-employee"
                                : null
                        }`,
                    }}
                  >
                    Subscribe
                  </Link>
                </Button>
              </Col>
            </div>
          ) : null}
        </div>
      </div>
      {!isMobile ? (
        <div className="business-detail-offset-wrapper buss-offset-empfoot-sec">
          <div className="container">
            <Row gutter={16}>
              <Col lg={24}>
                <div className="title-business-head business-offset-title">
                  <h4>{props.calculateCarbonHead}</h4>
                  <h3>
                    {props.calculateCarbonSubhead}
                    <span> {props.offsetName}</span>
                  </h3>
                </div>
              </Col>
            </Row>
            <Row gutter={48} className="align-items-start">
              {props.footprintLists.map((data: any, index: any) => (
                <Col lg={12} key={index}>
                  <div className="about-hate-climate-chng-text-sec Tool_user_section">
                    <Row className="ct_grid_2 ct_block_sec">
                      <Col
                        lg={3}
                        className="footprint_list_number tool-section-number"
                      >
                        <div className="head">
                          <p
                            style={{ paddingTop: "12px" }}
                            className={
                              index + 1 === 1
                                ? "firstsquareT2 Tool_user_number mb-0"
                                : "firstsquareT Tool_user_number mb-0"
                            }
                          >

                            {index + 1}
                          </p>
                        </div>
                      </Col>
                      <Col lg={50}>
                        <div className="footprint_list_content tool-section-text mt-0">
                          <p className="text ct_color_change ct_padd_top_0 ct_padd_inline_0 text-start" style={{ fontWeight: "500" }}>
                            {data}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      ) : (
        <></>
      )}

      {props.offsetType === "subscription" ? (
        <div className="business-detail-offset-wrapper">
          <div className="container">
            <Row gutter={16}>
              <Col lg={12}>
                <div
                  className="business-image-card"
                  style={{ backgroundImage: `url(${props.subscriptionImage})` }}
                />
              </Col>
              <Col lg={12} style={{ margin: "auto" }} className="light-bg">
                <div className="business-detail-leftside">
                  <h4 className="business-detail-head">
                    {props.subscriptionTitle}
                  </h4>
                  <div className="business-left-side-pera">
                    <p className="text-start"> {props.subscriptionPera}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      ) : null}
      <div className="business-detail-offset-wrapper">
        <div className="container">
          <Row gutter={16}>
            <Col lg={24}>
              <div className="investment-grow-section">
                <div className="investment-grow-heads">
                  <h4>{props.footerHead}</h4>
                  <h3>{props.footerSubHead}</h3>
                </div>
                <Row gutter={16}>
                  {props.footerCarousel.map((data: any, index: any) => (
                    <Col lg={8} key={index}>
                      <div className="circleSection-grow-box">
                        <div className="circle-grow">
                          <img src={data.icon} alt="" />
                        </div>
                        <p className="text-white">{data.title}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

// Customizable Area End
