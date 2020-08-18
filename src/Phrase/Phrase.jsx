import React from 'react';

const phraseArray = [
    'Before you do anything, you need to know if it\'s right or wrong.',
    'A fool thinks himself to be wise, but a wise man knows himself to be a fool.',
    'We know what we are, but know not what we may be.'
];

const phrase = (props) => {
    return(
        <div>
            <p>{phraseArray[props.phraseNumber]}</p>
        </div>
    )
}

export default phrase;