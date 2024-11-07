import { Col, Row } from "antd";
import React from "react";
import Carousel from "react-elastic-carousel";
import "./IndividaualScreen.web.css";
import { PAGES, LOCATION, DefaultImg, WINDMIL } from "./assets";
import { Link } from "react-router-dom";
import { getMainImage } from "../../../components/src/CommonUtils";

const location = window.location.pathname;
const DashboardMiddleCarausal = (props: any) => {
  let carousel = React.createRef();

  const renderPaginationDots = (pages: any, activePage: any, onClick: any) => {
    return (
      <div className="dotsRow">
        {pages.map((itemPage: any, i: any) => {
          const isActivePage = activePage === itemPage;
          return (
            <div
              onClick={() => onClick(itemPage)}
              className="dots"
              key={i}
              style={{
                backgroundColor: isActivePage ? "#30458c" : "#7c8188",
              }}
            />
          );
        })}
      </div>
    );
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 3 },
    { width: 1450, itemsToShow: 3 },
    { width: 1750, itemsToShow: 3 },
  ];
  // const getProjectDetailsfunction =(item:any)=>{
  //   props.history.push({
  //     pathname: '/individual/project-details',
  //     state: item
  //   })
  // }
  return (
    <div className="Carousel_Main disbleBtnDynamic">
      <Row className="indv-scrol-sec-subs align-items-center px-4">
        <Col lg={12} md={12}>
          <Row className="d-flex justify-content-start">
            <img src={props?.topicImg} />
            <p>{props?.topicName}</p>
          </Row>
        </Col>

        {/* <Col lg={12} md={12}>
          <Row className="">
            {props.isUserLoggedIn && (
              <>
                <IoIosArrowBack
                  className="yt_slider_back  project_slider_back back-myproject"
                  //@ts-ignore
                  onClick={() => carousel.current.slidePrev()}
                />
                <IoIosArrowForward
                  className="yt_slider_forward  project_slider_forward"
                  width="20"
                  height="20"
                  //@ts-ignore
                  onClick={() => carousel.current.slideNext()}
                />
              </>
            )}
          </Row>
        </Col> */}
      </Row>
      <h1 className="T_M_ScreenP">{props?.heading}</h1>

      {props?.dataList?.length > 0 ? (
        <Carousel
          // enableAutoPlay
          breakPoints={breakPoints}
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
          className="ct_left_div"
        >
          {props?.dataList?.map((item: any) => {

            return (
              <Row gutter={16}>
                <Col lg={8}>
                  <div
                    className="Individual_T_M_Screen middle_caur Indv-project-middle-carousel"
                    key={item?.id}
                  >
                    {props?.isUserLoggedIn && (
                      <div className="s_m_box T_M_box T_M_Project_box">
                        <div className="T_M_boxMain1">
                          <div className="T_M_box_inner">
                            <img
                              src={
                                getMainImage(item?.attributes?.image)[0]
                                  ? getMainImage(item?.attributes?.image)[0]
                                  : DefaultImg
                              }
                              alt="img-ind-dashboard"
                              className="T_m_wind_inner"
                            />
                            <div className="T_M_box_inner1">
                              <div className="T_M_box_inner2">
                                <div className="T_M_inner2_head">
                                  <h4 className="T_M_inner2_head1">
                                    {item?.attributes?.project_name}
                                  </h4>
                                  <div className="T_M_inner2_image">
                                    <img
                                      src={LOCATION}
                                      alt="dashboard-indv-img"
                                      className="T_m_location_image"
                                    />
                                    <p className="T_m_innerP">
                                      {item?.attributes?.location}
                                    </p>
                                  </div>

                                  <div className="T_M_Inner_box_Main">
                                    <div className="T_M_Inner_box ct_hide_hidden">
                                      <div className="T_M_Main_box1">
                                        <p>
                                          <span className={(item?.attributes?.carbon_offset).toString().length > 5 ? "firstblockN  T_M_InnerNOverFlow" : "firstblockN  T_M_InnerN"

                                          }
                                          >
                                            {item?.attributes?.carbon_offset
                                              ? Math.round(
                                                item?.attributes?.carbon_offset * 100
                                              ) / 100
                                              : 0}
                                          </span>{" "}
                                          <span className="first_blockT T_M_Inner_boxP">
                                            tonnes
                                          </span>
                                        </p>
                                        <h1 className="T_M_Main_H ">
                                        
                                          <span className="T_M_Main_H1">
                                            Carbon
                                          </span>
                                          Offset
                                        </h1>
                                      </div>
                                    </div>
                                    <div className="T_M_Inner_box ct_hide_hidden  T_M_Inner_box1">
                                      <div className="T_M_Main_box1">
                                        <p>
                                          <span className="firstblockN  T_M_InnerN  T_M_InnerN1">
                                            ₹
                                          </span>
                                          <span className="first_blockT T_M_Inner_boxP  T_M_Inner_boxP1">
                                            {item?.attributes?.amount_invested
                                              ? item?.attributes?.amount_invested
                                              : 0}
                                          </span>
                                        </p>
                                        <span className="first_blockT T_M_Inner_boxP">
                                           &nbsp;
                                          </span>
                                        <h1 className="T_M_Main_H ">
                                          <span className="T_M_Main_H1">
                                            Amount
                                          </span>
                                          Invested
                                        </h1>
                                      </div>
                                    </div>
                                  </div>
                                  <Link
                                    to={{
                                      pathname: `${window.location.pathname ===
                                        "/individual/dashboard" ||
                                        window.location.pathname ===
                                        "/individual/project"
                                        ? "/individual/project-details"
                                        : "/business/project-details"
                                        }`,
                                      state: {
                                        item: item,
                                        dataList: props?.dataList,
                                      },
                                    }}
                                  >
                                    <button className="T_M_Inner_btn">
                                      Project Details
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Col>
              </Row>
            );
          })}
        </Carousel>
      ) : (
        <>
          {props.isUserLoggedIn && (
            <div className="T_M_Header_Center">
              <img src={PAGES} alt="img" className="   T_M_windmil_image" />
              <p className="s_m_boxP T_m_boxP">
                No Orders to show Start Offsetting your Carbon
              </p>
            </div>
          )}
        </>
      )}
      {!props.isUserLoggedIn && (
        <div className="T_M_Header_Center border_empty_state">
          <img src={WINDMIL} alt="img" className="   T_M_windmil_image" />
          <p className="s_m_boxP T_m_boxP">
            No Orders to show
            <Link to="/login">
              <span
                style={{
                  color: "var(--color-individual)",
                  fontFamily: "Roboto-Bold",
                }}
              >
                &nbsp; Login &nbsp;
              </span>
            </Link>
            Start Offsetting your Carbon
          </p>
        </div>
      )}
    </div>
  );
};

export default DashboardMiddleCarausal;
