import React from "react";
import { Collapse } from "antd";
import { Link } from "react-router-dom";
import { Uparrow, Downarrow } from "../assets";
import IndividualFaqController, { Props } from "./IndividualFaqController.web";

const { Panel } = Collapse;

export default class IndividualFaq extends IndividualFaqController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { FaqData } = this.state;
    return (
      <div className="one-time-offset-sec">
        <div className="remove-overflow-x py-3 px-4">
          <div className="indv-faq-head mb-4">
            <button>
              <Link
                to={
                  window.location.pathname == "/business/faq"
                    ? "/business/dashboard"
                    : "/individual/dashboard"
                }
                className="greentxt"
              >
                <i className="fas fa-angle-left" />
              </Link>
            </button>
            <p>FAQs</p>
          </div>
          <div className="indv-faq-sec">
            <div>
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
                {FaqData.map((data: any) => {
                  return (
                    <Panel header={data.attributes.question} key={data.id} className="faqs-collapse-ns">
                      <p
                        className="ul_li_list ul_li_list-ns text-start ct_text_p_child_left"
                        dangerouslySetInnerHTML={{
                          __html: data.attributes.answer,
                        }}
                      />
                    </Panel>
                  );
                })}
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
