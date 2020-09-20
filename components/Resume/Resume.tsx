import React from 'react'

export default function Resume() {
    return (
        <div id="resume">
            <div className="container" id="section4">
                <h1>RESUME</h1>
                <p>Click on the below button to get my resume in the format you want to download and for short recap of my resume you can view the details below.</p>
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog" style={{ top: "10%" }} >
                        <div className="modal-content" >
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title" id="myModalLabel">DOWNLOAD RESUME</h4>
                            </div>
                            <div className="modal-body">
                                <a href="resume/Sahil_Singh_Resume.pdf" download><img src="images/pdf.png" alt="pdf" /></a>
                                <a href="resume/Sahil_Singh_Resume.doc" download><img src="images/doc.png" alt="doc" /></a>
                                <a href="resume/Sahil_Singh_Resume.txt" download><img src="images/txt.png" alt="txt" /></a>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button id="myBtn" className="btn btn-primary btn-lg" data-target="#myModal">DOWNLOAD RESUME</button>

                <div className="box-rotate"></div>
            </div>
        </div>
    )
}
