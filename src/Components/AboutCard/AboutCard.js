import React, { Component } from 'react';
import './AboutCard.css';

class AboutCard extends Component {

  constructor() {
    super();
  }

  // render --------------------------------------------------------------------

  renderProfileImage = () => {
    return (
      <div id="profile_img_column">
        <img id="profile_img_rounded" src={this.props.profileImages[0]}/>
      </div>
    );
  }


  renderSocialMediaLinks = () => {
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


  renderDescriptionText = () => {
    let textToRender = [];
    for (let i = 0; i < this.props.description.length; i++) {
      textToRender.push(
        <p className="description_text">{this.props.description[i]}</p>
      );
    }
    return textToRender;
  }


  renderViewButton = () => {

    // if there isn't a link, don't render the button
    if (this.props.viewButtonLink === "") { return; }

    return (
      <a href={this.props.viewButtonLink} target="_blank">
        <button id="view_button">View</button>
      </a>
    );
  }

  // Renders <AboutCard/>
  render() {
    return (
      <div id="AboutCard">
        {this.renderProfileImage()}

        <div className="column">
          <div className="row_space_between">
            <div className="row">
              <h1 id="title">{this.props.title}</h1>
              {this.renderSocialMediaLinks()}
            </div>
            {this.renderViewButton()}
          </div>
          <div className="divider"></div>
          <div className="column">
            {this.renderDescriptionText()}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutCard;
