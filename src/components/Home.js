/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import "../css/Home.css";
import katphoto from "../images/kat.jpg";



export const Home = () => (
    <div>
        <h3 className="tag">You could say it was love at first 'site'...<span>😉</span></h3>
        <Container>
        <Row className="intro">
                <Col xs={12} sm={12} lg={4}>
                    <img src={katphoto} alt="Kat" className="personal-photo" />
                </Col>
                <Col xs={12} sm={12} lg={8}>
                <div className="intro">
                    <p className="intro-kat">Hello! My name is Katerina and I am a full stack web developer looking to make an impact in tech as a developer/product manager!</p>
                   <p>
                    I have spent the last 7 years in
                    the Education Industry specifically focused on Business Operations in the Franchise world utilizing my communication and project management skills. In April of 2020, I decided to take a course on HTML and the rest was history. I quickly made the decision to gain the necassary technical skills to transition into the tech industry as a developer/product manager!
                    </p>
                    <p>
                    Since then, I have been teaching myself how to code and develop web applications. As a result of this new found passion, I attended the <strong className="gh">Grace Hopper Program through the Fullstack Academy</strong> and graduated with a certificate in Full Stack Web Development in <strong className="gh">February 2021! </strong>
                    </p>
                </div>
                </Col>
            </Row>
            <Row>
                <div className="card">
                    <div className="card-header">
                        Tech Stack
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                        <p classname="proficient">Proficient: JavaScript | React | Redux | Express | Node | PostgreSQL | GitHub | Git | Bootstrap | CSS | HTML</p>
                        <p classname="knowledgeable">Knowledgeable: Heroku | Netlify | Webpack | SQL</p>
                        </blockquote>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
);
