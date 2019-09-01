import React, { Component } from 'react';
import './Page.css';

// components
import ProfileCard from '../ProfileCard/ProfileCard.js';

// images
import img_indieOutreachIcon from '../../Images/IndieOutreach/io_icon.png';


// constants -------------------------------------------------------------------

const indieOutreachDescription = [
  "IndieOutreach is a PR search engine that helps indie game developers promote their games on Twitch"
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
      </div>
    );
  }
}

export default IndieOutreachPage;
