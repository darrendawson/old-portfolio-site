import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

  constructor() {
    super();
  }

  // onClick -------------------------------------------------------------------

  onClick_selectSection = (section) => {
    if (this.props.selectedOption !== section) {
      this.props.update(section, this.props.selectedOptionTag);
    }
  }

  // render --------------------------------------------------------------------

  // returns the right color corresponding to an option
  // ex: option='IndieOutreach' will return IndieOutreach's purple
  // this is called so the selected option in <Sidebar/> has the right color
  getSelectedColor = (option) => {
    if (option === "About Me") {
      return '#19b1ea';
    } else if (option === "IndieOutreach") {
      return '#6f3ce8';
    } else if (option === "Conjure") {
      return '#eaac27';
    }
  }


  renderOptions = () => {
    let optionsToRender = [];

    for (let key in this.props.options) {

      // add category name (ie: Projects, About, etc)
      optionsToRender.push(
        <div className="unselectable_option_container">
          <h1 className="option_title_white">{key}</h1>
        </div>
      );


      // add all options within category
      let listOfOptions = this.props.options[key];
      for (let i = 0; i < listOfOptions.length; i++) {
        if (this.props.selectedOption === listOfOptions[i]) {
          optionsToRender.push(
            <div className="selected_option_container" style={{'background-color': this.getSelectedColor(this.props.selectedOption)}}>
              <h2 className="option_title_white">{listOfOptions[i]}</h2>
            </div>
          );
        } else {
          optionsToRender.push(
            <div className="unselected_option_container" onClick={() => this.onClick_selectSection(listOfOptions[i])}>
              <h2 className="option_title_grey">{listOfOptions[i]}</h2>
            </div>
          );
        }
      }
    }


    return optionsToRender;
  }


  // Renders <Sidebar/>
  render() {
    return (
      <div id="Sidebar">
        {this.renderOptions()}
      </div>
    );
  }
}

export default Sidebar;
