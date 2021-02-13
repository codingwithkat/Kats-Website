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
                    <p>Thank you for visiting my page! If you would like to connect, feel free to reach out.</p>
                    <p>Email: <a href="mailto:katerinascoullos@gmail.com">katerinascoullos@gmail.com</a> </p>
                    <p>Cell: 201-983-8355 </p>
                    <a className = "contact-links" href="https://www.linkedin.com/in/katerina-papaloukas-scoullos/">Connect on LinkedIn!</a>
                    <br />
                    <a className = "contact-links" href="https://github.com/codingwithkat">Explore my GitHub!</a>
                </Col>
                <Col xs={12} md={6}>
                    <img src={cafedesk} alt="lady on a laptop" className="lady-coder" />
                </Col>
            </Row>
        </Container>
    </div>
);
