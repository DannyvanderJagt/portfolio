import React from 'react';
import Telescope from 'telescope';
import Fs from 'fs';
import Path from 'path';

class Svg extends Telescope.Component{
  render(){
    let svg;
    let path = Path.join(__dirname, '../../../', 'assets/icons', this.props.name + '.svg');
    try{
      svg = Fs.readFileSync(path, 'utf-8');
    }catch(error){
      console.log('Svg: cannot find icon: ', this.props.name, path);
    }

    let style = {};
    if(this.props.width){
      style.width = this.props.width;
    }
    if(this.props.height){
      style.height = this.props.height;
    }

    return <span style={style} dangerouslySetInnerHTML={{__html:svg}}></span>;
  }
};

export default Svg;