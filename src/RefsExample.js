import React, { Component } from 'react'
import SelectForm from './SelectForm';

export class RefsExample extends Component {
    constructor(props) {
        super(props)

        this.textInput = React.createRef();
    }

    focusTextInput = () => {
        this.textInput.current.focus();
        console.log('textbox value '+ this.textInput.current.value)
    }


    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>



        )
    }
}

export default RefsExample
