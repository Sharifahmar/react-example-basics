import React, { Component } from 'react'

export class ListItemsClassBasedComponent extends Component {
    constructor(props) {
        super(props)
    }

    // similar to getDerivedStateFromProps(props, state) in rew react version but work differently
   componentWillReceiveProps(nextProps, state){
        if(this.props.numberList !== nextProps.numberList){
          console.log("componentWillReceiveProps")
        }
     }

    render() {
        const numbers = this.props.numberList;
        const listItems = numbers.map((number, index) =>
            <li key={index}>{number}</li>
        );
        return (
            <div>
                <div>
                    <ul>{listItems}</ul>
                </div>
            </div>
        )
    }
}

export default ListItemsClassBasedComponent
