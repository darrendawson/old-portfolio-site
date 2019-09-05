import React, { Component } from 'react';
import './Page.css';

// components
import ProfileCard from '../ProfileCard/ProfileCard.js';
import TechChart from '../TechChart/TechChart.js';
import ItemCard from '../ItemCard/ItemCard.js';
import ImageSlideshow from '../ImageSlideshow/ImageSlideshow.js';


// images
import img_flowGridIcon from '../../Images/FlowGrid/flowgrid_logo.png';
import img_github from '../../Images/SocialMedia/github.png';
import img_reactIcon from '../../Images/Logos/react.png';

import screenshot_simple from '../../Images/FlowGrid/screenshots/simpleChart.png';
import screenshot_nested from '../../Images/FlowGrid/screenshots/nested.png';
import screenshot_loop from '../../Images/FlowGrid/screenshots/loop.png';

// constants -------------------------------------------------------------------

const socialMediaLinks = [
  {"img": img_github, "link": "https://github.com/darrendawson/Flowgrid"}
];

const flowGridDescription = [
  "FlowGrid is a flow chart maker built in React.js that uses pure React components and doesn't depend on external libraries or <canvas/> elements. ",
  "FlowGrid supports branching logic, including IF statements and loops."
];


const reactObject = {
  "title": "React.js", "icon": img_reactIcon, "languages": ["JavaScript", "HTML", "CSS"],
  "description": [
    {"type": "text", "text": "Use Case"},
    {"type": "list", "text": "A flowchart is defined as a tree of nodes, which is then converted into a 2D grid of <div/> elements to render. "},
  ]
};

const techUsedOrder = ["React.js"];
const languagesUsed = ["JavaScript", "HTML", "CSS"];
const techUsed = {
  "React.js": reactObject
};

const slideshowImages = [
  {'img': screenshot_simple, 'title': 'Flowchart Maker', 'description': 'Build flowcharts in React.js. '},
  {'img': screenshot_nested, 'title': 'Conditionals', 'description': 'Diagram branching and nested logic statements. '},
  {'img': screenshot_loop, 'title': 'Loops', 'description': 'FlowGrid handles loops. FlowGrid handles loops. FlowGrid handles... '},
];
// =============================================================================
// <FlowGridPage/>
// =============================================================================

class FlowGridPage extends Component {

  constructor() {
    super();
  }

  // render --------------------------------------------------------------------

  // Renders <FlowGridPage/>
  render() {
    return (
      <div id="Page">
        <ProfileCard
          title="FlowGrid"
          profileImages={[img_flowGridIcon]}
          socialMediaLinks={socialMediaLinks}
          description={flowGridDescription}
          viewButtonLink="https://flowgrid.netlify.com"
          highlightColor="#17e573"
        />

        <div style={{'width': '100%'}}>
          <TechChart
            tech={techUsed}
            order={techUsedOrder}
            languages={languagesUsed}
            highlightColor="#17e573"
          />
        </div>

        <ImageSlideshow
          images={slideshowImages}
          highlightColor="#17e573"
        />
      </div>
    );
  }
}

export default FlowGridPage;
