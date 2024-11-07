import React from "react";
import OffsetOneTimeFlightController, {
  Props,
} from "./OffsetOneTimeFlightController.web";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import "./IndividualOffsetDetails.web.css";
import {
  downwardoffsetindv,
  AirplaneSubscription,
  TipFlightSun,
  TipFlightWind,
} from "./assets";
import { constants } from "../../../../components/src/types";
import { deviceMode } from "../../../../components/src/CommonUtils";
const isMobile = deviceMode.isMobile;

class IndividualOffsetDetails extends OffsetOneTimeFlightController {
  renderUpperPart = () => {
    const {
      ONE_TIME_OFFSET,
      CHOICE_BENEFIT,
      SEC_HEADER1,
      SEC_HEADER2,
      SEC_HEADER3,

    } = constants.IndividualOffsetDetails;
    return (
      <Col lg={24} md={12} xs={24} sm={24}>
        <div className="our-approach-main-sec offset_down_heade_back offset_down_heade_back_padding_top ct_act_now_padd_left">
          <div>
            <div className="our-approach-main-sec-head_act offset_down_heade">
              <h1>
                {SEC_HEADER1}
                <br />
                {SEC_HEADER2}
                <br />
                {SEC_HEADER3}
                <br />
              </h1>
            </div>
            <div
              className="our-approach-main-sec-text offset_down_heade offset_down_heade_ns"
              style={{ width: "96%", height: "101px !important" }}
            >
              <div>
                <p className="offset-lifestyle-text-para">
                  {ONE_TIME_OFFSET}<br />

                  {CHOICE_BENEFIT} <span>both ways</span>
                </p>
              </div>
            </div>
          </div>
          <div className="subscription_btn indv-offset-order-btn">
            <Col lg={4} md={4}>
              <Button className="indv-offset-order-btn-cart">
                <Link to={"/individual/offset-subscription"}>Subscribe</Link>
              </Button>
            </Col>
          </div>
        </div>
      </Col>
    );
  };

  renderHeading = (i: number) => {
    const {
      CALCULATE_FOOTPRINT,
      EKOBON_APPROACH1,
      EKOBON_APPROACH2,
      EKOBON_APPROACH2_WEB,
      OFFSET_FOOTPRINT,
      OFFSET_FOOTPRINT_CAR,
      OFFSET_FOOTPRINT_LIFESTYLE,
      LIFESTYLE_APPROACH
    } = constants.IndividualOffsetDetails;
    const headingForOffset = () => {
      switch (window.location.pathname) {
        case "/individual/offset-onetime-flight": return OFFSET_FOOTPRINT?.toUpperCase()
        case "/individual/offset-onetime-car": return OFFSET_FOOTPRINT_CAR?.toUpperCase()
        case "/individual/offset-onetime": return OFFSET_FOOTPRINT_LIFESTYLE?.toUpperCase()
        default: return CALCULATE_FOOTPRINT
      }
    }
    return (
      <Col lg={24} md={12} xs={24} sm={24} style={{ marginTop: "40px" }}>
        <div className="our-approach-main-sec-text-fliht offset_details_head">
          <p>{headingForOffset()}</p>
        </div>
        <div className="our-approach-main-sec-head offset_details">
          {!isMobile ?
            window.location.pathname === "/individual/offset-onetime" ?
              <>
                <h1 className="">
                  <span>
                    {LIFESTYLE_APPROACH?.toUpperCase()}
                    <span className="firstsquareT">{this.props.heading.toUpperCase()}</span>
                  </span>
                </h1></> :
              <>
                <h1 className="">
                  <span>
                    {EKOBON_APPROACH1}
                    <br /> {EKOBON_APPROACH2_WEB[i]}
                    <span className="firstsquareT">{this.props.heading.toUpperCase()}</span>
                  </span>
                </h1></>
            : <>
              <p className="our-approach-sec-desc">
                <span>
                  {EKOBON_APPROACH1}
                  <br /> {EKOBON_APPROACH2_WEB[i]}
                  <span className="firstsquareT">{this.props.heading.toUpperCase()}</span>
                </span>
              </p> </>}
        </div>
      </Col>
    );
  };

  renderMulipleHeading = () => {
    const { REDUCING_TIPS, EMISSIONS } = constants.IndividualOffsetDetails;
    return (<>
      {isMobile ? <><Col lg={24} md={12} xs={24} sm={24}>
        <div className="flight-upper-tips-sec-img" >
          <img src={TipFlightSun} alt="" />
        </div>
        <div className="flight-upper-tips-sec">
          {/* {window.location.pathname === "/individual/offset-onetime-flight" && (
        
      )} */}
          <div className="flight-upper-tips-sec-text">
            <div className="our-approach-main-sec-head offset-emmision-new-h1 offset_details_header our-approach-main-sec-head-mobile">
              <span className="reducing-tips">{`${REDUCING_TIPS} `}</span><span className="offset-mobile-tips-ns">{`${this.props.heading?.toUpperCase()}`}</span> <span className="reducing-tips">{`${EMISSIONS}`}</span>
            </div>
          </div>
        </div>
      </Col>
      </> : <>      <Col lg={24} md={12} xs={24} sm={24}>
        <div className="flight-upper-tips-sec">
          {/* {window.location.pathname === "/individual/offset-onetime-flight" && (
          
        )} */}
          <div className="flight-upper-tips-sec-img" >
            <img src={TipFlightSun} alt="" />
          </div>
          <div className="flight-upper-tips-sec-text-web-ns">
            <div className="our-approach-main-sec-text offset-emmision-new-p offset_details_head">
              <p>{REDUCING_TIPS}</p>
            </div>
            <div className="our-approach-main-sec-head offset-emmision-new-h1 offset_details">
              <h1 className="">
                <span>
                  <span className="firstsquareT">{this.props.heading.toUpperCase()}</span>
                  {EMISSIONS}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </Col></>}
    </>);
  };

  renderMulipleFlightHeading = () => {
    const { HOW_EKOBON, CARBON_EMISSIONS } = constants.IndividualOffsetDetails;
    return (
      <Col lg={24} md={12} xs={24} sm={24}>
        <div className="carbon-flight-emission-ns">
          <div className="our-approach-main-sec-text offset_details_head our-approach-main-sec-text-ns">
            <p>{HOW_EKOBON}</p>
          </div>
          {isMobile ? <>
            <div className="offset_details_flight">
              <h1 className="flight-footprint-ns">
                {CARBON_EMISSIONS}{" "}
                <span className="color-color-individual">
                  {this.props.heading.toUpperCase()}
                </span>
              </h1>
            </div>
          </> : <> <div className="our-approach-main-sec-head offset_details">
            <h1 className="">
              <span>
                {CARBON_EMISSIONS}
                <span className="firstsquareT">{this.props.heading.toUpperCase()}</span>
              </span>

            </h1>
          </div></>}
        </div>
      </Col>
    );
  };

  renderFlightHeadingDown = () => {
    return (
      <>
        <div
          className="about-hate-climate-chng-sec"
          style={{ width: "100%", padding: "0", margin: "30px 0px 0px 0px" }}
        >
          <div className="container ct_font_22_dash">
            {this.renderMulipleHeading()}

            <Row gutter={16}>
              <Col lg={24}>
                <div
                  className="about-hate-climate-chng-text-sec about-hate-climate-chng-text-second-desc"
                  style={{
                    padding: "0 22px 0 0",
                    margin: "12px 12px 90px 12px",
                  }}
                >
                  <ul className="offset-related-emission-ul pl-0">
                    {this.props.rightData.map((e: any, j: any) => {
                      return (
                        <li className="down_Li seprate_text" key={j}>
                          {/* className="text seprate_text" */}
                          <span>{e}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <ul className="offset-related-emission-ul pl-0">
                    {this.props.leftData.map((e: any, k: any) => {
                      return (
                        <li className="down_Li seprate_text" key={k}>
                          {/* className="text seprate_text" */}
                          <span>{e}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <img
                    className="flight_down_headding"
                    src={TipFlightWind}
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  };

  renderLifstyle = () => {
    const {
      LIFE_PARA1,
      LIFE_PARA2,
      LIFE_PARA3,
    } = constants.IndividualOffsetDetails;
    return (
      <>
        <div
          className="about-hate-climate-chng-sec"
          style={{ width: "100%", padding: "0", margin: "50px 0px 0px 0px" }}
        >
          <div className="container">
            {this.renderMulipleHeading()}

            <Row gutter={16}>
              <Col lg={24}>
                <div
                  className="about-hate-climate-chng-text-sec"
                  style={{ margin: "12px" }}
                >
                  <p
                    className="text seprate_text"
                    style={{ textAlign: "center", margin: "0px 0 32px 0" }}
                  >
                    {LIFE_PARA1}
                    <br />
                    {LIFE_PARA2}
                    <br />
                    {LIFE_PARA3}
                  </p>
                  <img
                    className="flight_down_headding"
                    src={TipFlightWind}
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  };

  renderCarSection = () => {
    const {
      CAR_HEADER,
      CAR_TEXT1,
      CAR_TEXT2,
    } = constants.IndividualOffsetDetails;
    return (
      <div
        className="about-hate-climate-chng-sec"
        style={{ padding: "0", margin: "50px 0px 0px 0px" }}
      >
        <Row className="offset-indv-car-img-sec">
          <Col lg={12}>
            <div className="off-set-car-img-sec-img">
              <img src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/o3k9jv0t9eondvob7hy8vfrf4edg/ee24dac042d06c5224cf30051324e32303a92540e2b45e532179876b27dd0258?response-content-disposition=inline%3B%20filename%3D%22Car-Subscription-img.jpg%22%3B%20filename%2A%3DUTF-8%27%27Car-Subscription-img.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=hello%2F20220714%2Fbuilder-1%2Fs3%2Faws4_request&X-Amz-Date=20220714T115714Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=62846e6a86dd8f8b09eb9c1f810df1691ba7b0fff91b5e782e05d661b7b3a21c" />
            </div>
          </Col>
          <Col lg={12}>
            <div className="off-set-car-img-sec py-4 px-4">
              <div className="head">
                <p>{CAR_HEADER}</p>
              </div>

              <div className="text">
                {/* {/ <p className="head-green">Introducing Ekobon</p> /} */}
                <p>{CAR_TEXT1}</p>
              </div>

              <div className="text2">
                <p>{CAR_TEXT2}</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  renderFlightSection = () => {
    const { FLIGHT_HEADER, FLIGHT_TEXT } = constants.IndividualOffsetDetails;
    return (
      <div
        className="about-hate-climate-chng-sec"
        style={{ padding: "0", margin: "50px 0px 0px 0px" }}
      >
        <div className="container">
          <Row className="offset-indv-flight-img-sec">
            <Col lg={12}>
              <div className="off-set-flight-img-sec-img">
                <img src={AirplaneSubscription} />
              </div>
            </Col>
            <Col lg={12}>
              <div className="off-set-car-img-sec py-5 px-4">
                <div className="head">
                  <p>{FLIGHT_HEADER}</p>
                </div>

                <div className="text">
                  {/* {/ <p className="head-green">Introducing Ekobon</p> /} */}
                  <p>{FLIGHT_TEXT}</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  };

  renderFlightToolUses = () => {
    return (
      <div
        className="about-hate-climate-chng-sec Tool_user"
        style={{ padding: "0" }}
      >
        <div className="container">
          <Row gutter={48} className="align-items-start">
            {this.props.toolUses.map((e: any, i: any) => {
              return (
                <Col lg={12} key={i}>
                  <div className="about-hate-climate-chng-text-sec Tool_user_section">
                    <Row className="ct_grid_2">
                      <Col lg={3} className="tool_user_content_number">
                        <div className="">
                          <p
                            className={
                              e.id === 1
                                ? "firstsquareT1 Tool_user_number mb-0"
                                : "firstsquareT Tool_user_number mb-0"
                            }
                          >
                            {e.id}
                          </p>
                        </div>
                      </Col>
                      <Col lg={50}>
                        <div className="tool_user_contents ct_tool_user_contents">
                          <p className="text bg-transparent ct_padd_top_0 ct_padd_inline_0 text-start" style={{ fontWeight: "500", }}>
                            {e.name}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  };

  renderHeadingDownFlight = () => {
    const {
      FOOTPRINT_FLIGHT_SENTENCE11,
      FOOTPRINT_FLIGHT_SENTENCE12,
      FOOTPRINT_FLIGHT_SENTENCE2,
      FOOTPRINT_FLIGHT_SENTENCE3,
      FOOTPRINT_FLIGHT_SENTENCE4,
      FOOTPRINT_FLIGHT_SENTENCE5,
      FOOTPRINT_FLIGHT_SENTENCE6,
      FOOTPRINT_FLIGHT_SENTENCE7,
    } = constants.IndividualOffsetDetails;

    return (
      <>
        <div
          className="about-hate-climate-chng-sec"
          style={{ padding: "0", margin: "50px 0px 0px 0px" }}
        >
          <div className="container">
            {this.renderMulipleFlightHeading()}

            <div className="emissionsonflight-text2">
              <p className="flight_footprint_content">
                {FOOTPRINT_FLIGHT_SENTENCE11}
              </p>
              <p className="flight_footprint_content">
                {FOOTPRINT_FLIGHT_SENTENCE12}
              </p>
              {!this.state.emissionsReadMore && (
                <span className="a_tag">..</span>
              )}
              {!this.state.emissionsReadMore && (
                <>
                  <a onClick={this.handleEmissionsReadMore}>Read more</a>
                </>
              )}
              {/* {/ </span> /} */}
              {this.state.emissionsReadMore && (
                <>
                  <p className="flight_footprint_content">
                    {FOOTPRINT_FLIGHT_SENTENCE2}
                  </p>
                  {/* {/ </span> /}
                    {/ <br /> /}
                    {/ <span> /} */}
                  <p className="flight_footprint_content">
                    {FOOTPRINT_FLIGHT_SENTENCE3}
                  </p>
                  {/* {/ </span> /}
                    {/ <br /> /}
                    {/ <span> /} */}
                  <p className="flight_footprint_content">
                    {FOOTPRINT_FLIGHT_SENTENCE4}
                  </p>
                  {/* </span>
                    <br />
                    <span> */}
                  <p className="flight_footprint_content">
                    {FOOTPRINT_FLIGHT_SENTENCE5}
                  </p>
                  {/* </span>
                    <br />
                    <span> */}
                  <p className="flight_footprint_content">
                    {FOOTPRINT_FLIGHT_SENTENCE6}
                  </p>
                  {/* </span>
                    <br />
                    <span> */}
                  <p className="flight_footprint_content">
                    {FOOTPRINT_FLIGHT_SENTENCE7}
                  </p>
                  <a onClick={this.handleEmissionsReadMore}>Show less</a>
                  {/* {/ </span> /} */}
                </>
              )}
            </div>
            <Row gutter={16}>
              <Col>
                <div className="about-hate-climate-chng-sec-img">
                  <img src={downwardoffsetindv} alt="img" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  };
  render() {
    const isMobile = deviceMode.isMobile;

    return (
      <div>
        <Row gutter={16}>
          {window.location.pathname === "/individual/offset-onetime-flight" && (
            <>
              {this.renderUpperPart()}
              {!isMobile ? (
                <>
                  {this.renderHeading(1)}
                  {this.renderFlightToolUses()}{" "}
                </>
              ) : (
                <></>
              )}
              {this.renderFlightHeadingDown()}
              {this.renderHeadingDownFlight()}
              {/* {/ {this.renderFlightSection()} /} */}
            </>
          )}

          {window.location.pathname === "/individual/offset-onetime-car" && (
            <>
              {this.renderUpperPart()}
              {!isMobile ? (
                <>
                  {this.renderHeading(2)}
                  {this.renderFlightToolUses()}
                </>
              ) : (
                <></>
              )}
              {this.renderFlightHeadingDown()}
              {/* {this.renderCarSection()} */}
            </>
          )}
          {window.location.pathname === "/individual/offset-onetime" && (
            <>
              {this.renderUpperPart()}
              {!isMobile ? (
                <>
                  {this.renderHeading(0)}
                  {this.renderFlightToolUses()}
                </>
              ) : (
                <></>
              )}
              {/* {this.renderLifstyle()} */}
            </>
          )}

          {window.location.pathname ===
            "/individual/offset-onetime-transport" && (
              <>
                {this.renderUpperPart()}
                {this.renderFlightHeadingDown()}
              </>
            )}

          {window.location.pathname === "/individual/offset-onetime-house" && (
            <>
              {this.renderUpperPart()}
              {this.renderFlightHeadingDown()}
            </>
          )}
        </Row>
      </div>
    );
  }
}

export default IndividualOffsetDetails;
