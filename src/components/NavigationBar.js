import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../css/index.css";
import resume from "../images/Resume.jpg";
import styled from "styled-components";

const Styles = styled.div`
    .nav-style {
        padding: 20px;
    }
    .navbar {
        background: aliceblue;
        padding-left: 25px;
        padding-right: 25px;

    }
    .navbar-brand, .navbar-nav .nav-link {
        color: #111d5e;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        font-size: 24px;
        margin: 10px;


        &:hover{
            color: #ff2e63;
        }
    }
       @media only screen and (max-width: 500px){
            .navbar-brand {
            font-size: 16px;
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg" className="nav-style">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/"><i className="fas fa-terminal"></i> Katerina Scoullos</Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/"><i className="fas fa-home"></i></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={resume} target="_blank">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/inspiration">Inspiration</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/certificates">Coursework</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles >
);


