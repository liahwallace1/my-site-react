import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () =>
  <div className="navbar navbar-default">
    <NavLink className="navlink" activeClassName="activeNavlink" exact to='/'>Home</NavLink>

    <NavLink className="navlink" activeClassName="activeNavlink" exact to='/about'>About</NavLink>

    <NavLink className="navlink" activeClassName="activeNavlink" exact to='/projects'>Projects</NavLink>

    <a className="navlink" href='//www.liahdwallace.com' target='_blank'>Blog</a>

  </div>

export default Navbar
