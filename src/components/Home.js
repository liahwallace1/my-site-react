import React from 'react';
import './Home.css';
import photo from '../images/face_square.jpg';

const Home = () =>
  <div className="home-container">
    <img className="home-me" src={photo} alt="Liah Wallace" />
    <h3>HI! MY NAME IS</h3>
    <h1>LIAH WALLACE</h1>
    <hr width="40%"/>
    <h4>Web Developer | Teacher | Student | Adventurer | Climber | Lover</h4>
  </div>

export default Home
