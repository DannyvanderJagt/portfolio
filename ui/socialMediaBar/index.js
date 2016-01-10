import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';
import Svg from '../svg';

class SocialMediaBar extends Telescope.Component{
  render(){
    let icons = [];

      icons = Object.keys(Config.socialmedia).map((key, pos) => {
        return (
          <a href={Config.socialmedia[key]} key={pos}>
            <Svg name={key}/>
          </a>
        );
      });

    return (
      <div className='social-media-bar'>
        {icons}
      </div>
    );
  }
};

export default SocialMediaBar;