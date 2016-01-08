import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';

class Paragraph extends Telescope.Component{
  render(){
    let content = this.props.children;
    let parts = content.split('.');
    let length = parts.length;

    let p1 = parts.slice(0, Math.ceil(length/2));
    let p2 = parts.slice(Math.ceil(length/2), length-1);

    p1 = p1.join('. ') + '.';
    p2 = p2.join('. ') + '.';

    return (
      <section className='paragraph'>
        <div className='split'>
          {p1}
        </div>
        <div className='split'>
          {p2}
        </div>
      </section>
    );
  }
};

export default Paragraph;