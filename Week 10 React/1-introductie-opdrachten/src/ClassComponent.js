import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ""};
      }

    render() {

        const handleInput = (event) => this.setState({
            input : event.target.value
        });

        return (
            <div>
                {/* <h2>Class Component + input: {this.state.input}</h2> */}
                <h2>Class Component + input: {this.props.state}</h2>
                <input onChange = {this.props.onChange} value = {this.props.state} />
            </div>
        )
    }
}
