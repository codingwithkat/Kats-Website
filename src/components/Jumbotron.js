import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import jumbocode from '../images/jumbocode.JPG';


const Styles = styled.div`
    .jumbotron {
        background: url(${jumbocode}) no-repeat fixed bottom;
        background-size: cover;
        color: white;
        height: 420px;
        position: relative;
        padding-top: 4px;
    }

`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
            </Container>
        </Jumbo>
    </Styles>
)

