import React from 'react';
import '../css/misc.css';

export function Line(props) {
    return <div className={"spacer " + props.shade}></div>
}

export function Space(props) {
    return <div style={{height: props.space}}></div>
}