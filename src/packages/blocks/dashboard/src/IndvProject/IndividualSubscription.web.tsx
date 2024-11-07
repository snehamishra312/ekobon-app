import React from "react";
import IndividualProjectController, {
  Props,
} from "./IndividualProjectController.web";
import "./IndividualProject.web.css";
import "../IndividaualScreen.web.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { PAGES } from "../assets";
import IndividualProjectMain from "./IndividualProjectMain.web";
import MySubscriptionTable from "./MySubscriptionTable.web";

export class IndividualSubscription extends IndividualProjectController {

  render() {
    const { isUserLoggedIn, myProjectsSubscriptionsList, myProjectsSubscriptionsListPagination } = this.state;
    let orderPageCount = myProjectsSubscriptionsListPagination.pagination?.total_pages;

    return (
      <>
        <IndividualProjectMain />
        {isUserLoggedIn && (
          <>
            <MySubscriptionTable
              isUserLoggedIn={isUserLoggedIn}
              dataList={myProjectsSubscriptionsList}
              costOfOneCO2={this.state.costOfOneCO2}
            />
            <ReactPaginate
              className="class-pag inv-order-dash-pagin ns-page"
              previousLabel={<i className="fa fa-angle-left" />}
              nextLabel={<i className="fa fa-angle-right" />}
              breakLabel={"..."}
              breakClassName={"page-item"}
              onPageChange={this.handlePageClick}
              pageRangeDisplayed={5}
              pageCount={orderPageCount}
              pageClassName={"page-item"}
              breakLinkClassName={"page-link"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              nextClassName={"page-item"}
              previousLinkClassName={"previous page-link"}
              nextLinkClassName={"next page-link"}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </>
        )}
        {!isUserLoggedIn && (
          <div className="T_M_Header_Center border_empty_state">
            <img src={PAGES} alt="img" className="   T_M_windmil_image" />
            <p className="s_m_boxP T_m_boxP">
              No Orders two show login&nbsp;
              <Link to="/login">
                <span
                  style={{
                    color: "var(--color-individual)",
                    fontFamily: "Roboto-Bold",
                  }}
                >
                  Login
                </span>
              </Link>
              &nbsp;Start Offsetting your Carbon
            </p>
          </div>
        )}
      </>
    );
  }
}

export default IndividualSubscription as React.ComponentType<any>;
