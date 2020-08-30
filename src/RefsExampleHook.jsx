import React, { useRef } from 'react'

const RefsExampleHook = () => {

    const textInput = useRef(null);

    const focusTextInput = () => {
        textInput.current.focus();
        console.log('textbox value ' + textInput.current.value)
    }

    return (
        <div>
            <input
                type="text"
                ref={textInput} />
            <input
                type="button"
                value="Focus the text input"
                onClick={focusTextInput}
            />
        </div>
    )
}

export default RefsExampleHook