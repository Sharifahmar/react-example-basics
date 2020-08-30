import React, { Component } from 'react'
import ThemeContext from './Context';


export class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 'dummy value'
        }
    }


    handleChange = (params) => {
        this.setState({ value: params.target.value })

    }

    handleSubmit = (params) => {
        params.preventDefault();
        console.log('handleSubmit', this.state.value)
    }

    triggerDataToParentEvt = (params) => {
        this.props.callbackChildEvnt(params)
    }

    static contextType = ThemeContext;


    render() {
        return (
            <div>
                {/* <h4>{this.context}</h4> --alternative approach--*/}
                <ThemeContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <h4>{this.context}</h4>
                        </React.Fragment>
                    )}
                </ThemeContext.Consumer>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Label:
                        <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <div>
                    <button onClick={()=>this.triggerDataToParentEvt('Button Clicked from Child')}>Trigger Event To Parent</button>
                </div>
            </div>
        )
    }
}

export default Form
