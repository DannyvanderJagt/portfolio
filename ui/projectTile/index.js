import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';
import Button from '../button';

class ProjectTile extends Telescope.Component{
  render(){
    let className = ['project-tile'];

    if(this.props.size){
      className.push('size-' + this.props.size);
    }else{
      className.push('size-1');
    }

    className = className.join(' ');

    let style = {};

    if(this.props.backgroundImage){
      style.backgroundImage = `url(${this.props.backgroundImage})`;
    }
    if(this.props.height){
      style.height = this.props.height;
    }

    return (
      <div className={className} style={style}>
        <span className='category'>{this.props.category}</span>
        <div className='title'>{this.props.title}</div>
        <div className='subtitle'>{this.props.subTitle}</div>

        <a href={this.props.link}>
          <Button>{this.props.button}</Button>
        </a>
      </div>
    );
  }
};

export default ProjectTile;