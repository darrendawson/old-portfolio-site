import React, { Component } from 'react';
import './TechChart.css';

import ItemCard from '../ItemCard/ItemCard.js';


// constants -------------------------------------------------------------------

const nodeMargins = ['150px', '250px', '50px', '200px', '100px', '200px'];
const edgeMargins = ['210px', '100px', '100px', '150px', '150px', '100px'];
const edgeDimensions = [
  {'x1': '0', 'y1': '0', 'x2': '100', 'y2': '90'},
  {'x1': '0', 'y1': '200', 'x2': '100', 'y2': '0'},
  {'x1': '0', 'y1': '0', 'x2': '100', 'y2': '150'},
  {'x1': '0', 'y1': '100', 'x2': '100', 'y2': '0'},
  {'x1': '0', 'y1': '0', 'x2': '100', 'y2': '100'}
];


// <TechChart/> ----------------------------------------------------------------

class TechChart extends Component {

  constructor() {
    super();
    this.state = {
      selectedSection: false,
      selectedLanguage: false
    }
  }

  getSelectedSection = () => {
    if (this.state.selectedSection) {
      return this.state.selectedSection;
    } else {
      return this.props.order[0];
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

  // render Chart --------------------------------------------------------------

  getNodeTopMargin = (nodeIndex) => {
    let index = nodeIndex % nodeMargins.length;
    return nodeMargins[index];
  }

  getEdgeTopMargin = (edgeIndex) => {
    let index = edgeIndex % edgeMargins.length;
    return edgeMargins[index];
  }

  getEdgeDimensions = (edgeIndex) => {
    let index = edgeIndex % edgeDimensions.length;
    return edgeDimensions[index];
  }

  renderNode = (nodeID, nodeDetails, nodeIndex) => {

    let nodeStyling = {};
    if (nodeID === this.getSelectedSection()) {
      nodeStyling['border'] = "4px solid " + this.props.highlightColor;
    }

    return (
      <div
        className="node_column"
        style={{'margin-top': this.getNodeTopMargin(nodeIndex)}}
        onClick={() => this.onClick_selectSection(nodeID)}>
        <img className="item_image" style={nodeStyling} src={nodeDetails.icon}/>
        <h3>{nodeDetails.title}</h3>
      </div>
    );
  }

  renderEdge = (edgeIndex) => {
    let edge = this.getEdgeDimensions(edgeIndex);
    return (
      <svg height="500" width="100" style={{'margin-top': this.getEdgeTopMargin(edgeIndex)}}>
         <line x1={edge.x1} y1={edge.y1} x2={edge.x2} y2={edge.y2} style={{'stroke': this.props.highlightColor, 'stroke-width': '2'}} />
       </svg>
    );
  }


  renderChart = () => {

    if (! this.props.renderChart ) { return; }

    let chartToRender = [];
    for (let i = 0; i < this.props.order.length; i++) {
      let nodeKey = this.props.order[i];
      if (nodeKey in this.props.tech) {
        chartToRender.push(this.renderNode(nodeKey, this.props.tech[nodeKey], i));
        if (i + 1 !== this.props.order.length) {
          chartToRender.push(this.renderEdge(i));
        }
      }
    }
    return (
      <div id="chart_container">
        {chartToRender}
      </div>
    );
  }


  // Render Math ---------------------------------------------------------------

  renderMathNode = (nodeID, nodeDetails) => {

    let nodeStyling = {'border': '4px solid transparent'};
    if (nodeID === this.getSelectedSection()) {
      nodeStyling['border'] = "4px solid " + this.props.highlightColor;
    }

    return (
      <div className="math_node_contanier" onClick={() => this.onClick_selectSection(nodeID)}>
        <img className="item_image" style={nodeStyling} src={nodeDetails.icon}/>
        <h3>{nodeDetails.title}</h3>
      </div>
    );
  }

  renderMath = () => {

    if (this.props.renderChart) { return; }


    // filter out items that weren't written with the selectedLanguage
    let order = this.getOrderForLanguage(this.state.selectedLanguage);

    // render objects
    let mathToRender = [];
    for (let i = 0; i < order.length; i++) {
      let nodeID = order[i];
      let nodeDetails = this.props.tech[nodeID];
      mathToRender.push(this.renderMathNode(nodeID, nodeDetails));

      if (i + 1 < order.length) {
        mathToRender.push(
          <div className="math_node_contanier">
            <h1>+</h1>
          </div>
        );
      }
    }

    return (
      <div id="math_container">
        {mathToRender}
      </div>
    )
  }

  // render card ---------------------------------------------------------------

  renderSelectedCard = () => {

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


  render() {
    return (
      <div id="TechChart">
        <div id="card_container">
          <div id="chart_title_row">
            <h1 style={{'color': this.props.highlightColor, 'text-align': 'left', 'margin': '0px 40px 0px 0px', 'font-size': '3.5em'}}>Tech Stack</h1>
          </div>

          <div id="chart_title_row" style={{'padding-left': '55px', 'margin-top': '10px'}}>
            {this.renderLanguagesUsed()}
          </div>
          {this.renderChart()}
          {this.renderMath()}
        </div>

        <div id="item_card_container">
          {this.renderSelectedCard()}
        </div>

      </div>
    );
  }
}

export default TechChart;
