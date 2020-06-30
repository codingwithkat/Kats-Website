import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
    .navbar {
        background: aliceblue;
        padding-left: 25px;
        padding-right: 25px;
        
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: #111d5e;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        font-size: 23px;
        margin: 2px;
        

        &:hover{
            color: #ff2e63;
        }
    }
`;


export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg" className="nav-style">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/">Katerina Papaloukas</Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/inspiration">My Inspiration</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/certificates">Relevant Coursework</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>

);
