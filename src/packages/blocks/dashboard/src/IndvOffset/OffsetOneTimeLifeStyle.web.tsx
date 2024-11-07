import React from "react";
import { Row, Col, Popover, Select, Tooltip } from "antd";
import IndividualOffset from "./IndividualOffset.web";
import OneTimeCard from "./OneTimeCard.web";
import OrderSummary from "./OrderSummary.web";
import { ScreenLoader, iImg, DefaultImg, PAGES } from "./assets";
import OffsetOneTimeLifeStyleController from "./OffsetOneTimeLifeStyleController.web";
import IndividualOffsetDetails from "./IndividualOffsetDetails.web";
import { IndividualLifeStyleData } from "./IndividualLifeStyleData";
import { constants } from "../../../../components/src/types";
import { deviceMode } from "../../../../components/src/CommonUtils";
import OneTimeMobileCard from "./OneTimeMobileCard.web";
const { Option } = Select;

export default class OffsetOneTimeLifeStyle extends OffsetOneTimeLifeStyleController {

  renderHeading = () => {
    const {
      CALCULATE_FOOTPRINT,
      EKOBON_APPROACH1,
      EKOBON_APPROACH2,
      EKOBON_APPROACH2_WEB,
      OFFSET_FOOTPRINT_LIFESTYLE,
      LIFESTYLE_APPROACH
    } = constants.IndividualOffsetDetails;
    const isMobile = deviceMode.isMobile;

    const { lifeStyleCardId, lifestyleCardData, loader, clickShow } = this.state;
    return (
      <Col lg={24} md={12} xs={24} sm={24}>
        <div className="our-approach-main-sec-text-fliht offset_details_head">
          <p>{OFFSET_FOOTPRINT_LIFESTYLE?.toUpperCase()}</p>
        </div>
        <div className="our-approach-main-sec-head offset_details">
          <p className="our-approach-sec-desc text-align-lifestyle-ns ct_accordian_tab " onClick={this.handleClickFunction}>
            <span className="">
              {LIFESTYLE_APPROACH?.slice(0, 23)}
            </span>
            {isMobile ?
              <button><i className={clickShow == false ? "fa fa-chevron-down " : "fa fa-chevron-up"} aria-hidden="true"></i></button>
              : ""}
          </p>
        </div>
      </Col>
    );
  };


  renderFlightToolUses = () => {
    const {
      CALC_CARBON_LIFESTYLE1,
      CALC_CARBON_LIFESTYLE2,
      CALC_CARBON_LIFESTYLE3,
      CALC_CARBON_LIFESTYLE4
    } = constants.OffsetOneTimeLifeStyle;

    const { lifeStyleCardId, lifestyleCardData, loader, clickShow } = this.state;

    let toolUses = [
      {
        id: 1,
        name: CALC_CARBON_LIFESTYLE1,
      },
      {
        id: 2,
        name: CALC_CARBON_LIFESTYLE2,
      },
      {
        id: 3,
        name: CALC_CARBON_LIFESTYLE3,
      },
      {
        id: 4,
        name: CALC_CARBON_LIFESTYLE4,
      },
    ];
    return (
      <div
        className="about-hate-climate-chng-sec Tool_user"
        style={{ padding: "0", marginTop: "90px" }}
      >
        <div className="container">
          <Row gutter={48} className={clickShow == false ? "ct_para_cnt align-items-start" : "ct_accordion_item align-items-start"}>
            {toolUses.map((e: any, i: any) => {
              return (
                <Col lg={12} key={i}>
                  <div className="about-hate-climate-chng-text-second Tool_user_section ">
                    <Row className="ct_grid_2">
                      <Col lg={3} className="">
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
                          <p className="pText" style={{ fontWeight: "400" }}>
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
  render() {
    const {
      CALC_CARBON_LIFESTYLE1,
      CALC_CARBON_LIFESTYLE2,
      CALC_CARBON_LIFESTYLE3,
      CALC_CARBON_LIFESTYLE4,
    } = constants.OffsetOneTimeLifeStyle;
    const isMobile = deviceMode.isMobile;

    const { lifeStyleCardId, lifestyleCardData, loader, clickShow } = this.state;
    return (
      <div className="one-time-offset-sec">
        {console.log({ clickShow })}
        <IndividualOffset />
        <Row gutter={16} className=" ct_formate_margin_padding remove-overflow-x py-3 px-2 align-items-start">
          <Col lg={16} md={16}>
            <div>
              <div className="offset-top-bg">
                {isMobile ? <OneTimeMobileCard /> : <></>}
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/g473ak6p1lbdt5c9nnvxuk7tpx8v/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Lifestyle_Img.jpg%22%3B%20filename%2A%3DUTF-8%27%27Lifestyle_Img.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </div>
              {!isMobile ? <OneTimeCard /> : <></>}
              {isMobile ? (
                <>
                  {
                    <div>
                      <Row gutter={16}>
                        {window.location.pathname ===
                          "/individual/offset-onetime" && (
                            <>
                              {this.renderHeading()}
                              {this.renderFlightToolUses()}
                            </>
                          )}
                      </Row>
                    </div>
                  }
                  <br />
                  {/* <>
                    <div className="carbon-offset-onetime-life-sec-card-dropdown dropdown-border-ns">
                      <p>Select an option</p>
                      <Select
                        className="select-border-ns"
                        placeholder="Select --"
                        size="large"
                        defaultValue={this.state?.lifeStyleCardselected}
                        value={this.state?.lifeStyleCardselected}
                        allowClear
                        onChange={this.handleSelectLifeStyleCardMobile.bind(
                          this
                        )}
                      >
                        {lifestyleCardData.map((data: any) => (
                          <Option
                            value={data.attributes.name}
                            key={data.id}
                            className="offset-onetime-pacakge-i"
                          >
                            {data.attributes.name + " "}
                          </Option>
                        ))}
                      </Select>
                    </div>
                  </> */}
                </>
              ) : (
                <></>
              )}
              <div className="carbon-offset-onetime-life-sec carbon-offset-bg-img Life_style_NoData">
                {loader ? (
                  <div className="screen-loader-center">
                    <img
                      src={ScreenLoader}
                      alt="loader"
                      className="screen-loader"
                    />
                  </div>
                ) : !isMobile ? (
                  <Row gutter={32}>
                    {lifestyleCardData.length > 0 ? (
                      <>
                        {lifestyleCardData.map((data: any) => (
                          <Col lg={12} md={12} key={data.id}>
                            <div className="carbon-offset-onetime-life-sec-card">
                              <div
                                className={
                                  lifeStyleCardId === data.id
                                    ? "carbon-offset-onetime-life-card-img life-card-img-select"
                                    : "carbon-offset-onetime-life-card-img"
                                }
                              >
                                <img
                                  src={
                                    data.attributes.image
                                      ? data.attributes.image
                                      : DefaultImg
                                  }
                                  alt="SingleImg"
                                  onClick={(e) =>
                                    this.handleSelectLifeStyleCard(
                                      data.id,
                                      data.attributes.name
                                    )
                                  }
                                />
                              </div>
                              <div className="carbon-offset-onetime-life-card-text py-4 px-4  d-flex align-items-center justify-content-center">
                                <Row className="carbon-offset-onetime-life-card-text-head">
                                  <p>{data.attributes.name}</p>
                                  <Popover
                                    content={data.attributes.description}
                                    trigger="hover"
                                  >
                                    {data.attributes.description.length >
                                      50 && <img src={iImg} />}
                                  </Popover>
                                </Row>
                                <div className="carbon-offset-onetime-life-card-text-para">
                                  <p>
                                    {data.attributes.description.length > 45
                                      ? data.attributes.description
                                        .substr(0, 45)
                                        .concat("...")
                                      : data.attributes.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </>
                    ) : (
                      <>
                        {IndividualLifeStyleData.map((data: any) => (
                          <Col lg={12} md={12} key={data.id}>
                            <div className="carbon-offset-onetime-life-sec-card">
                              <div
                                className={
                                  "carbon-offset-onetime-life-card-img"
                                }
                              >
                                <img
                                  src={
                                    data.attributes.image
                                      ? data.attributes.image
                                      : DefaultImg
                                  }
                                  alt="SingleImg"
                                />
                              </div>
                              <div className="carbon-offset-onetime-life-card-text py-4 px-4">
                                <Row className="carbon-offset-onetime-life-card-text-head justify-content-between">
                                  <p>{data.attributes.name}</p>
                                  <Popover
                                    content={data.attributes.description}
                                    trigger="hover"
                                  >
                                    {data.attributes.description.length >
                                      50 && <img src={iImg} />}
                                  </Popover>
                                </Row>
                                <div className="carbon-offset-onetime-life-card-text-para">
                                  <p>
                                    {data.attributes.description.length > 45
                                      ? data.attributes.description
                                        .substr(0, 45)
                                        .concat("...")
                                      : data.attributes.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </>
                    )}
                  </Row>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {isMobile ? (
              <Col lg={8} md={8}>
                <OrderSummary id={""} history={this.state} location={""} data={"Select an option"}
                  defaultValue={this.state?.lifeStyleCardselected}
                  value={this.state?.lifeStyleCardselected}
                  lifestyleCardData={lifestyleCardData}
                  allowClear
                  onChange={this.handleSelectLifeStyleCardMobile.bind(
                    this
                  )} />
              </Col>
            ) : (
              <></>
            )}
            <IndividualOffsetDetails
              id={""}
              history={""}
              location={""}
              heading={"Lifestyle"}
              rightData={""}
              leftData={""}
              toolUses={[
                {
                  id: 1,
                  name: CALC_CARBON_LIFESTYLE1,
                },
                {
                  id: 2,
                  name: CALC_CARBON_LIFESTYLE2,
                },
                {
                  id: 3,
                  name: CALC_CARBON_LIFESTYLE3,
                },
                {
                  id: 4,
                  name: CALC_CARBON_LIFESTYLE4,
                },
              ]}
            />
          </Col>
          {!isMobile ? (
            <Col lg={8} md={8}>
              <OrderSummary id={""} history={this.state} location={""} />
            </Col>
          ) : (
            <></>
          )}
        </Row>
      </div >
    );
  }
}
