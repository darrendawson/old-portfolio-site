import React, { Component } from 'react';
import './ItemCard.css';

class ItemCard extends Component {

  constructor() {
    super();
  }

  // render --------------------------------------------------------------------

  renderDescription = () => {
    let description = [];
    for (let i = 0; i < this.props.description.length; i++) {

      let textCSS = (this.props.description[i]['type'] === 'text') ? "regular_text" : "list_text";

      if (this.props.description[i]['type'] === 'text') {
        description.push(
          <h3 className="regular_text">{this.props.description[i]['text']}</h3>
        );
      } else {
        if (this.props.renderAsLists) {
          description.push(
            <li className="list_text">{this.props.description[i]['text']}</li>
          );
        } else {
          description.push(
            <h3 className="list_text">{this.props.description[i]['text']}</h3>
          );
        }
      }


    }
    return description;
  }


  // Renders <ItemCard/>
  render() {
    return (
      <div id="ItemCard">
        <div id="title_section">
          <h1 id="item_card_title">{this.props.titleText}</h1>
          <h1 id="item_card_subtitle">{this.props.subtitleText}</h1>
        </div>

        <div id="body_section" style={{'backgroundImage': `url(${this.props.backgroundImage})`}}>
          <div>
            {this.renderDescription()}
          </div>
          <div id="footer_text" style={{'color': this.props.highlightColor}}>{this.props.footerText}</div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
