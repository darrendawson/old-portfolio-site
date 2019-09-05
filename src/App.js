import React, { Component } from 'react';
import './App.css';

// components
import Sidebar from './Components/Sidebar/Sidebar.js';
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
  "Projects": ["IndieOutreach", "Conjure", "Data Free", "FlowGrid", "Portfolio"],
  "Hackathons": ["Intuit 2018", "Y Combinator (s2019)"],
  "Art": ["Redbubble"]
}


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
      truth: ustra.getTruth()
    }
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

  // renders <App/>
  render() {

    let truth = this.state.truth;

    return (
      <div id="App">

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
}

export default App;
