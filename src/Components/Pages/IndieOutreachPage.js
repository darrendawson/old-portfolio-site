import React, { Component } from 'react';
import './Page.css';

// components
import ProfileCard from '../ProfileCard/ProfileCard.js';
import TechChart from '../TechChart/TechChart.js';
import ItemCard from '../ItemCard/ItemCard.js';
import ImageSlideshow from '../ImageSlideshow/ImageSlideshow.js';

// images
import img_indieOutreachIcon from '../../Images/IndieOutreach/io_icon.png';
import img_twitchIcon from '../../Images/Logos/twitch_glitch_purple.png';
import img_igdbIcon from '../../Images/Logos/igdb.png';
import img_reactIcon from '../../Images/Logos/react.png';
import img_nodeIcon from '../../Images/Logos/node.png';
import img_mySQL from '../../Images/Logos/mysql.png';

import screenshot_searchParameters from '../../Images/IndieOutreach/screenshots/search_parameters.png';
import screenshot_searchFilters from '../../Images/IndieOutreach/screenshots/search_filters.png';
import screenshot_resultCards from '../../Images/IndieOutreach/screenshots/result_cards.png';
import screenshot_streamerOverview from '../../Images/IndieOutreach/screenshots/streamer_overview.png';
import screenshot_relatedToSearch from '../../Images/IndieOutreach/screenshots/related_to_search.png';


// constants -------------------------------------------------------------------

const indieOutreachDescription = [
  "IndieOutreach is a free PR search engine that helps indie game developers promote their games on Twitch.",
  "IndieOutreach sorts through the streaming histories of 150k streamers to find the ones that are most likely to play your game!",
  "I started working on IndieOutreach after doing PR for an indie game on Kickstarter and finding the process incredibly inefficient and overly tedious.",
  "To date, over 300 indie devs have used IndieOutreach to promote their game. ",
  "Try it out at www.indieoutreach.io"
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


const slideshowImages = [
  {'img': screenshot_searchParameters, 'title': 'Search Parameters', 'description': 'Searching on IndieOutreach is as simple as describing details about your game.'},
  {'img': screenshot_searchFilters, 'title': 'Filter Streamers', 'description': 'There are a *lot* of streamers on Twitch. Set hard filters to focus your efforts. '},
  {'img': screenshot_resultCards, 'title': 'Browse Results', 'description': 'Quickly browse through all streamers that match your search. '},
  {'img': screenshot_streamerOverview, 'title': 'Streamer Overview', 'description': 'View at-a-glance data about a streamer\'s gameplay habits to see if they\'d be a good fit.'},
  {'img': screenshot_relatedToSearch, 'title': 'Related to Search', 'description': 'IndieOutreach highlights any games a streamer played that might be relevant to your search. '}
];

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

        <div style={{'width': '100%'}}>
          <TechChart
            tech={techUsed}
            order={techUsedOrder}
            languages={languagesUsed}
            highlightColor="#8654f9"
          />
        </div>

        <ImageSlideshow
          images={slideshowImages}
          highlightColor="#8654f9"
        />
      </div>
    );
  }
}

export default IndieOutreachPage;
