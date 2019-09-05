import React, { Component } from 'react';
import './Page.css';


// components
import ProfileCard from '../ProfileCard/ProfileCard.js';
import TechChart from '../TechChart/TechChart.js';
import ItemCard from '../ItemCard/ItemCard.js';

// images
import img_dataFreeIcon from '../../Images/DataFree/datafree_icon.png';
import img_github from '../../Images/SocialMedia/github.png';
import img_androidIcon from '../../Images/Logos/android_robot.png';
import img_twilioIcon from '../../Images/Logos/twilio_red.png';
import img_sinatraIcon from '../../Images/Logos/sinatra.png';


// constants -------------------------------------------------------------------

const socialMediaLinks = [
  {"img": img_github, "link": "https://github.com/Data-Free"}
];

const dataFreeDescription = [
  "Data Free is an open source, sms-powered service that allows users to access the internet from their Android phones without using mobile data or WiFi. ",
  "The Android app works by tunneling network requests through SMS using Twilio and 7 bit compression.",
  "Data Free supports Wikipedia and Urban Dictionary queries.",
  "The app was on the Google Play Store in 2016, but has since been taken down due to server costs."
];
/*
"After a user tries to send a query, the Android App will automatically send an SMS message with the request to Data Free's Twilio phone number. ",
"When Twilio receives that text, it forwards it to a webhook on Data Free's server. ",
"Data Free depackages the search paramaters and performs the query. It then compresses the result into an SMS friendly format and uses Twilio's API to send it back to the user. ",
"When the Android client receives the response text(s) from Twilio, it decompresses the content.",
*/

const androidObject = {
  "title": "Android", "icon": img_androidIcon, "languages": ["Java"],
  "description": [
    {"type": "text", "text": "Use Case"},
    {"type": "list", "text": "The app handles both sending requests to the server and unpackaging the results of queries."},
    {"type": "list", "text": "All network requests are sent over a lossy channel (SMS), so the app implements a NAK based communication protocol."},
    {"type": "list", "text": "On top of managing header packages, the app decodes the compressed SMS responses back into natural language. "},
  ]
}

const twilioObject = {
  "title": "Twilio API", "icon": img_twilioIcon, "languages": ["Ruby"],
  "description": [
    {"type": "text", "text": "Use Case"},
    {"type": "list", "text": "When the user sends a request, the text is sent to a Twilio phone number. Twilio then forwards that request to the server.  "},
    {"type": "list", "text": "After the server gets an answer, it compresses the results and sends it back to the user as an arbitrarily long series of SMS texts (via the same Twilio number)."}
  ]
}

const sinatraObject = {
  "title": "Sinatra & AWS", "icon": img_sinatraIcon, "languages": ["Ruby"],
  "description": [
    {"type": "text", "text": "Use Case"},
    {"type": "list", "text": "After Twilio gets a text from a user, it forwards it to an endpoint on this RESTful Sinatra server. "},
    {"type": "list", "text": "The server unpackages the header info, finds the result of the query, compresses it using modified Huffman Encoding, and sends the result back to the user via Twilio."},
    {"type": "list", "text": "Used to be hosted on AWS EC2"},
  ]
}

const techUsedOrder = ["Android", "Twilio API", "Sinatra & AWS"];
const languagesUsed = ["Java", "Ruby"];
const techUsed = {
  "Android": androidObject,
  "Twilio API": twilioObject,
  "Sinatra & AWS": sinatraObject
};
// =============================================================================
// <DataFreePage/>
// =============================================================================

class DataFreePage extends Component {

  constructor() {
    super();
  }

  // render --------------------------------------------------------------------

  // Renders <DataFreePage/>
  render() {
    return (
      <div id="Page">
        <ProfileCard
          title="Data Free"
          profileImages={[img_dataFreeIcon]}
          socialMediaLinks={socialMediaLinks}
          description={dataFreeDescription}
          viewButtonLink=""
          highlightColor="#ea2727"
        />

        <div style={{'margin-top': '40px', 'width': '100%'}}>
          <TechChart
            tech={techUsed}
            order={techUsedOrder}
            languages={languagesUsed}
            highlightColor="#ea2727"
          />
        </div>
      </div>
    );
  }
}

export default DataFreePage;
