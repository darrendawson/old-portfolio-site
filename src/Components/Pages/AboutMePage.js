import React, { Component } from 'react';
import './Page.css';

// components
import AboutCard from '../AboutCard/AboutCard.js';


// images
import img_headshot1 from '../../Images/Me/me_1.jpg';
import img_twitter from '../../Images/SocialMedia/twitter.png';
import img_linkedin from '../../Images/SocialMedia/linkedin.png';
import img_github from '../../Images/SocialMedia/github.png';


// Consts ----------------------------------------------------------------------

const socialMediaLinks = [
  {"img": img_twitter, "link": "https://twitter.com/thedarrendawson"},
  {"img": img_github, "link": "https://github.com/darrendawson"},
  {"img": img_linkedin, "link": "https://www.linkedin.com/in/thedarrendawson/"}
];

const aboutMeDescription = [
  "Hello there!",
  "I am a fullstack developer and avid product designer. ",
  "Currently an undergraduate at the University of California, Santa Cruz. ",
  "Thanks for visiting my portfolio site. You can reach me at thedarrendawson@gmail.com."
];


// <AboutMePage/> --------------------------------------------------------------

class AboutMePage extends Component {

  constructor() {
    super();
  }

  // render --------------------------------------------------------------------

  // Renders <AboutMePage/>
  render() {

    return (
      <div id="Page">
        <AboutCard
          title="Darren Dawson"
          profileImages={[img_headshot1]}
          socialMediaLinks={socialMediaLinks}
          description={aboutMeDescription}
          viewButtonLink=""
        />
      </div>
    );
  }
}

export default AboutMePage;
