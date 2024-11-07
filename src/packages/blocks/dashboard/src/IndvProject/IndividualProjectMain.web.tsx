import React from "react";

import IndividualProjectController, {
  Props,
} from "./IndividualProjectController.web";
import "./IndividualProject.web.css";
import "../IndividaualScreen.web.css";
import { NavLink } from "react-router-dom";
import { constants } from "../../../../components/src/types";

export class IndividualProjectMain extends IndividualProjectController {
  render() {
    const location = window.location.pathname;

    const IndividualProjectMainConstants = constants.IndividualProjectMain;

    const checkActiveProject =
      location == "/business/project" || location == "/individual/project";

    const checkActiveSubscription =
      location == "/business/mysubscription" ||
      location == "/individual/mysubscription";

    const isIndividual = location.includes("/individual") ? true : false;

    return (
      <>
        <div className="admin_carbon_offset">
          <div className="idv-offset-top-menu">
            <ul className=" d-flex justify-content-center">
              <li className="indv-offset-tab-link ">
                <NavLink
                  exact
                  to={`${
                    isIndividual == true
                      ? "/individual/project"
                      : "/business/project"
                  }`}
                  className={`${
                    checkActiveProject == true ? "active me-4" : "me-4"
                  } `}
                >
                  {IndividualProjectMainConstants.MY_PROJECTS}
                </NavLink>
              </li>
              <li className="indv-offset-tab-link ">
                <NavLink
                  exact
                  to={`${
                    isIndividual == true
                      ? "/individual/mysubscription"
                      : "/business/mysubscription"
                  }`}
                  className={`${
                    checkActiveSubscription == true ? `active ms-4` : `ms-4`
                  }`}
                >
                  {IndividualProjectMainConstants.MY_SUBSCRIPTIONS}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default IndividualProjectMain as React.ComponentType<any>;
