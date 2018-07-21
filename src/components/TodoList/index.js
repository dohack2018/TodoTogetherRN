import React, { Component } from 'react'
import { ListGroup } from 'reactstrap'
import { TodoItem } from './TodoItem'
import './todoList.css'

export default class TodoList extends Component {
    render() {
        const { items } = this.props
        const listItems = items.map((todo) =>
            <TodoItem title={todo}></TodoItem>
        );

        return (
            <div class="TodoList">
                <ListGroup>
                    {listItems}
                </ListGroup>
            </div>
        );
    }
}
