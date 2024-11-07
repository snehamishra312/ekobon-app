import React from "react";
import TrackmyFotprintController, {
    Props,
} from "./TrackMyFootPrintController.web";
import ReactApexChart from 'react-apexcharts';
import { LogoDashboard, FlightsIcon, TreeIcon, TaxiIcon } from "../../assets";
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';

export default class TrackmyFotprint extends TrackmyFotprintController {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const {
            series,
            series2,
            series3,
            isGraphShow,
            options,
            options2,
            options3,
            billingHistoryData,
            totalMonthOffset,
            filterMonthData,
            valOfFilterMap,
            currentMonthValue,
            bankEquivalentValue
        } = this.state;
        return (
            <div>
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card p-4">
                                    <h4 className="fw-bold text-center">My Climate Action</h4>
                                    <div className="row mt-4">
                                        <div className="col-md-6  mx-auto">
                                            <div className="nav-align-top  p-4">
                                                <ul className="nav nav-pills mb-3 justify-content-center" role="tablist">
                                                    {filterMonthData && filterMonthData.map((item: any) => (
                                                        <li className="nav-item" onClick={() => this.handleClickMonthGraph(item)}>
                                                            <button type="button" className={valOfFilterMap == item ? "nav-link active" : "nav-link"} role="tab"
                                                                data-bs-toggle="tab" data-bs-target="#dec_graphtab"
                                                                aria-controls="dec_graphtab" aria-selected="false">
                                                                {item}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {isGraphShow == true &&
                                                    <div className="tab-content ct_box_shadow_none">
                                                        {valOfFilterMap == filterMonthData[2] &&
                                                            <ReactApexChart options={options} series={series} type="donut" />
                                                        }
                                                        {valOfFilterMap == filterMonthData[1] &&
                                                            <ReactApexChart options={options2} series={series2} type="donut" />
                                                        }
                                                        {valOfFilterMap == filterMonthData[0] &&
                                                            <ReactApexChart options={options3} series={series3} type="donut" />
                                                        }
                                                        <div className="tab-pane fade" id="jan_graphtab" role="tabpanel">
                                                            <div id="jan_graph"></div>
                                                        </div>
                                                        <div className="tab-pane fade show active" id="feb_graphtab"
                                                            role="tabpanel">
                                                            <div id="feb_graph"></div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-6 mb-4">
                                    <div className="card p-4  ct_border_green h-100">
                                        <div className="ct_footprint_cnt">
                                            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                                                <h4 className="mb-4"><strong>{filterMonthData.slice(2, 3)}</strong> <span
                                                    className="ps-2 fw-bold">{totalMonthOffset ? totalMonthOffset : 0}</span><small> <span
                                                        className="ct_grey_text">Kg CO2e</span></small>
                                                </h4>
                                                <div className="ct_offset_btn mb-4  ">
                                                    <button className="btn btn-primary" data-bs-toggle="modal"
                                                        data-bs-target="#march_offset">Offset Footprint</button>
                                                </div>
                                            </div>
                                            <div className="ct_transport_list mt-4">
                                                <div className="ct_transport_list_item">
                                                    {currentMonthValue.map((item: any) => (
                                                        item.offset_type == "Food" &&
                                                        <>
                                                            <div className="ct_item_left">
                                                                <h4>Food</h4>
                                                            </div>
                                                            <div className="ct_item_right justify-content-end">
                                                                <h5>
                                                                    <span className="ct_24_fs">{item?.offset ? item?.offset : 0}</span> <span
                                                                        className="ct_grey_text"> Kg CO2e</span>
                                                                </h5>
                                                            </div>
                                                        </>
                                                    ))}
                                                </div>
                                                <div className="ct_transport_list_item">
                                                    {currentMonthValue.map((item: any) => (
                                                        item.offset_type == "Shopping" &&
                                                        <>
                                                            <div className="ct_item_left">
                                                                <h4>Shopping</h4>
                                                            </div>
                                                            <div className="ct_item_right justify-content-end">

                                                                <h5><span className="ct_24_fs">{item?.offset ? item?.offset : 0}</span> <span
                                                                    className="ct_grey_text">Kg CO2e</span></h5>
                                                            </div>
                                                        </>
                                                    ))}
                                                </div>
                                                <div className="ct_transport_list_item">
                                                    {currentMonthValue.map((item: any) => (
                                                        item.offset_type == "Travel" &&
                                                        <>
                                                            <div className="ct_item_left">
                                                                <h4>Travel</h4>
                                                            </div>
                                                            <div className="ct_item_right justify-content-end">

                                                                <h5><span className="ct_24_fs">{item?.offset ? item?.offset : 0}</span> <span
                                                                    className="ct_grey_text">Kg CO2e</span></h5>
                                                            </div>
                                                        </>
                                                    ))}
                                                </div>
                                                <div className="ct_transport_list_item">
                                                    {currentMonthValue.map((item: any) => (
                                                        item.offset_type == "Transport" &&
                                                        <>
                                                            <div className="ct_item_left">
                                                                <h4>Transport</h4>
                                                            </div>
                                                            <div className="ct_item_right justify-content-end">

                                                                <h5><span className="ct_24_fs">{item?.offset ? item?.offset : 0}</span> <span
                                                                    className="ct_grey_text">Kg CO2e</span></h5>
                                                            </div>
                                                        </>
                                                    ))}
                                                </div>
                                                <div className="ct_transport_list_item border-0">
                                                    {currentMonthValue.map((item: any) => (
                                                        item.offset_type == "Energy and Utilities" &&
                                                        <>
                                                            <div className="ct_item_left">
                                                                <h4>Energy and Utilities</h4>
                                                            </div>
                                                            <div className="ct_item_right justify-content-end">
                                                                <h5><span className="ct_24_fs">{item?.offset ? item?.offset : 0}</span> <span
                                                                    className="ct_grey_text">Kg CO2e</span></h5>

                                                            </div>
                                                        </>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card p-4  ct_border_green h-100">
                                        <div className="ct_footprint_cnt">
                                            <h4 className="mb-4"><strong>How do you compare</strong></h4>

                                            <div className="ct_transport_list mt-4">
                                                <div className="ct_transport_list_item border-0 row">
                                                    <div className="ct_item_left col-md-3">
                                                        <h4>Yours</h4>
                                                    </div>
                                                    <div className="ct_item_right col-md-9 justify-content-md-end">

                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="progress ct_progress_orange_bg">
                                                                <div className="progress-bar" role="progressbar"
                                                                    style={{ width: "100%" }} ></div>
                                                            </div>
                                                            <h5><span className="ct_24_fs">{totalMonthOffset ? totalMonthOffset : 0}</span> <span
                                                                className="ct_grey_text">Kg CO2e</span></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ct_transport_list_item border-0 row">
                                                    <div className="ct_item_left col-md-3">
                                                        <h4>India Avg :</h4>
                                                    </div>
                                                    <div className="ct_item_right col-md-9 justify-content-md-end">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="progress ct_progress_blue_bg">
                                                                <div className="progress-bar" role="progressbar"
                                                                    style={{ width: "100%" }}></div>
                                                            </div>
                                                            <h5><span className="ct_24_fs">600</span> <span
                                                                className="ct_grey_text">Kg CO2e</span></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ct_transport_list_item border-0 row">
                                                    <div className="ct_item_left col-md-3">
                                                        <h4>India Target :</h4>
                                                    </div>
                                                    <div className="ct_item_right col-md-9 justify-content-md-end">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="progress ct_progress_sky_bg">
                                                                <div className="progress-bar" role="progressbar"
                                                                    style={{ width: "100%" }}
                                                                ></div>
                                                            </div>
                                                            <h5><span className="ct_24_fs">250</span> <span
                                                                className="ct_grey_text">Kg CO2e</span></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className="card ct_card_lightblue p-4">
                                <h4 style={{ textAlign: "left" }}><strong>This is Equal to</strong></h4>
                                <div className="row mt-4">
                                    <div className="col-md-4 mb-md-0 mb-4">
                                        <div className="card p-4  ct_tracking_card ">
                                            <div className="ct_icon_bg ct_border_round_5 ">
                                                <img src={FlightsIcon}
                                                    alt="../assets/img/flights_icon.png" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="mb-0">{bankEquivalentValue[0] && bankEquivalentValue[0]?.medium_haul_flights} Medium Haul Flights</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-md-0 mb-4">
                                        <div className="card p-4  ct_tracking_card">
                                            <div className="ct_icon_bg ct_border_round_5 ">
                                                <img src={TreeIcon}
                                                    alt="../assets/img/tree_icon.png" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="mb-0">{bankEquivalentValue[0] && bankEquivalentValue[0]?.tree_planted} Trees planted</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-md-0 mb-4">
                                        <div className="card p-4 ct_tracking_card">
                                            <div className="ct_icon_bg ct_border_round_5 ">
                                                <img src={TaxiIcon}
                                                    alt="../assets/img/taxi_icon.png" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="mb-0">{bankEquivalentValue[0] && bankEquivalentValue[0]?.taxi_rides} Taxi Rides</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className="card p-4">
                                <h4 className="mb-4" style={{ textAlign: "left" }}><strong>Billing History</strong></h4>
                                {billingHistoryData && billingHistoryData.map((item: any) => (
                                    <div className="ct_border_bottom">
                                        <div className="d-flex justify-content-between align-items-center gap-2 mb-2 flex-wrap">
                                            <h5 className="mb-0">{item.anonymous_userid}</h5>
                                            <h5 className="mb-0"><strong>{item.kgco2e}</strong> <small className="ct_grey_text">Kg CO2e</small></h5>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                                            <p className="mb-0 ct_green_text">{item.offset_type}</p>
                                            <p className="mb-0 ct_green_text">₹ {item.amount}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="content-backdrop fade"></div>
                </div>
            </div>
        );
    }
}
