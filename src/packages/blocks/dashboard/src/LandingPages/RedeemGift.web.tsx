import React from "react";
import HeaderWeb from "../../../../components/src/Header/Header.web";
import FooterWeb from "../../../../components/src/Footer/Footer.web";
import { Row, Col } from "antd";
import { constants } from "../../../../components/src/types";
import { deviceMode } from "../../../../components/src/CommonUtils";

const RedeemGift = () => {
  const redeemGiftConstants = constants.RedeemGift;
  const isMobile = deviceMode.isMobile;
  return (
    <>
      <HeaderWeb />
      <div className="landing-header">
        <h2>
          {redeemGiftConstants.REDEEM_HEADER1}
          <span className="text_bold">
            {redeemGiftConstants.REDEEM_HEADER2}
          </span>
        </h2>
      </div>
      <div className="page-content-redeem">
        <Row gutter={16} className="rd-pading-tb">
          <Col lg={12} md={12} className="page-content-redeem-sec">
            <div className="redeemgift_content">
              <div
                className={
                  isMobile
                    ? "redeemgift-content-block"
                    : "redeemgift-content-block redeemgift-content-block-ns redeemgift_content-ns"
                }
              >
                <label>{redeemGiftConstants.STEP1_HEADER}</label>
                <h3>{redeemGiftConstants.STEP1_TEXT1}</h3>
              </div>
              <p>{redeemGiftConstants.STEP1_TEXT2}</p>
            </div>
          </Col>
          <Col lg={12} md={12} className="page-content-redeem-sec">
            <img
              src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/ymwnxcpqyhifotddxu2djunbrzu4/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22RedeemImg1.jpg%22%3B%20filename%2A%3DUTF-8%27%27RedeemImg1.jpg&response-content-type=image%2Fjpeg"
              alt="img"
            />
          </Col>
        </Row>
        <Row gutter={16} className="rd-pading-tb">
          {isMobile && (
            <div>
              <Col lg={12} md={12} className="page-content-redeem-sec">
                <div className="redeemgift_content rd-pd-left">
                  <div className="redeemgift-content-block">
                    <label>{redeemGiftConstants.STEP2_HEADER}</label>
                    <h3>{redeemGiftConstants.STEP2_TEXT1}</h3>
                  </div>
                  <p>{redeemGiftConstants.STEP2_TEXT2}</p>
                </div>
              </Col>
              <Col lg={12} md={12} className="page-content-redeem-sec">
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/5jhw3ikjs8u36zy6p8jej8lfoov8/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22RedeemImg3.jpg%22%3B%20filename%2A%3DUTF-8%27%27RedeemImg3.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </Col>
            </div>
          )}
          {!isMobile && (
            <div className="redeemgift-content-section">
              <Col lg={12} md={12} className="page-content-redeem-sec">
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/5jhw3ikjs8u36zy6p8jej8lfoov8/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22RedeemImg3.jpg%22%3B%20filename%2A%3DUTF-8%27%27RedeemImg3.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </Col>
              <Col lg={12} md={12} className="page-content-redeem-sec">
                <div className="redeemgift_content rd-pd-left redeemgift_content-ns">
                  <div className="redeemgift-content-block redeemgift_content-step2 redeemgift-content-block-ns redeemgift_content-step2-ns">
                    <label>{redeemGiftConstants.STEP2_HEADER}</label>
                    <h3>{redeemGiftConstants.STEP2_TEXT1}</h3>
                  </div>
                  <p>{redeemGiftConstants.STEP2_TEXT2}</p>
                </div>
              </Col>
            </div>
          )}
        </Row>
        <Row gutter={16} className="rd-pading-tb">
          {isMobile && (
            <div>
              <Col lg={12} md={12} className="page-content-redeem-sec">
                <div className="redeemgift_content rd-pd-left">
                  <div className="redeemgift-content-block">
                    <label>{redeemGiftConstants.STEP3_HEADER}</label>
                    <h3>
                      <span>{redeemGiftConstants.STEP4_TEXT1}</span>
                      <span>{redeemGiftConstants.STEP4_TEXT2}</span>
                    </h3>
                  </div>
                  <p>{redeemGiftConstants.STEP4_TEXT3}</p>
                </div>
              </Col>
              <Col lg={12} md={12} className="page-content-redeem-sec">
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/ut2v0bb25pmn7lox4a8gopu1egcc/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22RedeemImg4.jpg%22%3B%20filename%2A%3DUTF-8%27%27RedeemImg4.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </Col>
            </div>
          )}
          {!isMobile && (
            <div className="redeemgift-content-section">
              <Col lg={12} md={12} className="page-content-redeem-sec">
                <div className="redeemgift_content rd-pd-left redeemgift_content-ns">
                  <div className="redeemgift-content-block redeemgift-content-block-ns ">
                    <label>{redeemGiftConstants.STEP3_HEADER}</label>
                    <h3>
                      {redeemGiftConstants.STEP4_TEXT1} <br />{" "}
                      {redeemGiftConstants.STEP4_TEXT2}
                    </h3>
                  </div>
                  <p>{redeemGiftConstants.STEP4_TEXT3}</p>
                </div>
              </Col>
              <Col lg={12} md={12} className="page-content-redeem-sec">
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/ut2v0bb25pmn7lox4a8gopu1egcc/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22RedeemImg4.jpg%22%3B%20filename%2A%3DUTF-8%27%27RedeemImg4.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </Col>
            </div>
          )}
        </Row>
        <Row gutter={16} className="rd-pading-tb">
          {!isMobile && (
            <>
              <Col lg={12} md={12} className="page-content-redeem-sec">
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/rfpvv9506jntlz6puwdjl4mto3fs/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22RedeemImg2.jpg%22%3B%20filename%2A%3DUTF-8%27%27RedeemImg2.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </Col>
              <Col lg={12} md={12} className="page-content-redeem-sec">
                <div className="redeemgift_content">
                  <div className="redeemgift-content-block redeemgift-content-block-ns redeemgift_content-ns">
                    <label>{redeemGiftConstants.STEP4_HEADER}</label>
                    <h3>
                      <span>{redeemGiftConstants.STEP3_TEXT1}</span>{" "}
                      <span>{redeemGiftConstants.STEP3_TEXT2}</span>
                    </h3>
                  </div>
                  <p>{redeemGiftConstants.STEP3_TEXT3}</p>
                </div>
              </Col>
            </>
          )}
          {isMobile && (
            <>
              <Col lg={12} md={12} className="page-content-redeem-sec">
                <div className="redeemgift_content">
                  <div className="redeemgift-content-block">
                    <label>{redeemGiftConstants.STEP4_HEADER}</label>
                    <h3>
                      <span>{redeemGiftConstants.STEP3_TEXT1}</span>{" "}
                      <span>{redeemGiftConstants.STEP3_TEXT2}</span>
                    </h3>
                  </div>
                  <p>{redeemGiftConstants.STEP3_TEXT3}</p>
                </div>
              </Col>
              <Col lg={12} md={12} className="page-content-redeem-sec">
                <img
                  src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/rfpvv9506jntlz6puwdjl4mto3fs/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22RedeemImg2.jpg%22%3B%20filename%2A%3DUTF-8%27%27RedeemImg2.jpg&response-content-type=image%2Fjpeg"
                  alt="img"
                />
              </Col>
            </>
          )}
        </Row>
      </div>
      <FooterWeb />
    </>
  );
};

export default RedeemGift;
