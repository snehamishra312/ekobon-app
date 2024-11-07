import React from "react";
import PaymentSuccessAlertController, {
  Props,
} from "./PaymentSuccessAlertController.web";
import { ScreenLoader } from "../../../../../blocks/dashboard/src/assets";
const successGif = require("../../../assets/success.gif");
import { message as MESSAGE, Row, Col, Button } from "antd";
export const configJSON = require("../../config");


class PaymentSuccessAlert extends PaymentSuccessAlertController {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { paymentLoader } = this.state;
    return (
      <>
        <div className="indv-profile-bg d-flex align-items-center justify-content-center">
          {paymentLoader == false &&
            <div className="screen-loader-center">
              <img
                src={ScreenLoader}
                alt="loader"
                className="screen-loader"
              />
            </div>
          }{
            paymentLoader == true &&
            <Row className="w-100">
              <Col span={12} offset={6} className="indv-payment-success-block">
                <div className="indv-payment-success-alert">
                  <div className="indv-payment-success-alert-img">
                    <img src={successGif} />
                  </div>
                  <button
                    // onClick={() => {
                    //   if (location == "/individual-payment/success-alert") {
                    //     this.props.history.push("/individual/dashboard");
                    //   } else {
                    //     this.props.history.push("/business/dashboard");
                    //   }
                    // }}
                    className="climate-certificate-close"
                    onClick={this.onHandleCloseAlert}
                  >
                    x
                </button>
                  <div className="text-center py-2">
                    <p className="indv-payment-success-alert-head">
                      Congratulations!!
                      </p>
                    <p className="indv-payment-success-alert-text my-2">
                      Congratulations for investing in climate projects
                      </p>
                  </div>
                </div>
              </Col>
            </Row>
          }
        </div>
      </>
    );
  }
}

export default PaymentSuccessAlert as React.ComponentType<any>;