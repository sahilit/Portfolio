import React from 'react'

export default function Portfolio() {
    return (
        <div id="portfolio">
            <div className="container" id="section6">
                <h1>PORTFOLIO</h1>
                <p>Below are some of my projects and sample websites which I have created.<br />
                    You can sort them by clicking on the categories given in the first block.</p>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="filter1">
                            <h4>FILTER BY CATEGORY</h4>
                            <ul>
                                <li><a href="#section6" className="filter-button" data-filter="all">All</a></li>
                                <li><a href="#section6" className="filter-button" data-filter="jquery">JQuery</a></li>
                                <li><a href="#section6" className="filter-button" data-filter="bootstrap">Bootstrap</a></li>
                                <li><a href="#section6" className="filter-button" data-filter="javascript">Javascript</a></li>
                                <li><a href="#section6" className="filter-button" data-filter="angularjs">AngularJS</a></li>
                                <li><a href="#section6" className="filter-button" data-filter="sample">Sample Websites</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4 filter javascript jquery bootstrap">
                        <a href="memory-game/index.html" target="_blank">
                            <img src="images/port2.jpg" alt="port2" />
                            <div className="img-hover">
                                <i className="fa fa-link" aria-hidden="true"></i>
                                <h2>Memory Game</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-4 filter javascript angularjs">
                        <a href="https://codepen.io/sahilsingh/pen/BxdPjb" target="_blank">
                            <img src="images/port3.jpg" alt="port3" />
                            <div className="img-hover">
                                <i className="fa fa-link" aria-hidden="true"></i>
                                <h2>To do List</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-4 filter javascript jquery">
                        <a href="https://codepen.io/sahilsingh/pen/zLEwbX" target="_blank">
                            <img src="images/port4.jpg" alt="port4" />
                            <div className="img-hover">
                                <i className="fa fa-link" aria-hidden="true"></i>
                                <h2>Pixel Art Maker</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-4 filter jquery sample">
                        <a href="project/Tour &amp; Travel Guide/index.html" target="_blank">
                            <img src="images/port5.jpg" alt="port5" />
                            <div className="img-hover">
                                <i className="fa fa-link" aria-hidden="true"></i>
                                <h2>Tour and Travel Guide</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-4 filter jquery sample">
                        <a href="project/Coeluso Music App/index.html" target="_blank">
                            <img src="images/port6.jpg" alt="port6" />
                            <div className="img-hover">
                                <i className="fa fa-link" aria-hidden="true"></i>
                                <h2>Coeluso Music App</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-4 filter jquery sample">
                        <a href="project/mi.com/index.html" target="_blank">
                            <img src="images/port7.jpg" alt="port7" />
                            <div className="img-hover">
                                <i className="fa fa-link" aria-hidden="true"></i>
                                <h2>Mobile Store</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-4 filter jquery sample">
                        <a href="project/Home/index.html" target="_blank">
                            <img src="images/port8.jpg" alt="port8" />
                            <div className="img-hover">
                                <i className="fa fa-link" aria-hidden="true"></i>
                                <h2>Wapik Developer</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-4 filter jquery sample bootstrap">
                        <a href="project/Bootstrap practice/index.html" target="_blank">
                            <img src="images/port9.jpg" alt="port9" />
                            <div className="img-hover">
                                <i className="fa fa-link" aria-hidden="true"></i>
                                <h2>The Modernist</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
