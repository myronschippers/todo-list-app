import React, { Component } from 'react';
import './splash.css';

class SplashImg extends Component {
    render() {
        const splashStyling = {
            backgroundImage: `background-image: url("/images/${this.props.bgImg}")`,
        };

        return (
            <div className="splash"
                style={splashStyling}
            >
                <div className="splash-content">
                    <h2 className="splash-content-hdg">{this.props.hdgText}</h2>
                    <button className="btn btn_big">{this.props.btnText}</button>
                </div>
            </div>
        );
    }
}

export default SplashImg;
