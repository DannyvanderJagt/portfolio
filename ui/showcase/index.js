import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';

import Projects from '../../../projects.config';
import Button from '../button';

import ProjectTile from '../projectTile';

class Showcase extends Telescope.Component{
  render(){
    let Tiles = [];

    let category;
    Tiles = Projects.projects.map((project, pos) => {
      category = Projects.categories[project.category];
      return <ProjectTile {...project} key={pos} category={category}/>;
    });

    return (
      <div className='tile-container'>
        {Tiles}
      </div>
    );
  }
};

export default Showcase;