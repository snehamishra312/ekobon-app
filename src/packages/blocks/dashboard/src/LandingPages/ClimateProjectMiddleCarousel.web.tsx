import { Col, Row } from "antd";
import React from "react";
import Carousel from "react-elastic-carousel";
import "../IndividaualScreen.web.css";
import { PAGES, LOCATION, DefaultImg } from "../assets";
import { Link } from "react-router-dom";
import { getMainImage } from "../../../../components/src/CommonUtils";

const ClimateProjectMiddleCarousel = (props: any) => {
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

  let imageArr = [];

  const handleSelectProjectType = (data: any) => {
    props.SelectProjectType(data);
  };
  return (
    <div className="Carousel_Main disbleBtnDynamic Carousel_Main_NS">
      <Row className="indv-scrol-sec-subs align-items-center px-4">
        <Col lg={12} md={12}>
          <Row className="d-flex justify-content-start">
            <img src={props.topicImg} />
            <p>{props.topicName}</p>
          </Row>
        </Col>

      </Row>
      <h1 className="T_M_ScreenP">{props.heading}</h1>
      {props.dataList?.length > 0 ? (
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
        >
          {props.dataList?.map((item: any) => {
            return (
              <div className="Individual_T_M_Screen_climate" key={item.id}>
                {props.isUserLoggedIn && (
                  <div className="s_m_box T_M_box T_M_Project_box">
                    <div className="T_M_boxMain1">
                      <div className="T_M_box_inner_climate">
                        {window.location.pathname === "/individual-payment/success" || window.location.pathname === "/business-payment/success" ? (
                          <div className={props.selectedProjectId === item.id ? "payment-success-card-select" : ""}>
                            <img
                              src={
                                getMainImage(item.attributes.image)[0]
                                  ? getMainImage(item.attributes.image)[0]
                                  : DefaultImg
                              }
                              alt="img-payment-success"
                              className="T_m_wind_inner"
                              onClick={() => handleSelectProjectType(item)}
                            />
                          </div>
                        ) : (
                          <img
                            src={
                              getMainImage(item.attributes.image)[0]
                                ? getMainImage(item.attributes.image)[0]
                                : DefaultImg
                            }
                            alt="img"
                            className="T_m_wind_inner"
                          />
                        )}

                        <div className="climate_pro_box_inner1">
                          <div className="T_M_box_inner2">
                            <div className="T_M_inner2_head for_success">
                              <h4 className="T_M_inner2_head1_climate">
                                {item.attributes.project_name}
                              </h4>
                              {window.location.pathname === "/business-payment/success" ? (
                                <div className="success_position">
                                  <p className="T_M_inner2_head1 usd_success">INR {item.attributes.carbon_credit_value_per_tonne}</p>
                                  <p className="T_M_inner2_head1 usd_success_tonnes">Per Tonne</p>
                                </div>
                              )
                                : null
                              }
                              <div className="T_M_inner2_image">
                                <img
                                  src={LOCATION}
                                  alt="img"
                                  className="T_m_location_image"
                                />
                                <p className="T_m_innerP">
                                  {item.attributes.location}
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
                                  {
                                    window.location.pathname === "/individual-payment/success" || window.location.pathname === "/business-payment/success" ?
                                      <></>
                                      :
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
                                            dataList: props.dataList,
                                          },
                                        }}
                                      >
                                        <button className="climat_pro_Inner_btn">
                                          Project Details
                                        </button>
                                      </Link>
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
        <div className="T_M_Header_Center">
          <img src={PAGES} alt="img" className="   T_M_windmil_image" />
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

export default ClimateProjectMiddleCarousel;
