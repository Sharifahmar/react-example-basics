import React, { Component } from 'react'
import Form from './Form'

export class ChildParentDataShareComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }


    receiveEvnt = (params) => {
        this.setState({ value: params });
        alert(`Message "${this.state.value}" receive from child component `)
    }

    render() {
        return (
            <div>
                <Form callbackChildEvnt={this.receiveEvnt} />
            </div>
        )
    }
}

export default ChildParentDataShareComponent
