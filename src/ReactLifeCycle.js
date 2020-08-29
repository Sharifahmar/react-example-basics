import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import ListItemsClassBasedComponent from './ListItemsClassBasedComponent';

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

    componentDidUpdate(prevProps, prevState) {
        if (prevState.date !== this.state.date) {
            console.log("componentDidUpdate method call")
        }
    }

    componentDidCatch(error, info) {
        console.log("componentDidCatch method call") //use this lifecycle in error boundaries so user cant broken UI error instead some component will get load
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
        this.numbers = [1, 2, 3, 4, 5].map(x => x * 2);;
        return (
            <div>
                <h3>This is render</h3>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <h3 onClick={this.unMount}>UnMount</h3>
                <ListItemsClassBasedComponent numberList={this.numbers} />
            </div>
        )
    }
}

export default ReactLifeCycle
