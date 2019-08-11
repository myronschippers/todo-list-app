import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        name: '',
        description: '',
    };

    changeField = (event, fieldName) => {
        const stateObj = {};
        stateObj[fieldName] = event.target.value;

        this.setState(stateObj);
    }

    clickAddTodo = (event) => {
        this.props.addTodoCallback(this.state);
    }

    render() {
        return (
            <div>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={(event) => this.changeField(event, 'name')}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Description:
                        <textarea
                            onChange={(event) => this.changeField(event, 'description')}
                        />
                    </label>
                </div>
                <div>
                    <button onClick={this.clickAddTodo}>Add Todo</button>
                </div>
            </div>
        );
    }
}

export default AddTodo;
