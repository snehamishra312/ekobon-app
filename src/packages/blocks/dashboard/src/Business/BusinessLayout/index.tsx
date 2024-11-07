import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { Link, Redirect } from "react-router-dom";
const sideDashboardImg = require("../../../assets/dashboard.png");
const sideOffsetImg = require("../../../assets/Offset.png");
const sidePlantTreeImg = require("../../../assets/plantTree.png");
const sideProjectsTreeImg = require("../../../assets/projects.png");
const bussinesLayoutImage2 = require("../../../assets/BussinessLayoutImage2.png");
const bussinesLayoutImage1 = require("../../../assets/bussinesLayoutImage1.png");
import { LOGO, SIDEARROW } from "../../assets";
import { ClickAwayListener } from "@material-ui/core";
import BusinessNav from "../BusinessNav.web";
import { deviceMode } from "../../../../../components/src/CommonUtils";
const { Header, Content, Sider } = Layout;

const BusinessLayout = (props: any) => {
  const location = window.location.pathname;
  let loginDetails: any = localStorage.getItem("UserDetails");
  const loginFlag = JSON.parse(loginDetails)?.type;
  const [closeDrawer, setCloseDrawer] = useState<boolean>(true);

  const isMobile = deviceMode.isMobile;
  useEffect(() => {
    console.log("New path:", location);
    setCloseDrawer(true);
  }, [location]);
  return loginFlag !== "Bussiness" ? (
    <Redirect to="/login" />
  ) : (
    <>
      {loginFlag === "Bussiness" ? (
        <Layout>
          <ClickAwayListener
            onClickAway={() => setCloseDrawer(true)}
            mouseEvent="onMouseUp"
            touchEvent="onTouchEnd"
          >
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => {
                console.log(broken);
              }}
              collapsed={isMobile ? closeDrawer : false}
              onCollapse={(collapsed, type) => {
                if (type === "clickTrigger") {
                  setCloseDrawer(!closeDrawer);
                } else {
                  setCloseDrawer(false);
                }
                console.log(collapsed, type, closeDrawer);
              }}
              className="indv-dash-sidebar"
              width="215"
            >
              <div className="indv-logo-head ">
                <Link to="/">
                  <img src={LOGO} alt="LOGO" />
                </Link>
              </div>
              <Menu
                // theme="dark"
                mode="inline"
              // defaultSelectedKeys={['4']}
              >
                <Menu.Item key="1">
                  <Link to="/business/dashboard">
                    <span className="indv-dash-side-img">
                      <img src={sideDashboardImg} />
                    </span>
                    Dashboard
                    {location === "/business/dashboard" ? (
                      <img src={SIDEARROW} alt="" className="image_side_nav" />
                    ) : null}
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/business/offset-employee">
                    <span className="indv-dash-side-img">
                      <img src={sideOffsetImg} />
                    </span>
                    Offset
                    {location === "/business/offset-employee" ? (
                      <img src={SIDEARROW} alt="" className="image_side_nav" />
                    ) : null}
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/business/plant-tree">
                    <span className="indv-dash-side-img">
                      <img src={sidePlantTreeImg} />
                    </span>
                    Plant Trees
                    {location === "/business/plant-tree" ? (
                      <img src={SIDEARROW} alt="" className="image_side_nav" />
                    ) : null}
                  </Link>
                </Menu.Item>
                <Menu.SubMenu
                  title={
                    <span style={{ fontSize: "12px" }}>
                      <span className="indv-dash-side-img">
                        <img src={sideProjectsTreeImg} />
                      </span>{" "}
                      My Details
                    </span>
                  }
                >
                  <Menu.Item>
                    <Link to="/business/project">
                      <span className="indv-dash-side-img">
                        <img src={sideProjectsTreeImg} />
                      </span>{" "}
                      My Projects
                      {location === "/business/project" ? (
                        <img
                          src={SIDEARROW}
                          alt=""
                          className="image_side_nav"
                        />
                      ) : null}
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/business/mysubscription">
                      <span className="indv-dash-side-img">
                        <img src={sideProjectsTreeImg} />
                      </span>{" "}
                      My Subscription
                      {location === "/business/mysubscription" ? (
                        <img
                          src={SIDEARROW}
                          alt=""
                          className="image_side_nav"
                        />
                      ) : null}
                    </Link>
                  </Menu.Item>
                </Menu.SubMenu>

                <Menu.Item key="5">
                  <Link to="/business/marketing-toolkit">
                    <span className="indv-dash-side-img">
                      <img src={bussinesLayoutImage1} />
                    </span>
                    Marketing Toolkit
                    {location === "/business/marketing-toolkit" ? (
                      <img src={SIDEARROW} alt="" className="image_side_nav" />
                    ) : null}
                  </Link>
                </Menu.Item>

                <Menu.Item key="6">
                  <Link to="/business/Carbon-Reduction-tips">
                    <span className="indv-dash-side-img">
                      <img src={bussinesLayoutImage2} />
                    </span>
                    Carbon Reduction tips
                    {location === "/business/Carbon-Reduction-tips" ? (
                      <img src={SIDEARROW} alt="" className="image_side_nav" />
                    ) : null}
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
          </ClickAwayListener>

          <Layout className="indv-layout">
            <Header className="site-layout-sub-header-background">
              <BusinessNav />
            </Header>

            <Content>
              <div
                className="site-layout-background"
                style={{ minHeight: 360 }}
              >
                {props.children}
              </div>
            </Content>
          </Layout>
        </Layout>
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )}
    </>
  );
};

export default BusinessLayout;
