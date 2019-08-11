import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component {
    render() {
        const listItems = this.props.list.map((item, index) => {
            return <TodoItem
                key={index}
                todo={item}
                index={index}
                completeCallback={this.props.completeCallback}
                deleteCallback={this.props.deleteCallback}
            />
        });

        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default TodoList;
