import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import IndividualTermController, {
  Props,
} from "./IndividualTermController.web";
import { constants } from "../../../../components/src/types";

export default class IndividualTerm extends IndividualTermController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { TermConditionData } = this.state;
    const IndividualTermConstants = constants.IndividualTerm;
    return (
      <div className="one-time-offset-sec">
        <div className="remove-overflow-x py-3 px-4">
          <div className="indv-faq-head mb-4">
            <button>
              <Link
                to={
                  window.location.pathname == "/individual/terms-conditions"
                    ? "/individual/dashboard"
                    : "/business/dashboard"
                }
                className="greentxt"
              >
                <i className="fas fa-angle-left" />
              </Link>
            </button>
            <p>{IndividualTermConstants.EKOBON_TERMS}</p>
          </div>
          <div className="indv-privacy-sec mt-5 indv-privacy-sec-ns">
            <Row>
              <Col lg={16} md={16} style={{ margin: "auto" }}>
                <div className="indv-privacy-sec-text mt-3">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT}
                  </p>
                </div>
                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER1}{" "}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT1}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT112}
                  </p>
                </div>
                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER2}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT2}
                  </p>
                </div>
                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER3}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT3}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER4}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT4}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER5}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT5}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER6}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT6}{" "}
                    <a className="mailto" href="mailto:contactus@ekobon.com">
                      <b>{IndividualTermConstants.EKOBON_TERMS_TEXT61}</b>
                    </a>
                    . {IndividualTermConstants.EKOBON_TERMS_TEXT62}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER7}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT7}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER8}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT8}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER9}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT9}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER10}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT10}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER11}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT11}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER12}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT12}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER13}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT13}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER14}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT14}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER15}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT15}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER16}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT16}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER17}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT17}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.EKOBON_TERMS_HEADER18}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.EKOBON_TERMS_TEXT18}
                    <a
                      className="term-para-link"
                      href="https://www.ekobon.com/"
                      target="_blank"
                    >
                      {IndividualTermConstants.EKOBON_TERMS_TEXT181}
                    </a>
                    .
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER1}{" "}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT1}{" "}
                    <a
                      className="term-para-link"
                      href="https://www.ekobon.com/"
                      target="_blank"
                    >
                      {IndividualTermConstants.POLICY_TEXT112}
                    </a>{" "}
                    {IndividualTermConstants.POLICY_TEXT113}{" "}
                    <a className="mailto" href="mailto:contactus@ekobon.com">
                      <b>{IndividualTermConstants.POLICY_TEXT114}</b>
                    </a>
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER2}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT2}{" "}
                    <a
                      className="term-para-link"
                      href="https://www.ekobon.com/"
                      target="_blank"
                    >
                      {IndividualTermConstants.POLICY_TEXT112}
                    </a>{" "}
                    {IndividualTermConstants.POLICY_TEXT22}
                    <a className="mailto" href="mailto:contactus@ekobon.com">
                      <b>{IndividualTermConstants.POLICY_TEXT114}</b>
                    </a>
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER3}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT3}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER4}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT4}
                  </p>
                </div>
                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER5}
                  </p>
                  <p className="mt-2 term-condition-para-txt term-condition-para-txt-ns">
                    {IndividualTermConstants.POLICY_TEXT51} <br />
                    <span>a)</span> {IndividualTermConstants.POLICY_TEXT52}
                    <br />
                    <span>b)</span> {IndividualTermConstants.POLICY_TEXT53}
                    <br />
                    <span>c)</span> {IndividualTermConstants.POLICY_TEXT54}
                    <br />
                    <span>d)</span> {IndividualTermConstants.POLICY_TEXT55}
                    <br />
                    <span>e)</span> {IndividualTermConstants.POLICY_TEXT56}
                    <br /> {IndividualTermConstants.POLICY_TEXT57}
                  </p>
                </div>
                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER6}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT6}
                  </p>
                </div>
                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER7}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT7}
                  </p>
                </div>
                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER8}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT8}
                  </p>
                </div>
                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER9}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    <b>{IndividualTermConstants.POLICY_TEXT91}</b>{" "}
                    {IndividualTermConstants.POLICY_TEXT92}
                    <br />
                    <b>{IndividualTermConstants.POLICY_TEXT93}</b>{" "}
                    {IndividualTermConstants.POLICY_TEXT94}
                    <br />
                    <b>{IndividualTermConstants.POLICY_TEXT95}</b>{" "}
                    {IndividualTermConstants.POLICY_TEXT96}
                    <br />
                    <b>{IndividualTermConstants.POLICY_TEXT97}</b>{" "}
                    {IndividualTermConstants.POLICY_TEXT98}
                  </p>
                </div>
                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER10}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT10}
                  </p>
                </div>
                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER11}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT11}
                  </p>
                </div>
                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER12}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT12}
                  </p>
                </div>
                <div className="indv-privacy-sec-text mt-4 indv-privacy-sec-ns">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER13}{" "}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT131}
                  </p>
                  <ul>
                    <li className="mt-2 term-condition-para-txt">
                      {IndividualTermConstants.POLICY_TEXT132}
                    </li>
                    <li className="mt-2 term-condition-para-txt">
                      {IndividualTermConstants.POLICY_TEXT133}
                    </li>
                    <li className="mt-2 term-condition-para-txt">
                      {IndividualTermConstants.POLICY_TEXT134}
                    </li>
                    <li className="mt-2 term-condition-para-txt">
                      {IndividualTermConstants.POLICY_TEXT135}
                    </li>
                    <li className="mt-2 term-condition-para-txt">
                      {IndividualTermConstants.POLICY_TEXT136}
                    </li>
                    <li className="mt-2 term-condition-para-txt">
                      {IndividualTermConstants.POLICY_TEXT137}
                    </li>
                    <li className="mt-2 term-condition-para-txt">
                      {IndividualTermConstants.POLICY_TEXT138}
                    </li>
                  </ul>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT139}
                    <a className="mailto" href="mailto:contactus@ekobon.com">
                      <b>{IndividualTermConstants.POLICY_TEXT1310}</b>
                    </a>
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT1311}
                  </p>
                </div>
                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER14}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT14}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER15}{" "}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT15}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER16}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT16}
                    <a className="mailto" href="mailto:contactus@ekobon.com">
                      <b>{IndividualTermConstants.POLICY_TEXT161}</b>
                    </a>
                    .
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER17}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT17}
                  </p>
                </div>

                <div className="indv-privacy-sec-text mt-4">
                  <p className="term-condition-phead-txt">
                    {IndividualTermConstants.POLICY_HEADER18}
                  </p>
                  <p className="mt-2 term-condition-para-txt">
                    {IndividualTermConstants.POLICY_TEXT18}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
