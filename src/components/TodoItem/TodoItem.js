import React, { Component } from 'react';

class TodoItem extends Component {
    changeCompleteStatus = (event) => {
        const toggledCompleteStatus = !this.props.todo.isComplete;
        const todoIndex = this.props.index;

        this.props.completeCallback(toggledCompleteStatus, todoIndex);
    }

    clickDelete = (event) => {
        const todoIndex = this.props.index;

        this.props.deleteCallback(todoIndex);
    }

    render() {
        const {
            todo,
        } = this.props;

        return (
            <li>
                <div>
                    <div>
                        <input
                            type="checkbox"
                            name="complete"
                            checked={todo.isComplete}
                            onChange={this.changeCompleteStatus}
                        />
                    </div>
                    <div>
                        <h4>{todo.name}</h4>
                        <p>{todo.description}</p>
                    </div>
                    <div>
                        <button
                            onClick={this.clickDelete}
                        >
                            Delete
                        </button>
                    </div>
                </div> 
            </li>
        );
    }
}

export default TodoItem;
