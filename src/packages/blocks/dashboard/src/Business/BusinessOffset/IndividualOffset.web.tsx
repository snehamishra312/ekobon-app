import React from "react";
// import OneTimeCard from './OneTimeCard.web'
// import
// OneTimeOff
import { NavLink } from "react-router-dom";

const IndividualOffset = () => {
  const location = window.location.pathname;

  const checkLocation =
    location == "/business/offset-employee" ||
    location == "/business/offset-flight" ||
    location == "/business/offset-flight-by-distance" ||
    location == "/business/offset-car" ||
    location == "/business/offset-event";

  const checkBusinessSubscription =
    location == "/business/subscription-car" ||
    location == "/business/subscription-flight" ||
    location == "/business/subscription-employee";

  return (
    <div className="admin_carbon_offset">
      <div className="idv-offset-top-menu">
        <ul className=" d-flex justify-content-center">
          <li className="indv-offset-tab-link ">
            <NavLink
              exact
              to="/business/offset-employee"
              className={`${checkLocation == true ? "active me-4" : "me-4"} `}
            >
              One Time
            </NavLink>
          </li>
          <li className="indv-offset-tab-link ">
            <NavLink
              exact
              to="/business/subscription-employee"
              // activeClassName='active'
              className={`${
                checkBusinessSubscription == true ? `active ms-4` : `ms-4`
              }`}
            >
              Subscription
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IndividualOffset;
