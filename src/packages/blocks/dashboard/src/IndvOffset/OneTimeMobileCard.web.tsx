import React from "react";
import { NavLink } from "react-router-dom";
// import {Tabs,Tab}  from '@material-ui/core';
import { Tabs } from "antd";

// import Tab from '@mui/material/Tab';
const CarImg = require("../../assets/offsetImg/Car_Icon.svg");
const flightImg = require("../../assets/offsetImg/Airplane_Icon.svg");
const houseImg = require("../../assets/offsetImg/Household_Icon.svg");
const trainImg = require("../../assets/offsetImg/OtherTransport_Icon.svg");
const specsImg = require("../../assets/offsetImg/Lifestyle_Icon.svg");
const flightIcon = require("../../assets/flight_img.png");

// const GreenSpecsImg = require('../../assets/offsetImg/green_specs.png')
// const GreenCarImg = require('../../assets/offsetImg/green_car.png')
// const GreenFlightImg = require('../../assets/offsetImg/green_flight.png')
// const GreenHouseImg = require('../../assets/offsetImg/green_house.png')
// const GreenTrainImg = require('../../assets/offsetImg/green_train.png')
import { deviceMode } from "../../../../components/src/CommonUtils";

import { Row, Col } from "antd";

const OneTimeMobileCard = () => {
  const location = window.location.pathname;
  const [value, setValue] = React.useState(location);
  const TabPane = Tabs.TabPane;

  const onChange = (id: string) => {
    console.log(id);
  };
  const isMobile = deviceMode.isMobile;

  return (
    <>
      {
        <Tabs
          defaultActiveKey={value}
          centered={true}
          type={"card"}
          onChange={onChange}
        >
          <TabPane
            tab={
              <NavLink
                exact
                to="/individual/offset-onetime"
                activeClassName="active"
              >
                <img style={{ width: "20px" }} src={specsImg} />
                {value === "/individual/offset-onetime" ? (
                  <span style={{ color: "#88ae47", padding: "5px" }}>
                    {" "}
                    LifeStyle
                  </span>
                ) : (
                  <></>
                )}
              </NavLink>
            }
            key="/individual/offset-onetime'"
          />

          <TabPane
            tab={
              <NavLink
                exact
                to="/individual/offset-onetime-flight"
                activeClassName="active"
              >
                <img style={{ width: "20px" }} src={flightImg} />
                {value === "/individual/offset-onetime-flight" ? (
                  <span style={{ color: "#88ae47", padding: "5px" }}>
                    {" "}
                    Flight
                  </span>
                ) : (
                  <></>
                )}
              </NavLink>
            }
            key="/individual/offset-onetime-flight"
          />
          <TabPane
            tab={
              <NavLink
                exact
                to="/individual/offset-onetime-car"
                activeClassName="active"
              >
                <img style={{ width: "20px" }} src={CarImg} />
                {value === "/individual/offset-onetime-car" ? (
                  <span style={{ color: "#88ae47", padding: "5px" }}> Car</span>
                ) : (
                  <></>
                )}
              </NavLink>
            }
            key="/individual/offset-onetime-car"
          />
          <TabPane
            tab={
              <NavLink
                exact
                to="/individual/offset-onetime-transport"
                activeClassName="active"
              >
                <img style={{ width: "20px" }} src={trainImg} />
                {value === "/individual/offset-onetime-transport" ? (
                  <span style={{ color: "#88ae47", padding: "5px" }}>
                    {" "}
                    Other Transport
                  </span>
                ) : (
                  <></>
                )}
              </NavLink>
            }
            key="/individual/offset-onetime-transport"
          />
          <TabPane
            tab={
              <NavLink
                exact
                to="/individual/offset-onetime-house"
                activeClassName="active"
              >
                <img style={{ width: "20px" }} src={houseImg} />
                {value === "/individual/offset-onetime-house" ? (
                  <span style={{ color: "#88ae47", padding: "5px" }}>
                    {" "}
                    Household
                  </span>
                ) : (
                  <></>
                )}
              </NavLink>
            }
            key="/individual/offset-onetime-house"
          />
        </Tabs>
      }
    </>
  );
};

export default OneTimeMobileCard;
