import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';

class Iphone extends Telescope.Component{
  render(){
    let style = {
      backgroundImage: 'url(/assets/images/iphone_5s_template.png)'
    };

    let className = ['iphone'];

    if(this.props.size){
      className.push('size-'+this.props.size);
    }else{
      className.push('size-2');
    }

    className = className.join(' ');

    return (
      <div className={className} style={style}>
        <img src={this.props.image}/>
      </div>
    );
  }
};

export default Iphone;