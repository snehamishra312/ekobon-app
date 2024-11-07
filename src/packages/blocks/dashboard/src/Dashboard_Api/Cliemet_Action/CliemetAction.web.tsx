import React from "react";
// Customizable Area Start
import ClimateActionController, {
  Props,
} from "./ClimateActionController.web";
import ReactApexChart from 'react-apexcharts';
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';
import { ReduseWaste, UsePublic, ReduseMeet, ReduseEnergy, RefineIcon, PortFolioIcon, MyFootPrint1, SustainabilityIcon } from '../../assets';
export default class ClimateAction extends ClimateActionController {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      options,
      series,
      totalOffset,
      isOffset,

    } = this.state;
    return (
      <div>
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            <div className="col-md-12">
              <div className="card p-4">
                <h4 className="fw-bold text-center">My Climate Action</h4>
                <div className="ct_climate_graph_main">
                  <div className="row">
                    <div className="col-md-8 mx-auto">
                      <div className="ct_graph_title d-flex justify-content-between align-items-center mt-4">
                        <h5>My Carbon Footprint</h5>
                        <div className="ct_offset_num">
                          <h4><span className="ct_green_text">{totalOffset ? totalOffset : 0} KgCo2</span> Month</h4>
                        </div>
                      </div>
                      <div className="ct_graph_div">
                        {isOffset == false &&
                          <ReactApexChart options={options} series={series} type="bar" height={350} />
                        }
                        <div id="ct_carbon_footprint" ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ct_footprint_card mt-4">
                <div className="ct_footprint_cnt">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <h5 className="mb-0">Reduce what you can,then offset </h5>
                  </div>
                </div>
                <div className="ct_offset_btn w-50 text-end">
                  <button className="btn btn-primary" onClick={this.onHandleOffset}>Make an offset</button>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-3 mb-4">
                  <a href="/api/partner/trackmyfootprint" className="card p-4 ct_footprint_box_bg">
                    <figure>
                      <img src={MyFootPrint1} alt="assets/img/my_footprint1.png" />
                      <figcaption>
                        <h4>Track My Footprint </h4>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="col-md-3 mb-4">
                  <a href="/api/partner/portfolio" className="card p-4 ct_footprint_box_bg">
                    <figure>
                      <img src={PortFolioIcon} alt="assets/img/portfolio_icon.png" />
                      <figcaption>
                        <h4>My Climate Offset Portfolio </h4>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="col-md-3 mb-4">
                  <a href="/api/partner/refine/footprint" className="card p-4 ct_footprint_box_bg">
                    <figure>
                      <img src={RefineIcon} alt="assets/img/refine_icon.png" />
                      <figcaption>
                        <h4>Refine Footprint Calculation </h4>
                      </figcaption>
                    </figure>
                  </a>
                </div>
                <div className="col-md-3 mb-4">
                  <a href="#" className="card p-4 ct_footprint_box_bg">
                    <figure>
                      <img src={SustainabilityIcon} alt="assets/img/sustainablity_icon.png" />
                      <figcaption>
                        <h4>Take  Sustainability Challange </h4>
                      </figcaption>
                    </figure>
                  </a>
                </div>

              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="ct_tips_bg">
                    <div className="ct_tips_head">
                      <h4>Tips Of The Day</h4>
                    </div>
                    <div className="ct_tips_cnt">
                      <p className="mb-0 pb-3 text-white">1.Reduce your energy consumption by turning off lights and electronics when not in use.</p>
                    </div>
                  </div>

                </div>

              </div>

              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="card p-4">
                    <h4 className="mb-4" style={{ textAlign: "left" }}>How to reduce Carbon Footprint?</h4>

                    <div className="d-flex justify-content-between align-items-center  mb-4 gap-2 mt-2">
                      <div className="ct_left_content">
                        <div className="ct_icon_bg">
                          <img src={ReduseEnergy} alt="../assets/img/reduse_energy.png" />
                        </div>
                        <div className="ct_left_cnt">
                          <h4 style={{ textAlign: "left" }}>Reduce Energy Consumption</h4>
                          <p className="mb-0">One of the biggest contributors to carbon emissions is the energy we use in our daily lives.</p>
                        </div>
                      </div>
                      <div className="ct_right_cnt">
                        <a href="#"> <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center  mb-4 gap-2">
                      <div className="ct_left_content">
                        <div className="ct_icon_bg">
                          <img src={UsePublic} alt="../assets/img/use_public.png" />
                        </div>
                        <div className="ct_left_cnt">
                          <h4 style={{ textAlign: "left" }}>Use Public Transport or Carpooling</h4>
                          <p className="mb-0">Transportation is another major contributor to carbon emissions.</p>
                        </div>
                      </div>
                      <div className="ct_right_cnt">
                        <a href="#"> <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center  mb-4 gap-2">
                      <div className="ct_left_content">
                        <div className="ct_icon_bg">
                          <img src={ReduseMeet} alt="../assets/img/reduse_meet.png" />
                        </div>
                        <div className="ct_left_cnt">
                          <h4 style={{ textAlign: "left" }}>Reduce Meat Consumption</h4>
                          <p className="mb-0">The meat industry is a significant contributor to carbon emissions</p>
                        </div>
                      </div>
                      <div className="ct_right_cnt">
                        <a href="#"> <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center  mb-4 gap-2">
                      <div className="ct_left_content">
                        <div className="ct_icon_bg">
                          <img src={ReduseWaste} alt="../assets/img/reduse_waste.png" />
                        </div>
                        <div className="ct_left_cnt">
                          <h4 style={{ textAlign: "left" }}>Reduce Waste</h4>
                          <p className="mb-0">Waste production is another major contributor to carbon emissions. By reducing waste, you can significantly reduce your carbon footprint.</p>
                        </div>
                      </div>
                      <div className="ct_right_cnt">
                        <a href="#"> <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-backdrop fade"></div>
      </div>
    );
  }
}
