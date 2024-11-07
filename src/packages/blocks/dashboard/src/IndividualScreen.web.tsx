import React from "react";
import {
  LOCATION,
  FIRSTBLOCK,
  FIRSTSQUARE,
  SECONDSQUARE,
  WINDMIL,
  CARBONWIND,
  PAGES,
  DownloadIcon,
  DefaultImg,
  SUCCUSSLOGO,
} from "./assets";
import "./assets";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Text,
  Tooltip,
} from "recharts";
import "./IndividaualScreen.web.css";
import "../../CustomisableUserProfiles/src/IndiviCustomisableUserProfiles.web.css";
import IndividualScreenController, {
  Props,
} from "./IndividualScreenController.web";
import { Link } from "react-router-dom";
import { Link as Links } from "react-scroll";
import { compose, withProps } from "recompose";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";
import DashboardDownwardCarausal from "./DashboardDownwardCarausal.web";
import DashboardMiddleCarausal from "./DashboardMiddleCarausal.web";
import DashboardTableWeb from "./IndvTable/DashboardTableWeb.web";
import DashboardOrderTableWeb from "./IndvTable/DashboardOrderTableWeb.web";
import { Row, Col, Spin } from "antd";
import ReactPaginate from "react-paginate";
import ProjectDistribution from "./IndvDashboardChart/ProjectDistribution.web";
import ImpactCo2 from "./IndvDashboardChart/ImpactCo2.web";
import { deviceMode } from "../../../components/src/CommonUtils";
import { constants } from "../../../components/src/types";
const { isMobile } = deviceMode;
import { getMainImage } from "../../../components/src/CommonUtils";
export class IndividualScreen extends IndividualScreenController {
  renderIndividualMiddleScreen1 = () => {
    const RadioButtons = () => {
      const {
        CURRENT_YEAR,
        CURRENT_YEAR_TITLE,
        SINCE_MEMBER,
        SINCE_MEMBER_TITLE,
        GRAPH_IMPACT
      } = constants.IndividualScreen;

      return (
        <>
          <div className="first_block_current_year_container first-year-container">
            <input
              type="radio"
              value={CURRENT_YEAR}
              name={CURRENT_YEAR}
              checked={this.state?.yourImpactSelect === CURRENT_YEAR}
              onChange={() => {
                this.setState({
                  yourImpactSelect: CURRENT_YEAR,
                });
              }}
            />{" "}
            <span className="first_block_current_year first-year-container-text">
              {CURRENT_YEAR_TITLE}
            </span>
            <input
              type="radio"
              value={SINCE_MEMBER}
              name={SINCE_MEMBER}
              checked={this.state?.yourImpactSelect === SINCE_MEMBER}
              onChange={() => {
                this.setState({
                  yourImpactSelect: SINCE_MEMBER,
                });
              }}
            />{" "}
            <span className="first_block_since_member first-year-container-text">
              {SINCE_MEMBER_TITLE}
            </span>
          </div>
        </>
      );
    };

    const RenderPopup = () => {
      const { popupText } = constants?.BusinessScreen;
      return (
        <div className="dashboard-popup-container-ns">
          <div className="dashboard-popup-sub-container-ns">
            <img
              src={SUCCUSSLOGO}
              alt="success-logo"
              className="dashboard-popup-success-icon-ns"
            />
            <div className="dashboard-popup-text-ns">
              <span className="dashboard-popup-text-right-ns">
                {popupText[0]}
              </span>
              <Link
                className="dashboard-popup-link-ns"
                to="/individual/offset-onetime"
              >
                {popupText[1]}
              </Link>
              <span className="dashboard-popup-text-right-ns dashboard-popup-text-left-ns">
                {popupText[2]}
              </span>
              <Link
                className="dashboard-popup-link-ns"
                to="/individual/plant-tree"
              >
                {popupText[3]}
              </Link>
              <span className="dashboard-popup-text-left-ns">
                {popupText[4]}
              </span>
            </div>
          </div>
        </div>
      );
    };

    return (
      <>
        <Row gutter={16}>
          <div className="Individual_middleScreen1">
            <Col lg={12} md={12} xs={24} sm={24}>
              <div className="Individual_first_block">
                <div className="first_block1">
                  <div>
                    {this.state?.YourGiftImpact ? <RadioButtons /> : ""}

                    <div className="first_block_img">
                      <img src={FIRSTBLOCK} alt="LOGO" className="blockImg" />
                      <p>
                        <span className="firstblockN">
                          {localStorage.getItem("token")
                            ? this.state?.YourGiftImpact
                              ? this.state?.yourImpactSelect === "current_year"
                                ? this.state?.your_impact_total_recent
                                : this.state?.your_impact_total
                              : this.state?.total_offset
                            : 0}
                        </span>
                        <span className="first_blockT">tonnes</span>
                      </p>
                    </div>
                  </div>
                  <div className="impact-container-block">
                    <div className="first_b_inner">
                      <button
                        className={
                          this.state.YourGiftImpact
                            ? "first_btn impact-block-button"
                            : "first_block_rightP impact-block-button"
                        }
                        onClick={() => this.YourGiftImpactTabClick("Your")}
                      >
                        Your Impact
                      </button>
                      <button
                        className={
                          !this.state.YourGiftImpact
                            ? "first_btn impact-block-button"
                            : "first_block_rightP impact-block-button"
                        }
                        onClick={() => this.YourGiftImpactTabClick("Gifted")}
                      >
                        Gifted Impact
                      </button>
                    </div>
                  </div>
                </div>
                <div className="first_blocklastP_main">
                  {this.state.showPopup ? <RenderPopup /> : null}
                  <p className="first_blocklastP">
                    {localStorage.getItem("token") ? (
                      <span className="head-off-plant-text indi-dashboard-header-text">
                        Head to
                        <Link to="/individual/offset-onetime">Offset</Link>
                        or
                        <Link to="/individual/plant-tree">Plant trees</Link>
                        to create more impact
                      </span>
                    ) : (
                      <>
                        <Link to="/login">
                          <span
                            style={{
                              color: "var(--color-individual)",
                              fontFamily: "Roboto-Bold",
                            }}
                          >
                            Login &nbsp;
                          </span>
                        </Link>
                        <span
                          className="first_blocklastP"
                          style={{ color: "#7c8188" }}
                        >
                          to Create Positive Climate Impact
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={12} md={12} xs={24} sm={24}>
              <div className="Individual_second_block">
                <Row gutter={6}>
                  <Col lg={12} md={12} xs={12} sm={12}>
                    <div className=" Individual_first_square  firstsquare_box-50">
                      <div className="firstsquare_box">
                        <img
                          src={FIRSTSQUARE}
                          alt="LOGO"
                          className="blockImg"
                        />
                        <p className="firstsquareN">
                          {this.state?.plant_trees ? this.state?.plant_trees : 0}
                        </p>
                        <p className="firstsquareT">Trees Planted</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={12} md={12} xs={12} sm={12}>
                    <div className="Individual_first_square  firstsquare_box-50  Individual_second_square">
                      <div className="secondsquare_box">
                        <img
                          src={SECONDSQUARE}
                          alt="LOGO"
                          className="blockImg"
                        />
                        <p className="firstsquareN secondsquareN">
                          {this.state?.project_count
                            ? this.state?.project_count
                            : 0}
                        </p>
                        <p className=" firstsquareT secondsquareT">
                          Projects Invested
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </div>
        </Row>
      </>
    );
  };

  renderIndividualMiddleScreenMyProject = () => {
    return (
      <div
        id="myProject"
        className="Carousel_Project_Main order-history-myproject-height"
      >
        <DashboardMiddleCarausal
          dataList={this.state?.myProjectList}
          isUserLoggedIn={this.state?.isUserLoggedIn}
          heading={"My Projects"}
        />
      </div>
    );
  };

  renderIndividualMiddleScreenOrderHistory = () => {
    return isMobile ? (
      <div className="Individual_T_M_Screen">
        <div className="T_M_box_inner_order">
          <h2 className="s_m_inner_H_order">Order History</h2>
          <div className="s_m_inner_btn_main_order">
            <button
              className={
                this.state?.orderHistoryOneTime
                  ? "climate_project_active_line"
                  : "s_m_inner_btn"
              }
              onClick={() => {
                this.setState({ orderHistoryOneTime: true }, () =>
                  this.getOneTimeOrderHistory()
                );
              }}
            >
              One Time
            </button>
            <button
              className={
                !this.state?.orderHistoryOneTime
                  ? "climate_project_active_line"
                  : "s_m_inner_btn"
              }
              onClick={() => {
                this.setState({ orderHistoryOneTime: false }, () =>
                  this.getOneTimeOrderHistory()
                );
              }}
            >
              Subscription
            </button>
          </div>
          <div className="s_m_box T_M_box ns-order-history-box">
            {this.state?.orderHistoryOneTime
              ? this.renderIndividualOrderHistoryOneTime()
              : this.renderIndividualOrderHistorySubscription()}
          </div>
        </div>
      </div>
    ) : (
      <div className="Individual_T_M_Screen">
        <div className="T_M_Screen_btn">
          <h1 className="empty_card_lbl_P">Order History</h1>
          <div className="T_M_Screen_btn1">
            <button
              className={
                this.state?.orderHistoryOneTime
                  ? "T_M_Screen_btn_Main_link"
                  : "T_M_Screen_btn_Main"
              }
              onClick={() => {
                this.setState({ orderHistoryOneTime: true }, () =>
                  this.getOneTimeOrderHistory()
                );
              }}
            >
              One time
            </button>
            <button
              className={
                !this.state?.orderHistoryOneTime
                  ? "T_M_Screen_btn_Main_link"
                  : "T_M_Screen_btn_Main"
              }
              onClick={() => {
                this.setState({ orderHistoryOneTime: false }, () =>
                  this.getOneTimeOrderHistory()
                );
              }}
            >
              Subscriptions
            </button>
          </div>
        </div>
        <div className="s_m_box T_M_box">
          {this.state?.orderHistoryOneTime
            ? this.renderIndividualOrderHistoryOneTime()
            : this.renderIndividualOrderHistorySubscription()}
        </div>
      </div>
    );
  };

  renderIndividualOrderHistoryOneTime = () => {
    let orderPageCount =
      this.state?.indOrderHistoryOneTime?.meta?.pagination?.total_pages;
    return (
      <>
        {this.state?.isUserLoggedIn && (
          <>
            <DashboardOrderTableWeb
              isUserLoggedIn={this.state?.isUserLoggedIn}
              dataList={this.state?.indOrderHistoryOneTime?.data}
            />
            <ReactPaginate
              className="class-pag-order ns-page-desktop ns-page ns-font"
              previousLabel={<i className="fa fa-angle-left" />}
              nextLabel={<i className="fa fa-angle-right" />}
              breakLabel={"..."}
              breakClassName={"page-item"}
              onPageChange={this.handlePageClick}
              pageRangeDisplayed={3}
              pageCount={orderPageCount}
              pageClassName={"page-item"}
              breakLinkClassName={"page-link"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              nextClassName={"page-item"}
              previousLinkClassName={"previous page-link"}
              nextLinkClassName={"next page-link"}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </>
        )}
        {!this.state?.isUserLoggedIn && (
          <div className="T_M_Header_Center border_empty_state">
            <img src={PAGES} alt="img" className="   T_M_windmil_image" />
            <p className="s_m_boxP T_m_boxP">
              No Orders two show login&nbsp;
              <Link to="/login">
                <span
                  style={{
                    color: "var(--color-individual)",
                    fontFamily: "Roboto-Bold",
                  }}
                >
                  Login
                </span>
              </Link>
              &nbsp;Start Offsetting your Carbon
            </p>
          </div>
        )}
      </>
    );
  };

  renderIndividualOrderHistorySubscription = () => {
    let orderPageCount =
      this.state?.indOrderHistoryOneTime?.meta?.pagination?.total_pages;
    return (
      <>
        {this.state?.isUserLoggedIn && (
          <>
            <DashboardTableWeb
              isUserLoggedIn={this.state?.isUserLoggedIn}
              dataList={this.state?.indOrderHistoryOneTime?.data}
              change={this.state?.orderHistoryOneTime}
            />
            <ReactPaginate
              className="class-pag inv-order-dash-pagin ns-page"
              previousLabel={<i className="fa fa-angle-left" />}
              nextLabel={<i className="fa fa-angle-right" />}
              breakLabel={"..."}
              breakClassName={"page-item"}
              onPageChange={this.handlePageClick}
              pageRangeDisplayed={5}
              pageCount={orderPageCount}
              pageClassName={"page-item"}
              breakLinkClassName={"page-link"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              nextClassName={"page-item"}
              previousLinkClassName={"previous page-link"}
              nextLinkClassName={"next page-link"}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </>
        )}
        {!this.state?.isUserLoggedIn && (
          <div className="T_M_Header_Center border_empty_state">
            <img src={PAGES} alt="img" className="   T_M_windmil_image" />
            <p className="s_m_boxP T_m_boxP">
              No Orders two show login&nbsp;
              <Link to="/login">
                <span
                  style={{
                    color: "var(--color-individual)",
                    fontFamily: "Roboto-Bold",
                  }}
                >
                  Login
                </span>
              </Link>
              &nbsp;Start Offsetting your Carbon
            </p>
          </div>
        )}
      </>
    );
  };

  renderIndividualMiddleCarouselScreen = () => {
    return (
      <>
        <DashboardDownwardCarausal
          dataList={this.state?.getCarbonFootprint}
          isUserLoggedIn={this.state?.isUserLoggedIn}
          heading={"How to reduce Carbon Footprint"}
        />
      </>
    );
  };

  renderIndividualMiddleMapTest = () => {
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
          lat: parseFloat(this.state?.projectLocation?.lat),
          lng: parseFloat(this.state?.projectLocation?.lng),
        }}
      >
        <Marker
          position={{
            lat: parseFloat(this.state?.projectLocation?.lat),
            lng: parseFloat(this.state?.projectLocation?.lng),
          }}
        />
      </GoogleMap>
    ));
    return (
      <div className="Individual_S_M_Screen map_screen_main">
        <DashboardGoogleMap />
        <div className="s_m_box_modal map_screen_main_inner">
          {this.state?.isUserLoggedIn && (
            <>
              <div className="s_m_inner_box1">
                <h2 className="s_m_inner_H">Your Impact</h2>
                <div className="s_m_inner_btn_main">
                  <button
                    className={
                      this.state?.climateProject
                        ? "climate_project_active_line"
                        : "s_m_inner_btn"
                    }
                    onClick={() => this.ClimatProjectTabClick("Climate")}
                  >
                    Climate Projects
                  </button>
                  <button
                    className={
                      !this.state?.climateProject
                        ? "climate_project_active_line"
                        : "s_m_inner_btn"
                    }
                    onClick={() => this.ClimatProjectTabClick("Trees")}
                  >
                    Trees Planted
                  </button>
                </div>
              </div>
              <hr className="s_m_inner_box_hr_line hrline" />
              {this.state?.climateProject ? (
                <div className="Over_flow_css climate-project-inner-section">
                  {this.state?.ClimateProjectList?.length > 0 ? (
                    <>
                      <Spin
                        tip="Loading..."
                        spinning={this.state?.isImpactLoader}
                      >
                        {this.state?.ClimateProjectList?.map((item: any) => {
                          return (
                            <div
                              className={
                                item?.isSelected
                                  ? "active_project climate-inner-box"
                                  : "s_m_inner_box2 climate-inner-box"
                              }
                              key={item?.id}
                              onClick={() => {
                                this.setState(
                                  {
                                    climateProjectClick: item,
                                    showPlanttreeModal: false,
                                    showProjectModal: true,
                                    projectLocation: {
                                      lat: item?.attributes?.latitude,
                                      lng: item?.attributes?.longitude,
                                    },
                                  },
                                  () => {
                                    this.onSelectClimateProjectCell(item);
                                  }
                                );
                              }}
                            >
                              <div className="s_m_box2_inner_part">
                                <div className="s_m_box2_inner_Image">
                                  <img
                                    src={
                                      getMainImage(item?.attributes?.image)[0]
                                        ? getMainImage(item?.attributes?.image)[0]
                                        : CARBONWIND
                                    }
                                    alt="img"
                                    className=" s_m_inner_Image_main"
                                  />
                                </div>
                                <div className="s_m_box2_inner_location image-text-map">
                                  <h4 className="T_M_inner2_head1">
                                    {item?.attributes?.project_name}
                                  </h4>
                                  <div className="T_M_inner2_image">
                                    <img
                                      src={LOCATION}
                                      alt="indivitual-project-img1"
                                      className="T_m_location_image"
                                    />
                                    <p className="T_m_innerP">
                                      {item?.attributes?.location}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="s_m_box2_inner_carbon_off">
                                <div>
                                  <h1 className="T_M_Main_H ">
                                    <span className="T_M_Main_H1">
                                      Total Carbon
                                    </span>
                                    <br />
                                    Offset
                                  </h1>
                                </div>
                                <div className="s_m_box2_inner_carbon_off1">
                                  <p>
                                    <span className="firstblockN  T_M_InnerN">
                                      {Math.round(
                                        item?.attributes?.carbon_offset * 100
                                      ) / 100}
                                    </span>
                                    <span className="first_blockT T_M_Inner_boxP">
                                      tonnes
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Spin>
                    </>
                  ) : (
                    <div className="T_M_Header_Center">
                      <img
                        src={WINDMIL}
                        alt="img"
                        className="s_m_windmil_image"
                      />
                      <p className=" s_m_boxP">
                        Start Offsetting your <br /> Carbon and see your impact
                        <br /> in real time.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="Over_flow_css climate-project-inner-section">
                  {this.state?.plantTreeList?.length > 0 ? (
                    <>
                      <Spin
                        tip="Loading..."
                        spinning={this.state?.isImpactLoader}
                      >
                        {this.state?.plantTreeList?.map((item: any) => {
                          return (
                            <div
                              className={
                                item?.isSelected
                                  ? "active_project climate-inner-box"
                                  : "s_m_inner_box2 climate-inner-box"
                              }
                              onClick={() => {
                                this.setState(
                                  {
                                    treeplantedclickdata: item,
                                    showProjectModal: false,
                                    showPlanttreeModal: true,
                                    projectLocation: {
                                      lat: item?.attributes?.latitude,
                                      lng: item?.attributes?.longitude,
                                    },
                                  },
                                  () => {
                                    this.onSelectpPlanttreeCell(item);
                                  }
                                );
                              }}
                            >
                              <div className="s_m_box2_inner_part">
                                <div className="s_m_box2_inner_Image">
                                  <img
                                    src={item?.attributes?.image}
                                    alt="img"
                                    className=" s_m_inner_Image_main"
                                  />
                                </div>
                                <div className="s_m_box2_inner_location">
                                  <h4 className="T_M_inner2_head1">
                                    {item?.attributes?.project_name}
                                  </h4>
                                  <div className="T_M_inner2_image">
                                    <img
                                      src={LOCATION}
                                      alt="indivitual-project-img2"
                                      className="T_m_location_image"
                                    />
                                    <p className="T_m_innerP">
                                      {item?.attributes?.location}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="s_m_box2_inner_carbon_off">
                                <div>
                                  <h1 className="T_M_Main_H">
                                    <span className="T_M_Main_H1">
                                      Total Carbon
                                    </span>
                                    <br />
                                    Offset
                                  </h1>
                                </div>
                                <div className="s_m_box2_inner_carbon_off1">
                                  <p>
                                    <span className="firstblockN  T_M_InnerN">
                                      {Math.round(
                                        item?.attributes?.carbon_offset * 100
                                      ) / 100}
                                    </span>
                                    <span className="first_blockT T_M_Inner_boxP">
                                      tonnes
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Spin>
                    </>
                  ) : (
                    <div className="T_M_Header_Center">
                      <img
                        src={WINDMIL}
                        alt="img"
                        className="s_m_windmil_image"
                      />
                      <p className=" s_m_boxP">
                        Start Offsetting your <br /> Carbon and see your impact
                        <br /> in real time.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
          {!this.state?.isUserLoggedIn && (
            <div className="T_M_Header_Center">
              <img src={WINDMIL} alt="img" className="s_m_windmil_image" />
              <p className=" s_m_boxP">
                <Link to="/login">
                  <span
                    style={{
                      color: "var(--color-individual)",
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    Login &nbsp;
                  </span>
                </Link>
                to Start Offsetting your <br /> Carbon,and see your impact
                <br /> in real time.
              </p>
            </div>
          )}
        </div>
        {this.state?.showProjectModal && this.renderProjectDetailModal()}
        {this.state?.showPlanttreeModal && this.renderTreePlantedDetailModal()}
      </div>
    );
  };

  renderProjectDetailModal = () => {
    if (!this.state?.climateProjectClick) return;
    const { project_name, image, carbon_offset } =
      this.state?.climateProjectClick?.attributes;
    const { TONNES } = constants?.IndividualScreen;

    return (
      <>
        <div className="map_marker map-marker-section">
          <p
            onClick={() => {
              this.setState({
                showProjectModal: false,
              });
            }}
            className="plantTreeClose"
          >
            X
          </p>
          <div className="markerinner">
            <img
              src={getMainImage(image)[0] ? getMainImage(image)[0] : DefaultImg}
              alt="dashboard-map-image"
              className="marker_img"
            />
            <p
              className="Marker_project_name"
              style={{ margin: "0px 0px 0 10px" }}
            >
              {project_name}
            </p>
          </div>
          <hr style={{ background: "white", margin: "5px 0px 5px 0" }} />
          <div
            className="markerinner"
            style={{ justifyContent: "space-between" }}
          >
            <p className="Marker_project_name">Total Impact</p>
            <p>
              <span className="marker_text">
                {carbon_offset ? Math.round(carbon_offset * 100) / 100 : 0}
              </span>
              <span className="first_blockT weight-map-symb">{TONNES}</span>
            </p>
          </div>
          <hr style={{ background: "white", margin: "5px 0px 5px 0" }} />
          <div className="markerinner">
            <a href="#myProject">
              <p className="Marker_see_project">See Project</p>
            </a>
          </div>
        </div>
      </>
    );
  };

  renderTreePlantedDetailModal = () => {
    if (!this.state?.treeplantedclickdata) return;

    const { carbon_offset, image, project_name, no_tree_planted } =
      this.state?.treeplantedclickdata?.attributes;
    return (
      <>
        <div className="map_marker map-marker-section">
          <p
            onClick={() => {
              this.setState({
                showPlanttreeModal: false,
              });
            }}
            className="plantTreeClose"
          >
            X
          </p>
          <div className="markerinner">
            <img src={image} alt="" className="marker_img" />
            <p
              className="Marker_project_name"
              style={{ margin: "0px 0px 0 10px" }}
            >
              {project_name}
            </p>
          </div>
          <hr style={{ background: "white", margin: "5px 0px 5px 0" }} />
          <div
            className="markerinner"
            style={{ justifyContent: "space-between" }}
          >
            <p className="Marker_project_name">Total Impact</p>
            <p>
              <span className="marker_text">
                {carbon_offset ? Math.round(carbon_offset * 100) / 100 : 0}
              </span>
              <span className="first_blockT weight-map-symb">tonnes</span>
            </p>
          </div>
          <hr style={{ background: "white", margin: "5px 0px 5px 0" }} />
          <div
            className="markerinner"
            style={{ justifyContent: "space-between" }}
          >
            <p className="Marker_project_name">Trees planted</p>
            <p>
              <span className="marker_text">{no_tree_planted}</span>
            </p>
          </div>
        </div>
      </>
    );
  };

  renderClimateProjectScreen = () => {
    return (
      <div className="Over_flow_css">
        {this.state?.ClimateProjectList?.length > 0 ? (
          <>
            {this.state?.ClimateProjectList?.map((item: any) => {
              return (
                <div
                  className={
                    item?.isSelected ? "active_project" : "s_m_inner_box2"
                  }
                  key={item?.id}
                  onClick={() => {
                    this.setState(
                      {
                        climateProjectClick: item,
                        showPlanttreeModal: false,
                        showProjectModal: true,
                        projectLocation: {
                          lat: item?.attributes?.latitude,
                          lng: item?.attributes?.longitude,
                        },
                      },
                      () => {
                        this.onSelectClimateProjectCell(item);
                      }
                    );
                  }}
                >
                  <div className="s_m_box2_inner_part">
                    <div className="s_m_box2_inner_Image">
                      <img
                        src={
                          item?.attributes?.image
                            ? item?.attributes?.image
                            : CARBONWIND
                        }
                        alt="img"
                        className=" s_m_inner_Image_main"
                      />
                    </div>
                    <div className="s_m_box2_inner_location">
                      <h4 className="T_M_inner2_head1">
                        {item?.attributes?.project_name}
                      </h4>
                      <div className="T_M_inner2_image">
                        <img
                          src={LOCATION}
                          alt="indivitual-project-img3"
                          className="T_m_location_image"
                        />
                        <p className="T_m_innerP">{item?.attributes?.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="s_m_box2_inner_carbon_off">
                    <div>
                      <h1 className="T_M_Main_H ">
                        <span className="T_M_Main_H1"> Total Carbon</span>
                        <br />
                        Offset
                      </h1>
                    </div>
                    <div className="s_m_box2_inner_carbon_off1">
                      <p>
                        <span className="firstblockN  T_M_InnerN">0</span>
                        <span className="first_blockT T_M_Inner_boxP">
                          tonnes
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="T_M_Header_Center">
            <img src={WINDMIL} alt="img" className="s_m_windmil_image" />
            <p className=" s_m_boxP">
              Start Offsetting your <br /> Carbon,and see your impact
              <br /> in real time.
            </p>
          </div>
        )}
      </div>
    );
  };

  renderTressPlantedScreen = () => {
    return (
      <div className="Over_flow_css">
        {this.state?.plantTreeList?.length > 0 ? (
          <>
            {this.state?.plantTreeList?.map((item: any) => {
              return (
                <div
                  className={
                    item?.isSelected ? "active_project" : "s_m_inner_box2"
                  }
                  onClick={() => {
                    this.setState(
                      {
                        treeplantedclickdata: item,
                        showProjectModal: false,
                        showPlanttreeModal: true,
                        projectLocation: {
                          lat: item?.attributes?.latitude,
                          lng: item?.attributes?.longitude,
                        },
                      },
                      () => {
                        this.onSelectpPlanttreeCell(item);
                      }
                    );
                  }}
                >
                  <div className="s_m_box2_inner_part">
                    <div className="s_m_box2_inner_Image">
                      <img
                        src={item?.attributes?.image}
                        alt="img"
                        className=" s_m_inner_Image_main"
                      />
                    </div>
                    <div className="s_m_box2_inner_location">
                      <h4 className="T_M_inner2_head1">
                        {item?.attributes?.project_name}
                      </h4>
                      <div className="T_M_inner2_image">
                        <img
                          src={LOCATION}
                          alt="indivitual-project-img4"
                          className="T_m_location_image"
                        />
                        <p className="T_m_innerP">{item?.attributes?.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="s_m_box2_inner_carbon_off">
                    <div>
                      <h1 className="T_M_Main_H">
                        <span className="T_M_Main_H1"> Total Carbon</span>
                        <br />
                        Offset
                      </h1>
                    </div>
                    <div className="s_m_box2_inner_carbon_off1">
                      <p>
                        <span className="firstblockN  T_M_InnerN">
                          {Math.round(item?.attributes?.total_offset * 100) / 100}
                        </span>
                        <span className="first_blockT T_M_Inner_boxP">
                          tonnes
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="T_M_Header_Center">
            <img src={WINDMIL} alt="img" className="s_m_windmil_image" />
            <p className=" s_m_boxP">
              Start Offsetting your <br /> Carbon,and see your impact
              <br /> in real time.
            </p>
          </div>
        )}
      </div>
    );
  };

  renderProjectDistributionAndImpactWithOffsetType = () => {
    const {
      PROJECT_DISTRIBUTION_CURRENT,
      CURRENT_YEAR_TITLE,
      SINCE_MEMBER_TITLE,
      PROJECT_DISTRIBUTION_SINCE,
    } = constants.IndividualScreen;
    const ImpactCo2New = () => {
      let xKey = "year";
      let yKey = "value";

      const blues = [
        ["#457AA6"],
        ["#457AA6", "#E3EBF2"],
        ["#264F73", "#457AA6", "#E3EBF2"],
        ["#264F73", "#457AA6", "#A2BBD2", "#E3EBF2"],
        ["#1A334A", "#264F73", "#457AA6", "#A2BBD2", "#E3EBF2"],
      ];

      const CustomTooltip = (props: any) => {
        const { active, label, payload } = props;
        if (active && payload && payload?.length) {
          return (
            <div className="tooltipForChart">
              <p>{label}</p>
              <p>{payload[0]?.value}</p>
            </div>
          );
        }

        return null;
      };
      const getColor = (length: any, index: any) => {
        if (length <= blues?.length) {
          return blues[length - 1][index];
        }

        return blues[blues?.length - 1][index % blues.length];
      };

      return (
        <ResponsiveContainer
          width={"100%"}
          height={50 * this.state?.chartImpactOffsetTypeRechart?.length}
          debounce={50}
        >
          <BarChart
            data={this.state?.chartImpactOffsetTypeRechart}
            layout="vertical"
          >
            <XAxis
              axisLine={false}
              type="number"
              tickFormatter={(tick) => `${tick} tonnes`}
              allowDataOverflow={false}
            />

            <YAxis
              yAxisId={0}
              dataKey={xKey}
              type="category"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              orientation="right"
              yAxisId={1}
              dataKey={yKey}
              type="category"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey={yKey} minPointSize={2} barSize={32}>
              {this.state?.chartImpactOffsetTypeRechart?.map(
                (d: any, idx: any) => {
                  return (
                    <Cell
                      key={d["name"]}
                      fill={getColor(
                        this.state?.chartImpactOffsetTypeRechart?.length,
                        idx
                      )}
                    />
                  );
                }
              )}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      );
    };

    const RadioButtons = () => {
      return (
        <>
          <div className="projectDistributionRadio ns-project-distribution-radio">
            <div className="ns-project-distributiondradio-current">
              <input
                type="radio"
                value={PROJECT_DISTRIBUTION_CURRENT}
                name={PROJECT_DISTRIBUTION_CURRENT}
                checked={
                  this.state?.projectDistributionYourImpactSelect ===
                  PROJECT_DISTRIBUTION_CURRENT
                }
                onChange={() => {
                  this.setState({
                    projectDistributionYourImpactSelect:
                      PROJECT_DISTRIBUTION_CURRENT,
                  });
                }}
              />{" "}
              <span className="ns-project_distribution_current_year">
                {CURRENT_YEAR_TITLE}
              </span>
            </div>
            <div className="ns-project-distributiondradio-wrapper">
              <input
                type="radio"
                value={PROJECT_DISTRIBUTION_SINCE}
                name={PROJECT_DISTRIBUTION_SINCE}
                checked={
                  this.state?.projectDistributionYourImpactSelect ===
                  PROJECT_DISTRIBUTION_SINCE
                }
                onChange={() => {
                  this.setState({
                    projectDistributionYourImpactSelect:
                      PROJECT_DISTRIBUTION_SINCE,
                  });
                }}
              />{" "}
              <span className="project_distribution_since_member ">
                {SINCE_MEMBER_TITLE}
              </span>
            </div>
          </div>
        </>
      );
    };
    return (
      <div>
        <Row gutter={16}>
          <Col lg={12} md={12} xs={24} sm={24}>
            <div className="Bussiness_project_distribution one_more">
              <div
                style={{
                  display: "flex",
                }}
              >
                <h3 className="Bussiness_project_distribution_h ns-Bussiness_project_distribution_h">
                  Projects Distributions
                </h3>
                <RadioButtons />
              </div>

              {this.state?.isUserLoggedIn && (
                <div className="Pie_chart">
                  {this.state?.sumOfChartProejectDistribution > 0 ? (
                    <ProjectDistribution
                      data={
                        this.state?.projectDistributionYourImpactSelect ===
                          "project_distribution_since_your_membership"
                          ? this.state?.chartProejectDistribution
                          : this.state?.chartProejectDistributionRecent
                      }
                      currency={this.state?.ChartProjectCurrency}
                      sum={
                        this.state?.projectDistributionYourImpactSelect ===
                          "project_distribution_since_your_membership"
                          ? this.state?.sumOfChartProejectDistribution
                          : this.state?.sumOfChartProejectDistributionRecent
                      }
                    />
                  ) : (
                    <div className="T_M_Header_Center Pie_chart_div">
                      <img
                        src={WINDMIL}
                        alt="img"
                        className="s_m_windmil_image"
                      />
                      <p className=" s_m_boxP">
                        Start Offsetting your Carbon and see your
                        <br /> Projects Distributions
                      </p>
                    </div>
                  )}
                </div>
              )}
              {!this.state?.isUserLoggedIn && (
                <div className="T_M_Header_Center  Business_Header_Center_empty">
                  <img src={PAGES} alt="img" className="   T_M_windmil_image" />
                  <p className="s_m_boxP T_m_boxP  bussiness_empty_project_P">
                    <Link to="/login">
                      <span className="login-text-span">Login</span>
                    </Link>
                    To Start and see your Impact
                  </p>
                </div>
              )}
            </div>
          </Col>
          <Col lg={12} md={12} xs={24} sm={24}>
            <div className="Bussiness_Impact_Offset one_more">
              <h3 className="Bussiness_project_distribution_h">
                {constants?.IndividualScreen?.GRAPH_IMPACT}
              </h3>
              {this.state.isUserLoggedIn && (
                <div className="Pie_chart_rechart">
                  {this.state?.sumOfChartImpact ||
                    this.state?.sumOfChartImpactRecent > 0 ? (
                    <div className="recharts_container">
                      <ImpactCo2New />
                    </div>
                  ) : (
                    <div className="T_M_Header_Center Pie_chart_div">
                      <img
                        src={WINDMIL}
                        alt="img"
                        className="s_m_windmil_image"
                      />
                      <p className=" s_m_boxP">
                        Start Offsetting your Carbon and see your
                        <br /> Impact (CO2e) with offset type
                      </p>
                    </div>
                  )}
                </div>
              )}
              {!this.state?.isUserLoggedIn && (
                <div className="T_M_Header_Center  Business_Header_Center_empty">
                  <img src={PAGES} alt="img" className="   T_M_windmil_image" />
                  <p className="s_m_boxP T_m_boxP  bussiness_empty_project_P">
                    <Link to="/login">
                      <span className="login-text-span">Login</span>
                    </Link>
                    To Start and see your Impact
                  </p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    );
  };
  render() {
    return (
      <>
        <div className="Individual_MiddleContainer">
          <div className="Individual_MiddleScreenMain">
            {this.renderIndividualMiddleScreen1()}
            {this.renderProjectDistributionAndImpactWithOffsetType()}
            {this.renderIndividualMiddleMapTest()}
            {this.renderIndividualMiddleScreenMyProject()}
            {this.renderIndividualMiddleScreenOrderHistory()}
            {this.renderIndividualMiddleCarouselScreen()}
          </div>
        </div>
      </>
    );
  }
}

export default IndividualScreen;
