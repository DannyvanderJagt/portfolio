import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';

import Svg from '../svg';
import Line from '../line';

class SkillsCategory extends Telescope.Component{
  render(){


    return (
      <div className='skills-category'>
        <div className='title-container'>
          <img src={this.props.icon}/>
          <div className='title'>{this.props.title}</div>
          <div className='description'>{this.props.description}</div>
        </div>
        <Line/>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default SkillsCategory;