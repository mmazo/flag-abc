import React from "react";
import './flags/flags.css';

function WordToFlag({word}) {
    const charArray = word.split('');

    let index = 0;
    const flags = charArray.map(
        (char) => {
            index = index + 1;
            return (<div key={index} className={'ics-flag ics-' + char.toLowerCase()}></div>);
        }
    );

    return(<div>{flags}</div>);
}

export default WordToFlag;
