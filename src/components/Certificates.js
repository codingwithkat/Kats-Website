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
import WebCapstone from "../images/CourseraWebDesign.png";
import WebSpecialization from "../images/CourseraSpecialization.png";

export const Certificates = () => {
    return (
        <div>
            <Container>
                <h1 className="title">Relevant Coursework Completed Online</h1>
                <Row className="certs">
                    <Col xs={12} md={12}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Web Design for Everybody: Basics of Web Development and Coding Specialization, Issued July 2020</h5>
                            </div>
                            <img class="card-img-top" src={WebSpecialization} alt="Web Design Specialization"></img>
                        </div>
                    </Col>
                    <Col xs={12} md={12}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Web Design for Everybody Capstone, Issued July 2020</h5>
                            </div>
                            <img class="card-img-top" src={WebCapstone} alt="Webdesign Capstone"></img>
                        </div>
                    </Col>
                </Row>
                <Row className="certs">
                    <Col xs={12} md={12}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Front End Development Workshop, Issued July 2020</h5>
                            </div>
                            <img class="card-img-top" src={ShePlus} alt="Front End"></img>
                        </div>
                    </Col>
                    <Col xs={12} md={12}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Advanced Responsive Design Issued July 2020</h5>
                            </div>
                            <img class="card-img-top" src={AdvDesJS} alt="Responsive Design"></img>
                        </div>
                    </Col>
                </Row>
                <Row className="certs">
                    <Col xs={12} md={12}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Introduction to Coding Workshop, Issued June 2020</h5>
                            </div>
                            <img class="card-img-top" src={SheIntro} alt="Intro to Coding"></img>
                        </div>
                    </Col>
                    <Col xs={12} md={12}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Interactivity with JavaScript, Issued May 2020</h5>
                            </div>
                            <img class="card-img-top" src={InterJS} alt="JS"></img>
                        </div>
                    </Col>
                </Row>
                <Row className="certs">
                    <Col xs={12} md={12}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Introduction to CSS3, Issued May 2020</h5>
                            </div>
                            <img class="card-img-top" src={IntroCSS} alt="Intro to CSS"></img>
                        </div>
                    </Col>
                    <Col xs={12} md={12}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Introduction to HTML5, Issued April 2020</h5>
                            </div>
                            <img class="card-img-top" src={IntroHTML2} alt="HTML"></img>
                        </div>
                    </Col>
                </Row>
                <Row className="certs">
                    <Col xs={12} md={12}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">HTML Coding for Beginners, Issued April 2020</h5>
                            </div>
                            <img class="card-img-top" src={IntroHTML1} alt="HTML"></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


