import React from "react";
import { Col, Row, Select, Form, Input, Checkbox, Button } from "antd";
import IndividualOffset from "./IndividualOffset.web";
// Customizable Area Start
import OffsetOneTimeEventController, {
  Props,
} from "./OffsetOneTimeEventController.web";
import OneTimeCard from "./OneTimeCard.web";
import OrderSummary from "./BusinessOrderSummary.web";
import { FlightPlush, FlightMinus, removeCircle } from "./assets";
import { CountryListData } from "../../CountryList";
import { IndividualPackageData } from "../../IndividualPackageData";
import { TravelClassList } from "../../TravelClassList";
import { VehicleTypeList } from "../../VehicleTypeList";
import { FuelTypeList } from "../../FuelTypeList";
import { PowerSourceList } from "../../PowerSourceList";
import { HotelList } from "../../HotelList";
import { VIDEO, EMAIL, GIFT, TREE, WINDMILL, BUILDING } from "./assets";
import BusinessOffsetDetail from "./BusinessOffsetDetail.web";
import {
  deviceMode,
  getHtmlElementById,
} from "../../../../../components/src/CommonUtils";
import OneTimeMobileCard from "./OneTimeCardMobile.web";
const { Option } = Select;
// Customizable Area End

class OffsetOneTimeEvent extends OffsetOneTimeEventController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }
  renderPeople = () => {
    return (
      <div className="carbon-offset-onetime-life-sec carbon-offset-onetime-life-business py-3">
        <div className="offset-onetime-car-sec">
          {/* <div className="offset-onetime-car-sec-head py-3 px-4 d-flex justify-content-between">
            <div>
              <p>People related to event</p>
            </div>
          </div> */}
          <div className="offset-onetime-car-bottom-sec py-3 px-4 ct_padd_btm_65">
            {this.state.offsetEventData.people.map((el: any, i: any) => {
              return (
                <Row gutter={16} key={i}>
                  {i === 1 ? (
                    <Col lg={1} md={2}>
                      <div className="mt-5">
                        <a onClick={this.peopleRemoveClick.bind(this, i)}>
                          <img src={removeCircle} width="24" />
                        </a>
                      </div>
                    </Col>
                  ) : (
                    <Col lg={1} md={2} />
                  )}

                  <Col lg={5} md={5}>
                    <p className="mb-3">Country</p>
                    <Form.Item
                      name="country"
                      rules={[{ required: false, message: "Select Country" }]}
                    >
                      <label className="hidentext">{el.CountryName}</label>
                      <text style={{ display: "none" }}>{el.country}</text>
                      <Select
                        showSearch
                        placeholder="Select"
                        size="large"
                        allowClear
                        value={el.country}
                        // disabled
                        onChange={this.handlePeopleDataChange.bind(
                          this,
                          i,
                          "country",
                          "people"
                        )}
                      >
                        {this.state.CountryListData?.map((data: any) => (
                          <Option
                            value={data?.attributes?.CountryName || ""}
                            key={data?.attributes?.CountryName}
                          >
                            {data?.attributes?.CountryName}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col lg={5} md={5}>
                    <p className="mb-3">Package</p>
                    <Form.Item
                      name="pacakge"
                      rules={[{ required: false, message: "Select Package" }]}
                    >
                      <label className="hidentext">{el.Name}</label>
                      <text style={{ display: "none" }}>{el.package}</text>
                      <Select
                        showSearch
                        placeholder="Select"
                        size="large"
                        allowClear
                        value={el.package}
                        onChange={this.handlePeopleDataChange.bind(
                          this,
                          i,
                          "package",
                          "people"
                        )}
                      >
                        {IndividualPackageData.map((data: any) => (
                          <Option value={data.Id || ""} key={data.Id}>
                            {data.Name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col lg={4} md={4}>
                    <p className="mb-3">Days</p>
                    <div className="offset-input-custm">
                      <Form.Item name="days">
                        <text className="hidentext">{el.distance}</text>
                        <Input
                          size="large"
                          type="number"
                          value={el.days || ""}
                          placeholder="Days"
                          onChange={this.handlePeopleDataInputChange.bind(
                            this,
                            i
                          )}
                        />
                      </Form.Item>
                    </div>
                  </Col>

                  <Col lg={5} md={5} className='input-units-mobile-ns'>
                    <div className="flight-pass-data">
                      <p className="mb-3">Participants</p>
                      {/* <div className="d-flex justify-content-between align-items-center">
                        <div
                          className="flight-img-card"
                          onClick={(e) => this.peoplePassengerCount(i, "minus")}
                        >
                          <img src={FlightMinus} alt="FlightMinus" />
                        </div>
                        <label>{el.no_of_employee}</label>
                        <div
                          className="flight-img-card"
                          onClick={(e) => this.peoplePassengerCount(i, "plush")}
                        >
                          <img src={FlightPlush} alt="FlightPlush" />
                        </div>
                      </div> */}
                      <div className="offset-input-custm">
                        <Form.Item name="no_of_employee">
                          <text className="hidentext">{el.no_of_employee}</text>
                          <Input
                            size="large"
                            type="number"
                            value={el.no_of_employee || ""}
                            placeholder="Participants"
                            max={1000000}
                            onChange={this.handleEventsInputChange.bind(
                              this,
                              i,
                              "People"
                            )}
                          />
                        </Form.Item>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3} md={3} className='co2e-mobile-ns co2e-desktop-ns'>
                    <p className="mb-4">Co2e</p>
                    <div>
                      <p>
                        <b>
                          {el.total_impact
                            ? Number(el.total_impact).toFixed(2) + "t"
                            : 0 + "t"}
                        </b>
                      </p>
                    </div>
                  </Col>
                </Row>
              );
            })}
            <div
              className={
                this.state.offsetEventData.people.length === 2
                  ? "disabed-click d-flex align-items-center webGreenColor"
                  : "d-flex align-items-center webGreenColor"
              }
            >
              <div
                className="disp_content"
                onClick={this.peopleAddClick.bind(this)}
              >
                <img src={FlightPlush} width="22" />
                <p className="ms-2 add_new_card">Add New</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderFligth = () => {
    return (
      <div className="carbon-offset-onetime-life-sec py-3">
        <div className="offset-onetime-car-sec">
          <div className="offset-onetime-car-sec-head py-3 px-4 d-flex justify-content-between">
            <div>
              <p>Flight related event</p>
            </div>
          </div>
          <div className="offset-onetime-car-bottom-sec py-3 px-4 ct_wrape_container">
            {this.state.offsetEventData.flight.map((el: any, i: any) => {
              return (
                <Row
                  gutter={16}
                  key={i}
                  className={i === 1 ? "offset_tab_m-t" : ""}
                >
                  {i !== 0 ? (
                    <Col lg={1} md={2}>
                      <div className="bussiness-offset-flight-bydis-removebtn">
                        <a onClick={this.flightRemoveClick.bind(this, i)}>
                          <img src={removeCircle} width="24" />
                        </a>
                      </div>
                    </Col>
                  ) : (
                    <Col lg={1} md={2} />
                  )}

                  <Col lg={9} md={9} className="flight-card-block">
                    <p className="mb-2">Average Flight time</p>
                    <Form.Item
                      name="averageFlightTime"
                      rules={[
                        {
                          required: false,
                          message: "Select Average Flight time",
                        },
                      ]}
                    >
                      <text className="hidentext">
                        {el.business_flight_type_id}
                      </text>
                      <Select
                        showSearch
                        placeholder="Select"
                        size="large"
                        allowClear
                        value={el.business_flight_type_id}
                        onChange={this.handlePeopleDataChange.bind(
                          this,
                          i,
                          "business_flight_type_id",
                          "flight"
                        )}
                      >
                        {this.state.setaverageFlightTime.map(
                          (data: any, index: any) => (
                            <Option value={data.id || ""} key={index}>
                              {data.attributes.name}
                            </Option>
                          )
                        )}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col lg={5} md={5}>
                    <p className="mb-2">Flight distance(km)</p>
                    <div className="offset-input-custm">
                      <Form.Item name="distance">
                        <text className="hidentext">{el.distance}</text>
                        <Input
                          size="large"
                          type="number"
                          value={el.distance || ""}
                          placeholder="Distance"
                          min={String(el.min)}
                          max={String(el.max)}
                          onChange={this.flightHandleChange.bind(this, i)}
                        />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col lg={5} md={5} className='input-units-mobile-ns'>
                    <div className="flight-pass-data">
                      <div className="mb-2">
                        <p>Passengers</p>
                      </div>
                      <div className="offset-input-custm">
                        <Form.Item name="no_of_passengers">
                          <text className="hidentext">
                            {el.no_of_passengers}
                          </text>
                          <Input
                            size="large"
                            type="number"
                            value={el.no_of_passengers || ""}
                            placeholder="Passengers"
                            max={5000}
                            onChange={this.handleEventsInputChange.bind(
                              this,
                              i,
                              "Flight"
                            )}
                          />
                        </Form.Item>
                      </div>
                      {/* <div className="d-flex justify-content-between align-items-center margin-top15">
                        <div
                          className="flight-img-card"
                          onClick={(e) => this.flightPassengerCount(i, "minus")}
                        >
                          <img src={FlightMinus} alt="FlightMinus" />
                        </div>
                        <label>{el.no_of_passengers}</label>
                        <div
                          className="flight-img-card"
                          onClick={(e) => this.flightPassengerCount(i, "plush")}
                        >
                          <img src={FlightPlush} alt="FlightPlush" />
                        </div>
                      </div> */}
                    </div>
                  </Col>
                  <Col lg={3} md={3} className='co2e-mobile-ns co2e-desktop-ns'>
                    <div>
                      <p className="busoness-offset-flight-bydis-label-marginbottm">
                        Co2e
                      </p>
                    </div>
                    <div className="margin-top15">
                      <p>
                        <b>
                          {el.total_impact
                            ? Number(el.total_impact).toFixed(2) + "t"
                            : 0 + "t"}
                        </b>
                      </p>
                    </div>
                  </Col>
                  <Col lg={2} md={2} />
                  <Col lg={4} md={4} className='return-flight-mobile-ns'>
                    <p className="busoness-offset-flight-bydis-label-marginbottm">
                      Return Flight
                    </p>
                    <Checkbox
                      checked={el.return_flight === "Yes" ? true : false}
                      onChange={(e) => this.flightCheckboxOnChange(i, e)}
                      className="mt-2"
                    />
                  </Col>
                  <Col lg={6} md={6}>
                    {/* <p className="busoness-offset-flight-bydis-label-marginbottm"> */}
                    <p className="margin-btm15">Class</p>
                    {/* <div className="margin-top30"> */}
                    <div>
                      <Form.Item
                        name="class"
                        rules={[{ required: false, message: "Select Class" }]}
                      >
                        <text className="hidentext">{el.class_type}</text>
                        <Select
                          showSearch
                          placeholder="Select Class"
                          size="large"
                          allowClear
                          value={el.class_type}
                          onChange={this.handlePeopleDataChange.bind(
                            this,
                            i,
                            "class_type",
                            "flight"
                          )}
                        >
                          {TravelClassList.map((travelClass: any, i: any) => (
                            <Option value={travelClass.name} key={i}>
                              {travelClass.value}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
              );
            })}
            <div
              className={
                this.state.offsetEventData.flight.length === 10
                  ? "d-flex align-items-center webGreenColor disabed-click mt-4"
                  : "d-flex align-items-center webGreenColor mt-4"
              }
            >
              <div
                className="disp_content"
                onClick={this.flightAddClick.bind(this)}
              >
                <img src={FlightPlush} width="22" />
                <p className="ms-2 add_new_card">Add New</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderCar = () => {
    return (
      <>
        <div className="carbon-offset-onetime-life-sec py-3">
          <div className="offset-onetime-car-sec">
            <div className="offset-onetime-car-sec-head py-3 px-4 d-flex justify-content-between">
              <div>
                <p>Car related to event</p>
              </div>
            </div>
            <div className="offset-onetime-car-bottom-sec py-3 px-4 ct_wrape_container">
              {this.state.offsetEventData.car.map((el: any, i: any) => (
                <Row gutter={16} key={i}>
                  {i !== 0 ? (
                    <Col lg={1} md={2}>
                      <div className="bussiness-offset-flight-bydis-removebtn">
                        <a onClick={this.carRemoveClick.bind(this, i)}>
                          <img src={removeCircle} width="24" />
                        </a>
                      </div>
                    </Col>
                  ) : (
                    <Col lg={1} md={2} />
                  )}

                  <Col lg={5} md={5}>
                    <p>Vehicle Type </p>
                    <div className="m-top-1">
                      <Form.Item
                        name="vechicleType"
                        rules={[
                          {
                            required: false,
                            message: "Select Vehicle type",
                          },
                        ]}
                      >
                        <text className="hidentext">{el.vehicle_type}</text>
                        <Select
                          showSearch
                          placeholder="Select"
                          size="large"
                          allowClear
                          value={el.vehicle_type}
                          onChange={this.handlePeopleDataChange.bind(
                            this,
                            i,
                            "vehicle_type",
                            "car"
                          )}
                        >
                          {VehicleTypeList.map((type: any, v: any) => (
                            <Option value={type.value} key={v}>
                              {type.name}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>
                  </Col>
                  <Col lg={5} md={5}>
                    <p>Fuel Type</p>
                    <div className="m-top-1">
                      <Form.Item
                        name="fuelType"
                        rules={[
                          {
                            required: false,
                            message: "Select Fuel Type",
                          },
                        ]}
                      >
                        <text className="hidentext">{el.fuel_type}</text>
                        <Select
                          showSearch
                          placeholder="Select"
                          size="large"
                          allowClear
                          value={el.fuel_type}
                          onChange={this.handlePeopleDataChange.bind(
                            this,
                            i,
                            "fuel_type",
                            "car"
                          )}
                        >
                          {FuelTypeList.map((type: any, v: any) => (
                            <Option value={type.value} key={v}>
                              {type.name}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>
                  </Col>
                  <Col lg={5} md={5}>
                    <p>Trip Distance(km)</p>
                    <div className="offset-input-custm m-top-1">
                      <Form.Item name="tripDistance">
                        <text className="hidentext">{el.distance}</text>
                        <Input
                          size="large"
                          type="number"
                          value={el.distance || ""}
                          placeholder=""
                          onChange={this.carHandleChange.bind(this, i)}
                        />
                      </Form.Item>
                    </div>
                  </Col>

                  <Col lg={5} md={5} className='input-units-mobile-ns'>
                    <div className="flight-pass-data">
                      <p>Cars</p>
                      {/* <div className="d-flex justify-content-between align-items-center m-top-1">
                        <div
                          className="flight-img-card"
                          onClick={(e) => this.carPassengerCount(i, "minus")}
                        >
                          <img src={FlightMinus} alt="FlightMinus" />
                        </div>
                        <label>{el.no_of_cars}</label>
                        <div
                          className="flight-img-card"
                          onClick={(e) => this.carPassengerCount(i, "plush")}
                        >
                          <img src={FlightPlush} alt="FlightPlush" />
                        </div>
                      </div> */}
                      <div className="offset-input-custm m-top-1">
                        <Form.Item name="no_of_cars">
                          <text className="hidentext">{el.no_of_cars}</text>
                          <Input
                            size="large"
                            type="number"
                            value={el.no_of_cars || ""}
                            placeholder="Cars"
                            max={5000}
                            onChange={this.handleEventsInputChange.bind(
                              this,
                              i,
                              "Car"
                            )}
                          />
                        </Form.Item>
                      </div>
                    </div>
                  </Col>
                  <Col lg={2} md={2} className='co2e-mobile-ns co2e-desktop-ns'>
                    <p>Co2e</p>
                    <div className="m-top-1">
                      <p>
                        <b>
                          {el.total_impact
                            ? Number(el.total_impact).toFixed(2) + "t"
                            : 0 + "t"}
                        </b>
                      </p>
                    </div>
                  </Col>
                  {el.fuel_type === "electric" && (
                    <>
                      <Col lg={7} md={7} />
                      <Col lg={5} md={5}>
                        <p className="mb-2">Power Source</p>
                        <Form.Item
                          name="power_source"
                          rules={[
                            {
                              required: true,
                              message: "Select Power Source",
                            },
                          ]}
                        >
                          <Select
                            showSearch
                            placeholder="Select"
                            size="large"
                            allowClear
                            onChange={this.handlePeopleDataChange.bind(
                              this,
                              i,
                              "power_source",
                              "car"
                            )}
                          >
                            {PowerSourceList.map((type: any, p: any) => (
                              <Option value={type.value} key={p}>
                                {type.name}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>
                    </>
                  )}
                </Row>
              ))}

              <div
                className={
                  this.state.offsetEventData.car.length === 10
                    ? "d-flex align-items-center webGreenColor disabed-click"
                    : "d-flex align-items-center webGreenColor"
                }
              >
                <div
                  className="disp_content"
                  onClick={this.carAddClick.bind(this)}
                >
                  <img src={FlightPlush} width="22" />
                  <p className="ms-2 add_new_card">Add New</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  renderHotel = () => {
    return (
      <>
        <div className="carbon-offset-onetime-life-sec py-3">
          <div className="offset-onetime-car-sec">
            <div className="offset-onetime-car-sec-head py-3 px-4 d-flex justify-content-between">
              <div>
                <p>Hotel Stay related to event</p>
              </div>
            </div>
            <div className="offset-onetime-car-bottom-sec py-3 px-4">
              {this.state.offsetEventData.hotel.map((el: any, i: any) => (
                <Row gutter={16} key={i}>
                  {i === 1 ? (
                    <Col lg={1} md={2}>
                      <div className="bussiness-offset-flight-bydis-removebtn">
                        <a onClick={this.hotelRemoveClick.bind(this, i)}>
                          <img src={removeCircle} width="24" />
                        </a>
                      </div>
                    </Col>
                  ) : (
                    <Col lg={1} md={2} />
                  )}

                  <Col lg={5} md={5}>
                    <p>Country </p>
                    <div className="m-top-1">
                      <Form.Item
                        name="country"
                        rules={[{ required: false, message: "Select Country" }]}
                      >
                        <text className="hidentext">{el.country}</text>
                        <Select
                          showSearch
                          placeholder="Select"
                          size="large"
                          allowClear
                          value={el.country}
                          // disabled
                          onChange={this.handlePeopleDataChange.bind(
                            this,
                            i,
                            "country",
                            "hotel"
                          )}
                        >
                          {this.state.CountryListData.map((data: any) => (
                            <Option
                              value={data?.attributes?.CountryName}
                              key={data?.attributes?.CountryName}
                            >
                              {data?.attributes?.CountryName}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>
                  </Col>
                  <Col lg={5} md={5}>
                    <p>Hotel</p>
                    <div className="m-top-1">
                      <Form.Item
                        name="hotel"
                        rules={[{ required: false, message: "Select Hotel" }]}
                      >
                        <text className="hidentext">{el.hotel}</text>
                        <Select
                          showSearch
                          placeholder="Select"
                          size="large"
                          allowClear
                          value={el.hotel}
                          onChange={this.handlePeopleDataChange.bind(
                            this,
                            i,
                            "hotel",
                            "hotel"
                          )}
                        >
                          {HotelList.map((data: any) => (
                            <Option value={data.Name} key={data.Name}>
                              {data.Name}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>
                  </Col>
                  <Col lg={5} md={5}>
                    <p>No of Overnights</p>
                    <div className="offset-input-custm m-top-1">
                      <Form.Item name="noOfOvernights">
                        <text className="hidentext">{el.no_of_overnights}</text>
                        <Input
                          size="large"
                          type="number"
                          value={el.no_of_overnights}
                          placeholder="No Of Overnights"
                          onChange={this.hotelHandleChange.bind(this, i)}
                        />
                      </Form.Item>
                    </div>
                  </Col>

                  <Col lg={4} md={4} className='input-units-mobile-ns'>
                    <div className="flight-pass-data">
                      <p>Travellers</p>
                      <div className="offset-input-custm m-top-1">
                        <Form.Item name="no_of_travellers">
                          <text className="hidentext">
                            {el.no_of_travellers}
                          </text>
                          <Input
                            size="large"
                            type="number"
                            value={el.no_of_travellers || ""}
                            placeholder="Travellers"
                            max={5000}
                            onChange={this.handleEventsInputChange.bind(
                              this,
                              i,
                              "Hotel"
                            )}
                          />
                        </Form.Item>
                      </div>
                      {/* <div className="d-flex justify-content-between align-items-center m-top-1">
                        <div
                          className="flight-img-card"
                          onClick={(e) => this.hotelPassengerCount(i, "minus")}
                        >
                          <img src={FlightMinus} alt="FlightMinus" />
                        </div>
                        <label>{el.no_of_travellers}</label>
                        <div
                          className="flight-img-card"
                          onClick={(e) => this.hotelPassengerCount(i, "plush")}
                        >
                          <img src={FlightPlush} alt="FlightPlush" />
                        </div>
                      </div> */}
                    </div>
                  </Col>
                  <Col lg={2} md={2} className='co2e-mobile-ns co2e-desktop-ns'>
                    <p>Co2e</p>
                    <div className="m-top-1">
                      <p>
                        <b>
                          {el.total_impact
                            ? Number(el.total_impact).toFixed(2) + "t"
                            : 0 + "t"}
                        </b>
                      </p>
                    </div>
                  </Col>
                </Row>
              ))}
              <div
                className={
                  this.state.offsetEventData.hotel.length === 2
                    ? "d-flex align-items-center webGreenColor disabed-click"
                    : "d-flex align-items-center webGreenColor"
                }
              >
                <div
                  className="disp_content"
                  onClick={this.hotelAddClick.bind(this)}
                >
                  <img src={FlightPlush} width="22" />
                  <p className="ms-2 add_new_card">Add New</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  render() {
    const { orderSummaryData, loader, btnDisabled, clickShow } = this.state;
    const sideBannerLists = [
      "- It is time to tell your customers that you care.It is time to make a difference. Act now, offset your carbon footprint once, or commit to doing it regularly. One time offsetting or subscription plans? The choice is yours. The world will benefit both ways.",
    ];
    const footprintLists = [
      "Use our tool to help you calculate the carbon footprint of the events and conferences. The carbon footprint is calculated based on the annual average of that location and then adjusted for the number of days and people.",
      "Our flight and car emission calculators will help with and accurate calculation based on the number of flights and cars required for the events.",
      "Input information about the hotel stays of participants. Carbon footprint will be calculated based on hotel type and country.",
    ];

    const carbonReductionSlider = [
      {
        icon: VIDEO,
        head: "Encourage Online Events",
        title: "Host more online events",
      },
      {
        icon: EMAIL,
        head: "Stick To emails",
        title: "Avoid distributing too many brochures and pamphlets",
      },
      {
        icon: GIFT,
        head: "Give Gift Cards",
        title: "Avoid unnecessary giveaways.Give gift cards if you must",
      },
    ];
    const footerCarousel = [
      {
        icon: TREE,
        title:
          "As a part of your CSR activities, involve your team in activities like planning trees",
      },
      {
        icon: WINDMILL,
        title:
          "Educate your employees about the importance of reducing carbon footprint and ways to do so",
      },
      {
        icon: BUILDING,
        title: "Center your office communication around eco-consciousness",
      },
    ];
    const isMobile = deviceMode.isMobile;

    return (
      <div className="one-time-offset-sec">
        <IndividualOffset />

        <Row gutter={16} className="remove-overflow-x py-3 px-2 ct_alignment_center">
          <Col lg={16} md={16}>
            <div className="px">
              <div className="offset-top-bg">
                {isMobile ? <OneTimeMobileCard /> : <></>}
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/jhfmkyn7qlvwm5m6nizmkdy5hytc/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Events_BG.jpg%22%3B%20filename%2A%3DUTF-8%27%27Events_BG.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </div>
              <>
                {isMobile ? (
                  <>
                    <Row gutter={16} style={{ paddingTop: "10px" }}>
                      <Col lg={24} md={12} xs={24} sm={24}>
                        <div className="our-approach-main-sec-text-fliht offset_details_head">
                          <p>CALCULATE YOUR FOOTPRINT</p>
                        </div>
                      </Col>
                    </Row>
                  </>
                ) : (
                  ""
                )}
              </>

              {!isMobile ? <OneTimeCard /> : <></>}
              <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={this.handleFinish}
              >
                <div className="carbon-offset-flight-sec">
                  {/* {this.renderPeople()} */}
                  {this.renderFligth()}
                  {this.renderCar()}
                  {this.renderHotel()}
                  <Row className="car-one-time-offset-btn-center">
                    <Col lg={12} md={12} />
                    <Col lg={12} md={12}>
                      <Button
                        className={
                          btnDisabled
                            ? "disabed-click carbon-offset-btn"
                            : "carbon-offset-btn"
                        }
                        size="large"
                        htmlType="submit"
                        disabled={isMobile ? false : loader}
                        onClick={() => {
                          if (isMobile) {
                            getHtmlElementById("order-summary-mobile");
                          }
                        }}
                      >
                        {loader
                          ? "Calculating Emissions.."
                          : "Calculate my Emissions"}
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Form>
            </div>
            {isMobile ? (
              <>
                <OrderSummary
                  id={""}
                  history={""}
                  location={""}
                  orderSummaryData={orderSummaryData}
                />
                <Row gutter={16} style={{ paddingTop: "10px" }}>
                  <Col lg={24} md={12} xs={24} sm={24}>
                    <div className="our-approach-main-sec-head offset_details" style={{ marginTop: '-80px' }}>
                      <p className="our-approach-sec-desc text-align-lifestyle-ns ct_accordian_tab" onClick={this.handleClickFunction}>
                        <span className="">
                          How does the tool works
                            </span>
                        <button><i className={clickShow == false ? "fa fa-chevron-down " : "fa fa-chevron-up"} aria-hidden="true"></i></button>
                      </p>
                    </div>
                  </Col>
                  <div
                    className="about-hate-climate-chng-sec Tool_user"
                    style={{ padding: "0", marginTop: '-20px' }}
                  >
                    <div className="container">
                      <Row style={{ marginTop: '90px' }} className={clickShow == false ? "one-time-car-center ct_para_cnt align-items-start" : "one-time-car-center ct_accordion_item align-items-start"}>
                        {footprintLists.map((e: any, i: any) => {
                          return (
                            <Col lg={12} key={i}>
                              <div className="about-hate-climate-chng-text-second Tool_user_section">
                                <Row className="ct_grid_2">
                                  <Col lg={3} className="">
                                    <div className="">
                                      <p
                                        className={
                                          i + 1 === 1
                                            ? "firstsquareT1 Tool_user_number mb-0"
                                            : "firstsquareT Tool_user_number mb-0"
                                        }
                                      >
                                        {i + 1}
                                      </p>
                                    </div>
                                  </Col>
                                  <Col lg={50}>
                                    <div className="tool_user_contents ct_tool_user_contents">
                                      <p
                                        className="pText"
                                        style={{ fontWeight: "500" }}
                                      >
                                        {e}
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </div>
                </Row>
              </>
            ) : (
              <></>
            )}
            <BusinessOffsetDetail
              offsetType="onetime"
              offsetName="EVENT"
              bannerClimateTitle="Climate change is wrecking the living experience for people around the world."
              bannerClimateSubTitle="They are looking for organizations that care."
              sideBannerHead="Do environmentally friendly business operations matter to you?Would you go the extra mile to give the world more than you take from it?"
              sideBannerLists={sideBannerLists}
              calculateCarbonHead="CALCULATE YOUR FOOTPRINT"
              calculateCarbonSubhead="OUR APPROACH TO CALCULATE THE CARBON FOOTPRINT OF A"
              footprintLists={footprintLists}
              carbonReductionTitle="Carbon Reduction Tips"
              carbonReductionSubTitle="Reduce carbon footprint from "
              carbonReductionSlider={carbonReductionSlider}
              footerHead="An Investment"
              footerSubHead="Grown into Awarness & CSR"
              footerCarousel={footerCarousel}
            />
          </Col>
          <Col lg={8} md={8}>
            {!isMobile ? (
              <OrderSummary
                id={""}
                history={""}
                location={""}
                orderSummaryData={orderSummaryData}
              />
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default OffsetOneTimeEvent as React.ComponentType<any>;
// Customizable Area End
