import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export class ReactLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };

        this.tick = this.tick.bind(this);
        this.unMount = this.unMount.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount method call")
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log("componentWillUnmount method call")
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    unMount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    render() {
        console.log("render method call");
        return (
            <div>
                <h3>This is render</h3>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <h3 onClick={this.unMount}>UnMount</h3>
                <div id='renderhere'></div>
            </div>
        )
    }
}

export default ReactLifeCycle
