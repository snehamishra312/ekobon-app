import React from "react";
import AdminProjectController, {
    Props,
} from "./AdminProjectController.web";
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';
import { LOGO, AvtarIcon } from '../../assets';

export default class AdminProject extends AdminProjectController {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const {
            climate_project
        } = this.state;
        return (
            <>
                <div className="layout-wrapper layout-content-navbar">
                    <div className="layout-container">
                        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                            <div className="app-brand demo mt-4 pb-4">
                                <a href="/" className="app-brand-link ">
                                    <img src={LOGO} alt="" />
                                </a>
                                <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                                </a>
                            </div>
                            <div className="menu-inner-shadow"></div>
                            <ul className="menu-inner py-1">
                                <li className="menu-item">
                                    <a href="/api/admin" className="menu-link">
                                        <i className="bi bi-house-door"></i>
                                        <div data-i18n="Analytics">Admin Dashboard</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/api/add/partner" className="menu-link">
                                        <i className="bi bi-house-door"></i>
                                        <div data-i18n="Analytics">Add Partner</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/api/admin/transaction" className="menu-link">
                                        <i className="bi bi-house-door"></i>
                                        <div data-i18n="Analytics">All Transaction</div>
                                    </a>
                                </li>
                                <li className="menu-item active">
                                    <a href="/api/admin/project" className="menu-link">
                                        <i className="bi bi-house-door"></i>
                                        <div data-i18n="Analytics">Projects</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href='/api/admin/offset-converstion' className="menu-link">
                                        <i className="bi bi-house-door"></i>
                                        <div data-i18n="Analytics">Offset Converstion </div>
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
                                                <div className="avatar avatar-online">
                                                    <img src={AvtarIcon} className="w-px-40 h-auto rounded-circle" />
                                                </div>
                                            </a>
                                        </li>
                                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                            <div onClick={this.onHandleLogout}>
                                                <a>
                                                    Logout
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div style={{ marginTop: "5px" }}>
                                <div className="ct_projrct_group container">
                                    <h4 style={{ textAlign: "left" }}>Renewable</h4>
                                    <div className="row">
                                        {climate_project && climate_project.map((item: any) => (
                                            item.category_name === "Renewable" &&
                                            <div className="col-md-4 col-sm-6 mb-4 order-0">
                                                <div className="ct_project_item">
                                                    <figure>
                                                        <div className="ct_project_img">
                                                            <img src={item.project_url} alt="Project" />
                                                        </div>
                                                        <figcaption>
                                                            <h4>{item.project_name}</h4>
                                                            <p>{item.location}</p>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="ct_projrct_group container">
                                    <h4 style={{ textAlign: "left" }}>Energy Efficiency</h4>
                                    <div className="row">
                                        {climate_project && climate_project.map((item: any) => (
                                            item.category_name === "Energy Efficiency" &&
                                            <div className="col-md-4 col-sm-6 mb-4 order-0">
                                                <div className="ct_project_item">
                                                    <figure>
                                                        <div className="ct_project_img">
                                                            <img src={item.project_url} alt="Project" />
                                                        </div>
                                                        <figcaption>
                                                            <h4>{item.project_name}</h4>
                                                            <p>{item.location}</p>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="ct_projrct_group container">
                                    <h4 style={{ textAlign: "left" }}>Community Projects</h4>
                                    <div className="row">
                                        {/* ct_border_green */}
                                        {climate_project && climate_project.map((item: any) => (
                                            item.category_name === "Community projects\t" &&
                                            <div className="col-md-4 col-sm-6 mb-4 order-0">
                                                <div className="ct_project_item">
                                                    <figure>
                                                        <div className="ct_project_img">
                                                            <img src={item.project_url} alt="Project" />
                                                        </div>
                                                        <figcaption>
                                                            <h4>{item.project_name}</h4>
                                                            <p>{item.location}</p>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="ct_projrct_group container">
                                    <h4 style={{ textAlign: "left" }}>Plant based solutions</h4>
                                    <div className="row">
                                        {/* ct_border_green */}
                                        {climate_project && climate_project.map((item: any) => (
                                            item.category_name === "Plant based solutions" &&
                                            <div className="col-md-4 col-sm-6 mb-4 order-0">
                                                <div className="ct_project_item">
                                                    <figure>
                                                        <div className="ct_project_img">
                                                            <img src={item.project_url} alt="Project" />
                                                        </div>
                                                        <figcaption>
                                                            <h4>{item.project_name}</h4>
                                                            <p>{item.location}</p>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="ct_projrct_group container">
                                    <h4 style={{ textAlign: "left" }}>Agroforestry</h4>
                                    <div className="row">
                                        {/* ct_border_green */}
                                        {climate_project && climate_project.map((item: any) => (
                                            item.category_name === "Agroforestry" &&
                                            <div className="col-md-4 col-sm-6 mb-4 order-0">
                                                <div className="ct_project_item">
                                                    <figure>
                                                        <div className="ct_project_img">
                                                            <img src={item.project_url} alt="Project" />
                                                        </div>
                                                        <figcaption>
                                                            <h4>{item.project_name}</h4>
                                                            <p>{item.location}</p>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="ct_projrct_group container">
                                    <h4 style={{ textAlign: "left" }}>Miyawaki</h4>
                                    <div className="row">
                                        {/* ct_border_green */}
                                        {climate_project && climate_project.map((item: any) => (
                                            item.category_name === "Miyawaki" &&
                                            <div className="col-md-4 col-sm-6 mb-4 order-0">
                                                <div className="ct_project_item">
                                                    <figure>
                                                        <div className="ct_project_img">
                                                            <img src={item.project_url} alt="Project" />
                                                        </div>
                                                        <figcaption>
                                                            <h4>{item.project_name}</h4>
                                                            <p>{item.location}</p>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
