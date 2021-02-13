/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "../css/Projects.css";
import comic from "../images/comic.png";
import comic2 from "../images/comic2.png";
import artemis from "../images/artemis.png";
import skincare from "../images/skincare.png";
import weather from "../images/weather.png";
import { Container, Row, Col } from "react-bootstrap";


export const Projects = () => (
    <div>
        <h1>My Projects:</h1>
      <Container>
          <Row>
              <Col md={6}>
                <div className="card" style={{ width: '30rem' }}>
                    <img className="card-img-top" src={comic} alt="project"/>
                    <img className="card-img-top" src={comic2} alt="project"/>
                    <div className="card-body">
                        <h5 className="card-title"><a href="http://comicsans-app.herokuapp.com/">Comic Sans</a></h5>
                        <p className="card-text">Comic page creator!<p className="stack-info">Tech Stack: React, Redux, Heroku, HTML5, CSS3, Bootstrap, Express, Node, Sequelize, Fabric, HTML Canvas</p></p>
                        
                    </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="card" style={{ width: '30rem' }}>
                    <img className="card-img-top" src={artemis} alt="project"/>
                    <div className="card-body">
                        <h5 className="card-title"><a href="https://artemis-workouts.herokuapp.com/home">Artemis Workouts</a></h5>
                        <p className="card-text">An exercise library with the ability to create individualized daily workout plan! 
                        <p className="stack-info">Tech Stack: React, Redux, Heroku, HTML5, CSS3, Bootstrap, Express, Node, Google OAuth, SQL, Sequelize</p></p>
                        
                    </div>
                </div>
              </Col>
          </Row>
          <Row>
              <Col md={6}>
                <div className="card" style={{ width: '30rem' }}>
                    <img className="card-img-top" src={skincare} alt="project"/>
                    <div className="card-body">
                        <h5 className="card-title"><a href="https://gh-skincare1.herokuapp.com/" >E-commerce SkinCare</a></h5>
                        <p className="card-text">Skincare e-commerce website! <p className="stack-info">Tech Stack: React, Redux, Heroku, HTML5, CSS3, Bootstrap, Express, Node, Google OAuth, SQL, Sequelize</p></p>
                        
                    </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="card" style={{ width: '30rem' }}>
                    <img className="card-img-top" src={weather} alt="project"/>
                    <div className="card-body">
                        <h5 className="card-title"><a href="https://react-city-weather-app.netlify.app/">React City Weather App</a></h5>
                        <p className="card-text">A weather app that provides you with weather information by city! <p className="stack-info">Tech stack: React, Javascript, HTML, CSS, Bootstrap</p></p>
                    </div>
                </div>
              </Col>
          </Row>
      </Container>
    </div>
);
