import React from "react"
import Pro1Controller, {
    Props,
} from "./Life_CycleController.web"
import Life_CycleController from "./Life_CycleController.web"
import {
    LOGO, White_Logo, Offset, Planet_Earth, Assessment_frameworkIcon, Gift_Card, ESG, API11, Lca_Icon, Carbon_Neutral, Footer_Shape_3, Life_Cycle_Img,
    Carbon_Footprint_Icon, Eko_Points_icon
} from '../assets';


export default class Life_Cycle extends Life_CycleController {
    constructor(props: Props) {
        super(props)
    }
    render() {
        const {
            isSideBarClick,
            isScroll,
            onOpenResources1,
            isDarkMode,
            onMenuOpen,
            loginFlag,
            onOpenIndividuals,
            onOpenCorporates,
            onOpenResources,
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
                    <div className="content-wrapper">
                        <div className="breadcrumb-wrap bg-f ct_service_bg ct_life_cycle_bg">
                            <div className="container">
                                <div
                                    className="breadcrumb-title"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="200"
                                >
                                    <h2>Life Cycle Assessment (LCA) & Environmental Product Declaration (EPD)
</h2>
                                    <ul className="breadcrumb-menu list-style">
                                        <li><a href="/">Home </a></li>
                                        <li><a href="/service">Services </a></li>
                                        <li>Life Cycle Assessment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <section className="ptb-100 ct_light_yellow_bg ct_carbon_about_sec">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 mx-auto mb-5">
                                        <p>
                                            LCA is the science-based method used to evaluate the environmental impact of a product or process throughout its entire life cycle. Throughout an LCA, all stages of a product's life cycle are accounted for, encompassing resource consumption, material processing, product fabrication, distribution, utilization, and even disposal at the end of its life.
                </p>
                                    </div>

                                </div>
                                <div className="row align-items-center">
                                    <div
                                        className="col-md-6 mb-4"
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                        data-aos-delay="200"
                                    >
                                        <div className="ct_life_cycle_img">
                                            <img
                                                src={Life_Cycle_Img} alt=""
                                            />
                                        </div>

                                    </div>
                                    <div
                                        className="col-md-6 mb-4"
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                        data-aos-delay="200"
                                    >
                                        <div className="ct_neutral_right_cnt">
                                            <div className="section-title style3 mb-40">
                                                <h2>Why is LCA needed?</h2>
                                                <p className="text-start">
                                                    An LCA can be used to identify so-called “hotspots” in the life cycle indicating where the company or its suppliers can adapt their processes to decrease their environmental impact.
                    </p>

                                                <p className="text-start">
                                                    An LCA can thus be used for learning about your own supply chain and its impact and for informed decision making to reduce your environmental impact.
                    </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="ptb-100">
                            <div className="container">
                                <div className="row">
                                    <div
                                        className="section-title style3 text-center mb-40 pb-5"
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                        data-aos-delay="200"
                                    >
                                        <h2>Life Cycle Assessment with Ekobon</h2>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div
                                        className="col-md-4 mb-5 mb-md-0 ct_chain_connection"
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                        data-aos-delay="200"
                                    >
                                        <div className="ct_how_work_box ">
                                            <div className="ct_how_work_icon">
                                                <h2>01</h2>
                                            </div>
                                            <div className="ct_how_work_cnt">
                                                <h4>Assess any material</h4>
                                                <p>
                                                    Evaluate materials like glass, plastic, metals, fabrics and more. Suggest alternatives with lower carbon footprints, high recyclability, and reduced toxicity
                    </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-4 mb-5 mb-md-0 position-relative ct_chain_connection"
                                        data-aos="fade-up"
                                        data-aos-duration="1400"
                                        data-aos-delay="200"
                                    >
                                        <div className="ct_how_work_box">
                                            <div className="ct_how_work_icon">
                                                <h2>02</h2>
                                            </div>
                                            <div className="ct_how_work_cnt">
                                                <h4>Zoom into hotspots</h4>
                                                <p>
                                                    Analyse the value chain for the environmental impact. Identify the major contributors to your impact and make necessary changes
                    </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-4 mb-5 mb-md-0"
                                        data-aos="fade-up"
                                        data-aos-duration="1600"
                                        data-aos-delay="200"
                                    >
                                        <div className="ct_how_work_box">
                                            <div className="ct_how_work_icon">
                                                <h2>03</h2>
                                            </div>
                                            <div className="ct_how_work_cnt">
                                                <h4>Multi-level Insights</h4>
                                                <p>
                                                    Get detailed insight of the environmental impact of supply chain, company processes and products
                    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="ptb-100 pt-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7 mx-auto">
                                        <div>
                                            <p style={{ textAlign: "center" }} className="mb-0">There are several ways an LCA can be undertaken: Cradle-to-gate, Cradle-to-grave, Cradle-to-cradle. The method is standardized and guided by ISO 14044:2006, which makes the results comparable globally and across products. According to the standard, an LCA should consist of the following stages:</p>
                                        </div>
                                        <div className="ct_assessment_img">
                                            <img src={Assessment_frameworkIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="ptb-100 pt-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 mx-auto ">
                                        <div>
                                            <h2>How Ekobon can you help you with LCA assessment</h2>
                                            <ul className="ps-0 pt-5 ct_lca_assesment_list">
                                                <li className="d-flex align-items-center gap-3 mb-3">
                                                    <div className="flex-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                            <g filter="url(#filter0_d_22_476)">
                                                                <rect x="3" y="0.359375" width="44" height="44" rx="11.3333" fill="#F1F7FF" />
                                                                <rect x="3.66667" y="1.02604" width="42.6667" height="42.6667" rx="10.6667" stroke="#86AF48" stroke-width="1.33333" />
                                                            </g>
                                                            <path d="M30.8203 11.1092C28.244 9.77632 25.2882 9.3681 22.4471 9.95273C19.6059 10.5374 17.0515 12.0795 15.2107 14.3212C13.3699 16.563 12.3543 19.3687 12.3337 22.2693C12.3131 25.17 13.2886 27.9898 15.0973 30.2576C16.906 32.5253 19.4382 34.1036 22.2708 34.7286C25.1033 35.3536 28.0646 34.9875 30.6597 33.6914C33.2547 32.3953 35.3263 30.2479 36.5282 27.6079C37.7301 24.9679 37.9895 21.9954 37.263 19.1871L35.4772 19.6491C36.0978 22.0484 35.8762 24.588 34.8494 26.8436C33.8225 29.0991 32.0526 30.9338 29.8354 32.0411C27.6183 33.1485 25.0883 33.4613 22.6682 32.9273C20.2482 32.3933 18.0847 31.0449 16.5394 29.1074C14.9941 27.1698 14.1607 24.7607 14.1783 22.2825C14.1959 19.8042 15.0636 17.4072 16.6363 15.4918C18.209 13.5765 20.3914 12.259 22.8189 11.7595C25.2463 11.26 27.7716 11.6088 29.9727 12.7476L30.8203 11.1092Z" fill="#86AF48" fill-opacity="0.5" />
                                                            <path d="M21.6666 21.026L24.6666 24.3593L35.3333 13.6926" stroke="#86AF48" stroke-width="2" stroke-linecap="round" />
                                                            <defs>
                                                                <filter id="filter0_d_22_476" x="0.133333" y="0.159375" width="49.7333" height="49.7333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dy="2.66667" />
                                                                    <feGaussianBlur stdDeviation="1.43333" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.52549 0 0 0 0 0.686275 0 0 0 0 0.282353 0 0 0 0.4 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_476" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_476" result="shape" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <h5 className="mb-0">Setting the goal and scope of your assessment</h5>
                                                </li>
                                                <li className="d-flex align-items-center gap-3 mb-3">
                                                    <div className="flex-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                            <g filter="url(#filter0_d_22_476)">
                                                                <rect x="3" y="0.359375" width="44" height="44" rx="11.3333" fill="#F1F7FF" />
                                                                <rect x="3.66667" y="1.02604" width="42.6667" height="42.6667" rx="10.6667" stroke="#86AF48" stroke-width="1.33333" />
                                                            </g>
                                                            <path d="M30.8203 11.1092C28.244 9.77632 25.2882 9.3681 22.4471 9.95273C19.6059 10.5374 17.0515 12.0795 15.2107 14.3212C13.3699 16.563 12.3543 19.3687 12.3337 22.2693C12.3131 25.17 13.2886 27.9898 15.0973 30.2576C16.906 32.5253 19.4382 34.1036 22.2708 34.7286C25.1033 35.3536 28.0646 34.9875 30.6597 33.6914C33.2547 32.3953 35.3263 30.2479 36.5282 27.6079C37.7301 24.9679 37.9895 21.9954 37.263 19.1871L35.4772 19.6491C36.0978 22.0484 35.8762 24.588 34.8494 26.8436C33.8225 29.0991 32.0526 30.9338 29.8354 32.0411C27.6183 33.1485 25.0883 33.4613 22.6682 32.9273C20.2482 32.3933 18.0847 31.0449 16.5394 29.1074C14.9941 27.1698 14.1607 24.7607 14.1783 22.2825C14.1959 19.8042 15.0636 17.4072 16.6363 15.4918C18.209 13.5765 20.3914 12.259 22.8189 11.7595C25.2463 11.26 27.7716 11.6088 29.9727 12.7476L30.8203 11.1092Z" fill="#86AF48" fill-opacity="0.5" />
                                                            <path d="M21.6666 21.026L24.6666 24.3593L35.3333 13.6926" stroke="#86AF48" stroke-width="2" stroke-linecap="round" />
                                                            <defs>
                                                                <filter id="filter0_d_22_476" x="0.133333" y="0.159375" width="49.7333" height="49.7333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dy="2.66667" />
                                                                    <feGaussianBlur stdDeviation="1.43333" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.52549 0 0 0 0 0.686275 0 0 0 0 0.282353 0 0 0 0.4 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_476" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_476" result="shape" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <h5 className="mb-0">Collecting data for a life cycle inventory</h5>
                                                </li>
                                                <li className="d-flex align-items-center gap-3 mb-3">
                                                    <div className="flex-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                            <g filter="url(#filter0_d_22_476)">
                                                                <rect x="3" y="0.359375" width="44" height="44" rx="11.3333" fill="#F1F7FF" />
                                                                <rect x="3.66667" y="1.02604" width="42.6667" height="42.6667" rx="10.6667" stroke="#86AF48" stroke-width="1.33333" />
                                                            </g>
                                                            <path d="M30.8203 11.1092C28.244 9.77632 25.2882 9.3681 22.4471 9.95273C19.6059 10.5374 17.0515 12.0795 15.2107 14.3212C13.3699 16.563 12.3543 19.3687 12.3337 22.2693C12.3131 25.17 13.2886 27.9898 15.0973 30.2576C16.906 32.5253 19.4382 34.1036 22.2708 34.7286C25.1033 35.3536 28.0646 34.9875 30.6597 33.6914C33.2547 32.3953 35.3263 30.2479 36.5282 27.6079C37.7301 24.9679 37.9895 21.9954 37.263 19.1871L35.4772 19.6491C36.0978 22.0484 35.8762 24.588 34.8494 26.8436C33.8225 29.0991 32.0526 30.9338 29.8354 32.0411C27.6183 33.1485 25.0883 33.4613 22.6682 32.9273C20.2482 32.3933 18.0847 31.0449 16.5394 29.1074C14.9941 27.1698 14.1607 24.7607 14.1783 22.2825C14.1959 19.8042 15.0636 17.4072 16.6363 15.4918C18.209 13.5765 20.3914 12.259 22.8189 11.7595C25.2463 11.26 27.7716 11.6088 29.9727 12.7476L30.8203 11.1092Z" fill="#86AF48" fill-opacity="0.5" />
                                                            <path d="M21.6666 21.026L24.6666 24.3593L35.3333 13.6926" stroke="#86AF48" stroke-width="2" stroke-linecap="round" />
                                                            <defs>
                                                                <filter id="filter0_d_22_476" x="0.133333" y="0.159375" width="49.7333" height="49.7333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dy="2.66667" />
                                                                    <feGaussianBlur stdDeviation="1.43333" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.52549 0 0 0 0 0.686275 0 0 0 0 0.282353 0 0 0 0.4 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_476" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_476" result="shape" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <h5 className="mb-0">Assessing the environmental impact based on the data</h5>
                                                </li>
                                                <li className="d-flex align-items-center gap-3 mb-3">
                                                    <div className="flex-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                            <g filter="url(#filter0_d_22_476)">
                                                                <rect x="3" y="0.359375" width="44" height="44" rx="11.3333" fill="#F1F7FF" />
                                                                <rect x="3.66667" y="1.02604" width="42.6667" height="42.6667" rx="10.6667" stroke="#86AF48" stroke-width="1.33333" />
                                                            </g>
                                                            <path d="M30.8203 11.1092C28.244 9.77632 25.2882 9.3681 22.4471 9.95273C19.6059 10.5374 17.0515 12.0795 15.2107 14.3212C13.3699 16.563 12.3543 19.3687 12.3337 22.2693C12.3131 25.17 13.2886 27.9898 15.0973 30.2576C16.906 32.5253 19.4382 34.1036 22.2708 34.7286C25.1033 35.3536 28.0646 34.9875 30.6597 33.6914C33.2547 32.3953 35.3263 30.2479 36.5282 27.6079C37.7301 24.9679 37.9895 21.9954 37.263 19.1871L35.4772 19.6491C36.0978 22.0484 35.8762 24.588 34.8494 26.8436C33.8225 29.0991 32.0526 30.9338 29.8354 32.0411C27.6183 33.1485 25.0883 33.4613 22.6682 32.9273C20.2482 32.3933 18.0847 31.0449 16.5394 29.1074C14.9941 27.1698 14.1607 24.7607 14.1783 22.2825C14.1959 19.8042 15.0636 17.4072 16.6363 15.4918C18.209 13.5765 20.3914 12.259 22.8189 11.7595C25.2463 11.26 27.7716 11.6088 29.9727 12.7476L30.8203 11.1092Z" fill="#86AF48" fill-opacity="0.5" />
                                                            <path d="M21.6666 21.026L24.6666 24.3593L35.3333 13.6926" stroke="#86AF48" stroke-width="2" stroke-linecap="round" />
                                                            <defs>
                                                                <filter id="filter0_d_22_476" x="0.133333" y="0.159375" width="49.7333" height="49.7333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dy="2.66667" />
                                                                    <feGaussianBlur stdDeviation="1.43333" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.52549 0 0 0 0 0.686275 0 0 0 0 0.282353 0 0 0 0.4 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_476" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_476" result="shape" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <h5 className="mb-0">Data interpretation</h5>
                                                </li>
                                                <li className="d-flex align-items-center gap-3 mb-3">
                                                    <div className="flex-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                            <g filter="url(#filter0_d_22_476)">
                                                                <rect x="3" y="0.359375" width="44" height="44" rx="11.3333" fill="#F1F7FF" />
                                                                <rect x="3.66667" y="1.02604" width="42.6667" height="42.6667" rx="10.6667" stroke="#86AF48" stroke-width="1.33333" />
                                                            </g>
                                                            <path d="M30.8203 11.1092C28.244 9.77632 25.2882 9.3681 22.4471 9.95273C19.6059 10.5374 17.0515 12.0795 15.2107 14.3212C13.3699 16.563 12.3543 19.3687 12.3337 22.2693C12.3131 25.17 13.2886 27.9898 15.0973 30.2576C16.906 32.5253 19.4382 34.1036 22.2708 34.7286C25.1033 35.3536 28.0646 34.9875 30.6597 33.6914C33.2547 32.3953 35.3263 30.2479 36.5282 27.6079C37.7301 24.9679 37.9895 21.9954 37.263 19.1871L35.4772 19.6491C36.0978 22.0484 35.8762 24.588 34.8494 26.8436C33.8225 29.0991 32.0526 30.9338 29.8354 32.0411C27.6183 33.1485 25.0883 33.4613 22.6682 32.9273C20.2482 32.3933 18.0847 31.0449 16.5394 29.1074C14.9941 27.1698 14.1607 24.7607 14.1783 22.2825C14.1959 19.8042 15.0636 17.4072 16.6363 15.4918C18.209 13.5765 20.3914 12.259 22.8189 11.7595C25.2463 11.26 27.7716 11.6088 29.9727 12.7476L30.8203 11.1092Z" fill="#86AF48" fill-opacity="0.5" />
                                                            <path d="M21.6666 21.026L24.6666 24.3593L35.3333 13.6926" stroke="#86AF48" stroke-width="2" stroke-linecap="round" />
                                                            <defs>
                                                                <filter id="filter0_d_22_476" x="0.133333" y="0.159375" width="49.7333" height="49.7333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dy="2.66667" />
                                                                    <feGaussianBlur stdDeviation="1.43333" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.52549 0 0 0 0 0.686275 0 0 0 0 0.282353 0 0 0 0.4 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_476" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_476" result="shape" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <h5 className="mb-0">Preparation of an LCA report</h5>
                                                </li>
                                                <li className="d-flex align-items-center gap-3 mb-3">
                                                    <div className="flex-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                                            <g filter="url(#filter0_d_22_476)">
                                                                <rect x="3" y="0.359375" width="44" height="44" rx="11.3333" fill="#F1F7FF" />
                                                                <rect x="3.66667" y="1.02604" width="42.6667" height="42.6667" rx="10.6667" stroke="#86AF48" stroke-width="1.33333" />
                                                            </g>
                                                            <path d="M30.8203 11.1092C28.244 9.77632 25.2882 9.3681 22.4471 9.95273C19.6059 10.5374 17.0515 12.0795 15.2107 14.3212C13.3699 16.563 12.3543 19.3687 12.3337 22.2693C12.3131 25.17 13.2886 27.9898 15.0973 30.2576C16.906 32.5253 19.4382 34.1036 22.2708 34.7286C25.1033 35.3536 28.0646 34.9875 30.6597 33.6914C33.2547 32.3953 35.3263 30.2479 36.5282 27.6079C37.7301 24.9679 37.9895 21.9954 37.263 19.1871L35.4772 19.6491C36.0978 22.0484 35.8762 24.588 34.8494 26.8436C33.8225 29.0991 32.0526 30.9338 29.8354 32.0411C27.6183 33.1485 25.0883 33.4613 22.6682 32.9273C20.2482 32.3933 18.0847 31.0449 16.5394 29.1074C14.9941 27.1698 14.1607 24.7607 14.1783 22.2825C14.1959 19.8042 15.0636 17.4072 16.6363 15.4918C18.209 13.5765 20.3914 12.259 22.8189 11.7595C25.2463 11.26 27.7716 11.6088 29.9727 12.7476L30.8203 11.1092Z" fill="#86AF48" fill-opacity="0.5" />
                                                            <path d="M21.6666 21.026L24.6666 24.3593L35.3333 13.6926" stroke="#86AF48" stroke-width="2" stroke-linecap="round" />
                                                            <defs>
                                                                <filter id="filter0_d_22_476" x="0.133333" y="0.159375" width="49.7333" height="49.7333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dy="2.66667" />
                                                                    <feGaussianBlur stdDeviation="1.43333" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.52549 0 0 0 0 0.686275 0 0 0 0 0.282353 0 0 0 0.4 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_476" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_476" result="shape" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <h5 className="mb-0">An EPD is a verified report based on LCA, providing transparent, fact-based environmental data to support sustainability efforts and product differentiation</h5>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* Content wrapper end */}
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
                    {/* Footer Section Start */}
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

                    {/* Back-to-top button Start */}
                    {/* Back-to-top button End */}

                </div>
            </div>
        )
    }
}


