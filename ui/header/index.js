import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';
import Button from '../button';

class Header extends Telescope.Component{
  render(){
    let image;
    if(this.props.image){
      image = <img className='background-image' src={this.props.image}/>
    }

    return (
      <div className='header-container'>
        <div className='header'>
          {image}
        </div>
        <div className='overlay'>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Header;