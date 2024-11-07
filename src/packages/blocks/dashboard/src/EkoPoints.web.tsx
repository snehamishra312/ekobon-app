import React from "react";
import { Row, Col } from "antd";
import { ekopointrightdown, ekopointleftdown } from "./assets";
import HeaderWeb from "../../../components/src/Header/Header.web";
import FooterWeb from "../../../components/src/Footer/Footer.web";
import "./ekopoints.web.css";
import { constants } from "../../../components/src/types";

const EkoPoints = () => {
  const EkoPointsConstants = constants.EkoPoints;
  return (
    <>
      <HeaderWeb />
      <div className="eko-point-sec-head">
        <div className="container">
          <div className="eko-point-head my-5 text-center">
            <h1>
              <span className="text-green">EKO </span> point
            </h1>
          </div>
          <div className="eko-point-sec-2">
            <Row gutter={48}>
              <Col lg={14} md={16} className="eko-point-sec-main">
                <div>
                  <img
                    className="ekopointheader1_ing"
                    src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/9zxvlaplyev66mqbidy0q2nvwshg/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Image%20Pasted%20at%202022-8-9%2013-06.jpg%22%3B%20filename%2A%3DUTF-8%27%27Image%2520Pasted%2520at%25202022-8-9%252013-06.jpg&response-content-type=image%2Fjpeg"
                    alt="img"
                  />
                </div>
              </Col>
              <Col lg={10} md={8} className="eko-point-sec-main">
                <div>
                  <img
                    className="ekopointheader1_ing"
                    src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/9cygdyo9lb4a3k3qlxaaczm7g82t/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Image%20Pasted%20at%202022-8-9%2013-06%20%25281%2529.jpg%22%3B%20filename%2A%3DUTF-8%27%27Image%2520Pasted%2520at%25202022-8-9%252013-06%2520%25281%2529.jpg&response-content-type=image%2Fjpeg"
                    alt="img"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="eko-point-sec-3 mt-5">
            <div className="eko-point-head my-5 text-center">
              <h1 className="text-green heading_green h1_font">
                {EkoPointsConstants.EKO_POINT_HEADER}
              </h1>
            </div>
            <Row gutter={48}>
              <Col lg={14} md={14} className="eko-point-sec-main">
                <div className="eko-point-sec-reduction">
                  <p className="headingp">
                    {EkoPointsConstants.EKO_POINT_TEXT1}
                  </p>
                  <p className="headingp">
                    {EkoPointsConstants.EKO_POINT_TEXT2} <br />
                  </p>
                  <p className="headingp">
                    {EkoPointsConstants.EKO_POINT_TEXT3}
                  </p>
                </div>
              </Col>
              <Col lg={10} md={10} className="eko-point-sec-main">
                <div>
                  <img
                    className="ekopointheader1_img"
                    src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/oak430m8zzbx8d86skq3b39b9qkf/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22Image%20Pasted%20at%202022-8-9%2013-06%20%25283%2529.jpg%22%3B%20filename%2A%3DUTF-8%27%27Image%2520Pasted%2520at%25202022-8-9%252013-06%2520%25283%2529.jpg&response-content-type=image%2Fjpeg"
                    alt="img"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="eko-point-sec mt-5">
        <div className="container">
          <div className="eko-point-head my-5 text-center">
            <h1>
              <span className="text-green">
                {EkoPointsConstants.EKO_BALANCE_HEADER1}
              </span>{" "}
              {EkoPointsConstants.EKO_BALANCE_HEADER2}
            </h1>
          </div>
          <div className="eko-point-sec-2">
            <Row gutter={48}>
              <Col lg={12} md={12} className="eko-point-sec-main">
                <div>
                  <p>{EkoPointsConstants.EKO_BALANCE_TEXT1}</p>
                </div>
              </Col>
              <Col lg={12} md={12} className="eko-point-sec-main">
                <div>
                  <p className="annual-avg">
                    {EkoPointsConstants.EKO_BALANCE_TEXT2}
                  </p>
                  <p className="annual-avg-p">
                    {EkoPointsConstants.EKO_BALANCE_TEXT3}
                  </p>
                  <p className="annual-avg-p">
                    {EkoPointsConstants.EKO_BALANCE_TEXT4}
                  </p>
                  <p className="annual-avg-p">
                    {EkoPointsConstants.EKO_BALANCE_TEXT5}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="eko-point-sec-3 mt-5">
            <Row gutter={64}>
              <Col lg={12} md={12} className="eko-point-sec-main2">
                <div className="eko-point-sec-tbl">
                  <p>{EkoPointsConstants.EKO_BALANCE_TEXT6}</p>
                  <table>
                    <tr>
                      <th>{EkoPointsConstants.EKO_BALANCE_TEXT7}</th>
                      <th>{EkoPointsConstants.EKO_BALANCE_TEXT8}</th>
                    </tr>
                    <tr>
                      <td>{`CF <= T1`}</td>
                      <td>CFx1</td>
                    </tr>
                    <tr>
                      <td>{`T1 < CF <= T2`}</td>
                      <td>{`T1x1 + (CF - T1)x2`}</td>
                    </tr>
                    <tr>
                      <td>{`T2 < CF <= T3`}</td>
                      <td>{`T1x1 + T2x2 + (CF - T2)x3`}</td>
                    </tr>
                    <tr>
                      <td>{`CF > T3`}</td>
                      <td>{`T1x1 + T2x2 + T3x3 + (CF - T3)x4`}</td>
                    </tr>
                  </table>
                </div>
              </Col>
              <Col lg={12} md={12} className="eko-point-sec-main">
                <div className="here-exp-sec">
                  <p className="here-exp text-green">
                    {EkoPointsConstants.EKO_BOTTOM_HEADER1} <br />
                    {EkoPointsConstants.EKO_BOTTOM_HEADER2}
                  </p>
                  <p className="here-exp-p2">
                    {EkoPointsConstants.EKO_BOTTOM_TEXT1} <br />
                    {EkoPointsConstants.EKO_BOTTOM_TEXT2} <br />
                    {EkoPointsConstants.EKO_BOTTOM_TEXT3}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="eko-point-sec-4 my-5">
            <div className="text-center supp-the-ann">
              <p>{EkoPointsConstants.EKO_BOTTOM_HEADER3}</p>
            </div>
            <Row gutter={16}>
              <Col lg={1} md={1} />
              <Col lg={10} md={10} className="eko-point-sec-main3">
                <div className="ekopoint-left-img">
                  <img src={ekopointleftdown} alt="img" />
                </div>
                <p>
                  {EkoPointsConstants.EKO_BOTTOM_TEXT4}
                  <span className="text-green text-green-bottom-sec">
                    {EkoPointsConstants.EKO_BOTTOM_TEXT5}
                  </span>
                  {EkoPointsConstants.EKO_BOTTOM_TEXT6}
                </p>
              </Col>
              <Col lg={2} md={2} />
              <Col lg={10} md={10} className="eko-point-sec-main3">
                <div className="ekopoint-right-img">
                  <img src={ekopointrightdown} alt="img" />
                </div>
                <p>
                  {EkoPointsConstants.EKO_BOTTOM_TEXT7}
                  <span className="text-green text-green-bottom-sec">
                    {EkoPointsConstants.EKO_BOTTOM_TEXT8}
                  </span>
                  {EkoPointsConstants.EKO_BOTTOM_TEXT9}
                </p>
              </Col>
              <Col lg={1} md={1} />
            </Row>
          </div>
        </div>
      </div>
      <FooterWeb />
    </>
  );
};

export default EkoPoints;
