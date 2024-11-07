import React from "react";
import "./IndiviCustomisableUserProfiles.web.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { USERN0tLOGIN, LOCATION } from "./assets";
import { Link } from "react-router-dom";
// Customizable Area Start
import { Modal, Button, Row, Col, Form, Input, Select } from "antd";
import DashboardTableWeb from "../../dashboard/src/IndvTable/DashboardTableWeb.web";
import ReactPaginate from "react-paginate";
import DashboardTableSubscriptionWeb from "../../dashboard/src/IndvTable/DashboardTableSubscriptionWeb.web";
import { constants } from "../../../components/src/types";
import { deviceMode } from "../../../components/src/CommonUtils";
const { Option } = Select;
const { TOTAL_CARBON } = constants.IndiviCustomisableUserProfiles;
// Customizable Area End

const isMobile = deviceMode.isMobile;
import CustomisableUserProfilesController, {
  Props,
} from "./CustomisableUserProfilesController";

export default class IndiviCustomisableUserProfiles extends CustomisableUserProfilesController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  renderIndividualProfileSideBar = () => {
    return (
      <div className="Profile_side_bar">
        <ul className="Profile_side_bar_list">
          <a
            href="#basicId"
            onClick={() => {
              this.setState({
                basicInfoTab: true,
                SecurityTab: false,
                OrderHistoryTab: false,
              });
            }}
            style={{ color: "#333" }}
          >
            <li
              className={
                !this.state.basicInfoTab
                  ? "Profile_side_bar_list_item"
                  : "Profile_side_bar_list_item_active"
              }
            >
              Basic Information
            </li>
          </a>
          <a
            href="#SecurityId"
            onClick={() => {
              this.setState({
                basicInfoTab: false,
                SecurityTab: true,
                OrderHistoryTab: false,
              });
            }}
            style={{ color: "#333" }}
          >
            <li
              className={
                !this.state.SecurityTab
                  ? "Profile_side_bar_list_item"
                  : "Profile_side_bar_list_item_active"
              }
            >
              Security
            </li>
          </a>
          <a
            href="#orderhistoryId"
            onClick={() => {
              this.setState({
                basicInfoTab: false,
                SecurityTab: false,
                OrderHistoryTab: true,
              });
            }}
            style={{ color: "#333" }}
          >
            <li
              className={
                !this.state.OrderHistoryTab
                  ? "Profile_side_bar_list_item"
                  : "Profile_side_bar_list_item_active"
              }
            >
              Order History
            </li>
          </a>
        </ul>
        {/* <Link
          to={
            window.location.pathname === "/individual/profile"
              ? "/individual/tour-begin"
              : "/business/tour-begin"
          }
        >
          <p className="Profile_side_take_tour">Take a Tour</p>
        </Link> */}
      </div>
    );
  };

  renderIndividualBasicInformation = () => {
    const location = window.location.pathname;
    return (
      <div id="basicId" className="Profile_Basic_Information">
        <div className="order_header_line">
          <h3 className="Profiel_text_heading Basic_text_heading">
            Basic Information
          </h3>
        </div>
        <hr />
        <div className="Profile_photo_header">
          <div className="profile_header_flex">
            <img
              src={
                this.state.profileImage ? this.state.profileImage : USERN0tLOGIN
              }
              alt="profileImage"
              className="USERN0tLOGIN"
              style={{ borderRadius: "50%" }}
            />
            <div>
              <button
                className="Profile_Upload_btn bg-transparent"
                onClick={() => {
                  this.setState({
                    renderIndividualBasicInformationEditinfo: false,
                  });
                }}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
        <hr style={{ margin: "0px 80px" }} />
        <div className="Profile_details_header pb-4">
          <div className="Profile_details">
            <label className="Profile_details_lable">
              {location === "/individual/profile" ? "FIRST NAME" : "COMPANY"}
            </label>
            <p className="mt-1 text-start">
              <b>
                {location === "/individual/profile"
                  ? this.state.objProfile.first_name
                  : this.state.objProfile.company_name}
              </b>
            </p>
            <label className="Profile_details_lable mt-3">
              {location === "/individual/profile" ? "EMAIL" : "COMPANY EMAIL"}
            </label>
            <p className="mt-1 text-start">
              <b>{this.state.objProfile.email}</b>
            </p>
            <label className="Profile_details_lable mt-3">COUNTRY</label>
            <p className="mt-1 text-start">
              <b>{this.state.objProfile.country_name}</b>
            </p>
          </div>
          <div className="Profile_details">
            <label className="Profile_details_lable">
              {location === "/individual/profile"
                ? "LAST NAME"
                : "COMPANY SIZE"}
            </label>
            <p className="mt-1 text-start">
              <b>
                {location === "/individual/profile"
                  ? this.state.objProfile.last_name
                  : this.state.objProfile.company_size}
              </b>
            </p>

            <label className="Profile_details_lable mt-3">CONTACT NUMBER</label>
            <p className="mt-1 text-start">
              <b>{this.state.objProfile.full_phone_number}</b>
            </p>
          </div>
          <div className="Profile_details">
            <button
              onClick={() => {
                this.setState({
                  renderIndividualBasicInformationEditinfo: false,
                });
              }}
              className="Profile_Upload_btn bg-transparent"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  };

  renderIndividualBasicInformationEdit = () => {
    const location = window.location.pathname;
    return (
      <div id="basicId" className="Profile_Basic_Information">
        <div className="order_header_line">
          <h3 className="Profiel_text_heading Basic_text_heading">
            Basic Information
          </h3>
        </div>
        <hr />
        <div className="Profile_photo_header">
          <div className="profile_header_flex">
            <img
              src={
                this.state.profileImage ? this.state.profileImage : USERN0tLOGIN
              }
              alt="USERN0tLOGIN"
              className="USERN0tLOGIN"
              style={{ borderRadius: "50%" }}
            />
            <div>
              <input
                type="file"
                accept="image/*"
                name="image-upload"
                id="input"
                onChange={(e) => {
                  this.imageHandler(e);
                }}
              />
              <div className="label">
                <label
                  className=" Profile_Upload_btn image-upload"
                  style={{ border: "1px solid" }}
                  htmlFor="input"
                >
                  Upload New
                </label>
              </div>
              {/* <input type="file" name="myfile" className="Profile_Upload_btn">Upload New</input> */}
            </div>
          </div>
        </div>
        <hr style={{ margin: "0px 80px" }} />
        <div className="px-5 pb-4">
          <Row gutter={32}>
            <Col lg={12} md={12}>
              <Row className="mb-2 mt-3">
                <p className="Profile_details_lable">
                  {location === "/individual/profile"
                    ? "FIRST NAME"
                    : "Company Name"}
                </p>
              </Row>

              <Form.Item
                label=""
                name=""
                rules={[{ required: true, message: "First Name Required" }]}
              >
                <Input
                  size="large"
                  placeholder={
                    location === "/individual/profile"
                      ? "Enter First Name"
                      : "Enter Company Name"
                  }
                  name={
                    location === "/individual/profile"
                      ? "first_name"
                      : "company_name"
                  }
                  value={
                    location === "/individual/profile"
                      ? this.state.objProfile.first_name
                      : this.state.objProfile.company_name
                  }
                  defaultValue={
                    location === "/individual/profile"
                      ? this.state.objProfile.first_name
                      : this.state.objProfile.company_name
                  }
                  onChange={(e) => this.handleInputOnChange(e)}
                />
              </Form.Item>
            </Col>
            <Col lg={12} md={12}>
              <Row className="mb-2 mt-3">
                <p className="Profile_details_lable">
                  {location === "/individual/profile"
                    ? "LAST NAME"
                    : "Company Size"}
                </p>
              </Row>

              <Form.Item
                label=""
                name=""
                rules={[{ required: true, message: "Last Name Required" }]}
              >
                <Input
                  size="large"
                  placeholder={
                    location === "/individual/profile"
                      ? "Enter Last Name"
                      : "Enter Company Size"
                  }
                  name={
                    location === "/individual/profile"
                      ? "last_name"
                      : "company_size"
                  }
                  value={
                    location === "/individual/profile"
                      ? this.state.objProfile.last_name
                      : this.state.objProfile.company_size
                  }
                  defaultValue={
                    location === "/individual/profile"
                      ? this.state.objProfile.last_name
                      : this.state.objProfile.company_size
                  }
                  onChange={(e) => this.handleInputOnChange(e)}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={32}>
            <Col lg={12} md={12}>
              <Row className="mb-2 mt-3">
                <p className="Profile_details_lable">
                  {location === "/individual/profile"
                    ? "Email"
                    : "Company Email"}
                </p>
              </Row>
              <Row>
                <p>
                  <b>{this.state.objProfile.email}</b>
                </p>
              </Row>
            </Col>
            <Col lg={12} md={12}>
              <Row className="mb-2 mt-3">
                <p className="Profile_details_lable">Contact Number</p>
              </Row>

              <Form.Item
                label=""
                name=""
                rules={[{ required: true, message: "Contact Required" }]}
              >
                <Input
                  size="large"
                  type="text"
                  maxLength={10}
                  placeholder="Enter Contact No"
                  name="full_phone_number"
                  value={this.state.objProfile.full_phone_number}
                  defaultValue={this.state.objProfile.full_phone_number}
                  onChange={(e) => this.handleInputOnChange(e)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Row className="mb-2">
                <p className="Profile_details_lable">Country</p>
              </Row>

              <Form.Item
                label=""
                name="country"
              // rules={[{ required: true, message: "Select Country" }]}
              >
                <text style={{ display: "none" }}>
                  {this.state.selectedCountry}
                </text>
                <Select
                  showSearch
                  placeholder="Select Country"
                  size="large"
                  allowClear
                  value={
                    this.state.selectedCountry === null
                      ? this.state.objProfile.country_name
                      : this.state.selectedCountry
                  }
                  onChange={this.handleCountryChange}
                >
                  {this.state.CountryListData?.data?.map((data: any) => (
                    <Option
                      value={data.attributes.CountryName}
                      key={data.attributes.CountryName}
                    >
                      {data.attributes.CountryName}
                    </Option>
                  ))}
                </Select>
                {this.state.countryValidat && (
                  <span className="validate_error">Select Country</span>
                )}
              </Form.Item>
            </Col>
          </Row>

          <div className="py-3">
            <button
              className={
                this.state.btnLoader
                  ? "btn-disbale Profile_Upload_btn Profile_Upload_btn_edit"
                  : "Profile_Upload_btn Profile_Upload_btn_edit"
              }
              onClick={() => {
                this.updateBasicProfileEdit();
              }}
              disabled={this.state.btnLoader}
            >
              {this.state.btnLoader ? "Loading..." : "Save"}
            </button>
            <button
              className="Profile_Upload_btn Profile_Upload_btn_edit_cancel"
              onClick={() => {
                this.setState({
                  renderIndividualBasicInformationEditinfo: true,
                });
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  renderIndividualSecurity = () => {
    return (
      <div
        id="SecurityId"
        className="Profile_Basic_Information  Profile_Security_Section"
      >
        <div className="order_header_line">
          <h3 className="Profiel_text_heading Basic_text_heading">Security</h3>
        </div>
        <hr />
        <div>
          <div className="Profile_Text">
            <label className="Profile_details_lable">Reset your password</label>
          </div>
          <div className="Profile_btn">
            <button
              className="Profile_Upload_btn Profile_Security_Section_btn"
              onClick={() => this.showHideTermsModal(true)}
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    );
  };

  renderIndividualOrderHistoryGiftCards = () => {
    let orderPageCount = this.state.indOrderHistoryOneTime?.meta?.pagination
      .total_pages;
    return (
      <>
        <DashboardTableWeb
          isUserLoggedIn={this.state.isUserLoggedIn}
          dataList={this.state.indOrderHistoryOneTime.data}
        />
        <ReactPaginate
          className="class-pag p-b-10 inv-order-dash-pagin ns-page"
          previousLabel={<i className="fa fa-angle-left" />}
          nextLabel={<i className="fa fa-angle-right" />}
          breakLabel={"..."}
          breakClassName={"page-item"}
          onPageChange={this.handlePageClick}
          pageRangeDisplayed={5}
          pageCount={orderPageCount}
          pageClassName={"page-item"}
          breakLinkClassName={"page-link"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          previousLinkClassName={"previous page-link"}
          nextLinkClassName={"next page-link"}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </>
    );
  };
  renderIndividualOrderHistory = () => {
    return (
      <div
        id="orderhistoryId"
        className="Profile_Basic_Information Profile_Security_Section order_main_container indv-dash-order-history-main"
      >
        <div className="order_header_line order-history-profile ct_alignment_order">

          <h3 className="Profiel_text_heading Basic_text_heading">
            Order History
          </h3>
          <div className="order_header_line_subscription">
            <a
              href="#One"
              onClick={() => {
                this.setState(
                  {
                    OrderHistoryoneTimeTab: true,
                    OrderHistorySubscribtionTab: false,
                    OrderHistoryGiftCardTab: false,
                    RedeemGiftCardTab: false,
                  },
                  () => this.getOneTimeOrderHistory()
                );
              }}
              className={
                !this.state.OrderHistoryoneTimeTab
                  ? "order_header_line_text"
                  : "orderBorderBottom"
              }
            >
              One Time
            </a>
            <a
              href="#Subscription"
              onClick={() => {
                this.setState(
                  {
                    OrderHistorySubscribtionTab: true,
                    OrderHistoryoneTimeTab: false,
                    OrderHistoryGiftCardTab: false,
                    RedeemGiftCardTab: false,
                  },
                  () => this.getOneTimeOrderHistory()
                );
              }}
              className={
                !this.state.OrderHistorySubscribtionTab
                  ? "order_header_line_text"
                  : "orderBorderBottom"
              }
            >
              Subscription
            </a>
            {window.location.pathname === "/individual/profile" && (
              <a
                href="#gift"
                onClick={() => {
                  this.setState(
                    {
                      OrderHistoryGiftCardTab: true,
                      OrderHistorySubscribtionTab: false,
                      OrderHistoryoneTimeTab: false,
                      RedeemGiftCardTab: false,
                    },
                    () => this.getOneTimeOrderHistory()
                  );
                }}
                className={
                  !this.state.OrderHistoryGiftCardTab
                    ? "order_header_line_text"
                    : "orderBorderBottom"
                }
              >
                Gift Cards
              </a>
            )}
            {window.location.pathname === "/individual/profile" && (
              <a
                href="#redeem"
                onClick={() => {
                  this.setState(
                    {
                      OrderHistoryGiftCardTab: false,
                      OrderHistorySubscribtionTab: false,
                      OrderHistoryoneTimeTab: false,
                      RedeemGiftCardTab: true,
                    },
                    () => this.getOneTimeOrderHistory()
                  );
                }}
                className={
                  !this.state.RedeemGiftCardTab
                    ? "order_header_line_text"
                    : "orderBorderBottom"
                }
              >
                Redeem Cards
              </a>
            )}
          </div>
        </div>
        <hr />
        <p className="px-4 indv-order-history-texts text-start">
          <span className="order_text_heading indv-order-history-texts-heading">Total Impact:</span>
          <div>
            <span className="order_text_firstblockN indv-order-history-texts-firstblock">
              {/* {this.state.total_impact} */}
              {this?.state?.totalImpact}
            </span>
            <span className="indv-order-history-texts-secondblock">
              kg Co<sub>2</sub>e
            </span>
          </div>
        </p>

        <div className={isMobile ? "order_subscription_co2 indv-order-history-block px-4 pt-3 pb-3" : "order_subscription_co2 indv-order-history-block px-4 pt-3 pb-3"}>
          {this.state.OrderHistoryoneTimeTab &&
            <p className=" indv-order-history-texts px-0">
              <span className="order_text_heading indv-order-history-texts-heading">One Time:</span>
              <div>
                <span className="order_text_firstblockN indv-order-history-texts-firstblock">
                  {this.state.one_time}
                </span>
                <span className="indv-order-history-texts-secondblock">
                  kg Co<sub>2</sub>e
                </span>
              </div>
            </p>
          }

          {this.state.OrderHistorySubscribtionTab && <p className="indv-order-history-texts text-start">
            <span className="order_text_heading indv-order-history-texts-heading">Subscription:</span>
            <div>
              <span className="order_text_firstblockN indv-order-history-texts-firstblock">
                {this.state.subscription}
              </span>
              <span className="indv-order-history-texts-secondblock">
                kg Co<sub>2</sub>e
              </span>
            </div>
          </p>
          }
          {this.state.OrderHistoryGiftCardTab &&
            <p className="indv-order-history-texts text-start">
              <span className="order_text_heading indv-order-history-texts-heading">Gift Cards:</span>
              <div>
                <span className="order_text_firstblockN indv-order-history-texts-firstblock">
                  {this.state.Gift_card}
                </span>
                <span className="indv-order-history-texts-secondblock">
                  kg Co<sub>2</sub>e
                </span>
              </div>
            </p>}
        </div>
        {!isMobile && <hr style={{ margin: "0px 45px" }} />}
        <div className={isMobile ? "px-6" : "px-5"}>
          {
            this.renderIndividualOrderHistoryGiftCards()
          }
        </div>
      </div>
    );
  };

  renderBillingHistory = () => {
    return (
      <div className="Billing_History_Main_Container">
        <div
          className="Billing_Inner_Box"
          onClick={() => {
            this.setState({
              billingHistory: false,
            });
          }}
        />
      </div>
    );
  };
  // Customizable Area End

  render() {
    const { isTermsModalVisible } = this.state;
    return (
      <div className="User_Profile_container">
        <div className="Profile_text">
          <Link
            to={
              window.location.pathname === "/individual/profile"
                ? "/individual/dashboard"
                : "/business/dashboard"
            }
            className="greentxt"
          >
            <IoIosArrowDropleftCircle className="Profiel_text_back_arrow" />
          </Link>
          <h3 className="Profiel_text_heading">Profiles</h3>
        </div>
        <div className="Profile_header">
          {this.renderIndividualProfileSideBar()}
          <div className="profile_main_container">
            {this.state.billingHistory ? this.renderBillingHistory() : null}
            {!this.state.renderIndividualBasicInformationEditinfo
              ? this.renderIndividualBasicInformationEdit()
              : this.renderIndividualBasicInformation()}
            {this.renderIndividualSecurity()}
            {this.renderIndividualOrderHistory()}
          </div>
        </div>
        <Modal
          title=""
          visible={isTermsModalVisible}
          onCancel={() => this.handleTermsModalCancel()}
          width={500}
          footer={
            <div className="reset-password-modal-footer mb-4">
              <Button onClick={() => this.handleTermsModalOk()}>Okay</Button>
            </div>
          }
          className="idv-signup-reset-pass-modal"
        >
          <div className="reset-pass-modal-head">
            <p>Reset Password</p>
          </div>
          <div className="reset-pass-modal-txt mt-2">
            <p>
              You need to verify your email to create a new password. You will
              have to log back in again.
            </p>
          </div>
        </Modal>
      </div>
    );
  }
}
