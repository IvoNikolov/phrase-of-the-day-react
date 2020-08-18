import React from 'react';

const phrase = (props) => {
    return(
        <div>
            <p>Created by {props.name}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default phrase;