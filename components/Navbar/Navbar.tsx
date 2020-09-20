import React from 'react'

export default function Navbar() {
    return (
        <div id="navbar">
            <nav className="navbar navbar-inverse" data-spy="affix" data-offset-top="630">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            <img src="images/logo.jpg" alt="logo" />
                        SA<span>HIL</span>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#section1">HOME</a></li>
                            <li><a href="#about-me">ABOUT ME</a></li>
                            <li><a href="#skills">SKILLS</a></li>
                            <li><a href="#resume">RESUME</a></li>
                            <li><a href="#portfolio">PORTFOLIO</a></li>
                            <li><a href="#contact">CONTACT ME</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}