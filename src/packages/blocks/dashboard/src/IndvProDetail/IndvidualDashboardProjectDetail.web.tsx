import React from "react";
import "./IndividualProDetail.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import ReactPlayer from "react-player";
import { HISTORY } from "../../../../components/src/comman";
import IndividualScreenController from "../IndividualScreenController.web";
// import IndividualDashboardProjectDetailController, {
//     Props,
//   } from "./IndividualDashboardProjectDetailController.web";
export class IndvidualDashboardProjectDetail extends IndividualScreenController {

  handleback = () => {
    return HISTORY.goBack();
  };

  handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  renderIconsHeaderProjectDetail = () => {
    const date = this.props.location.state.item.attributes.date;
    var scocialfb = this.props.location.state.item.attributes.facebook
    var scocialtwitter = this.props.location.state.item.attributes.twitter
    var scocialln = this.props.location.state.item.attributes.linkdin
    //    var ndate= new Date(this.props.location.state.item.attributes.date)

    return (
      <>
        <div className="project_detail_date_cancel">
          <p className="project_main_dateP">{date}</p>
          <MdCancel
            onClick={() => {
              this.handleback();
            }}
            className="project_detail_cancel_icon"
          />
        </div>
        <h1 className="main_class_project_head">
          {this.props.location.state.item.attributes.project_name}
        </h1>

        <div className="project_icons">
          <p className="projectDetailP">Share</p>
          <AiOutlineTwitter href={scocialfb} className="project_SocialIcon" />
          <FaFacebookF href={scocialtwitter} className="project_SocialIcon" />
          <FaLinkedinIn href={scocialln} className="project_SocialIcon" />
        </div>
      </>
    );
  };

  renderProjectDetailImagePart = () => {
    return (
      <div>
        <img
          src={this.props.location.state.item.attributes.image}
          alt="IMG"
          className="project_detail_img"
        />
        <p className="project_detail_Img_P">
          {this.props.location.state.item.attributes.about_the_project}
        </p>
      </div>
    );
  };

  renderProjectDetailMiddlePart = () => {
    var text = this.props.location.state.item.attributes.headding_desc3

    return (
      <>
        <div className="project_detail_main_second_block">
          <h2 className="project_detail_main_secondH">
            {this.props.location.state.item.attributes.headding1}
          </h2>
          <p className="project_detail_main_secondP">
            {this.props.location.state.item.attributes.headding_desc1}
          </p>
        </div>

        <div className="project_detail_main_second_block  project_detail_main_second_block2">
          <h2 className="project_detail_main_secondH">
            {this.props.location.state.item.attributes.headding2}
          </h2>
          <p className="project_detail_main_secondP">
            {this.props.location.state.item.attributes.headding_desc2}
          </p>
        </div>

        <div className="project_detail_main_second_block project_detail_main_second_block3">
          <h2 className="project_detail_main_secondH">
            {this.props.location.state.item.attributes.headding3}
          </h2>
          <p className="project_detail_main_secondP">
            {text?.slice(0, 200)}
          </p>
          {this.props.location.state.item.attributes.project_vedio_link && (
            <div className="project_iframe_detail">
              <ReactPlayer
                controls
                className="project_iframe_detail_main"
                url={this.props.location.state.item.attributes.project_vedio_link}
              />
            </div>
          )}

          <p className="project_detail_main_secondP">
            {text?.slice(0, 200)}
          </p>
        </div>
      </>
    );
  };

  renderProjectDetailIframPart = () => {
    return (
      <>
        <hr className="project_detail_hr" />
      </>
    );
  };

  renderProjectDetailBottomIcons = () => {
    var scocialfb = this.props.location.state.item.attributes.facebook
    var scocialtwitter = this.props.location.state.item.attributes.twitter
    var scocialln = this.props.location.state.item.attributes.linkdin
    return (
      <div className="project_icons_main">
        <div className="project_icons">
          <p className="projectDetailP">Share</p>
          <AiOutlineTwitter href={scocialfb} className="project_SocialIcon" />
          <FaFacebookF href={scocialtwitter} className="project_SocialIcon" />
          <FaLinkedinIn href={scocialln} className="project_SocialIcon" />
        </div>

        <p
          className="project_detail_icons_top"
          onClick={() => {
            this.handleTop();
          }}
        >
          Top
        </p>
      </div>
    );
  };

  render() {
    return (
      <div className="main_class_project_container">
        <div className="main_class_project_block">
          {this.renderIconsHeaderProjectDetail()}
          {this.renderProjectDetailImagePart()}
          {this.renderProjectDetailMiddlePart()}
          {this.renderProjectDetailIframPart()}
          {this.renderProjectDetailBottomIcons()}
        </div>
      </div>
    );
  }
}

export default IndvidualDashboardProjectDetail;
