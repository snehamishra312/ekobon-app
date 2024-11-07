import React from "react";
// Customizable Area Start
import OffsetPortfolioController, {
  Props,
} from "./OffsetPortfolioController.web";
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';
import '../Style/Demo.css';
import { OffsetAmountIcon, TotalOffsetIcon, PlantTree, InvestediconIcon } from "../../assets";
import Chart from 'react-apexcharts'



export default class OffsetPortfolio extends OffsetPortfolioController {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const {
      options,
      series,
      projectHistoryData,
      offsetDetail,
      bankOrderHistory,
      isGraphShow
    } = this.state;
    return (
      <div>
        <div className="layout-page">
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card h-100 pt-0 ct_card_light_yellow ct_project_num_box  ">
                    <div className="card-body ct_portfolio_card ct_main_card d-flex justify-content-center align-items-center">
                      <figure className="mb-0 ct_project_card_box">
                        <img src={PlantTree} alt="../assets/img/plant_tree.png" />
                        <figcaption className="d-flex align-items-center gap-2 text-white justify-content-center mt-3"><h2 className="mb-0 text-white"><strong>{offsetDetail && offsetDetail?.no_of_trees}</strong></h2>Trees Planted</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card  h-100 pt-0 ct_card_light_yellow ct_project_num_box  ">
                    <div className="card-body ct_portfolio_card ct_main_card d-flex justify-content-center align-items-center">
                      <figure className="mb-0 ct_project_card_box">
                        <img src={InvestediconIcon} alt="../assets/img/invested_icon.png" />
                        <figcaption className="d-flex align-items-center gap-2 text-white justify-content-center mt-3"><h2 className="mb-0 text-white"><strong>{offsetDetail && offsetDetail?.invested_projects}</strong></h2>Projects Invested</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card p-4 h-100">
                    <h4 style={{ textAlign: "left" }}><strong>Project Distribution</strong></h4>
                    {isGraphShow == true &&
                      <div id="chart">
                        <Chart options={this.state.options} series={this.state.series} type="donut" width="500" />
                      </div>
                    }
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card  mb-4">
                    <div className="card-body ct_main_card">
                      <figure className="mb-0 ct_project_card_box">
                        <img src={TotalOffsetIcon} alt="../assets/img/total_offset_icon.png" />
                        <figcaption className="mt-3">
                          <h3 className="text-center"><strong>Total Offset</strong></h3>
                          <div className="d-flex align-items-center gap-2  justify-content-center ">
                            <h2 className="mb-0 "><strong>{offsetDetail && offsetDetail?.total_offset}</strong></h2><span className="ct_green_text">kg Co2e</span>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="card ">
                    <div className="card-body ct_main_card">
                      <figure className="mb-0 ct_project_card_box">
                        <img src={OffsetAmountIcon} alt="../assets/img/offset_amount_icon.png" />
                        <figcaption className="mt-3">
                          <h3 className="text-center"><strong>Total Offset Amount</strong></h3>
                          <h2 className="mb-0 text-center "><strong>₹ {offsetDetail && offsetDetail?.amount_invested}</strong></h2>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ct_footprint_card mt-4">
                <div className="ct_footprint_cnt">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <h5 className="mb-0">Offset your carbon footprint </h5>
                  </div>
                </div>
                <div className="ct_offset_btn w-50 text-end">
                  <button className="btn btn-primary" onClick={this.onHandleOffset}>Make an offset</button>
                </div>
              </div>
              <div className="card mt-4">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h4 className="card-title m-0 me-2"><strong>Order History</strong></h4>
                </div>
                <div className="table-responsive text-nowrap ">
                  <table className="table ct_order_table table-striped">
                    <thead>
                      <tr>
                        <th >NO.</th>
                        <th >PROJECTS Name</th>
                        <th >CARBON OFFSET (Kg)</th>
                        <th >OFFSET AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {bankOrderHistory && bankOrderHistory?.map((item: any, index: any) => (
                        <tr>
                          <td >{index + 1}</td>
                          <td><span>{item?.project_name}</span></td>
                          <td>{item?.total_offset} Kg</td>
                          <td>₹ {item?.amount_invested}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>
    );
  }
}
