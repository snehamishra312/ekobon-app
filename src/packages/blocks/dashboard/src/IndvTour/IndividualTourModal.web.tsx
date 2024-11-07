import React from "react";
// Customizable Area Start
import IndividualTourModalController from "./IndividualTourModalController.web";

import "./IndividualTour.web.css";
// Customizable Area End

export default class IndividualTourModal extends IndividualTourModalController {
  render() {
    return (
      <div className="individual-tour-container indv-tour-begin-sec">
        <div className="individual-tour-sub">
          <div
            className={`individual-tour-modal individual-tour${this.props
              .modalCount || "end"} individual-tour-arrow`}
          >
            <div className="individual-tour-modal-header flex justify-content-between">
              {this.props.headerText}
              {this.props.modalCount && (
                <span className="infotext">{this.props.modalCount}/10</span>
              )}
            </div>
            <div className="individual-tour-modal-body">
              {this.props.bodyText}
            </div>
            <div className="individual-tour-modal-footer flex align-items-center justify-content-between">
              <div>
                <button
                  className="individual-tour-light-btn tour-modal-close-btn"
                  onClick={() => this.handleModalClose()}
                >
                  Close
                </button>
              </div>
              <div>
                {this.props.backbtn && <button className="individual-tour-light-btn me-2" onClick={() => this.handleRedirectBack()}>Back</button>}
                
                <button
                  className="individual-tour-green-btn"
                  onClick={() => this.handleRedirectNext()}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <img className="individual-tour-bg-image" src={this.props.bgImage} />
        </div>
      </div>
    );
  }
}

// Customizable Area End
