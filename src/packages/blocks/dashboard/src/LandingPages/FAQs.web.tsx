import React from "react";
// Customizable Area Start
import HeaderWeb from "../../../../components/src/Header/Header.web";
import FooterWeb from "../../../../components/src/Footer/Footer.web";
import { Collapse } from "antd";
import { Uparrow, Downarrow } from "../assets";
import IndividualFaqController, {
  Props,
} from "../IndvFaq/IndividualFaqController.web";
import "./Faq.css";
import { ScreenLoader } from "../assets";

const { Panel } = Collapse;

export default class FAQs extends IndividualFaqController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { FaqData, isLoader } = this.state;
    return (
      <>
        <HeaderWeb />
        <div className="landing-header">
          <h2>FAQs</h2>
        </div>
        <div className="faq-page-content">
          {isLoader ? (
            <div className="screen-loader-center">
              <img src={ScreenLoader} alt="loader" className="screen-loader" />
            </div>
          ) : (
            <div className="indv-faq-sec">
              <Collapse
                accordion
                expandIconPosition="right"
                expandIcon={({ isActive }) =>
                  isActive ? (
                    <img src={Uparrow} alt="img" className="collapse_arrow" />
                  ) : (
                    <img src={Downarrow} alt="img" className="collapse_arrow" />
                  )
                }
                className="faqs-collapse"
              >
                {FaqData.map((faq: any) => {
                  return (
                    <Panel header={faq.attributes.question} key={faq.id}>
                      <p
                        className="ul_li_unset"
                        style={{ textAlign: "justify" }}
                        dangerouslySetInnerHTML={{
                          __html: faq.attributes.answer,
                        }}
                      />
                    </Panel>
                  );
                })}
              </Collapse>
            </div>
          )}
        </div>
        <FooterWeb />
      </>
    );
  }
}
