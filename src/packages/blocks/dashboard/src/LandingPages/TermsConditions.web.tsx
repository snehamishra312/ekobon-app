import React from "react";
import HeaderWeb from "../../../../components/src/Header/Header.web";
import FooterWeb from "../../../../components/src/Footer/Footer.web";
import IndividualTermController, {
  Props,
} from "../IndvTerm/IndividualTermController.web";
import { ScreenLoader } from "../assets";

export default class TermsConditions extends IndividualTermController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { TermConditionData, isLoader } = this.state;
    return (
      <>
        <HeaderWeb />
        <>
          <div className="landing-header">
            <h2>Terms & Conditions</h2>
          </div>
          {isLoader ? (
            <div className="screen-loader-center">
              <img src={ScreenLoader} alt="loader" className="screen-loader" />
            </div>
          ) : (
            <div
              className="page-content"
              dangerouslySetInnerHTML={{ __html: TermConditionData }}
            />
          )}
        </>
        <FooterWeb />
      </>
    );
  }
}
