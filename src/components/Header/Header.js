import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="appBar">
                <div className="appBar-identity">
                    <img src={logo} className="logoIcon" alt="logo" />
                    <h1 className="primeHdg">Todo List</h1>
                </div>
            </header>
        );
    }
}

export default Header;
