import React, { Component } from 'react';
import './Page.css';

// components
import ProfileCard from '../ProfileCard/ProfileCard.js';
import TechChart from '../TechChart/TechChart.js';
import ItemCard from '../ItemCard/ItemCard.js';
import ImageSlideshow from '../ImageSlideshow/ImageSlideshow.js';

// images
import img_conjureIcon from '../../Images/Conjure/conjure_icon.png';
import img_reactIcon from '../../Images/Logos/react.png';
import img_github from '../../Images/SocialMedia/github.png';


import screenshot_questionArray from '../../Images/Conjure/screenshots/array.png';
import screenshot_conditionalRender from '../../Images/Conjure/screenshots/conditional_render_2.png';
import screenshot_outputObject from '../../Images/Conjure/screenshots/output_object.png';
import screenshot_sampleForm from '../../Images/Conjure/screenshots/sample_form.png';


// constants -------------------------------------------------------------------

const conjureDescription = [
  "Conjure is a highly flexible Google Forms style survey generator. ",
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


const slideshowImages = [
  {'img': screenshot_sampleForm, 'title': 'A Flexible Form Generator', 'description': 'Conjure forms are highly customizable.'},
  {'img': screenshot_questionArray, 'title': 'Arbitrary Arrays', 'description': 'Conjure lets you create arrays for sets of questions you want to ask multiple times.'},
  {'img': screenshot_outputObject, 'title': 'A Well-Defined Output Object', 'description': 'While building a Conjure Form, you get to control what the JSON output of the form will look like. '},
  {'img': screenshot_conditionalRender, 'title': 'Conditional Rendering', 'description': 'Conjure\'s conditional rendering lets you ask certain questions based off of context.'}
];

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
          viewButtonLink="https://conjuredemo.netlify.com"
          highlightColor="#eaac27"
        />

        <div style={{'width': '100%'}}>
          <TechChart
            tech={techUsed}
            order={techUsedOrder}
            languages={languagesUsed}
            highlightColor="#eaac27"
          />
        </div>

        <ImageSlideshow
          images={slideshowImages}
          highlightColor="#eaac27"
        />
      </div>
    );
  }
}

export default ConjurePage;
