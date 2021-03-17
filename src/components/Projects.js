/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "../css/Projects.css";
import comic from "../images/comic.png";
import comic2 from "../images/comic2.png";
import artemis from "../images/artemis.png";
import skincare from "../images/skincare.png";
import weather from "../images/weather.png";


export const Projects = () => (
    <div>
        <h1>My Projects:</h1>
        <div className="row">
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Comic Sans the Comic Maker!</h5>
                <p className="card-text">
                <img className="card-img-top" src={comic} alt="project"/>
                <img className="card-img-top" src={comic2} alt="project"/>
                </p>
                <a href="http://comicsans-app.herokuapp.com/" className="btn btn-primary">Comic Sans Website</a>
                <a href="https://github.com/comic-sans-app/web-app" className="btn btn-primary">github</a>
            </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Weather App</h5>
                <img className="card-img-top" src={weather} alt="project"/>
                <a href="https://react-city-weather-app.netlify.app/" className="btn btn-primary">Weather App</a>
                <a href="https://github.com/codingwithkat/city-web-app" className="btn btn-primary">github</a>
            </div>
            </div>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">JIL Skincare e-commerce</h5>
                <img className="card-img-top" src={skincare} alt="project"/>
                <a href="https://gh-skincare1.herokuapp.com/" className="btn btn-primary">JIL Website</a>
                <a href="https://github.com/GH-Skincare/skinslack" className="btn btn-primary">github</a>
            </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Artemis Workout Library</h5>
                <img className="card-img-top" src={artemis} alt="project"/>
                <a href="https://artemis-workouts.herokuapp.com/home" className="btn btn-primary">Artemis Website</a>
                <a href="https://github.com/codingwithkat/artemiscpt" className="btn btn-primary">github</a>
            </div>
            </div>
        </div>
        </div>
    </div>
);
