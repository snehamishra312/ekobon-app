import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import IndividualPrivacyController, {
  Props,
} from "./IndividualPrivacyController.web";
export default class IndividualPrivacy extends IndividualPrivacyController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { PrivacyPolicyData } = this.state;
    return (
      <div className="one-time-offset-sec">
        <div className="remove-overflow-x py-3 px-4">
          <div className="indv-faq-head mb-4">
            <button>
              <Link
                to={
                  window.location.pathname == "/business/privacy-policy"
                    ? "/business/dashboard"
                    : "/individual/dashboard"
                }
                className="greentxt"
              >
                <i className="fas fa-angle-left" />
              </Link>
            </button>
            <p>Privacy Policy</p>
          </div>
          <div className="indv-privacy-sec mt5">
            <Row>
              <Col lg={16} md={16} offset={4}>
                <div
                  className="indv-privacy-sec-text mt-3 indv-privacy-policy-sec"
                  dangerouslySetInnerHTML={{ __html: PrivacyPolicyData }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
