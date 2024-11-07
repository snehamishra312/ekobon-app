import React from 'react'
import { NavLink } from 'react-router-dom'
// import {Tabs,Tab}  from '@material-ui/core';
import { Tabs } from 'antd';

// import Tab from '@mui/material/Tab';
const CarImg = require('../../../assets/offsetImg/Car_Icon.svg')
const flightImg = require('../../../assets/offsetImg/Airplane_Icon.svg')
const houseImg = require('../../../assets/offsetImg/Household_Icon.svg')
const trainImg = require('../../../assets/offsetImg/OtherTransport_Icon.svg')
const specsImg = require('../../../assets/offsetImg/Lifestyle_Icon.svg')
const flightIcon = require('../../../assets/flight_img.png')
// const GreenTrainImg = require('../../../assets')


const EmployeeImg = require("../../../assets/offsetImg/Employee_Icon.svg");
// const GreenFlightImg = require("../../../assets/offsetImg/green_flight.png");
const EventImg = require("../../../assets/offsetImg/Event_Icon.svg");

import { Row, Col } from 'antd'

const SubscriptionMobileCard = () => {
  const location = window.location.pathname
  const [value, setValue] = React.useState(location);
  const TabPane = Tabs.TabPane;

  const onChange = (id: string) => {
    console.log(id);
  };

  return (
    <>
      {
      <Tabs defaultActiveKey={value} centered={true} type={"card"} onChange={onChange}>
        <TabPane tab={<NavLink exact to='/business/subscription-employee' activeClassName='active'><img style={{width: "20px"}} src={EmployeeImg}/>{value === '/business/subscription-employee' ? <span style={{ color: "#88ae47", padding: "5px" }}> Employee</span> : <></>}</NavLink>} key="/business/subscription-employee"></TabPane>
        <TabPane tab={<NavLink exact to='/business/subscription-flight' activeClassName='active'><img style={{width: "20px"}} src={flightImg}/>{value === '/business/subscription-flight' ? <span style={{ color: "#88ae47", padding: "5px" }}> Flight</span> : <></>}</NavLink>} key="/business/subscription-flight"></TabPane>
        <TabPane tab={<NavLink exact to='/business/subscription-car' activeClassName='active'><img style={{width: "20px"}} src={CarImg}/>{value === '/business/subscription-car' ? <span style={{ color: "#88ae47" , padding: "5px"}}> Car</span> : <></>}</NavLink>} key="/business/subscription-car"></TabPane>
      </Tabs>
    }
    </>
  )
}

export default SubscriptionMobileCard