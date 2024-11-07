import React from "react";
// Customizable Area Start
import IndividualTourBeginController, {
  Props,
} from "./IndividualTourBeginController.web";
// Customizable Area End

class IndividualTourBegin extends IndividualTourBeginController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    return (
      <>
        <div className="individual-tour-container indv-tour-begin-sec">
          <div className="individual-tour-sub">
            <div className="individual-tour-modal">
              <div className="individual-tour-modal-header text-center">
                Welcome to Ekobon
                <button
                  className="individual-tour-modal-cross"
                  onClick={() =>
                    this.props.history.push("/individual/dashboard")
                  }
                >
                  ✖
                </button>
              </div>
              <div className="individual-tour-modal-body text-center">
                Let's show your around with quick <br />
                tour of how to manage and minimize <br /> you carbon footprint.
              </div>
              <div className="individual-tour-modal-footer">
                <button
                  className="individual-tour-green-btn tour-width-btn"
                  onClick={this.handlePageRedirect}
                >
                  Begin Tour
                </button>
              </div>
            </div>
            <img
              className="individual-tour-bg-image"
              src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/5t41t31pdsjr9327agfax3t0d8wa/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22tour-begin.jpg%22%3B%20filename%2A%3DUTF-8%27%27tour-begin.jpg&response-content-type=image%2Fjpeg"
            />
          </div>
        </div>
      </>
    );
  }
}

export default IndividualTourBegin as React.ComponentType<any>;
// Customizable Area End
