import React from "react"
import Pro1Controller, {
    Props,
} from "./Esg_ReportingController"
import Esg_ReportingController from "./Esg_ReportingController"
import {
    LOGO, White_Logo, Offset, Planet_Earth, Gift_Card, ESG, API11, Carbon_Neutral,
    Footer_Shape_3, Bank, Mutual_Fund, Analyse_Dashboard, Report_Meet_Dashboard, Globel_Partner_1, Lca_Icon,
    Globel_Partner_2, Globel_Partner_3, Globel_Partner_4, Globel_Partner_5, Globel_Partner_6, Measure_Dashboard
} from '../assets';

export default class Esg_Reporting extends Esg_ReportingController {
    constructor(props: Props) {
        super(props)
    }

    render() {
        const {
            isSideBarClick,
            onOpenResources1,
            isScroll,
            isDarkMode,
            onMenuOpen,
            onOpenIndividuals,
            onOpenCorporates,
            onOpenResources,
            loginFlag,
            firstName,
            lastName,
            emailAddress,
            messages,
            phone_number,
            full_name,
            contact_number,
            user_email,
            company,
            ekobon_help_you,
            message,
        } = this.state;
        return (
            <div className={isDarkMode == true ? 'theme-dark' : 'theme-light'}>
                {/* Theme Switcher Start  */}
                <div className="switch-theme-mode ct_mob_light_mode">
                    <label id="switch" className="switch">
                        <input type="checkbox" checked={isDarkMode == true ? true : false} onChange={this.handleSwithmode} id="slider" />
                        <span className="slider round"></span>
                    </label>
                </div>
                {/* Theme Switcher End  */}
                {/* Page Wrapper End  */}
                <div className="page-wrapper" onScroll={this.handleScroll}>
                    {/* Header Section Start  */}
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
                    {/* < Header Section End  */}
                    {/* Content Wrapper Start  */}
                    <div className="content-wrapper">
                        <section className="ct_accelerate_bg ptb-100" >
                            <div className="container">
                                <div className="row align-items-center ct_mob_reverse_row">
                                    <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <div className="ct_dash_esg_cnt section-title ">
                                            <h2 className="mb-3">	Accelerate your journey to <br /> <span className="ct_clr_text">carbon neutrality</span>
                                            </h2>
                                            <p className="text-start">Ekobon powered EKO TRACE is an AI-powered sustainability assessment and reporting tool that allows companies to comprehensively measure, reduce and report on their carbon emissions. It is a cloud-based platform that uses data analytics to evaluate a company’s energy consumption, water usage, and waste.
                            </p>

                                            <ul className="ct_srvc_point pt-4">
                                                <li>
                                                    <img src={Bank} />
                                                    <div>
                                                        <h4>For Companies</h4>
                                                        <p className="text-start">
                                                            Accurate emissions measurement and ESG results visualised through dashboards and reports based on updated methodology (ISO and GRI standards).
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src={Mutual_Fund} />
                                                    <div>
                                                        <h4>For Investment Funds
                                        </h4>
                                                        <p className="text-start">
                                                            Analyse the existing investment portfolio of companies on different ESG metrices, create mandatory reports and proactively manage the impact of your investments.
                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img src={Bank} />
                                                    <div>
                                                        <h4>For Banks</h4>
                                                        <p className="text-start">
                                                            Calculate financed emissions for your investment portfolio as per the PCAF framework.
                                                            Set net-zero targets aligned with SBTi and maximise the ESG performance of your portfolio
                                                            
                                    </p>
                                                    </div>
                                                </li>
                                            </ul>

                                        </div>

                                    </div>
                                    <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <div className="ct_dash_esgimg">
                                            <img src={Analyse_Dashboard} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>


                        <section className="ptb-100">
                            <div className="container">
                                <div className="row align-items-center ct_bg_1">
                                    <div className="col-md-6 pe-md-0" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <div className="ct_scroll_fixed_img">
                                            <img src={Measure_Dashboard} />
                                        </div>
                                    </div>
                                    <div className="col-md-6" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <div className="ct_scroll_fixed_cnt" >
                                            <div className="ct_round_num">
                                                <p>01</p>
                                            </div>
                                            <h2>Measure</h2>
                                            <p className="text-start">
                                                Measure emissions precisely using our tailor-made carbon accounting
                            </p>
                                            <ul>
                                                <li>Measure Scope 1, 2, and 3 emissions according to GHG protocol</li>
                                                <li>Fully automated emission calculations</li>
                                                <li>Customised data entry templates as per company’s profile requiring no specialised knowledge to complete it</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center ct_mob_reverse_row mt-5">
                                    <div className="col-md-6  pe-md-0" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200" >
                                        <div className="ct_scroll_fixed_cnt">
                                            <div className="ct_round_num">
                                                <p>02</p>
                                            </div>
                                            <h2>Analyse</h2>
                                            <p className="text-start">
                                                Access the results of calculations anytime and receive detailed reports in one click
                            </p>
                                            <ul>
                                                <li>Interactive dashboard to visualise the emissions profile</li>
                                                <li>Verifiable calculation methodologies that follow the latest global standard </li>
                                                <li>Granular and customised data reports to empower climate decision makers</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6  ps-md-0" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <div className="ct_scroll_fixed_img">
                                            <img src={Analyse_Dashboard} />
                                        </div>
                                    </div>


                                </div>
                                <div className="row align-items-center mt-5">
                                    <div className="col-md-6  pe-md-0" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <div className="ct_scroll_fixed_img">
                                            <img src={Report_Meet_Dashboard} />
                                        </div>
                                    </div>
                                    <div className="col-md-6  ps-md-0" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <div className="ct_scroll_fixed_cnt">
                                            <div className="ct_round_num">
                                                <p>03</p>
                                            </div>
                                            <h2>Report and meet other environmental objectives</h2>
                                            <ul>
                                                <li>
                                                    Generate various climate reports (including BRSR, GRI, CDP)
                                </li>
                                                <li>
                                                    Record avoided and prevented emissions.
                                </li>
                                                <li>
                                                    Set sustainable goals
                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </section>




                        <section className="ptb-100 ct_green_background" data-aos="fade-up" data-aos-duration="1200"
                            data-aos-delay="200">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="ct_head_h1 section-title " >

                                            <h2 className="text-white">
                                                Aligned with global standards
                                </h2>
                                            <p className="text-white">Make compliance simple by utilising built-in alignment with global reporting standards and frameworks.</p>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </section>
                        <div className="ct_globel_logo_bg" data-aos="fade-up" data-aos-duration="1200"
                            data-aos-delay="200" >
                            <div className="container">
                                <div className="ct_globel_partner_bg">
                                    <div className="row">
                                        <div className="col-md-12 mx-auto">
                                            <div className="row">
                                                <div className="col-md-4 col-sm-6 ">
                                                    <div className="ct_globel_logo_img  mb-4">
                                                        <img src={Globel_Partner_1} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4  col-sm-6">
                                                    <div className="ct_globel_logo_img  mb-4">
                                                        <img src={Globel_Partner_2} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4  col-sm-6 ">
                                                    <div className="ct_globel_logo_img  mb-4">
                                                        <img src={Globel_Partner_3} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4  col-sm-6 ">
                                                    <div className="ct_globel_logo_img  mb-4">
                                                        <img src={Globel_Partner_4} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4  col-sm-6 ">
                                                    <div className="ct_globel_logo_img  mb-4">
                                                        <img src={Globel_Partner_5} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4  col-sm-6 ">
                                                    <div className="ct_globel_logo_img mb-4">
                                                        <img src={Globel_Partner_6} />
                                                    </div>
                                                </div>


                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <section className="ct_nwsletr_bg1" data-aos="fade-up" data-aos-duration="1200"
                            data-aos-delay="200">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="ct_newletter_bg section-title ">
                                            <h2>Start using Ekobon</h2>
                                            <p>
                                                Measure your emissions across all scopes and make your business carbon neutral. Get in touch with our team
                                </p>
                                            <a className="btn style2 mt-4 ct_shake_btn" data-bs-toggle="modal" data-bs-target="#ct_book_demo">Request a demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* <div className="modal fade" id="ct_book_demo" aria-labelledby="ct_book_demoLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-md">
                            <div className="modal-content">
                                <div className="modal-header border-0 py-0">
                                    <button type="button" className="btn-close ct_custome_close" data-bs-dismiss="modal" aria-label="Close">X</button>
                                </div>
                                <div className="modal-body">
                                    <div className="ct_book_a_demo_main ct_get_quote_form px-4 py-2 pt-4 ">
                                        <h3 className="text-center">Book a demo</h3>
                                        <p className="text-center">A comprehensive platform to measure, reduce and report carbon emissions</p>
                                        <form action="" className="mt-4">
                                            <div className="form-group mb-4">
                                                <input type="text" name="name" value={firstName} onChange={(e) => this.setState({ firstName: e.target.value })} required />
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>First Name</label>
                                            </div>
                                            <div className="form-group mb-4">
                                                <input type="text" name="name" value={lastName} onChange={(e) => this.setState({ lastName: e.target.value })} required />
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>Last Name</label>
                                            </div>
                                            <div className="form-group mb-4">
                                                <input type="text" name="name" value={emailAddress} onChange={(e) => this.setState({ emailAddress: e.target.value })} required />
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>Email Address</label>
                                            </div>
                                            <div className="form-group mb-4">
                                                <input type="text" name="name" value={phone_number} onChange={(e) => this.setState({ phone_number: e.target.value })} required />
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>Number</label>
                                            </div>
                                            <div className="form-group">
                                                <textarea name="" id="" value={messages} onChange={(e) => this.setState({ messages: e.target.value })} required></textarea>
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label htmlFor="email">Message</label>
                                            </div>

                                            <div className="text-center">
                                                <button className="btn style2 mt-3" data-bs-dismiss="modal" aria-label="Close" onClick={this.onHandleSubmitDetail}>Book a demo</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

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
                    <div>


                        <a onClick={this.toTopFunction} className={isScroll == true ? 'back-to-top open' : ''}><i className="ri-arrow-up-s-line"></i></a>
                    </div>
                    {/* Footer Section Start  */}
                    <footer className="footer-wrap">
                        <div className="footer-top">

                            <img src={Footer_Shape_3} className="footer-shape-four moveHorizontal" />
                            <div className="container">
                                <div className="row pt-100 pb-75">
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 pe-xl-5">
                                        <div className="footer-widget">
                                            <a href="/" className="footer-logo">
                                                <img src={White_Logo} />
                                            </a>
                                            <p className="comp-desc mt-2 text-start">
                                                Ekobon is a simple and effective way facilitate climate action.
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
                                                }}> <button type="button" className="btn style2">Get Started</button></a>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
                                        <div className="footer-widget">
                                            <h3 className="footer-widget-title">Other Pages</h3>
                                            <ul className="footer-menu list-style">
                                                <li>
                                                    <a href="/about">
                                                        About Us
                                        </a>
                                                </li>
                                                <li>
                                                    <a href="/project">
                                                        Projects
                                        </a>
                                                </li>
                                                <li>
                                                    <a href="/faq">
                                                        FAQs
                                        </a>
                                                </li>
                                                <li>
                                                    <a href="/contact">
                                                        Contact Us
                                        </a>
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
                                                    <p className="text-start">208 Morya Centre, 16 Race Course Road, Indore (MP)-452003</p>
                                                </li>
                                                <li>
                                                    <i className="flaticon-mail"></i>
                                                    <h6>Email</h6>
                                                    <a href="mailto:contactus@ekobon.com"><span className="__cf_email__"
                                                    >contactus@ekobon.com</span></a>
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
                                        <p className="copyright-text text-sm-start" ><i className="ri-copyright-line"></i> Ekobon. All Rights
                                Reserved 2023</p>
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
                    {/* Footer Section End */}

                </div>
                {/* Page Wrapper End  */}
            </div>
        )
    }
}


