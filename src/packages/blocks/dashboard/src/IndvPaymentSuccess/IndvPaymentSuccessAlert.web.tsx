import React from "react";
// Customizable Area Start
import IndvPaymentSuccessAlertController, {
  Props,
} from "./IndvPaymentSuccessAlertController.web";
import { message as MESSAGE } from "antd";
import { ScreenLoader } from "../../../../blocks/dashboard/src/assets";
import axios from 'axios';
const successGif = require("../../assets/success.gif");
import { Row, Col, Button } from "antd";
export const configJSON = require("../config");


class IndvPaymentSuccessAlert extends IndvPaymentSuccessAlertController {


  constructor(props: Props) {
    super(props);

  }
  async componentDidMount() {
    const gifted_mail = localStorage.getItem("gifted_mail")
    const giftmailId = gifted_mail ? JSON.parse(gifted_mail) : "";
    this.setState({
      gift_mail: giftmailId,
    })
    // const giftMail = localStorage.getItem("gifted_mail");
    const data = localStorage.getItem("order_id");
    const ordr_id = localStorage.getItem("orderId");
    const gift_redeem = localStorage.getItem("gift_redeem") || ""
    const giftData = localStorage.getItem("giftitem");
    const dats = localStorage.getItem("climate_project_id");
    const current_location = localStorage.getItem("current_localtion");
    const url = window?.location?.href;
    const baseUrl = url == "https://www.ekobon.com/individual-payment/success-alert" ?
      "https://backend.ekobon.com" : "http://3.111.2.55:3000";
    console.log({ giftData })
    if (!gift_redeem) {
      if (giftData) {
        const gift_id = localStorage.getItem("GiftCardId")
        const id_gifted = gift_id ? JSON.parse(gift_id) : "";
        const val = JSON.parse(data ? data : "");
        axios.post(`${baseUrl}/payments/check_transaction_status?order_id=${val}&reedem=true&gift_card=${id_gifted}`)
          .then(res => {
            console.log({ res });
            if (res?.data?.order_status === 0) {
              this.setState({
                paymentLoader: true,
              })
              MESSAGE.error("Payment Failed", 5);
              localStorage.removeItem("giftitem");
              localStorage.removeItem("order_id");
              localStorage.removeItem("current_localtion");
              localStorage.removeItem("climate_project_id");
              setTimeout(() => {
                window.location.href === "/individual-payment/success-alert" ?
                  window.location.href = "/individual/dashboard" :
                  window.location.href = "/business/dashboard";
              }, 2000);
            }
            else {
              this.setState({
                paymentLoader: false,
              })
            }
          })
          .catch(error => {
            console.log({ error })
          })
      }
      else if (data && dats && current_location) {
        var value = JSON.parse(dats);
        var dashboard_location = JSON.parse(current_location)
        const gift_id = localStorage.getItem("GiftCardId")
        const id_gifted = gift_id ? JSON.parse(gift_id) : "";
        var val = JSON.parse(data);
        const datas =
          axios.post(`${baseUrl}/payments/check_transaction_status?order_id=${val}&my_project_id=${value}&gift_card=${id_gifted}`)
            .then(res => {
              console.log({ res });
              if (res?.data?.order_status === 0) {
                this.setState({
                  paymentLoader: true,
                })
                MESSAGE.error("Payment Failed", 5);
                setTimeout(() => {
                  dashboard_location === "/business/AddtoCard/payment" ?
                    window.location.href = "/business/dashboard" :
                    window.location.href = "/individual/dashboard";
                }, 2000);
              }
              else {
                this.setState({
                  paymentLoader: false,
                })
              }
            })
            .catch(error => {
              console.log({ error })
            })
      }
      else if (data && current_location) {
        const gift_id = localStorage.getItem("GiftCardId")
        const id_gifted = gift_id ? JSON.parse(gift_id) : "";
        var val = JSON.parse(data)
        var dashboard_location = JSON.parse(current_location)
        axios.post(`${baseUrl}/payments/check_transaction_status?order_id=${val}&gift_card=${id_gifted}`)
          .then(res => {
            console.log({ res });
            if (res?.data?.order_status === 0) {
              this.setState({
                paymentLoader: true,
              })
              MESSAGE.error("Payment Failed", 5);
              setTimeout(() => {
                dashboard_location === "/business/AddtoCard/payment" ?
                  window.location.href = "/business/dashboard" :
                  window.location.href = "/individual/dashboard";
              }, 2000);
            }
            else {
              this.setState({
                paymentLoader: false,
              })
            }
          })
          .catch(error => {
            console.log({ error })
          })
      }
    }
    else {
      const val = ordr_id ? JSON.parse(ordr_id) : "";
      const value = dats ? JSON.parse(dats) : "";
      const url = value ? `payment/check_transaction?order_id=${val}&my_project=${value}`
        : `payment/check_transaction?order_id = ${val} `;
      axios.get(`${baseUrl}/${url}`)
        .then(res => {
          console.log({ res });
          localStorage.removeItem("gift_redeem");
          if (res?.data?.order_status === 0) {
            this.setState({
              paymentLoader: true,
            })
            MESSAGE.error("Payment Failed", 5);
            this.handleRemoveCart("0");
          }
          else {
            this.handleRemoveCart("1");
          }
        })
        .catch(error => {
          console.log({ error })
        })
    }
  }
  render() {
    const location = window.location.pathname;
    const { gift_mail } = this.state;
    return (
      <>
        <div className="indv-profile-bg d-flex align-items-center justify-content-center">
          {this.state.paymentLoader === true ?
            <div className="screen-loader-center">
              <img
                src={ScreenLoader}
                alt="loader"
                className="screen-loader"
              />
            </div>
            :
            <Row className="w-100">
              <Col span={12} offset={6} className="indv-payment-success-block">
                <div className="indv-payment-success-alert">
                  <div className="indv-payment-success-alert-img">
                    <img src={successGif} />
                  </div>
                  <button
                    onClick={() => {
                      if (location == "/individual-payment/success-alert") {
                        this.props.history.push("/individual/dashboard");
                      } else {
                        this.props.history.push("/business/dashboard");
                      }
                    }}
                    className="climate-certificate-close"
                  >
                    x
                </button>
                  {gift_mail != "" ?
                    <div className="text-center py-2">
                      <p className="indv-payment-success-alert-head">
                        Congratulations!!
                      </p>
                      <p className="indv-payment-success-alert-text my-2">
                        Congratulations for gifting climate offset card
                      </p>
                    </div>
                    :
                    <div className="text-center py-2">
                      <p className="indv-payment-success-alert-head">
                        Congratulations!!
                      </p>
                      <p className="indv-payment-success-alert-text my-2">
                        Congratulations for investing in climate projects
                      </p>
                    </div>
                  }
                </div>
              </Col>
            </Row>
          }
        </div>
      </>
    );
  }
}

export default IndvPaymentSuccessAlert as React.ComponentType<any>;
// Customizable Area End
