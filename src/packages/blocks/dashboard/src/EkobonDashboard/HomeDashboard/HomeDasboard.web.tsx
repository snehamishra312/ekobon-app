import React from "react"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import {
    LOGO, White_Logo, Offset, Planet_Earth, Gift_Card, ESG, API11, Carbon_Neutral, NirdeshImage1,
    Banner_Img, Banner_Img2, Banner_Img3, Eko_Spark_App_Big, Carbon_Offset, Esg_Calculations, Life_Cycle_Img,
    Api_Img, Carbon_Neatral_Event, Dashboard_1, Plant_On_A_Hand, Dashboard_Mob, Bussiness_Dash_1, Lca_Icon,
    Bussiness_Dash_2, Shape_11, Team_1, Team_2, Team_3, Team_4, Client_1, Client_2, Client_3, Footer_Shape_3,
    Thread_Image, Three_Mobile, Renewable, NaureBasedSolutions, Promo_Video_Bg, Contact_Bg, Banner_2Img_New
} from "../assets";
// import "../DashboardCss/style.css";
// import "../DashboardCss/slider.css";
import HomeDashboardController from "./HomeDashboardController.web"
import { FaTemperatureHigh } from "react-icons/fa";
export default class HomeDashboard extends HomeDashboardController {
    render() {
        const {
            isInduvidual,
            isSideBarClick,
            isScroll,
            options1,
            onOpenResources1,
            options,
            isDarkMode,
            loginFlag,
            classChange,
            onMenuOpen,
            onOpenIndividuals,
            onOpenCorporates,
            onOpenResources,
            userName,
            emailAddress,
            phone_number,
            options2,
            options4,
            full_name,
            contact_number,
            user_email,
            company,
            ekobon_help_you,
            message,
        } = this.state
        return (
            <>
                <div className={isDarkMode == true ? 'theme-dark' : 'theme-light'}>
                    <div className="switch-theme-mode ct_mob_light_mode">
                        <label id="switch" className="switch">
                            <input type="checkbox" checked={isDarkMode == true ? true : false} onChange={this.handleSwithmode} id="slider" />
                            <span className="slider round"></span>
                        </label>
                    </div >
                    {/* <div className="page-wrapper" onScroll={this.handleScroll}> */}
                    <div className="page-wrapper">
                        <header className="header-wrap">
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
                                                    <ul className="dropdown-menu " style={{ display: onOpenResources1 == false ? "none" : "block" }}>
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
                        <div id="canvas">
                            <div id="box_wrapper">
                                <div className="ct_home_slider_bg">
                                    <OwlCarousel className="owl-carousel cti_custom_class owl-theme ct_home_slider " touchDrag={false} mouseDrag={false} loop={true} items={1} animateOut="fadeOut" {...options1}>
                                        <div className="item">
                                            <div className="ct_slider_inner_cnt ">
                                                <figure>
                                                    <img src={Banner_Img} />
                                                    <figcaption className={classChange == true ? "content_border ct_remove_animtion" : "content_border"}>
                                                        {/* <figcaption className="content_border"> */}
                                                        <h4>Accelerate your net zero journey</h4>
                                                        <h2>Sustainable Solutions Simplified</h2>
                                                        <p className="grey fontsize_16">
                                                            End-to-End Sustainability Solutions - Accelerating Enterprise Net-Zero and ESG Reporting.  Comprehensive digital platform for climate action.
                                                        </p>
                                                        <div>
                                                            {/* <div className="cti_slider_btn">
                                                                <a href="/service" className="btn_banner">Login</a>
                                                            </div> */}
                                                            <div className="cti_slider_btn">
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
                                                                }} className="btn_banner">For Individuals</a>
                                                                <a onClick={() => {
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

                                                                }} className="btn_banner">For Business</a>
                                                            </div>
                                                        </div>
                                                        <div className="box_cut"></div>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="ct_slider_inner_cnt">
                                                <figure>
                                                    <img src={Banner_2Img_New} />
                                                    <figcaption className="content_border">
                                                        <h4>Shaping your net zero journey</h4>
                                                        <h2>Sustainable Solutions Simplified</h2>
                                                        <p>
                                                            End-to-End Sustainability Solutions - Accelerating Enterprise Net-Zero and ESG Reporting.  Comprehensive digital platform for climate action.
                </p>
                                                        <div>
                                                            {/* <div className="cti_slider_btn">
                                                                <a href="/service" className="btn_banner">Login</a>
                                                            </div> */}
                                                            <div className="cti_slider_btn">
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
                                                                }} className="btn_banner">For Individuals</a>
                                                                <a onClick={() => {
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

                                                                }} className="btn_banner">For Business</a>
                                                            </div>
                                                        </div>
                                                        <div className="box_cut"></div>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="ct_slider_inner_cnt">
                                                <figure>
                                                    <img src={Banner_Img3} />
                                                    <figcaption className="content_border">
                                                        <h4>Take climate action in your hands</h4>
                                                        <h2>Sustainable Solutions Simplified</h2>
                                                        <p>
                                                            End-to-End Sustainability Solutions - Accelerating Enterprise Net-Zero and ESG Reporting.  Comprehensive digital platform for climate action.
                </p>
                                                        <div>
                                                            {/* <div className="cti_slider_btn">
                                                                <a href="/service" className="btn_banner">Login</a>
                                                            </div> */}
                                                            <div className="cti_slider_btn">
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
                                                                }} className="btn_banner">For Individuals</a>
                                                                <a onClick={() => {
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

                                                                }} className="btn_banner">For Business</a>
                                                            </div>
                                                        </div>
                                                        <div className="box_cut"></div>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                            {/* eof #box_wrapper */}
                        </div>
                        {/* Hero Section End */}

                        {/* Project Section Start  */}
                        <section className="project-wrap ptb-100 bg-sand">
                            <div className="container">
                                <div className="section-title style3 text-center mb-40 pb-5">
                                    <h2>Our Solutions </h2>
                                </div>
                                <div className="mt-5 ct_box_shadow">
                                    <div className="section-title style3 text-center ">
                                        <h4 className="text-center ct_sub_heading">Corporates</h4>
                                        <p>Complete suite of services in GHG accounting and net-zero reduction advisory, ESG and Climate risk reporting, CBAM, Life cycle analysis (LCA) and carbon accounting platform to accelerate your net-zero journey and build a strong sustainable brand.</p>
                                    </div>
                                    <div className="row pt-5">
                                        {/* <OwlCarousel className="owl-carousel owl-theme ct_corporate_slider"> */}
                                        <OwlCarousel className="owl-carousel  ct_nav_owl_none  projects-carousel w-100 topmargin_40 margin_right_10" data-margin="15" data-nav="true" loop={true} autoplay={true}
                                            data-themeclassName="owl-theme" data-responsive-lg="1" data-responsive-md="1" data-responsive-sm="1" {...options4}>
                                            <div className="item">
                                                <div className="ct_srvc_card_box ">
                                                    <div className="ct_srvc_body">
                                                        <div className="ct_srvc_icon">
                                                            <img src={ESG} />
                                                        </div>
                                                        <div className="ct_srvc_cnt">
                                                            <a href="/esg/reporting">
                                                                <h3>Net Zero Management and ESG Reporting</h3>
                                                            </a>
                                                            <p>Enterprise SaaS platform for GHG Scope 1-3 emission calculations and ESG reporting.
                                                           </p>
                                                        </div>
                                                    </div>
                                                    <div className="ct_srvc_btm_img">
                                                        <img src={Esg_Calculations} />
                                                        <div className="ct_overlay_btn">
                                                            <a href="/esg/reporting" className="btn style2">Learn More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="ct_srvc_card_box ">
                                                    <div className="ct_srvc_body">
                                                        <div className="ct_srvc_icon">
                                                            <img src={Lca_Icon} alt="Lca_Icon" />
                                                        </div>
                                                        <div className="ct_srvc_cnt">
                                                            <a href="life-cycle.html">
                                                                <h3>Life Cycle Assessment
                                                (LCA)</h3>
                                                            </a>
                                                            <p>Measure the environmental impact of your company’s product
                                            or process</p>
                                                        </div>
                                                    </div>
                                                    <div className="ct_srvc_btm_img">
                                                        <img src={Life_Cycle_Img} alt="Life_Cycle_Img" />
                                                        <div className="ct_overlay_btn">
                                                            <a href="life-cycle.html" className="btn style2">Learn More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="ct_srvc_card_box ">
                                                    <div className="ct_srvc_body">
                                                        <div className="ct_srvc_icon">
                                                            <img src={API11} />
                                                        </div>
                                                        <div className="ct_srvc_cnt">
                                                            <a href="/api">
                                                                <h3>APIs for Ecommerce, Travel and Banks </h3>
                                                            </a>
                                                            <p>Easy to plug-in software which provides customised real-time sustainability solutions.</p>
                                                        </div>
                                                    </div>
                                                    <div className="ct_srvc_btm_img">
                                                        <img src={Api_Img} />
                                                        <div className="ct_overlay_btn">
                                                            <a href="/api" className="btn style2">Learn More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="item">
                                                <div className="ct_srvc_card_box ">
                                                    <div className="ct_srvc_body">
                                                        <div className="ct_srvc_icon">
                                                            <img src={Carbon_Neutral} />
                                                        </div>
                                                        <div className="ct_srvc_cnt">
                                                            <a href="/carbon/neutral">
                                                                <h3>Carbon Neutral Events</h3>
                                                            </a>
                                                            <p>Measure and get insight into the environment impact of corporate events.
                                                </p>
                                                        </div>
                                                    </div>
                                                    <div className="ct_srvc_btm_img">
                                                        <img src={Carbon_Neatral_Event} />
                                                        <div className="ct_overlay_btn">
                                                            <a href="/carbon/neutral" className="btn style2">Learn More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </OwlCarousel>
                                    </div>
                                </div>
                                <div style={{ height: "60px" }}></div>
                                <div className="mt-5 ct_box_shadow " >
                                    <div className="section-title style3 text-center ">
                                        <h4 className="text-center ct_sub_heading">Individual</h4>
                                    </div>                                        <p>Make meaningful climate impact by understanding and offsetting your carbon footprint, planting trees and earning <br /> EKO points which can be redeemed on partner websites.</p>

                                    <div className="row pt-5">
                                        <OwlCarousel className="owl-carousel  ct_nav_owl_none  projects-carousel w-100 topmargin_40 margin_right_10" data-margin="15" data-nav="true" loop={true} autoplay={true}
                                            data-themeclassName="owl-theme" data-responsive-lg="1" data-responsive-md="1" data-responsive-sm="1" {...options4}>
                                            <div className="item">
                                                <div className="ct_srvc_card_box ">
                                                    <div className="ct_srvc_body">
                                                        <div className="ct_srvc_icon">
                                                            <img src={Planet_Earth} />
                                                        </div>
                                                        <div className="ct_srvc_cnt">
                                                            <a href="/ekospark">
                                                                <h3>EKO Spark </h3>
                                                            </a>
                                                            <p>Participate in climate challenges and invite others for same. Earn reward points for your climate actions.
                                                </p>
                                                        </div>
                                                    </div>
                                                    <div className="ct_srvc_btm_img">
                                                        <img src={Three_Mobile} style={{ objectPosition: "top" }} />
                                                        <div className="ct_overlay_btn">
                                                            <a href="/ekospark" className="btn style2">Learn More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="ct_srvc_card_box ">
                                                    <div className="ct_srvc_body">
                                                        <div className="ct_srvc_icon">
                                                            <img src={Offset} />
                                                        </div>
                                                        <div className="ct_srvc_cnt" onClick={this.onHandlePlantTree}>
                                                            <a>
                                                                <h3> Offset Carbon footprint / Plant Trees</h3>
                                                            </a>
                                                            <p>Calculate and offset your travel, hotel stay and private events footprint.
                                                      </p>
                                                        </div>
                                                    </div>
                                                    <div className="ct_srvc_btm_img">
                                                        <img src={Carbon_Offset} />
                                                        <div className="ct_overlay_btn" onClick={this.onHandlePlantTree}>
                                                            <a className="btn style2">Learn More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="ct_srvc_card_box ">
                                                    <div className="ct_srvc_body">
                                                        <div className="ct_srvc_icon">
                                                            <img src={Gift_Card} />
                                                        </div>
                                                        <div className="ct_srvc_cnt" onClick={this.onHandleGiftCard}>
                                                            <a >
                                                                <h3>Climate Positive Gift Card</h3>
                                                            </a>
                                                            <p>Engage your close ones in sustainability drive by gifting climate positive card.
                                                      </p>
                                                        </div>
                                                    </div>
                                                    <div className="ct_srvc_btm_img">
                                                        <img src={Thread_Image} />
                                                        <div className="ct_overlay_btn" onClick={this.onHandleGiftCard}>
                                                            <a className="btn style2">Learn More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </OwlCarousel>



                                    </div>
                                </div>

                            </div>
                        </section>

                        {/* Project Section End */}


                        <section className="ptb-100 ct_white_bg_overlay" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div className="container">
                                <div className="section-title style3 text-center mb-40">
                                    <span style={{ fontWeight: "600!important", paddingBottom: "5px" }}>Carbon Emissions </span>
                                    <h2>Reduce Your Carbon Emissions</h2>
                                </div>
                                <div className="ct_prdct_tab_1 mt-4 mt-md-0">
                                    <div className="ct_prdct_tab-container ">
                                        <div id="ct_prdct_icetab-container">
                                            <div className={isInduvidual == false ? "ct_prdct_icetab ct_current-tab " : "ct_prdct_icetab"} onClick={() => this.onHandleCarbonEmissionsTab("Individual")}>Individual</div>
                                            <div className={isInduvidual == true ? "ct_prdct_icetab ct_current-tab " : "ct_prdct_icetab"} onClick={() => this.onHandleCarbonEmissionsTab("Business")}>Business</div>

                                        </div>

                                        <div id="ct_icetab-content" className="">
                                            <div className={isInduvidual == false ? "ct_tabcontent1 ct_tab-active " : "ct_tabcontent1"}>
                                                <div className="row align-items-center ">
                                                    <div className="col-md-6  mb-4">
                                                        <div className="ct_dashboard_img">
                                                            <img src={Dashboard_1} />
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6  mb-4">
                                                        <div className="ct_dashboard_right_cnt">
                                                            <div className="ct_dashboard_icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65"
                                                                    viewBox="0 0 65 65" fill="none">
                                                                    <path
                                                                        d="M13.7157 17.3311L23.7597 23.3585C24.1746 23.6076 24.7502 23.4669 25.0012 23.0474L32.6385 10.2855L37.8125 18.9293L34.6896 20.8034C33.9558 21.2437 34.2215 22.4048 35.0736 22.4814L47.7164 23.6235C47.9073 23.6408 48.0986 23.597 48.263 23.4984C48.4273 23.3998 48.5561 23.2515 48.6308 23.0749L53.5869 11.3719C53.9207 10.5834 53.0231 9.80132 52.2889 10.242L49.4237 11.9611L45.4743 5.06153C44.5603 3.4644 42.8545 2.47534 41.0229 2.47534H24.4174C22.6155 2.47534 20.9251 3.43659 20.0032 4.98861L17.7426 8.79072C17.149 9.79002 18.703 10.7178 19.2977 9.71691L21.558 5.91403C22.1553 4.90941 23.2494 4.28619 24.4174 4.28619H24.4336L27.6134 4.30203C28.5817 4.43859 29.5221 5.0792 30.0783 6.00838L31.5836 8.52358L23.9139 21.3396L15.4192 16.2416L16.6094 14.2395C17.2034 13.2401 15.6494 12.3124 15.0547 13.3133L13.4031 16.0914C13.2808 16.2974 13.245 16.5435 13.3035 16.7758C13.3621 17.0082 13.5102 17.2078 13.7156 17.3311H13.7157ZM31.0503 4.27827L40.999 4.28696H41.0171C42.2069 4.28696 43.3124 4.92718 43.9044 5.96203L48.3122 13.663C48.372 13.7675 48.452 13.859 48.5475 13.9322C48.643 14.0053 48.7522 14.0587 48.8686 14.0891C48.985 14.1195 49.1063 14.1263 49.2253 14.1092C49.3444 14.0921 49.4588 14.0513 49.562 13.9894L50.837 13.2246L47.2222 21.7606L38.0001 20.928L39.5178 20.0172C39.9464 19.7603 40.0858 19.2042 39.8288 18.7749L31.6303 5.07814C31.4608 4.79502 31.2666 4.52737 31.0503 4.27827ZM62.7239 36.2436L56.4211 24.9683C56.178 24.533 55.628 24.3765 55.1924 24.6194L53.0604 25.8059C52.045 26.3706 52.9232 27.9547 53.9393 27.3885L55.2829 26.6404L61.1451 37.1275C61.7179 38.1529 61.7066 39.4212 61.1149 40.4361L59.3074 43.5363C58.5667 44.4825 57.5721 44.718 56.8097 44.7315H53.9939L46.6268 31.4584L49.5443 29.8342C50.5597 29.2696 49.6819 27.6858 48.6651 28.2517L44.9572 30.3153C44.5208 30.5582 44.3636 31.1094 44.606 31.5467L51.9244 44.7316H41.7623L41.7032 41.0718C41.6897 40.2154 40.5517 39.8645 40.0588 40.5651L32.749 50.9582C32.6388 51.1149 32.5811 51.3026 32.5843 51.4942C32.5875 51.6858 32.6514 51.8714 32.7667 52.0244L40.41 62.1746C40.9244 62.8585 42.0506 62.4711 42.0367 61.6147L41.982 58.2695L49.9239 58.2948H49.9405C51.7816 58.2944 53.4908 57.3015 54.4002 55.7042C57.1636 50.9212 59.8964 46.118 62.6772 41.349C63.5907 39.7826 63.6084 37.8261 62.7239 36.2436ZM49.9401 56.484H49.9295L41.0658 56.4564C40.9456 56.4565 40.8265 56.4803 40.7155 56.5264C40.6044 56.5726 40.5036 56.6402 40.4187 56.7254C40.3342 56.8111 40.2677 56.9128 40.223 57.0245C40.1783 57.1363 40.1563 57.2558 40.1583 57.3762L40.1824 58.8644L34.6082 51.4619L39.9392 43.8812L39.9679 45.6521C39.9718 45.8897 40.0687 46.1162 40.238 46.2828C40.4072 46.4494 40.6351 46.5428 40.8724 46.5427H56.8319C57.104 46.5387 57.3756 46.5152 57.6444 46.4726L52.8309 54.8025C52.2399 55.8404 51.1329 56.484 49.9401 56.484ZM28.8651 45.0463C28.7098 44.8908 28.4505 44.7825 28.2251 44.7825L13.367 44.8217L18.0879 35.9214L21.3028 37.6318C22.0581 38.0341 22.9151 37.2071 22.5409 36.4364L16.99 25.0042C16.9063 24.8317 16.7701 24.6902 16.6008 24.6003C16.4316 24.5103 16.2382 24.4764 16.0485 24.5036L3.48073 26.2955C2.6336 26.4162 2.42809 27.5895 3.18375 27.9912L6.13443 29.5614L2.27246 36.5109C1.3739 38.1275 1.41356 40.1123 2.37309 41.6866C5.10099 46.2262 7.82521 50.7683 10.5569 55.3064C11.6253 57.08 13.1808 58.4056 15.3603 58.3921L20.053 58.3656C21.2138 58.3589 21.2078 56.5544 20.0433 56.5544L15.3506 56.5812C14.1735 56.5914 13.0745 55.9648 12.4734 54.9552L10.8448 52.2204C10.4612 51.3187 10.5237 50.1816 11.0318 49.2242L12.4055 46.6351L27.3251 46.5955L27.3516 56.5132L25.6589 56.5227C24.4984 56.5291 24.5045 58.3339 25.6691 58.3339L28.2635 58.3193C28.503 58.318 28.7322 58.2217 28.9009 58.0514C29.0695 57.8811 29.1637 57.6509 29.1628 57.4111L29.1324 45.6855C29.132 45.5666 29.1082 45.4489 29.0624 45.3392C29.0165 45.2295 28.9495 45.1299 28.8651 45.0462V45.0463ZM9.04969 49.2838L3.92031 40.748C3.29702 39.7253 3.27126 38.4388 3.85364 37.3915L8.16368 29.6352C8.22214 29.53 8.25907 29.4142 8.27229 29.2945C8.28552 29.1748 8.27478 29.0537 8.2407 28.9383C8.20663 28.8228 8.1499 28.7153 8.07384 28.6221C7.99778 28.5288 7.90391 28.4517 7.79771 28.3951L6.48418 27.6965L15.6509 26.3896L19.6999 34.7282L18.1384 33.8971C17.9263 33.7845 17.6783 33.7608 17.4487 33.8311C17.3351 33.8657 17.2294 33.9225 17.1378 33.9982C17.0461 34.0739 16.9703 34.1669 16.9147 34.272L9.43418 48.3755C9.27953 48.6664 9.15086 48.9704 9.04969 49.2839V49.2838Z"
                                                                        fill="#4BAF47"></path>
                                                                </svg>
                                                            </div>
                                                            <div className="ct_dashboard_cnt">
                                                                <h4>My Climate Dashboard</h4>
                                                                <p>View and track your carbon offsets, climate projects you have invested in, trees planted all in your climate dashboard. </p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row ct_mob_reverse_row align-items-center">
                                                    <div className="col-md-6 mb-4">

                                                        <div className="ct_dashboard_right_cnt">
                                                            <div className="ct_dashboard_icon">
                                                                <img src={Plant_On_A_Hand} />
                                                            </div>
                                                            <div className="ct_dashboard_cnt">
                                                                <h4>Plant Trees</h4>
                                                                <p>Plant a tree and contribute
                                                            to the greener future</p>

                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div className="col-md-6  mb-4">
                                                        <div className="ct_dashboard_img">
                                                            <img src={Dashboard_Mob} />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isInduvidual == true ? "ct_tabcontent1 ct_tab-active " : "ct_tabcontent1 "}>
                                                <div className="row align-items-center">
                                                    <div className="col-md-6  mb-4">
                                                        <div className="ct_dashboard_img">
                                                            <img src={Bussiness_Dash_1} />
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6  mb-4">
                                                        <div className="ct_dashboard_right_cnt">
                                                            <div className="ct_dashboard_icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65"
                                                                    viewBox="0 0 65 65" fill="none">
                                                                    <path
                                                                        d="M13.7157 17.3311L23.7597 23.3585C24.1746 23.6076 24.7502 23.4669 25.0012 23.0474L32.6385 10.2855L37.8125 18.9293L34.6896 20.8034C33.9558 21.2437 34.2215 22.4048 35.0736 22.4814L47.7164 23.6235C47.9073 23.6408 48.0986 23.597 48.263 23.4984C48.4273 23.3998 48.5561 23.2515 48.6308 23.0749L53.5869 11.3719C53.9207 10.5834 53.0231 9.80132 52.2889 10.242L49.4237 11.9611L45.4743 5.06153C44.5603 3.4644 42.8545 2.47534 41.0229 2.47534H24.4174C22.6155 2.47534 20.9251 3.43659 20.0032 4.98861L17.7426 8.79072C17.149 9.79002 18.703 10.7178 19.2977 9.71691L21.558 5.91403C22.1553 4.90941 23.2494 4.28619 24.4174 4.28619H24.4336L27.6134 4.30203C28.5817 4.43859 29.5221 5.0792 30.0783 6.00838L31.5836 8.52358L23.9139 21.3396L15.4192 16.2416L16.6094 14.2395C17.2034 13.2401 15.6494 12.3124 15.0547 13.3133L13.4031 16.0914C13.2808 16.2974 13.245 16.5435 13.3035 16.7758C13.3621 17.0082 13.5102 17.2078 13.7156 17.3311H13.7157ZM31.0503 4.27827L40.999 4.28696H41.0171C42.2069 4.28696 43.3124 4.92718 43.9044 5.96203L48.3122 13.663C48.372 13.7675 48.452 13.859 48.5475 13.9322C48.643 14.0053 48.7522 14.0587 48.8686 14.0891C48.985 14.1195 49.1063 14.1263 49.2253 14.1092C49.3444 14.0921 49.4588 14.0513 49.562 13.9894L50.837 13.2246L47.2222 21.7606L38.0001 20.928L39.5178 20.0172C39.9464 19.7603 40.0858 19.2042 39.8288 18.7749L31.6303 5.07814C31.4608 4.79502 31.2666 4.52737 31.0503 4.27827ZM62.7239 36.2436L56.4211 24.9683C56.178 24.533 55.628 24.3765 55.1924 24.6194L53.0604 25.8059C52.045 26.3706 52.9232 27.9547 53.9393 27.3885L55.2829 26.6404L61.1451 37.1275C61.7179 38.1529 61.7066 39.4212 61.1149 40.4361L59.3074 43.5363C58.5667 44.4825 57.5721 44.718 56.8097 44.7315H53.9939L46.6268 31.4584L49.5443 29.8342C50.5597 29.2696 49.6819 27.6858 48.6651 28.2517L44.9572 30.3153C44.5208 30.5582 44.3636 31.1094 44.606 31.5467L51.9244 44.7316H41.7623L41.7032 41.0718C41.6897 40.2154 40.5517 39.8645 40.0588 40.5651L32.749 50.9582C32.6388 51.1149 32.5811 51.3026 32.5843 51.4942C32.5875 51.6858 32.6514 51.8714 32.7667 52.0244L40.41 62.1746C40.9244 62.8585 42.0506 62.4711 42.0367 61.6147L41.982 58.2695L49.9239 58.2948H49.9405C51.7816 58.2944 53.4908 57.3015 54.4002 55.7042C57.1636 50.9212 59.8964 46.118 62.6772 41.349C63.5907 39.7826 63.6084 37.8261 62.7239 36.2436ZM49.9401 56.484H49.9295L41.0658 56.4564C40.9456 56.4565 40.8265 56.4803 40.7155 56.5264C40.6044 56.5726 40.5036 56.6402 40.4187 56.7254C40.3342 56.8111 40.2677 56.9128 40.223 57.0245C40.1783 57.1363 40.1563 57.2558 40.1583 57.3762L40.1824 58.8644L34.6082 51.4619L39.9392 43.8812L39.9679 45.6521C39.9718 45.8897 40.0687 46.1162 40.238 46.2828C40.4072 46.4494 40.6351 46.5428 40.8724 46.5427H56.8319C57.104 46.5387 57.3756 46.5152 57.6444 46.4726L52.8309 54.8025C52.2399 55.8404 51.1329 56.484 49.9401 56.484ZM28.8651 45.0463C28.7098 44.8908 28.4505 44.7825 28.2251 44.7825L13.367 44.8217L18.0879 35.9214L21.3028 37.6318C22.0581 38.0341 22.9151 37.2071 22.5409 36.4364L16.99 25.0042C16.9063 24.8317 16.7701 24.6902 16.6008 24.6003C16.4316 24.5103 16.2382 24.4764 16.0485 24.5036L3.48073 26.2955C2.6336 26.4162 2.42809 27.5895 3.18375 27.9912L6.13443 29.5614L2.27246 36.5109C1.3739 38.1275 1.41356 40.1123 2.37309 41.6866C5.10099 46.2262 7.82521 50.7683 10.5569 55.3064C11.6253 57.08 13.1808 58.4056 15.3603 58.3921L20.053 58.3656C21.2138 58.3589 21.2078 56.5544 20.0433 56.5544L15.3506 56.5812C14.1735 56.5914 13.0745 55.9648 12.4734 54.9552L10.8448 52.2204C10.4612 51.3187 10.5237 50.1816 11.0318 49.2242L12.4055 46.6351L27.3251 46.5955L27.3516 56.5132L25.6589 56.5227C24.4984 56.5291 24.5045 58.3339 25.6691 58.3339L28.2635 58.3193C28.503 58.318 28.7322 58.2217 28.9009 58.0514C29.0695 57.8811 29.1637 57.6509 29.1628 57.4111L29.1324 45.6855C29.132 45.5666 29.1082 45.4489 29.0624 45.3392C29.0165 45.2295 28.9495 45.1299 28.8651 45.0462V45.0463ZM9.04969 49.2838L3.92031 40.748C3.29702 39.7253 3.27126 38.4388 3.85364 37.3915L8.16368 29.6352C8.22214 29.53 8.25907 29.4142 8.27229 29.2945C8.28552 29.1748 8.27478 29.0537 8.2407 28.9383C8.20663 28.8228 8.1499 28.7153 8.07384 28.6221C7.99778 28.5288 7.90391 28.4517 7.79771 28.3951L6.48418 27.6965L15.6509 26.3896L19.6999 34.7282L18.1384 33.8971C17.9263 33.7845 17.6783 33.7608 17.4487 33.8311C17.3351 33.8657 17.2294 33.9225 17.1378 33.9982C17.0461 34.0739 16.9703 34.1669 16.9147 34.272L9.43418 48.3755C9.27953 48.6664 9.15086 48.9704 9.04969 49.2839V49.2838Z"
                                                                        fill="#4BAF47"></path>
                                                                </svg>
                                                            </div>
                                                            <div className="ct_dashboard_cnt">
                                                                <h4>GHG Emissions Dashboard</h4>
                                                                <p>Your emissions dashboard which aggregates the company’s emissions data across Scope 1,2 and 3 categories and does real time monitoring.</p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center ct_mob_reverse_row ">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="ct_dashboard_right_cnt">
                                                            <div className="ct_dashboard_icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65"
                                                                    viewBox="0 0 65 65" fill="none">
                                                                    <path
                                                                        d="M13.7157 17.3311L23.7597 23.3585C24.1746 23.6076 24.7502 23.4669 25.0012 23.0474L32.6385 10.2855L37.8125 18.9293L34.6896 20.8034C33.9558 21.2437 34.2215 22.4048 35.0736 22.4814L47.7164 23.6235C47.9073 23.6408 48.0986 23.597 48.263 23.4984C48.4273 23.3998 48.5561 23.2515 48.6308 23.0749L53.5869 11.3719C53.9207 10.5834 53.0231 9.80132 52.2889 10.242L49.4237 11.9611L45.4743 5.06153C44.5603 3.4644 42.8545 2.47534 41.0229 2.47534H24.4174C22.6155 2.47534 20.9251 3.43659 20.0032 4.98861L17.7426 8.79072C17.149 9.79002 18.703 10.7178 19.2977 9.71691L21.558 5.91403C22.1553 4.90941 23.2494 4.28619 24.4174 4.28619H24.4336L27.6134 4.30203C28.5817 4.43859 29.5221 5.0792 30.0783 6.00838L31.5836 8.52358L23.9139 21.3396L15.4192 16.2416L16.6094 14.2395C17.2034 13.2401 15.6494 12.3124 15.0547 13.3133L13.4031 16.0914C13.2808 16.2974 13.245 16.5435 13.3035 16.7758C13.3621 17.0082 13.5102 17.2078 13.7156 17.3311H13.7157ZM31.0503 4.27827L40.999 4.28696H41.0171C42.2069 4.28696 43.3124 4.92718 43.9044 5.96203L48.3122 13.663C48.372 13.7675 48.452 13.859 48.5475 13.9322C48.643 14.0053 48.7522 14.0587 48.8686 14.0891C48.985 14.1195 49.1063 14.1263 49.2253 14.1092C49.3444 14.0921 49.4588 14.0513 49.562 13.9894L50.837 13.2246L47.2222 21.7606L38.0001 20.928L39.5178 20.0172C39.9464 19.7603 40.0858 19.2042 39.8288 18.7749L31.6303 5.07814C31.4608 4.79502 31.2666 4.52737 31.0503 4.27827ZM62.7239 36.2436L56.4211 24.9683C56.178 24.533 55.628 24.3765 55.1924 24.6194L53.0604 25.8059C52.045 26.3706 52.9232 27.9547 53.9393 27.3885L55.2829 26.6404L61.1451 37.1275C61.7179 38.1529 61.7066 39.4212 61.1149 40.4361L59.3074 43.5363C58.5667 44.4825 57.5721 44.718 56.8097 44.7315H53.9939L46.6268 31.4584L49.5443 29.8342C50.5597 29.2696 49.6819 27.6858 48.6651 28.2517L44.9572 30.3153C44.5208 30.5582 44.3636 31.1094 44.606 31.5467L51.9244 44.7316H41.7623L41.7032 41.0718C41.6897 40.2154 40.5517 39.8645 40.0588 40.5651L32.749 50.9582C32.6388 51.1149 32.5811 51.3026 32.5843 51.4942C32.5875 51.6858 32.6514 51.8714 32.7667 52.0244L40.41 62.1746C40.9244 62.8585 42.0506 62.4711 42.0367 61.6147L41.982 58.2695L49.9239 58.2948H49.9405C51.7816 58.2944 53.4908 57.3015 54.4002 55.7042C57.1636 50.9212 59.8964 46.118 62.6772 41.349C63.5907 39.7826 63.6084 37.8261 62.7239 36.2436ZM49.9401 56.484H49.9295L41.0658 56.4564C40.9456 56.4565 40.8265 56.4803 40.7155 56.5264C40.6044 56.5726 40.5036 56.6402 40.4187 56.7254C40.3342 56.8111 40.2677 56.9128 40.223 57.0245C40.1783 57.1363 40.1563 57.2558 40.1583 57.3762L40.1824 58.8644L34.6082 51.4619L39.9392 43.8812L39.9679 45.6521C39.9718 45.8897 40.0687 46.1162 40.238 46.2828C40.4072 46.4494 40.6351 46.5428 40.8724 46.5427H56.8319C57.104 46.5387 57.3756 46.5152 57.6444 46.4726L52.8309 54.8025C52.2399 55.8404 51.1329 56.484 49.9401 56.484ZM28.8651 45.0463C28.7098 44.8908 28.4505 44.7825 28.2251 44.7825L13.367 44.8217L18.0879 35.9214L21.3028 37.6318C22.0581 38.0341 22.9151 37.2071 22.5409 36.4364L16.99 25.0042C16.9063 24.8317 16.7701 24.6902 16.6008 24.6003C16.4316 24.5103 16.2382 24.4764 16.0485 24.5036L3.48073 26.2955C2.6336 26.4162 2.42809 27.5895 3.18375 27.9912L6.13443 29.5614L2.27246 36.5109C1.3739 38.1275 1.41356 40.1123 2.37309 41.6866C5.10099 46.2262 7.82521 50.7683 10.5569 55.3064C11.6253 57.08 13.1808 58.4056 15.3603 58.3921L20.053 58.3656C21.2138 58.3589 21.2078 56.5544 20.0433 56.5544L15.3506 56.5812C14.1735 56.5914 13.0745 55.9648 12.4734 54.9552L10.8448 52.2204C10.4612 51.3187 10.5237 50.1816 11.0318 49.2242L12.4055 46.6351L27.3251 46.5955L27.3516 56.5132L25.6589 56.5227C24.4984 56.5291 24.5045 58.3339 25.6691 58.3339L28.2635 58.3193C28.503 58.318 28.7322 58.2217 28.9009 58.0514C29.0695 57.8811 29.1637 57.6509 29.1628 57.4111L29.1324 45.6855C29.132 45.5666 29.1082 45.4489 29.0624 45.3392C29.0165 45.2295 28.9495 45.1299 28.8651 45.0462V45.0463ZM9.04969 49.2838L3.92031 40.748C3.29702 39.7253 3.27126 38.4388 3.85364 37.3915L8.16368 29.6352C8.22214 29.53 8.25907 29.4142 8.27229 29.2945C8.28552 29.1748 8.27478 29.0537 8.2407 28.9383C8.20663 28.8228 8.1499 28.7153 8.07384 28.6221C7.99778 28.5288 7.90391 28.4517 7.79771 28.3951L6.48418 27.6965L15.6509 26.3896L19.6999 34.7282L18.1384 33.8971C17.9263 33.7845 17.6783 33.7608 17.4487 33.8311C17.3351 33.8657 17.2294 33.9225 17.1378 33.9982C17.0461 34.0739 16.9703 34.1669 16.9147 34.272L9.43418 48.3755C9.27953 48.6664 9.15086 48.9704 9.04969 49.2839V49.2838Z"
                                                                        fill="#4BAF47"></path>
                                                                </svg>
                                                            </div>
                                                            <div className="ct_dashboard_cnt">
                                                                <h4>API Emissions Dashboard</h4>
                                                                <p>Real time view and analysis of the carbon footprint API calls made by end-user and offsets done against the purchases on your website.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6  mb-4">
                                                        <div className="ct_dashboard_img">
                                                            <img src={Bussiness_Dash_2} />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Counter Section Start */}

                        <div className="promo-video bg-f style3 ptb-100" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div className="container">
                                <div className="row gx-5 align-items-center">
                                    <div className="col-xl-12 col-lg-12 text-center">
                                        <div className="content-title style5 md-center">

                                            <h2>Our Projects for Climate Offsetting</h2>
                                            <p>
                                                We invest in well-researched and highest quality projects driven towards community development and which target the UN Sustainable Development Goals
                                    </p>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <section className=" ct_nav_flex ds ptb-100 ct_project_main_div" data-aos="fade-up" data-aos-duration="1200"
                            data-aos-delay="200">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <OwlCarousel className="owl-carousel  ct_nav_owl_none  projects-carousel w-100 topmargin_40" data-margin="10" data-nav="true" items={1} loop={true} autoplay={true}
                                            data-items="6" data-themeclassName="owl-theme" data-responsive-lg="1" data-responsive-md="1" data-responsive-sm="1" {...options2}>
                                            <div className="vertical-item content-absolute">
                                                <div>
                                                    <div className="section-title style3">

                                                        <h2 className="text-uppercase text-white mb-2">Renewable Energy</h2>
                                                    </div>
                                                    <p className="text-white  text-start">
                                                        Fossil fuels account for more than three fourth of global energy needs and there
                                                        is urgent need to speed up the transition to renewable forms of energy. We
                                                        support projects that use clean energy alternatives such as solar, wind and
                                                        hydro power to verifiably reduce and offset emissions.
                    </p>
                                                    <a href="/project" className="btn style2 mt-4">See All Project</a>
                                                </div>
                                            </div>

                                            <div className="vertical-item content-absolute">
                                                <div>
                                                    <div className="section-title style3">

                                                        <h2 className="text-uppercase text-white mb-2">Tree Planting and other
                            Nature Based Solutions</h2>
                                                    </div>
                                                    <p className="text-white  text-start">
                                                        Nature has its own way of maintaining carbon balance with trees playing a vital
                                                        role in the carbon cycle by storing carbon and stabilizing the soil. Ekobon
                                                        invests in various nature-based projects that focus on reforestation and
                                                        afforestation.
                    </p>
                                                    <a href="/project" className="btn style2 mt-4">See All Project</a>
                                                </div>
                                            </div>

                                            <div className="vertical-item content-absolute">
                                                <div>
                                                    <div className="section-title style3">

                                                        <h2 className="text-uppercase text-white mb-2">Energy Efficiency and
                            Fuel Switching</h2>
                                                    </div>
                                                    <p className="text-white  text-start">
                                                        There is a multitude of projects that focus on the welfare of rural households.
                                                        They do this by making smoke-free biogas cookstoves and advanced biogas
                                                        digesters available, which are installed and maintained by local technicians.
                                                        The aim is to reduce emissions by traditional means like coal and firewood and
                                                        provide families with clean and free biogas for energy needs in cooking and
                                                        lighting.
                    </p>
                                                    <a href="/project" className="btn style2 mt-4">See All Project</a>
                                                </div>
                                            </div>

                                            <div className="vertical-item content-absolute">
                                                <div>
                                                    <div className="section-title style3">

                                                        <h2 className="text-uppercase text-white mb-2">Community Projects
                                                        </h2>
                                                    </div>
                                                    <p className="text-white  text-start">
                                                        While working towards achieving carbon reduction objective, community projects
                                                        also focus on supporting local communities by filling the gaps in their everyday
                                                        needs and making them self-sufficient. The projects encompass economic
                                                        development initiatives, improvements in cooking technology and provisions for
                                                        clean water.
                                                    </p>
                                                    <a href="/project" className="btn style2 mt-4">See All Project</a>
                                                </div>
                                            </div>

                                            <div className="vertical-item content-absolute">
                                                <div>
                                                    <div className="section-title style3">
                                                        <h2 className="text-uppercase text-white mb-2">Carbon Removal
                                                        </h2>
                                                    </div>
                                                    <p className="text-white  text-start">
                                                        Advanced technologies like direct air capture and high-quality biochar
                                                        production are being developed to absorb carbon and store it for generations
                                                        thereby creating huge carbon sinks. Ekobon invests in these projects and
                                                        promotes the use of next generation technology as enablers of carbon emission
                                                        mitigation.
                                                    </p>
                                                    <a href="/project" className="btn style2 mt-4">See All Project</a>
                                                </div>
                                            </div>

                                            <div className="vertical-item content-absolute">
                                                <div>
                                                    <div className="section-title style3">

                                                        <h2 className="text-uppercase text-white mb-2">Blue Carbon</h2>
                                                    </div>
                                                    <p className="text-white text-start">
                                                        Apart from trees, oceans and coastlines are also an important part of the
                                                        natural carbon cycle. Mangroves, sea grasses, and salt marshes along the coast
                                                        act as carbon sinks and hold carbon. Blue carbon projects aim to create more
                                                        carbon sinks by investing in mangrove planting and other initiatives.
                    </p>
                                                    <a href="/project" className="btn style2 mt-4">See All Project</a>
                                                </div>
                                            </div>
                                        </OwlCarousel>

                                        <OwlCarousel className="owl-carousel projects-carousel ct_nav_flex  topmargin_40" margin={10} data-nav="true" loop={true} autoplay={true}
                                            data-items="6" data-themeclassName="owl-theme" {...options}>
                                            <div className="vertical-item content-absolute">
                                                <div className="item-media">
                                                    <img src={Renewable} alt="" />
                                                    <div className="media-links p-link">
                                                        <div className="links-wrap">
                                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                        </div>
                                                        <a className="abs-link" title="" href="#project1 " data-toggle="tab"
                                                            id="tab_1click"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vertical-item content-absolute">
                                                <div className="item-media">
                                                    <img src={NaureBasedSolutions} alt="" />
                                                    <div className="media-links p-link">
                                                        <div className="links-wrap">
                                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                        </div>
                                                        <a className="abs-link" title="" href="#project2 " data-toggle="tab"
                                                            id="tab_2click"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vertical-item content-absolute">
                                                <div className="item-media">
                                                    <img src={Banner_Img2} alt="" />
                                                    <div className="media-links p-link">
                                                        <div className="links-wrap">
                                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                        </div>
                                                        <a className="abs-link" title="" href="#project3 " data-toggle="tab"
                                                            id="tab_3click"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vertical-item content-absolute">
                                                <div className="item-media">
                                                    <img src={Promo_Video_Bg} alt="" />
                                                    <div className="media-links p-link">
                                                        <div className="links-wrap">
                                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                        </div>
                                                        <a className="abs-link" title="" href="#project4 " data-toggle="tab"
                                                            id="tab_4click"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vertical-item content-absolute">
                                                <div className="item-media">
                                                    <img src={Contact_Bg} alt="" />
                                                    <div className="media-links p-link">
                                                        <div className="links-wrap">
                                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                        </div>
                                                        <a className="abs-link" title="" href="#project5 " data-toggle="tab"
                                                            id="tab_5click"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vertical-item content-absolute">
                                                <div className="item-media">
                                                    <img src={Banner_Img3} alt="" />
                                                    <div className="media-links p-link">
                                                        <div className="links-wrap">
                                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                        </div>
                                                        <a className="abs-link" title="" href="#project6 " data-toggle="tab"
                                                            id="tab_6click"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                    <div className="col-md-6">
                                        <OwlCarousel className="owl-carousel ct_nav_owl_none  projects-carousel topmargin_40 ct_z_index_1 ct_mob_none " data-margin="10" data-nav="true" items={1} {...options2} loop={true} autoplay={true}
                                            data-items="6" data-themeclassName="owl-theme" >

                                            <div className="vertical-item content-absolute gallery-item" id="project1">
                                                <div className="item-media">
                                                    <img src={Renewable} alt="" />
                                                </div>
                                            </div>

                                            <div className="vertical-item content-absolute gallery-item" id="project2">
                                                <div className="item-media">
                                                    <img src={NaureBasedSolutions} alt="" />

                                                </div>
                                            </div>

                                            <div className="vertical-item content-absolute gallery-item" id="project3">
                                                <div className="item-media">
                                                    <img src={Banner_Img2} alt="" />

                                                </div>
                                            </div>

                                            <div className="vertical-item content-absolute gallery-item" id="project4">
                                                <div className="item-media">
                                                    <img src={Promo_Video_Bg} alt="" />

                                                </div>
                                            </div>

                                            <div className="vertical-item content-absolute gallery-item" id="project5">
                                                <div className="item-media">
                                                    <img src={Contact_Bg} alt="" />

                                                </div>
                                            </div>

                                            <div className="vertical-item content-absolute gallery-item" id="project6">
                                                <div className="item-media">
                                                    <img src={Banner_Img3} alt="" />

                                                </div>
                                            </div>

                                        </OwlCarousel>

                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="team-wrap ptb-100 bg-sand">
                            <img src={Shape_11} className="team-shape-one" />
                            <div className="container">
                                <div className="section-title style3 text-center mb-40">
                                    <span>Our Team</span>
                                    <h2>Our Experts Team</h2>
                                </div>

                                <OwlCarousel className="team-slider-one ct_team_sldr owl-carousel owl-loaded owl-drag owl-theme" data-margin="10" data-nav="true" data-items="6" data-themeclassName="owl-theme" loop={true} autoplay={true} {...options}>
                                    {/* <div className="owl-stage-outer owl-height" style={{ height: "373.406px" }}>
                                    <div className="owl-stage"
                                        style={{ "transform": "translate3d(-1321px, 0px, 0px); transition: all 0s ease 0s; width: 4624px;" }}> */}
                                    <div className="item">
                                        <div className="team-card style3" data-aos="fade-right"
                                            data-aos-duration="1200" data-aos-delay="400">
                                            <img src={Team_1} />
                                            <div className="team-info pb-5">
                                                <h3><a href="javascript:void(0)">Nikhil Jain</a></h3>
                                                <span>Founder </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="team-card style3" data-aos="fade-right"
                                            data-aos-duration="1200" data-aos-delay="500">
                                            <img src={NirdeshImage1} />
                                            <div className="team-info  pb-5">
                                                <h3><a href="javascript:void(0)">Nirdesh Badjatya</a></h3>
                                                <span>Co-Founder</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="team-card style3" data-aos="fade-right"
                                            data-aos-duration="1200" data-aos-delay="600">
                                            <img src={Team_3} />
                                            <div className="team-info pb-5">
                                                <h3><a href="javascript:void(0)">Jan Zverina</a></h3>
                                                <span>ESG Team</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="team-card style3" data-aos="fade-right"
                                            data-aos-duration="1200" data-aos-delay="700">
                                            <img src={Team_4} />
                                            <div className="team-info pb-5">
                                                <h3><a href="javascript:void(0)">Karel Kotoun</a></h3>
                                                <span>ESG Team</span>
                                            </div>
                                        </div>
                                        {/* </div>
                                    </div> */}
                                    </div>
                                </OwlCarousel>
                            </div>
                        </section>
                        {/* Team Section End */}

                        {/* <section className="ptb-100">
                            <div className="container">
                                <div className="row" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                                    <div className="col-md-12">
                                        <div className="section-title style3 mb-40 text-center">
                                            <h2>Our Partners</h2>
                                        </div>
                                        <OwlCarousel className="owl-carousel owl-loaded owl-drag ct_client_brand owl-theme mt-5 owl-loaded owl-drag" loop={true} autoplay={true} {...options} margin={10}>
                                            <div className="item">
                                                <div className="ct_client_brand_img">
                                                    <img src={Client_1} />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="ct_client_brand_img">
                                                    <img src={Client_2} />
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="ct_client_brand_img">
                                                    <img src={Client_3} />
                                                </div>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </section> */}

                        <div className="ct_new_letter_bg py-5">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-12 mb-4 mb-md-0 mx-auto" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="200">
                                        <div className="section-title style3 mb-40 text-center ct_news_letr_head">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                <path
                                                    d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                                            </svg>
                                            <h2 className="mt-3 text-white" onClick={this.onHandlePushOnContact}>For More Info Contact US</h2>
                                        </div>
                                        <form action="">
                                            <div className="row  bg-none bg-transparent">
                                                <div className="col-md-3 mb-4">
                                                    <div className="form-group ct_small_form_news">
                                                        <input autoComplete="off" type="text" name="name" value={userName} onChange={(e) => this.setState({ userName: e.target.value })} placeholder="Enter Name" required />

                                                    </div>
                                                </div>
                                                <div className="col-md-3  mb-4">
                                                    <div className="form-group ct_small_form_news">
                                                        <input autoComplete="off" type="email" name="name" value={emailAddress} onChange={(e) => this.setState({ emailAddress: e.target.value })} placeholder="Enter Email" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-3  mb-4">
                                                    <div className="form-group ct_small_form_news">
                                                        <input autoComplete="off" type="number" name="name" value={phone_number} onChange={(e) => this.setState({ phone_number: e.target.value })} placeholder="Enter Number" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-3  mb-4" onClick={this.onHandleSubmitDetail}>
                                                    <div className=" text-center ">
                                                        <a className="btn style2 ct_newsltr_btn">Submit</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Section Start */}
                        <footer className="footer-wrap"  >
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
                                            <p className="copyright-text  text-sm-start" ><i className="ri-copyright-line"></i> Ekobon. All Rights
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

                        <div>
                            <a onClick={this.toTopFunction} className='back-to-top12'><i className="ri-arrow-up-s-line"></i></a>
                        </div>
                        {/* Footer Section End  */}



                        {/* offset modal  */}
                        <div className="modal ct_modal_bg" id="offset_modal">
                            <div className="modal-dialog modal-dialog-centered  opacity-animate3 modal-lg">
                                <div className="modal-content">

                                    {/* Modal Header */}
                                    <div className="modal-header border-0 p-0   ">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"><i className="fa fa-times"
                                            aria-hidden="true"></i>
                                        </button>
                                    </div>

                                    {/* Modal body */}
                                    <div className="modal-body">
                                        <h4 className="modal-title mb-4">Offset Description</h4>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quas itaque mollitia, quae
                                            excepturi perspiciatis nostrum voluptas ex fuga aliquid illo nisi repudiandae necessitatibus
                                            reiciendis nesciunt! Possimus commodi facere vero.
                                </p>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur est iure nisi distinctio
                                            architecto ipsa quia hic facilis rem quidem mollitia aliquam, earum exercitationem quae laborum!
                                            Quas necessitatibus cupiditate Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Aspernatur est iure nisi distinctio architecto ipsa quia hic facilis rem quidem mollitia
                                            aliquam, earum exercitationem quae laborum! Quas necessitatibus cupiditate unde. unde.
                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Plant Trees modal s */}
                        <div className="modal ct_modal_bg" id="plant_tree_modal">
                            <div className="modal-dialog modal-dialog-centered  opacity-animate3 modal-lg">
                                <div className="modal-content">

                                    {/* Modal Header */}
                                    <div className="modal-header border-0 p-0   ">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"><i className="fa fa-times"
                                            aria-hidden="true"></i>
                                        </button>
                                    </div>

                                    {/* Modal body */}
                                    <div className="modal-body">
                                        <h4 className="modal-title mb-4">Plant Trees Description</h4>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quas itaque mollitia, quae
                                            excepturi perspiciatis nostrum voluptas ex fuga aliquid illo nisi repudiandae necessitatibus
                                            reiciendis nesciunt! Possimus commodi facere vero.
                    </p>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur est iure nisi distinctio
                                            architecto ipsa quia hic facilis rem quidem mollitia aliquam, earum exercitationem quae laborum!
                                            Quas necessitatibus cupiditate Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Aspernatur est iure nisi distinctio architecto ipsa quia hic facilis rem quidem mollitia
                                            aliquam, earum exercitationem quae laborum! Quas necessitatibus cupiditate unde. unde.
                    </p>
                                    </div>
                                </div>
                            </div>
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
                                                    <button className="btn style2 mt-3" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => this.onHandleSubmitRequestApi(e)}>Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* One Time Offset  modal s */}
                        <div className="modal ct_modal_bg" id="one_time_offset_modal">
                            <div className="modal-dialog modal-dialog-centered  opacity-animate3 modal-lg">
                                <div className="modal-content">

                                    {/* Modal Header  */}
                                    <div className="modal-header border-0 p-0   ">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"><i className="fa fa-times"
                                            aria-hidden="true"></i>
                                        </button>
                                    </div>

                                    {/* Modal body  */}
                                    <div className="modal-body">
                                        <h4 className="modal-title mb-4">One time Offsets Description</h4>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quas itaque mollitia, quae
                                            excepturi perspiciatis nostrum voluptas ex fuga aliquid illo nisi repudiandae necessitatibus
                                            reiciendis nesciunt! Possimus commodi facere vero.
                    </p>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur est iure nisi distinctio
                                            architecto ipsa quia hic facilis rem quidem mollitia aliquam, earum exercitationem quae laborum!
                                            Quas necessitatibus cupiditate Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Aspernatur est iure nisi distinctio architecto ipsa quia hic facilis rem quidem mollitia
                                            aliquam, earum exercitationem quae laborum! Quas necessitatibus cupiditate unde. unde.
                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* One Time Offset  modal s */}
                        <div className="modal ct_modal_bg" id="subscription_offset_modal">
                            <div className="modal-dialog modal-dialog-centered  opacity-animate3 modal-lg">
                                <div className="modal-content">

                                    {/* Modal Header  */}
                                    <div className="modal-header border-0 p-0   ">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"><i className="fa fa-times"
                                            aria-hidden="true"></i>
                                        </button>
                                    </div>

                                    {/* Modal body  */}
                                    <div className="modal-body">
                                        <h4 className="modal-title mb-4">Subscription Offsets Description</h4>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quas itaque mollitia, quae
                                            excepturi perspiciatis nostrum voluptas ex fuga aliquid illo nisi repudiandae necessitatibus
                                            reiciendis nesciunt! Possimus commodi facere vero.
                    </p>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur est iure nisi distinctio
                                            architecto ipsa quia hic facilis rem quidem mollitia aliquam, earum exercitationem quae laborum!
                                            Quas necessitatibus cupiditate Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Aspernatur est iure nisi distinctio architecto ipsa quia hic facilis rem quidem mollitia
                                            aliquam, earum exercitationem quae laborum! Quas necessitatibus cupiditate unde. unde.
                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </ >
        )
    }
}


