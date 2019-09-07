import React, { Component } from 'react';
import './TechChart.css';

import ItemCard from '../ItemCard/ItemCard.js';


// <TechChart/> ----------------------------------------------------------------

class TechChart extends Component {

  constructor() {
    super();
    this.state = {
      selectedSection: false,
      selectedLanguage: false,
      windowWidth: 0,
      windowHeight: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }


  // Window Orientation --------------------------------------------------------


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


  // get -----------------------------------------------------------------------

  // returns the selected section
  // if in landscape mode, it will always return a section
  // if in mobile, it can return false if no option is actually selected
  getSelectedSection = () => {
    if (this.state.selectedSection) {
      return this.state.selectedSection;
    } else {
      if (this.state.windowWidth >= this.state.windowHeight) {
        return this.props.order[0];
      } else {
        return false;
      }
    }
  }

  getOrderForLanguage = (language) => {

    // if a language isnt specified, return all items in order
    if (! language) { return this.props.order; }

    // otherwise, build a new list with items of the right language
    let filteredOrder = [];
    for (let i = 0; i < this.props.order.length; i++) {
      let nodeKey = this.props.order[i];
      if (this.props.tech[nodeKey]['languages'].indexOf(language) >= 0) {
        filteredOrder.push(nodeKey);
      }
    }
    return filteredOrder;
  }

  // onClick -------------------------------------------------------------------

  onClick_selectSection = (section) => {
    if (this.state.selectedSection !== section) {
      this.setState({'selectedSection': section});
    }
  }

  // user clicked on a language
  // either select the new language or deselect the current one
  onClick_selectLanguage = (language) => {
    if (this.state.selectedLanguage !== language) {
      this.setState({'selectedLanguage': language});
    } else {
      this.setState({'selectedLanguage': false});
    }
  }

  // Render Landscape ----------------------------------------------------------

  renderLandscape = () => {

    if (this.state.windowWidth < this.state.windowHeight) { return; }

    return (
      <div id="landscape_container">
        <div id="card_container">
          <div id="chart_title_row">
            <h1 style={{'color': this.props.highlightColor, 'text-align': 'left', 'margin': '0px 40px 0px 0px', 'font-size': '3.5em'}}>Tech Stack</h1>
          </div>

          <div id="chart_title_row" style={{'padding-left': '55px', 'margin-top': '10px'}}>
            {this.renderLanguagesUsed()}
          </div>
          {this.renderLandscape_TechItems()}
        </div>

        <div id="item_card_container">
          {this.renderLandscape_SelectedCard()}
        </div>

      </div>
    );
  }


  renderTechItem = (nodeID, nodeDetails) => {

    let nodeStyling = {'border': '4px solid transparent'};
    if (nodeID === this.getSelectedSection()) {
      nodeStyling['border'] = "4px solid " + this.props.highlightColor;
    }

    return (
      <div className="tech_item" onClick={() => this.onClick_selectSection(nodeID)}>
        <img className="item_image" style={nodeStyling} src={nodeDetails.icon}/>
        <h3>{nodeDetails.title}</h3>
      </div>
    );
  }

  renderLandscape_TechItems = () => {

    // filter out items that weren't written with the selectedLanguage
    let order = this.getOrderForLanguage(this.state.selectedLanguage);

    // render objects
    let mathToRender = [];
    for (let i = 0; i < order.length; i++) {
      let nodeID = order[i];
      let nodeDetails = this.props.tech[nodeID];
      mathToRender.push(this.renderTechItem(nodeID, nodeDetails));

      if (i + 1 < order.length) {
        mathToRender.push(
          <div className="tech_item">
            <h1>+</h1>
          </div>
        );
      }
    }

    return (
      <div id="tech_items_container">
        {mathToRender}
      </div>
    )
  }


  // render the card that shows details about the selected tech item
  renderLandscape_SelectedCard = () => {

    let card = this.props.tech[this.getSelectedSection()];
    let footerText = "Written in ";
    for (let i = 0; i < card.languages.length; i++) {

      if (i + 1 === card.languages.length && card.languages.length > 1) {
        footerText += " and ";
      }

      footerText += card.languages[i];

      if (i + 1 < card.languages.length) {
        footerText += ", ";
      }

    }

    return (
      <ItemCard
        titleText={card.title}
        description={card.description}
        footerText={footerText}
        highlightColor={this.props.highlightColor}
      />
    );
  }

  // Render Mobile -------------------------------------------------------------

  // when in mobile mode, it can render in two modes
  // - if no item selected, show a list of all of the options
  // - if an item is selected, show details about it
  renderMobile = () => {
    if (this.state.windowWidth >= this.state.windowHeight) { return; }

    // option 1: no items are selected
    if (this.getSelectedSection() === false) {
      return (
        <div id="mobile_container">
          <h1 id="tech_stack_text" style={{'color': this.props.highlightColor, 'border-color': this.props.highlightColor}}>Tech Stack</h1>
          <div id="languages_container">
            {this.renderLanguagesUsed()}
          </div>
          {this.renderMobile_techItems()}
          <p style={{'font-style': 'italic'}}>Click on an item to view it in more detail</p>
        </div>
      );

    // option 2: an item is selected and we want to render details about it
    } else {

      let sectionDetails = this.props.tech[this.getSelectedSection()];
      return (
        <div id="mobile_container">
          <div id="tech_stack_title_row">
            <h1 style={{'color': this.props.highlightColor}}id="tech_item_title">{sectionDetails.title}</h1>
            <button id="close_item_button" onClick={() => this.setState({'selectedSection': false, 'selectedLanguage': false})}>X</button>
          </div>
          {this.renderMobile_itemDescription()}
          {this.renderMobile_itemLanguageText()}
        </div>
      );
    }
  }


  renderMobile_techItems = () => {

    // filter out items that weren't written with the selectedLanguage
    let order = this.getOrderForLanguage(this.state.selectedLanguage);

    let itemsToRender = [];
    for (let i = 0; i < order.length; i++) {
      let nodeID = order[i];
      let nodeDetails = this.props.tech[nodeID];
      itemsToRender.push(this.renderTechItem(nodeID, nodeDetails));
    }

    return (
      <div id="tech_items_container">
        {itemsToRender}
      </div>
    );
  }


  renderMobile_itemDescription = () => {

    let selectedSection = this.getSelectedSection();
    if (selectedSection === false) { return; }
    let itemDetails = this.props.tech[selectedSection];
    let description = itemDetails.description;

    let textToRender = [];
    for (let i = 0; i < description.length; i++) {

      let textStyle = {};
      if (description[i]['type'] === 'text') {
        textStyle['color'] = this.props.highlightColor;
        textStyle['font-size'] = '1.5em';
        textStyle['margin'] = '10px 0px';
      } else if (description[i]['type'] === 'list') {
        textStyle['color'] = '#353535';
        textStyle['margin'] = '5px';
      }

      textToRender.push(
        <h3 style={textStyle}>{description[i]['text']}</h3>
      );
    }

    return (
      <div id="description_container">
        {textToRender}
      </div>
    );
  }

  renderMobile_itemLanguageText = () => {

    // get the current item's details
    let selectedSection = this.getSelectedSection();
    if (selectedSection === false) { return; }          // if there isn't a section, return
    let itemDetails = this.props.tech[selectedSection];
    let languages = itemDetails.languages;

    // build the "written in" description String
    let writtenInText = [];
    writtenInText.push(<h3 className="written_in_text">Written in </h3>)
    for (let i = 0; i < languages.length; i++) {
      if ((i + 1 === languages.length) && (languages.length > 1)) {
        writtenInText.push(<h3 className="written_in_text"> and </h3>);
      }

      if (i + 1 < languages.length) {
        writtenInText.push(<h3  className="written_in_text" style={{'color': this.props.highlightColor}}>{languages[i]},</h3>);
      } else {
        writtenInText.push(<h3  className="written_in_text" style={{'color': this.props.highlightColor}}>{languages[i]}</h3>);
      }
    }

    return (
      <div id="written_in_text_container">
        {writtenInText}
      </div>
    );
  }

  // Renders <TechChart/> ------------------------------------------------------

  renderLanguagesUsed = () => {
    let languagesToRender = [];
    for (let i = 0; i < this.props.languages.length; i++) {

      let buttonStyle = {};
      let textStyle = {};
      if (this.props.languages[i] === this.state.selectedLanguage) {
        buttonStyle['background-color'] = this.props.highlightColor;
        textStyle['color'] = 'white';
      }

      languagesToRender.push(
        <div className="language_clickable" style={buttonStyle} onClick={() => this.onClick_selectLanguage(this.props.languages[i])}>
          <h3 className="language_text" style={textStyle}>{this.props.languages[i]}</h3>
        </div>
      );
    }
    return languagesToRender;
  }


  // render <TechChart/>
  render() {
    return (
      <div id="TechChart">
        {this.renderLandscape()}
        {this.renderMobile()}
      </div>
    );
  }
}

export default TechChart;
