import React from "react";
import UpdatePartnerController, {
    Props,
} from "./UpdatePartnerController.web";
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';
import { LOGO, AvtarIcon } from '../../assets';

export default class UpdatePartner extends UpdatePartnerController {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            companyName,
            state,
            city,
            pincode,
            address,
            contryName,
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
                            <div className="registration-form">
                                <h2>Update Partner</h2>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label >First Name</label>
                                                <input type="text" onChange={(e) => this.setState({ firstName: e.target.value })} value={firstName} id="username" name="username" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label >Last Name</label>
                                                <input type="text" onChange={(e) => this.setState({ lastName: e.target.value })} value={lastName} id="username" name="username" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label >Email</label>
                                                <input type="email" readOnly onChange={(e) => this.setState({ email: e.target.value })} value={email} id="email" name="email" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label >Number</label>
                                                <input type="number" onChange={(e) => this.setState({ phoneNumber: e.target.value })} value={phoneNumber} id="number" name="number" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label >Company Name</label>
                                                <input type="text" onChange={(e) => this.setState({ companyName: e.target.value })} value={companyName} id="c_name" name="text" className="form-control" required />
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label >Company Id</label>
                                                <input type="number"  id="c_id" name="text" className="form-control" required />
                                            </div>
                                        </div> */}
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label >State</label>
                                                <input type="text" onChange={(e) => this.setState({ state: e.target.value })} value={state} id="c_name" name="text" className="form-control" required />
                                                {/* <select className="form-control">
                                                    <option value="">Madhya Pradesh</option>
                                                    <option value="">Uttar Pradesh</option>
                                                    <option value="">Maharastra</option>
                                                </select> */}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label >City</label>
                                                <input type="text" onChange={(e) => this.setState({ city: e.target.value })} value={city} id="c_name" name="text" className="form-control" required />
                                                {/* <select className="form-control">
                                                    <option value="">Indore</option>
                                                    <option value="">Ujjain</option>
                                                    <option value="">Dewas</option>
                                                </select> */}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label >pincode</label>
                                                <input type="number" onChange={(e) => this.setState({ pincode: e.target.value })} value={pincode} id="c_id" name="text" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label >Country Name</label>
                                                {/* <select className="form-control"> */}
                                                <input type="text" onChange={(e) => this.setState({ contryName: e.target.value })} value={contryName} id="c_name" name="text" className="form-control" required />
                                                {/* <option value="">India</option>
                                                    <option value="">Australia</option>
                                                    <option value="">Bangladesh</option> */}
                                                {/* </select> */}
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label >Password</label>
                                                <input type="password" onChange={(e) => this.setState({ passWord: e.target.value })} value={passWord} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label >Confirm Password</label>
                                                <input type="password" onChange={(e) => this.setState({ confirmPassword: e.target.value })} value={confirmPassword} className="form-control" />
                                            </div>
                                        </div> */}
                                        <div className="col-md-12 mb-3">
                                            <div className="form-group">
                                                <label >Address</label>
                                                <input type="text" onChange={(e) => this.setState({ address: e.target.value })} value={address} className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary d-flex align-items-center mx-auto mt-5" onClick={(e) => this.updateUser(e)}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </>
        );
    }
}
