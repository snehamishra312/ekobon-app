import React from "react";
// Customizable Area Start
import OrderHistoryController, {
  Props,
} from "./OrderHistoryController.web";
import { LogoDashboard } from "../../assets";
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';
import moment from 'moment'

export default class OrderHistory extends OrderHistoryController {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      orderHistory,
      projectName,
      investedProjectDetail,
    } = this.state;
    return (
      <div>
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
              <div className="app-brand demo mt-4 pb-4">
                <a href="/" className="app-brand-link ">
                  <img src={LogoDashboard} alt="" />
                </a>
                <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                  <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
              </div>
              <div className="menu-inner-shadow"></div>
              <ul className="menu-inner py-1">
                <li className="menu-item ">
                  <a href="/api/partner/dashboard" className="menu-link">
                    <i className="bi bi-house-door"></i>
                    <div data-i18n="Analytics">Dashboard</div>
                  </a>
                </li>
                <li className="menu-item ">
                  <a href="/api/partner/projects" className="menu-link">
                    <i className="bi bi-file-earmark-plus"></i>
                    <div data-i18n="Analytics">Projects</div>
                  </a>
                </li>
                <li className="menu-item active">
                  <a href="/api/partner/order/history" className="menu-link">
                    <i className="bi bi-bag"></i>
                    <div data-i18n="Analytics">Order History</div>
                  </a>
                </li>
                <li className="menu-item ">
                  <a href="/api/partner/api/setting" className="menu-link">
                    <i className="bi bi-gear"></i>
                    <div data-i18n="Analytics">API Setting</div>
                  </a>
                </li>
                <li className="menu-item ">
                  <a href="/api/partner/climet/project" className="menu-link">
                    <i className="bi bi-file-earmark-plus"></i>
                    <div data-i18n="Analytics">Climate Project</div>
                  </a>
                </li>
                <li className="menu-item ">
                  <a href="/api/partner/flight" className="menu-link">
                    <i className="bi bi-file-earmark-plus"></i>
                    <div data-i18n="Analytics">Flight</div>
                  </a>
                </li>
                <li className="menu-item ">
                  <a href="/api/partner/ecommerce" className="menu-link">
                    <i className="bi bi-file-earmark-plus"></i>
                    <div data-i18n="Analytics">Ecommerce</div>
                  </a>
                </li>
                <li className="menu-item ">
                  <a href="/api/partner/hotel" className="menu-link">
                    <i className="bi bi-file-earmark-plus"></i>
                    <div data-i18n="Analytics">Hotel</div>
                  </a>
                </li>
              </ul>
            </aside>
            <div className="layout-page">
              <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                  <div className="row">
                    <div className="col-lg-12 mb-4 order-0">
                      <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between">
                          <h4 className="card-title m-0 me-2"><strong>Order History</strong></h4>
                        </div>
                        <div className="table-responsive text-nowrap ">
                          <table className="table ct_order_table table-striped">
                            <thead>
                              <tr>
                                <th>ORDER NO.</th>
                                <th>USER ID</th>
                                <th>PROJECTS</th>
                                <th>CARBON OFFSET (Kg)</th>
                                <th>OFFSET AMOUNT</th>
                                <th>DATE OF PURCHASE </th>
                                <th>STATUS</th>
                              </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                              {orderHistory && orderHistory.map((item: any, index: any) => (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>{item.order_id}</td>
                                  <td data-bs-toggle="tooltip" data-bs-placement="bottom" title="22.5 MW Wind Power Project 30%, 100.5 MW Wind Power Project 70%"><span className="ct_short_line">{projectName[0].project_name}</span>, <span className="ct_short_line">{projectName[1].project_name}</span></td>
                                  <td>{item.kgco2e}</td>
                                  <td>₹ {item.amount}</td>
                                  <td>{moment(item.purchase_date).format("YYYY/MM/DD")}</td>
                                  <td>
                                    <select name="" id="" className="ct_status_list">
                                      <option value="">Active</option>
                                      <option value="">Pending</option>
                                      <option value="">Completed</option>
                                      <option value="">Cancel</option>
                                    </select>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="card mt-4">
                        <div className="card-header d-flex align-items-center justify-content-between">
                          <h4 className="card-title m-0 me-2"><strong>Invested Projects</strong></h4>
                        </div>
                        <div className="table-responsive text-nowrap ">
                          <table className="table ct_order_table table-striped">
                            <thead>
                              <tr>
                                <th> NO.</th>
                                <th>PROJECTS NAME</th>
                                <th>CARBON OFFSET (Kg)</th>
                                <th>OFFSET AMOUNT</th>
                              </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                              {investedProjectDetail && investedProjectDetail.map((item: any, index: any) => (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>{item.project_name}</td>
                                  <td>{item.total_offset}</td>
                                  <td>₹ {item.amount_invested}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-backdrop fade"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
