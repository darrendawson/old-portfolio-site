import React, { Component } from 'react';
import './ImageSlideshow.css';

class ImageSlideshow extends Component {

  constructor() {
    super();

    this.state = {
      imageIndex: 0,
      seconds: 0
    }
  }

  // Clock ---------------------------------------------------------------------
  /*
    If untouched, pictures will scroll on a 5 second timer
  */


  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.seconds > 5) {
      this.setState({'seconds': 0, 'imageIndex': this.getNextImageIndex()});
    } else {
      this.setState({'seconds': this.state.seconds + 1});
    }
  }

  // get -----------------------------------------------------------------------

  // gets the index of the currently selected imageIndex
  // if, for some reason, there are now fewer images than our index implies, it resets to 0
  getCurrentImageIndex = () => {
    if (this.state.imageIndex < this.props.images.length) {
      return this.state.imageIndex;
    } else {
      this.setState({'imageIndex': 0});
      return 0;
    }
  }

  getNextImageIndex = () => {
    let index = this.getCurrentImageIndex();
    if (index + 1 >= this.props.images.length) {
      return 0;
    } else {
      return index + 1;
    }
  }


  getCurrentImage = () => {
    return this.props.images[this.getCurrentImageIndex()];
  }

  // onClick -------------------------------------------------------------------

  onClick_selectImage = (index) => {
    if (index < this.props.images.length) {
      this.setState({'imageIndex': index, 'seconds': 0});
    } else {
      this.setState({'imageIndex': 0, 'seconds': 0});
    }
  }

  // render --------------------------------------------------------------------


  renderSelectImageButtons = () => {
    let buttons = [];
    let selectedIndex = this.getCurrentImageIndex();

    for (let i = 0; i < this.props.images.length; i++) {

      let buttonCSS = "img_select_button_unselected";
      let buttonStyle = {}
      if (i === selectedIndex) {
        buttonCSS = "img_select_button_selected";
        buttonStyle['background-color'] = this.props.highlightColor;
      }

      buttons.push(
        <button style={buttonStyle} className={buttonCSS} onClick={() => this.onClick_selectImage(i)}></button>
      );
    }

    return (
      <div id="buttons_container">
        {buttons}
      </div>
    );
  }


  // Renders <ImageSlideshow/>
  render() {

    let image = this.getCurrentImage();

    return (
      <div id="ImageSlideshow">
        <div id="image_container" style={{'backgroundImage': `url(${image.img})`}}>
          <div id="title_container">
            <h1 id="img_title">{image.title}</h1>
            <h3 id="img_description">{image.description}</h3>
          </div>
        </div>

        {this.renderSelectImageButtons()}
      </div>
    );
  }
}

export default ImageSlideshow;
