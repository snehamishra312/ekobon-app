import React, { useState } from "react";
import { Table } from "antd";
import IndividualProfileBillingHistory from "../../../CustomisableUserProfiles/src/billing-history-profile/IndividualProfileBillingHistory.web";
import IndividualProfilecancelsubscription from "../../../CustomisableUserProfiles/src/cancel-subscription/IndividualProfilecancelsubscription.web";
import { DownloadIcon } from "../assets";
import { deviceMode } from "../../../../components/src/CommonUtils";
import { roundTwoDecimal } from "../../../../framework/src/Utilities";

const DashboardTableWeb = (props: any) => {

  const { isMobile } = deviceMode;

  const [isShowModal, setIsShowModal] = useState<any>(false);
  const [isShowModalCancel, setIsShowModalCancel] = useState<any>(false);

  let cancelSubscription = props.change === true ? {
    title: "Action",
    key: "SubscriptionAction",
    className: "same_change",
    render: (item: any, record: any) => (
      <>
        <span className="profile-subscription-action">
          <a onClick={() => showModalCancel(item)}>Cancel</a>
        </span>
      </>
    ),
  } : props?.change === false ? {
    title: "Action",
    key: "SubscriptionAction",
    className: "same_change",
    render: (item: any, record: any) => (
      <>
        <span className="profile-subscription-action">
          <a onClick={() => showModalCancel(item)}>Cancel</a>
        </span>
      </>
    ),
  } : {};
  let orderNumber = window.location.pathname === "/individual/dashboard" || window.location.pathname === "/business/dashboard" ? {
    title: "ORDER NUMBER",
    dataIndex: "attributes",
    key: "age",
    className: "same_change",
    render: (attributes: any) => <p>{attributes?.order_number}</p>,
  } : {};

  let orderName = window.location.pathname === "/business/profile" ? {
    title: "ORDER NAME",
    dataIndex: "attributes",
    key: "age",
    className: "same_change",
    render: (attributes: any) => <p>{attributes?.order_name}</p>,
  } : {};


  const [itemData, setItemData] = useState<any>();

  const showModal = (item: any) => {
    setItemData(item);
    setIsShowModal(!isShowModal);
  };
  const showModalCancel = (item: any) => {
    setItemData(item);
    setIsShowModalCancel(!isShowModalCancel);
  };

  return (
    <>
      {isShowModal && <IndividualProfileBillingHistory history={""} dataList={itemData} change={props?.change} />}
      {isShowModalCancel && <IndividualProfilecancelsubscription history={""} dataList={itemData} change={props?.change} />}
      {isMobile ? props?.dataList?.map((item: any) => (
        item?.attributes?.giftcard == "true" &&
        <div
          className={
            item?.isSelected
              ? "active_project"
              : "s_m_inner_box2_order"
          }
          key={item?.id}
        >
          <div className="s_m_box2_inner_part">
            <div className="s_m_box2_inner_order subscripttion-image-bussiness">
              <img
                src={
                  item?.attributes?.image
                }
                alt="img"
                className=" s_m_inner_Image_main_order"
              />
            </div>
            <div className="s_m_box2_inner_order">
              <h4 className="T_M_inner2_head1">
                Redeem
              </h4>
              <div className="T_M_inner2_image T_M_inner2_image-mobile">
                <h4 className="T_M_inner2_head1">
                </h4>
                <div className="s_m_box2_inner_button">CO2e t: {roundTwoDecimal(item?.attributes?.carbon_offset && item?.attributes?.carbon_offset)}</div>
              </div>
            </div>
          </div>
          <div className="order_date">ID: {item?.attributes?.order_number}</div>
          <div className="s_m_box2_inner_carbon_order">
            <div>
              <h1 className="T_M_Main_H ">
                <span className="T_M_Main_H1">
                  ₹{item?.attributes?.total}
                </span>
              </h1>
            </div>
            <div className="s_m_box2_inner_carbon_off1">
              <a onClick={() => showModal(item)}>
                <span className="first_blockT T_M_Inner_Order">
                  Invoice
                  </span>
                <img src={DownloadIcon} />
              </a>
            </div>
          </div>
        </div>
      ))
        : <Table
          columns={[
            {
              title: "PROJECT IMAGE",
              dataIndex: "attributes",
              key: "tblimg",
              className: "Image_change indv-dash-order-table-img",
              render: (attributes: any) => (
                <img
                  className="Image_set"
                  src={attributes?.image}
                  width={"48px"}
                />
              ),
            },
            {
              title:"PROJECT NAME",
              dataIndex: "attributes",
              key: "projectName",
              className: "same_change",
              render: (attributes: any) => <p>{attributes?.giftcard == "true" ? "Redeemed" : attributes?.project_name}</p>,
            },
            orderName,
            orderNumber,
            {
              title: "CARBON OFFSET (CO2E)",
              dataIndex: "attributes",
              key: "carOffset",
              className: "same_change",
              render: (attributes: any) => <p>{attributes?.carbon_offset && attributes?.carbon_offset}</p>,

            },
            {
              title: "AMOUNT",
              dataIndex: "attributes",
              key: "total",
              className: "same_change",
              render: (attributes: any) => (
                <div className="product-label-tbl">
                  <p>₹{attributes?.total}</p>
                </div>
              ),
            },
            {
              title: "BILLING HISTORY",
              key: "action",
              className: "same_change",
              render: (item: any, record: any) => (
                <span className="profile-subscription-billing">
                  <a onClick={() => showModal(item)}>See</a>
                </span>
              ),
            },
            window.location.pathname === "/individual/profile" ? cancelSubscription : {}
          ]}
          dataSource={props?.dataList}
          className="indv-dash-custom-tbl indv-dash-order-table"
        />}
    </>
  );
};

export default DashboardTableWeb;
