import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';

class Roadmap extends Telescope.Component{
  render(){
    let steps = [];

    let className;
    steps = this.props.steps.map((step, pos) => {
      className = ['dot'];

      if(step[1] && step[1] === 1){
        className.push('done');
      }

      className = className.join(' ');
      return (
        <div className='step' key={pos}>
          <div className='graphic'>
            {pos !== 0 ? <div className='line'/> : <div className='line hide'/>}
            <div className={className}/>
            {pos !== this.props.steps.length-1 ? <div className='line'/> : <div className='line hide'/>}
          </div>
          <div className='label'>
            <a href={'#'+step[0].toLowerCase()}>
              {step[0]}
            </a>
          </div>
        </div>
      );
    });

    let time = [];
    let finished;
    let prefinish;

    if(this.props.startedOn){

      if(this.props.finishedOn){
        prefinish = 'was completed on';
        finished =  <span className='bold'>{this.props.finishedOn}.</span>;
      }else{
        prefinish = 'it is';
        finished = <span className='bold'>still in developement!</span>;
      }
      
      time = (<div className='time'>
          This project started on <span className='bold'>{this.props.startedOn}</span> and {prefinish} {finished}
      </div>) 
    }

    return (
      <div className='roadmap'>
        {steps}
        {time}
      </div>
    );
  }
};

export default Roadmap;