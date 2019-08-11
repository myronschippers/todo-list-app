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
            <div className="box">
                <div className="vr vr_x2">
                    <label className="field">
                        <span className="field-label">Name:</span>
                        <input
                            className="field-input"
                            type="text"
                            placeholder="Name"
                            onChange={(event) => this.changeField(event, 'name')}
                        />
                    </label>
                    <label className="field">
                        <span className="field-label">Description:</span>
                        <textarea
                            className="field-input field-input_lrg"
                            onChange={(event) => this.changeField(event, 'description')}
                        />
                    </label>
                </div>
                <div>
                    <button
                        className="btn"
                        onClick={this.clickAddTodo}
                    >
                        Add Todo
                    </button>
                </div>
            </div>
        );
    }
}

export default AddTodo;
