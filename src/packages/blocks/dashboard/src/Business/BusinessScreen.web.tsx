import React from "react";
import {
  FIRSTBLOCK,
  ORDER,
  ONEOFFSET,
  SUBOFFSET,
  BUSSINESSSIDEARROW,
  PAGES,
  FIRSTSQUARE,
  SECONDSQUARE,
  EXPAND_ICON,
  WINDMIL,
  SUCCUSSLOGO,
} from "../assets";
import BusinessScreenController, {
  Props,
} from "./BusinessScreenController.web";
import "./BusinessScreen.web.css";
import { Link } from "react-router-dom";
import { constants } from "../../../../components/src/types";
import { Row, Col } from "antd";
// import DashboardDownwardCarausal from "../DashboardDownwardCarausal.web";
import DashboardMiddleCarausal from "../DashboardMiddleCarausal.web";
import DashboardTableWeb from "../IndvTable/DashboardTableWeb.web";
// import { Area } from "@ant-design/plots";
import { Column } from "@ant-design/plots";
import ReactPaginate from "react-paginate";
import DashboardTableSubscriptionWeb from "../IndvTable/DashboardTableSubscriptionWeb.web";
import { deviceMode } from "../../../../components/src/CommonUtils";
import ProjectDistribution from "../IndvDashboardChart/ProjectDistribution.web";

const { isMobile } = deviceMode;
export class BusinessScreen extends BusinessScreenController {
  renderIndividualMiddleScreen1 = () => {
    const {
      IndividualScreen: {
        CURRENT_YEAR,
        CURRENT_YEAR_TITLE,
        SINCE_MEMBER,
        SINCE_MEMBER_TITLE,
      },
      BusinessScreen: { treesPlanted, projectsInvested, popupText },
    } = constants;
    const RadioButtons = () => {
      return (
        <>
          <div className="first_block_current_year_container year-container-block">
            <input
              type="radio"
              value={CURRENT_YEAR}
              name={CURRENT_YEAR}
              checked={this.state.yourImpactSelect === CURRENT_YEAR}
              onChange={() => {
                this.setState({
                  yourImpactSelect: CURRENT_YEAR,
                });
              }}
            />{" "}
            <span className="first_block_current_year">
              {CURRENT_YEAR_TITLE}
            </span>
            <input
              type="radio"
              value={SINCE_MEMBER}
              name={SINCE_MEMBER}
              checked={this.state.yourImpactSelect === SINCE_MEMBER}
              onChange={() => {
                this.setState({
                  yourImpactSelect: SINCE_MEMBER,
                });
              }}
            />{" "}
            <span className="first_block_since_member">
              {SINCE_MEMBER_TITLE}
            </span>
          </div>
        </>
      );
    };

    const RenderPopup = () => {
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
              <div className="business_first_block">
                <div className="first_block1">
                  <div>
                    <RadioButtons />
                    <div className="first_block_img">
                      <img src={FIRSTBLOCK} alt="LOGO" className="blockImg" />
                      <p>
                        <span className="firstblockN">
                          {localStorage.getItem("token")
                            ? this.state.yourImpactSelect === SINCE_MEMBER
                              ? this.state.your_impact_total
                              : this.state.your_recent_impact_total
                            : 0}
                        </span>
                        <span className="first_blockT">tonnes</span>
                      </p>
                    </div>
                  </div>
                  <div className="first_block_right_business">
                    <div className="first_b_inner_business business-inner-text">
                      <span>
                        Your Climate <br />
                        impact
                      </span>
                    </div>
                  </div>
                </div>
                <div className="first_blocklastP_main">
                  {this.state.showPopup ? <RenderPopup /> : null}

                  <p className="first_blocklastP">
                    {localStorage.getItem("token") ? (
                      <span className="head-off-plant-text dashboard-header-text">
                        Head to
                        <Link to="/business/offset-employee">Offset</Link>
                        to create more impact
                      </span>
                    ) : (
                      <>
                        <Link to="/login">
                          <span className="login-text-span">Login &nbsp;</span>
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
                    <div className="business_first_square firstsquare_box-50">
                      <div className="firstsquare_box">
                        <img
                          src={FIRSTSQUARE}
                          alt="LOGO"
                          className="blockImg"
                        />
                        <p className="firstsquareN">
                          {this.state.plant_trees ? this.state.plant_trees : 0}
                        </p>
                        <p className="firstsquareT">{treesPlanted}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={12} md={12} xs={12} sm={12}>
                    <div className="business_first_square firstsquare_box-50  Individual_second_square">
                      <div className="secondsquare_box">
                        <img
                          src={SECONDSQUARE}
                          alt="LOGO"
                          className="blockImg"
                        />
                        <p className="firstsquareN secondsquareN">
                          {this.state.project_count
                            ? this.state.project_count
                            : 0}
                        </p>
                        <p className=" firstsquareT secondsquareT">
                          {projectsInvested}
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

  renderProjectDistributionAndImpactWithOffsetType = () => {

    const RadioButtons = () => {
      const {
        PROJECT_DISTRIBUTION_CURRENT,
        CURRENT_YEAR_TITLE,
        SINCE_MEMBER_TITLE,
        PROJECT_DISTRIBUTION_SINCE,
      } = constants.IndividualScreen;

      return (
        <div className="projectDistributionRadio ns-project-distribution-radio">
          <div className="ns-project-distributiondradio-current">
            <input
              type="radio"
              value={PROJECT_DISTRIBUTION_CURRENT}
              name={PROJECT_DISTRIBUTION_CURRENT}
              checked={
                this.state.projectDistributionYourImpactSelect ===
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
                this.state.projectDistributionYourImpactSelect ===
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
      );
    };

    const DemoArea = (props: any) => {
      // const { isMobile, isTab, isLargeDevice } = deviceMode;
      // const config = {
      //   data,
      //   tooltip: {
      //     formatter: (item: any) => {
      //       return {
      //         name: "",
      //         value: `${this.state.currency_symbol_chart} ${item.value}`
      //       };
      //     },
      //   },
      //   xField: "type",
      //   yField: "value",
      //   xAxis: {
      //     range: [0, 1],
      //     label: isMobile ? {
      //       autoHide: false,
      //       autoRotate: true,
      //       offsetX: -35,
      //       rotate: 320
      //     } : isTab ? {
      //       autoRotate: false,
      //     } : isLargeDevice ? {
      //       autoHide: false,
      //       autoRotate: true,
      //       offsetX: -35,
      //       rotate: 320
      //     } : {
      //       autoRotate: false,
      //     },
      //   },
      //   areaStyle: () => {
      //     return {
      //       fill: "l(270) 0:#ffffff 0.5:#94AC4F 1:#86AF47",
      //     };
      //   },
      // };

      // return <Area className="bussiness_graph_height" {...config} />;

      return (
        <div>
          <div className="biz-pd-graph-header-ns">
            <h3 className="Bussiness_project_distribution_h ns-Bussiness_project_distribution_h">
              Projects Distributions
            </h3>
            <RadioButtons />
          </div>
          {this.state.isUserLoggedIn && (
            <div className="Pie_chart">
              {this.state.sumOfChartProejectDistribution > 0 ? (
                <ProjectDistribution
                  data={
                    this.state.projectDistributionYourImpactSelect ===
                      "project_distribution_since_your_membership"
                      ? this.state.chartProejectDistribution
                      : this.state.chartProejectDistributionRecent
                  }
                  currency={this.state.currency_symbol_chart}
                  sum={
                    this.state.projectDistributionYourImpactSelect ===
                      "project_distribution_since_your_membership"
                      ? this.state.sumOfChartProejectDistribution
                      : this.state.sumOfChartProejectDistributionRecent
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
        </div>
      )
    };

    const Democolumn = (props: any) => {
      const fill = {
        color: "black",
      };
      const data = this.state.chartImpactOffsetType.map((item: any) => {
        return { year: item?.year, value: Number(item?.value)?.toFixed(2) }
      });

      const config = {
        columnStyle: {
          fill: "#8ABDC6",
          radius: [20, 20, 0, 0],
        },
        tooltip: {
          formatter: (item: any) => {
            return { name: "", value: `${item.value} T` };
          },
        },
        fill,
        data,
        xField: "year",
        yField: "value",
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: "类别",
          },
          sales: {
            alias: "销售额",
          },
        },
        minColumnWidth: 20,
        maxColumnWidth: 20,
      };
      return <Column className="bussiness_graph_height" {...config} />;
    };

    return (
      <div>
        <Row gutter={16}>
          <Col lg={12} md={12} xs={24} sm={24}>
            <div className="Bussiness_project_distribution one_more">
              {/* <h3 className="Bussiness_project_distribution_h">
                Projects Distributions
              </h3>
              */}
              {this.state.isUserLoggedIn && <DemoArea />}
              {!this.state.isUserLoggedIn && (
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
              <div className="dropDownContainerForGraph">
                <h3 className="Bussiness_project_distribution_h Bussiness_project_distribution_h_ns">
                  Impact (CO2e) with offset type
                </h3>
                <div
                  className="dropDownBorderForGraph"
                  onClick={() =>
                    this.setState({
                      graphFilterShow: !this.state.graphFilterShow,

                    })
                  }
                >
                  <div className="selectedDropdowniconContainer-ns">

                    <span className="dropDownSelected grpah-dropdown-selected">
                      {this.state.filterOffsetGraph.trim()}
                    </span>
                    <img src={EXPAND_ICON} className={this.state.graphFilterShow ? "dropDownIcon" : ""}
                      alt="expand_icon" />
                  </div>
                  {this.state.graphFilterShow ? (
                    <div className="dropDownOptionsForGraph impact-graph-dropdown">
                      {constants.BusinessScreen.orderDropDownData.map(
                        (options) => (
                          <p
                            key={options.id}
                            className="dropdownItem"
                            onClick={() => {
                              this.setState(
                                { filterOffsetGraph: options.title },
                                () => this.getChart()
                              );
                            }}
                          >
                            {options.title}
                          </p>
                        )
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {this.state.isUserLoggedIn && <Democolumn />}
              {!this.state.isUserLoggedIn && (
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
  renderOneTimeandSubscriptionOffset = () => {
    return (
      <div>
        {/* <div className="Individual_middleScreen1"> */}
        <Row gutter={16}>
          <Col lg={12} md={12} xs={24} sm={24}>
            <Link to="/business/offset-employee" className="no-color">
              <div className="Bussiness_project_distribution Bussiness_project_distribution_inner_part">
                <div className="Bussiness_project_distribution_inner_part1">
                  <div className="Bussiness_project_distribution_inner_imagePart">
                    <img
                      src={ONEOFFSET}
                      alt="IMAGE"
                      className="Bussiness_project_distribution_inner_part_imagePart_Main"
                    />
                    <p className="Bussiness_project_distribution_inner_imagePart_P">
                      One time Offset
                    </p>
                  </div>
                  <div>
                    <img
                      src={BUSSINESSSIDEARROW}
                      alt="IMAGE"
                      className="Bussiness_project_distribution_inner_part_image_sideArrow"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col lg={12} md={12} xs={24} sm={24}>
            <Link to="/business/subscription-employee" className="no-color">
              <div className="Bussiness_Impact_Offset Bussiness_project_distribution_inner_part">
                <div className="Bussiness_project_distribution_inner_part1">
                  <div className="Bussiness_project_distribution_inner_imagePart">
                    <img
                      src={SUBOFFSET}
                      alt="IMAGE"
                      className="Bussiness_project_distribution_inner_part_imagePart_Main  , Bussiness_project_distribution_inner_part_imagePart_Main_SubImage "
                    />
                    <p className="Bussiness_project_distribution_inner_imagePart_P">
                      Subscription Offset
                    </p>
                  </div>
                  <div>
                    <img
                      src={BUSSINESSSIDEARROW}
                      alt="IMAGE"
                      className="Bussiness_project_distribution_inner_part_image_sideArrow"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    );
  };

  renderIndividualMiddleScreenMyProject = () => {
    return (
      <div
        id="myProject"
        className="Carousel_Project_Main Bussiness_Carousel_Project_Main order-history-myproject-height"
      >
        <DashboardMiddleCarausal
          dataList={this.state.myProjectList}
          isUserLoggedIn={this.state.isUserLoggedIn}
          heading={"My Projects"}
        />
      </div>
    );
  };

  renderIndividualMiddleScreenOrderHistory = () => {
    return isMobile ? (
      <div className="Individual_T_M_Screen">
        <div className="T_M_box_inner_order">
          <div className="orderHistoryFlex-ns">
            <h2 className="s_m_inner_H_order">Order History</h2>
            <div
              className="dropDownBorder"
              onClick={() => this.setState({ show: !this.state.show })}
            >
              <div className="selectedDropdowniconContainer-ns">
                <span className="dropDownSelected">
                  {this.state.selectOrder.trim()}
                </span>
                <img src={EXPAND_ICON} className={this.state.show ? "dropDownIcon" : ""}
                  alt="expand_icon" />
              </div>
              {this.state.show ? (
                <div className="dropDownOptions">
                  {constants.BusinessScreen.orderDropDownData.map((options) => (
                    <p
                      key={options.id}
                      className="dropdownItem"
                      onClick={() => {
                        this.setState(
                          {
                            selectOrder: options.title,
                          },
                          () => this.getOneTimeOrderHistory()
                        );
                      }}
                    >
                      {options.title}
                    </p>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="s_m_inner_btn_main_order">
            <button
              className={
                this.state.orderHistoryOneTime
                  ? "climate_project_active_line"
                  : "s_m_inner_btn"
              }
              onClick={() => {
                this.setState(
                  {
                    orderHistoryOneTime: true,
                    selectOrder: this.state.selectOrder,
                    indOrderNext: 0,
                    indOrderNextSub: 0,
                  },
                  () => this.getOneTimeOrderHistory()
                );
              }}
            >
              One Time
            </button>
            <button
              className={
                !this.state.orderHistoryOneTime
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
          <div className="s_m_box T_M_box">
            {this.state.orderHistoryOneTime
              ? this.renderIndividualOrderHistoryOneTime()
              : this.renderIndividualOrderHistorySubscription()}
          </div>
        </div>
      </div>
    ) : (
      <div className="Individual_T_M_Screen">
        <div className="T_M_Screen_btn">
          <h1 className="empty_card_lbl_P">Order History</h1>

          <div className="T_M_Screen_Container">
            <div
              className="dropDownBorder"
              onClick={() => this.setState({ show: !this.state.show })}
            >
              <div className="selectedDropdowniconContainer-ns">
                <span className="dropDownSelected">
                  {this.state.selectOrder.trim()}
                </span>
                <img src={EXPAND_ICON} className={this.state.show ? "dropDownIcon" : ""}
                  alt="expand_icon" />

              </div>
              {this.state.show ? (
                <div className="dropDownOptions">
                  {constants.BusinessScreen.orderDropDownData.map((options) => (
                    <p
                      key={options.id}
                      className="dropdownItem"
                      onClick={() => {
                        this.setState(
                          {
                            selectOrder: options.title,
                          },
                          () => this.getOneTimeOrderHistory()
                        );
                      }}
                    >
                      {options.title}
                    </p>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="T_M_Screen_btn1">
              <button
                className={
                  this.state.orderHistoryOneTime
                    ? "T_M_Screen_btn_Main_link"
                    : "T_M_Screen_btn_Main"
                }
                onClick={() => {
                  this.setState(
                    {
                      orderHistoryOneTime: true,
                      selectOrder: this.state.selectOrder,
                      indOrderNext: 0,
                      indOrderNextSub: 0,
                    },
                    () => this.getOneTimeOrderHistory()
                  );
                }}
              >
                One time
              </button>
              <button
                className={
                  !this.state.orderHistoryOneTime
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
        </div>
        <div className="s_m_box T_M_box">
          {this.state.orderHistoryOneTime
            ? this.renderIndividualOrderHistoryOneTime()
            : this.renderIndividualOrderHistorySubscription()}
          {/* <div className="T_M_Header_Center">
            <img src={PAGES} alt="img" className="   T_M_windmil_image" />
            <p className="s_m_boxP T_m_boxP">
              No Orders two show login
              <span className="login-text-span">
                Login
              </span>
              Start Offsetting your Carbon
            </p>
          </div> */}
        </div>
      </div>
    );
  };

  renderIndividualOrderHistoryOneTime = () => {
    let orderPageCount =
      this.state.indOrderHistoryOneTime?.meta?.pagination?.total_pages;
    return (
      <>
        {this.state.isUserLoggedIn && (
          <>
            <DashboardTableWeb
              isUserLoggedIn={this.state.isUserLoggedIn}
              dataList={this.state.indOrderHistoryOneTime.data}
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
        {!this.state.isUserLoggedIn && (
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
      this.state.indOrderHistoryOneTime?.meta?.pagination?.total_pages;

    return (
      <>
        {this.state.isUserLoggedIn && (
          <>
            <DashboardTableSubscriptionWeb
              isUserLoggedIn={this.state.isUserLoggedIn}
              dataList={this.state.indOrderHistoryOneTime.data}
              history={this.props.history}
            />
            <ReactPaginate
              className="class-pag inv-order-dash-pagin ns-page"
              previousLabel={<i className="fa fa-angle-left" />}
              nextLabel={<i className="fa fa-angle-right" />}
              breakLabel={"..."}
              breakClassName={"page-item"}
              onPageChange={this.handlePageClickForSub}
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

        {!this.state.isUserLoggedIn && (
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

  render() {
    return (
      <>
        <div className="Individual_MiddleContainer">
          <div className="Individual_MiddleScreenMain">
            {this.renderIndividualMiddleScreen1()}
            {this.renderProjectDistributionAndImpactWithOffsetType()}
            {this.renderOneTimeandSubscriptionOffset()}
            {/* {this.renderIndividualMiddleMapTest()} */}
            {this.renderIndividualMiddleScreenMyProject()}
            {this.renderIndividualMiddleScreenOrderHistory()}
            {/* {this.renderIndividualMiddleCarouselScreen()} */}
          </div>
        </div>
      </>
    );
  }
}

export default BusinessScreen;
