import React from "react";
// Customizable Area Start
import IndividualProfileBillingHistoryController, {
  Props,
} from "./IndividualProfileBillingHistoryController.web";
import { Modal, Spin } from "antd";
import "../IndiviCustomisableUserProfiles.web.css";
import { invoiceDownload } from '../assets';
import moment from "moment";
export default class IndividualProfileBillingHistory extends IndividualProfileBillingHistoryController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start 
    // Customizable Area End
  }

  render() {
    const { isShowModal, isLoader } = this.state;
    // const [order_number] = this.props.dataList
    return (
      <>
        <Modal
          title=""
          visible={isShowModal}
          centered
          // onOk={() => this.handleTermsModalOk()}
          onCancel={() => this.handleBack()}
          width={500}
          footer={
            <div className="reset-password-modal-footer mb-4" />
          }
          className="idv-signup-reset-pass-modal"
        >
          <Spin tip="Please wait..." spinning={isLoader}>
            <div className="reset-pass-modal-head order-history-modal">
              <p>Billing History</p>
            </div>
            {/* <div className="reset-pass-modal-txt mt-2"> */}
            <div className="OrderHistoryOneTime_table_header_information">
              {/* <div className="OrderHistoryOneTime_table_header">
                <div className="OrderHistoryOneTime_table_header_SIDEA">
                  <p className="order_text_heading order-history-text-header">ORDER DATE</p>
                </div>
                <div className="OrderHistoryOneTime_table_header_SIDEB order-history-text">
                  <p className="order_text_heading order-history-text-header">Project Name</p>
                  <p className="order_text_heading order-history-text-header">ORDER NUMBER</p>
                  <p className="order_text_heading order-history-text-header">AMOUNT</p>
                  <p className="order_text_heading order-history-text-header">INVOICE </p>
                </div>
              </div> */}

              {/* <div className="OrderHistoryOneTime_table_header OrderHistoryOneTime_table_header_background">
                <div className="OrderHistoryOneTime_table_header_SIDEA ">
                  <div className="OrderHistoryOneTime_table_header_SIDEA_img_text">
                    <p
                      className="order_historyinfo order-history-text-info"
                      style={{ paddingLeft: "6px", width: "70%" }}
                    >
                      {this?.props?.dataList ? moment(this?.props?.dataList?.attributes?.order_date).format("D MMM YY") : 0}
                    </p>
                  </div>
                </div>
                <div className="OrderHistoryOneTime_table_header_SIDEB order-history-text">
                <p className="order_historyinfo order-history-text-info" style={{ width: "60%" }}>
                    {this?.props?.dataList ? this?.props?.dataList?.attributes?.project_name : 0}
                  </p>
                  <p className="order_historyinfo order-history-text-info" style={{ width: "60%" }}>
                    {this?.props?.dataList ? this?.props?.dataList?.attributes?.order_number : 0}
                  </p>
                  <p className="order_historyinfo order-history-text-info" style={{ width: "75%" }}>
                    {this?.props?.dataList ? this?.props?.dataList?.attributes?.total : 0}
                  </p >
                  <img src={invoiceDownload} alt="img" style={{ width: "20px", cursor: "pointer" }} onClick={() => this.DownloadOrderInvoice(this?.props?.dataList?.id)} />
                </div>
              </div> */}
              <div className="table-responsive ct_order_dtl_popup">
                <table>
                  <tr>
                    <th>
                    <p className="order_text_heading order-history-text-header">ORDER DATE</p>
                    </th>
                    <th>
                    <p className="order_text_heading order-history-text-header">PROJECT NAME</p>
                
                    </th>
                    <th>  <p className="order_text_heading order-history-text-header">ORDER NUMBER</p>
                  </th>
                  <th>
                  <p className="order_text_heading order-history-text-header">AMOUNT</p>
                 
                  </th>
                  <th>
                
                  <p className="order_text_heading order-history-text-header">INVOICE </p>
                  </th>
                  </tr>
                  <tr>
                    <td>
                    <p
                      className="order_historyinfo order-history-text-info"
                      style={{ paddingLeft: "6px" }}
                    >
                      {this?.props?.dataList ? moment(this?.props?.dataList?.attributes?.order_date).format("D MMM YY") : 0}
                    </p>
                    </td>
                    <td>
                    <p className="order_historyinfo order-history-text-info" style={{ width: "60%" }}>
                    {this?.props?.dataList ? this.props?.dataList?.attributes?.giftcard == "true" ? "Redeem" : this?.props?.dataList?.attributes?.project_name : 0}
                  </p>
                
                    </td>
                    <td>
                    <p className="order_historyinfo order-history-text-info" style={{ width: "60%" }}>
                    {this?.props?.dataList ? this?.props?.dataList?.attributes?.order_number : 0}
                  </p>
             
                      
                    </td>
                    <td>
                    <p className="order_historyinfo order-history-text-info" style={{ width: "75%" }}>
                    {this?.props?.dataList ? this?.props?.dataList?.attributes?.total : 0}
                  </p >
                    </td>
                    <td>
                    <img src={invoiceDownload} alt="img" style={{ width: "20px", cursor: "pointer" }} onClick={() => this.DownloadOrderInvoice(this?.props?.dataList?.id)} />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            {/* </div> */}
          </Spin>
        </Modal>
      </>
    );
  }
}


// Customizable Area End
