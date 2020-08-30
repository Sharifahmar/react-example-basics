import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';

const ReactLifeCycleHooks = () => {
    const [count, setCount] = useState(0)

    const unMount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    useEffect(() => {
        console.log("componentDidMount")

        return () => {
            console.log('Cleaning up...ComponentWillUnmount() call') //ComponentWillUnmount()
        }
    }, []);

    useEffect(() => {
        console.log("componentDidUpdate")
    }, [count]);

    console.log("render method call")

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
            <br />
            <button onClick={unMount}>
                UnMount
      </button>
        </div>
    )
}

export default ReactLifeCycleHooks
