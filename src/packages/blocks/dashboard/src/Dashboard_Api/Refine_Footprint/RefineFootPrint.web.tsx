import React from "react";
// Customizable Area Start
import RefineFootprintController, {
  Props,
} from "./RefineFootPrintController.web";
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';
import { BreakfastIcon, LunchIcon, DinnerIcon, snackIcon, DailyIcon, AvtarIcon } from '../../assets';


export default class RefineFootprint extends RefineFootprintController {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const {
      bankRefineMyFootprintData,
      footPrintDataW1,
      footPrintDataW2,
      footPrintDataW3,
      footPrintDataW4
    } = this.state;
    return (
      <div>
        <div className="layout-page">
          <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar">
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                <i className="bx bx-menu bx-sm"></i>
              </a>
            </div>
            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
              <ul className="navbar-nav flex-row align-items-center ms-auto">
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                    <div className="avatar avatar-online">
                      <img src={AvtarIcon} className="w-px-40 h-auto rounded-circle" />
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar avatar-online">
                              <img src={AvtarIcon} className="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <span className="fw-semibold d-block">John Doe</span>
                            <small className="text-muted">Admin</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bx bx-user me-2"></i>
                        <span className="align-middle">My Profile</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bx bx-cog me-2"></i>
                        <span className="align-middle">Settings</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="d-flex align-items-center align-middle">
                          <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                          <span className="flex-grow-1 align-middle">Billing</span>
                          <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={this.onHandleLogout}>
                        <i className="bx bx-power-off me-2"></i>
                        <span className="align-middle">Log Out</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y">


            <div className="row">
              <div className="col-md-12">
                <div className="ct_refine_head_bg">
                  <h2 className="ct_heading_text">Refine My Carbon Footprint</h2>
                </div>
                <div className="card p-md-5 p-4 ct_card_neg_mt">
                  <div className="d-flex align-items-center gap-md-4 gap-2 justify-content-center flex-wrap">
                    <h4>101 Kg Of CO2e </h4>
                    <h4>:</h4>
                    <h4>410 km driving by car</h4>
                  </div>
                  <p className="mb-0">Personal preferences and habits have a significant influence on  your
                                        environmental impact.</p>
                </div>
                <div className="ct_faq_question_div">
                  <div className="ct_faq_question_cnt  mt-5">
                    <h4 style={{ textAlign: "left" }}>Q1. What does your daily diet normally looks like?</h4>
                    <div className="ct_grid_2">
                     
                      <div className="ct_question_items">
                        <div className="ct_question_item">
                          <div onClick={() => this.onHandleClickOnAnswerW1("1.3")} className={!footPrintDataW1?.includes("1.3") ? "ct_question_item_hover" : "ct_question_item_hover active"}>
                            <h4>Meat</h4>
                            {/* <h4 className="mb-0" >1.3</h4> */}
                          </div>
                        </div>
                        <div className="ct_question_item">
                          <div onClick={() => this.onHandleClickOnAnswerW1("1")} className={!footPrintDataW1?.includes("1") ? "ct_question_item_hover" : "ct_question_item_hover active"}>
                            <h4>Mixed</h4>
                            {/* <h4 className="mb-0" >1</h4> */}
                          </div>
                        </div>
                        <div className="ct_question_item">
                          <div onClick={() => this.onHandleClickOnAnswerW1("0.9")} className={!footPrintDataW1?.includes("0.9") ? "ct_question_item_hover" : "ct_question_item_hover active"}>
                            <h4>Reduced Meat</h4>
                            {/* <h4 className="mb-0" >0.9</h4> */}
                          </div>
                        </div>
                        <div className="ct_question_item">
                          <div onClick={() => this.onHandleClickOnAnswerW1("0.7")} className={!footPrintDataW1?.includes("0.7") ? "ct_question_item_hover" : "ct_question_item_hover active"}>
                            <h4>Vegetarian</h4>
                            {/* <h4 className="mb-0" >0.7</h4> */}
                          </div>
                        </div>
                        <div className="ct_question_item">
                          <div onClick={() => this.onHandleClickOnAnswerW1("0.6")} className={!footPrintDataW1?.includes("0.6") ? "ct_question_item_hover" : "ct_question_item_hover active"}>
                            <h4>Vegan</h4>
                            {/* <h4 className="mb-0" >0.6</h4> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ct_faq_question_cnt  mt-5">
                    <h4 style={{ textAlign: "left" }}>Q2 How often do you eat frozen food?</h4>
                    <div className="ct_grid_2">
                      
                      <div className="ct_question_items">

                        <div className="ct_question_item">
                          <div onClick={() => this.onHandleClickOnAnswerW2("1.2")} className={!footPrintDataW2?.includes("1.2") ? "ct_question_item_hover" : "ct_question_item_hover active"}>
                            <h4>Daily</h4>
                            {/* <h4 className="mb-0">1.2</h4> */}
                          </div>
                        </div>
                        <div className="ct_question_item">
                          <div onClick={() => this.onHandleClickOnAnswerW2("1.1")} className={!footPrintDataW2?.includes("1.1") ? "ct_question_item_hover" : "ct_question_item_hover active"}>
                            <h4>1-3 times a week</h4>
                            {/* <h4 className="mb-0" >1.1</h4> */}
                          </div>
                        </div>
                        <div className="ct_question_item">
                          <div onClick={() => this.onHandleClickOnAnswerW2("1")} className={!footPrintDataW2?.includes("1") ? "ct_question_item_hover" : "ct_question_item_hover active"}>
                            <h4>Rarely</h4>
                            {/* <h4 className="mb-0" >1</h4> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ct_faq_question_cnt  mt-5">
                    <h4 style={{ textAlign: "left" }}>Q3 Which public transport do you normally use?</h4>
                    <div className="ct_grid_2">
                      <div className="ct_question_item ct_question_item_hover">
                        {/* <p className="mb-0">Weight (W3)</p> */}
                      </div>
                      <div className="ct_question_items">
                        <div className="ct_question_item">
                          <div onClick={() => this.onHandleClickOnAnswerW3("1")} className={!footPrintDataW3?.includes("1") ? "ct_question_item_hover" : "ct_question_item_hover active"}>
                            <h4>Bus</h4>
                            {/* <h4 className="mb-0" >1</h4> */}
                          </div>
                        </div>
                        <div className="ct_question_item">
                          <div onClick={() => this.onHandleClickOnAnswerW3("0.9")} className={!footPrintDataW3?.includes("0.9") ? "ct_question_item_hover" : "ct_question_item_hover active"}>
                            <h4>Train</h4>
                            {/* <h4 className="mb-0" >0.9</h4> */}
                          </div>
                        </div>
                        <div className="ct_question_item">
                          <div onClick={() => this.onHandleClickOnAnswerW3("1.3")} className={!footPrintDataW3?.includes("1.3") ? "ct_question_item_hover" : "ct_question_item_hover active"}>
                            <h4>Auto</h4>
                            {/* <h4 className="mb-0" >1.3</h4> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ct_faq_question_cnt  mt-5">
                    <h4 style={{ textAlign: "left" }}>Q4 Whatis the fuel used in your car</h4>
                    <div className="ct_grid_2">
                     
                      <div className="ct_question_items">

                        <div className="ct_question_item">
                          <div onClick={() => this.onHandleClickOnAnswerW4("1.05")} className={!footPrintDataW4?.includes("1.05") ? "ct_question_item_hover" : "ct_question_item_hover active"}>
                            <h4>Petrol</h4>
                            {/* <h4 className="mb-0">1.05</h4> */}
                          </div>
                        </div>
                        <div className="ct_question_item">
                          <div onClick={() => this.onHandleClickOnAnswerW4("1.2")} className={!footPrintDataW4?.includes("1.2") ? "ct_question_item_hover" : "ct_question_item_hover active"}>
                            <h4>Diesel</h4>
                            {/* <h4 className="mb-0" >1.2</h4> */}
                          </div>
                        </div>
                        <div className="ct_question_item">
                          <div onClick={() => this.onHandleClickOnAnswerW4("0.6")} className={!footPrintDataW4?.includes("0.6") ? "ct_question_item_hover" : "ct_question_item_hover active"}>
                            <h4>LPG</h4>
                            {/* <h4 className="mb-0" >0.6</h4> */}
                          </div>

                        </div>
                        <div className="ct_question_item">
                          <div onClick={() => this.onHandleClickOnAnswerW4("0.2")} className={!footPrintDataW4?.includes("0.2") ? "ct_question_item_hover" : "ct_question_item_hover active"}>
                            <h4>E.V</h4>
                            {/* <h4 className="mb-0"  >0.2</h4> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary ct_save_btn_bg d-flex align-items-center mx-auto mt-5 py-2" onClick={this.onHanldeSubmitData}>Save</button>
              </div>
            </div>
          </div>
          <div className="content-backdrop fade"></div>
        </div>
      </div>
    );
  }
}
