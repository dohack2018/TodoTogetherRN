import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavMenue extends React.Component {
  render() {
    return (
      <div>
      <div class = "navMenue"> </div>
        <Nav horizontal>
          <NavItem>
            <NavLink disabled href="#">ToDoTogether</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">About us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Contact us</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}