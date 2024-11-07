import React from "react";
import {
  LOCATION,
  DefaultImg,
  projectscreenshoot2,
  projectscreenshoot3,
  CircleCrosh,
} from "../../assets";
import "./BusinessProDetail.css";
import { Divider } from 'antd';
import Carousel from "react-elastic-carousel";
import { HISTORY } from "../../../../../components/src/comman";
import { Row, Col } from "antd";
import { Button } from "antd";
import IndividualScreenController from "../../IndividualScreenController.web";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";

import { constants } from "../../../../../components/src/types";
import { compose, withProps } from "recompose";
import { Link } from "react-router-dom";
import { deviceMode, getHtmlElementById } from '../../../../../components/src/CommonUtils';
import { getMainImage } from "../../../../../components/src/CommonUtils";
export class BusinessDashboardProjectDetail extends IndividualScreenController {
  handleback = () => {
    return HISTORY.goBack();
  };

  renderIndvProAllDetailBlock1 = () => {

    if (!this.state.pageProjectdetails) return;
    const { project_name, location } =
      this?.props?.location?.state?.item?.attributes;

    return (
      <div>
        <div className="project_All_detail_cancel_icon1_main">
          <img
            src={CircleCrosh}
            alt="img"
            onClick={() => {
              this.handleback();
            }}
            className="project_All_detail_cancel_icon1"
          />
        </div>

        <div className="Indv_ProAll_Detail_Main1">
          <div className="Indv_ProAll_Detail_Sub ">
            <h4
              className="T_M_inner2_head1 Indv_ProAll_Detail_Inner Indv_ProAll_Detail_Inner-text"
            >
              {this.state?.pageProjectdetails?.attributes?.project_name}
            </h4>
            <div className="T_M_inner2_image">
              <img src={LOCATION} alt="img" className="T_m_location_image" />
              <p className="T_m_innerP">{location}</p>
            </div>
          </div>

          <div className="Indv_ProAll_Detail_button d-flex ">
            <button
              disabled={this.state?.isPreviousButtonDisable}
              onClick={() => {
                this.preiousProjectDetails();
              }}
              className={
                this.state?.isPreviousButtonDisable
                  ? "Indv_ProAll_Detail_Main_btn1  Indv_ProAll_Detail_Main_btn_hide"
                  : "Indv_ProAll_Detail_Main_btn1  Indv_ProAll_Detail_Main_btn2"
              }
            >
              Previous Project
            </button>
            <button
              disabled={
                this.state?.isNextButtonDisable ||
                this.state?.dataAllProejctList?.length === 1
              }
              onClick={() => {
                this.NextMProjectDetails(this.props?.location?.state?.item);
              }}
              className={
                this.state?.isNextButtonDisable ||
                  this.state?.dataAllProejctList?.length === 1
                  ? "Indv_ProAll_Detail_Main_btn1  Indv_ProAll_Detail_Main_btn_hide"
                  : "Indv_ProAll_Detail_Main_btn1  Indv_ProAll_Detail_Main_btn2"
              }
            >
              Next Project
            </button>
          </div>
        </div>
      </div>
    );
  };

  renderIndvProAllDetailBlock2LeftCarouselContainer = () => {
    if (!this.state?.pageProjectdetails) return;

    const { image } = this.props?.location?.state?.item?.attributes;
    let carousel = React.createRef();
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 1, itemsToScroll: 1 },
      { width: 768, itemsToShow: 1 },
      { width: 1200, itemsToShow: 1 },
    ];

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
      <div className="abcd project-full-carousel-climate">
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay
          // autoPlaySpeed={1500}
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
          {this.state?.pageProjectdetails?.attributes?.image?.map(
            (item: any) => {
              return (
                <div className="Indv_ProAll_Detail_Main_Block2_Left_Container">
                  <img
                    src={item}
                    alt="img"
                    className="pro-details-img Indv_Pro_All_Detail_Left_Container_Image"
                  />
                </div>
              );
            }
          )}
        </Carousel>
      </div>
    );
  };

  renderSustainableDown = () => {
    if (!this.state?.pageProjectdetails) return;

    const { image } = this.props?.location?.state?.item?.attributes;
    let carousel = React.createRef();
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 1, itemsToScroll: 1 },
      { width: 768, itemsToShow: 1 },
      { width: 1200, itemsToShow: 1 },
    ];

    const images = this.props?.location?.state?.item?.attributes?.sds_images;

    let carbonData = images;
    let count = 0;
    let newArr: any = [];
    let localArr: any = [];
    carbonData?.map((item: any, index: any) => {
      localArr.push(item);
      count = count + 1;
      if (count === 8) {
        let dataObj = {
          data: localArr,
        };
        newArr.push(dataObj);
        count = 0;
        localArr = [];
      }
    });
    if (localArr.length !== 0) {
      newArr.push({
        data: localArr,
      });
    }

    // this.setState({ getCarbonFootprint: newArr });
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
      <div className="sustain sustain-carousel">
        <Carousel
          // itemsToShow={1}
          breakPoints={breakPoints}
          // enableAutoPlay
          // autoPlaySpeed={1500}
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
          {newArr?.map((item: any) => {
            return (
              <Row gutter={[16, 16]}>
                <>
                  {item.data.map((innerItem: any) => {
                    return (
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <img
                          src={innerItem}
                          alt="img"
                          className="project_standard sustin_img sustain-goals sustin_img_ns"
                        />
                      </Col>
                    );
                  })}
                </>
              </Row>
            );
          })}
        </Carousel>
      </div>
    );
  };

  renderIndvProAllDetailMiddle = (getHtmlElementById: any) => {
    const isMobile = deviceMode?.isMobile;
    if (!this.state?.pageProjectdetails) return;

    return (
      <>
        <Row gutter={16}>
          <Col lg={16} md={12} xs={24} sm={24}>
            <div>
              {this.renderIndvProAllDetailBlock2LeftCarouselContainer()}
            </div>
          </Col>
          <Col lg={8} md={12} xs={24} sm={24}>
            <div className="project-detail-side-new-sec">
              <div className="row">
                <div className="col-sm-6">
                  <p className="project-detail-side-new-sec-head text-start">Location</p>
                  <p className="text-start">
                    {this.state?.pageProjectdetails?.attributes?.location}
                    <a onClick={() => getHtmlElementById('map_climate_project')}>
                      <span style={{ color: "#88ae47" }}> (</span>
                      <span className="map_text">Map</span>
                      <span style={{ color: "#88ae47" }}>)</span>
                    </a>
                  </p>
                </div>
                {/* <div className="col-sm-4">
                  <p className="project-detail-side-new-sec-head">
                    Project Type
                  </p>
                  <p>{this.state.pageProjectdetails.attributes.project_type}</p>
                </div> */}
                <div
                  className="col-sm-6"
                >
                  <p className="project-detail-side-new-sec-head fact-sheet-padding-ns">Fact Sheet</p>
                  {!this.state?.pageProjectdetails?.attributes?.fact_sheet ? (
                    "-"
                  ) : (
                    <>
                      <span> (</span>
                      <a
                        target="_blank"
                        href={
                          this.state?.pageProjectdetails?.attributes?.fact_sheet
                        }
                      >
                        <span className="map_text link_text"> Link</span>
                      </a>
                      <span>)</span>
                    </>
                  )}
                </div>
              </div>
              <div className="margin_new_design_project margin_new_design_project_ns">
                <div className="margin_new_design_project-sec margin_new_design_project_ns">
                  <p className="project-detail-side-new-sec-head text-start">
                    Project Type
                  </p>
                  <p className="text-start">{this.state?.pageProjectdetails?.attributes?.project_type}</p>
                </div>
              </div>
              <div className="margin_new_design_project margin_new_design_project_ns">
                <div className="col-sm-6 px-0">
                  <p className="project-detail-side-new-sec-head text-start">Standard</p>
                  <img
                    className="project_standard project_standard-image project-standard-image"
                    src={
                      this.state?.pageProjectdetails?.attributes?.standard_image
                    }
                    alt="image"
                  />
                </div>
                {/* <div className="col-sm-4">
                  <p className="project-detail-side-new-sec-head">Fact Sheet</p>
                  {this.state.pageProjectdetails.attributes.fact_sheet === null ? "-" : <>
                  <span style={{ color: "#79add4" }}> (</span>
                  <a
                    target="_blank"
                    href={this.state.pageProjectdetails.attributes.fact_sheet}
                  >
                  <span className="map_text link_text"> Link</span>
                  </a>
                  <span style={{ color: "#79add4" }}>)</span>
                  </>}
                </div> */}
              </div>
              <Row>
                <Col lg={12} className="px-0">
                  <div className="margin_new_design_project margin_new_design_project_ns">
                    <p className="project-detail-side-new-sec-head text-start">
                      Project Owners
                    </p>
                    <p className="text-start">
                      {this.state?.pageProjectdetails?.attributes?.project_owner}
                    </p>
                  </div>
                </Col>
                {/* <Col lg={12}>

              <div className="margin_new_design_project">
                <p
                  className="project-detail-side-new-sec-head"
                  style={{ paddingBottom: "20px" }}
                >
                  Sustainable Development Goals <br />
                  (SDS) achieved by Project
                </p>
                {this.renderSustainableDown()}
              </div>
</Col> */}
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="headingb headingb_ns align-items-start" gutter={16}>
          <Col lg={16} md={24} xs={24} sm={24}>
            <div className="mt-4">
              <p className="project-detail-leftside-new-sec-head mb-2">
                About the Project
              </p>
              {/* <p className="project-detail-leftside-new-sec-para">
                {this.state.pageProjectdetails.attributes.about_the_project}
              </p> */}
              <p
                className="project-detail-leftside-new-sec-para"
                dangerouslySetInnerHTML={{
                  __html:
                    this.state?.pageProjectdetails?.attributes?.about_the_project,
                }}
              />
            </div>

            <div>

              <p className="project-detail-leftside-new-sec-head mt-4 mb-2">
                Project Impacts and Benefits

              </p>
              {/* <p
                className="project-detail-leftside-new-sec-para"
                dangerouslySetInnerHTML={{
                  __html: this.state.pageProjectdetails.attributes
                    .project_impact_benefit,
                }}
              /> */}
              <p
                className="project-detail-leftside-new-sec-para ct_font_16"
                dangerouslySetInnerHTML={{
                  __html:
                    this.state?.pageProjectdetails?.attributes
                      ?.project_impact_benefit,
                }}
              />
              <p
                className="project-detail-leftside-new-sec-para"
                dangerouslySetInnerHTML={{
                  __html:
                    this.state?.pageProjectdetails?.attributes?.community_benefits,
                }}
              />
              {/* <p
                className="project-detail-leftside-new-sec-para"
                dangerouslySetInnerHTML={{
                  __html:
                    this.state?.pageProjectdetails?.attributes
                      ?.environmental_benefits,
                }}
              /> */}
            </div>
          </Col>
          {isMobile ? <Divider className="divider_ns" /> : null}
          <Col lg={8} sm={24} xs={24}>
            <div className="">
              <p
                className="project-detail-side-new-sec-head"
                style={{ paddingBottom: "20px" }}
              >
                {constants?.BusinessScreen?.sustain} <br />
                {constants?.BusinessScreen?.achieved}
              </p>
              {this?.renderSustainableDown()}
            </div>
          </Col>
          {/* <Col lg={8} md={12} xs={24} sm={24}>
            <div className="project-detail-side-new-sec">
              <div className="row">
                <div className="col-sm-8">
                  <p className="project-detail-side-new-sec-head">Location</p>
                  <p>
                    {this.state.pageProjectdetails.attributes.location}
                    <Links to="#map">
                      <span style={{ color: "#88ae47" }}> (</span>
                      <span className="map_text">Map</span>
                      <span style={{ color: "#88ae47" }}>)</span>
                    </Links>
                  </p>
                </div>
                <div className="col-sm-4">
                  <p className="project-detail-side-new-sec-head">
                    Project Type
                  </p>
                  <p>{this.state.pageProjectdetails.attributes.project_type}</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-8">
                  <p className="project-detail-side-new-sec-head">Standard</p>
                  <img
                    className="project_standard"
                    src={
                      this.state.pageProjectdetails.attributes.standard_image
                    }
                    alt="image"
                  />
                </div>
                <div className="col-sm-4">
                  <p className="project-detail-side-new-sec-head">Fact Sheet</p>
                  {this.state.pageProjectdetails.attributes.fact_sheet === null ? "-" : <>
                  <span style={{ color: "#79add4" }}> (</span>
                  <a
                    target="_blank"
                    href={this.state.pageProjectdetails.attributes.fact_sheet}
                  >
                  <span className="map_text link_text"> Link</span>
                  </a>
                  <span style={{ color: "#79add4" }}>)</span>
                  </>}
                </div>
              </div>

              <div className="mt-4">
                <p className="project-detail-side-new-sec-head">
                  Project Owners
                </p>
                <p>{this.state.pageProjectdetails.attributes.project_owner}</p>
              </div>

              <div className="mt-4">
                <p
                  className="project-detail-side-new-sec-head"
                  style={{ paddingBottom: "20px" }}
                >
                  Sustainable Development Goals <br />
                  (SDS) achieved by Project
                </p>
                {this.renderSustainableDown()}
              </div>
            </div>
          </Col> */}
        </Row>
      </>
    );
  };

  renderIndvProAllDetailMap = () => {
    if (!this.state?.pageProjectdetails) return;

    const { latitude, longitude } = this.props?.location.state.item.attributes;

    const DashboardGoogleMap = compose(
      withProps({
        googleMapURL:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyCtv1DAgMkyI6GMrMUC9vzSiwsRRnt9FFQ",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: (
          <div style={{ height: `100%`, borderRadius: `15px` }} />
        ),
        mapElement: <div style={{ height: `100%`, borderRadius: `15px` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )((props: any) => (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{
          lat: Number(this.state?.pageProjectdetails?.attributes?.latitude),
          lng: Number(this.state?.pageProjectdetails?.attributes?.longitude),
        }}
      >
        <Marker
          position={{
            lat: Number(this.state?.pageProjectdetails?.attributes?.latitude),
            lng: Number(this.state?.pageProjectdetails?.attributes?.longitude),
          }}
        />
      </GoogleMap>
    ));
    return (
      <>
        <div id="map_climate_project" className="project_map">
          <DashboardGoogleMap />
        </div>
      </>
    );
  };

  renderIndvProAllDetailDownPart = () => {
    if (!this.state.pageProjectdetails) return;
    let cateogory = this.state?.pageProjectdetails?.attributes?.category_name;
    const datalist = this.props?.location?.state?.dataList;
    let data = datalist.filter(
      (datalist: any) => datalist?.attributes?.category_name === cateogory
    );
    const sliceDataList = data?.slice(0, 2);

    if (sliceDataList?.length === null) {
      return;
    }
    return (
      <div className="down_header">
        <Row justify="center">
          <h1 className="T_M_inner2_head1 Indv_ProAll_Detail_Inner">
            More{" "}
            <span className="project_category_name">
              {this.state?.pageProjectdetails?.attributes?.category_name}
            </span>
          </h1>
        </Row>
        <Row gutter={16} justify="center" style={{ width: "100%" }}>
          {sliceDataList.map((item: any) => {
            return (
              <Col className="bb" lg={6}>
                <div className="Individual_T_M_Screen">
                  <div className="s_m_box T_M_box T_M_Project_box">
                    <div className="T_M_boxMain1">
                      <div className="T_M_box_inner">
                        <img
                          src={
                            getMainImage(item?.attributes?.image)[0]
                              ? getMainImage(item?.attributes?.image)[0]
                              : DefaultImg
                          }
                          alt="img"
                          className="T_m_wind_inner"
                        />
                        <div className="climate_pro_box_inner12">
                          <div className="T_M_box_inner2">
                            <div className="T_M_inner2_head">
                              <h4 className="T_M_inner2_head1">
                                {item?.attributes?.project_name}
                              </h4>
                              <div className="T_M_inner2_image">
                                <img
                                  src={LOCATION}
                                  alt="img"
                                  className="T_m_location_image"
                                />
                                <p className="T_m_innerP">
                                  {item?.attributes?.location}
                                </p>
                              </div>
                              <div className="btn_hover_show_data">
                                <div className="T_M_Inner_box_Main">
                                  {/* <p className="project_decrip">
                                    {item.attributes.about_the_project?.slice(
                                      0,
                                      100
                                    )}
                                  </p> */}
                                </div>
                                <div className="display_none_climate_btn">
                                  <Link
                                    to={{
                                      pathname: "/individual/project-details",
                                      state: {
                                        // item: item,
                                      },
                                    }}
                                  >
                                    <button className="climat_pro_Inner_btn">
                                      Project Details
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="project-details-all-btn">
          <Link
            to={{
              pathname: `${window.location.pathname === "/individual/project-details"
                ? "/individual/project"
                : "/business/project"
                }`,
            }}
          >
            <Button
              className="indv-offset-order-btn-cart btn_all_project"
              htmlType="submit"
            >
              All Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  };
  ;

  render() {

    return (
      <>
        <div className="Indv_ProAll_Detail_Main">
          {this.renderIndvProAllDetailBlock1()}
          <div className="Indv_ProAll_Detail_Main_Block2">
            {/* {this.renderIndvProAllDetailBlock2LeftCarouselContainer()} */}
            {this.renderIndvProAllDetailMiddle(getHtmlElementById)}
            {this.renderIndvProAllDetailMap()}
          </div>
        </div>
        {this.renderIndvProAllDetailDownPart()}
      </>
    );
  }
}

export default BusinessDashboardProjectDetail;
