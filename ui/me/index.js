import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';

import Button from '../button';
import Svg from '../svg';

class Me extends Telescope.Component{
  render(){
    return (
      <div className='me'>
        <div className='image'>
          <img src='/assets/images/me.jpg'/>
        </div>
        <div className='title'>Danny van der Jagt </div>
        <div className='subtitle'>A passionated person</div>
        <div className='description'>
          Hello! I’m a javascript developer who is interested in everything from front-end to backend and IOT. I'm also a hobby photographer and windsurfer for life!
        </div>
        <a href='/danny'>
          <Button> Read more </Button>
        </a>
        or
         <a href={Config.socialmedia.twitter}>
          <Svg name='twitter'/>
        </a>
      </div>
    );
  }
};

export default Me;