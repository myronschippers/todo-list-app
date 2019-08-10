import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TodoList from '../TodoList/TodoList';

const sampleList = [
    'Mail Letter',
    'Wash Dishes',
    'Cut Grass',
];

class App extends Component {
    clickAddToList(event) {
        sampleList.push('Pick Up Dinner');
        console.log(sampleList);
    }

    render() {
        return (
            <div className="scaffold">
                <div className="scaffold-hd">
                    <Header />
                </div>
                <div className="scaffold-bd">
                    {JSON.stringify(sampleList)}
                    <button onClick={this.clickAddToList}>Add Sample</button>
                    <TodoList />
                </div>
                <div className="scaffold-ft">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
