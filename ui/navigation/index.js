import React from 'react';
import Telescope from 'telescope';
import Config from '../../../portfolio.config';
import Svg from '../svg'; 

class Navigation extends Telescope.Component{
  render(){

    // Menu items.
    let navigationItems = [];
    navigationItems = Config.menu.map((item, pos) => {
      return (
        <li className='item' key={pos}>
          <a href={item.href}>
            {item.title}
          </a>
        </li>

      );
    });

    // External links.
    let links = [];
    links = Object.keys(Config.socialmedia).map((item, pos) => {
      return (
        <li className='link' key={pos}>
          <a href={Config.socialmedia[item]}>
            <Svg name={item} height="15px"/>
          </a>
        </li>
      );
    });

    // Compile classes.
    let classes = [];
    if(this.props.light === false){
      classes.push('mode-dark');
    }else{
      classes.push('mode-light');
    }

    if(this.props.background === false){
      classes.push('no-background');
    }
    classes = classes.join(' ');

    return (
      <div id='navigation' className={classes}>

        <div className='logo'>
          <a href='/'>
            <img src='/assets/icons/logo.svg'/>
          </a>
        </div>

        <div className='navigation'>
          <ul className='list'>
            {navigationItems}
          </ul>
        </div>

        <ul className='list links'>
          {links}
        </ul>
      </div>
    );
  }
};

export default Navigation;