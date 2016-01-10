import React from 'react';
import Telescope from 'telescope';

class Footer extends Telescope.Component{
  render(){
    let style = {};

    if(this.props.background){
      style.backgroundImage = 'url(' + this.props.background + ')';
    }

    return (
      <div className='footer' style={style}>
       
      </div>
    );
  }
};

export default Footer;