import React, { Component } from 'react'
import { Button, ListGroupItem } from 'reactstrap'
import './todoItem.css'

export class TodoItem extends Component {
    render() {
        return (
            <ListGroupItem className="TodoItem">
                <div class="TodoItem__title">
                    {this.props.title}
                </div>
                <div class="TodoItem__action">
                    <Button color="primary">
                        Action
                    </Button>
                </div>
            </ListGroupItem>
        );
    }
}
