import React from "react";
import { Container } from "react-bootstrap";
import "../css/Layout.css"

export const Layout = props => <Container className="container-layout">{props.children}</Container>;
