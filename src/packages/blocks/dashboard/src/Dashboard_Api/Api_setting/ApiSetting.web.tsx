import React from "react";
// Customizable Area Start
import ApiSettingController, {
  Props
} from "./ApiSettingController.web";
import { LogoDashboard } from "../../assets";
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';
import Chart from 'react-apexcharts';

export default class ApiSetting extends ApiSettingController {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const {
      monthlyData,
      layout,
      totalYearApi,
      totalWeeklyApi,
      totalHourlyApi,
      totalMonthApi,
      hourlyData,
      weeklyData,
      weeklyGraph3,
      hourlyGraph2,
      hourlyGraph1,
      options,
      optionss,
      series,
      hourlyOptions,
      hourlySeries,
      monthlyOptions,
      monthlySeries,
      totalDailyApi,
    } = this.state;
    return (
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
              <li className="menu-item ">
                <a href="/api/partner/order/history" className="menu-link">
                  <i className="bi bi-bag"></i>
                  <div data-i18n="Analytics">Order History</div>
                </a>
              </li>
              <li className="menu-item active">
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
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card h-100 ct_p_20">
                    <div className="card-body text-center">
                      <div>
                      <h4><strong>Total API Calls</strong></h4>
                      <h2 className="fw-700 mb-0 ct_green_text">{totalYearApi && totalYearApi[0] ? totalYearApi[0].sum : 0}</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card h-100 ct_p_20">
                    <div className="card-body text-center">
                     <div>
                     <h4><strong>Daily API Calls</strong></h4>
                      <h2 className="fw-700 mb-0 ct_green_text">{totalDailyApi ? totalDailyApi : 0}</h2>
                     </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 ct_p_20">
                    <div className="card-body text-center">
                      <div>
                      <h4><strong>Monthly API Calls</strong></h4>
                      <h2 className="fw-700 mb-0 ct_green_text">{totalMonthApi ? totalMonthApi : 0}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="nav-align-top card p-4">
                    <ul className="nav nav-pills mb-3" role="tablist">
                      <li className="nav-item">
                        <button type="button" className={hourlyGraph2 == false ? "nav-link active" : "nav-link"} role="tab" data-bs-toggle="tab"
                          data-bs-target="#hourly_api_calls" aria-controls="hourly_api_calls" aria-selected={hourlyGraph2 == false ? "true" : "false"}
                          onClick={() => this.onHanldeClickOnToggle("Hourly")}>
                          Hourly
                        </button>
                      </li>
                      <li className="nav-item">
                        <button type="button" className={hourlyGraph2 == true ? "nav-link active" : "nav-link"} role="tab" data-bs-toggle="tab"
                          data-bs-target="#Monthly_api_calls" aria-controls="Monthly_api_calls" aria-selected={hourlyGraph2 == true ? "true" : "false"}
                          onClick={() => this.onHanldeClickOnToggle("Monthly")}>
                          Monthly
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content ct_box_shadow_none">
                      {hourlyGraph2 == false && hourlyOptions &&
                        <div className="tab-pane fade show active" id="hourly_api_calls" role="tabpanel">
                          <Chart options={hourlyOptions} series={hourlySeries} type="bar" width={900} height={320} />
                        </div>
                      }
                      {hourlyGraph2 == true && monthlyOptions &&
                        <div className="tab-pane fade show active" id="hourly_api_calls" role="tabpanel">
                          <Chart options={monthlyOptions} series={monthlySeries} type="bar" width={900} height={320} />
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="nav-align-top card p-4">
                    <ul className="nav nav-pills mb-3" role="tablist">
                      <li className="nav-item">
                        <button type="button" className={hourlyGraph1 == false ? "nav-link active" : "nav-link"} role="tab" data-bs-toggle="tab"
                          data-bs-target="#hourly_res_time" aria-controls="hourly_res_time" aria-selected={hourlyGraph1 == false ? "true" : "false"}
                          onClick={() => this.onClickonHourlygraph("Hourly")}>
                          Hourly
                        </button>
                      </li>
                      <li className="nav-item">
                        <button type="button" className={hourlyGraph1 == true ? "nav-link active" : "nav-link"} role="tab" data-bs-toggle="tab"
                          data-bs-target="#weekly_res_time" aria-controls="weekly_res_time" aria-selected={hourlyGraph1 == true ? "true" : "false"}
                          onClick={() => this.onClickonHourlygraph("Weekly")}>
                          Weekly
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content ct_box_shadow_none">
                      {hourlyGraph1 == false && hourlyOptions &&
                        <div className="tab-pane fade show active" id="hourly_res_time" role="tabpanel">
                          <Chart options={hourlyOptions} series={hourlySeries} type="bar" width={900} height={320} />
                          <div id="hourly_response_time"></div>
                          <div className="ct_api_responice_div">
                            <div id="hourly_response_time" className="ct_margin_l_19"></div>
                          </div>
                        </div>
                      }
                      {hourlyGraph1 == true && options &&
                        <div className="tab-pane fade show active" id="hourly_res_time" role="tabpanel">
                          <Chart options={options} series={series} type="bar" width={900} height={320} />
                          <div id="hourly_response_time"></div>
                          <div className="ct_api_responice_div">
                            <div id="hourly_response_time" className="ct_margin_l_19"></div>
                          </div>
                        </div>
                      }
                      <div className="tab-pane fade" id="weekly_res_time" role="tabpanel">
                        <div id="chart2"></div>
                        <div className="ct_api_responice_div">
                          <div id="weekly_response_time" className="ct_margin_l_19"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="nav-align-top card p-4">
                    <ul className="nav nav-pills mb-3" role="tablist">
                      <li className="nav-item">
                        <button type="button" className={weeklyGraph3 == false ? "nav-link active" : "nav-link"} role="tab" data-bs-toggle="tab" onClick={() => this.onChangeWeeklyGraph("Weekly")}
                          data-bs-target="#weekly_conversion_tab" aria-controls="weekly_conversion_tab" aria-selected={weeklyGraph3 == false && "true"}>
                          Weekly
                        </button>
                      </li>
                      <li className="nav-item">
                        <button type="button" className={weeklyGraph3 == true ? "nav-link active" : "nav-link"} role="tab" data-bs-toggle="tab" onClick={() => this.onChangeWeeklyGraph("Monthly")}
                          data-bs-target="#monthly_conversion_tab" aria-controls="monthly_conversion_tab" aria-selected={weeklyGraph3 == true && "true"}>
                          Monthly
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content ct_box_shadow_none">
                      {weeklyGraph3 == false && options && 
                        <div className="tab-pane fade show active" id="weekly_conversion_tab" role="tabpanel">
                          <Chart options={options} series={series} type="bar" width={900} height={320} />
                          <div id="hourly_response_time"></div>
                          <div className="ct_api_responice_div">
                            <div id="weekly_conversion_ratio" className="ct_margin_l_19"></div>
                          </div>
                        </div>
                      }
                      {
                        weeklyGraph3 == true && monthlyOptions &&
                        <div className="tab-pane fade show active" id="weekly_conversion_tab" role="tabpanel">
                          <Chart options={monthlyOptions} series={monthlySeries} type="bar" width={900} height={320} />
                          <div id="hourly_response_time"></div>
                          <div className="ct_api_responice_div">
                            <div id="weekly_conversion_ratio" className="ct_margin_l_19"></div>
                          </div>
                        </div>
                      }
                      <div className="tab-pane fade" id="monthly_conversion_tab" role="tabpanel">
                        <div id="chart2"></div>
                        <div className="ct_api_responice_div">
                          <div id="monthly_conversion_ratio" className="ct_margin_l_19"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-backdrop fade"></div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    );
  }
}
