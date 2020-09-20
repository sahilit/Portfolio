import React from 'react'

export default function AboutMe() {
    return (
        <div id="about-me">
            <div className="container" id="section2">
                <div className="row">
                    <div className="col-sm-5">
                        <img src="images/img1.jpg" alt="self" />
                    </div>
                    <div className="col-sm-7">
                        <h1>ABOUT ME</h1>
                        <p>My name is Sahil Singh and I am a Front End Developer living in Mumbai, India.</p>
                        <p>My work include Producing high quality responsive websites and exceptional user interface.</p>
                        <p>When I'm not writing code you can find me playing Chess, Table Tennis or in the Gym.</p>
                        <p>I'd love to get coffee and get to know you, so don’t hesitate to get in touch.</p>
                        <div className="social-icon">
                            <p><strong>You can check my Social profile here:</strong></p>
                            <a href="https://www.linkedin.com/in/sahil-singh-3862bb116/" target="_blank;" className="fa fa-linkedin"></a>
                            <a href="https://codepen.io/sahilsingh/" target="_blank;" className="fa fa-codepen"></a>
                            <a href="https://www.facebook.com/sahil.singh.16" target="_blank;" className="fa fa-facebook"></a>
                            <a href="https://twitter.com/Tech_boy_sahil/media" target="_blank;" className="fa fa-twitter"></a>
                            <a href="https://plus.google.com/101594834166062054183" target="_blank;" className="fa fa-google"></a>
                            <a href="https://www.quora.com/profile/Sahil-Singh-540" target="_blank;" className="fa fa-quora"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}