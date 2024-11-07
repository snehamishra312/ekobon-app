import React from "react";
import {
  ArticleImg1,
  ArticleImg2,
  ArticleImg3,
  UserProfile1,
  UserProfile2,
  UserProfile3,
} from "../assets";
import { Row, Col, Button, Pagination } from "antd";
import HeaderWeb from "../../../../components/src/Header/Header.web";
import FooterWeb from "../../../../components/src/Footer/Footer.web";

const ReadMoreArticle = () => {
  return (
    <>
      <HeaderWeb />
      <div className="read-more-article">
        <div className="read_artical py-5">
          <div className="container">
            <div className="read_artical_center">
              <img
                src={ArticleImg1}
                alt="ArticleImg1"
                className="img-fluid ArticleImg1"
              />
              <div className="article_content">
                <h4>
                  Raplace your Car <br />
                  with a Bike
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi provident incidunt earum, aliquid sit vero qui
                  repellendus sunt saepe vel ratione repellat quaerat
                  voluptatibus dicta.
                </p>
                <div className="article_info">
                  <div className="left_view">
                    <img
                      src={UserProfile1}
                      alt="profile_img1"
                      className="img-fluid"
                    />
                    <span>JOHN DOE</span>
                  </div>
                  <div className="right_view">
                    <p>17 July 21</p>
                  </div>
                </div>
              </div>
              <div className="article_btn">
                <Button type="primary">Read</Button>
              </div>
            </div>

            <Row gutter={30}>
              <Col md={12}>
                <div className="read_artical_center article_profile_img">
                  <img
                    src={ArticleImg2}
                    alt="ArticleImg2"
                    className="ArticleImg2 img-fluid"
                  />
                  <div className="article_content">
                    <h4>
                      Renewable <br />
                      Growth must <br />
                      double by 2030
                    </h4>
                    <div className="article_info">
                      <div className="left_view">
                        <img
                          src={UserProfile2}
                          alt="UserProfile2"
                          className="img-fluid"
                        />
                        <span>JOHN DOE</span>
                      </div>
                      <div className="right_view">
                        <p>17 July 21</p>
                      </div>
                    </div>
                  </div>
                  <div className="article_btn">
                    <Button type="primary">Read</Button>
                  </div>
                </div>
              </Col>

              <Col md={12}>
                <div className="read_artical_center article_profile_img">
                  <img
                    src={ArticleImg3}
                    alt="ArticleImg3"
                    className="ArticleImg2 img-fluid"
                  />
                  <div className="article_content">
                    <h4>
                      Ux Climate <br />
                      change Set to <br />
                      Help Scale
                    </h4>
                    <div className="article_info">
                      <div className="left_view">
                        <img
                          src={UserProfile3}
                          alt="UserProfile3"
                          className="img-fluid"
                        />
                        <span>JOHN DOE</span>
                      </div>
                      <div className="right_view">
                        <p>17 July 21</p>
                      </div>
                    </div>
                  </div>
                  <div className="article_btn">
                    <Button type="primary">Read</Button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={30}>
              <Col md={12}>
                <div className="read_artical_center article_profile_img">
                  <img
                    src={ArticleImg2}
                    alt="ArticleImg2"
                    className="ArticleImg2 img-fluid"
                  />
                  <div className="article_content">
                    <h4>
                      Renewable <br />
                      Growth must <br />
                      double by 2030
                    </h4>
                    <div className="article_info">
                      <div className="left_view">
                        <img
                          src={UserProfile2}
                          alt="UserProfile2"
                          className="img-fluid"
                        />
                        <span>JOHN DOE</span>
                      </div>
                      <div className="right_view">
                        <p>17 July 21</p>
                      </div>
                    </div>
                  </div>
                  <div className="article_btn">
                    <Button type="primary">Read</Button>
                  </div>
                </div>
              </Col>

              <Col md={12}>
                <div className="read_artical_center article_profile_img">
                  <img
                    src={ArticleImg3}
                    alt="ArticleImg3"
                    className="ArticleImg2 img-fluid"
                  />
                  <div className="article_content">
                    <h4>
                      Ux Climate <br />
                      change Set to <br />
                      Help Scale
                    </h4>
                    <div className="article_info">
                      <div className="left_view">
                        <img
                          src={UserProfile3}
                          alt="UserProfile3"
                          className="img-fluid"
                        />
                        <span>JOHN DOE</span>
                      </div>
                      <div className="right_view">
                        <p>17 July 21</p>
                      </div>
                    </div>
                  </div>
                  <div className="article_btn">
                    <Button type="primary">Read</Button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={30}>
              <Col md={12}>
                <div className="read_artical_center article_profile_img">
                  <img
                    src={ArticleImg2}
                    alt="ArticleImg2"
                    className="ArticleImg2 img-fluid"
                  />
                  <div className="article_content">
                    <h4>
                      Renewable <br />
                      Growth must <br />
                      double by 2030
                    </h4>
                    <div className="article_info">
                      <div className="left_view">
                        <img
                          src={UserProfile2}
                          alt="UserProfile2"
                          className="img-fluid"
                        />
                        <span>JOHN DOE</span>
                      </div>
                      <div className="right_view">
                        <p>17 July 21</p>
                      </div>
                    </div>
                  </div>
                  <div className="article_btn">
                    <Button type="primary">Read</Button>
                  </div>
                </div>
              </Col>

              <Col md={12}>
                <div className="read_artical_center article_profile_img">
                  <img
                    src={ArticleImg3}
                    alt="ArticleImg3"
                    className="ArticleImg2 img-fluid"
                  />
                  <div className="article_content">
                    <h4>
                      Ux Climate <br />
                      change Set to <br />
                      Help Scale
                    </h4>
                    <div className="article_info">
                      <div className="left_view">
                        <img
                          src={UserProfile3}
                          alt="UserProfile3"
                          className="img-fluid"
                        />
                        <span>JOHN DOE</span>
                      </div>
                      <div className="right_view">
                        <p>17 July 21</p>
                      </div>
                    </div>
                  </div>
                  <div className="article_btn">
                    <Button type="primary">Read</Button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={30}>
              <Col md={12}>
                <div className="read_artical_center article_profile_img">
                  <img
                    src={ArticleImg2}
                    alt="ArticleImg2"
                    className="ArticleImg2 img-fluid"
                  />
                  <div className="article_content">
                    <h4>
                      Renewable <br />
                      Growth must <br />
                      double by 2030
                    </h4>
                    <div className="article_info">
                      <div className="left_view">
                        <img
                          src={UserProfile2}
                          alt="UserProfile2"
                          className="img-fluid"
                        />
                        <span>JOHN DOE</span>
                      </div>
                      <div className="right_view">
                        <p>17 July 21</p>
                      </div>
                    </div>
                  </div>
                  <div className="article_btn">
                    <Button type="primary">Read</Button>
                  </div>
                </div>
              </Col>

              <Col md={12}>
                <div className="read_artical_center article_profile_img">
                  <img
                    src={ArticleImg3}
                    alt="ArticleImg3"
                    className="ArticleImg2 img-fluid"
                  />
                  <div className="article_content">
                    <h4>
                      Ux Climate <br />
                      change Set to <br />
                      Help Scale
                    </h4>
                    <div className="article_info">
                      <div className="left_view">
                        <img
                          src={UserProfile3}
                          alt="UserProfile3"
                          className="img-fluid"
                        />
                        <span>JOHN DOE</span>
                      </div>
                      <div className="right_view">
                        <p>17 July 21</p>
                      </div>
                    </div>
                  </div>
                  <div className="article_btn">
                    <Button type="primary">Read</Button>
                  </div>
                </div>
              </Col>
            </Row>
            <Pagination
              defaultCurrent={1}
              total={50}
              className="read-pagination"
            />
          </div>
        </div>
      </div>
      <FooterWeb />
    </>
  );
};

export default ReadMoreArticle;
