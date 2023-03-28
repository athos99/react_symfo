import React from 'react';

export default function Square(props) {
    console.log('render square '+ props.value);
    return (
        <button className="square" onClick={props.onClick} >
            {props.value}
        </button>
    );
}


