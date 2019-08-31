import React, { Component } from 'react';
import './App.css';

// components
import Sidebar from './Components/Sidebar/Sidebar.js';


// Ustra for handling App.state
import Ustra from './Ustra.js';


// Other constants -------------------------------------------------------------

const pageOptions = {
  "About": ["About Me"],
  "Projects": ["IndieOutreach", "Conjure", "Data Free", "FlowGrid"],
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
  [PT_selectedSection]: "About Me"
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

        </div>

      </div>
    );
  }
}

export default App;
