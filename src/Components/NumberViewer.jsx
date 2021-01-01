import React from 'react';
import './NumberViewer.component.css';


export function NumberViewer(props) {
    return (<button className="digital-number">{props.value}</button>);
}

export default NumberViewer;