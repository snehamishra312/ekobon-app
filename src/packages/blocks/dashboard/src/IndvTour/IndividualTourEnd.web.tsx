import React from "react";
// Customizable Area Start
import IndividualTourEndController, {
  Props,
} from "./IndividualTourEndController.web";
import './IndividualTour.web.css';
// Customizable Area End

class IndividualTourEnd extends IndividualTourEndController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { isModalVisible } = this.state;

    return (
      <div className="individual-tour-container indv-tour-begin-sec">
        <div className="individual-tour-sub">
          <div className="individual-tour-modal">
            <div className="individual-tour-modal-header text-center">
              That's all
              {/* <button className="individual-tour-modal-cross"> ✖ </button> */}
            </div>
            <div className="individual-tour-modal-body text-center">
              If you need you can get back to the guide from the profile page.
            </div>
            <div className="individual-tour-modal-footer">
              <button className="individual-tour-green-btn tour-width-btn" onClick={() => {this.handleModalOk()}}>let's get started</button>
            </div>
          </div>
          <img className="individual-tour-bg-image" src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/j4p4dtbgkb27w69485jp32a8r6ax/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22tour-end.jpg%22%3B%20filename%2A%3DUTF-8%27%27tour-end.jpg&response-content-type=image%2Fjpeg" />
        </div>
      </div>
    );
  }
}

export default IndividualTourEnd as React.ComponentType<any>;
// Customizable Area End
