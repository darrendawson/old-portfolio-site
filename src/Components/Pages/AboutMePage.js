import React, { Component } from 'react';
import './Page.css';

// components
import ProfileCard from '../ProfileCard/ProfileCard.js';
import ItemCard from '../ItemCard/ItemCard.js';

// images
import img_headshot1 from '../../Images/Me/me_1.jpg';
import img_twitter from '../../Images/SocialMedia/twitter.png';
import img_linkedin from '../../Images/SocialMedia/linkedin.png';
import img_github from '../../Images/SocialMedia/github.png';

import img_reactSkillBG from '../../Images/Skills/react_skill_bg.png';
import img_awsSkillBG from '../../Images/Skills/aws_skill_bg.png';
import img_pythonSkillBG from '../../Images/Skills/python_skill_bg.png';
import img_UCSCBG from '../../Images/Education/uc_bg.png';
import img_YCBG from '../../Images/Education/yc_bg.png';
import img_ZeroYearBG from '../../Images/Plan/year_zero_bg.png';
import img_OneYearBG from '../../Images/Plan/year_one_bg.png';
import img_FiveYearBG from '../../Images/Plan/year_five_bg.png';


// Consts ----------------------------------------------------------------------

const socialMediaLinks = [
  {"img": img_twitter, "link": "https://twitter.com/thedarrendawson"},
  {"img": img_github, "link": "https://github.com/darrendawson"},
  {"img": img_linkedin, "link": "https://www.linkedin.com/in/thedarrendawson/"}
];

const aboutMeDescription = [
  "Hello there!",
  "I am a fullstack developer, an avid product designer, and an undergrad at UCSC. ",
  "I made www.indieoutreach.io - a PR search engine that helps indie game devs succeed on Twitch.  ",
  "I'm currently building a project generator called Conjure. Check back here for updates. ",
  "You can reach me at thedarrendawson@gmail.com.",
  "Thanks for visiting my portfolio site!"
];

const frontendDescription = [
  {"type": "text", "text": "Web Frameworks"},
  {"type": "list", "text": "React.js"},
  {"type": "text", "text": "Mobile"},
  {"type": "list", "text": "Android"}
];

const languagesDescription = [
  {"type": "text", "text": "Scripting Languages"},
  {"type": "list", "text": "Python, Ruby"},
  {"type": "text", "text": "Web"},
  {"type": "list", "text": "Javascript, HTML, CSS"},
  {"type": "text", "text": "Databases"},
  {"type": "list", "text": "MySQL, PostgreSQL, SQLite"}
];

const backendDescription = [
  {"type": "text", "text": "Server Frameworks"},
  {"type": "list", "text": "Node.js, Flask"},
  {"type": "text", "text": "Cloud Hosting"},
  {"type": "list", "text": "AWS EC2, Elastic Beanstalk"},
  {"type": "text", "text": "Data Storage"},
  {"type": "list", "text": "AWS RDS"}
];

const ucDescription = [
  {"type": "text", "text": "Majors"},
  {"type": "list", "text": "BS: Computer Science"},
  {"type": "list", "text": "BS: Technology and Information Management"}
];

const ycDescription = [
  {"type": "text", "text": "Work on IndieOutreach"},
  {"type": "list", "text": "Conducted user interviews"},
  {"type": "list", "text": "Developed product"},
  {"type": "list", "text": "Launched!"}
];

const zeroYearPlan = [
  {"type": "text", "text": "Projects"},
  {"type": "list", "text": "Developing Conjure"},
  {"type": "list", "text": "Exploring business opportunities for Conjure"},
  {"type": "text", "text": "Job Hunting"},
  {"type": "list", "text": "Applying for jobs in Product Management & Development"},
  {"type": "text", "text": "Academics"},
  {"type": "list", "text": "Graduate from UCSC"}
];

const oneYearPlan = [
  {"type": "text", "text": "Career"},
  {"type": "list", "text": "Working in the SF Bay Area."},
  {"type": "list", "text": "Building product in a high growth environment."},
  {"type": "list", "text": "Combining engineering, management, and user-centric design in daily work."},
  {"type": "text", "text": "Projects"},
  {"type": "list", "text": "Continue developing Open Source software on the side"},
]

const fiveYearPlan = [
  {"type": "text", "text": "Startups"},
  {"type": "list", "text": "Found and bootstrap a startup, hopefully into YC."},
  {"type": "list", "text": "I am actively trying to get to this step as soon as possible!"}
];

// <AboutMePage/> --------------------------------------------------------------

class AboutMePage extends Component {

  constructor() {
    super();

    this.state = {
      windowWidth: 0,
      windowHeight: 0
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

  updateWindowDimensions() {
    this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight});
  }

  // render --------------------------------------------------------------------


  renderCategoryTitle = (title) => {
    return (
      <div className="category_title_row">
        <div style={{'background-image': 'linear-gradient(to right, #19b1ea, #216c89)', 'height': '3px', 'width': '100%'}}></div>
        <h1 className="category_title" style={{'color': '#216c89'}}>{title}</h1>
        <div style={{'background-image': 'linear-gradient(to right, #216c89, #282828)', 'height': '3px', 'width': '100%'}}></div>
      </div>
    );
  }

  renderSkills = () => {

    let marginStyles = {};
    if (this.state.windowWidth >= this.state.windowHeight) {
      marginStyles['margin-top'] = '80px';
    }

    return (
      <div className="item_cards_row">
        <div className="item_card_container" style={marginStyles}>
          <ItemCard
            titleText="Frontend"
            subtitleText=""
            footerText=""
            description={frontendDescription}
            backgroundImage={img_reactSkillBG}
            highlightColor="#19b1ea"
            renderAsLists={true}
          />
        </div>
        <div className="item_card_container">
          <ItemCard
            titleText="Languages"
            subtitleText=""
            footerText=""
            description={languagesDescription}
            backgroundImage={img_pythonSkillBG}
            highlightColor="#19b1ea"
            renderAsLists={true}
          />
        </div>
        <div className="item_card_container" style={marginStyles}>
          <ItemCard
            titleText="Backend"
            subtitleText=""
            footerText=""
            description={backendDescription}
            backgroundImage={img_awsSkillBG}
            highlightColor="#19b1ea"
            renderAsLists={true}
          />
        </div>
      </div>
    );
  }


  renderEducation = () => {
    return (
      <div className="item_cards_row">
        <div className="item_card_container">
          <ItemCard
            titleText="UC Santa Cruz"
            subtitleText="Double Major"
            footerText="Expected Graduation: June 2020"
            description={ucDescription}
            backgroundImage={img_UCSCBG}
            highlightColor="#19b1ea"
            renderAsLists={true}
          />
        </div>
        <div className="item_card_container">
          <ItemCard
            titleText="Y-Combinator Startup School"
            subtitleText="Advisory Track"
            footerText="Graduated November 2018"
            description={ycDescription}
            backgroundImage={img_YCBG}
            highlightColor="#19b1ea"
            renderAsLists={true}
          />
        </div>
      </div>
    );
  }



  renderPlan = () => {

    let marginStyles = {};
    if (this.state.windowWidth >= this.state.windowHeight) {
      marginStyles['margin-top'] = '80px';
    }

    return (
      <div className="item_cards_row">
        <div className="item_card_container_tall" style={marginStyles}>
          <ItemCard
            titleText="0 Year Plan"
            subtitleText="What I'm Doing Now"
            footerText=""
            description={zeroYearPlan}
            backgroundImage={img_ZeroYearBG}
            highlightColor="#19b1ea"
            renderAsLists={true}
          />
        </div>
        <div className="item_card_container_tall">
          <ItemCard
            titleText="1 Year Plan"
            subtitleText="Post College Plans"
            footerText=""
            description={oneYearPlan}
            backgroundImage={img_OneYearBG}
            highlightColor="#19b1ea"
            renderAsLists={true}
          />
        </div>
        <div className="item_card_container_tall" style={marginStyles}>
          <ItemCard
            titleText="5 Year Plan"
            subtitleText="What I'm Working Towards"
            footerText=""
            description={fiveYearPlan}
            backgroundImage={img_FiveYearBG}
            highlightColor="#19b1ea"
            renderAsLists={true}
          />
        </div>
      </div>
    );
  }


  // Renders <AboutMePage/>
  render() {

    return (
      <div id="Page">
        <ProfileCard
          title="Darren Dawson"
          profileImages={[img_headshot1]}
          profileImageRoundedCorners={true}
          socialMediaLinks={socialMediaLinks}
          description={aboutMeDescription}
          viewButtonLink=""
          highlightColor="#19b1ea"
        />
        {this.renderCategoryTitle("Skills")}
        {this.renderSkills()}
        {this.renderCategoryTitle("Education")}
        {this.renderEducation()}
        {this.renderCategoryTitle("Moving Forward")}
        {this.renderPlan()}
      </div>
    );
  }
}

export default AboutMePage;
