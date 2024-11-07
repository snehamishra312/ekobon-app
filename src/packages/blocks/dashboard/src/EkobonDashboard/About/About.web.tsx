import React from "react"
import AboutController from "./AboutController.web"
import {
    LOGO, White_Logo, Planet_Earth, Offset, Gift_Card, API11, ESG, Carbon_Neutral,
    Responsibility, Two_One, About_Us_1Img, Nikhil_Image, NirdeshImage1, PlasticBag, OceanTurtle_AboutUs, Lca_Icon
    , Footer_Shape_3
} from '../assets';
import { FaEuroSign } from "react-icons/fa";

export default class About extends AboutController {
    render() {
        const {
            isSideBarClick,
            isScroll,
            isDarkMode,
            onMenuOpen,
            onOpenIndividuals,
            onOpenCorporates,
            onOpenResources,
            onOpenResources1,
            loginFlag,
            isShow1,
            isShow2,
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
                        <input type="checkbox" checked={isDarkMode == true ? true : false} onChange={this.handleSwithmode} id="slider" />                        <span className="slider round"></span>
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

                    <div className="content-wrapper">

                        <div className="breadcrumb-wrap bg-f ct_about_bg">
                            <div className="container">
                                <div className="breadcrumb-title">
                                    <h2>About Us</h2>
                                    <ul className="breadcrumb-menu list-style">
                                        <li><a href="/">Home </a></li>
                                        <li>About Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <section className="ptb-100 ">
                            <div className="container">
                                <div className="row ct_ct_climate_crisis_bg">
                                    <div className="col-lg-6 " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                                        {/* <div>
                                            <img src={About_Us_1Img} />
                                        </div> */}
                                    </div>

                                    <div className="col-lg-6 " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                                        <div className="ct_climate_crisis_cnt">
                                            <div className="content-title style3">

                                                <h2 className="mb-3">Climate crisis is real</h2>
                                                <h5>It is happening right now!
                                                    It's time to take action. Are you ready?</h5>
                                                <p className="text-start">There are no borders to climate change, actions of the few can destroy the world.
                                                The good part is that
                                                action of a few can save the world. Be a part of the Carbon Offsetting
                                                revolution and make a global
                                                impact. Replant the world's lungs, support clean energy and help fix the climate
                                                    crisis.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </section>
                        <section className="ptb-100 pt-0">
                            <div className="container">
                                <div className="row ct_ct_climate_crisis_bg_2">

                                    <div className="col-lg-6 " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                                        <div className="ct_climate_crisis_cnt">
                                            <div className="content-title style3">
                                                <h2 className="mb-3">Introducing Ekobon</h2>
                                                <h5>
                                                    Hate climate change? But don't know what
                                                    moves the needle? We can help!</h5>
                                                <p className="text-start">Fighting climate change, just got easier. Ekobon makes the little things in
                                                life, guilt free! Ekobon is not just a tool; It's a way of life. It's a
                                                one-stop-shop for all your sustainblity needs.
                                                Choose the causes you are passionate about, trust us to research the right
                                                    climate projects for you, invest and be a part of the impact</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                                        {/* <div>
                                            <img src={About_Us_1Img} />
                                        </div> */}
                                    </div>


                                </div>

                            </div>
                        </section>

                        <section className="position-relative aos-init aos-animate" >
                            <div className="container-fluid px-0">
                                <div className="row">
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <div className="ct_background_clr"></div>
                                        <div className="ct_our_mission_left_bg">
                                            <div className="about-content">
                                                <div className="content-title style3">
                                                    <h2 className="text-white">We help you fund global Eko-positive projects to
                                                        balance your carbon footprint</h2>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-6 ps-0" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <div className="ct_our_mission_main">
                                            <div className="ct_our_mission_bg">
                                                <div className="ct_mission_title">
                                                    <h4>OUR MISSION</h4>
                                                </div>
                                                <div className="ct_overlay_mission_cnt">
                                                    <div className="ct_overlay_center">
                                                        <div className="ct_icon">
                                                            <i className="bi bi-tree"></i>
                                                        </div>
                                                        <div className="ct_mission_info">
                                                            <h4>OUR MISSION</h4>
                                                            <p>To empower individuals and corporates to make real actionable changes
                                                                to fix the climate crisis. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ct_our_mission_bg ct_our_mission_bg2">
                                                <div className="ct_mission_title">
                                                    <h4> OUR VISSION</h4>
                                                </div>
                                                <div className="ct_overlay_mission_cnt ">
                                                    <div className="ct_overlay_center">
                                                        <div className="ct_icon">

                                                        </div>
                                                        <div className="ct_mission_info">
                                                            <h4>OUR VISSION</h4>
                                                            <p>To help the world achieve climate neutrality by reversing adverse
                                                                effects of human actions on the environment. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </section>
                        <section className=" ptb-100">
                            <div className="section-title style3 text-center mb-40">

                                <h2>Meet Our Path Finders</h2>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <div className="ct_ceo-card_main">
                                            <div className="ct_inner_ceo_card">
                                                <div className="ct_ceo_img">
                                                    <img src={Nikhil_Image} />
                                                </div>
                                                <div className="ct_ceo_info text-center">
                                                    <h4>Nikhil Jain</h4>
                                                    <p><span className={isShow1 == true ? "ct_text_short ct_text_short1 ct_show_full" : "ct_text_short ct_text_short1"}>He is an IIT Bombay alumnus with a degree in Mechanical
                                                    Engineering. With over 15 years of banking experience under his belt, he has
                                                    worked in top global investment banks managing vast trading portfolios in
                                                    forex and commodities asset classes. Starting with Lehman Brothers in Tokyo,
                                                    he has worked in various regions of Asia spending the last few years as a
                                                    senior director in ANZ Bank. He is currently based in Singapore and handling
                                                        the international operations of Ekobon.</span><span>{isShow1 == false && <a href="javascript:void(0)" className="ct_more_link ct_more_click_1" onClick={() => this.onShowMore("Nikhil")}> More</a>}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 aos-animate" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <div className="ct_ceo-card_main">
                                            <div className="ct_inner_ceo_card">
                                                <div className="ct_ceo_img">
                                                    <img src={NirdeshImage1} />
                                                </div>
                                                <div className="ct_ceo_info  text-center">
                                                    <h4>Nirdesh Badjatya
                                                    </h4>
                                                    <p><span className={isShow2 == true ? "ct_text_short ct_text_short1 ct_show_full" : "ct_text_short ct_text_short1"}>A Chartered Accountant practising for over a decade . He is the director at  M & N Associates Pvt Ltd and Esya Capital Private Limited . With his unique experience , he is skilled in handling Mergers & Acquisition deals , business advisory , strategic management and fundraising for a diversified set of clientele across multiple industry domains . He is currently based in Indore handling the Finance and ESG division of Ekobon. </span>{isShow2 == false && <a href="javascript:void(0)" className="ct_more_link ct_more_click_2" onClick={() => this.onShowMore("Nikhil1")}>More</a>}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="ptb-100 pt-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <div className="ct_bottom_card">
                                            <div className="ct_bottom_card_img">
                                                <img src={PlasticBag} />
                                            </div>
                                            <div className="ct_bottom_card_info">
                                                <h4>You can't win this
                                                    massive war alone!</h4>
                                                <p>Share the love and help your friends
                                                    make the right choice.</p>
                                                {/* <ul className="social-profile style1 list-style">
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <i className="ri-facebook-fill"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <i className="ri-twitter-fill"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <i className="ri-instagram-line"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)">
                                                            <i className="ri-linkedin-fill"></i>
                                                        </a>
                                                    </li>
                                                </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <div className="ct_bottom_card">
                                            <div className="ct_bottom_card_img">
                                                <img src={OceanTurtle_AboutUs} />
                                            </div>
                                            <div className="ct_bottom_card_info">
                                                <h4>Erase your
                                                    footprint now</h4>
                                                <p>Little drops can make an ocean, and your small
                                                    steps towards offsetting can save the world!</p>
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
                                                }} className="btn style2">Get Started</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
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
                                        <p className="copyright-text text-sm-start"><i className="ri-copyright-line"></i> Ekobon. All Rights
                                            Reserved 2023 </p>
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


