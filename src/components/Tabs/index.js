import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import TodoList from '../TodoList';
import classnames from 'classnames';
import WorkingList from '../WorkingList';
import './tabs.css';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  
  render() {
    return (
      <div className="tabs">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
                Unfinished Tasks
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
                Working
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <TodoList></TodoList>
          </TabPane>
          <TabPane tabId="2">
            <WorkingList>
            </WorkingList>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}