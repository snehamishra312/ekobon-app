import React, { useEffect, useState } from "react";
import { Col, Row, Popover, Select } from "antd";
import Carousel from "react-elastic-carousel";
const iImg = require("../../assets/offsetImg/i-Img.png");
const PAGES = require("../../assets/pages.png");
const { Option } = Select;
import { deviceMode } from "../../../../components/src/CommonUtils";

const OffsetSubscriptionMiddleCarousel = (props: any) => {
  let carousel = React.createRef();
  const isMobile = deviceMode.isMobile;
  const [defaultValueFromProps, setDefaultValueFromProps] = useState(
    props?.dataList[0]?.attributes?.name
  );

  useEffect(() => {
    if (defaultValueFromProps !== props?.dataList[0]?.attributes?.name) {
      setDefaultValueFromProps(props?.dataList[0]?.attributes?.name);
    }
  }, [props]);

  const renderPaginationDots = (pages: any, activePage: any, onClick: any) => {
    return (
      <div className="dotsRow">
        {pages.map((itemPage: any, j: any) => {
          const isActivePage = activePage === itemPage;
          return (
            <div
              onClick={() => onClick(itemPage)}
              className="dots"
              style={{
                backgroundColor: isActivePage ? "#30458c" : "#7c8188",
              }}
              key={j}
            />
          );
        })}
      </div>
    );
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  const handleCardSelectData = (value: any, data: any) => {
    props.handleSelectCard(isMobile ? value?.key : value, data);
  };

  return (
    <div className="subscription-offset-slider subscription-disable-slider mx-2">
      <Row className="indv-scrol-sec-subs align-items-center px-4">
        {!isMobile ? (
          <Col lg={12} md={12}>
            <Row className="d-flex justify-content-start">
              <img src={props.topicImg} />
              <p>{props.topicName}</p>
            </Row>
          </Col>
        ) : (
          <></>
        )}
      </Row>
      {props.isLogin ? (
        <>
          {!isMobile ? (
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
              {props.dataList?.map((listItem: any, i: any) => {
                return (
                  <div key={i}>
                    <div className="carbon-offset-onetime-life-sec">
                      <Row gutter={32} className="mx-0 ct_img_full_w_res">
                        <Col>
                          <div className="carbon-offset-onetime-life-sec-card">
                            <div
                              className={
                                props.lifeStyleCardId === listItem.final_Id
                                  ? "carbon-offset-onetime-life-card-img life-card-img-select"
                                  : "carbon-offset-onetime-life-card-img"
                              }
                            >
                              <img
                                src={listItem.attributes.image}
                                alt="img"
                                onClick={(e) =>
                                  handleCardSelectData(
                                    listItem.final_Id,
                                    listItem.attributes.name
                                  )
                                }
                              />
                            </div>
                            <div className="carbon-offset-onetime-life-card-text py-4 px-4">
                              <div className="row carbon-offset-onetime-life-card-text-head">
                                <p>{listItem.attributes.name}</p>
                              </div>
                              {/* <div className="row carbon-offset-onetime-life-card-text-para">
                            <p>
                              {listItem.attributes.description.length > 45
                                ? listItem.attributes.description
                                    .substr(0, 45)
                                    .concat("...")
                                : listItem.attributes.description}
                            </p>
                          </div> */}
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          ) : (
            <>
              <div className="carbon-offset-onetime-life-sec-card-dropdown dropdown-border-ns">
                {defaultValueFromProps ? (
                  <>
                    <p>Select an option</p>
                    <Select
                      className="select-border-ns"
                      placeholder="Select --"
                      size="large"
                      allowClear
                      defaultValue={defaultValueFromProps}
                      //  value={defaultValueFromProps}
                      onChange={(data, response) => {
                        setDefaultValueFromProps(data);
                        handleCardSelectData(response, data);
                      }}
                    >
                      {props.dataList.map((data: any) => {
                        return (
                          <Option
                            value={data.attributes.name}
                            key={data?.final_Id}
                            className="offset-onetime-pacakge-i"
                          >
                            {data.attributes.name + " "}
                          </Option>
                        );
                      })}
                    </Select>
                  </>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
          {/*  */}
        </>
      ) : (
        <div className="T_M_Header_Center">
          <img src={PAGES} alt="img" className="   T_M_windmil_image" />
          <p className="s_m_boxP T_m_boxP">
            No Orders to show Start Offsetting your Carbon
          </p>
        </div>
      )}
    </div>
  );
};

export default OffsetSubscriptionMiddleCarousel;
