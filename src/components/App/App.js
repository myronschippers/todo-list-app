import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="scaffold">
                <div className="scaffold-hd">
                    <Header />
                </div>
                <div className="scaffold-bd">
                    MAIN BODY
                </div>
                <div className="scaffold-ft">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
