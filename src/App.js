import React, { Component } from 'react';
import './App.css';

// components
import Sidebar from './Components/Sidebar/Sidebar.js';


const pageOptions = {
  "About": ["About Me"],
  "Projects": ["IndieOutreach", "Conjure", "Data Free", "FlowGrid"],
  "Hackathons": ["Intuit 2018", "Y Combinator (s2019)"],
  "Art": ["Redbubble"]
}

// <App/>
class App extends Component {

  render() {
    return (
      <div id="App">

        <div id="left_container">
          <Sidebar
            options={pageOptions}
            selectedOption="About Me"
          />
        </div>

        <div id="right_container">

        </div>

      </div>
    );
  }
}

export default App;
