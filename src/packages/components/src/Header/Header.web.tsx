import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
const Logo = require("./assets/Logo.png");
const DownImg = require("./assets/down.png");
const UpImg = require("./assets/uparrow.png");
import { Dropdown, Menu, Space, Col, Row } from "antd";

const MenuList = [
  {
    title: "Our Approach",
    url: "/our-approach",
  },
  {
    title: "Climate Projects",
    url: "/climate-project",
  },
  {
    title: "About Us",
    url: "/aboutus",
  },
];

const HeaderWeb = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  const checkOurApproachRoute = window.location.pathname == "/our-approach";
  return (
    <div
      className={
        checkOurApproachRoute ? "carbon-navbar-our-approach" : "carbon-navbar"
      }
    >
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={Logo} />
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={clicked ? "menu-list menu-list-items" : "menu-list close menu-list-items"}>
            {menuList}
            <li className="drop_down_hover" style={{ position: "relative" }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Resources
                  <img
                    className="dropdown_img"
                    src={DownImg}
                    alt="ekobon-dropdown"
                    width={16}
                  />
                  <img
                    className="updown_img"
                    src={UpImg}
                    alt="ekobon-updown"
                    width={16}
                  />
                  <div className="hover_div">
                    <div className="hover-div-dropdown-a">
                      <NavLink exact to="/redeemgift" activeClassName="active">
                        How to Redeem Gifts
                      </NavLink>
                    </div>

                    <hr />
                    <div className="hover-div-dropdown-a">
                      <NavLink exact to="/eko-points" activeClassName="active">
                        Eko Points
                      </NavLink>
                    </div>

                    <hr />
                    <div className="hover-div-dropdown-a">
                      <NavLink exact to="/faqs" activeClassName="active">
                        FAQs
                      </NavLink>
                    </div>
                  </div>
                </Space>
              </a>
            </li>
            <li>
              <NavLink exact to="/contactus" activeClassName="active">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderWeb;
