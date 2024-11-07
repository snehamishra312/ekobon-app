import React from "react"
import Pro1Controller, {
    Props,
} from "./Our_approachController.web"
import Our_approachController from "./Our_approachController.web"
import {
    LOGO, White_Logo, Offset, Planet_Earth, Gift_Card, ESG, API11, Carbon_Neutral, Lca_Icon,
    Footer_Shape_3, Organization, Business_Tab, Individual_Svg, IndvOffImg, Icons8Windmill, Icons8Recycle,
    Icons8Setting
} from '../assets';

export default class Our_approach extends Our_approachController {
    constructor(props: Props) {
        super(props)
    }
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
                        <div className="cti-breadcrumb-wrap bg-f cti_contact_bg">
                            <div className="container">
                                <div className="cti-banner-text text-center">
                                    <h1 className="text-uppercase">
                                        WE NEED TO JOIN HANDS TO <br />
                                    TACKLE <span className="fw-bold">CLIMATE CHANGE {" "}</span><br />
                                      TOGETHER
                                      </h1>
                                    <p>Ekobon is our effort to facilitate the same</p>
                                </div>
                            </div>
                        </div>

                        <section className="cti-carbon-section">
                            <div className="container">
                                <div className="cti_carbon_subSection text-center">
                                    <h3 className="text-uppercase mb-0">
                                        Whether you are an organization
              </h3>
                                    <h3 className="text-uppercase">
                                        or individual, we have a {" "}
                                        <span className="fw-bold">carbon offsetting solution</span> for you
              </h3>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-lg-6">
                                        <div>
                                            <div className="cti_offsetting_content d-flex align-items-center">
                                                <img
                                                    src={Organization}
                                                    alt="organisations"
                                                    width="100px"
                                                />
                                                <p>Organizations</p>
                                            </div>
                                            <p className="cti_description pb-2 text-start">
                                                You can calculate the impact of your business operations,
                                                choose how much you want to offset and make a contribution
                                                to the climate project of your choice, Ekobon buys carbon
                                                credits and deregisters them on your behalf.
                  </p>
                                        </div>
                                        <div className="mt-3">
                                            <img
                                                src={Business_Tab}
                                                alt="bussiness_dash"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div>
                                            <div className="cti_offsetting_content d-flex align-items-center">
                                                <img
                                                    src={Individual_Svg}
                                                    alt="organisations"
                                                    width="100px"
                                                />
                                                <p>Individuals</p>
                                            </div>
                                            <p className="cti_description pb-2 text-start">
                                                Know your carbon footprint and compare with annual average
                                                of your country of residence, choose between one time
                                                offsetting and subscription, select the amount you want to
                                                offset and pick the climate projects you are passionate
                                                about
                  </p>
                                        </div>
                                        <div className="mt-3">
                                            <img
                                                src={IndvOffImg}
                                                alt="bussiness_dash"
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="carbon_offsetting_section pt-0">
                            <div className="container">
                                <div className="cti_offsetting_subSection text-center pb-2">
                                    <h2 className="text-uppercase mb-0">Understand how</h2>
                                    <h2 className="text-uppercase bold_class">Carbon Offsetting Works</h2>
                                </div>
                                <div className="row mt-4 gy-2 gy-md-5">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="cti_offsetting_content-1">
                                            <p className="cti_para text-start">
                                                CO2 emissions are behind the global temperature rise. Humans
                                                cannot stop emitting CO2 and there is an environmental
                                                footprint of existence. The growing population and evolving
                                                human activities are responsible for the constant release of
                                                CO2 in the atmosphere.
                  </p>
                                            <p className="cti_para_2 text-start">
                                                The perils of climate change are not unknown. We all need to
                                                take the right steps before the alarming condition turns
                                                into a calamity.
                  </p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-2 text-center align-self-center d-none d-md-block"
                                    >
                                        <div className="arrow_image">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-5 bg-white">
                                        <div className="cti_offset_work">
                                            <img src={Icons8Windmill} alt="wind" />
                                            <h5>
                                                Neutralize the CO2 you produce by funding climate projects
                                                that help eliminate the CO2 equivalent to the amount you
                                                generate.
                  </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-5 d-none d-md-block text-center">
                                        <div className="cti_arrow_down_blue">
                                            <i className="fa-solid fa-arrow-down"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-5 offset-2 d-none d-md-block text-center">
                                        <div className="cti_arrow_only">
                                            <i className="fa-solid fa-arrow-down"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-5 bg-white">
                                        <div className="cti_offset_work">
                                            <img src={Icons8Recycle} alt="wind" />
                                            <div>
                                                <h5>
                                                    Be conscious about your actions <br />
                      and try to minimize your footprint
                    </h5>
                                                <hr />
                                                <p className="cti_cards_content text-start">
                                                    Recycle more, Avoid deforestation, Make conscious choices,
                                                    Walk more, Use public transport.
                    </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-5 offset-md-2 offset-0 bg-white">
                                        <div className="cti_offset_work">
                                            <img src={Icons8Setting} alt="wind" />
                                            <h5>
                                                Ekobon carefully chooses and offers you a selection of
                                                climate projects. Choose your project and invest based on
                                                your budget
                  </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-5 d-none d-md-block text-center">
                                        <div className="cti_arrow_down_blue">
                                            <i className="fa-solid fa-arrow-down"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-5 offset-2 d-none d-md-block text-center">
                                        <div className="cti_arrow_only">
                                            <i className="fa-solid fa-arrow-down"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-5 bg-white">
                                        <div className="cti_offset_work">
                                            <img src={Icons8Recycle} alt="wind" />
                                            <div>
                                                <h5>
                                                    Together we will give back to the <br />
                      world, more than we take from it.
                    </h5>
                                                <hr />
                                                <p className="cti_cards_content text-start">
                                                    Together we will create an impact
                    </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-none d-md-block"></div>
                                    <div className="col-sm-12 col-md-5 bg-white">
                                        <div className="cti_offset_work">
                                            <img src={Icons8Recycle} alt="wind" />
                                            <div>
                                                <h5>
                                                    With your funding, Ekobon will buy carbon credits on your
                                                    behalf and deregister them.
                    </h5>
                                                <hr />
                                                <p className="cti_cards_content text-start">
                                                    Every carbon credit that you help deregister will mean
                                                    neutralization of 1 tonne of CO2.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="cti-breadcrumb-wrap bg-f cti_contact_bg_Sub_footer">
                            <div className="container">
                                <div className="cti_sub_footer_text">
                                    <h5 className="text-uppercase mb-3">
                                        Consciously we can {" "}
                                        <span className="fw-bolder cti_subFooter">tackle <br />climate change</span>
                                    </h5>
                                    <p className="sub-footer-textP text-start">
                                        We have taken the first step. Would you join us?<br />Not only
                do we help you identify the best projects, we constantly monitor
                the impact of your actions too. With regular updates of projects
                and the change they facilitate, you can stay assured that your
                funds are reaping the desired results.
               </p>
                                </div>
                            </div>
                        </div>
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
