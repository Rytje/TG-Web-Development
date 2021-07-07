import React, { Component } from 'react'

export default class ClassResult extends Component {
    render() {
        return (
            <div>
                <h2>Hello Class {this.props.content}</h2>
            </div>
        )
    }
}
