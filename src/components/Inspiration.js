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
                    <img src={jumbocode} alt="computer" className="laptop"/>
                </Col>
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
                These individuals took a risk and went after what they were passionate about; providing support to students in their respective communities. Many of the individuals I worked with, put everything on the line. Day in and day out, I watched them succeed and I knew that I could do the same. </p>

            <p className="inspo-4">
                Over the years, my math skills had improved and I found myself thinking in much more logical terms as I tackled operations problems. The combination of skills I have amassed in the workforce, prepared me to make this pivot. I have taken a variety of courses and attended workshops to build my skills in this area. <strong> With every lesson and line of code, I know more than ever, that this is what I was meant to do.</strong>
            </p>
            <p className="conclusion">
                I never thought my journey would take me in this direction, but I am so glad it did. <strong>From book worm to developer.<span>💫</span> </strong>
            </p>
        </Container>
    </div >
);
