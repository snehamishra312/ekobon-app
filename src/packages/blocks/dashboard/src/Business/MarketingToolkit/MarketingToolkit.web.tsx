import React from "react";
// Customizable Area Start
import MarketingToolkitController, {
  Props,
} from "./MarketingToolkitController.web";
import { Row, Col, Card, Switch, Form, Select, Input } from "antd";
import "./MarketingToolkit.css";
import { FIRSTBLOCK, BlackTree, BlueTree } from "../../assets";
import "../../IndividaualScreen.web.css";
import { constants } from "../../../../../components/src/types";
// Customizable Area End
const { Option } = Select;
export default class MarketingToolkit extends MarketingToolkitController {
  render() {
    const {
      IsEnableImpact,
      selectedColor,
      selectedUnit,
      final_EmbededCode,
      total_impact,
      total_impact_value
    } = this.state;

    const {
      MARKET_TOOLKIT,
      EMBED_IMPACT,
    } = constants.MarketingToolkit;
    
    return (
      <>
        <div className="business_Project_MiddleContainer">
          <div className="Individual_Project_MidScreen_Main">
            <Row gutter={16} style={{width:"100%"}}>
              <Col lg={24} md={24}>
                <Card className="business_toolkit_block1">
                  <div className="first_Project_block1_Main">
                    <h2>Marketing Toolkit</h2>
                    <p className="first_Project_block_P busi-toolkit-header-text">
                      {MARKET_TOOLKIT}
                    </p>
                    <div className="toolkit_switch">
                      <Switch
                        checked={IsEnableImpact}
                        onChange={this.SwitchOnChange}
                      />
                      <span>Impact counter</span>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
            <div
              className={
                this.state.IsEnableImpact
                  ? "marketing-toolkit-enable-content"
                  : "marketing-toolkit-enable-content enable-content"
              }
            >
              <Card className="business_toolkit_enable-content">
                <Row gutter={16}>
                  <Col lg={12} md={12} xs={24} sm={24}>
                    <div className="toolkit-left-content">
                      <h2>Embed your impact</h2>
                      <p>
                        {EMBED_IMPACT}
                      </p>
                      <div className="mt-30">
                        <Form
                          name="basic"
                          layout="vertical"
                          initialValues={{ remember: true }}
                          autoComplete="off"
                        >
                          <Row>
                            <p className="margin-b-5">Color</p>
                          </Row>

                          <Form.Item name="toolkitColor">
                            <Select
                              placeholder="Green"
                              size="large"
                              allowClear
                              onChange={(e) =>
                                this.handleDropDownChange(e, "color")
                              }
                            >
                              <Option value="green">Green</Option>
                              <Option value="blue">Blue</Option>
                              <Option value="white">White</Option>
                            </Select>
                          </Form.Item>
                          <Row>
                            <p className="margin-b-5">Unit</p>
                          </Row>
                          <Form.Item name="toolkitUnit">
                            <Select
                              placeholder="Kg"
                              size="large"
                              allowClear
                              onChange={(e) =>
                                this.handleDropDownChange(e, "Unit")
                              }
                            >
                              <Option value="kg">Kg</Option>
                              <Option value="tonnes">Tonnes</Option>
                            </Select>
                          </Form.Item>
                        </Form>
                      </div>
                    </div>
                  </Col>
                  <Col lg={12} md={12} xs={24} sm={24}>
                    <div className="toolkit-right-content">
                      <Card>
                        <div className="preview-content">
                          <p>Preview</p>
                          <Card
                            className={
                              selectedColor === "white"
                                ? "impact_white"
                                : selectedColor === "blue"
                                ? "impact_blue"
                                : "impact_green"
                            }
                          >
                            <div className="preview-card-padding">
                              <div>
                                <img
                                  src={
                                    selectedColor === "white"
                                      ? BlackTree
                                      : selectedColor === "blue"
                                      ? BlueTree
                                      : FIRSTBLOCK
                                  }
                                  alt="img"
                                />
                                <label
                                  className={
                                    selectedColor === "white"
                                      ? "text_black"
                                      : "text_white"
                                  }
                                >
                                  {total_impact_value}
                                  <span>
                                    {selectedUnit === "kg" ? (
                                      <>
                                        kgCo<sub>2</sub>e reduced
                                      </>
                                    ) : (
                                      "tonnes reduced"
                                    )}
                                  </span>
                                </label>
                              </div>
                              <p
                                className={
                                  selectedColor === "white"
                                    ? "card-impact text_black"
                                    : "card-impact text_white"
                                }
                              >
                                Climate impact <br />
                                with Ekobon
                              </p>
                            </div>
                          </Card>
                          <div className="embed_content">
                            <div className="embed-text-code-copy">
                              <p>Embed code</p>
                              <p
                                className="copy_code"
                                onClick={this.CopytoClipText}
                              >
                                Copy code
                              </p>
                            </div>
                            <Card>
                              <Input.TextArea
                                // value={final_EmbededCode}
                                value={`<iframe src="${final_EmbededCode}" height="150" width="550"></iframe>`}
                                autoSize={{ minRows: 3, maxRows: 2 }}
                                // className="form_textarea"
                                readOnly
                              />
                            </Card>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
}
// Customizable Area End
