import React, { Component } from 'react';
import { connect } from 'react-redux'

export class CurrentWorkig extends Component {
    render() {
        let text = "You are working on nothing"

        if(this.props.user.working !== undefined) {
            text = "You are working on " + this.props.todos.byKey[this.props.user.working].title;
        }

        return (
            <div>
                {text}
            </div>
        );
    }
}

function mapDispatchToProps(state) {
    return {
        user: state.user,
        todos: state.todos
    }
}

export default connect(mapDispatchToProps)(CurrentWorkig);