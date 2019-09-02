import React, { Component } from 'react';
import './Page.css';

// components
import ProfileCard from '../ProfileCard/ProfileCard.js';
import TechChart from '../TechChart/TechChart.js';
import ItemCard from '../ItemCard/ItemCard.js';

// images
import img_indieOutreachIcon from '../../Images/IndieOutreach/io_icon.png';
import img_twitchIcon from '../../Images/Logos/twitch_glitch_purple.png';
import img_igdbIcon from '../../Images/Logos/igdb.png';
import img_reactIcon from '../../Images/Logos/react.png';
import img_nodeIcon from '../../Images/Logos/node.png';
import img_mySQL from '../../Images/Logos/mysql.png';

// constants -------------------------------------------------------------------

const indieOutreachDescription = [
  "IndieOutreach is a free PR search engine that helps indie game developers promote their games on Twitch.",
  "IndieOutreach sorts through the streaming histories of 150k streamers to find the ones that are most likely to play your game!",
  "To date, over 300 indie devs have performed searches. ",
  "Try it out at https://www.indieoutreach.io"
];

const twitchObject = {
  "title": "Twitch API", "icon": img_twitchIcon, "languages": ["Python"],
  "description": [
    {"type": "text", "text": "Use Case"},
    {"type": "list", "text": "Used API to create an index of all streamers, livestreams, and videos on Twitch."},
    {"type": "list", "text": "Runs on a bi-hourly CRON job so it never misses a stream. "},
    {"type": "list", "text": "Combined with IGDB API and MySQL to create content aware search engine."}
  ]
};

const igdbObject = {
  "title": "IGDB API", "icon": img_igdbIcon, "languages": ["Python"],
  "description": [
    {"type": "text", "text": "Use Case"},
    {"type": "list", "text": "Utilized IGDB to look up info about the games being streamed on Twitch. "},
    {"type": "list", "text": "Used this data to catalog livestreams by game-specific indexes like Genre, Keyword, or Similar Games. "}
  ]
};

const nodeObject = {
  "title": "Node.js & AWS", "icon": img_nodeIcon, "languages": ["JavaScript"],
  "description": [
    {"type": "text", "text": "Use Case"},
    {"type": "list", "text": "Used Node.js as the backend for IndieOutreach. "},
    {"type": "list", "text": "Acts as an API for querying the MySQL Database. "},
    {"type": "list", "text": "Hosted using AWS Elastic Beanstalk"}
  ]
};

const mysqlObject =  {
  "title": "MySQL & RDS", "icon": img_mySQL, "languages": ["MySQL"],
  "description": [
    {"type": "text", "text": "Use Case"},
    {"type": "list", "text": "MySQL Database for storing data on over a hundred thousand streamers, millions of livestreams, and thousands of games."},
    {"type": "list", "text": "Each entry in the database is indexed by game data to increase search efficiency. "},
    {"type": "list", "text": "Hosted using AWS RDS"}
  ]
};

const reactObject = {
  "title": "React.js", "icon": img_reactIcon,"languages": ["JavaScript", "HTML", "CSS"],
  "description": [
    {"type": "text", "text": "Use Case"},
    {"type": "list", "text": "Used React.js to build user facing website. "},
    {"type": "list", "text": "Acts as a GUI for formatting search parameters and interfacing with the backend API. "},
    {"type": "list", "text": "Hosted on Netlify"},
  ]
};

const techUsedOrder = ["twitch", "IGDB", "Node.js", "MySQL", "React.js"];
const languagesUsed = ["Python", "MySQL", "JavaScript", "HTML", "CSS"];
const techUsed = {
  "twitch": twitchObject,
  "IGDB": igdbObject,
  "Node.js": nodeObject,
  "MySQL": mysqlObject,
  "React.js": reactObject
};

// <IndieOutreachPage/> --------------------------------------------------------

class IndieOutreachPage extends Component {

  constructor() {
    super();
  }

  // render --------------------------------------------------------------------

  // Renders <IndieOutreachPage/>
  render() {
    return (
      <div id="Page">
        <ProfileCard
          title="IndieOutreach"
          profileImages={[img_indieOutreachIcon]}
          socialMediaLinks={[]}
          description={indieOutreachDescription}
          viewButtonLink="https://www.indieoutreach.io"
          highlightColor="#6f3ce8"
        />

        <div style={{'margin-top': '40px', 'width': '100%'}}>
          <TechChart
            tech={techUsed}
            order={techUsedOrder}
            languages={languagesUsed}
            highlightColor="#8654f9"
          />
        </div>

        {/*
          <div style={{'height': '2px', 'width': '96%', 'margin-left': '2%', 'background-color': '#cecece'}}></div>
        */}

      </div>
    );
  }
}

export default IndieOutreachPage;
