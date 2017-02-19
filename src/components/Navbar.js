import React, {Component} from 'react';
import '../css/navbar.css'
import '../css/typography.css';

export class Navbar extends Component {
    componentDidMount() {
        let navbar = document.querySelector('.navbar-custom');

        function processScroll() {
            if (window.scrollY < 5) // give safe margin
                navbar.classList.add('at-top');
            else
                navbar.classList.remove('at-top');
        }

        processScroll();
        window.addEventListener('scroll', processScroll);
    }

    render() {
        //noinspection CheckTagEmptyBody
        return (<nav className="navbar navbar-custom navbar-fixed-top at-top">
            <div className="container-fluid" style={{maxWidth: 960}}>
                <div className="navbar-header">
                    <button type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"
                            className="navbar-toggle collapsed"><span className="icon-bar"></span><span
                        className="icon-bar"></span><span className="icon-bar"></span></button>
                    <a href="/" className="navbar-brand">TBCA</a>
                </div>
                <div id="navbar-collapse" className="collapse navbar-collapse text-right">
                    <ul className="nav navbar-nav pull-right">
                        <li><a href="/job.html" className="text-right">Job</a></li>
                        <li><a href="/about.html" className="text-right">About</a></li>
                    </ul>
                </div>
            </div>
        </nav>);
    }
}

export default Navbar;