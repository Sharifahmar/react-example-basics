import React, { Component } from 'react'

export class SelectForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }

    }

    handleSubmit = (params) => {
        params.preventDefault();
        console.log('handleSubmit', this.state.value)
        alert('handleSubmit '+this.state.value)

    }

    handleChange = (params) => {
        this.setState({ value: params.target.value })
        console.log('object', params.target.value)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SelectForm
