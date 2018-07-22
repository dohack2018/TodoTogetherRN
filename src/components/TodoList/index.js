import React, { Component } from 'react'
import { ListGroup } from 'reactstrap'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'

import './todoList.css'

export class TodoList extends Component {
    render() {
        const { todosByKey, allKeys } = this.props

        const listItems = allKeys.map((key) => {
            const todo = todosByKey[key];

            if(todo.finish) return;

            return <TodoItem title={todo.title} id={todo.key} key={todo.key} ></TodoItem>
        }
        );

        return (
            <div className="TodoList">
                <ListGroup>
                    {listItems}
                </ListGroup>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allKeys: state.todos.allKeys,
        todosByKey: state.todos.byKey
    }
}

export default connect(mapStateToProps)(TodoList);