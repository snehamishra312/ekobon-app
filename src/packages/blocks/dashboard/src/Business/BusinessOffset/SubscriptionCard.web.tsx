import React from "react";
import { NavLink } from "react-router-dom";

const CarImg = require("../../../assets/offsetImg/Car_Icon.svg");
const flightImg = require("../../../assets/offsetImg/Airplane_Icon.svg");
const EmployeeImg = require("../../../assets/offsetImg/Employee_Icon.svg");

// const CarImg = require("../../../assets/offsetImg/car.png");
// const flightImg = require("../../../assets/offsetImg/flight.png");
// const EmployeeImg = require("../../../assets/offsetImg/employee.png");
// const GreenCarImg = require("../../../assets/offsetImg/green_car.png");
// const GreenFlightImg = require("../../../assets/offsetImg/green_flight.png");

import { Row, Col } from "antd";

const SubscriptionCard = () => {
  const location = window.location.pathname;

  return (
    <>
      <Row gutter={32} className="px-4 mt-2 mb-1 ct_offset_minus_top offset-header-cards business-offset-cards">
        <Col lg={8} md={8}>
          <NavLink
            exact
            to="/business/subscription-employee"
            activeClassName="active" 
          >
            <div
              className={`${
                location == "/business/subscription-employee"
                  ? "carbon-business-offset-onetime-img-card buss-offset-card active-bg-grey-onetime-card"
                  : "carbon-business-offset-onetime-img-card buss-offset-card inactive-bg-onetime-card"
              } `}
            >
              <img
                src={
                  location == "/business/subscription-employee"
                    ? EmployeeImg
                    : EmployeeImg
                }
              />
              <p>Employee </p>
            </div>
          </NavLink>
        </Col>
        <Col lg={8} md={8}>
          <NavLink
            exact
            to="/business/subscription-flight"
            activeClassName="active"
          >
            <div
              className={`${
                location == "/business/subscription-flight"
                  ? "carbon-business-offset-onetime-img-card buss-offset-card active-bg-grey-onetime-card"
                  : "carbon-business-offset-onetime-img-card buss-offset-card inactive-bg-onetime-card"
              } `}
            >
              <img
                src={
                  location == "/business/subscription-flight"
                    ? flightImg
                    : flightImg
                }
              />
              <p>Flight </p>
            </div>
          </NavLink>
        </Col>

        <Col lg={8} md={8}>
          <NavLink
            exact
            to="/business/subscription-car"
            activeClassName="active"
          >
            <div
              className={`${
                location == "/business/subscription-car"
                  ? "carbon-business-offset-onetime-img-card buss-offset-card active-bg-grey-onetime-card"
                  : "carbon-business-offset-onetime-img-card buss-offset-card inactive-bg-onetime-card"
              } `}
            >
              <img
                src={
                  location == "/business/subscription-car"
                    ? CarImg
                    : CarImg
                }
              />
              <p>Car </p>
            </div>
          </NavLink>
        </Col>
      </Row>
    </>
  );
};

export default SubscriptionCard;
