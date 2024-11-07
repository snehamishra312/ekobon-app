import React from "react";
import { NavLink } from "react-router-dom";

const Logo = require("./assets/footerLogo.png");
const Facebook = require("./assets/facebook.png");
const Instagram = require("./assets/instagram.png");
const Twitter = require("./assets/twitter.png");
const LinkedIn = require("./assets/linkedIn.png");

const FooterList = [
  {
    title: "About Us",
    url: "/aboutus",
  },
  {
    title: "Projects",
    url: "/climate-project", ///"/#projectDetailsCategories",
  },
  {
    title: "FAQs",
    url: "/faqs",
  },
  {
    title: "Contact Us",
    url: "/contactus",
  },
  {
    title: "Terms & Conditions",
    url: "/termscondition",
  },
  {
    title: "Privacy Policy",
    url: "/privacyPolicy",
  },
];

const FooterWeb = () => {
  const menuList = FooterList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        {title === "Projects" ? (
          <a href={url} className="project_footer">
            {title}
          </a>
        ) : (
          <NavLink exact to={url} activeClassName="active">
            {title}
          </NavLink>
        )}
      </li>
    );
  });

  return (
    <footer className="carbon_footer_bar">
      <div className="container">
        <div className="footer-nav-sec">
          <ul className="footer-list">{menuList}</ul>
        </div>
        <hr className="footer_hr" />
        <div className="footer_icons">
          <div className="logo">
            <img src={Logo} />
          </div>
          <div className="footer_icons_text">
            <h4>
              <span> &#169;</span>
              CarbonOffsetapp. All Rights Reserved 2021
            </h4>
          </div>
          <ul className="footer_ul_icons">
            <li>
              <a
                target="_blank"
                href="https://twitter.com/ekobon_green?t=9W_3NYvKFEUChTbypbbIPA&s=08"
              >
                <img src={Twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/Ekobon-101865165892125/"
              >
                <img src={Facebook} alt="Facebook" className="fb_icon" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://instagram.com/ekobon_green?igshid=YmMyMTA2M2Y="
              >
                <img src={Instagram} alt="Instagram" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/ekobon/"
              >
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterWeb;
