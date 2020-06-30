import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "../css/Certificates.css";
import ShePlus from "../images/SheCodesFrontEndDev.jpg";
import AdvDesJS from "../images/CourseraAdvDesignUMICH.jpg";
import SheIntro from "../images/SheCodesCert.jpg";
import InterJS from "../images/CourseraInteractivityJS.jpg";
import IntroCSS from "../images/CourseraIntroCSS.jpg";
import IntroHTML2 from "../images/CourseraIntroHTML.jpg";
import IntroHTML1 from "../images/HTMLCertificateofCompletion.jpg";

export const Certificates = () => {
    return (
        <div>
            <Container>
                <p className="title"> My <em>personalized</em> road to success!</p>

                <Row className="certs">
                    <Col xs={12} md={6}>
                        <p className="course-name">Front End Development Workshop, Issued July 2020</p>
                        <img src={ShePlus} alt="certificate" className="completed-course-she" />
                    </Col>
                    <Col xs={12} md={6}>
                        <p className="course-name">Advanced Responsive Design,
                        Issued June 2020</p>
                        <img src={AdvDesJS} alt="certificate" className="completed-course-sera" />
                    </Col>
                </Row>
                <Row className="certs">
                    <Col xs={12} md={6}>
                        <p className="course-name">Intro to Coding Workshop, Issued June 2020</p>
                        <img src={SheIntro} alt="certificate" className="completed-course-she" />
                    </Col>
                    <Col xs={12} md={6}>
                        <p className="course-name">Interactivity with Javascript, Issued May 2020</p>
                        <img src={InterJS} alt="certificate" className="completed-course-sera" />
                    </Col>
                </Row>
                <Row className="certs">
                    <Col xs={12} md={6}>
                        <p className="course-name">Introduction to CSS3, Issued May 2020</p>
                        <img src={IntroCSS} alt="certificate" className="completed-course-sera" />
                    </Col>
                    <Col xs={12} md={6}>
                        <p className="course-name">Introduction to HTML5, Issued April 2020</p>
                        <img src={IntroHTML2} alt="certificate" className="completed-course-sera" />
                    </Col>
                </Row>
                <Row className="certs">

                    <Col xs={12}>
                        <p className="course-name-bottom">HTML Coding For Beginners, Issued April 2020</p>
                        <img src={IntroHTML1} alt="certificate" className="completed-course-bitdegree" />
                    </Col>
                </Row>

            </Container>
        </div>
    )

}

