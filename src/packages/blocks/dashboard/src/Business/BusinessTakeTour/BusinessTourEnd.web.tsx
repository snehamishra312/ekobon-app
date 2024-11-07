import React from "react";
// Customizable Area Start
import BusinessTourEndController, {
  Props,
} from "./BusinessTourEndController.web";
import './BusinessTour.web.css';
// Customizable Area End

class BusinessTourEnd extends BusinessTourEndController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    return (
      <div className="business-tour-container indv-tour-begin-sec">
        <div className="business-tour-sub">
          <div className="business-tour-modal">
            <div className="business-tour-modal-header text-center">
              That's all
              <button className="business-tour-modal-cross"> ✖ </button>
            </div>
            <div className="business-tour-modal-body text-center">
              If you need you can get back to the guide from the profile page.
            </div>
            <div className="business-tour-modal-footer">
              <button className="business-tour-green-btn tour-width-btn" onClick={() => {this.handleModalOk()}}>let's get started</button>
            </div>
          </div>
          <img className="business-tour-bg-image" src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/y0q2ea2x2qf2ia011vehopzug5uf/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22TourEnd.jpg%22%3B%20filename%2A%3DUTF-8%27%27TourEnd.jpg&response-content-type=image%2Fjpeg" />
        </div>
      </div>
    );
  }
}

export default BusinessTourEnd;
// Customizable Area End
