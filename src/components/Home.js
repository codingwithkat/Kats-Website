/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "../css/Home.css"
import jumbocode from "../images/jumbocode.JPG";



export const Home = () => (
    <div>
        <h3><strong><span>📚</span> English Major turned Web Developer? <span>👩🏻‍💻</span></strong></h3>
        <Container>
            <Row>
                <Col xs={12} md={12}>
                    <img src={jumbocode} alt="laptop" className="home-page-image" />
                </Col>
            </Row>
        </Container>
        <p className="catch-phrase"><em>Not as uncommon as you may think...</em></p>
        <p>
            Writing code and programming is not that far off from writing analytical essays. You need to be structured,
            organized, creative and willing to spend time mastering your craft. I have spent the last 7 years in
            the Education Industry specifically focused on Business Operations in the Franchise world utilizing my communication skills. In April of 2020, I decided
            to
            take a course on HTML and the rest was history. Since then, I have been teaching myself how to code and develop web applications. As a result of this new found passion, I am
            expanding my skill set every day, in order to make a career change and join the ever growing <strong>Tech industry</strong>.
        </p>
        <p>
            <strong>It was love at first 'site'...<span>😉</span></strong>
        </p>
        <p>Almost immediately, I realized web design and learning how to code was something I wanted to invest my time
        into. Since April, I have spent a number of hours taking courses on <strong>HTML5, CSS3</strong> and <strong>JavaScript</strong>. I
        have been working on mini <strong>projects</strong>;
        putting concepts into practice daily. This is the most alive I have ever felt. Day in and day out, I devote hours working on learning and getting better. This site is an example of those efforts--Feel free to look
          around! 🤓</p>
    </div>
);
