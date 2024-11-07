import React from "react";
// Customizable Area Start
import OffsetDetailController, {
    Props,
} from "./OffsetDetailController.web";
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';
import { AvtarIcon } from '../../assets';

export default class OffsetDetails extends OffsetDetailController {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const {
            monthlyOffset1,
            monthlyOffset2,
            monthValue1,
            monthValue2,
            currentYear,
            monthAmount1,
            monthAmount2,
            rangeValue1,
            rangeValue
        } = this.state;
        return (

            <div>
                <div className="layout-wrapper layout-content-navbar">
                    <div className="layout-container">
                        {/* Layout container  */}
                        <div className="layout-page">
                            {/* Navbar  */}
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
                                        {/* / User */}
                                    </ul>
                                </div>
                            </nav>
                            {/* / Navbar  */}

                            {/* Content wrapper */}
                            <div className="content-wrapper">
                                {/* Content */}
                                <div className="container-xxl flex-grow-1 container-p-y">
                                    <div className="row">
                                        <div className="col-lg-12 mb-4 order-0">
                                            <div className="card p-4">
                                                <div>
                                                    <h4 className="mb-2" style={{ textAlign: "left" }}><strong>Offset My Footprint</strong></h4>
                                                    <p style={{ textAlign: "left" }}>Be carbon neutral by funding projects that absorb greenhouse gas emissions.</p>
                                                </div>
                                                <div className="mt-4">
                                                    <h5 className="mb-2" style={{ textAlign: "left" }}>Your monthly carbon footprint</h5>
                                                    <p style={{ textAlign: "left" }}>Estimated from purchases on your DBS cards</p>
                                                    {monthlyOffset1 &&
                                                        <div className="ct_footprint_card">
                                                            <div className="ct_footprint_cnt">
                                                                <p style={{ textAlign: 'left' }} className="mb-2">{monthValue1?.slice(0, 3)}{" "} {currentYear && currentYear}</p>
                                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                                    <h5><span>{monthlyOffset1}</span> Kg CO2e</h5>
                                                                    <h5>0%</h5>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" ></div>
                                                                </div>
                                                            </div>
                                                            <div className="ct_offset_btn">
                                                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#march_offset">Offset</button>
                                                            </div>
                                                        </div>
                                                    }
                                                    {monthlyOffset2 &&
                                                        <div className="ct_footprint_card mt-3">
                                                            <div className="ct_footprint_cnt">
                                                                <p style={{ textAlign: 'left' }} className="mb-2">{monthValue2?.slice(0, 3)}{" "}{currentYear && currentYear}</p>
                                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                                    <h5><span>{monthlyOffset2}</span> Kg CO2e</h5>
                                                                    <h5>0%</h5>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar"></div>
                                                                </div>
                                                            </div>
                                                            <div className="ct_offset_btn">
                                                                <button className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#march_offset1">Offset</button>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-backdrop fade"></div>
                            </div>
                            {/* Content wrapper */}
                        </div>
                        {/* / Layout page */}
                    </div>

                    {/* Overlay */}
                    <div className="layout-overlay layout-menu-toggle"></div>
                </div>
                {/* / Layout wrapper */}

                <div className="modal fade" id="march_offset" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">Offset Your Carbon Footprint</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="ct_footprint_cnt">
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="ct_small_card ">
                                                <p className="mb-2">{monthValue1}</p>
                                                <h5 className="mb-2"><span>{monthlyOffset1}</span> Kg CO2e</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="ct_small_card ">
                                                <p className="mb-2">Your Contribution</p>
                                                <h5 className="mb-2"> <span> {monthAmount1}</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ct_range_slider mt-4">
                                        <input type="range" className="form-range" min="0" max="2" value={rangeValue} onChange={(e) => this.onChangeRangeChange(e)} id="customRange2" />
                                        <div className="ct_range_input_cnt">
                                            <p className="mb-0">0%</p>
                                            <p className="mb-0">50%</p>
                                            <p className="mb-0">100%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <button type="button" className="btn btn-primary" onClick={this.onHandleClickOn1Next}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="march_offset1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">Offset Your Carbon Footprint</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="ct_footprint_cnt">
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="ct_small_card ">
                                                <p className="mb-2">{monthValue2}</p>
                                                <h5 className="mb-2"><span>{monthlyOffset2}</span> Kg CO2e</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="ct_small_card ">
                                                <p className="mb-2">Your Contribution</p>
                                                <h5 className="mb-2"> <span>{monthAmount2}</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ct_range_slider mt-4">
                                        <input type="range" className="form-range" min="0" max="2" value={rangeValue1} onChange={(e) => this.onChangeRangeChange1(e)} id="customRange2" />
                                        <div className="ct_range_input_cnt">
                                            <p className="mb-0">0%</p>
                                            <p className="mb-0">50%</p>
                                            <p className="mb-0">100%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <button type="button" className="btn btn-primary" onClick={this.onHandleClickOn2Next}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
