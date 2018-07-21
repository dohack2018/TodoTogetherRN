import React, { Component } from 'react'
import { Button } from 'reactstrap'
import './groupInfo.css'

export default class GroupInfo extends Component {
    render() {
        const groupName = 'Kibibytes';
        return (
            <div className="groupInfo">
                You are in group {groupName}
            
        <Button> 
            change group
        </Button>
        </div>
        );
    }
}
