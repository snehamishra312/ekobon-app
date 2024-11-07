import React from 'react'
import { NavLink } from 'react-router-dom'
const CarImg = require('../../assets/offsetImg/Car_Icon.svg')
const flightImg = require('../../assets/offsetImg/Airplane_Icon.svg')
const houseImg = require('../../assets/offsetImg/Household_Icon.svg')
const trainImg = require('../../assets/offsetImg/OtherTransport_Icon.svg')
const specsImg = require('../../assets/offsetImg/Lifestyle_Icon.svg')
// const GreenSpecsImg = require('../../assets/offsetImg/green_specs.png')
// const GreenCarImg = require('../../assets/offsetImg/green_car.png')
// const GreenFlightImg = require('../../assets/offsetImg/green_flight.png')
// const GreenHouseImg = require('../../assets/offsetImg/green_house.png')
// const GreenTrainImg = require('../../assets/offsetImg/green_train.png')

import { Row, Col } from 'antd'

const OneTimeCard = () => {
  const location = window.location.pathname

  return (
    <>
      <Row justify='space-between' className='px-4 mt-2 mb-1 offset-cards-row'>
        <NavLink exact to='/individual/offset-onetime' activeClassName='active'>
          <Col
            className={`${
              location == '/individual/offset-onetime'
                ? 'carbon-offset-onetime-img-card active-bg-grey-onetime-card'
                : 'carbon-offset-onetime-img-card'
            } `}
          >
            <img
              src={
                location == '/individual/offset-onetime'
                  ? specsImg
                  : specsImg
              }
            />
            <p>LifeStyle </p>
          </Col>
        </NavLink>
        <NavLink
          exact
          to='/individual/offset-onetime-flight'
          activeClassName='active'
        >
          <Col
            className={`${
              location == '/individual/offset-onetime-flight'
                ? 'carbon-offset-onetime-img-card active-bg-grey-onetime-card'
                : 'carbon-offset-onetime-img-card'
            } `}
          >
            <img
              src={
                location == '/individual/offset-onetime-flight'
                  ? flightImg
                  : flightImg
              }
            />
            <p>Flight </p>
          </Col>
        </NavLink>
        <NavLink
          exact
          to='/individual/offset-onetime-car'
          activeClassName='active'
        >
          <Col
            className={`${
              location == '/individual/offset-onetime-car'
                ? 'carbon-offset-onetime-img-card active-bg-grey-onetime-card'
                : 'carbon-offset-onetime-img-card'
            } `}
          >
            <img
              src={
                location == '/individual/offset-onetime-car'
                  ? CarImg
                  : CarImg
              }
            />
            <p>Car </p>
          </Col>
        </NavLink>
        <NavLink
          exact
          to='/individual/offset-onetime-transport'
          activeClassName='active'
        >
          <Col
            className={`${
              location == '/individual/offset-onetime-transport'
                ? 'carbon-offset-onetime-img-card custom-pad-offset-onetime-card active-bg-grey-onetime-card'
                : 'carbon-offset-onetime-img-card custom-pad-offset-onetime-card'
            } `}
          >
            <img
              src={
                location == '/individual/offset-onetime-transport'
                  ? trainImg
                  : trainImg
              }
            />
            <p>Other Transport </p>
          </Col>
        </NavLink>
        <NavLink
          exact
          to='/individual/offset-onetime-house'
          activeClassName='active'
        >
          <Col
            className={`${
              location == '/individual/offset-onetime-house'
                ? 'carbon-offset-onetime-img-card active-bg-grey-onetime-card'
                : 'carbon-offset-onetime-img-card'
            } `}
          >
            <img
              src={
                location == '/individual/offset-onetime-house'
                  ? houseImg
                  : houseImg
              }
            />
            <p>Household </p>
          </Col>
        </NavLink>
      </Row>
    </>
  )
}

export default OneTimeCard
