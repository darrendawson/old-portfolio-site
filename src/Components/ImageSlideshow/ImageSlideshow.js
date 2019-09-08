import React, { Component } from 'react';
import './ImageSlideshow.css';


// =============================================================================
// <ZoomedInImage/>
// =============================================================================

class ZoomedInImage extends Component {
  constructor() {
    super();
    this.scrollTargetRef = false;
  }

  componentDidMount() {
    this.scrollToCenter();
  }

  componentDidUpdate() {
    this.scrollToCenter();
  }

  scrollToCenter = (targetRef = this.scrollTargetRef) => {
    // set scroll on a short timer so it targetRef will be valid
    setTimeout(function() {
      targetRef.scrollIntoView({behavior: "smooth"});
    }, 1000);
  }

  render() {
    return (
      <div id="zoomed_in_page_container" onClick={this.props.onClick_expandImage}>
        <div id="zoomed_in_image_container">
          <div id="scroll_target" ref={ (el) => {this.scrollTargetRef = el; }}></div>
          <img id="zoomed_in_image" src={this.props.image.img}/>
        </div>
      </div>
    );
  }
}


// =============================================================================
// <ImageSlideshow/>
// =============================================================================

class ImageSlideshow extends Component {

  constructor() {
    super();

    this.state = {
      imageIndex: 0,
      seconds: 0,
      windowWidth: 0,
      windowHeight: 0,
      zoomInActive: false,
      mouseHoverActive: false
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  // Clock and Window Size -----------------------------------------------------
  /*
    If untouched, pictures will scroll on a 5 second timer
  */


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    clearInterval(this.timerID);
  }


  tick() {

    // if we are in zoom in mode in mobile, dont tick
    if (this.state.zoomInActive && (this.state.windowWidth < this.state.windowHeight)) { return; }

    // if user is hovering over the image, don't tick
    if (this.state.mouseHoverActive) { return; }

    // otherwise, tick away
    if (this.state.seconds > 5) {
      this.setState({'seconds': 0, 'imageIndex': this.getNextImageIndex()});
    } else {
      this.setState({'seconds': this.state.seconds + 1});
    }
  }

  updateWindowDimensions() {
    this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight});
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

  // for when a user clicks on a different image in order to switch to it
  onClick_selectImageFromGallery = (index) => {
    if (index < 0) {
      this.setState({'imageIndex': this.props.images.length - 1});
    } else if (index < this.props.images.length) {
      this.setState({'imageIndex': index, 'seconds': 0});
    } else {
      this.setState({'imageIndex': 0, 'seconds': 0});
    }
  }


  onClick_moveToNextImage = () => {
    let index = this.getCurrentImageIndex();
    this.onClick_selectImageFromGallery(index + 1);
  }

  onClick_moveToPrevImage = () => {
    let index = this.getCurrentImageIndex();
    this.onClick_selectImageFromGallery(index - 1);
  }

  // when a user clicks on an image with the intent to expand it
  onClick_expandImage = (index = this.state.imageIndex) => {
    if (this.state.windowWidth >= this.state.windowHeight) { return; }
    this.setState({'zoomInActive': !this.state.zoomInActive});
  }



  // render Zoomed -------------------------------------------------------------

  // only render zoomedIn mode if in mobile mode and zoomedIn is active
  renderZoomed = () => {
    if (this.state.windowWidth >= this.state.windowHeight) { return; }
    if (!this.state.zoomInActive) { return; }

    let image = this.getCurrentImage();

    return (
      <ZoomedInImage image={image} onClick_expandImage={this.onClick_expandImage}/>
    );
  }

  // renders a message telling the user that they can click on a photo to zoom in
  renderZoomInText = () => {
    if (this.state.windowWidth >= this.state.windowHeight) { return; }
    return (
      <p>Click on image to zoom</p>
    );
  }



  // render --------------------------------------------------------------------


  renderSelectImageButtons = () => {

    if (this.props.images.length <= 1) { return; }

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
        <button style={buttonStyle} className={buttonCSS} onClick={() => this.onClick_selectImageFromGallery(i)}></button>
      );
    }

    return (
      <div id="buttons_container">
        {buttons}
      </div>
    );
  }

  // divs that are overlayed ontop of the current image so user can click them to move
  renderMoveButtons = () => {

    if (this.state.zoomInActive) { return; }
    if (! this.state.mouseHoverActive && (this.state.windowWidth >= this.state.windowHeight)) { return; }
    if (this.props.images.length <= 1) { return; }

    let leftArrow = "<";
    let rightArrow = ">";
    let containerCSS = "";
    if (this.state.windowWidth >= this.state.windowHeight) {
      containerCSS = "fade_in";
    }

    return (
      <div id="move_buttons_container">
        <div id="absolute_position" className={containerCSS}>
          <div className="overlay_column" onClick={this.onClick_moveToPrevImage}>
            <h1 className="overlay_button">{leftArrow}</h1>
          </div>
          <div className="overlay_zoom_in_button" onClick={this.onClick_expandImage}></div>
          <div className="overlay_column" onClick={this.onClick_moveToNextImage}>
            <h1 className="overlay_button">{rightArrow}</h1>
          </div>
        </div>
      </div>
    );
  }

  // Renders <ImageSlideshow/>
  render() {

    let image = this.getCurrentImage();

    return (
      <div id="ImageSlideshow">
        <div id="image_container">
          <div id="title_container">
            <h2 id="img_title">{image.title}</h2>
            <p id="img_description">{image.description}</p>
          </div>

          <div id="image_positioning_container"
            onMouseEnter={() => this.setState({'mouseHoverActive': true})}
            onMouseLeave={() => this.setState({'mouseHoverActive': false})}>
            <img id="image" src={image.img} onClick={this.onClick_expandImage}/>
            {this.renderMoveButtons()}
          </div>

        </div>
        {this.renderZoomInText()}

        {this.renderSelectImageButtons()}
        {this.renderZoomed()}
      </div>
    );
  }
}

export default ImageSlideshow;
