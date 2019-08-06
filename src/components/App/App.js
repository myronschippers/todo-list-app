import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="scaffold">
                <div className="scaffold-hd">
                    <header className="appBar">
                        <div className="appBar-identity">
                            <img src={logo} className="logoIcon" alt="logo" />
                            <h1 className="primeHd">Todo List</h1>
                        </div>
                        <div className="appBar-actions">
                            <nav className="nav">
                                <ul className="nav-list">
                                    <li>
                                        <a href="/Daily" className="navLink">Daily</a>
                                    </li>
                                    <li>
                                        <a href="/Categories" className="navLink">Categories</a>
                                    </li>
                                    <li>
                                        <a href="/Dashboard" className="navLink">Dashboard</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </div>
                <div className="scaffold-bd">
                    <div className="splash">
                        <div className="splash-content">
                            <h2 className="splash-content-hdg">Keep yourself organized</h2>
                            <button className="btn btn_big">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="scaffold-ft">
                    <footer className="appBase">
                        &copy; Todo List 2019
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
