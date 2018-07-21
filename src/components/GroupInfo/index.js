import React, { Component } from 'react'
import { Button } from 'reactstrap'
import './groupInfo.css'

export default class GroupInfo extends Component {
    render() {
        const groupName = 'Kibibytes';
        return (
            <div className="groupInfo">
                <h2>You are in group</h2> <h3>{groupName}</h3>
            
        <Button> 
            Change group
        </Button>
        </div>
        );
    }
}
