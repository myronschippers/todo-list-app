import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TodoList from '../TodoList/TodoList';

class App extends Component {
    state = {
        sampleList: [
            {
                name: 'Mail Letter',
                description: 'A sample description of our todo.',
                isComplete: false,
            },
            {
                name: 'Wash Dishes',
                description: 'A sample description of our todo.',
                isComplete: true,
            },
            {
                name: 'Cut Grass',
                description: 'A sample description of our todo.',
                isComplete: false,
            },
        ],
    }

    clickAddToList = (event) => {
        const newSampleList = this.state.sampleList;
        newSampleList.push('Pick Up Dinner');
        this.setState({
            sampleList: newSampleList,
        })
        console.log(this.state.sampleList);
    }

    deleteTodoFromList = (index) => {
        let newSampleList = this.state.sampleList;
        newSampleList.splice(index, 1);
    
        this.setState({
            sampleList: newSampleList,
        });
    }
    
    completeTodo = (isComplete, index) => {
        let newSampleList = this.state.sampleList;
        newSampleList[index].isComplete = isComplete;
    
        this.setState({
            sampleList: newSampleList,
        })
    }

    render() {
        return (
            <div className="scaffold">
                <div className="scaffold-hd">
                    <Header />
                </div>
                <div className="scaffold-bd">
                    <TodoList
                        list={this.state.sampleList}
                        completeCallback={this.completeTodo}
                        deleteCallback={this.deleteTodoFromList}
                    />
                </div>
                <div className="scaffold-ft">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
