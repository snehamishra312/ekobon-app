import React from "react";
// Customizable Area Start
import IndividualProjectController, {
  Props,
} from "./IndividualProjectController.web";
import { Row, Col } from "antd";
import {
  SECONDSQUARE,
  PROJECTCLIMATEWIND,
  climateicon1,
  climateicon2,
  climateicon3,
  goal1,
  goal8,
  goal7,
  goal6,
  goal2,
  goal3,
  goal4,
  goal5,
  goal9,
  goal10,
  goal11,
  goal12,
  goal13,
  goal14,
  goal15,
  goal16,
  goal17,
  goal18,
  PAGES
} from "../assets";
import "./IndividualProject.web.css";
import "../IndividaualScreen.web.css";
import DashboardMiddleCarausal from "../DashboardMiddleCarausal.web";
import ClimateProjectMiddleCarousel from "../LandingPages/ClimateProjectMiddleCarousel.web";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Carousel from "react-elastic-carousel";
import Item from "antd/lib/list/Item";
import { Link } from "react-router-dom";
import IndividualProjectMain from "./IndividualProjectMain.web";

export class IndividualProject extends IndividualProjectController {
  renderFirstProjectBlock = () => {
    return (
      <div className="Individual_Project_MidScreen_Main">
        <Row gutter={16}>
          <Col lg={18} md={18}>
            <div className="Individual_Project_first_block">
              <div className="first_Project_block1">
                <div className="first_Project_block1_Main">
                  <h1 className="first_Project_block_head">
                    Invest in Climate Project in better future
                  </h1>
                  <p className="first_Project_block_P">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus eum excepturi, tenetur nesciunt facere voluptate
                    doloremque rem impedit vero. Molestiae quisquam libero
                    distinctio facere eveniet architecto possimus suscipit vitae
                    tempore nisi reprehenderit dolor voluptate, repudiandae
                    reiciendis optio ipsum quibusdam quas aspernatur at autem?
                    Quam aliquid atque deleniti voluptatum ea neque?
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className=" Individual_first_square individual_first_project_square">
              <div className="firstsquare_box">
                <img src={SECONDSQUARE} alt="LOGO" className="blockImg" />
                {/* <div className="individual_first_projectP"> */}
                <p className="firstsquareN">
                  0
                  <span className="first_blockT  first_block_projectT">
                    &nbsp; tonnes
                  </span>
                </p>

                <p className="firstsquareT  indv_project_squareT">
                  Total Carbon Offset Investing in project
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  renderIndividualMiddleScreenMyProject = () => {
    const { isUserLoggedIn, myProjectsList } = this.state;
    if(!myProjectsList)
    return;
    return (
      <>
        <div className="Carousel_Main  Carousel_Project_Main">
          <DashboardMiddleCarausal
            dataList={myProjectsList?.data}
            isUserLoggedIn={isUserLoggedIn}
            heading={"My Projects"}
          />
        </div>
      </>
    );
  };

  renderIndividualMiddleScreenRenawableEnergy = () => {
    const { isUserLoggedIn, myProjectsList } = this.state;
    {console.log(myProjectsList,"myProjectsList")}
    if(!myProjectsList)
    return(
      <div className="T_M_Header_Center">
          <img src={PAGES} alt="img" className="   T_M_windmil_image" />
          <p className="s_m_boxP T_m_boxP">
            No Orders to show Start Offsetting your Carbon
          </p>
        </div>
    )
    return (
      <>      
       {Object.keys(myProjectsList?.meta?.projects).map((item: any) => { 
        return(
        <div className="Carousel_Main  Carousel_Project_Main">
          <ClimateProjectMiddleCarousel
            dataList={myProjectsList?.meta.projects[item].data}
            isUserLoggedIn={isUserLoggedIn}
            heading={item}
          />
        </div>
      )})}
      </>
    );
  };


  renderInvestInClimateProject = () => {
    return (
      <div className="Individual_Project_first_block IndividualInvestIn_Climate">
        <div className="first_Project_block1 IndividualInvestIn_Climate_block1 investin-climate-sec">
          <div className="first_Project_block1_Main IndividualInvestIn_Climate_block1_Main investin-climate-sec-main">
            <h1 className="first_Project_block_head">
              Invest in Climate Projects
            </h1>
            <div className="IndividualInvestIn_ClimateP">
              <p className="first_Project_block_P">
              You can invest in climate projects by offsetting your carbon footprint using
                <span className="InvestClimateS">
                  <Link to={window.location.pathname === "/individual/project" ?"/individual/offset-onetime": "/business/offset-employee"}>One Time</Link>
                </span>
                or
                <span className="InvestClimateS">
                  <Link to={window.location.pathname === "/individual/project" ? "/individual/offset-subscription": "/business/subscription-employee"}>Subscription</Link>
                </span>
                based Offsets. You can also
                <span className="InvestClimateS">
                  <Link to={window.location.pathname === "/individual/project" ? "/individual/plant-tree": "/business/plant-tree"}>Plant Trees</Link>
                </span>
                {window.location.pathname === "/individual/project" ? (
                <>
                and
                <span className="InvestClimateS">
                  <Link to="/individual/giftCard"> Gift Cards.</Link>
                </span>
                  </>
                ):"."}
              </p>
              <div />
            </div>
            <div />
          </div>
          <div className="invest_climate_project_img_main investin-climate-sec-img-main">
            <img
              src={PROJECTCLIMATEWIND}
              alt="img"
              className="T_m_wind_inner invest_climate_project_img investin-climate-sec-img"
            />
          </div>
        </div>
      </div>
    );
  };

  renderSustainableDown = () => {
    let carousel = React.createRef();
    const images = [
      goal1,
      goal2,
      goal3,
      goal4,
      goal5,
      goal6,
      goal7,
      goal8,
      goal9,
      goal10,
      goal11,
      goal12,
    ];
    const images2 = [goal13, goal14, goal15, goal16, goal17, goal18];
    const renderPaginationDots = (
      pages: any,
      activePage: any,
      onClick: any
    ) => {
      return (
        <div className="dotsRow">
          {pages.map((itemPage: any) => {
            const isActivePage = activePage === itemPage;
            return (
              <div
                onClick={() => onClick(itemPage)}
                className="dots"
                style={{
                  backgroundColor: isActivePage ? "#30458c" : "#7c8188",
                }}
              />
            );
          })}
        </div>
      );
    };

    return (
      <div className="container climate_project">
        {/* <div className="Carousel_Main  Carousel_Project_Main"> */}
        <IoIosArrowBack
          className="yt_slider_back yt_slider_back_climate "
          //@ts-ignore
          onClick={() => carousel.current.slidePrev()}
        />
        <Carousel
          itemsToShow={1}
          // enableAutoPlay
          autoPlaySpeed={1500}
          isRTL={false}
          showArrows={false}
          focusOnSelect={false}
          //@ts-ignore
          renderPagination={({ pages, activePage, onClick }) => {
            return renderPaginationDots(pages, activePage, onClick);
          }}
          //@ts-ignore
          ref={carousel}
        >
          <Row>
            {images.map((item: any) => {
              return (
                <Col lg={4} className="image_height_div">
                  <img
                    src={item}
                    alt="img"
                    className="project_standard sustin_img sustain-goals climate_images"
                  />
                </Col>
              );
            })}
          </Row>
          <Row>
            <Item>
              {images2.map((item: any) => {
                return (
                  <Col lg={4}>
                    <img
                      src={item}
                      alt="img"
                      className="project_standard sustin_img sustain-goals climate_images_2"
                    />
                  </Col>
                );
              })}
            </Item>
          </Row>
        </Carousel>
        <IoIosArrowForward
          className="yt_slider_forward  yt_slider_forward_climate"
          width="20"
          height="20"
          //@ts-ignore
          onClick={() => carousel.current.slideNext()}
        />
      </div>
    );
  };

  renderclimateuppericonsection = () => {
    return (
      <div>
        <Row gutter={16} justify="center">
          <Col lg={6}>
            <img src={climateicon1} alt="img" className="climate_images_icon" />
          </Col>
          <Col lg={6}>
            <img src={climateicon2} alt="img" className="climate_images_icon" />
          </Col>
          <Col lg={6}>
            <img src={climateicon3} alt="img" className="climate_images_icon" />
          </Col>
        </Row>
      </div>
    );
  };

  renderclimateuppertext = () => {
    return (
      <>
        <p className="climate_upper_test">
          Ekobon handpicks climate projects that deliver measurable benefits
          aligned to the goals of the Paris Agreement with emphasis on community
          development
          <br />
          All Ekobon projects contribute to the achievement of the
          <span>Sustainable Development Goals</span> (SDG) set up by the United
          Nations
        </p>
      </>
    );
  };

  render() {
    return (
      <>
        <IndividualProjectMain />
        <div className="Indivdual_Project_MiddleContainer">
          {this.renderIndividualMiddleScreenMyProject()}
          {this.renderIndividualMiddleScreenRenawableEnergy()}
          {this.renderInvestInClimateProject()}
        </div>
      </>
    );
  }
}

export default IndividualProject as React.ComponentType<any>;
// Customizable Area End
