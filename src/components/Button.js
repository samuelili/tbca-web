/**
 * Created by Samuel Li on 2/18/2017.
 */

import React from 'react';
import '../bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../css/button.css';
import '../css/typography.css';
import '../css/animation.css';

export function Button(props) {
    let size = '';
    if (props.size)
        size = 'btn-' + props.size;

    let animate = '';
    if (props.animate) animate = props.animate;

    let type = 'btn-default';
    if (props.colored)
        type = 'btn-colored';

    if (props.href)
        return <a className={['btn', type, size, animate].join(' ')} href={props.href}>{props.children}</a>;
    else
        return <button className={['btn', type, size, animate].join(' ')}>{props.children}</button>;
}

export default Button;