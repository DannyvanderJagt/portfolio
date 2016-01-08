import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';

class Title extends Telescope.Component{
  render(){
    let id = this.props.title.toLowerCase();
    id = id.replace(' ', '-');

    return (
      <h1 id={id}>
        {this.props.title}
        <span className='description'>
          {this.props.description}
        </span>
      </h1>
    );
  }
};

export default Title;