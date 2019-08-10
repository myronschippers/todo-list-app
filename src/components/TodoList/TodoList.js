import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.props.list)}
            </div>
        );
    }
}

export default TodoList;
