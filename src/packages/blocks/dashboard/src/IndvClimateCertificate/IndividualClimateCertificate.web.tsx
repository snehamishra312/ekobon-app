import React from "react";
// Customizable Area Start
import IndividualClimateCertificateController, {
  Props,
} from "./IndividualClimateCertificateController.web";
import { Row, Col } from "antd";
import { climateCertificate, EarnClimateCertificate } from "../assets";
import { ScreenLoader } from "../../../dashboard/src/assets";
import { Link } from "react-router-dom";
// Customizable Area End

class IndividualClimateCertificate extends IndividualClimateCertificateController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { climateCertificatesList, loader } = this.state;

    return (
      <div className="one-time-offset-sec">
        <div className="remove-overflow-x py-3 px-4">
          <div className="indv-faq-head mb-4">
            <button>
              <Link
                to={
                  window.location.pathname ===
                  "/individual/climate-certificates"
                    ? "/individual/dashboard"
                    : "/business/dashboard"
                }
                className="greentxt"
              >
                <i className="fas fa-angle-left" />
              </Link>
            </button>
            <p>Climate Certificates</p>
          </div>
          <div className="indv-privacy-sec mt-5">
            {loader ? (
              <div className="screen-loader-center">
                <img
                  src={ScreenLoader}
                  alt="loader"
                  className="screen-loader"
                />
              </div>
            ) : (
              <Row gutter={[32, 32]}>
                {climateCertificatesList.map((data: any) => (
                  <Col key={data.id} lg={8} md={8}>
                    <div className="indv-climate-card">
                      <div className="indv-climate-card-img">
                        <img src={data.attributes.image} width={255} />
                        {/* <img src={climateCertificate} width={255} /> */}
                        <div className="indv-climate-card-img-overlay">
                          <div className="indv-climate-card-img-overlay-content px-2">
                            <Row gutter={24}>
                              <Col lg={6} md={6}>
                                <div className="indv-climate-card-img-overlay-download-btn">
                                  <span
                                    onClick={() =>
                                      this.handleDownloadCertificate(
                                        data.attributes
                                      )
                                    }>
                                    <i className="fa-solid fa-arrow-down" />
                                  </span>
                                </div>
                              </Col>
                              <Col lg={18} md={18}>
                                <div className="indv-climate-card-img-overlay-share-btn d-flex  justify-content-around">
                                  <p>Share</p>
                                  <span onClick={()=>window.open("https://twitter.com/intent/tweet?text=&via=carbonoffsetapp&url="+encodeURIComponent(data.attributes.image)+"&t="+encodeURIComponent('_image'),"sharer","toolbar=0,status=0,width=626,height=436")}>
                                    <i className="fa-brands fa-twitter" />
                                  </span>
                                  <span onClick={()=>window.open("http://www.facebook.com/sharer.php?u="+encodeURIComponent(data.attributes.image)+"&t="+encodeURIComponent('_image'),"sharer","toolbar=0,status=0,width=626,height=436")}>
                                    <i className="fa-brands fa-facebook-f" />
                                  </span>
                                  <span onClick={()=>window.open("https://www.linkedin.com/shareArticle?url="+encodeURIComponent(data.attributes.image)+"&t="+encodeURIComponent('_image'),"sharer","toolbar=0,status=0,width=626,height=436")}>
                                    <i className="fa-brands fa-linkedin-in" />
                                  </span>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                      <div className="py-3">
                        <p className="indv-climate-card-head">
                          ONE TIME OFFSET
                        </p>
                        <p className="indv-climate-card-text mt-2">
                          {data.attributes.name}
                        </p>
                        <div className="d-flex justify-content-between mt-3">
                          <p className="indv-climate-card-date-txt">Date</p>
                          <p className="indv-climate-card-date">
                            {data.attributes.certification_date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            )}

            <div className="indv-climate-card-earn">
              <Row gutter={32} className="px-5">
                <Col lg={12} md={12}>
                  <div className="d-flex align-items-center h-100">
                    <div>
                      <p className="indv-climate-card-earn-head">
                        Earn climate Certificates
                      </p>
                      <p className="indv-climate-card-earn-text">
                        You can earn climate certificates by investing in One
                        time or Subscription offsets and planting trees
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={12} md={12}>
                  <div className="indv-climate-card-earn-img d-flex justify-content-center mt-4">
                    <img src={EarnClimateCertificate} />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndividualClimateCertificate as React.ComponentType<any>;
// Customizable Area End
