/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Carousel} from 'react-bootstrap';
import "../css/Home.css";
import jumbocode from "../images/jumbocode.JPG";
import TechStack1 from "../images/TechStack1.png";



export const Home = () => (
    <div>
        <h3><strong><span>📚</span> English Major turned Software Engineer? <span>👩🏻‍💻</span></strong></h3>
        <p className="catch-phrase"><em>Not as uncommon as you may think...</em></p>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="stack"
                src={TechStack1}
                alt="Tech Stack"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <img src={jumbocode} alt="laptop" className="home-page-image" />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <p className="intro">
            Writing code and programming is not that far off from writing analytical essays. You need to be structured,
            organized, creative and willing to spend time mastering your craft. I have spent the last 7 years in
            the Education Industry specifically focused on Business Operations in the Franchise world utilizing my communication and project management skills. In April of 2020, I decided
            to
            take a course on HTML and the rest was history. Since then, I have been teaching myself how to code and develop web applications. As a result of this new found passion, I am
            expanding my skill set every day, in order to make a career change and join the ever growing <strong>Tech industry</strong>.
        </p>
        <p>
            <strong>It was love at first 'site'...<span>😉</span></strong>
        </p>
        <p>Almost immediately, I realized web design and learning how to code was something I wanted to invest my time
        into. Since April, I have spent a number of hours taking courses on <strong>HTML5, CSS3</strong> and <strong>JavaScript</strong>. I am currently attending the Grace Hopper Program through Fullstack Academy and will be graduating February 2021! I
        have been working on <strong>projects</strong>;
        putting concepts into practice daily. This site is an example of those efforts--Feel free to look
          around! 🤓</p>
    </div>
);
