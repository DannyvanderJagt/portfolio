import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';

class Header extends Telescope.Component{
  render(){
    let style = {};

    if(this.props.background){
      if(this.props.background.image){
        style.backgroundImage = `url('${this.props.background.image}')`;
      }
      if(this.props.background.color){
        style.backgroundColor = this.props.background.color;
      }
    }
   
    let image;
    if(this.props.image){
      image = <img className='background-image' src={this.props.image}/>
    }

    return (
      <div className='header' style={style}>
        {image}
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Header;