import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () =>
  <div className="navbar navbar-default">

      <NavLink className="navlink" activeClassName="activeNavlink" exact to='/'>HOME</NavLink>

      <NavLink className="navlink" activeClassName="activeNavlink" exact to='/about'>ABOUT</NavLink>

      <NavLink className="navlink" activeClassName="activeNavlink" exact to='/projects'>PROJECTS</NavLink>

      <NavLink className="navlink" activeClassName="activeNavlink" exact to='/contact'>CONTACT</NavLink>

      <a className="navlink" href='//www.liahdwallace.com' target='_blank'>BLOG</a>

  </div>

export default Navbar
