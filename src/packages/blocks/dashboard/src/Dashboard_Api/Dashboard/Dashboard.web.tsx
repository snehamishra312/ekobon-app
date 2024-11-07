import React from "react";
// Customizable Area Start
import DashboardController, {
    Props,
} from "./DashboardController.web";
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';
import PlotlyChart from "react-plotlyjs-ts";
import { NextStep1, LogoDashboard, TotalIcon, WeekIcon, TodayIcon, Project_1, Project_2, MonthIcon } from "../../assets";
import ReactApexChart from 'react-apexcharts';



export default class Dashboard extends DashboardController {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {
            offsetyearly,
            offsetMonthly,
            offsetWeekly,
            options1,
            series1,
            isShowGraph,
            investedProjectsData,
            options,
            series,
            offsetHourly,
            total_amount,
            total_amount_monthly,
            arrayseries,
            isOffset,
            total_amount_weekly,
            total_amount_Hourly,
            series2,
            isDropDownShow
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
                                <li className="menu-item active">
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
                                                <div className="avatar avatar-online" onClick={this.onClickDropdown}>
                                                    <img src={NextStep1} className="w-px-40 h-auto rounded-circle" />
                                                </div>
                                            </a>
                                            <ul className={isDropDownShow == true ? "dropdown-menu dropdown-menu-end show" : "dropdown-menu dropdown-menu-end"}>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar avatar-online">
                                                                    <img src={NextStep1} className="w-px-40 h-auto rounded-circle" />
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
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
                                    <div className="col-lg-8 mb-4 order-0">
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="card h-100 ct_card_light_yellow">
                                                    <div className="card-body ct_main_card">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img
                                                                    src={TodayIcon}
                                                                    alt="chart success"
                                                                    className="rounded"
                                                                />
                                                            </div>
                                                        </div>
                                                        <span className="fw-semibold d-block mb-1" style={{ textAlign: "left" }}>Yearly Offset</span>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <h3> {offsetyearly ? (offsetyearly / 1000).toFixed(2) : 0} Tonnes </h3>
                                                            <h4 className="card-title mb-2 "> ₹{total_amount ? total_amount : 0}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="card  h-100 ct_card_lightblue">
                                                    <div className="card-body ct_main_card">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img
                                                                    src={WeekIcon}
                                                                    alt="Credit Card"
                                                                    className="rounded"
                                                                />
                                                            </div>
                                                        </div>
                                                        <span className="fw-semibold d-block mb-1" style={{ textAlign: "left" }}>Weekly Offset</span>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <h3> {offsetWeekly ? (offsetWeekly / 1000).toFixed(2) : 0}  Tonnes</h3>
                                                            <h4 className="card-title mb-2 ">₹{total_amount_weekly ? total_amount_weekly : 0}</h4>
                                                        </div>
                                                        {/* <small className=" fw-semibold"><i className="bx bx-up-arrow-alt"></i></small> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="card  h-100 ct_card_lightblue">
                                                    <div className="card-body ct_main_card">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img src={MonthIcon} alt="Credit Card" className="rounded" />
                                                            </div>
                                                        </div>
                                                        <span className="fw-semibold d-block mb-1" style={{ textAlign: "left" }}>Monthly Offset</span>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <h3> {offsetMonthly ? (offsetMonthly / 1000).toFixed(2) : 0} Tonnes</h3>
                                                            <h4 className="card-title mb-2 ">₹ {total_amount_monthly ? total_amount_monthly : 0}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6  mb-4">
                                                <div className="card  h-100 ct_card_light_yellow">
                                                    <div className="card-body ct_main_card">
                                                        <div className="card-title d-flex align-items-start justify-content-between">
                                                            <div className="avatar flex-shrink-0">
                                                                <img src={TotalIcon} alt="Credit Card" className="rounded" />
                                                            </div>
                                                        </div>
                                                        <span className="fw-semibold d-block mb-1" style={{ textAlign: "left" }}>Today Offset</span>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <h3>{offsetHourly ? (offsetHourly / 1000).toFixed(2) : 0} Tonnes</h3>
                                                            <h4 className="card-title mb-2 ">₹ {total_amount_Hourly ? total_amount_Hourly : 0}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-md-12">
                                                <div className="nav-align-top card p-4">
                                                    <ul className="nav nav-pills mb-3 ct_das_tab" role="tablist">
                                                        <li className="nav-item">
                                                            <button
                                                                type="button"
                                                                className={isOffset == false ? "nav-link active" : "nav-link"}
                                                                role="tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#Carbon_Oxide"
                                                                aria-controls="Carbon_Oxide"
                                                                aria-selected="true"
                                                                onClick={() => this.onHandleOffsetAmountClick("carbon offset")}>
                                                                Carbon Offset
                                                            </button>
                                                        </li>
                                                        <li className="nav-item">
                                                            <button
                                                                type="button"
                                                                className={isOffset == true ? "nav-link active" : "nav-link"}
                                                                role="tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#Offset_Amount"
                                                                aria-controls="Offset_Amount"
                                                                aria-selected="false"
                                                                onClick={() => this.onHandleOffsetAmountClick("carbon amount")}>
                                                                Offset Amount
                                                            </button>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content ct_box_shadow_none">
                                                        {
                                                            isOffset == false &&
                                                            <div className="tab-pane fade show active" id="Carbon_Oxide" role="tabpanel">
                                                                <div id="chart">
                                                                    <ReactApexChart options={options} series={series} type="bar" height={350} />
                                                                </div>
                                                            </div>
                                                        }
                                                        {
                                                            isOffset == true &&
                                                            <div className="tab-pane fade show active" id="Carbon_Oxide" role="tabpanel">
                                                                <div id="chart_2">
                                                                    <ReactApexChart options={options} series={series2} type="bar" height={350} />
                                                                </div>
                                                            </div>
                                                        }
                                                        <div className="tab-pane fade" id="Offset_Amount" role="tabpanel">
                                                            <div id="chart2"></div>
                                                            <div id="chart"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4  order-1">
                                        <div className="row ">
                                            <div className="col-12">
                                                <div className="card">
                                                    <div className="card-header d-flex align-items-center justify-content-between">
                                                        <h4 className="card-title m-0 me-2 ct_text_clr_dark"><strong>Active Projects</strong></h4>
                                                    </div>
                                                    <div className="preview-list card-body">
                                                        {investedProjectsData && investedProjectsData.slice(0, 2).map((item: any) => (
                                                            <div className="preview-item border-bottom">
                                                                <div className="preview-thumbnail">
                                                                    <div className="preview-icon bg-primary">
                                                                        <img src={item?.project_url} />
                                                                    </div>
                                                                </div>
                                                                <div className="preview-item-content d-sm-flex flex-grow">
                                                                    <div className="flex-grow">
                                                                        <h6 className="preview-subject mb-2">{item?.project_name}</h6>
                                                                        <p className="text-muted mb-0 text-start">{item?.location && <i className="fa fa-map-marker me-1" aria-hidden="true"></i>}
                                                                            {item?.location}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                        }
                                                    </div>
                                                </div>
                                                <div className="card mt-4">
                                                    <div className="card-header d-flex align-items-center justify-content-between">
                                                        <h4 className="card-title m-0 me-2 ct_text_clr_dark"><strong>Project Distribution</strong></h4>
                                                    </div>
                                                    <div className="ct_circle_graph">
                                                        {isShowGraph == true &&
                                                            <div id="project_distributed_chart">
                                                                <ReactApexChart
                                                                    options={options1} series={series1} type="pie"
                                                                />
                                                            </div>
                                                        }
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
                </div>
            </div>
        );
    }
}