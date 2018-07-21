import React, { Component } from 'react'
import { Button, ListGroupItem, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import './todoItem.css'

export class TodoItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          actionsOpen: false
        };
      }
    
      toggle() {
        this.setState({
            actionsOpen: !this.state.actionsOpen
        });
      }
    
    render() {
        return (
            <ListGroupItem className="TodoItem">
                <div class ="Circle">
                </div>
                <div class="TodoItem__title">
                    {this.props.title}
                </div>
                <div class="TodoItem__action">
                    <ButtonDropdown isOpen={this.state.actionsOpen} toggle={this.toggle.bind(this)}>
                        <DropdownToggle caret>
                            Actions
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Start Learning</DropdownItem>
                            <DropdownItem>Mark as finished</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </div>
            </ListGroupItem>
        );
    }
}


