import React, { Component } from 'react';
import './splash.css';

class SplashImg extends Component {
    render() {
        return (
            <div className="splash">
                <div className="splash-content">
                    <h2 className="splash-content-hdg">Keep yourself organized</h2>
                    <button className="btn btn_big">Get Started</button>
                </div>
            </div>
        );
    }
}

export default SplashImg;
