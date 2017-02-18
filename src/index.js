import React from 'react';
import ReactDOM from 'react-dom';
import Intro, {AnimateText} from './components/Intro';
import Container from './components/Container';
import {Spacer} from './components/Misc';
import './css/typography.css';

ReactDOM.render(
    <div id="root">
        <Intro>
            <h3>We are</h3>
            <AnimateText text="tbca" interval="376"/>
            <p>Utilizing blockchain technologies to change the world.</p>
        </Intro>
        <Container bgColor='bg-primary' width="480px">
            <div className="row margin-top light">
                <h1>About Us</h1>
                <Spacer shade="light"/>
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus id
                nunc porta ornare.
                Duis et pulvinar ante. Aenean in tortor vel diam vehicula lacinia eget malesuada diam.
                Phasellus blandit at sem vitae consectetur.
            </div>
            <div className="row margin-bottom watch-animate">
                <div className="btn btn-default btn-xl fade-bottom animate">Learn More</div>
            </div>
        </Container>
        <Container width="960px">Hey!</Container>
    </div>,
    document.querySelector('#app')
);