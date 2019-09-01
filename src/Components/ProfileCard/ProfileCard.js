import React, { Component } from 'react';
import './ProfileCard.css';

class ProfileCard extends Component {

  constructor() {
    super();
  }

  // render --------------------------------------------------------------------

  renderProfileImage = () => {

    let borderCSS = (this.props.profileImageRoundedCorners) ? "profile_img_rounded" : "profile_img_no_border";
    return (
      <div id="profile_img_column">
        <img id={borderCSS} src={this.props.profileImages[0]}/>
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
        <button id="view_button" style={{'color': this.props.highlightColor, 'border-color': this.props.highlightColor}}>View</button>
      </a>
    );
  }

  // Renders <ProfileCard/>
  render() {
    return (
      <div id="ProfileCard" style={{'border-color': this.props.highlightColor}}>
        {this.renderProfileImage()}

        <div className="column">
          <div className="row_space_between">
            <div className="row">
              <h1 id="title">{this.props.title}</h1>
              {this.renderSocialMediaLinks()}
            </div>
            {this.renderViewButton()}
          </div>
          <div className="divider" style={{'background-image': 'linear-gradient(to right, ' + this.props.highlightColor + ', #282828)'}}></div>
          <div className="column">
            {this.renderDescriptionText()}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
