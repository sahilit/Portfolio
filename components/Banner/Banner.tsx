import React from 'react'
//@ts-ignore
import Typewriter from 'typewriter-effect';

export default function Banner() {
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