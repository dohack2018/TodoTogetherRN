import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import TodoItem from '../TodoList/TodoItem'
import { connect } from 'react-redux'

import './workingList.css'

export class WorkingList extends Component {
    render() {
        const { memberKeys, membersByKey, todos } = this.props
        const memberList = memberKeys.map((memberKey) => {
        const member = membersByKey[memberKey];

        if(member.working === undefined) return;


        return <ListGroupItem key={member.id}>{member.name} working on: {todos[member.working].title}</ListGroupItem>
    })
        
        return (
            <div className="WorkingList">
                <ListGroup>
                    {memberList}
                </ListGroup>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        memberKeys: state.group.members.allKeys,
        membersByKey: state.group.members.byKey,
        todos: state.todos.byKey
    }
}

export default connect(mapStateToProps)(WorkingList);
