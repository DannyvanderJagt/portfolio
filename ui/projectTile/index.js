import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';

class ProjectTile extends Telescope.Component{
  render(){
    let className = ['project-tile'];

    if(this.props.size){
      className.push('size-' + this.props.size);
    }else{
      className.push('size-1');
    }

    className = className.join(' ');

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
};

export default ProjectTile;