import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        const listItems = this.props.list.map((item, index) => {
            return <li>{item.name}</li>
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
