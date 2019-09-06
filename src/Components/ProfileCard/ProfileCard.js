import React, { Component } from 'react';
import './ProfileCard.css';

class ProfileCard extends Component {

  constructor() {
    super();
    this.state = {
      'windowWidth': 0,
      'windowHeight': 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  }

  // Window Orientation --------------------------------------------------------


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  // update Window sizes so <App/> will know whether it should render in mobile or landscape layout
  updateWindowDimensions() {
    this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight});
  }


  // render Landscape ----------------------------------------------------------


  renderLandscape = () => {
    if (this.state.windowWidth < this.state.windowHeight) { return; }

    return (
      <div id="landscape_container">
        {this.renderLandscape_ProfileImage()}

        <div className="column">
          <div className="row_space_between">
            <div className="row">
              <h1 id="title">{this.props.title}</h1>
              {this.renderLandscape_SocialMediaLinks()}
            </div>
            {this.renderLandscape_ViewButton()}
          </div>
          <div className="divider" style={{'background-image': 'linear-gradient(to right, ' + this.props.highlightColor + ', #282828)'}}></div>
          <div className="column">
            {this.renderLandscape_DescriptionText()}
          </div>
        </div>
      </div>
    );
  }


  renderLandscape_ProfileImage = () => {

    let borderCSS = (this.props.profileImageRoundedCorners) ? "profile_img_rounded" : "profile_img_no_border";
    return (
      <div id="profile_img_column">
        <img id={borderCSS} src={this.props.profileImages[0]}/>
      </div>
    );
  }


  renderLandscape_SocialMediaLinks = () => {
    let linksToRender = [];
    for (let i = 0; i < this.props.socialMediaLinks.length; i++) {
      let link = this.props.socialMediaLinks[i];
      linksToRender.push(
        <a href={link.link} target="_blank">
          <img className="social_media_img" src={link.img}/>
        </a>
      );
    }
    return linksToRender;
  }


  renderLandscape_DescriptionText = () => {
    let textToRender = [];
    for (let i = 0; i < this.props.description.length; i++) {
      textToRender.push(
        <p className="description_text">{this.props.description[i]}</p>
      );
    }
    return textToRender;
  }


  renderLandscape_ViewButton = () => {

    // if there isn't a link, don't render the button
    if (this.props.viewButtonLink === "") { return; }

    let buttonStyle = {
      'background-color': this.props.highlightColor,
      'border-color': this.props.highlightColor,
      'color': 'white'
    };

    return (
      <a href={this.props.viewButtonLink} target="_blank">
        <button id="view_button" style={buttonStyle}>View Site</button>
      </a>
    );
  }


  // render Mobile -------------------------------------------------------------

  renderMobile = () => {
    if (this.state.windowWidth >= this.state.windowHeight) { return; }

    return (
      <div id="mobile_container">
        {this.renderMobile_profileImage()}
        <h1 id="title" style={{'border-color': this.props.highlightColor}}>{this.props.title}</h1>
        {this.renderMobile_socialMediaLinks()}
        {this.renderMobile_descriptionText()}
        {this.renderMobile_viewButton()}
      </div>
    );
  }


  renderMobile_profileImage = () => {
    let imgCSS = (this.props.profileImageRoundedCorners) ? "profile_img_rounded" : "profile_img_no_border";
    return (
      <div id="profile_img_column">
        <img id={imgCSS} src={this.props.profileImages[0]}/>
      </div>
    );
  }

  renderMobile_socialMediaLinks = () => {

    let linksToRender = [];

    for (let i = 0; i < this.props.socialMediaLinks.length; i++) {
      let link = this.props.socialMediaLinks[i];
      linksToRender.push(
        <a href={link.link} target="_blank">
          <img className="social_media_img" src={link.img}/>
        </a>
      );
    }

    return (
      <div id="social_media_links_container">
        {linksToRender}
      </div>
    );
  }


  renderMobile_descriptionText = () => {
    let descriptionToRender = [];

    for (let i = 0; i < this.props.description.length; i++) {
      descriptionToRender.push(
        <p className="description_text">{this.props.description[i]}</p>
      );
    }
    return (
      <div id="description_container">
        {descriptionToRender}
      </div>
    );
  }

  renderMobile_viewButton = () => {

    // only render button if there is a specified link to view
    if (this.props.viewButtonLink === "") { return; }

    let buttonStyle = {
      'background-color': this.props.highlightColor,
      'border-color': this.props.highlightColor,
      'color': 'white'
    };

    return (
      <a href={this.props.viewButtonLink} target="_blank">
        <button id="view_button" style={buttonStyle}>View Site</button>
      </a>
    );
  }


  // render <ProfileCard/> -----------------------------------------------------

  // Renders <ProfileCard/>
  render() {

    let borderStyle;
    if (this.state.windowWidth >= this.state.windowHeight) {
      borderStyle = {'border-right': '10px solid ' + this.props.highlightColor};
    } else {
      borderStyle = {'border-bottom': '10px solid ' + this.props.highlightColor};
    }


    return (
      <div id="ProfileCard" style={borderStyle}>
        {this.renderLandscape()}
        {this.renderMobile()}
      </div>
    );
  }
}

export default ProfileCard;
