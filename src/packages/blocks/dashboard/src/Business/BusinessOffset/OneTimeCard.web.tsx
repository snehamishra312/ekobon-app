import React from "react";
import { NavLink } from "react-router-dom";
const CarImg = require("../../../assets/offsetImg/Car_Icon.svg");
const flightImg = require("../../../assets/offsetImg/Airplane_Icon.svg");
const EmployeeImg = require("../../../assets/offsetImg/Employee_Icon.svg");
// const GreenFlightImg = require("../../../assets/offsetImg/green_flight.png");
const EventImg = require("../../../assets/offsetImg/Event_Icon.svg");

import { Row, Col } from "antd";

const OneTimeCard = () => {
  const location = window.location.pathname;
  const checkFlightLocation = location == "/business/offset-flight";
  const checkFlightLocation2 =
    location == "/business/offset-flight-by-distance";

  return (
    <>
      <Row gutter={32} className="px-4 mt-2 mb-1 offset-cards-row offset-header-cards">
        <Col lg={6} md={6}>
          <NavLink
            exact
            to="/business/offset-employee"
            activeClassName="active"
          >
            <div
              className={`${
                location == "/business/offset-employee"
                  ? "carbon-business-offset-onetime-img-card buss-offset-card active-bg-grey-onetime-card"
                  : "carbon-business-offset-onetime-img-card buss-offset-card inactive-bg-onetime-card"
              } `}
            >
              <img
                src={
                  location == "/business/offset-employee"
                    ? EmployeeImg
                    : EmployeeImg
                }
              />
              <p>Employee </p>
            </div>
          </NavLink>
        </Col>
        <Col lg={6} md={6}>
          <NavLink exact to="/business/offset-flight" activeClassName="active">
            <div
              className={`${
                checkFlightLocation || checkFlightLocation2
                  ? "carbon-business-offset-onetime-img-card buss-offset-card active-bg-grey-onetime-card"
                  : "carbon-business-offset-onetime-img-card buss-offset-card  inactive-bg-onetime-card"
              } `}
            >
              <img
                src={
                  checkFlightLocation || checkFlightLocation2
                    ? flightImg
                    : flightImg
                }
              />
              <p>Flight </p>
            </div>
          </NavLink>
        </Col>

        <Col lg={6} md={6}>
          <NavLink exact to="/business/offset-car" activeClassName="active">
            <div
              className={`${
                location == "/business/offset-car"
                  ? "carbon-business-offset-onetime-img-card buss-offset-card active-bg-grey-onetime-card"
                  : "carbon-business-offset-onetime-img-card buss-offset-card inactive-bg-onetime-card"
              } `}
            >
              <img
                src={location == "/business/offset-car" ? CarImg : CarImg}
              />
              <p>Car </p>
            </div>
          </NavLink>
        </Col>
        <Col lg={6} md={6}>
          <NavLink exact to="/business/offset-event" activeClassName="active">
            <div
              className={`${
                location == "/business/offset-event"
                  ? "carbon-business-offset-onetime-img-card buss-offset-card active-bg-grey-onetime-card"
                  : "carbon-business-offset-onetime-img-card buss-offset-card inactive-bg-onetime-card"
              } `}
            >
              <img
                src={
                  location == "/business/offset-event"
                    ? EventImg
                    : EventImg
                }
              />
              <p>Event </p>
            </div>
          </NavLink>
        </Col>
      </Row>
    </>
  );
};

export default OneTimeCard;
