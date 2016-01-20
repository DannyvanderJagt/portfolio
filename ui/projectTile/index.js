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

    if(this.props.light){
      className.push('mode-light');
    }else{
      className.push('mode-dark');
    }

    if(this.props.border === false){
      className.push('no-border');
    }

    className = className.join(' ');

    let style = {};

    if(this.props.backgroundImage){
      style.backgroundImage = `url(${this.props.backgroundImage})`;
    }

    if(this.props.backgroundRepeat){
      style.backgroundRepeat = this.props.backgroundRepeat;
    }

    if(this.props.height){
      style.height = this.props.height;
    }

    return (
      <div className={className} style={style}>
        <span className='category'>{this.props.category}</span>
        <div className='text'>
         <a href={this.props.link}>
          <div className='title'>{this.props.title}</div>
          <div className='subtitle'>{this.props.subTitle}</div>
          </a>
        </div>

        <a href={this.props.link}>
          <Button>{this.props.button}</Button>
        </a>
      </div>
    );
  }
};

export default ProjectTile;