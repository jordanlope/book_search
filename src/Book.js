import React from 'react';

export default function Book(props) {
    return (
        <div className="book">
            <hr></hr>
            {props.title}
            <br></br>
            {props.textSnippet}
            <hr></hr>
        </div>
    )
}