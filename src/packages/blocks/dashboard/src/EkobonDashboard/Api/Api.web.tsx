import React from "react"
import ApiController from "./ApiController.web"
import {
    LOGO, White_Logo, Planet_Earth, Offset, Gift_Card, API11,
    ESG, Carbon_Neutral, Bank, Laptop_Dash, Mutual_Fund, Offset_Dashboard, Calculate_Png, Lca_Icon,
    Track_Order_Dashboard, Eko_Travel, Footer_Shape_3
} from '../assets';
export default class Api extends ApiController {
    render() {
        const {
            isSideBarClick,
            isScroll,
            isDarkMode,
            onMenuOpen,
            onOpenResources1,
            onOpenIndividuals,
            onOpenCorporates,
            onOpenResources,
            loginFlag,
            full_name,
            contact_number,
            user_email,
            company,
            ekobon_help_you,
            message,
        } = this.state;
        return (
            <div className={isDarkMode == true ? 'theme-dark' : 'theme-light'}>
                {/* Theme Switcher Start */}
                <div className="switch-theme-mode ct_mob_light_mode">
                    <label id="switch" className="switch">
                        <input type="checkbox" checked={isDarkMode == true ? true : false} onChange={this.handleSwithmode} id="slider" />                        <span className="slider round"></span>
                    </label>
                </div>
                {/* Theme Switcher End */}

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
                    {/* Header Section End  */}


                    {/* Content Wrapper Start */}
                    <div className="content-wrapper">
                        {/* for Bank section S  */}
                        <section className=" ptb-100 pt-0" >
                            <div className="text-center ct_bank_bg ct_svg_head d-block" data-aos="fade-up" data-aos-duration="1200"
                                data-aos-delay="200">
                                <h1 className="ct_bigger_head mb-0 ">For Banks</h1>
                                {/* <p className="mt-3">
                                    Calculate financed emissions for your investment portfolio as per the PCAF framework. <br /> Set net-zero targets aligned with SBTi and maximise the ESG performance of your portfolio
                                </p> */}
                            </div>
                            <div className="container" data-aos="fade-up" data-aos-duration="1200"
                                data-aos-delay="200">

                                <div className="ct_dash_esg_cnt section-title mt-5">
                                    <div className="text-center mb-5 ct_dark_mode_head">
                                        <h2 className="mb-3">Transaction based Carbon footprint calculator
                                        </h2>
                                        <p>Calculates carbon footprint of every payment transaction. Banks can seamlessly integrate My Ekobon Action <br /> on top of their products and services application to suit their brand and user experience
                                        </p>
                                    </div>
                                </div>
                                <div className="row align-items-center ct_mob_reverse_row">

                                    <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <h4 className="mt-4 ct_font_600 ct_bordr_left">
                                            My Ekobon Action  is based on a scientific data model that is country-specific and refines it using user input on unique lifestyle decisions that can  be integrated by banks into their current user interfaces as a turnkey offering
                                        </h4>
                                        <ul className="ct_srvc_point pt-4 ct_dark_srvc_point">
                                            <li>
                                                <img src={Bank} />
                                                <div>
                                                    <h4>INSPIRE </h4>
                                                    <p className="text-start">
                                                        Calculate the carbon footprint of every purchase transaction your customer makes. Help them understand the climate impact of their lifestyles to inspire action.
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <img src={Mutual_Fund} />
                                                <div>
                                                    <h4>ENGAGE
                                                    </h4>
                                                    <p className="text-start">
                                                        Help your customers make more sustainable lifestyle choices through personalised smart tips to cut their CO2 emissions
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <img src={Bank} />
                                                <div>
                                                    <h4>COMPENSATE</h4>
                                                    <p className="text-start">
                                                        Enable your customers to compensate for the CO2 emissions of each purchase and further reduce their carbon footprint.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <div className="ct_dash_esgimg">
                                            <img src={Laptop_Dash} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* how it works section S */}
                    <section className="ptb-100 ct_how_works_bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12" data-aos="fade-up" data-aos-duration="1200"
                                    data-aos-delay="200">
                                    <div className="text-center mb-4  section-title">
                                        <h2 className="mb-3">How <span className="ct_clr_green_text">My Ekobon Action</span>  works

                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <p className="text-center">Calculates carbon footprint of every payment transaction. Banks can seamlessly integrate My Ekobon Action on top of their products <br /> and services application to suit their brand and user experience
                                </p>
                            </div>
                            <div className="col-md-12" data-aos="fade-up" data-aos-duration="1200"
                                data-aos-delay="200">
                                <div className="ct_bg_grey_1">
                                    <div className="row">
                                        <div className="col-lg-4 mb-4">
                                            <div>
                                                <div className="ct_box_light_bg ct_light_blue_bg">
                                                    <h4 className="ct_md_btn">Transaction Data</h4>

                                                    <div className="ct_shape_box">
                                                        <p>Input</p>
                                                        <p>Card transactions</p>
                                                        <p >Account transactions</p>
                                                        <p>Open banking transactions</p>
                                                    </div>
                                                    <div className="ct_right_arrow">
                                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-4">
                                            <div className="ct_box_light_bg ct_light_green_bg">
                                                <h4 className="ct_md_btn">Data mapping and computation logic</h4>
                                                <div className="ct_shape_box">
                                                    <p>Output API</p>
                                                    <p>Data input API</p>
                                                    <p>Personal input API</p>
                                                    <p>Calculation based on merchant</p>
                                                    <p >Calculation based on product category</p>
                                                    <p>Calculation based on merchant category</p>
                                                </div>
                                                <div className="ct_right_arrow">
                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-4">
                                            <div className="ct_box_light_bg ct_light_pink_bg  ">
                                                <h4 className="ct_md_btn"> Information about the individual user</h4>
                                                <div className="ct_shape_box">
                                                    <p>Carbon footprint databases</p>
                                                    <p>Diet</p>
                                                    <p >Transportation</p>
                                                    <p>Lifestyle</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* for E-commerce section Start  */}
                    <section className=" ptb-100 pt-0" >
                        <div className="text-center ct_bank_bg ct_svg_head d-block" >
                            <h1 className="ct_bigger_head mb-0">For E-commerce</h1>
                            <p className="mt-3">EkoKart is designed as a plug-in software application that integrates into existing eCommerce stores, by giving individuals the opportunity to <br /> balance the carbon footprint of their online transactions from within the checkout funnel. We then pool these micro-contributions into a fund,<br /> and invest directly in climate projects to offset global CO2 emissions</p>
                        </div>
                        <div className="container ct_overflow_hidden">
                            <div className="row align-items-center ">
                                <div className="col-md-6 " data-aos="fade-up" data-aos-duration="1200"
                                    data-aos-delay="200">
                                    <div className="ct_scrollsection__img">
                                        <div
                                            className="ct_scrollsection__img__inner">
                                            <img src={Calculate_Png} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6" data-aos="fade-up" data-aos-duration="1200"
                                    data-aos-delay="200">
                                    <div className="ct_scrollsection__body">
                                        <div className="ct_scrollsection__text ">
                                            <div>
                                                <h4 className="mb-3 "><span>Calculate the carbon emissions of each order </span>
                                                </h4>
                                                <p className="text-start">EcoKart’s proprietary algorithm estimates each unique order’s carbon footprint in real-time by looking at variables like shipping distance, package weight, and product type.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ct_ecom_titl_bg py-5">
                            <div className="container">
                                <div className="row align-items-center ct_mob_reverse_row aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">

                                    <div className="col-md-6">
                                        <div className="ct_scrollsection__body">
                                            <div className="ct_scrollsection__text">
                                                <div>
                                                    <h4 className="mb-3">Carbon neutral checkout
                                        </h4>
                                                    <p className="text-start">Offset the carbon footprint of any purchase, in one-click checkout.
                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="ct_scrollsection__img">
                                            <div className="ct_scrollsection__img__inner">
                                                <img src={Offset_Dashboard} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row align-items-center py-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                                <div className="col-md-6">
                                    <div className="ct_scrollsection__img">
                                        <div className="ct_scrollsection__img__inner">
                                            <img src={Track_Order_Dashboard} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="ct_scrollsection__body">
                                        <div className="ct_scrollsection__text">
                                            <div>
                                                <h4 className="mb-3">Track orders and conversion ratio
                                    </h4>
                                                <p className="text-start">Partner organisations can track the offset history, purchase amount for which offset is done and analyse the API calls on their admin dashboard.
                                    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="ct_ecom_titl_bg py-5">
                    <div className="row">
                        

                    </div>
                        <div className="col-md-6">
                            <div className="ct_scrollsection__img">
                                <div className="ct_scrollsection__img__inner">
                                    <img src={Offset_Dashboard} />
                                </div>
                            </div>
                            <div className="container">
                                <div className="row align-items-center py-5 " data-aos="fade-up" data-aos-duration="1200"
                                    data-aos-delay="200">
                                    <div className="col-md-6">
                                        <div className="ct_scrollsection__img">
                                            <div
                                                className="ct_scrollsection__img__inner">
                                                <img src={Track_Order_Dashboard} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="ct_scrollsection__body">
                                            <div className="ct_scrollsection__text">
                                                <div>
                                                    <h4 className="mb-3"><span>Track orders and conversion ratio</span>
                                                    </h4>
                                                    <p>Partner organisations can track the offset history, purchase amount for which offset is done and analyse the API calls on their admin dashboard.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div> */}

                    </section >
                    {/* for Eko Travel section S  */}
                    <section className=" ptb-100  bg-white">
                        <div className="text-center ct_bank_bg d-block ct_svg_head " >
                            <h1 className="ct_bigger_head mb-0">Eko Travel</h1>
                            <p className="mt-3">Flight and Hotel Booking</p>
                        </div>
                        <div className="container">
                            <div className="row align-items-center ct_mob_reverse_row mt-5 pt-5">
                                <div className="col-md-6 mb-4 aos-init aos-animate" >
                                    <div className="ct_dash_esgimg">
                                        <img src={Eko_Travel} className="ct_right_width_img" />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4 aos-init aos-animate" >
                                    <h4 className="mt-4 ct_font_600 ct_bordr_left ">
                                        EKO Travel is based on a scientific data model that can be integrated by travel portals to bring sustainability into their journey
                                    </h4>

                                    <ul className="ct_srvc_point pt-4 ct_dark_srvc_point ">
                                        <li>
                                            <img src={Bank} />
                                            <div>
                                                <h4>INSPIRE </h4>
                                                <p className="text-start">
                                                    Calculate the carbon footprint of every journey/stay your customer books. Help them understand the climate impact of their lifestyles to inspire action.
                                               </p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src={Mutual_Fund} />
                                            <div>
                                                <h4>ENGAGE
                                                 </h4>
                                                <p className="text-start">
                                                    Help your customers make more sustainable travel choices through personalised smart tips to cut their CO2 emissions.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <img src={Bank} />
                                            <div>
                                                <h4>COMPENSATE</h4>
                                                <p className="text-start">
                                                    Enable your customers to compensate for the CO2 emissions of each journey/stay and further reduce their carbon footprint.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div >
                {/* Content wrapper end  */}
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
                {/* Footer Section Start  */}
                <footer className="footer-wrap">
                    <div className="footer-top">
                        <img src={Footer_Shape_3} alt="Image" className="footer-shape-four moveHorizontal" />
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
                                    <p className="copyright-text text-sm-start"><i className="ri-copyright-line"></i> Ekobon. All Rights
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
                {/* Footer Section End  */}
            </div >
        )
    }
}
