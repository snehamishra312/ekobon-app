import React from "react";
// Customizable Area Start
import BusinessTourBeginController, {
  Props,
} from "./BusinessTourBeginController.web";
import { HISTORY } from "../../../../../components/src/comman";
// Customizable Area End

class BusinessTourBegin extends BusinessTourBeginController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    return (
      <>
        <div className="business-tour-container indv-tour-begin-sec">
          <div className="business-tour-sub">
            <div className="business-tour-modal">
              <div className="business-tour-modal-header text-center">
                Welcome to Ekobon
                <button
                  className="business-tour-modal-cross"
                  onClick={() => HISTORY.push("/business/dashboard")}
                >
                  {" "}
                  ✖{" "}
                </button>
              </div>
              <div className="business-tour-modal-body text-center">
                Let's show your around with quick <br /> tour of how to manage
                and minimize <br /> your carbon footprint.
              </div>
              <div className="business-tour-modal-footer">
                <button
                  className="business-tour-green-btn tour-width-btn"
                  onClick={this.handlePageRedirect}
                >
                  Begin Tour
                </button>
              </div>
            </div>
            <img
              className="business-tour-bg-image"
              src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/ae9ffjgauv77t9quh1r5gq76fcnh/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Begin_tour.jpg%22%3B%20filename%2A%3DUTF-8%27%27Begin_tour.jpg&response-content-type=image%2Fjpeg"
            />
          </div>
        </div>
      </>
    );
  }
}

export default BusinessTourBegin;
// Customizable Area End
