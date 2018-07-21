import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export class TodoAction extends Component {
    constructor(props) {
        super(props);

        console.log(this.props)
        
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
            <div className="TodoItem__action">
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
        );
    }
}
