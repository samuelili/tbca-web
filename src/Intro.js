import React, {Component} from 'react';
import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Base extends Component {
    render() {
        return (
            <div className="intro">
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class AnimateText extends Component {
    constructor(props) {
        super();
        this.titleChars = props.title.split('');
        this.titleChars.unshift('');
        this.interval = props.interval;
        this.state = {text: ""};
    }

    componentDidMount() {
        let index = 0;
        let ref = this;

        this.timerId = setInterval(function() {
            if (index !== ref.titleChars.length) {
                ref.setState({
                    text: ref.state.text + ref.titleChars[index]
                });
                index++;
            } else
                clearInterval(ref.timerId);
        }, this.interval);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <h1 className="animate-intro-title">{this.state.text}</h1>
        )
    }
}

export default {
    Base: Base,
    AnimateText: AnimateText
};