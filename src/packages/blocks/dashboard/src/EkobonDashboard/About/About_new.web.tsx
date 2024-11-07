import React from "react"
import AboutController from "./AboutController.web"
import {
    LOGO, White_Logo, Planet_Earth, Offset, Gift_Card, API11, ESG, Carbon_Neutral, AboutUsImageIcon, AboutUs2ImageIcon,
    Responsibility, Two_One, About_Us_1Img, Nikhil_Image, NirdeshImage1, PlasticBag, OceanTurtle_AboutUs, Lca_Icon, Team_4, Team_3
    , Footer_Shape_3, AishwaryaImageIcon, AmitImageIcon, NikhilImageIcon, NirdeshImageIcon, AtulImageIcon, SwatiVermaImageIcon, ViditImageIcon, SwatiImageIcon,
    RelaEstateImageIcon, ItGettyImageIcon, TextileImageIcon, FinanceImageIcon
} from '../assets';
import "./About.css"
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
                        {/* <div className="breadcrumb-wrap bg-f ct_about_bg">
                            <div className="container">
                                <div className="breadcrumb-title">
                                    <h2>About Us</h2>
                                    <ul className="breadcrumb-menu list-style">
                                        <li><a href="/">Home </a></li>
                                        <li>About Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        <section className="about-wrap style3 ptb-100">
                            <div className="container">
                                <div className="row align-items-center ct_mob_reverse_row  ct_our_mission_dark1" style={{ backgroundColor: "#f5f5f5" }}>
                                    <div className="col-lg-7 mb-0">
                                        <div className="about-content px-4">
                                            <div className="content-title style3">
                                                <h4 className=" mb-3">Our Mission</h4>
                                                <h5 className="text-start">To make the transition towards a sustanaibale economy easy
                                                and effective for companies and individuals </h5>
                                            </div>
                                            <div className="content-title style3">
                                                <h4 className="">Helping companies become climate champions</h4>
                                                <p className="text-start">
                                                    Ekobon is developing technology which helps companies
                                                    understand their emissions on a granular level and executes
                                                    the net-zero roadmap including target setting, carbon reduction
                                                    and reporting in a robust and effective manner.
                                    </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 mb-0" style={{ backgroundColor: "#86af48" }}>
                                        <div className="p-3">
                                            <img src={AboutUsImageIcon} alt="about" width="100%"
                                                className="ct_responsive_globe_width" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="ptb-100">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                                        <div>
                                            <img src={AboutUs2ImageIcon} alt="" className="w-100 ct_our_team_img" />
                                        </div>
                                    </div>
                                    <div className="col-md-5 mb-4 offset-md-1">
                                        <div className="section-title " data-aos="fade-up" data-aos-duration="1200"
                                            data-aos-delay="200">
                                            <h2>Our Team</h2>
                                            <p className="text-start">We are team of ESG experts, engineers, and technologists all driven by the same goal
                                    to shape the future of sustainable business. </p>
                                            <p className="text-start">
                                                <strong className="tet-dark">Experience</strong>{" "}
                                    5-10 years of ESG domain experience, having worked with companies globally in their
                                    decarbonisation journey.

                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="ptb-100 bg-sand">
                            <div className="container">
                                <div className="section-title style3 text-center mb-40 pb-5" data-aos="fade-up" data-aos-duration="1200"
                                    data-aos-delay="200">
                                    <h2>Core Team</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 mb-5" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <figure className="ct_team_card">
                                            <div className="ct_team_card_img">
                                                <img src={NikhilImageIcon} alt="img" />
                                            </div>
                                            <figcaption>
                                                <h4>Nikhil Jain</h4>
                                                <p>Founder</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-3 col-sm-6 mb-5" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <figure className="ct_team_card">
                                            <div className="ct_team_card_img">
                                                <img src={NirdeshImageIcon} alt="img" />
                                            </div>
                                            <figcaption>
                                                <h4>Nirdesh Badjatya</h4>
                                                <p>Co-Founder</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-3 col-sm-6 mb-5" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <figure className="ct_team_card">
                                            <div className="ct_team_card_img">
                                                <img src={Team_4} alt="img" />
                                            </div>
                                            <figcaption>
                                                <h4>Karel Kotoun </h4>
                                                <p>ESG Lead Manager</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-3 col-sm-6 mb-5" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <figure className="ct_team_card">
                                            <div className="ct_team_card_img">
                                                <img src={Team_3} alt="img" />
                                            </div>
                                            <figcaption>
                                                <h4>Jan Zverina </h4>
                                                <p>ESG Lead Manager</p>
                                            </figcaption>
                                        </figure>
                                    </div>

                                    <div className="col-md-3 col-sm-6 mb-5" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <figure className="ct_team_card">
                                            <div className="ct_team_card_img">
                                                <img src={AtulImageIcon} alt="img" />
                                            </div>
                                            <figcaption>
                                                <h4>Atul Joshi</h4>
                                                <p>Senior Engagement Manager</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-3 col-sm-6 mb-5" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <figure className="ct_team_card">
                                            <div className="ct_team_card_img">
                                                <img src={SwatiImageIcon} alt="img" />
                                            </div>
                                            <figcaption>
                                                <h4>Swati Jain</h4>
                                                <p>Strategy officer</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-3 col-sm-6 mb-5" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <figure className="ct_team_card">
                                            <div className="ct_team_card_img">
                                                <img src={ViditImageIcon} alt="img" />
                                            </div>
                                            <figcaption>
                                                <h4>Vidit Bhardwaj</h4>
                                                <p>Senior Analyst</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-3 col-sm-6 mb-5" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <figure className="ct_team_card">
                                            <div className="ct_team_card_img">
                                                <img src={SwatiVermaImageIcon} alt="img" />
                                            </div>
                                            <figcaption>
                                                <h4>Swati Verma</h4>
                                                <p>Analyst</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-3 col-sm-6 mb-5" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <figure className="ct_team_card">
                                            <div className="ct_team_card_img">
                                                <img src={AmitImageIcon} alt="img" />
                                            </div>
                                            <figcaption>
                                                <h4>Amit Holkar</h4>
                                                <p>Senior Tech Lead</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-3 col-sm-6 mb-5" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <figure className="ct_team_card">
                                            <div className="ct_team_card_img">
                                                <img src={AishwaryaImageIcon} alt="img" />
                                            </div>
                                            <figcaption>
                                                <h4>Aishwarya Holkar</h4>
                                                <p>Senior Tech Lead</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="ptb-100">
                            <div className="container">
                                <div className="section-title style3 text-center mb-40 pb-5" data-aos="fade-up" data-aos-duration="1200"
                                    data-aos-delay="200">
                                    <h2>Sectors Worked In </h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <figure className="ct_sectors_block">
                                            <div>
                                                <img src={RelaEstateImageIcon} alt="" />
                                            </div>
                                            <figcaption>
                                                <h4 className="mb-0">Real-estate</h4>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <figure className="ct_sectors_block">
                                            <div>
                                                <img src={ItGettyImageIcon} alt="" />
                                            </div>
                                            <figcaption>
                                                <h4 className="mb-0">IT</h4>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <figure className="ct_sectors_block">
                                            <div>
                                                <img src={FinanceImageIcon} alt="" />
                                            </div>
                                            <figcaption>
                                                <h4 className="mb-0">Finance</h4>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-duration="1200"
                                        data-aos-delay="200">
                                        <figure className="ct_sectors_block">
                                            <div>
                                                <img src={TextileImageIcon} alt="" />
                                            </div>
                                            <figcaption>
                                                <h4 className="mb-0">Textile sector </h4>
                                            </figcaption>
                                        </figure>
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


