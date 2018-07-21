import React, { Component } from 'react'

export class GroupInfo extends Component {
    render() {
        const groupName = 'Kibibytes';
        return (
            <li>
                You are in group {groupName}
            </li>
        );
    }
}