import React from "react";
import AdminDashboardController, {
    Props,
} from "./AdminDashboardController.web";
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';
import { LOGO, AvtarIcon } from '../../assets';

export default class AdminDashboard extends AdminDashboardController {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const {
            partnerUser
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
                                <li className="menu-item active">
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
                                <li className="menu-item">
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
                            &nbsp;
                            <div className="ct_calculator_btn" style={{ textAlign: 'left' }}>Users List</div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>S.NO</th>
                                        <th>Name</th>
                                        <th>Last</th>
                                        <th>Company Name</th>
                                        <th>City</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {partnerUser && partnerUser.map((item: any, index: any) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item?.firstname}</td>
                                            <td>{item?.lastname}</td>
                                            <td>{item?.company_name}</td>
                                            <td>{item?.city}</td>
                                            <td>{item?.email}</td>
                                            <td>{item?.phone_number}</td>
                                            <td><button onClick={() => this.onHandleDelete(item?.id)} className="btn btn-danger" style={{ marginRight: "5px", marginTop: '5px' }}>Delete</button><button style={{ marginTop: "5px" }} onClick={() => this.onHandleSubmit(item?.id)} className="btn btn-info">Update</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </>
        );
    }
}
