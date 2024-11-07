import React from "react"
import Pro1Controller, {
    Props,
} from "./Climate_ProjectController.web"
import Climate_ProjectController from "./Climate_ProjectController.web"
import ClimateProjectMiddleCarousel from "../../LandingPages/ClimateProjectMiddleCarousel.web";
import {
    ScreenLoader,
} from "../../assets";
import {
    LOGO, White_Logo, Offset, Planet_Earth, Gift_Card, ESG, API11, Carbon_Neutral, Lca_Icon,
    Footer_Shape_3, Climate_Goals, ClimateGoldicon, ClimateIcon, ClimateIconNew, ClimateProject, ClimateProject9
    , Project_1_new, Project_2_new, Promo_Video_Bg, project08, project09, project10, project13, project11, project12, Project_3_new, Project_4_new, Project_5_new, Project_6_new, Project_7_new, Project_8_new, Project_9_new
} from '../assets';
export default class Faq extends Climate_ProjectController {
    constructor(props: Props) {
        super(props)
    }
    render() {
        const {
            isSideBarClick,
            loginFlag,
            isScroll,
            isDarkMode,
            climateProjectList,
            onMenuOpen,
            onOpenIndividuals,
            onOpenCorporates,
            onOpenResources1,
            onOpenResources,
            full_name,
            contact_number,
            user_email,
            company,
            ekobon_help_you,
            message,
        } = this.state;
        return (
            <div className={isDarkMode == true ? 'theme-dark' : 'theme-light'}>
                <div className="switch-theme-mode ct_mob_light_mode">
                    <label id="switch" className="switch">
                        <input type="checkbox" checked={isDarkMode == true ? true : false} onChange={this.handleSwithmode} id="slider" />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="page-wrapper" onScroll={this.handleScroll}>
                    <header className={isScroll == true ? "header-wrap sticky" : "header-wrap"}>
                        <div className="header-bottom">
                            <div className="container">
                                <nav className="navbar navbar-expand-md navbar-light">
                                    <a className="navbar-brand" href="/" >
                                        <img className="logo-light" src={LOGO} />
                                        <img className="logo-dark" src={White_Logo} />
                                    </a>
                                    <div className={isSideBarClick == false ? "collapse navbar-collapse main-menu-wrap" : "navbar-collapse main-menu-wrap open"} id="navbarSupportedContent">
                                        <div className="menu-close d-lg-none">
                                            <a href="javascript:void(0)" onClick={this.onHandleSideBar}> <i className="ri-close-line"></i></a>
                                        </div>
                                        <ul className="navbar-nav ms-auto align-items-center">
                                            <li className="nav-item">
                                                <a href="/" className="nav-link ">
                                                    Home
                                               </a>
                                            </li>
                                            <li className={onMenuOpen == false ? "nav-item" : "nav-item menu-open"}>
                                                <span className="menu-expand" onClick={this.onHandleOpenMenu}><i className="ri-arrow-down-s-line"></i></span>
                                                <a href="javascript:void(0)" className="nav-link">
                                                    Solutions <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </a>
                                                <ul className="dropdown-menu" style={{ display: onMenuOpen == false ? "none" : "block" }}>
                                                    <li className={onOpenCorporates == false ? "nav-item" : "nav-item menu-open"}>
                                                        <span className="menu-expand" onClick={this.onHandleCorporatesOpen}><i className="ri-arrow-down-s-line"></i></span>
                                                        <a href="javascript:void(0)" className="nav-link">
                                                            Corporates / Financial Institutions <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                        </a>
                                                        <ul className="dropdown-menu ms-0" style={{ display: onOpenCorporates == false ? "none" : "block" }}>
                                                            <li className="nav-item">
                                                                <a href="/esg/reporting" className="nav-link">
                                                                    <div className="ct_drop_icon">
                                                                        <img src={ESG} />
                                                                    </div>
                                                                    GHG Scope 1,2,3 Calculations And ESG Reporting
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a href="/lifecycle" className="nav-link">
                                                                    <div className="ct_drop_icon">
                                                                        <img src={Lca_Icon} />
                                                                    </div>
                                                                    Life Cycle Assessment (LCA) & EPD
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a href="/api" className="nav-link">
                                                                    <div className="ct_drop_icon">
                                                                        <img src={API11} />
                                                                    </div>
                                                                    APIs For E-Commerce And Banks
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a href="/carbon/neutral" className="nav-link">
                                                                    <div className="ct_drop_icon">
                                                                        <img src={Carbon_Neutral} />
                                                                    </div>
                                                                    Carbon Neutral Events
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className={onOpenIndividuals == false ? "nav-item" : "nav-item menu-open"}>
                                                        <span className="menu-expand" onClick={this.onHandleIndividualsOpen}><i className="ri-arrow-down-s-line"></i></span>
                                                        <a href="javascript:void(0)" className="nav-link">
                                                            Individuals <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                        </a>
                                                        <ul className="dropdown-menu ms-0" style={{ display: onOpenIndividuals == false ? "none" : "block" }}>
                                                            <li className="nav-item">
                                                                <a href="/ekospark" className="nav-link">
                                                                    <div className="ct_drop_icon">
                                                                        <img src={Planet_Earth} />
                                                                    </div>
                                                                    EKO Spark
                                                                </a>
                                                            </li>
                                                            <li className="nav-item" onClick={this.onHandlePlantTree}>
                                                                <a className="nav-link">
                                                                    <div className="ct_drop_icon">
                                                                        <img src={Offset} />
                                                                    </div>
                                                                    Carbon Footprint Offsetting And Plant Trees
                                                                </a>
                                                            </li>
                                                            <li className="nav-item" onClick={this.onHandleGiftCard}>
                                                                <a className="nav-link">
                                                                    <div className="ct_drop_icon">
                                                                        <img src={Gift_Card} />
                                                                    </div>
                                                                    Climate positive Gift Cards
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="/project" className="nav-link">
                                                            Offseting Projects
                                                                </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className={onOpenResources == false ? "nav-item" : "nav-item menu-open"}>
                                                <span className="menu-expand" onClick={this.onClickResources}><i className="ri-arrow-down-s-line"></i></span>
                                                <a href="javascript:void(0)" className="nav-link">
                                                    Company
                                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </a>
                                                <ul className="dropdown-menu" style={{ display: onOpenResources == false ? "none" : "block" }}>
                                                    <li className="nav-item">
                                                        <a href="/about" className="nav-link">
                                                            About Us
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="/our/approach" className="nav-link">Our approach to offsetting</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className={onOpenResources == false ? "nav-item" : "nav-item menu-open"}>
                                                <span className="menu-expand" onClick={this.onClickResources1}><i className="ri-arrow-down-s-line"></i></span>
                                                <a href="javascript:void(0)" className="nav-link">
                                                    Resources
                                                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                                                </a>
                                                <ul className="dropdown-menu" style={{ display: onOpenResources1 == false ? "none" : "block" }}>
                                                    <li className="nav-item">
                                                        <a href="/redeem/gift" className="nav-link">
                                                            How to Redeem Gifts
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="/faq" className="nav-link">FAQ</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/contact" className="nav-link">Contact Us</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="javascript:void(0)" onClick={this.onHandleSideBar} className="nav-link btn style2 ct_request_demo_btn" data-bs-toggle="modal" data-bs-target="#ct_book_demo">Request a demo</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <div className="mobile-bar-wrap">
                                    <div className="mobile-menu d-lg-none">
                                        <a href="javascript:void(0)" onClick={this.onHandleSideBar}><i className="ri-menu-line"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="breadcrumb-wrap bg-f ct_project_bg1">
                        < div className="container" >
                            <div className="breadcrumb-title">
                                <h2>Climate Projects</h2>
                                <ul className="breadcrumb-menu list-style"><li><a href="/">Home </a></li><li>Climate Projects</li></ul>
                            </div>
                        </div>
                    </div>
                    <section className="project-wrap ptb-30 bg-sand">
                        <div className="container">
                            <div className="mt-5 ct_box_shadow">
                                <div className="section-title style3 text-center">
                                    <h4 className="text-center ct_sub_heading">PROJECT</h4>
                                    <p className="ct_remove_br">
                                        Ekobon handpicks climate projects that deliver measurable
                                        benefits aligned to the goals of the Paris Agreement with
                                        emphasis on community development<br />
                                        All Ekobon projects contribute to the achievement of the
                                        Sustainable Development Goals (SDG) set up by the United Nations
                                    </p>
                                </div>
                                <div className="row pt-5">
                                    <div className="col-lg-12">
                                        <div>
                                            <figure className="text-center">
                                                <img
                                                    src={Climate_Goals}
                                                    alt="climate_image"
                                                    className="img-fluid"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <p className="cti_support_text">
                                    Projects selected go through rigorous internal process to ensure
                                    highest quality and have been certified by the best industry
                                    verification standards
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="project-wrap  my-5">
                        <div className="container">
                            <div className="section-title style3 text-center">
                            </div>
                            <div className="mt-5 ct_box_shadow">
                                <div className="section-title style3 text-center">
                                    <h4 className="text-uppercase">Standards we support</h4>

                                </div>
                                <div className="row pt-4">
                                    <div className="col-sm-12 col-lg-4">
                                        <figure className="cti_standard__img">
                                            <img
                                                src={ClimateGoldicon}
                                                alt="climate_1"
                                                className="img-fluid"
                                            />
                                        </figure>
                                    </div>
                                    <div className="col-sm-12 col-lg-4">
                                        <figure className="cti_standard__img">
                                            <img
                                                src={ClimateIcon}
                                                alt="climate_2"
                                                className="img-fluid"
                                            />
                                        </figure>
                                    </div>
                                    <div className="col-sm-12 col-lg-4">
                                        <figure className="cti_standard__img">
                                            <img
                                                src={ClimateIconNew}
                                                alt="climate_3"
                                                className="img-fluid"
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container">
                        {
                            <>
                                {Object.keys(climateProjectList).map((item: any) => {
                                    return (
                                        <div className="Carousel_Main  Carousel_Project_Main">
                                            <ClimateProjectMiddleCarousel
                                                dataList={climateProjectList[item].data}
                                                isUserLoggedIn={true}
                                                heading={item}
                                            />
                                        </div>
                                    );
                                })}
                            </>
                        }
                    </div>
                    {/* <section className="project-wrap  mb-5 pt-3">
                        <div className="container">
                            <div className="section-title style3 text-center">
                            </div>
                            <div className="mt-0">
                                <div className="section-title style3 pb-3">
                                    <h4 className="text-aarif">Renewable</h4>
                                </div>
                                <div className="container cti_image_text">
                                    <div className="row gy-4">
                                        <div className="col-lg-4">
                                            <div className="card cti_cutome_card">
                                                <img
                                                    className="img-fluid"
                                                    src={ClimateProject}
                                                    alt="Card image cap"
                                                />
                                                <div className="middle">
                                                    <a href="#" className="btn style2 ct_newsltr_btn text"
                                                    >Project Details</a
                                                    >
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title cti_card_title">
                                                        22.5 MW Wind Power Project
                      </h5>
                                                    <div className="cti_card_title_1">
                                                        <span className="d-flex align-items-center gap-2"
                                                        ><i className="fa-solid fa-location-dot"></i>
                                                            <p className="m-0">Rajasthan, India</p></span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card cti_cutome_card">
                                                <img
                                                    className="img-fluid"
                                                    src={ClimateProject9}
                                                    alt="Card image cap"
                                                />
                                                <div className="middle">
                                                    <a href="#" className="btn style2 ct_newsltr_btn text"
                                                    >Project Details</a
                                                    >
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title cti_card_title">
                                                        100.5 MW Wind Power Project
                      </h5>
                                                    <div className="cti_card_title_1">
                                                        <span className="d-flex align-items-center gap-2"
                                                        ><i className="fa-solid fa-location-dot"></i>
                                                            <p className="m-0">Madhya Pradesh, India</p></span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card cti_cutome_card">
                                                <img
                                                    className="img-fluid"
                                                    src={project13}
                                                    alt="Card image cap"
                                                />
                                                <div className="middle">
                                                    <a href="#" className="btn style2 ct_newsltr_btn text"
                                                    >Project Details</a
                                                    >
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title cti_card_title">
                                                        400 MW Solar Power Project at Bhadla
                                                    </h5>
                                                    <div className="cti_card_title_1">
                                                        <span className="d-flex align-items-center gap-2"
                                                        ><i className="fa-solid fa-location-dot"></i>
                                                            <p className="m-0">Uttar Pradesh, India</p></span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* <section className="project-wrap  my-5">
                        <div className="container">
                            <div className="section-title style3 text-center">
                            </div>
                            <div className="mt-5">
                                <div className="section-title style3 pb-3">
                                    <h4 className="text-aarif">Energy Efficiency</h4>
                                </div>
                                <div className="container cti_image_text">
                                    <div className="row gy-4">
                                        <div className="col-lg-4">
                                            <div className="card cti_cutome_card">
                                                <img
                                                    className="img-fluid"
                                                    src={project12}
                                                    alt="Card image cap"
                                                />
                                                <div className="middle">
                                                    <a href="#" className="btn style2 ct_newsltr_btn text"
                                                    >Project Details</a
                                                    >
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title cti_card_title">
                                                        20 MW Biomass Power Project
                                                   </h5>
                                                    <div className="cti_card_title_1">
                                                        <span className="d-flex align-items-center gap-2"
                                                        ><i className="fa-solid fa-location-dot"></i>
                                                            <p className="m-0">Rajasthan, India</p></span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card cti_cutome_card">
                                                <img
                                                    className="img-fluid"
                                                    src={project08}
                                                    alt="Card image cap"
                                                />
                                                <div className="middle">
                                                    <a href="#" className="btn style2 ct_newsltr_btn text"
                                                    >Project Details</a
                                                    >
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title cti_card_title">
                                                        Agriwaste Biogas Project at APMC
                      </h5>
                                                    <div className="cti_card_title_1">
                                                        <span className="d-flex align-items-center gap-2"
                                                        ><i className="fa-solid fa-location-dot"></i>
                                                            <p className="m-0">Vadodara, Gujarat</p></span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="project-wrap  my-5">
                        <div className="container">
                            <div className="section-title style3 text-center">
                            </div>
                            <div className="mt-5">
                                <div className="section-title style3 pb-3">
                                    <h4 className="text-aarif">Community projects</h4>
                                </div>
                                <div className="container cti_image_text">
                                    <div className="row gy-4">
                                        <div className="col-lg-4">
                                            <div className="card cti_cutome_card">
                                                <img
                                                    className="img-fluid"
                                                    src={project11}
                                                    alt="Card image cap"
                                                />
                                                <div className="middle">
                                                    <a href="#" className="btn style2 ct_newsltr_btn text"
                                                    >Project Details</a
                                                    >
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title cti_card_title">
                                                        20 MW Biomass Power Project
                                                        </h5>
                                                    <div className="cti_card_title_1">
                                                        <span className="d-flex align-items-center gap-2"
                                                        ><i className="fa-solid fa-location-dot"></i>
                                                            <p className="m-0">Rajasthan, India</p></span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* <section className="project-wrap my-5">
                        <div className="container">
                            <div className="section-title style3 text-center">
                            </div>
                            <div className="mt-5">
                                <div className="section-title style3 pb-3">
                                    <h4 className="text-aarif">Plant based solutions</h4>
                                </div>
                                <div className="container cti_image_text">
                                    <div className="row gy-4">
                                        <div className="col-lg-4">
                                            <div className="card cti_cutome_card">
                                                <img
                                                    className="img-fluid"
                                                    src={project10}
                                                    alt="Card image cap"
                                                />
                                                <div className="middle">
                                                    <a href="#" className="btn style2 ct_newsltr_btn text"
                                                    >Project Details</a
                                                    >
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title cti_card_title">
                                                        20 MW Biomass Power Project
                      </h5>
                                                    <div className="cti_card_title_1">
                                                        <span className="d-flex align-items-center gap-2"
                                                        ><i className="fa-solid fa-location-dot"></i>
                                                            <p className="m-0">Rajasthan, India</p></span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <section className="ct_nwsletr_bg1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="ct_newletter_bg section-title">
                                        <h2>Invest in Climate Project</h2>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn style2 mt-4  mr-2"

                                            onClick={() => {
                                                if (loginFlag === "Individual") {
                                                    this?.props?.history.push({
                                                        pathname: "/individual/dashboard",
                                                        state: "Individual"
                                                    })
                                                }
                                                else {
                                                    this?.props?.history.push({
                                                        pathname: "/login",
                                                        state: "Individual"
                                                    })
                                                }
                                            }}
                                        >For Individuals</a
                                        >
                                        <a
                                            href="javascript:void(0)"
                                            className="btn style2 mt-4  ml-2"

                                            onClick={() => {
                                                if (loginFlag === "Bussiness") {
                                                    this?.props?.history.push({
                                                        pathname: "/business/dashboard",
                                                        state: "Business"
                                                    })
                                                }
                                                else {
                                                    this?.props?.history.push({
                                                        pathname: "/login",
                                                        state: "Bussiness"
                                                    })
                                                }

                                            }}
                                        >For Businesses</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div>
                        <a onClick={this.toTopFunction} className={isScroll == true ? 'back-to-top open' : ''}><i className="ri-arrow-up-s-line"></i></a>
                    </div>
                    <div className="modal fade" id="ct_book_demo" aria-labelledby="ct_book_demoLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">
                                <div className="modal-header border-0 py-0">
                                    <button type="button" className="btn-close ct_custome_close" data-bs-dismiss="modal" aria-label="Close">X</button>
                                </div>
                                <div className="modal-body">
                                    <div className="ct_book_a_demo_main ct_get_quote_form px-4 py-2 pt-4 ">
                                        <h3 className="text-center">Request a demo</h3>
                                        <p className="text-center">Ekobon platform enables businesses to calculate their emissions and decarbonise their operations and value chain.</p>
                                        <form action="" className="mt-4">
                                            <p className="text-start">Please fill this form to determine your exact needs, and we will reach out to you soon</p>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group mb-4">
                                                        <input type="text" name="name" value={full_name} onChange={(e) => this.setState({ full_name: e.target.value })} required />
                                                        <span className="highlight"></span>
                                                        <span className="bar"></span>
                                                        <label>Full name*</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group mb-4">
                                                        <input type="number" name="name" value={contact_number} onChange={(e) => this.setState({ contact_number: e.target.value })} required />
                                                        <span className="highlight"></span>
                                                        <span className="bar"></span>
                                                        <label>Phone*</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group mb-4">
                                                        <input type="email" name="name" value={user_email} onChange={(e) => this.setState({ user_email: e.target.value })} required />
                                                        <span className="highlight"></span>
                                                        <span className="bar"></span>
                                                        <label>Email*</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group mb-4">
                                                        <input type="text" name="name" value={company} onChange={(e) => this.setState({ company: e.target.value })} required />
                                                        <span className="highlight"></span>
                                                        <span className="bar"></span>
                                                        <label>Company*</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group mb-4">
                                                        <p className="text-start mb-1">How can Ekobon help you?</p>
                                                        <select className="form-control ct_select_option1" value={ekobon_help_you} onChange={(e) => this.setState({ ekobon_help_you: e.target.value })}>
                                                            <option value="Select option">Select option</option>
                                                            <option value="Scope 1-3 carbon emissions">Scope 1-3 carbon emissions</option>
                                                            <option value="Setting net-zero targets and decarbonise value chain">Setting net-zero targets and decarbonise value chain</option>
                                                            <option value="Carbon offseting via carbon credits purchase">Carbon offseting via carbon credits purchase</option>
                                                            <option value="ESG Reporting (BRSR, GRI etc)">ESG Reporting (BRSR, GRI etc)</option>
                                                            <option value="Product carbon-footprint / Lifecycle analysis">Product carbon-footprint / Lifecycle analysis</option>
                                                            <option value="Plug-in APIs for e-commerce, travel & banking">Plug-in APIs for e-commerce, travel & banking</option>
                                                            <option value="CBAM">CBAM</option>
                                                            <option value="LCA & EPD">LCA & EPD</option>
                                                            <option value="Financed Emissions / Climate risk reporting ">Financed Emissions / Climate risk reporting </option>
                                                            <option value="Ecovadis">Ecovadis</option>
                                                            <option value="Others">Others</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <textarea name="" value={message} onChange={(e) => this.setState({ message: e.target.value })} required></textarea>
                                                        <span className="highlight"></span>
                                                        <span className="bar"></span>
                                                        <label htmlFor="email">Message</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className=" recaptcha mb-2" id="g-recaptcha1"></div>
                                                <span className="text-dark mt-2">By submitting this form, I consent to the processing of my data by Ekobon, to being contacted, and to receiving relevant marketing communications.</span>
                                            </div>
                                            <div className="text-center">
                                                <button className="btn style2 mt-3" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => this.onHandleSubmitRequestApi(e)} >Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer-wrap">
                        <div className="footer-top">
                            <img
                                src={Footer_Shape_3}
                                alt="Image"
                                className="footer-shape-four moveHorizontal"
                            />
                            <div className="container">
                                <div className="row pt-100 pb-75">
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 pe-xl-5">
                                        <div className="footer-widget">
                                            <a href="/" className="footer-logo">
                                                <img src={White_Logo} alt="Image" />
                                            </a>
                                            <p className="comp-desc mt-2 text-start">
                                                Ekobon is a simple and effective way facilitate climate
                                                action.
                                            </p>
                                            <div className="">
                                                <a onClick={() => {
                                                    if (loginFlag === "Individual") {
                                                        this?.props?.history.push({
                                                            pathname: "/individual/dashboard",
                                                            state: "Individual"
                                                        })
                                                    }
                                                    else {
                                                        this?.props?.history.push({
                                                            pathname: "/login",
                                                            state: "Individual"
                                                        })
                                                    }
                                                }}>
                                                    <button type="button" className="btn style2">
                                                        Get Started
                                                        </button>
                                                    <i className="bi bi-arrow-down-short"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                        <div className="footer-widget">
                                            <h3 className="footer-widget-title">Other Pages</h3>
                                            <ul className="footer-menu list-style">
                                                <li>
                                                    <a href="/about"> About Us </a>
                                                </li>
                                                <li>
                                                    <a href="/project"> Projects </a>
                                                </li>
                                                <li>
                                                    <a href="/faq"> FAQs </a>
                                                </li>
                                                <li>
                                                    <a href="/contact"> Contact Us </a>
                                                </li>

                                                <li onClick={this.onHandleTermCondition}>
                                                    <a>
                                                        Terms & Conditions
                                                </a>
                                                </li>
                                                <li onClick={this.onHandlePrivacyPolicy}>
                                                    <a>
                                                        Privacy Policy
                                                </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ps-md-5">
                                        <div className="footer-widget">
                                            <h3 className="footer-widget-title">Official Info</h3>
                                            <ul className="contact-info list-style">
                                                <li>
                                                    <i className="flaticon-pin"></i>
                                                    <h6>Location</h6>
                                                    <p className="text-start">
                                                        208 Morya Centre, 16 Race Course Road, Indore (MP)-452003
                                                    </p>
                                                </li>
                                                <li>
                                                    <i className="flaticon-mail"></i>
                                                    <h6>Email</h6>
                                                    <a href="mailto:contactus@ekobon.com"
                                                    ><span className="__cf_email__"
                                                    >contactus@ekobon.com</span
                                                        ></a
                                                    >
                                                </li>
                                                <li>
                                                    <i className="flaticon-phone-call"></i>
                                                    <h6>Phone</h6>
                                                    <a href="tel:+919993023823">+91 9993023823</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-8 col-md-6 col-sm-7">
                                        <p className="copyright-text text-sm-start">
                                            <i className="ri-copyright-line"></i> Ekobon. All Rights Reserved
                  2023
                </p>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-5">
                                        <ul className="social-profile style1 list-style">
                                            <li>
                                                <a
                                                    target="_blank"
                                                    href="https://www.facebook.com/Ekobon-101865165892125/"
                                                >
                                                    <i className="ri-facebook-fill"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    target="_blank"
                                                    href="https://twitter.com/ekobon_green?t=9W_3NYvKFEUChTbypbbIPA&s=08"
                                                >
                                                    <i className="ri-twitter-fill"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    target="_blank"
                                                    href="https://instagram.com/ekobon_green?igshid=YmMyMTA2M2Y="
                                                >
                                                    <i className="ri-instagram-line"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    target="_blank"
                                                    href="https://www.linkedin.com/company/ekobon/"
                                                >
                                                    <i className="ri-linkedin-fill"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div >
        )
    }
}
