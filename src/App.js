import React, { Component } from 'react';
import './App.css';

// components
import Sidebar from './Components/Sidebar/Sidebar.js';
import Navbar from './Components/Navbar/Navbar.js';
import AboutMePage from './Components/Pages/AboutMePage.js';
import IndieOutreachPage from './Components/Pages/IndieOutreachPage.js';
import ConjurePage from './Components/Pages/ConjurePage.js';
import DataFreePage from './Components/Pages/DataFreePage.js';
import FlowGridPage from './Components/Pages/FlowGridPage.js';
import PortfolioPage from './Components/Pages/PortfolioPage.js';

// Ustra for handling App.state
import Ustra from './Ustra.js';


// Other constants -------------------------------------------------------------

const pageOptions = {
  "About": ["About Me"],
  "Products": ["IndieOutreach", "Data Free"],
  "Projects": ["Conjure", "FlowGrid", "Portfolio"],
  "Hackathons": ["Intuit 2018", "Y Combinator (s2019)"],
  "Art": ["Redbubble"]
}


const pageColors = {
  "About Me": "#19b1ea",
  "IndieOutreach": "#6f3ce8",
  "Data Free": "#ea2727",
  "Conjure": "#eaac27",
  "FlowGrid": "#17e573",
  "Portfolio": "#19b1ea",
  "Intuit 2018": "#19b1ea",
  "Y Combinator (s2019)": "#ff6600",
  "Redbubble": "#ea2727"
};

// =============================================================================
// USTRA
// =============================================================================
/*
    Ustra is a class used to uniformly manage App.state
*/

const PT_selectedSection = "selectedSection";

const dataSkeleton = {
  [PT_selectedSection]: "IndieOutreach"
};

var ustra = new Ustra(dataSkeleton);

// =============================================================================
// <App/>
// =============================================================================

class App extends Component {

  constructor() {
    super();
    this.state = {
      truth: ustra.getTruth(),
      windowWidth: 0,
      windowHeight: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  // update Window sizes so <App/> will know whether it should render in mobile or landscape layout
  updateWindowDimensions() {
    this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight});
  }

  // Update Ustra --------------------------------------------------------------
  /*
    Functions for updating information
      -> pass updates to ustra, use results to update app.state
  */

  update = (value, pathTag) => {
    let newState = ustra.update(value, pathTag);
    this.setState({ truth: newState });
  }


  // onClick -------------------------------------------------------------------


  // render --------------------------------------------------------------------


  //
  renderPages = () => {

    let currentPage = this.state.truth[PT_selectedSection];

    if (currentPage === "About Me") {
      return (<AboutMePage/>);
    } else if (currentPage === "IndieOutreach") {
      return (<IndieOutreachPage/>);
    } else if (currentPage === "Conjure") {
      return (<ConjurePage/>);
    } else if (currentPage === "Data Free") {
      return (<DataFreePage/>);
    } else if (currentPage === "FlowGrid") {
      return (<FlowGridPage/>);
    } else if (currentPage === "Portfolio") {
      return (<PortfolioPage/>);
    }

  }


  // if app is in a landscape configuration, render the normal Desktop mode with a sidebar
  renderLandscape() {
    if (this.state.windowWidth < this.state.windowHeight) { return; }

    let truth = this.state.truth;

    return (
      <div id="landscape_container">
        <div id="left_container">
          <Sidebar
            options={pageOptions}
            selectedOption={truth[PT_selectedSection]}
            update={this.update}
            selectedOptionTag={PT_selectedSection}
          />
        </div>

        <div id="right_container">
          {this.renderPages()}
        </div>
      </div>
    );

  }

  // if app is in a vertical configuration, render the mobile layout
  // -> this has a top navbar instead of a sidebar
  renderMobile() {
    if (this.state.windowWidth >= this.state.windowHeight) { return; }

    let truth = this.state.truth;

    return (
      <div id="mobile_container">
        <div id="top_container">
          <Navbar
            options={pageOptions}
            selectedOption={truth[PT_selectedSection]}
            update={this.update}
            selectedOptionTag={PT_selectedSection}
            pageColors={pageColors}
          />
        </div>
        <div id="bottom_container">
          {this.renderPages()}
        </div>
      </div>
    );
  }


  // renders <App/>
  render() {

    let truth = this.state.truth;

    return (
      <div id="App">
        {this.renderLandscape()}
        {this.renderMobile()}
      </div>
    );
  }
}

export default App;
