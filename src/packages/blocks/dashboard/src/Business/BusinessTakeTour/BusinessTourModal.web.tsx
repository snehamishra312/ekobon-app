import React from "react";
// Customizable Area Start
import BusinessTourModalController from "./BusinessTourModalController.web";

import "./BusinessTour.web.css";
// Customizable Area End

export default class BusinessTourModal extends BusinessTourModalController {
  render() {
    return (
      <div className="business-tour-container indv-tour-begin-sec">
        <div className="business-tour-sub">
          <div
            className={`business-tour-modal business-tour${this.props
              .modalCount || "end"} business-tour-arrow`}
          >
            <div className="business-tour-modal-header flex justify-content-between">
              {this.props.headerText}
              {this.props.modalCount && (
                <span className="infotext">{this.props.modalCount}/10</span>
              )}
            </div>
            <div className="business-tour-modal-body">
              {this.props.bodyText}
            </div>
            <div className="business-tour-modal-footer flex align-items-center justify-content-between">
              <div>
                <button
                  className="business-tour-light-btn tour-modal-close-btn"
                  onClick={() => this.handleModalClose()}
                >
                  Close
                </button>
              </div>
              <div>
                {this.props.backbtn && <button className="business-tour-light-btn me-2" onClick={() => this.handleRedirectBack()}>Back</button>}
                
                <button
                  className="business-tour-green-btn"
                  onClick={() => this.handleRedirectNext()}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <img className="business-tour-bg-image" src={this.props.bgImage} />
        </div>
      </div>
    );
  }
}

// Customizable Area End
