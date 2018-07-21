import React, { Component } from 'react'

export default class GroupInfo extends Component {
    render() {
        const groupName = 'Kibibytes';
        return (
            <div>
                You are in group {groupName}
            
        <button> 
            change group
        </button>
        </div>
        );
    }
}