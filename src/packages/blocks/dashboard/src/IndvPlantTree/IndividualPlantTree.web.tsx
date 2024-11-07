import React from "react";
// Customizable Area Start
import IndividualPlantTreeController, {
  Props,
} from "./IndividualPlantTreeController.web";
import "./IndvPlantTreeWeb.css";
import {
  FIRSTSQUARE,
  packageMaintenance,
  packagePlant,
  packageGrowth,
  miyawakiGrowth,
  miyawakiCarbon,
  miyawakiDiversity,
  miyawakiGreen,
  LOGO,
  NewGiftCardImg,
  waves,
} from "../assets";
import { Tabs, Col, Row, Card, Collapse, Divider } from "antd";
import OrderSummary from "../IndvOffset/OrderSummary.web";
import BusinessOrderSummary from "../Business/BusinessOffset/BusinessOrderSummary.web";
import { constants } from "../../../../components/src/types";
import {
  deviceMode,
  getHtmlElementById,
} from "../../../../components/src/CommonUtils";
import { roundTwoDecimal } from "../../../../framework/src/Utilities";
class IndividualPlantTree extends IndividualPlantTreeController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }
  render() {
    let currency_conversion = localStorage.getItem("currency_conversion");
    let currency_conversion_response = currency_conversion
      ? JSON.parse(currency_conversion)
      : null;
    const {
      CARBON_OFFSET,
      PLANT_TREES_HEADER,
      PLANT_TREES_QUESTION1,
      PLANT_TREES_QUESTION2,
      PLANT_TREES_QUESTION3,
      PLANT_TREES_QUESTION4,
      PLANT_TREES_ANSWER1,
      PLANT_TREES_ANSWER2,
      PLANT_TREES_ANSWER3,
      PLANT_TREES_ANSWER4,
      PACKAGE_DETAILS: {
        MAINTENANCE,
        MAINTENANCE_DESKTOP,
        PLANT_DETAILS,
        GROWTH_TRACKING,
      },
      HEADERS: {
        PACKAGE_DETAILS,
        MAIN_HEADER,
        ORDER,
        AGROFORESTRY,
        AGROFORESTRY_MOBILE,
        GIFT_CARD,
        URBANFORESTRY,
      },
    } = constants.IndividualPlantTree;

    const { TabPane } = Tabs;
    const location = window.location.pathname;
    const {
      selectGiftCard,
      activeTabKey,
      PlantTreesData,
      orderSummaryData,
      isReadMore,
    } = this.state;
    const PlantTreeContent = [
      {
        question:
          "Understanding global warming and the role of trees in preventing it",
        answer:
          "The increasing concentration of greenhouse gases in the atmosphere is causing the temperatures to rise rapidly. This can be attributed to human activities such as deforestation, using air conditioners, increasing automobiles, overconsumption, etc. Trees have the amazing ability to absorb carbon and return oxygen. Planting trees is thus the most effective way to stop global warming. Trees are known as carbon sinks. They use the carbon they absorb for photosynthesis and growth. Later they can lock carbon in their branches, roots and trunk",
      },
      {
        question: "How reforestation can help nullify the greenhouse effect?",
        answer:
          "Planting more trees will make way for carbon sequestration, help to reduce the dependence on fossil fuels as energy source, and replace materials like aluminum and PVC that are extracted using energy-intensive processes.",
      },
      {
        question: "Understanding carbon sequestration:",
        answer:
          "Carbon emissions per person vary based on their lifestyle (food, transport, housing etc). On average, it is 6 tons per person per year globally. Although the carbon absorption capacity can vary, trees in general store about 30-40 kg of CO2 per year, or 1 ton of CO2 per year for 20-30 mature trees. Thus over 150 trees will be needed to compensate for the annual emissions of a person.",
      },
      {
        question: "What species absorb the most CO2?",
        answer:
          "Not all trees are equally eco-efficient. The carbon absorption capacity of trees varies based on species, age, size, weather conditions, soil type, etc. Some trees grow more quickly than others and therefore absorb CO2 faster, as is the case with eucalyptus. However, some other special grow slow and live longer. This enables them to absorb more CO2 in their lifetime, such as oak or beech.",
      },
    ];

    const isMobile = !deviceMode.isMobile;
    const { Panel } = Collapse;

    const QnA = () => {
      return (
        <div className="urban_forestry_last_content ct_mb_10">
          {isMobile ? (
            PlantTreeContent.map((data: any, i: any) => {
              return (
                <div className="">
                  <p className="second_Urban_block_P_green">{data.question}</p>
                  <p className="second_Urban_block_P">{data.answer}</p>
                </div>
              );
            })
          ) : (
            <Collapse expandIconPosition="end" ghost>
              {PlantTreeContent.map((data: any, i: any) => {
                return (
                  <>
                    <Panel
                      header={data.question}
                      key={i}
                      className="second_Urban_block_P_green"
                    >
                      <p className="second_Urban_block_P">{data.answer}</p>
                    </Panel>
                    <Divider />
                  </>
                );
              })}
            </Collapse>
          )}
        </div>
      );
    };

    const PackageDetails = () => {
      return (
        <>
          {isMobile ? (
            <Card className="box box2style">
              <div className="Individual_PlantTree_box-head">
                {PACKAGE_DETAILS}
              </div>
              <Row className="plant_tree_pack_det" justify="start">
                <Col className="Individual_PlantTree_items" span={8}>
                  <img src={packageMaintenance} alt="img" />
                  {MAINTENANCE_DESKTOP}
                </Col>
                <Col className="Individual_PlantTree_items" span={8}>
                  <img src={packagePlant} alt="img" />
                  {PLANT_DETAILS}
                </Col>
                <Col className="Individual_PlantTree_items" span={8}>
                  <img src={packageGrowth} alt="img" />
                  {GROWTH_TRACKING}
                </Col>
              </Row>
            </Card>
          ) : (
            <Card className="box box2style">
              <div className="Individual_PlantTree_box-head">
                {PACKAGE_DETAILS.toUpperCase()}
              </div>
              <Row className="plant_tree_pack_det" justify="start">
                <div className="Individual_PlantTree_items">
                  <img src={packageMaintenance} alt="img" />
                  <div className="Individual_PlantTree_items-text">
                    {MAINTENANCE}
                  </div>
                </div>
                <div className="Individual_PlantTree_items">
                  <img src={packagePlant} alt="img" />
                  <div className="Individual_PlantTree_items-text">
                    {PLANT_DETAILS}
                  </div>
                </div>
                <div className="Individual_PlantTree_items">
                  <img src={packageGrowth} alt="img" />
                  <div className="Individual_PlantTree_items-text">
                    {GROWTH_TRACKING}
                  </div>
                </div>
              </Row>
            </Card>
          )}
        </>
      );
    };

    return (
      <div className="Individual_PlantTree_MiddleContainer">
        <div>
          <Row gutter={16}>
            <Col lg={18} md={18}>
              <div className="Individual_PlantTree_first_block">
                <div className="first_PlantTree_block1">
                  <div className="first_PlantTree_block1_Main">
                    {!isMobile ? (
                      <div className="plant_tree_header">
                        <span className="first_PlantTree_block_head">
                          Plant Trees
                        </span>
                        <span className=" Individual_first_square individual_first_PlantTree_square">
                          <span className="first_blockT  first_block_PlantTreeT">
                            <div>
                              <img
                                src={FIRSTSQUARE}
                                alt="LOGO"
                                className="blockImg"
                              />
                            </div>
                            <div className="blockImg_text">
                              {PlantTreesData.total_carbon_offset + " "}tonnes{" "}
                              <div>offset per year</div>
                            </div>
                          </span>
                        </span>
                      </div>
                    ) : (
                      <h1 className="first_PlantTree_block_head">
                        Plant Trees
                      </h1>
                    )}
                    <p className="first_PlantTree_block_P ct_line_height_24px">
                      {PLANT_TREES_HEADER}
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            {isMobile && (
              <Col lg={6} md={6}>
                <div className=" Individual_first_square individual_first_PlantTree_square">
                  <div className="firstsquare_box">
                    <img src={FIRSTSQUARE} alt="LOGO" className="blockImg" />
                    <p className="firstsquareN">
                      {PlantTreesData.total_carbon_offset}
                      <span className="first_blockT  first_block_PlantTreeT">
                        tonnes
                      </span>
                    </p>
                    <p className="firstsquareT  indv_PlantTree_squareT">
                      {CARBON_OFFSET}
                    </p>
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </div>

        <Row
          gutter={16}
          className="remove-overflow-x indv-planttree-section py-3 px-2 align-items-start"
        >
          <Col lg={16} md={16}>
            <div className="Individual_PlantTree_content">
              <Tabs
                defaultActiveKey={activeTabKey}
                type="card"
                centered
                className="Individual_tab_style"
                onChange={this.TabonChange}
              >
                <TabPane tab="Agroforestry" key="1">
                  <div className="Individual_tab-content">
                    <div className="bg">
                      <img
                        className="bg-image-individual"
                        src={
                          PlantTreesData.image
                            ? PlantTreesData.image
                            : "https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/sh71n5qljj8xn4o1z2kc2j6f9vhw/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22agroforestry.jpg%22%3B%20filename%2A%3DUTF-8%27%27agroforestry.jpg&response-content-type=image%2Fjpeg"
                        }
                        alt="img"
                      />
                    </div>
                    {isMobile && (
                      <div className="Individual_sub-content">
                        <h1 className="Individual_sub-content_head">
                          Agroforestry
                        </h1>
                      </div>
                    )}
                    <div
                      className="Individual_sub-content2"
                      style={{ marginTop: "0" }}
                    >
                      {PlantTreesData.content?.length >= 600 ||
                        (PlantTreesData.content?.length >= 148 && !isMobile) ? (
                        <span
                          className="first_PlantTree_block_P"
                          onClick={() => this.ContentToggleShow()}
                        >
                          {isReadMore ? (
                            <span
                              dangerouslySetInnerHTML={{
                                __html: PlantTreesData.content,
                              }}
                              className="inlinePera"
                            ></span>
                          ) : (
                            <span
                              dangerouslySetInnerHTML={{
                                __html: PlantTreesData.content.substr(
                                  0,
                                  isMobile ? 600 : 148
                                ),
                              }}
                              className="inlinePera"
                            ></span>
                          )}
                          {isReadMore ? (
                            <span className="p_c_box_Section">
                              {" "}
                              <u>...Show Less</u>
                            </span>
                          ) : (
                            <span className="p_c_box_Section">
                              {" "}
                              <u>...Read More</u>
                            </span>
                          )}
                        </span>
                      ) : (
                        <p
                          className="first_PlantTree_block_P text-start"
                          dangerouslySetInnerHTML={{
                            __html: PlantTreesData.content,
                          }}
                        ></p>
                      )}
                      <Card className="Individual_PlantTree_box">
                        {isMobile ? (
                          <div className="card-title">
                            <span className="infotext">
                              Select the number of trees you want to plant
                              {location === "/individual/plant-tree"
                                ? ""
                                : "(min - 50 trees)"}
                            </span>
                            <span className="infotext">
                              Cost per tree
                              <span className="green_rs">
                                {currency_conversion_response?.currency_symbol}
                                <span className="green_rs_currency">
                                  {roundTwoDecimal(
                                    PlantTreesData.cost_per_tree *
                                    currency_conversion_response?.currency_rate
                                  )}
                                </span>
                              </span>
                            </span>
                          </div>
                        ) : (
                          <div>
                            <p className="order-mobile">
                              {ORDER.toUpperCase()}
                            </p>
                            <div className="infotext infotext-mobile">
                              Cost per tree
                              <div className="green_rs">
                                {currency_conversion_response?.currency_symbol}
                                <span className="green_rs_currency">
                                  {roundTwoDecimal(
                                    PlantTreesData.cost_per_tree *
                                    currency_conversion_response?.currency_rate
                                  )}
                                </span>
                              </div>
                            </div>
                            <div className="infotext infotext-mobile">
                              Select the number of trees you want to plant
                              {location === "/individual/plant-tree"
                                ? ""
                                : "(min - 50 trees)"}
                            </div>
                          </div>
                        )}

                        {isMobile ? (
                          <div className="Individual_PlantTree_radio-area plant_tree_radio ct_input_radio_1">
                            <div className="Individual_PlantTree_radio ">
                              <input
                                id="Agr-radio-1"
                                name="radio"
                                value={
                                  location === "/individual/plant-tree"
                                    ? "5"
                                    : "200"
                                }
                                type="radio"
                                onChange={(e) => this.handleNumberTreeSelect(e)}
                              />
                              <label
                                htmlFor="Agr-radio-1"
                                className="Individual_PlantTree_radio-label"
                              >
                                {location === "/individual/plant-tree"
                                  ? 5
                                  : 200}
                              </label>
                            </div>
                            <div className="Individual_PlantTree_radio">
                              <input
                                id="Agr-radio-2"
                                name="radio"
                                value={
                                  location === "/individual/plant-tree"
                                    ? "10"
                                    : "500"
                                }
                                type="radio"
                                onChange={(e) => this.handleNumberTreeSelect(e)}
                              />
                              <label
                                htmlFor="Agr-radio-2"
                                className="Individual_PlantTree_radio-label"
                              >
                                {location === "/individual/plant-tree"
                                  ? 10
                                  : 500}
                              </label>
                            </div>
                            <div className="Individual_PlantTree_radio">
                              <input
                                id="Agr-radio-3"
                                name="radio"
                                value={
                                  location === "/individual/plant-tree"
                                    ? "15"
                                    : "1000"
                                }
                                type="radio"
                                onChange={(e) => this.handleNumberTreeSelect(e)}
                              />
                              <label
                                htmlFor="Agr-radio-3"
                                className="Individual_PlantTree_radio-label"
                              >
                                {location === "/individual/plant-tree"
                                  ? 15
                                  : 1000}
                              </label>
                            </div>
                            <div className="Individual_PlantTree_radio">
                              <input
                                id="Agr-radio-4"
                                name="radio"
                                value={
                                  location === "/individual/plant-tree"
                                    ? "20"
                                    : "5000"
                                }
                                type="radio"
                                onChange={(e) => this.handleNumberTreeSelect(e)}
                              />
                              <label
                                htmlFor="Agr-radio-4"
                                className="Individual_PlantTree_radio-label"
                              >
                                {location === "/individual/plant-tree"
                                  ? 20
                                  : 5000}
                              </label>
                            </div>
                            <div className="Individual_PlantTree_radio">
                              <input
                                id="Agr-custom"
                                name="radio"
                                value="custom"
                                type="radio"
                                onChange={(e) => this.handleNumberTreeSelect(e)}
                              />
                              <label
                                htmlFor="Agr-custom"
                                className="Individual_PlantTree_radio-label"
                              >
                                Custom
                              </label>
                            </div>
                          </div>
                        ) : (
                          <div className="Individual_PlantTree_radio-area plant_tree_radio">
                            <div className="Individual_PlantTree_radio">
                              <input
                                id="Agr-radio-1"
                                name="radio"
                                value={
                                  location === "/individual/plant-tree"
                                    ? "5"
                                    : "200"
                                }
                                type="radio"
                                onChange={(e) => this.handleNumberTreeSelect(e)}
                              />
                              <label
                                htmlFor="Agr-radio-1"
                                className="Individual_PlantTree_radio-label"
                              >
                                {location === "/individual/plant-tree"
                                  ? 5
                                  : 200}
                              </label>
                            </div>
                            <div className="Individual_PlantTree_radio">
                              <input
                                id="Agr-radio-2"
                                name="radio"
                                value={
                                  location === "/individual/plant-tree"
                                    ? "10"
                                    : "500"
                                }
                                type="radio"
                                onChange={(e) => this.handleNumberTreeSelect(e)}
                              />
                              <label
                                htmlFor="Agr-radio-2"
                                className="Individual_PlantTree_radio-label"
                              >
                                {location === "/individual/plant-tree"
                                  ? 10
                                  : 500}
                              </label>
                            </div>
                            <div className="Individual_PlantTree_radio">
                              <input
                                id="Agr-radio-3"
                                name="radio"
                                value={
                                  location === "/individual/plant-tree"
                                    ? "15"
                                    : "1000"
                                }
                                type="radio"
                                onChange={(e) => this.handleNumberTreeSelect(e)}
                              />
                              <label
                                htmlFor="Agr-radio-3"
                                className="Individual_PlantTree_radio-label"
                              >
                                {location === "/individual/plant-tree"
                                  ? 15
                                  : 1000}
                              </label>
                            </div>
                            <div className="Individual_PlantTree_radio">
                              <input
                                id="Agr-radio-4"
                                name="radio"
                                value={
                                  location === "/individual/plant-tree"
                                    ? "20"
                                    : "5000"
                                }
                                type="radio"
                                onChange={(e) => this.handleNumberTreeSelect(e)}
                              />
                              <label
                                htmlFor="Agr-radio-4"
                                className="Individual_PlantTree_radio-label"
                              >
                                {location === "/individual/plant-tree"
                                  ? 20
                                  : 5000}
                              </label>
                            </div>
                            <div className="Individual_PlantTree_radio">
                              <input
                                id="Agr-custom"
                                name="radio"
                                value="custom"
                                type="radio"
                                onChange={(e) => this.handleNumberTreeSelect(e)}
                              />
                              <label
                                htmlFor="Agr-custom"
                                className="Individual_PlantTree_radio-label Individual_PlantTree_radio-label-custom"
                              >
                                Custom
                              </label>
                            </div>
                          </div>
                        )}
                      </Card>
                      {!isMobile && (
                        <>
                          {location == "/individual/plant-tree" && (
                            <OrderSummary
                              id={""}
                              history={this.state}
                              location={""}
                              orderSummaryData={orderSummaryData}
                              handleGetOrderSummaryData={(e: any) =>
                                this.handleGetOrderSummaryData(e)
                              }
                              fetchCustomTreeno={(e: any) =>
                                this.handleFetchCustomTreeNo(e)
                              }
                            />
                          )}
                          {location == "/business/plant-tree" && (
                            <BusinessOrderSummary
                              id={""}
                              history={this.state}
                              location={""}
                              orderSummaryData={orderSummaryData}
                              handleGetOrderSummaryData={(e: any) =>
                                this.handleGetOrderSummaryData(e)
                              }
                              fetchCustomTreeno={(e: any) =>
                                this.handleFetchCustomTreeNo(e)
                              }
                            />
                          )}
                        </>
                      )}
                      <PackageDetails />

                      {/* <Card className="Individual_PlantTree_box">
                        <div
                          className="Individual_PlantTree_box-head"
                          style={{ textAlign: "center" }}
                        >
                          {isMobile ? (
                            AGROFORESTRY
                          ) : (
                            <div>
                              <div className="Individual_PlantTree_box-head">
                                {AGROFORESTRY_MOBILE.toUpperCase()}
                              </div>
                              <div className="Individual_PlantTree_box-head">
                                {GIFT_CARD.toUpperCase()}
                              </div>
                            </div>
                          )}
                        </div>
                        {isMobile ? (
                          <div className="card-title">
                            <span className="infotext">
                              Select the number of trees you want to Gift
                              {location === "/individual/plant-tree"
                                ? ""
                                : "(min - 50 trees)"}
                            </span>
                            <span className="infotext">
                              Cost per tree
                              <span className="green_rs">
                                {currency_conversion_response?.currency_symbol}
                                <span className="green_rs_currency">
                                  {roundTwoDecimal(
                                    PlantTreesData.cost_per_tree *
                                      currency_conversion_response?.currency_rate
                                  )}
                                </span>
                              </span>
                            </span>
                          </div>
                        ) : (
                          <div className="card-title card-title-mobile-gift">
                            <div className="infotext infotext-gift-mobile">
                              Select the number of trees you want to Gift
                              {location === "/individual/plant-tree"
                                ? ""
                                : "(min - 50 trees)"}
                            </div>
                            <div className="infotext infotext-gift-mobile">
                              Cost per tree
                              <span className="green_rs">
                                {currency_conversion_response?.currency_symbol}
                                <span className="green_rs_currency">
                                  {roundTwoDecimal(
                                    PlantTreesData.cost_per_tree *
                                      currency_conversion_response?.currency_rate
                                  )}
                                </span>
                              </span>
                            </div>
                          </div>
                        )}

                        <div
                          className={
                            selectGiftCard === "Agroforestry"
                              ? "giftcards-select order-summary-newgift-card-sec"
                              : "giftcards order-summary-newgift-card-sec"
                          }
                          onClick={(e) => {
                            if (!isMobile) {
                              getHtmlElementById("order-summary-mobile");
                            }
                            this.SelectGiftcard("Agroforestry");
                          }}
                        >
                          <div className="d-flex justify-content-between px-4 pt-3">
                            <div>
                              <p className="ekobon-giftcard-plant-tree-head-font">
                                Gift Card
                              </p>
                            </div>
                            <div>
                              <img
                                src={LOGO}
                                alt="img"
                                className="ekobon_logo_order_summary2"
                              />
                            </div>
                          </div>

                          <div className="gif-card-sec-value-new2 ps-4">
                            <p className="ekobon-giftcard-plant-tree-head-font">
                              No of Trees{" "}
                            </p>
                          </div>
                          <div className="new-giftcard-amount2 gif-card-sec-amount-new ps-4">
                            {location == "/business/plant-tree" ? (
                              <p>
                                {this.state.selectNoTrees === "custom"
                                  ? this.state.customeNoTree
                                  : "200"}
                              </p>
                            ) : (
                              <p>
                                {this.state.selectNoTrees === "custom"
                                  ? this.state.customeNoTree
                                  : this.state.selectNoTrees}
                              </p>
                            )}
                          </div>

                          <div className="offset-summary-rightimg-sec2">
                            <div className="offset-summary-rightimg-sub-sec2">
                              <img src={NewGiftCardImg} />
                            </div>
                          </div>
                        </div>
                      </Card> */}
                      <QnA />
                    </div>
                    <div className="plant_tree_waves">
                      <img src={waves} alt="img" />
                    </div>
                  </div>
                </TabPane>

                {/* Tab 2 */}
                <TabPane tab="Urban forestation - Miyawaki Method" key="2">
                  <div className="Individual_tab-content">
                    <div className="bg">
                      <img
                        className="bg-image-individual"
                        src={
                          PlantTreesData.image
                            ? PlantTreesData.image
                            : " https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/1rcqc9x0ntea2pl61sufqkxm87xh/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22miyawaki.jpg%22%3B%20filename%2A%3DUTF-8%27%27miyawaki.jpg&response-content-type=image%2Fjpeg"
                        }
                        alt="img"
                      />
                    </div>
                    {isMobile && (
                      <div className="Individual_sub-content">
                        <h1 className="Individual_sub-content_head">
                          {URBANFORESTRY}
                        </h1>
                      </div>
                    )}
                    <div
                      className="Individual_sub-content2"
                      style={{ marginTop: "0" }}
                    >
                      {PlantTreesData.content?.length >= 600 ||
                        (PlantTreesData.content?.length >= 145 && !isMobile) ? (
                        <span
                          className="first_PlantTree_block_P"
                          onClick={() => this.ContentToggleShow()}
                        >
                          {isReadMore ? (
                            <span
                              dangerouslySetInnerHTML={{
                                __html: PlantTreesData.content,
                              }}
                              className="inlinePera"
                            ></span>
                          ) : (
                            <span
                              dangerouslySetInnerHTML={{
                                __html: PlantTreesData.content.substr(
                                  0,
                                  isMobile ? 600 : 145
                                ),
                              }}
                              className="inlinePera heyoo1"
                            ></span>
                          )}
                          {isReadMore ? (
                            <span className="p_c_box_Section">
                              {" "}
                              <u>...Show Less</u>
                            </span>
                          ) : (
                            <span className="p_c_box_Section">
                              {" "}
                              <u>...Read More</u>
                            </span>
                          )}
                        </span>
                      ) : (
                        <p className="first_PlantTree_block_P">
                          {PlantTreesData.content}
                        </p>
                      )}
                      <div className="plant_detail_icon">
                        <Row style={{ margin: "15px 0" }} justify="center">
                          <Col lg={6} sm={12} xs={12} md={12} span={6}>
                            <div className="plant-detail-icon">
                              <img src={miyawakiGrowth} />
                            </div>
                          </Col>
                          <Col lg={6} sm={12} xs={12} md={12} span={6}>
                            <div className="plant-detail-icon">
                              <img src={miyawakiCarbon} />
                            </div>
                          </Col>
                          <Col lg={6} sm={12} xs={12} md={12} span={6}>
                            <div className="plant-detail-icon">
                              <img src={miyawakiDiversity} />
                            </div>
                          </Col>
                          <Col lg={6} sm={12} xs={12} md={12} span={6}>
                            <div className="plant-detail-icon">
                              <img src={miyawakiGreen} />
                            </div>
                          </Col>
                        </Row>
                      </div>

                      <Card className="Individual_PlantTree_box">
                        {isMobile ? (
                          <div className="card-title">
                            <span className="infotext">
                              Select the number of trees you want to plant
                              {location === "/individual/plant-tree"
                                ? ""
                                : "(min - 50 trees)"}
                            </span>
                            <span className="infotext infotext-gift-mobile">
                              Cost per tree
                              <span className="green_rs">
                                {currency_conversion_response?.currency_symbol}
                                <span className="green_rs_currency">
                                  {roundTwoDecimal(
                                    PlantTreesData.cost_per_tree *
                                    currency_conversion_response?.currency_rate
                                  )}
                                </span>
                              </span>
                            </span>
                          </div>
                        ) : (
                          <div className="card-title card-title-mobile-gift">
                            <div className="infotext infotext-gift-mobile">
                              Select the number of trees you want to plant
                              {location === "/individual/plant-tree"
                                ? ""
                                : "(min - 50 trees)"}
                            </div>

                            <div className="infotext infotext-gift-mobile">
                              Cost per tree
                              <span className="green_rs">
                                {currency_conversion_response?.currency_symbol}
                                <span className="green_rs_currency">
                                  {roundTwoDecimal(
                                    PlantTreesData.cost_per_tree *
                                    currency_conversion_response?.currency_rate
                                  )}
                                </span>
                              </span>
                            </div>
                            <p className="order-mobile">
                              {ORDER.toUpperCase()}
                            </p>
                          </div>
                        )}

                        <div className="Individual_PlantTree_radio-area plant_tree_radio">
                          <div className="Individual_PlantTree_radio">
                            <input
                              id="Urb-radio-1"
                              name="radio"
                              value={
                                location === "/individual/plant-tree"
                                  ? "5"
                                  : "200"
                              }
                              type="radio"
                              onChange={(e) => this.handleNumberTreeSelect(e)}
                            />
                            <label
                              htmlFor="Urb-radio-1"
                              className="Individual_PlantTree_radio-label"
                            >
                              {location === "/individual/plant-tree" ? 5 : 200}
                            </label>
                          </div>
                          <div className="Individual_PlantTree_radio">
                            <input
                              id="Urb-radio-2"
                              name="radio"
                              value={
                                location === "/individual/plant-tree"
                                  ? "10"
                                  : "500"
                              }
                              type="radio"
                              onChange={(e) => this.handleNumberTreeSelect(e)}
                            />
                            <label
                              htmlFor="Urb-radio-2"
                              className="Individual_PlantTree_radio-label"
                            >
                              {location === "/individual/plant-tree" ? 10 : 500}
                            </label>
                          </div>
                          <div className="Individual_PlantTree_radio">
                            <input
                              id="Urb-radio-3"
                              name="radio"
                              value={
                                location === "/individual/plant-tree"
                                  ? "15"
                                  : "1000"
                              }
                              type="radio"
                              onChange={(e) => this.handleNumberTreeSelect(e)}
                            />
                            <label
                              htmlFor="Urb-radio-3"
                              className="Individual_PlantTree_radio-label"
                            >
                              {location === "/individual/plant-tree"
                                ? 15
                                : 1000}
                            </label>
                          </div>
                          <div className="Individual_PlantTree_radio">
                            <input
                              id="Urb-radio-4"
                              name="radio"
                              value={
                                location === "/individual/plant-tree"
                                  ? "20"
                                  : "5000"
                              }
                              type="radio"
                              onChange={(e) => this.handleNumberTreeSelect(e)}
                            />
                            <label
                              htmlFor="Urb-radio-4"
                              className="Individual_PlantTree_radio-label"
                            >
                              {location === "/individual/plant-tree"
                                ? 20
                                : 5000}
                            </label>
                          </div>
                          <div className="Individual_PlantTree_radio">
                            <input
                              id="Urb-custom"
                              name="radio"
                              value="custom"
                              type="radio"
                              onChange={(e) => this.handleNumberTreeSelect(e)}
                            />
                            <label
                              htmlFor="Urb-custom"
                              className="Individual_PlantTree_radio-label Individual_PlantTree_radio-label-custom"
                            >
                              Custom
                            </label>
                          </div>
                        </div>
                      </Card>
                      {!isMobile && (
                        <>
                          {location == "/individual/plant-tree" && (
                            <OrderSummary
                              urbonSmoothScrollForMobileId={"urban-summary"}
                              id={""}
                              history={this.state}
                              location={""}
                              orderSummaryData={orderSummaryData}
                              handleGetOrderSummaryData={(e: any) =>
                                this.handleGetOrderSummaryData(e)
                              }
                              fetchCustomTreeno={(e: any) =>
                                this.handleFetchCustomTreeNo(e)
                              }
                            />
                          )}
                          {location == "/business/plant-tree" && (
                            <BusinessOrderSummary
                              id={""}
                              history={this.state}
                              urbonSmoothScrollForMobileId={
                                this.state.activeTabKey == "2"
                                  ? "urban-summary"
                                  : "order-summary-mobile"
                              }
                              location={""}
                              orderSummaryData={orderSummaryData}
                              handleGetOrderSummaryData={(e: any) =>
                                this.handleGetOrderSummaryData(e)
                              }
                              fetchCustomTreeno={(e: any) =>
                                this.handleFetchCustomTreeNo(e)
                              }
                            />
                          )}
                        </>
                      )}
                      <PackageDetails />
                      {/* <Card className="Individual_PlantTree_box">
                        <div
                          className="Individual_PlantTree_box-head"
                          style={{ textAlign: "center" }}
                        >
                          {isMobile
                            ? URBANFORESTRY
                            : URBANFORESTRY.toUpperCase()}
                        </div>
                        {isMobile ? (
                          <div className="card-title">
                            <span className="infotext">
                              Select the number of trees you want to Gift
                              {location === "/individual/plant-tree"
                                ? ""
                                : "(min - 50 trees)"}
                            </span>
                            <span className="infotext">
                              Cost per tree
                              <span className="green_rs">
                                {currency_conversion_response?.currency_symbol}
                                <span className="green_rs_currency">
                                  {roundTwoDecimal(
                                    PlantTreesData.cost_per_tree *
                                      currency_conversion_response?.currency_rate
                                  )}
                                </span>
                              </span>
                            </span>
                          </div>
                        ) : (
                          <div className="card-title card-title-mobile-gift">
                            <span className="infotext infotext-gift-mobile">
                              Select the number of trees you want to Gift
                              {location === "/individual/plant-tree"
                                ? ""
                                : "(min - 50 trees)"}
                            </span>
                            <span className="infotext infotext-gift-mobile">
                              Cost per tree
                              <span className="green_rs">
                                {currency_conversion_response?.currency_symbol}
                                <span className="green_rs_currency">
                                  {roundTwoDecimal(
                                    PlantTreesData.cost_per_tree *
                                      currency_conversion_response?.currency_rate
                                  )}
                                </span>
                              </span>
                            </span>
                          </div>
                        )}

                        <div
                          className={
                            selectGiftCard === "Urban"
                              ? "giftcards-select order-summary-newgift-card-sec"
                              : "giftcards order-summary-newgift-card-sec"
                          }
                          onClick={(e) => {
                            if (!isMobile) {
                              getHtmlElementById("urban-summary");
                            }
                            this.SelectGiftcard("Urban");
                          }}
                        >
                          <div className="d-flex justify-content-between px-4 pt-3">
                            <div>
                              <p className="ekobon-giftcard-plant-tree-head-font">
                                Gift Card
                              </p>
                            </div>
                            <div>
                              <img
                                src={LOGO}
                                alt="img"
                                className="ekobon_logo_order_summary2"
                              />
                            </div>
                          </div>
                          <div className="gif-card-sec-value-new2 ps-4">
                            <p className="ekobon-giftcard-plant-tree-head-font">
                              No of Trees
                            </p>
                          </div>
                          <div className="new-giftcard-amount2 gif-card-sec-amount-new ps-4">
                            <p>
                              {this.state.selectNoTrees === "custom"
                                ? this.state.customeNoTree
                                : this.state.selectNoTrees}
                            </p>
                          </div>
                          <div className="offset-summary-rightimg-sec2">
                            <div className="offset-summary-rightimg-sub-sec2">
                              <img src={NewGiftCardImg} />
                            </div>
                          </div>
                        </div>
                      </Card> */}
                      <QnA />
                    </div>
                  </div>
                  <div className="plant_tree_waves">
                    <img src={waves} alt="img" />
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </Col>
          {isMobile && (
            <Col lg={8} md={8}>
              {location == "/individual/plant-tree" && (
                <OrderSummary
                  id={""}
                  history={this.state}
                  location={""}
                  orderSummaryData={orderSummaryData}
                  handleGetOrderSummaryData={(e: any) =>
                    this.handleGetOrderSummaryData(e)
                  }
                  fetchCustomTreeno={(e: any) =>
                    this.handleFetchCustomTreeNo(e)
                  }
                />
              )}
              {location == "/business/plant-tree" && (
                <BusinessOrderSummary
                  id={""}
                  history={this.state}
                  location={""}
                  orderSummaryData={orderSummaryData}
                  handleGetOrderSummaryData={(e: any) =>
                    this.handleGetOrderSummaryData(e)
                  }
                  fetchCustomTreeno={(e: any) =>
                    this.handleFetchCustomTreeNo(e)
                  }
                />
              )}
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

export default IndividualPlantTree as React.ComponentType<any>;
// Customizable Area End
