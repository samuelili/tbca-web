/**
 * Created by Samuel Li on 2/18/2017.
 */
import React, {Component} from 'react';
import '../bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../css/typography.css';

export class Container extends Component {
    constructor(props) {
        super();
        this.background = props.bgColor ? props.bgColor : '';
        this.maxWidth = props.width ? props.width : '960px';
    }

    render() {
        const style = {
            maxWidth: this.maxWidth
        };
        return (
            <div className={"col-xs-12 " + this.background}>
                <div className="container-fluid text-center"style={style}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Container;