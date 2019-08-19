import React, { Component } from 'react';
import './TodoItem.css';

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
                <div className="todoPill">
                    <div>
                        <input
                            type="checkbox"
                            name="complete"
                            checked={todo.isComplete}
                            onChange={this.changeCompleteStatus}
                        />
                    </div>
                    <div>
                        <h4 className="todoPill-hdg">{todo.name}</h4>
                        <p className="todoPill-sub">{todo.description}</p>
                    </div>
                    <div>
                        <button
                            className="btn btn_warning"
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
