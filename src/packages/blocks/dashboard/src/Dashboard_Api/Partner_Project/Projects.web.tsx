import React from "react";
import ProjectsController, {
  Props,
} from "./ProjectsController.web";
import { NextStep1, LogoDashboard } from "../../assets";
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';
import CliemetProject from "../Cliemet_Project/CliemetProject.web";

export default class Projects extends ProjectsController {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const {
      allProjectData,
      selectValue,
      project2Value,
      project1Value,
      selectedProjectValue,
      selectedProject2Value,
      selectValue2
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
                <li className="menu-item active">
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
              <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
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
                          <img src={NextStep1} className="w-px-40 h-auto rounded-circle" />
                        </div>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
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
              <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y ">
                  <div className="ct_all_project_div">
                    <div className="row align-items-center">
                      <div className="col-md-10 mb-4">
                        <div className="row align-items-center mb-4">
                          <div className="col-md-6 mb-4 mb-md-0">
                            <div className="ct_project_name">
                              <p className="mb-0">Project 1  </p>
                              <select name="" id="" value={selectedProjectValue} className="form-control" onChange={(e) => this.onHandleChangeProject(e.target.value)}>
                                <option value="Select Project">Select Project</option>
                                {allProjectData && allProjectData.map((item: any) => (
                                  <option value={item.project_name}>{item.project_name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className=" ct_project_slider_main">
                              <div className="ct_completed_project_num ct_num_25">
                                <h6>{project1Value == 1 ? "25%" : project1Value == 2 ? "50%" : project1Value == 3 ? "75%" : project1Value == 4 ? "100%" : "0%"}</h6>
                              </div>
                              <div className="ct_project_slider">
                                <span>0 </span>
                                <input type="range" value={project1Value} min="0" max="4" onChange={(e) => this.setState({ project1Value: e.target.value })} />
                                <span>100</span>
                              </div>
                              <div className="ct_bottom_label">
                                <p>0%</p>
                                <p>25%</p>
                                <p>50%</p>
                                <p>75%</p>
                                <p>100%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center mb-4">
                          <div className="col-md-6 mb-4 mb-md-0">
                            <div className="ct_project_name">
                              <p className="mb-0">Project 2</p>
                              <select name="" value={selectedProject2Value} id="" className="form-control" onChange={(e) => this.onHandleChangeProject2(e.target.value)}>
                                <option value="">Select Project</option>
                                {allProjectData && allProjectData.map((item: any) => (
                                  <option value={item.project_name}>{item.project_name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className=" ct_project_slider_main">
                              <div className="ct_completed_project_num ct_num_25">
                                <h6>{project2Value == 1 ? "25%" : project2Value == 2 ? "50%" : project2Value == 3 ? "75%" : project2Value == 4 ? "100%" : "0%"}</h6>
                              </div>
                              <div className="ct_project_slider">
                                <span>0 {project2Value == "50%"}</span>
                                <input type="range" value={project2Value} min="0" max="4" onChange={(e) => this.setState({ project2Value: e.target.value })} />
                                <span>100</span>
                              </div>
                              <div className="ct_bottom_label">
                                <p>0%</p>
                                <p>25%</p>
                                <p>50%</p>
                                <p>75%</p>
                                <p>100%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 mb-4">
                        <button className="btn btn-primary ct_save_btn_bg d-flex align-items-center ms-md-auto" onClick={this.onHandleSave}>
                          Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CliemetProject
                onSelectProject={this.onSelectProject}
                allProjectData={allProjectData}
                selectValue={selectValue ? " " : selectedProjectValue}
                selectValue2={selectValue2 ? " " : selectedProject2Value}
              />
            </div>
            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>
    );
  }
}
