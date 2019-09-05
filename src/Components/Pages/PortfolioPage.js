import React, { Component } from 'react';
import './Page.css';

// components
import ProfileCard from '../ProfileCard/ProfileCard.js';
import TechChart from '../TechChart/TechChart.js';
import ItemCard from '../ItemCard/ItemCard.js';


// images
import img_portfolioIcon from '../../Images/Portfolio/portfolio_logo.png';
import img_github from '../../Images/SocialMedia/github.png';
import img_reactIcon from '../../Images/Logos/react.png';

// constants -------------------------------------------------------------------

const socialMediaLinks = [
  {"img": img_github, "link": "https://github.com/darrendawson/PortfolioSite"}
];

const portfolioDescription = [
  "This is the website you are currently on! ",
];


const reactObject = {
  "title": "React.js", "icon": img_reactIcon, "languages": ["JavaScript", "HTML", "CSS"],
  "description": [
    {"type": "text", "text": "Use Case"},
    {"type": "list", "text": "Utilize reusable components to unify design of website between pages. "},
  ]
};

const techUsedOrder = ["React.js"];
const languagesUsed = ["JavaScript", "HTML", "CSS"];
const techUsed = {
  "React.js": reactObject
};

// =============================================================================
// <PortolioPage/>
// =============================================================================

class PortolioPage extends Component {

  constructor() {
    super();
  }

  // render --------------------------------------------------------------------

  // Renders <PortolioPage/>
  render() {
    return (
      <div id="Page">
        <ProfileCard
          title="Portfolio Site"
          profileImages={[img_portfolioIcon]}
          socialMediaLinks={socialMediaLinks}
          description={portfolioDescription}
          viewButtonLink=""
          highlightColor="#19b1ea"
        />

        <div style={{'margin-top': '40px', 'width': '100%'}}>
          <TechChart
            tech={techUsed}
            order={techUsedOrder}
            languages={languagesUsed}
            highlightColor="#19b1ea"
          />
        </div>
      </div>
    );
  }
}

export default PortolioPage;
