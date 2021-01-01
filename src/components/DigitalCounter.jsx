import React from 'react';
import './DigitalCounter.component.css';


export function DigitalCounter(props) {
    return (<div className="digital-counter">{props.value}</div>);
}

export default DigitalCounter;