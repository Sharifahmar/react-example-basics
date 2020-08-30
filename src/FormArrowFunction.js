import React, { useState, useContext } from 'react'
import ThemeContext from './Context';

const FormArrowFunction = () => {

    const [state, setState] = useState({ value: "dummy value" });

    const context = useContext(ThemeContext);


    const handleChange = (params) => {
        setState({ value: params.target.value })

    }

    const handleSubmit = (params) => {
        params.preventDefault();
        console.log('handleSubmit', state.value)
    }

    // static contextType = ThemeContext;       will not work in functional component thats why introduced useContext Hook
    return (
        <div>

            {/* <ThemeContext.Consumer>
                {(context) => (
                    <React.Fragment>                    instead of this code block we have used useContext() Hook
                        <h4>{this.context}</h4>
                    </React.Fragment>
                )}
            </ThemeContext.Consumer> */}

            <h4>{context}</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Label:
                <textarea value={state.value} onChange={handleChange}></textarea>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormArrowFunction
