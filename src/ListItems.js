import React from 'react'

function ListItems(props) {
    const numbers = props.numberList;
    const listItems = numbers.map((number,index) =>
        <li key={index}>{number}</li>
    );
    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}



export default ListItems

