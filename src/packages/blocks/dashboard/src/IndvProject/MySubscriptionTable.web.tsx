import React, { useState } from "react";
import { Table, Card } from "antd";
import IndividualProfilecancelsubscription from "../../../CustomisableUserProfiles/src/cancel-subscription/IndividualProfilecancelsubscription.web";
import IndividualProfileRenewSubscription from "../../../CustomisableUserProfiles/src/renew-subscription/IndividualProfileRenewSubscription.web";
import { deviceMode } from "../../../../components/src/CommonUtils";
import { constants } from "../../../../components/src/types";
import { roundTwoDecimal } from "../../../../framework/src/Utilities";
const MySubscriptionTable = (props: any) => {
  const [itemData, setItemData] = useState<any>();
  const [isShowModalCancel, setIsShowModalCancel] = useState<any>(false);
  const [isShowModalRenew, setIsShowModalRenew] = useState<any>(false);

  const {
    DATE_RANGE,
    AMOUNT_DUE,
    FREQUENCY,
    CO2E,
    RENEW,
    CANCEL,
    COMPLETED,
    MONTHLY,
    QUATER,
    SEMIANNUAL,
    ANNUAL,
    IN_QUEUE,
  } = constants.MySubscriptionTable;

  const showModalCancel = (item: any) => {
    setItemData(item);
    setIsShowModalCancel(!isShowModalCancel);
  };

  const showModalRenew = (item: any) => {
    setItemData(item);
    setIsShowModalRenew(!isShowModalRenew);
  };

  const handleRenewChange = (value: boolean) => {
    setIsShowModalRenew(value);
  };

  const handleCancelChange = (value: boolean) => {
    setIsShowModalCancel(value);
  };
  const isMobile = deviceMode.isMobile;
  let currency_conversion = localStorage.getItem("currency_conversion");
  let currency_conversion_response = currency_conversion
    ? JSON.parse(currency_conversion)
    : null;
   
  return (
    <>
      {isShowModalCancel && (
        <IndividualProfilecancelsubscription
          history={""}
          dataList={itemData}
          change={props.change}
          handleCancelChange={handleCancelChange}
        />
      )}
      {isShowModalRenew && (
        <IndividualProfileRenewSubscription
          history={""}
          dataList={itemData}
          change={props.change}
          handleRenewChange={handleRenewChange}
        />
      )}
      {isMobile ? (
        props?.dataList?.map((data: any, i: any) => {
          return (
            <div className="my-subscription-wrapper">
              <p className="my-subscription-title">
                {data.attributes.project_name}
              </p>
              <div className="my-subscription-card">
                <div className="my-subscription-card-table-data">
                  <div className="my-subscription-card-name">
                    <h4 className="my-subscription-card-project_type">
                      {data.attributes.project_type}
                    </h4>
                  </div>
                  <div>
                    <div className="my-subscription-card-header">
                      {DATE_RANGE}
                    </div>
                    <div className="my-subscription-card-date">
                      <div className="my-subscription-card-subtext">
                        {data.attributes.activated_at}
                      </div>
                      <div className="my-subscription-card-subtext">|</div>
                      <div className="my-subscription-card-subtext">
                        {data.attributes.expired_at}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="my-subscription-card-header">
                      {AMOUNT_DUE}
                    </div>
                    <div className="my-subscription-card-amount_invested">
                      ₹ {data.attributes.due_amount
}
                    </div>
                  </div>
                </div>
                <div className="my-subscription-action">
                  <div>
                    <span className="my-subscription-card-header">
                      {FREQUENCY}
                    </span>
                    <div className="my-subscription-card-frequency-value">
                      {data.attributes?.frequency === 12 ? MONTHLY : null}
                      {data.attributes?.frequency === 3 ||
                      data.attributes?.frequency === 4
                        ? QUATER
                        : null}
                      {data.attributes?.frequency === 2 ||
                      data.attributes?.frequency === 6
                        ? SEMIANNUAL
                        : null}
                      {data.attributes?.frequency === 1 ? ANNUAL : null}
                    </div>
                  </div>
                  <div className="my-subscription-card-total_offset">
                    {CO2E}
                    {data.attributes.total_offset}
                  </div>
                  {data.attributes?.is_cancelled === true &&
                  data.attributes?.is_renewable === false ? (
                    <span className="my-subscription-card-renew-disabled">
                      {COMPLETED}
                    </span>
                  ) : (
                    <>
                      <div>
                        <a
                          className={
                            data?.attributes?.is_renewable
                              ? "my-subscription-card-renew"
                              : "my-subscription-card-renew-disabled"
                          }
                          onClick={() => {
                            if (data?.attributes?.is_renewable) {
                              showModalRenew(data);
                            }
                          }}
                        >
                          {RENEW}
                        </a>
                      </div>
                      <div>
                        <a
                          className={
                            data?.attributes?.is_cancelled
                              ? "my-subscription-card-renew-disabled"
                              : "my-subscription-card-cancel"
                          }
                          onClick={() => {
                            if (!data?.attributes?.is_cancelled) {
                              showModalCancel(data);
                            }
                          }}
                        >
                          {CANCEL}
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <Table
          columns={[
            {
              title: "PROJECT NAME",
              dataIndex: "attributes",
              key: "projectName",
              className: "name_change",
              render: (attributes: any) => <p>{attributes?.project_name}</p>,
            },
            {
              title: "PROJECT TYPE",
              dataIndex: "attributes",
              key: "projectType",
              className: "name_change",
              render: (attributes: any) => <p>{attributes?.project_type}</p>,
            },
            {
              title: "FREQUENCY",
              dataIndex: "attributes",
              key: "frequency",
              className: "name_change",
              render: (attributes: any) => (
                <p>
                  {attributes?.frequency === 12 ? MONTHLY : null}
                  {attributes?.frequency === 3 || attributes?.frequency === 4
                    ? QUATER
                    : null}
                  {attributes?.frequency === 2 || attributes?.frequency === 6
                    ? SEMIANNUAL
                    : null}
                  {attributes?.frequency === 1 ? ANNUAL : null}
                </p>
              ),
            },
            {
              title: "ACTIVATED ON",
              dataIndex: "attributes",
              key: "activatedDate",
              className: "name_change",
              render: (attributes: any) => <p>{attributes?.activated_at}</p>,
            },
            {
              title: "DUE DATE",
              dataIndex: "attributes",
              key: "dueDate",
              className: "name_change",
              render: (attributes: any) => <p>{attributes?.expired_at}</p>,
            },
            {
              title: "OFFSET",
              dataIndex: "attributes",
              key: "offset",
              className: "same_change",
              render: (attributes: any) => <p>{
                roundTwoDecimal(attributes?.due_amount/ (props.costOfOneCO2*currency_conversion_response?.currency_rate))
              }</p>,
            },
            {
              title: "AMOUNT DUE",
              dataIndex: "attributes",
              key: "amountDue",
              className: "same_change",
              render: (attributes: any) => (
                <div className="product-label-tbl">
                  <p>₹{attributes?.due_amount}</p>
                </div>
              ),
            },
            {
              title: "ACTION",
              key: "SubscriptionAction",
              className: "same_change",
              render: (attributes: any, item: any) => (
                <>
                  {attributes?.attributes?.is_cancelled === true &&
                  attributes?.attributes?.is_renewable === false ? (
                    <p className="my-subscription-card-renew-disabled">
                      {COMPLETED}
                    </p>
                  ) : (
                    <>
                      <span
                        className={
                          attributes?.attributes?.is_renewable
                            ? "my-subscription-card-renew"
                            : "my-subscription-card-renew-disabled"
                        }
                      >
                        <a
                          onClick={() => {
                            if (attributes?.attributes?.is_renewable) {
                              showModalRenew(item);
                            }
                          }}
                        >
                          {RENEW}&nbsp;&nbsp;
                        </a>
                      </span>
                      <span>
                        <a
                          className={
                            attributes?.attributes?.is_cancelled
                              ? "my-subscription-card-renew-disabled"
                              : "my-subscription-card-cancel"
                          }
                          onClick={() => {
                            if (!attributes?.attributes?.is_cancelled) {
                              showModalCancel(item);
                            }
                          }}
                        >
                          {CANCEL}
                        </a>
                      </span>
                    </>
                  )}
                </>
              ),
            },
          ]}
          dataSource={props.dataList}
          pagination={{ defaultPageSize: 20 }}
          className="indv-dash-custom-tbl indv-dash-order-table"
        />
      )}
    </>
  );
};

export default MySubscriptionTable;
