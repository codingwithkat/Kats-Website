import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "../css/index.css";
import cafedesk from '../images/cafedesk.png';




export const Contact = () => (
    <div className="contact-page">

        <h1 className="contact-title"><i className="fa-spin fas fa-envelope-square"></i> Contact Information </h1>
        <Container>
            <Row className="contact-form">
                <Col xs={12} md={6}>
                    <p>Thank you for visiting my page! If you would like to connect, feel free to reach out directly or fill out this form.</p>
                    <p>Email: katpapaloukas@gmail.com <br /> Cell: 201-983-8355</p>
                    <img src={cafedesk} alt="lady on a laptop" className="lady-coder" />
                </Col>
                <Col xs={12} md={6}>
                    <iframe title="contact form" src="https://docs.google.com/forms/d/e/1FAIpQLSd6MVWj_zVNETTuOz-cXCQWUBFy-gRCzytKSSjuvwzPsT7I1g/viewform?embedded=true" width="640" height="770" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </Col>
            </Row>
        </Container>
    </div>
);

/* <i className="fa-spin fas fa-mobile-alt"></i>  */