import { Col, Row } from "antd";
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import "./IndividaualScreen.web.css";
import { PAGES } from "./assets";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { deviceMode } from "../../../components/src/CommonUtils";
const DashboardDownwardCarausal = (props: any) => {
  let carousel = React.createRef();
  const isMobile = deviceMode.isMobile;
  const [isReadMore, setIsReadMore] = useState(props.dataList);

  const toggleReadMore = (carbonItem: any) => {
    let listOfCarbonFootprint = props?.dataList;
    listOfCarbonFootprint?.map((element: any) => {
      element.data.map((item: any) => {
        if (item.id === carbonItem.id) {
          item.isSelected = !item?.isSelected;
        } else {
          item.isSelected = false;
        }
        return item;
      });
    });
    setIsReadMore({ dataList: listOfCarbonFootprint });
  };
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
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];

  return (
    <div
      className="Carousel_Main disbleBtnDynamic"
      // style={{
      //   height: "650px",
      // }}
    >
      <Row className="indv-scrol-sec-subs align-items-center px-4 downawar_set">
        <Col lg={12} md={12}>
          <Row className="d-flex justify-content-start">
            <img src={props?.topicImg} />
            <p>{props?.topicName}</p>
          </Row>
        </Col>

        {/* <Col lg={12} md={12}>
          <Row className="">
           
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
           
          </Row>
        </Col> */}
      </Row>
      <h1 className="T_M_ScreenP">{props?.heading}</h1>
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
        {props.dataList.map((item: any, i: any) => {
          return (
            <div className="carbonFootPrintPageBlock" key={i}>
              {item.data.map((carbonItem: any) => {
                return (
                  <div
                    className="Individual_T_M_Screen  Individual_F_M_Screen"
                    key={carbonItem?.id}
                  >
                    <div className="T_M_box F_M_box Individual-footprint-box">
                      <div className="F_M_box_Main1 H_M_box_Main1 Individual-footprint-box-card">
                        <img
                          src={carbonItem?.attributes?.image}
                          alt="img"
                          className=" F_M_box_Img Individual-footprint-box-image"
                        />
                      </div>
                      <div className="F_M_box_Main2">
                        <h1 className="F_M_box_heading">
                          {carbonItem?.attributes?.heading}
                        </h1>
                        <p className="F_M_box_P Individual-footprint-box-para">
                          {carbonItem?.isSelected
                            ? carbonItem?.attributes?.description
                            : window?.innerWidth > 1025
                            ? carbonItem?.attributes?.description?.slice(0, 450)
                            : carbonItem?.attributes?.description?.slice(0, 100)}
                          <span
                            onClick={() => {
                              toggleReadMore(carbonItem);
                            }}
                            className="F_M_box_S"
                          >
                            {isMobile ? (
                              <>
                                {carbonItem?.isSelected
                                  ? " show less"
                                  : "...read more"}
                              </>
                            ) : carbonItem?.attributes?.description?.length >=
                              450 ? (
                              <>
                                {carbonItem?.isSelected
                                  ? " show less"
                                  : "...read more"}
                              </>
                            ) : null}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </Carousel>
      {/* {props.isUserLoggedIn && (
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
      )} */}
    </div>
  );
};

export default DashboardDownwardCarausal;
