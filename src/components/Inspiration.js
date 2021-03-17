/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import jumbocode from '../images/jumbocode.JPG';
import { Container, Row, Col } from 'react-bootstrap';
import "../css/Inspiration.css";


export const Inspiration = () => (
    <div>
        <h3> What Inspired Me?</h3>
        <Container className="container">
            <Row className="intro">
                <Col xs={12}>
                    <p className="inspo-1">
                        Growing up, I knew I loved reading, writing and communicating with others.
                        Despite this, for years I wondered, <em>what was my true calling, my true passion?</em> <br />
                    </p>
                    <p className="inspo-2">
                        Although I enjoyed studying English literature and working in business operations, I always felt like something was missing. During my time as a business consultant, I had the pleasure of working with different professionals. These professionals came from a variety of backgrounds and although they were opening up learning centers, most of them had minimal experience in the education industry but multiple years of experience in their respective fields. They inspired me and motivated me to go after something new, regardless of the difficulty level and regardless of the stage in life I was in.
                    </p>
                </Col>
            </Row>
            <p className="inspo-3">
                That is why I decided to learn how to code and create web applications. I wanted to gain the necassary skills in order to better communicate with engineers, clients, stakeholders and other team members so I could take my previous experiences and combine them with my technical abilities. I can now sit in meetings and understand a variety of technologies and how they work, how they can better assist clients and how to make better products as a result!</p>

            <p className="inspo-4">
                My background in customer service and business operations make me a unique candidate on prodcut development teams. I have the ability to communicate well on cross functional teams and be the liasion between different departments. This skill set combined with my technical abilities will allow me to make an impact in technology by helping create better products for consumers! The combination of skills I have amassed in the workforce, prepared me to make this pivot. I have taken a variety of courses and attended workshops to build my skills in this area. <strong> With every lesson and line of code, I know more than ever, that this is what I was meant to do.</strong>
            </p>
            <p className="conclusion">
                I never thought my journey would take me in this direction, but I am so glad it did.<span>💫</span>
            </p>
        </Container>
    </div >
);
