import React from "react";
// Customizable Area Start
import SubscriptionOffsetController, {
  Props,
} from "./SubscriptionOffsetController.web";
import { Row, Col, Tabs } from "antd";
import OrderSummary from "./OrderSummary.web";
import IndividualOffset from "./IndividualOffset.web";
import OffsetSubscriptionMiddleCarousel from "./OffsetSubscriptionMiddleCarousel.web";
import { GreenCar, GreenFlight, GreenHouse, GreenSpecs } from "../assets";
import TabPane from "antd/lib/tabs/TabPane";
// Customizable Area End
import { deviceMode } from "../../../../components/src/CommonUtils";

class SubscriptionOffset extends SubscriptionOffsetController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const {
      lifestyleList,
      vehicleList,
      accomodationList,
      flightList,
      lifeStyleCardId,
      tabValue,
      lifeStyleCardselected,
    } = this.state;

    const onChange = (id: string) => {
      if (id == "1") {
        this.handleSelectCard(
          this.state.lifestyleList[0]?.final_Id,
          this.state.lifestyleList[0]?.attributes?.name,
          "Lifestyle"
        );
      }
      if (id == "2") {
        this.handleSelectCard(
          this.state.vehicleList[0]?.final_Id,
          this.state.vehicleList[0]?.attributes?.name,
          "Vehicle"
        );
      }
      if (id == "3") {
        this.handleSelectCard(
          this.state.accomodationList[0]?.final_Id,
          this.state.accomodationList[0]?.attributes?.name,
          "Accomodation"
        );
      }
      if (id == "4") {
        this.handleSelectCard(
          this.state.flightList[0]?.final_Id,
          this.state.flightList[0]?.attributes?.name,
          "Flight"
        );
      }
      this.setState({ tabValue: id });
    };
    const isMobile = deviceMode.isMobile;

    return (
      <div className="one-time-offset-sec subs-offset-cards">
        <IndividualOffset />
        {!isMobile ? (
          <Row gutter={16} className="remove-overflow-x  py-3 px-2 align-items-start">
            <Col lg={16} md={16}>
              <div>
                <OffsetSubscriptionMiddleCarousel
                  topicName="Lifestyle"
                  topicImg={GreenSpecs}
                  dataList={lifestyleList}
                  lifeStyleCardId={lifeStyleCardId}
                  handleSelectCard={(value: any, data: any) =>
                    this.handleSelectCard(value, data, "Lifestyle")
                  }
                  isLogin={localStorage.getItem("token") ? true : false}
                />
              </div>

              <div className="mt-4">
                <OffsetSubscriptionMiddleCarousel
                  topicName="Vehicle"
                  topicImg={GreenCar}
                  dataList={vehicleList}
                  lifeStyleCardId={lifeStyleCardId}
                  handleSelectCard={(value: any, data: any) =>
                    this.handleSelectCard(value, data, "Vehicle")
                  }
                  isLogin={localStorage.getItem("token") ? true : false}
                />
              </div>

              <div className="mt-4">
                <OffsetSubscriptionMiddleCarousel
                  topicName="Accomodation"
                  topicImg={GreenHouse}
                  dataList={accomodationList}
                  lifeStyleCardId={lifeStyleCardId}
                  handleSelectCard={(value: any, data: any) =>
                    this.handleSelectCard(value, data, "Accomodation")
                  }
                  isLogin={localStorage.getItem("token") ? true : false}
                />
              </div>

              <div className="mt-4">
                <OffsetSubscriptionMiddleCarousel
                  topicName="Flight"
                  topicImg={GreenFlight}
                  dataList={flightList}
                  lifeStyleCardId={lifeStyleCardId}
                  handleSelectCard={(value: any, data: any) =>
                    this.handleSelectCard(value, data, "Flight")
                  }
                  isLogin={localStorage.getItem("token") ? true : false}
                />
              </div>
            </Col>
            <Col lg={8} md={8}>
              <OrderSummary id={""} history={this.state} location={""} />
            </Col>
          </Row>
        ) : (
            <>
              <Tabs
                defaultActiveKey={tabValue}
                centered={true}
                type={"card"}
                onChange={onChange}
                items={[
                  {
                    label: (
                      <Row className="d-flex justify-content-start">
                        <img style={{ width: "20px" }} src={GreenSpecs} />
                        {tabValue === "1" ? (
                          <span style={{ color: "#88ae47", padding: "5px" }}>
                            {" "}
                            LifeStyle
                          </span>
                        ) : (
                          <></>
                        )}
                      </Row>
                    ),
                    key: "1",
                    children: (
                      <OffsetSubscriptionMiddleCarousel
                        topicName="Lifestyle"
                        topicImg={GreenSpecs}
                        dataList={lifestyleList}
                        lifeStyleCardId={lifeStyleCardId}
                        handleSelectCard={(value: any, data: any) =>
                          this.handleSelectCard(value, data, "Lifestyle")
                        }
                        isLogin={localStorage.getItem("token") ? true : false}
                      />
                    ),
                  },
                  {
                    label: (
                      <Row className="d-flex justify-content-start">
                        <img style={{ width: "20px" }} src={GreenCar} />
                        {tabValue === "2" ? (
                          <span style={{ color: "#88ae47", padding: "5px" }}>
                            {" "}
                            Vehicle
                          </span>
                        ) : (
                          <></>
                        )}
                      </Row>
                    ),
                    key: "2",
                    children: (
                      <OffsetSubscriptionMiddleCarousel
                        topicName="Vehicle"
                        topicImg={GreenCar}
                        dataList={vehicleList}
                        lifeStyleCardId={lifeStyleCardId}
                        handleSelectCard={(value: any, data: any) =>
                          this.handleSelectCard(value, data, "Vehicle")
                        }
                        isLogin={localStorage.getItem("token") ? true : false}
                      />
                    ),
                  },
                  {
                    label: (
                      <Row className="d-flex justify-content-start">
                        <img style={{ width: "20px" }} src={GreenHouse} />
                        {tabValue === "3" ? (
                          <span style={{ color: "#88ae47", padding: "5px" }}>
                            {" "}
                            Accomodation
                          </span>
                        ) : (
                          <></>
                        )}
                      </Row>
                    ),
                    key: "3",
                    children: (
                      <OffsetSubscriptionMiddleCarousel
                        topicName="Accomodation"
                        topicImg={GreenHouse}
                        dataList={accomodationList}
                        lifeStyleCardId={lifeStyleCardId}
                        handleSelectCard={(value: any, data: any) =>
                          this.handleSelectCard(value, data, "Accomodation")
                        }
                        isLogin={localStorage.getItem("token") ? true : false}
                      />
                    ),
                  },
                  {
                    label: (
                      <Row className="d-flex justify-content-start">
                        <img style={{ width: "20px" }} src={GreenFlight} />
                        {tabValue === "4" ? (
                          <span style={{ color: "#88ae47", padding: "5px" }}>
                            {" "}
                            Flight
                          </span>
                        ) : (
                          <></>
                        )}
                      </Row>
                    ),
                    key: "4",
                    children: (
                      <OffsetSubscriptionMiddleCarousel
                        topicName="Flight"
                        topicImg={GreenFlight}
                        dataList={flightList}
                        lifeStyleCardId={lifeStyleCardId}
                        handleSelectCard={(value: any, data: any) =>
                          this.handleSelectCard(value, data, "Flight")
                        }
                        isLogin={localStorage.getItem("token") ? true : false}
                      />
                    ),
                  },
                ]}
              />{" "}
              <OrderSummary id={""} history={this.state} location={""} />
            </>
          
        )}


      </div>
    );
  }
}

export default SubscriptionOffset as React.ComponentType<any>;
// Customizable Area End
