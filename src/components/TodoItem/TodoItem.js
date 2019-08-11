import React, { Component } from 'react';

class TodoItem extends Component {
    changeCompleteStatus = (event) => {
        // update item complete status
    }

    clickDelete = (event) => {
        // delete the todo item
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
                        <h4>todo.name</h4>
                        <p>todo.description</p>
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
