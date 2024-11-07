import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import "./MarketingToolkit.css";
import { FIRSTBLOCK, BlackTree, BlueTree } from "../../assets";

export class MarketingTotalImpact extends Component {
  render() {
    const ImpactValue = window.location.href
      .split("/")
      .pop()
      .split("-");
    return (
      <div>
        <Row>
          <Col lg={12} md={12} xs={24} sm={24}>
            <div className="marketing-impact-content">
              <Card className={
                ImpactValue[0] === "white"
                  ? "impact_white"
                  : ImpactValue[0] === "blue"
                    ? "impact_blue"
                    : "impact_green"
              }>
                <div className="preview-card-padding">
                  <div>
                    <img src={
                      ImpactValue[0] === "white"
                        ? BlackTree
                        : ImpactValue[0] === "blue"
                          ? BlueTree
                          : FIRSTBLOCK
                    } alt="img" />
                    <label className={
                      ImpactValue[0] === "white"
                        ? "text_black"
                        : "text_white"
                    }>
                      {ImpactValue[2]}
                      <span>
                        {ImpactValue[1] === "kg" ? (
                          <>
                            kgCo<sub>2</sub>e reduced
                          </>
                        ) : (
                          "tonnes reduced"
                        )}
                      </span>
                    </label>
                  </div>
                  <p className={
                    ImpactValue[0] === "white"
                      ? "card-impact text_black"
                      : "card-impact text_white"
                  }>
                    Climate impact <br />
                    with Ekobon
                  </p>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MarketingTotalImpact;
