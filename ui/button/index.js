import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';

class Button extends Telescope.Component{
  render(){
    return (
      <div className='button'>
        {this.props.children}
      </div>
    );
  }
};

export default Button;