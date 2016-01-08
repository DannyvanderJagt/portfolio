import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';
import Button from '../button';

class HomepageHeader extends Telescope.Component{
  render(){
    let image;
    if(this.props.image){
      image = <img className='background-image' src={this.props.image}/>
    }

    return (
      <div>
        <div className='homepage-header'>
          {image}
          <div className='content'>
            <div className='text'>
              Hi, I am
              <br/>
              <div className='name'>Danny van der Jagt</div>
              <Button>See my work</Button>
            </div>
          </div>
        </div>
        <div className='overlay'>
          <div className='section'>
            <span className='icon'>
              <img src='/assets/images/coding_icon_set.png'/>
            </span>
            <span className='title'>Coding</span>
            <span className='subtitle'>Libraries and UI's</span>
          </div>
          <div className='section'>
            <span className='icon'>
              <img src='/assets/images/design_icon_set.png'/>
            </span>
            <span className='title'>Pixels</span>
            <span className='subtitle'>Icons and UI</span>
          </div>
          <div className='section'>
            <span className='icon'>
              <img src='/assets/images/photography_icon_set.png'/>
            </span>
            <span className='title'>Coding</span>
            <span className='subtitle'>The beauty of life.</span>
          </div>
        </div>
      </div>
    );
  }
};

export default HomepageHeader;