import React from 'react'
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div id="banner">
            <div className="heroImage">
                <div className="overlay" />
                <h1>
                    I am a
                <Typewriter
                        options={{
                            strings: ['Designer', 'Developer', 'Thinker'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
            </div>
        </div>
    );
}

export default Banner;