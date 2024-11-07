import React from "react";
import {
  Collapse,
  Table,
  Col,
  Row,
  Button,
  Radio,
  Form,
  Input,
  Card,
  Checkbox,
  Spin,
} from "antd";

import { constants } from "../../../../components/src/types";
import IndividualAddtoCartController, {
  Props,
} from "./IndividualAddtoCartController.web";
import { CircleCrosh } from "../assets";

import OrderSummary from "../IndvOffset/OrderSummary.web";
import BusinessOrderSummary from "../Business/BusinessOffset/BusinessOrderSummary.web";
import ReactPaginate from "react-paginate";

const { Panel } = Collapse;

export default class IndividualAddtoCart extends IndividualAddtoCartController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {

    const {
      tabClick,
      CartSummeryData,
      loader,
      paymentStatusLoader,
      orderSummaryData,
      paginationData
    } = this.state;
    const TREE_CARBON_IMPACT = 0.04;
    const location = window.location.pathname;

    return (
      <div className="one-time-offset-sec">
        <div className="remove-overflow-x py-3 px-4">
          <div className="indv-faq-head mb-4">
            <button>
              <i
                className="fas fa-angle-left"
                onClick={() => this.props.history.goBack()}
              />
            </button>
            <p>Cart</p>
          </div>
          <Row gutter={16} className="remove-overflow-x py-3 px-2 align-items-start">
            <Col lg={16} md={16}>
              <div className="indv-add-cart-sec">
                <>
                  <div>
                    <Collapse
                      accordion
                      expandIconPosition="right"
                      activeKey={tabClick}
                      onChange={this.collapseOnchangeTab}
                    >
                      <Panel
                        header="Summary"
                        key="1"
                        className="indiv_add_cart_table indi-add-cart-block"
                      >
                        <div className="cart-border-top">
                          <Table
                            columns={[
                              {
                                title: "",
                                dataIndex: "id",
                                key: "id",
                                width: "2%",
                                render: (id) => (
                                  <div className="product-label-imgLbl-tbl ct_cart_img1">
                                    <img
                                      src={CircleCrosh}
                                      alt="img"
                                      className="tble-circle-img"
                                      onClick={() => this.handleRemoveCart(id)}
                                    />
                                  </div>
                                ),
                              },
                              {
                                title: "",
                                dataIndex: "attributes",
                                key: "attributes",
                                width: "2%",
                                render: (attributes) => (
                                  <div className="product-label-imgLbl-tbl ct_cart_img1">
                                    <img src={attributes?.image} alt="img" />
                                  </div>
                                ),
                              },
                              {
                                title: "PRODUCT",
                                dataIndex: "attributes",
                                key: "attributes",
                                render: (attributes) => (
                                  <div className="product-label-imgLbl-tbl">
                                    <p>{attributes?.product_name}</p>
                                  </div>
                                ),
                              },

                              {
                                title: "TYPE",
                                dataIndex: "attributes",
                                key: "type",
                                render: (attributes) => (
                                  <div className="product-label-tbl product-label-tbl-ns">
                                    <p >{attributes?.offset_type}</p>
                                  </div>

                                ),
                              },
                              {
                                title: "TOTAL PRICE",
                                dataIndex: "attributes",
                                key: "attributes",
                                render: (attributes) => (
                                  <div className="product-label-tbl">
                                    <p>{attributes?.total}</p>
                                  </div>
                                ),
                              },
                            ]}
                            dataSource={CartSummeryData}
                            loading={loader}
                            pagination={{
                              pageSize: 20,
                            }}
                          />

                          <div className="d-flex-pagination justify-content-pagination">
                            {location == "/business/AddtoCard" ? (
                              <div
                                className={
                                  this.state.isCreditCardMaxLimit
                                    ? "modal"
                                    : "nomodal"
                                }
                              >
                                <div className="modal-content">
                                  <span
                                    className="close"
                                    onClick={() => {
                                      this.setState({
                                        isCreditCardMaxLimit: false,
                                      });
                                    }}
                                  >
                                    X
                                  </span>
                                  <p className="modal-text">
                                    {constants.BusinessScreen.mailSupport}
                                  </p>
                                </div>
                              </div>
                            ) : null}
                            <ReactPaginate
                              className="class-pag inv-order-dash-pagin"
                              previousLabel={<i className="fa fa-angle-left" />}
                              nextLabel={<i className="fa fa-angle-right" />}
                              breakLabel={"..."}
                              breakClassName={"page-item"}
                              onPageChange={this.handlePageClick}
                              pageRangeDisplayed={5}
                              pageCount={paginationData?.total_pages || 1}
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
                            <Button
                              className={
                                CartSummeryData.length > 0
                                  ? "indv-cart-btn"
                                  : "disabed-click indv-cart-btn"
                              }
                              disabled={
                                CartSummeryData.length > 0 ? false : true
                              }
                              onClick={() => {
                                if (
                                  location == "/business/AddtoCard" &&
                                  orderSummaryData?.total_impact -
                                  orderSummaryData?.total_no_of_trees *
                                  TREE_CARBON_IMPACT >=
                                  this.state.carbonOffsetMaxLimitValue
                                ) {
                                  this.setState({ isCreditCardMaxLimit: true });
                                } else {
                                  this.handleNextCollapse();
                                }
                              }}
                            >
                              Continue
                            </Button>
                          </div>
                        </div>
                      </Panel>
                    </Collapse>
                  </div>
                </>
              </div>

            </Col>
            <Col lg={8} md={8}>
              {location == "/business/AddtoCard" ? (
                <BusinessOrderSummary
                  id={""}
                  history={""}
                  location={""}
                  orderSummaryData={orderSummaryData}
                />
              ) : (
                <OrderSummary
                  id={""}
                  history={""}
                  location={""}
                  orderSummaryData={orderSummaryData}
                />
              )}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
