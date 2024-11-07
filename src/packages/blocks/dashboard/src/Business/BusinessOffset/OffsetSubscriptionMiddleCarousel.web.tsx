import React from 'react'
import { Col, Row } from 'antd'
import Carousel from 'react-elastic-carousel'
const iImg = require('../../assets/offsetImg/i-Img.png')

const OffsetSubscriptionMiddleCarousel = (props: any) => {
  let carousel = React.createRef()

  const renderPaginationDots = (pages: any, activePage: any, onClick: any) => {
    return (
      <div className='dotsRow'>
        {pages.map((itemPage: any) => {
          const isActivePage = activePage === itemPage
          return (
            <div
              onClick={() => onClick(itemPage)}
              className='dots'
              style={{
                backgroundColor: isActivePage ? '#30458c' : '#7c8188',
              }}
            />
          )
        })}
      </div>
    )
  }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 }
  ];
const handleCardSelectData =(value: any, data: any)=>{
  props.handleSelectCard(value,data)
}

  return (
    <div className='subscription-offset-slider'>
      <Row className='indv-scrol-sec-subs align-items-center px-4'>
        <Col lg={12} md={12}>
          <Row className='d-flex justify-content-start'>
            <img src={props.topicImg} />
            <p>{props.topicName}</p>
          </Row>
        </Col>

        <Col lg={12} md={12}>
          <Row className='d-flex justify-content-end'>
            <span
              className='indv-scrol-sec-subs-back'
              //@ts-ignore
              onClick={() => carousel.current.slidePrev()}
            >
              <i className='fa-solid fa-angle-left' />
            </span>
            <span
              className='indv-scrol-sec-subs-forward'
              //@ts-ignore
              onClick={() => carousel.current.slideNext()}
            >
              <i className='fa-solid fa-angle-right' />
            </span>
          </Row>
        </Col>
      </Row>
      <Carousel
        // enableAutoPlay
        breakPoints={breakPoints}
        autoPlaySpeed={1500}
        isRTL={false}
        showArrows={false}
        focusOnSelect={false}
        //@ts-ignore
        renderPagination={({ pages, activePage, onClick }) => {
          return renderPaginationDots(pages, activePage, onClick)
        }}
        //@ts-ignore
        ref={carousel}

      >
        {props.dataList?.map((listItem: any) => {
          return (
            <div >
              <div className='carbon-offset-onetime-life-sec'>
                <Row gutter={32}>
                  <Col>
                    <div className='carbon-offset-onetime-life-sec-card'>
                      <div
                        className={
                          props.lifeStyleCardId === listItem.id
                            ? "carbon-offset-onetime-life-card-img life-card-img-select"
                            : "carbon-offset-onetime-life-card-img"
                        }
                      >
                        <img src={listItem.attributes.image} alt="img" onClick={(e) =>
                         handleCardSelectData(
                              listItem.id,
                              listItem.attributes.name
                            )
                          } />
                      </div>
                      <div className='carbon-offset-onetime-life-card-text py-4 px-4'>
                        <Row className='carbon-offset-onetime-life-card-text-head justify-content-between'>
                          <p>{listItem.attributes.name}</p>
                          <img src={iImg} alt="img"/>
                        </Row>
                        <div className='carbon-offset-onetime-life-card-text-para'>
                          <p>{listItem.attributes.description}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default OffsetSubscriptionMiddleCarousel
