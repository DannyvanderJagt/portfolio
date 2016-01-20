import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';

class SkillsRow extends Telescope.Component{
  render(){
    let points = [], className;

    for(let i = 0; i < 5; i++){
      className = 'point';
      if(i < this.props.points){
        className += ' active';
      }

      points.push(<div key={i} className={className}/>);
    }

    return (
      <div className='skills-row'>
        <div className='icon-container'>
          <img src={this.props.icon} style={{width:"35px"}}/>
          <div className='points-container'>
            {points}
          </div>
        </div>

        <div className='title'>{this.props.title}</div>

        <div className='since-container'>
          <div className='mini-title'>Using since:</div>
          {this.props.since}
        </div>
        <div className='experience-container'>
          <div className='mini-title'>Using since:</div>
          <div className='experience'>
            {this.props.experience}
          </div>
        </div>
      </div>
    );
  }
};

export default SkillsRow;