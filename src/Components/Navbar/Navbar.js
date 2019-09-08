import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      expanded: false
    }
  }


  getPageColor = (optionName = this.props.selectedOption) => {
    if (optionName in this.props.pageColors) {
      return (this.props.pageColors[optionName]);
    } else {
      return ('#19b1ea');
    }
  }

  // onClick -------------------------------------------------------------------

  onClick_selectSection = (section) => {
    if (this.props.selectedOption !== section) {
      this.props.update(section, this.props.selectedOptionTag);
    }
    this.setState({expanded: false});
  }


  // render --------------------------------------------------------------------

  renderOptions = () => {

    // only render if the <Navbar/> has been expanded
    if (!this.state.expanded) { return; }

    let optionsToRender = [];

    // props.options is a dict of categories. Each category has a list of items within it
    // therefore, for every key in options, we need to iterate over its children
    for (let key in this.props.options) {

      // add the option category to optionsToRender
      optionsToRender.push(
        <div className="options_container_row">
          <h1 style={{'color': 'white'}}>{key}</h1>
        </div>
      );


      // for each project in this option category, build up a list of them to add to optionsToRender
      let listOfOptions = this.props.options[key];
      let optionBoxesToRender = [];
      for (let i = 0; i < listOfOptions.length; i++) {

        // determine the correct color of the button
        let pageColor = this.getPageColor(listOfOptions[i]);
        let optionStyle = {'color': pageColor, 'border-color': pageColor};
        if (listOfOptions[i] === this.props.selectedOption) {
          optionStyle['background-color'] = pageColor;
          optionStyle['color'] = 'white';
        }
        optionBoxesToRender.push(
          <div
            className="option_container"
            style={optionStyle}
            onClick={() => this.onClick_selectSection(listOfOptions[i])}>
            <h2 style={{'color': 'inherit', 'margin': '0px'}}>{listOfOptions[i]}</h2>
          </div>
        );
      }

      // add optionBoxesToRender to overall listOfOptions
      optionsToRender.push(
        <div className="options_container_row">
          {optionBoxesToRender}
        </div>
      );
    }


    // return all options
    return(
      <div id="options_dropdown_container">
        {optionsToRender}
      </div>
    );
  }

  renderTitleRow = () => {

    // function for rendering the GoTo button (user clicks to expand <Navbar/>)
    let goToButtonText;
    if (this.state.expanded) {
      goToButtonText = (<h1 style={{'color': '#282828'}}>&#9776;</h1>);
    } else {
      goToButtonText = (<h1 style={{'color': 'white'}}>&#9776;</h1>);
    }

    return (
      <div id="title_row" style={{'background-color': this.getPageColor()}}>
        <h1 style={{'color': 'white', 'margin': '0px'}}>{this.props.selectedOption}</h1>
        <button
          id="go_to_button"
          onClick={() => this.setState({expanded: !this.state.expanded})}>
          {goToButtonText}
        </button>

      </div>
    );
  }


  // Renders <Navbar/>
  render() {
    return (
      <div id="Navbar">
        {this.renderTitleRow()}
        {this.renderOptions()}
      </div>
    );
  }
}

export default Navbar;
