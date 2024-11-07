import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import HeaderWeb from "../../../../components/src/Header/Header.web";
import FooterWeb from "../../../../components/src/Footer/Footer.web";
import ClimateProjectMiddleCarousel from "./ClimateProjectMiddleCarousel.web";
import ClimateProjectsController from "./ClimateProjectsController.web";
import {
  PROJECTCLIMATEWIND,
  Climate17Goals,
  climateicon1,
  climateicon2,
  ScreenLoader,
  Climateicon3old,
} from "../assets";
import "../IndvProject/IndividualProject.web.css";
import { constants } from "../../../../components/src/types";
// import "../Business/BusinessProjectDetails/BusinessProDetail.css"
export class ClimateProject extends ClimateProjectsController {
  renderclimateuppertext = (
    CLIMATE_PARA1: any,
    CLIMATE_PARA2: any,
    CLIMATE_PARA3: any,
    CLIMATE_PARA4: any
  ) => {
    return (
      <>
        <p className="climate_upper_test">{CLIMATE_PARA1}</p>
        <p className="climate_upper_test">
          {CLIMATE_PARA2} <span>{CLIMATE_PARA3}</span> {CLIMATE_PARA4}
        </p>
      </>
    );
  };

  renderclimateuppericonsection = () => {
    return (
      <div>
        <Row gutter={16} justify="center" align="middle">
          <Col lg={6}>
            <img src={climateicon1} alt="img" className="climate_images_icon" />
          </Col>
          <Col lg={6}>
            <img src={climateicon2} alt="img" className="climate_images_icon" />
          </Col>
          <Col lg={6}>
            <img
              src={Climateicon3old}
              alt="img"
              className="climate_images_icon"
            />
          </Col>
        </Row>
      </div>
    );
  };

  render() {
    const {
      CLIMATE_HEADER1,
      CLIMATE_HEADER2,
      CLIMATE_PARA1,
      CLIMATE_PARA2,
      CLIMATE_PARA3,
      CLIMATE_PARA4,
      CLIMATE_PARA5,
      INVEST_CLIMATE,
      INVEST_BUSINESS,
      INVEST_INDIVIDUAL,
      STANDARDS,
    } = constants.ClimateProject;
    return (
      <>
        <HeaderWeb />
        <div className="landing-header climate_project_head">
          <div className="container">
            <h2>
              <span>{CLIMATE_HEADER1}</span> {CLIMATE_HEADER2}
            </h2>
          </div>
        </div>
        <div className="">
          <div className="container">
            {this.renderclimateuppertext(
              CLIMATE_PARA1,
              CLIMATE_PARA2,
              CLIMATE_PARA3,
              CLIMATE_PARA4
            )}
          </div>
          <div className="caurausal_main">
            <div className="container climate_project">
              <img src={Climate17Goals} alt="img" className="Climate17Goals" />
            </div>
          </div>
          <div className="container">
            <p className="standard_p">{CLIMATE_PARA5}</p>
            <h2 className="standard_h4 climate-project-standards-text">{STANDARDS}</h2>
          </div>
          <div className="container caurausal_main">
            {this.renderclimateuppericonsection()}
          </div>
          <div className="container">
            {this.state.isLoader ? (
              <div className="screen-loader-center">
                <img
                  src={ScreenLoader}
                  alt="loader"
                  className="screen-loader"
                />
              </div>
            ) : (
              <>
                {Object.keys(this.state.climateProjectList).map((item: any) => {
                  return (
                    <div className="Carousel_Main  Carousel_Project_Main">
                      <ClimateProjectMiddleCarousel
                        dataList={this.state.climateProjectList[item].data}
                        isUserLoggedIn={true}
                        heading={item}
                      />
                    </div>
                  );
                })}
              </>
            )}

            <div
              className="Individual_Project_first_block   IndividualInvestIn_Climate"
              style={{ marginBottom: "30px" }}
            >
              <div className="first_Project_block1  IndividualInvestIn_Climate_block1">
                <div className="first_Project_block1_Main  IndividualInvestIn_Climate_block1_Main">
                  <h1 className="first_Project_block_head">{INVEST_CLIMATE}</h1>
                  <Row
                    gutter={32}
                    className="carbon-app-bann-btn-sec home_section climate_project_home"
                  >
                    <Col lg={12} md={12} className="carbon-app-bann-green-btn">
                      <Link to="/individual/dashboard">
                        <button>{INVEST_INDIVIDUAL}</button>
                      </Link>
                    </Col>
                    <Col lg={12} md={12} className="carbon-app-bann-blue-btn">
                      <Link to="/business/dashboard">
                        <button>{INVEST_BUSINESS}</button>
                      </Link>
                    </Col>
                  </Row>
                  <div />
                </div>
                <div className="invest_climate_project_img_main">
                  <img
                    src={PROJECTCLIMATEWIND}
                    alt="img"
                    className="T_m_wind_inner  invest_climate_project_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterWeb />
      </>
    );
  }
}

export default ClimateProject;
