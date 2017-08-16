import React from 'react';
import {FaGithubSquare, FaInstagram, FaLinkedinSquare, FaFacebookSquare, FaCommenting} from 'react-icons/lib/fa';
import './Home.css';
import photo from '../images/face_square.jpg';

const Home = () =>
  <div className="home-container">
    <img className="home-me" src={photo} alt="Liah Wallace" />
    <h3>HI! MY NAME IS</h3>
    <h1>LIAH WALLACE</h1>
    <hr width="40%"/>
    <h4>Web Developer | Teacher | Student | Adventurer | Climber | Lover</h4>
    <div className="social">
      <a href="https://github.com/liahwallace1" target="_blank">  <FaGithubSquare /> </a>
      <a href="https://www.linkedin.com/in/liah-wallace/" target="_blank"> <FaLinkedinSquare /> </a>
      <a href="https://www.instagram.com/liahwalrus/" target="_blank"> <FaInstagram /> </a>
      <a href="https://www.facebook.com/liah.baker.73" target="_blank"> <FaFacebookSquare /> </a>
      <a href="http://liahdwallace.com/" target="_blank"> <FaCommenting /> </a>
    </div>
  </div>

export default Home
