import React from "react";
import HeaderWeb from "../../../../components/src/Header/Header.web";
import FooterWeb from "../../../../components/src/Footer/Footer.web";

import IndividualPrivacyController, {
  Props,
} from "../IndvPrivacy/IndividualPrivacyController.web";

export default class PrivacyPolicy extends IndividualPrivacyController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { PrivacyPolicyData } = this.state;
    return (
      <>
        <HeaderWeb />
        <div className="landing-header"> 
          <h2>Privacy Policy</h2>
        </div>
        <div className="page-content" dangerouslySetInnerHTML={{ __html: PrivacyPolicyData }} ></div>
        <FooterWeb />
      </>
    );
  }
}
