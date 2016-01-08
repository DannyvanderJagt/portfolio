import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';

class Content extends Telescope.Component{
  render(){
    return (
      <div className='content'>
        {this.props.children}
      </div>
    );
  }
};

export default Content;