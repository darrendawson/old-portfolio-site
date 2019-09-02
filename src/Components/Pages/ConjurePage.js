import React, { Component } from 'react';
import './Page.css';

// components
import ProfileCard from '../ProfileCard/ProfileCard.js';
import TechChart from '../TechChart/TechChart.js';
import ItemCard from '../ItemCard/ItemCard.js';

// images
import img_conjureIcon from '../../Images/Conjure/conjure_icon.png';
import img_reactIcon from '../../Images/Logos/react.png';
import img_github from '../../Images/SocialMedia/github.png';

// constants -------------------------------------------------------------------

const conjureDescription = [
  "Conjure is a Google Forms style survey generator. ",
  "Conjure lets you define what the output JSON will look like when a user fills out the form. ",
  "In the future, users will be able to fill out these forms to generate working code. ",
  "Conjure is currently under development! "
];

const socialMediaLinks = [
  {"img": img_github, "link": "https://github.com/darrendawson/ConjureFormMaker"},
];

const reactObject = {
  "title": "React.js", "icon": img_reactIcon, "languages": ["JavaScript", "HTML", "CSS"],
  "description": [
    {"type": "text", "text": "Use Case"},
    {"type": "list", "text": "Acts as a GUI for generating new forms. "},
    {"type": "list", "text": "Includes conditional rendering logic so form questions can be dependent on the answers of other questions"},
    {"type": "list", "text": "Hosted on Netlify"}
  ]
};

const techUsedOrder = ["React.js"];
const languagesUsed = ["JavaScript", "HTML", "CSS"];
const techUsed = {
  "React.js": reactObject
};

// <ConjurePage/> --------------------------------------------------------------

class ConjurePage extends Component {

  constructor() {
    super();
  }

  // render --------------------------------------------------------------------

  // Renders <ConjurePage/>
  render() {
    return (
      <div id="Page">
        <ProfileCard
          title="Conjure"
          profileImages={[img_conjureIcon]}
          socialMediaLinks={socialMediaLinks}
          description={conjureDescription}
          viewButtonLink="https://conjure.netlify.com"
          highlightColor="#eaac27"
        />

        <div style={{'margin-top': '40px', 'width': '100%'}}>
          <TechChart
            tech={techUsed}
            order={techUsedOrder}
            languages={languagesUsed}
            highlightColor="#eaac27"
          />
        </div>
      </div>
    );
  }
}

export default ConjurePage;
