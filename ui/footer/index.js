import React from 'react';
import Telescope from 'telescope';

import Projects from '../../../projects.config.js';
import ProjectTile from '../projectTile';

class Footer extends Telescope.Component{
  render(){
    let style = {};

    if(this.props.background){
      style.backgroundImage = 'url(' + this.props.background + ')';
    }

    let className = ['footer'];



    let tiles = [];
    let category;
    if(this.props.latestTiles){
      className.push('with-tiles');
      tiles = Projects.projects.map((project, pos) => {
        category = Projects.categories[project.category];
        return <ProjectTile 
          {...project} 
          key={pos} 
   
          light={true} 
          category={category}/>;
      });
    }

    className = className.join(' ');

    return (
      <div className={className} style={style}>
        {tiles}   
      </div>
    );
  }
};

export default Footer;