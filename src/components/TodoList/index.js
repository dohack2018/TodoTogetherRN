import React, { Component } from 'react'
import { TodoItem } from './TodoItem'

export default class TodoList extends Component {
    render() {
        const { items } = this.props
        const listItems = items.map((todo) =>
            <TodoItem title={todo}></TodoItem>
        );

        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}
