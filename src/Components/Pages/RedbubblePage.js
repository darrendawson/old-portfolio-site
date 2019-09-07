import React, { Component } from 'react';
import './Page.css';


// components
import ProfileCard from '../ProfileCard/ProfileCard.js';
import ImageSlideshow from '../ImageSlideshow/ImageSlideshow.js';


// images
import img_redbubbleLogo from '../../Images/Logos/redbubble.png';
import img_smashMarvel from '../../Images/Art/smash_marvel.png';
import img_smashSeven from '../../Images/Art/smash_7.png';
import img_bollywood from '../../Images/Art/bollywood.png';
import img_lotus from '../../Images/Art/lotus.png';
import img_kingdomKey from '../../Images/Art/kingdom_key.png';
import img_spiritTracks from '../../Images/Art/spirit_tracks.png';


// constants -------------------------------------------------------------------

const redbubbleDescription = [
  "I've been creating and selling shirt designs on Redbubble as a hobby since highschool. ",
  "My shirt designs tend to be focused in popular culture, specifically video games and movies. ",
  "To date, I've sold over 300 shirts!",
  "All artwork is made using Gimp."
];

const smashMarvel = [
  {'img': img_smashMarvel, 'title': 'Super Smash Bros: Infinity War', 'description': ''}
];

const smashSeven = [
  {'img': img_smashSeven, 'title': 'Smash Bros X Final Fantasy 7', 'description': 'Designed after Cloud was announced as DLC for Smash 4.'}
];

const bollywood = [
  {'img': img_bollywood, 'title': 'Once Upon a Time in Bollywood', 'description': ''}
];

const lotus = [
  {'img': img_lotus, 'title': 'Dual Lotus', 'description': 'Inspired by the White and Red Lotus organizations in Avatar: The Last Airbender and The Legend of Korra.'}
];

const kingdomKey = [
  {'img': img_kingdomKey, 'title': 'Kingdom Key Art Deco', 'description': ''}
];

const spiritTracks = [
  {'img': img_spiritTracks, 'title': 'Spirit Tracks Monopoly Card', 'description': 'The Legend of Zelda: Spirit Tracks as a Monopoly Railroad card. '}
];


// =============================================================================
// <RedbubblePage/>
// =============================================================================

class RedbubblePage extends Component {

  constructor() {
    super();
  }

  // render --------------------------------------------------------------------

  // Renders <RedbubblePage/>
  render() {
    return (
      <div id="Page">
        <div style={{'margin-bottom': '30px', 'width': '100%'}}>
          <ProfileCard
            title="Redbubble"
            profileImages={[img_redbubbleLogo]}
            socialMediaLinks={[]}
            description={redbubbleDescription}
            viewButtonLink="https://redbubble.com/people/dangerousbear"
            highlightColor="#ea2727"
          />
        </div>

        <ImageSlideshow images={smashMarvel}/>
        <ImageSlideshow images={bollywood}/>
        <ImageSlideshow images={lotus}/>
        <ImageSlideshow images={smashSeven}/>
        <ImageSlideshow images={kingdomKey}/>
        <ImageSlideshow images={spiritTracks}/>
      </div>
    );
  }
}

export default RedbubblePage;
